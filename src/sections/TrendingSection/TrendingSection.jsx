import "./styles.css";
import { useEffect, useState } from "react";
import { getTrendingMoviesPreview } from "../../api/trendingMovies";
import { Link } from "react-router-dom";
import Carousel from "../../components/Carousel/Carousel";
import MovieCard from "../../components/MovieCard/MovieCard";

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
        <Link to={"/trending"}>
          <button className="trending-moreBtn">See more</button>
        </Link>
      </div>
      <Carousel
        items={movies}
        renderItem={(movie) => (
          <MovieCard
            movieId={movie.id}
            key={movie.id}
            imgUrl={`https://image.tmdb.org/t/p/w300${movie.poster_path}`}
            name={movie.title}
            score={movie.vote_average}
            year={movie.release_date.slice(0, 4)}
          />
        )}
      />
    </section>
  );
}

export default TrendingSection;
