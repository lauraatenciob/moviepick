import { useEffect, useState } from "react";
import { getTopRatedMovies } from "../../api/topRatedMovies";
import RecommendedMovieCard from "../../components/RecommendedMovieCard/RecommendMovieCard";

import "./styles.css";
import { getMovieById } from "../../api/movieById";

function RandomMovieSection() {
  const [recommendedMovies, setRecommendedMovies] = useState([]);
  const [selectedRandomMovie, setSelectedRandomMovie] = useState(null);

  
  useEffect(() => {
    async function fetchData() {
      const newRecommendedMovies = await getTopRatedMovies();
      setRecommendedMovies(newRecommendedMovies);
    }
    fetchData();
  }, []);

  function randomIndFromInterval(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
  };

  async function onRecommendBtnClick() {
    const index = randomIndFromInterval(0, recommendedMovies.length - 1);
    const selectedMovieId = recommendedMovies[index].id;
    const newSelectedRandomMovie = await getMovieById(selectedMovieId);
    setSelectedRandomMovie(newSelectedRandomMovie);
    console.log(selectedRandomMovie)
  };



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
            tagline={selectedRandomMovie.tagline}
            year={selectedRandomMovie.release_date}
            duration={selectedRandomMovie.runtime}
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
