import { useState, useEffect } from 'react';
import MovieList from '../components/MovieList';
import Filters from '../components/Filters';
import SearchBar from '../components/SearchBar';
import { fetchPopularMovies, fetchGenres, searchMovies, fetchTopRatedMovies } from '../api';

const Home = () => {
  const [popularMovies, setPopularMovies] = useState([]);
  const [topRatedMovies, setTopRatedMovies] = useState([]);
  const [genres, setGenres] = useState([]);
  const [selectedGenre, setSelectedGenre] = useState('');
  const [searchQuery, setSearchQuery] = useState('');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);

      // Fetch genres
      const genreData = await fetchGenres();
      setGenres(genreData);

      // Fetch popular movies
      let popularData;
      if (searchQuery) {
        popularData = await searchMovies(searchQuery);
      } else {
        popularData = await fetchPopularMovies();
      }
      const filteredPopularMovies = selectedGenre
        ? popularData.results.filter((movie) =>
            movie.genre_ids.includes(parseInt(selectedGenre))
          )
        : popularData.results;
      setPopularMovies(filteredPopularMovies);

      // Fetch top-rated movies
      const topRatedData = await fetchTopRatedMovies();
      const filteredTopRatedMovies = selectedGenre
        ? topRatedData.results.filter((movie) =>
            movie.genre_ids.includes(parseInt(selectedGenre))
          )
        : topRatedData.results;
      setTopRatedMovies(filteredTopRatedMovies);

      setLoading(false);
    };

    fetchData();
  }, [selectedGenre, searchQuery]);

  return (
    <div className="container">
      <h1>FIND YOUR POPULAR MOVIES</h1>
      <div className="controls">
        <SearchBar setSearchQuery={setSearchQuery} />
        <Filters
          genres={genres}
          selectedGenre={selectedGenre}
          setSelectedGenre={setSelectedGenre}
        />
      </div>

      {/* Fan Favorites Section */}
      <section className="section">
        <h2 className="section-title">
          Fan Favorites <span className="section-arrow">➔</span>
        </h2>
        {loading ? (
          <p>Loading...</p>
        ) : (
          <div className="horizontal-scroll">
            <MovieList movies={popularMovies} />
          </div>
        )}
      </section>

      {/* Popular Interests Section */}
      <section className="section">
        <h2 className="section-title">
          Popular Interests <span className="section-arrow">➔</span>
        </h2>
        {loading ? (
          <p>Loading...</p>
        ) : (
          <div className="horizontal-scroll">
            <MovieList movies={topRatedMovies} />
          </div>
        )}
      </section>
    </div>
  );
};

export default Home;