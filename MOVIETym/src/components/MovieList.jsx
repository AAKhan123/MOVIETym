import MovieCard from './MovieCard';

const MovieList = ({ movies }) => {
  return (
    <div className="movie-grid">
      {movies.length > 0 ? (
        movies.map((movie) => <MovieCard key={movie.id} movie={movie} />)
      ) : (
        <p>No movies found.</p>
      )}
    </div>
  );
};

export default MovieList;