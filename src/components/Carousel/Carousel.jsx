import { useRef } from "react";
import MovieCard from "../MovieCard/MovieCard";
import "./styles.css";

function Carousel({ movies }) {
  const containerRef = useRef(null);
  function clickLeft() {
    containerRef.current?.scrollTo({
      left: containerRef.current?.scrollLeft - 400,
      top: 0,
      behavior: "smooth",
    });
  }

  function clickRight() {
    containerRef.current?.scrollTo({
      left: containerRef.current?.scrollLeft + 400,
      top: 0,
      behavior: "smooth",
    });
  }

  return (
    <div className="carousel">
      <article
        ref={containerRef}
        className="flex-container"
        id="flex-container"
      >
        {movies.map((movie) => (
          <MovieCard
            movieId={movie.id}
            key={movie.id}
            imgUrl={`https://image.tmdb.org/t/p/w300${movie.poster_path}`}
            name={movie.title}
            score={movie.vote_average}
            year={movie.release_date.slice(0, 4)}
          />
        ))}
      </article>
      <button onClick={() => clickLeft()} className="carouselBtn" id="btn-left">
        <i className="fa-solid fa-angle-left"></i>
      </button>
      <button
        onClick={() => clickRight()}
        className="carouselBtn"
        id="btn-right"
      >
        <i className="fa-solid fa-angle-right"></i>
      </button>
    </div>
  );
}

export default Carousel;
