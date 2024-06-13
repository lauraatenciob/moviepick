import { useEffect, useRef, useState } from "react";
import MovieCard from "../MovieCard/MovieCard";
import "./styles.css";

function Carousel({ movies }) {
  const containerRef = useRef(null);
  const [scrollLeft, setScrollLeft] = useState(0);
  const [maxScrollLeft, setMaxScrollLeft] = useState(0);

  useEffect(() => {
    setMaxScrollLeft(
      containerRef.current?.scrollWidth - containerRef.current?.clientWidth
    );
    setScrollLeft(0);
    containerRef.current?.scrollTo({
      left: 0,
      top: 0,
    });
  }, [movies]);

  function clickLeft() {
    containerRef.current?.scrollTo({
      left: containerRef.current?.scrollLeft - 200,
      top: 0,
      behavior: "smooth",
    });
    setScrollLeft(containerRef.current?.scrollLeft - 200);
    setMaxScrollLeft(
      containerRef.current?.scrollWidth - containerRef.current?.clientWidth
    );
  }

  function clickRight() {
    containerRef.current?.scrollTo({
      left: containerRef.current?.scrollLeft + 200,
      top: 0,
      behavior: "smooth",
    });
    setScrollLeft(containerRef.current?.scrollLeft + 200);
    setMaxScrollLeft(
      containerRef.current?.scrollWidth - containerRef.current?.clientWidth
    );
  }

  console.log({ maxScrollLeft, scrollLeft });

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

      {scrollLeft > 0 && (
        <button
          onClick={() => clickLeft()}
          className="carouselBtn"
          id="btn-left"
        >
          <i className="fa-solid fa-angle-left"></i>
        </button>
      )}
      {scrollLeft <= maxScrollLeft && (
        <button
          onClick={() => clickRight()}
          className="carouselBtn"
          id="btn-right"
        >
          <i className="fa-solid fa-angle-right"></i>
        </button>
      )}
    </div>
  );
}

export default Carousel;
