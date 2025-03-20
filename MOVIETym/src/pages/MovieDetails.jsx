import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { fetchMovieDetails } from '../api';

const MovieDetails = () => {
  const { id } = useParams();
  const [movie, setMovie] = useState(null);
  const [isFavorite, setIsFavorite] = useState(false);
  const [loading, setLoading] = useState(true);

  const checkIsFavorite = () => {
    const favorites = JSON.parse(localStorage.getItem('favorites')) || [];
    console.log('Checking if movie is favorite. Favorites:', favorites, 'Movie ID:', id);
    setIsFavorite(favorites.some((fav) => fav.id === parseInt(id)));
  };

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      const movieData = await fetchMovieDetails(id);
      console.log('Fetched movie data in MovieDetails:', movieData);
      setMovie(movieData);
      setLoading(false);

      checkIsFavorite();
    };
    fetchData();

    window.addEventListener('storage', checkIsFavorite);
    return () => window.removeEventListener('storage', checkIsFavorite);
  }, [id]);

  const toggleFavorite = () => {
    if (!movie) {
      console.error('Movie data is not available yet.');
      return;
    }

    let favorites = JSON.parse(localStorage.getItem('favorites')) || [];
    console.log('Current favorites before toggle:', favorites);

    if (isFavorite) {
      favorites = favorites.filter((fav) => fav.id !== parseInt(id));
      console.log('Removed from favorites. New favorites:', favorites);
    } else {
      const movieToSave = {
        id: parseInt(id),
        title: movie.title,
        poster_path: movie.poster_path,
        vote_average: movie.vote_average,
        release_date: movie.release_date,
      };
      console.log('Movie to save:', movieToSave);
      favorites.push(movieToSave);
      console.log('Added to favorites. New favorites:', favorites);
    }

    localStorage.setItem('favorites', JSON.stringify(favorites));
    console.log('Saved to localStorage. Updated favorites:', JSON.parse(localStorage.getItem('favorites')));
    setIsFavorite(!isFavorite);

    window.dispatchEvent(new Event('storage'));
  };

  if (loading) return <div className="container">Loading...</div>;
  if (!movie) return <div className="container">Movie not found.</div>;

  return (
    <div className="container movie-details">
      <h1>{movie.title}</h1>
      <img
        src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
        alt={movie.title}
        onError={(e) => (e.target.src = 'https://via.placeholder.com/500x750')}
      />
      <p>{movie.overview}</p>
      <p><strong>Rating:</strong> {movie.vote_average.toFixed(1)}</p>
      <p><strong>Release Date:</strong> {movie.release_date}</p>
      <p>
        <strong>Cast:</strong>{' '}
        {movie.credits?.cast?.slice(0, 5).map((actor) => actor.name).join(', ') || 'N/A'}
      </p>
      <button onClick={toggleFavorite} className="favorite-btn" disabled={loading}>
        {isFavorite ? 'Remove from Favorites' : 'Add to Favorites'}
      </button>
    </div>
  );
};

export default MovieDetails;