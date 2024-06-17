import MovieCard from "../MovieCard/MovieCard";
import "./styles.css";

function MoviesGrid({ movieList }) {
  return (
    <div className="movieList-container">
      {movieList.map((movie) => (
        <MovieCard
          movieId={movie.id}
          key={movie.id}
          imgUrl={`https://image.tmdb.org/t/p/w300${movie.poster_path}`}
          name={movie.title}
          score={movie.vote_average}
          year={movie.release_date?.slice(0, 4)}
        />
      ))}
    </div>
  );
}

export default MoviesGrid;
