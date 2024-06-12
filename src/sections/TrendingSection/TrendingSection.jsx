import "./styles.css";
import { useEffect, useState } from "react";
import { getTrendingMoviesPreview } from "../../api/trendingMovies";
import { Link } from "react-router-dom";
import Carousel from "../../components/Carousel/Carousel";

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
      <Carousel movies={movies}/>
    </section>
  );
}

export default TrendingSection;
