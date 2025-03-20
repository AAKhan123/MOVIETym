import { Link } from 'react-router-dom';

const MovieCard = ({ movie }) => {
  return (
    <div className="movie-card">
      <Link to={`/movie/${movie.id}`}>
        <img
          src={`https://image.tmdb.org/t/p/w200${movie.poster_path}`}
          alt={movie.title}
          onError={(e) => (e.target.src = 'https://via.placeholder.com/200x300')}
        />
        <div className="movie-info">
          <h3>{movie.title}</h3>
          <p>
            <span className="star">★</span> {movie.vote_average.toFixed(1)}
          </p>
        </div>
      </Link>
      <div className="movie-actions">
        <button className="action-btn watch-btn">Watch options</button>
        <button className="action-btn trailer-btn">▶ Trailer</button>
      </div>
    </div>
  );
};

export default MovieCard;