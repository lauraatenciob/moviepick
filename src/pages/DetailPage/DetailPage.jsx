import { useSearchParams } from "react-router-dom";
import MovieCard from "../../components/MovieCard/MovieCard";
import Nav from "../../components/Nav/Nav";
import "./styles.css";
import { useEffect, useState } from "react";
import { getMovieById } from "../../api/movieById";
import { categoryIcons } from "../../sections/CategorySection/CategoriesSection";

function DetailPage() {
  const [searchParams] = useSearchParams();
  const movieId = searchParams.get("movie");
  const [currentMovie, setCurrentMovie] = useState(null);

  console.log(currentMovie);

  useEffect(() => {
    async function fetchData() {
      const newCurrentMovie = await getMovieById(movieId);
      setCurrentMovie(newCurrentMovie);
    }
    fetchData();
  }, [movieId]);

  return (
    <div
      className="detailPage-container"
      style={{
        backgroundImage: `linear-gradient(#101c2d4b 65%, #3e505b), url(https://image.tmdb.org/t/p/w500${currentMovie?.poster_path})`,
      }}
    >
      <Nav isHomePage={false} />
      <div className="detailMovie-container">
        <section className="info-section">
          <div className="header-detailPage">
            <h1 className="movie-title">{currentMovie?.title}</h1>
            <h1 className="movie-score">
              <i className="fa-solid fa-star large-star"></i>{" "}
              {currentMovie?.vote_average.toFixed(1)}
            </h1>
          </div>

          <p className="short-description">{currentMovie?.tagline}</p>
          <p className="movie-description">{currentMovie?.overview}</p>
          <div className="movie-categories-container">
            {currentMovie?.genres.map((category) => (
              <div className="movie-category" key={category.id}>
                <i className={`fa-solid fa-${categoryIcons[category.name]} category-icon`} key={category.id}></i> {category.name}
              </div>
            ))}
          </div>
        </section>
        <section className="similarMoviesSection-container">
          <p className="similarMovies-text">Similar movies</p>
          <div className="similarMovies-container">
            <MovieCard
              imgUrl={
                "https://image.tmdb.org/t/p/w300/sh7Rg8Er3tFcN9BpKIPOMvALgZd.jpg"
              }
              name={"Movie name"}
              score={8}
              year={1997}
            />
            <MovieCard
              imgUrl={
                "https://image.tmdb.org/t/p/w300/sh7Rg8Er3tFcN9BpKIPOMvALgZd.jpg"
              }
              name={"Movie name"}
              score={8}
              year={1997}
            />
            <MovieCard
              imgUrl={
                "https://image.tmdb.org/t/p/w300/sh7Rg8Er3tFcN9BpKIPOMvALgZd.jpg"
              }
              name={"Movie name"}
              score={8}
              year={1997}
            />
          </div>
        </section>
      </div>
    </div>
  );
}

export default DetailPage;
