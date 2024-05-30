import { useEffect, useState } from "react";
import { getTopRatedMovies } from "../../api/topRatedMovies";
import RecommendedMovieCard from "../../components/RecommendedMovieCard/RecommendMovieCard";

import "./styles.css";

function RandomMovieSection() {
  const [recommendedMovies, setRecommendedMovies] = useState([]);
  const [selectedRandomMovie, setSelectedRandomMovie] = useState(null);

  function onRecommendBtnClick() {
    setSelectedRandomMovie(recommendedMovies[0]);
  }

  useEffect(() => {
    async function fetchData() {
      const newRecommendedMovies = await getTopRatedMovies();
      setRecommendedMovies(newRecommendedMovies);
    }
    fetchData();
  }, []);

  return (
    <section id="recommend" className="recommend-container">
      {!selectedRandomMovie ? (
        <h1 className="welcome-text">
          Let us <strong className="fontWeigth-medium">recommend</strong> a
          movie for you
        </h1>
      ) : (
        <div className="recommendedMovie-container">
          <RecommendedMovieCard
            movieId={selectedRandomMovie.id}
            key={selectedRandomMovie.id}
            imgUrl={`https://image.tmdb.org/t/p/w300${selectedRandomMovie.poster_path}`}
            name={selectedRandomMovie.title}
            score={selectedRandomMovie.vote_average}
            tagline={selectedRandomMovie.overview}
            year={selectedRandomMovie.popularity}
            duration={selectedRandomMovie.vote_count}
          />
        </div>
      )}

      {/** <p className="recommend-category-title">Select a category</p> */}
      <button id="recommend-btn" onClick={() => onRecommendBtnClick()}>
        Get a movie
      </button>
    </section>
  );
}

export default RandomMovieSection;
