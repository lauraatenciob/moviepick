import "./styles.css";
import { useEffect, useState } from "react";
import MovieCard from "../../components/MovieCard/MovieCard";
import { getSimilarMoviesById } from "../../api/similarMoviesById";

function SimilarMoviesSection({movieId}) {
  const [similarMovies, setSimilarMovies] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const newSimilarMovies = await getSimilarMoviesById(movieId);
      setSimilarMovies(newSimilarMovies);
    }
    fetchData();
  }, [movieId]);


  return (
    <section className="similarMoviesSection-container">
      <p className="similarMovies-text">Similar movies</p>
      <div className="similarMovies-container">
        {similarMovies.map((movie) => (
          <MovieCard
          movieId={movie.id}
          key={movie.id}
          imgUrl={`https://image.tmdb.org/t/p/w300${movie.poster_path}`}
          name={movie.title}
          score={movie.vote_average}
          year={movie.release_date.slice(0, 4)}
        />
        ))}
      </div>
    </section>
  );
}

export default SimilarMoviesSection;
