import "./styles.css";
import { useEffect, useState } from "react";
import { getSimilarMoviesById } from "../../api/similarMoviesById";
import Carousel from "../../components/Carousel/Carousel";
import MovieCard from "../../components/MovieCard/MovieCard";

function SimilarMoviesSection({ movieId }) {
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
      <Carousel
        items={similarMovies}
        renderItem={(similarMovie) => (
          <MovieCard
            movieId={similarMovie.id}
            key={similarMovie.id}
            imgUrl={`https://image.tmdb.org/t/p/w300${similarMovie.poster_path}`}
            name={similarMovie.title}
            score={similarMovie.vote_average}
            year={similarMovie.release_date.slice(0, 4)}
          />
        )}
      />
    </section>
  );
}

export default SimilarMoviesSection;
