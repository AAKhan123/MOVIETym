import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import MovieCard from '../components/MovieCard';

const Favorites = () => {
  const [favorites, setFavorites] = useState([]);
  const location = useLocation();

  const loadFavorites = () => {
    const storedFavorites = JSON.parse(localStorage.getItem('favorites')) || [];
    console.log('Loaded favorites in Favorites.jsx:', storedFavorites);
    setFavorites(storedFavorites);
  };

  useEffect(() => {
    console.log('Favorites page mounted or route changed. Loading favorites...');
    loadFavorites();

    const handleStorageChange = () => {
      console.log('Storage event triggered. Reloading favorites...');
      loadFavorites();
    };

    window.addEventListener('storage', handleStorageChange);
    return () => window.removeEventListener('storage', handleStorageChange);
  }, [location]);

  const removeFavorite = (movieId) => {
    const updatedFavorites = favorites.filter((fav) => fav.id !== movieId);
    console.log('Removing favorite with ID:', movieId, 'New favorites:', updatedFavorites);
    localStorage.setItem('favorites', JSON.stringify(updatedFavorites));
    setFavorites(updatedFavorites);
    window.dispatchEvent(new Event('storage'));
  };

  const clearFavorites = () => {
    console.log('Clearing all favorites...');
    localStorage.removeItem('favorites');
    setFavorites([]);
    window.dispatchEvent(new Event('storage'));
  };

  return (
    <div className="container">
      <h1>FAVORITE MOVIES</h1>
      <button onClick={clearFavorites} className="favorite-btn clear-btn">
        Clear All Favorites
      </button>
      {favorites.length > 0 ? (
        <div className="movie-grid">
          {favorites.map((movie) => (
            <div key={movie.id} className="movie-card">
              <Link to={`/movie/${movie.id}`}>
                <img
                  src={`https://image.tmdb.org/t/p/w200${movie.poster_path}`}
                  alt={movie.title}
                  onError={(e) => (e.target.src = 'https://via.placeholder.com/200x300')}
                />
                <h3>{movie.title}</h3>
                <p>Rating: {movie.vote_average.toFixed(1)}</p>
              </Link>
              <button
                onClick={() => removeFavorite(movie.id)}
                className="favorite-btn remove-btn"
              >
                Remove from Favorites
              </button>
            </div>
          ))}
        </div>
      ) : (
        <p>No favorite movies yet. Add some from the movie details page!</p>
      )}
    </div>
  );
};

export default Favorites;