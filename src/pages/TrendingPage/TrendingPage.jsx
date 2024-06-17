import { useEffect, useState } from "react";
import Nav from "../../components/Nav/Nav";
import { getTrendingMoviesPreview } from "../../api/trendingMovies";
import "./styles.css";
import Container from "../../components/Container/Container";
import MoviesGrid from "../../components/MoviesGrid/MoviesGrid";

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
        <MoviesGrid movieList={trendMovies} />
      </Container>
    </div>
  );
}
export default TrendingPage;
