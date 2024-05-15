import "./styles.css";
import MovieCard from "../../components/MovieCard/MovieCard";
import { useEffect, useState } from "react";
import { getTrendingMoviesPreview } from "../../api/trendingMovies";

function TrendingSection() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const newMovies = await getTrendingMoviesPreview();
      setMovies(newMovies);
    }

    fetchData();
  }, []);

  return (
    <section id="trending" className="trending-container">
      <div className="trending-header">
        <h2 className="trending-title">Trending</h2>
        <button className="trending-moreBtn">See more</button>
      </div>
      <article className="trending-movieList">
        {movies.map((movie) => (
          <MovieCard
            key={movie.id}
            imgUrl={`https://image.tmdb.org/t/p/w300${movie.poster_path}`}
            name={movie.title}
            score={movie.vote_average}
            year={movie.release_date.slice(0, 4)}
          />
        ))}
      </article>
    </section>
  );
}

export default TrendingSection;
