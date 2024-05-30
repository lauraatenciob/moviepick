import { useSearchParams } from "react-router-dom";
import Nav from "../../components/Nav/Nav";
import "./styles.css";
import { useEffect, useState } from "react";
import { getMovieById } from "../../api/movieById";
import { categoryIcons } from "../../sections/CategorySection/CategoriesSection";
import SimilarMoviesSection from "../../sections/SimilarMoviesSection/SimilarMoviesSection";

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
            <span className="movie-score">
              <i className="fa-solid fa-star large-star"></i>{" "}
              {currentMovie?.vote_average.toFixed(1)}
            </span>
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
        <SimilarMoviesSection movieId={movieId}/>
      </div>
    </div>
  );
}

export default DetailPage;
