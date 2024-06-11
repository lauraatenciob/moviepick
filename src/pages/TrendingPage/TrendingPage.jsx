import { useEffect, useState } from "react";
import MovieCard from "../../components/MovieCard/MovieCard";
import Nav from "../../components/Nav/Nav";
import { getTrendingMoviesPreview } from "../../api/trendingMovies";
import "./styles.css";
import Container from "../../components/Container/Container";

function TrendingPage() {
  const [trendMovies, setTrendMovies] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const newTrendMovies = await getTrendingMoviesPreview();
      setTrendMovies(newTrendMovies);
    }

    fetchData();
  }, []);

  return (
    <div id="trending-container">
      <Container>
        <Nav isHomePage={false} />
        <h2 className="trendingPage-title">Trending</h2>
        <div className="trendMovieList-container">
          {trendMovies.map((movie) => (
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
      </Container>
    </div>
  );
}
export default TrendingPage;
