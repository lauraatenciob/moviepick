import { useSearchParams } from "react-router-dom";
import Nav from "../../components/Nav/Nav";
import "./styles.css";
import { useEffect, useState } from "react";
import { getMovieById } from "../../api/movieById";
import { categoryIcons } from "../../sections/CategorySection/CategoriesSection";
import SimilarMoviesSection from "../../sections/SimilarMoviesSection/SimilarMoviesSection";
import { getWatchProvidersById } from "../../api/watchProvidersById";
import Container from "../../components/Container/Container";

function DetailPage() {
  const [isDesktop, setIsDesktop] = useState(
    window.matchMedia("(min-width: 768px)").matches
  );
  const [searchParams] = useSearchParams();
  const movieId = searchParams.get("movie");
  const [currentMovie, setCurrentMovie] = useState(null);
  const [watchProviders, setWatchProviders] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const newCurrentMovie = await getMovieById(movieId);
      setCurrentMovie(newCurrentMovie);
      const newWatchProviders = await getWatchProvidersById(movieId);
      setWatchProviders(newWatchProviders?.flatrate || []);
    }
    fetchData();
  }, [movieId]);

  useEffect(() => {
    window.matchMedia("(min-width: 768px)").addEventListener("change", (e) => {
      setIsDesktop(e.matches);
    });
  }, []);

  return (
    <div
      className="detailPage-container"
      style={{
        backgroundImage: `linear-gradient(#101c2d90 8%, #f8f8f805, #3e505b 90%), url(https://image.tmdb.org/t/p/${
          isDesktop ? "original" : "w500"
        }${
          isDesktop ? currentMovie?.backdrop_path : currentMovie?.poster_path
        })`,
      }}
    >
      <Container>
        <Nav isHomePage={false} />
        <div className="detailMovie-container">
          <section className="info-section">
            {isDesktop && (
              <div className="posterImg-container">
                <img
                  src={`https://image.tmdb.org/t/p/w500${currentMovie?.poster_path}`}
                  className="posterImg"
                  alt={currentMovie?.title}
                />
              </div>
            )}

            <div className="movie-info">
              <div className="header-detailPage">
                <h1 className="movie-title">{currentMovie?.title}</h1>
                <span className="movie-score">
                  <i className="fa-solid fa-star large-star"></i>{" "}
                  {currentMovie?.vote_average.toFixed(1)}
                </span>
              </div>
              <span className="watchProviders-container">
                {watchProviders?.map((watchProvider) => (
                  <div
                    className="watchProvider-logoContainer"
                    key={watchProvider.provider_id}
                  >
                    <img
                      src={`https://image.tmdb.org/t/p/w300${watchProvider.logo_path}`}
                      className="watchProvider-img"
                      alt={watchProvider.provider_name}
                      key={watchProvider.provider_id}
                    />
                  </div>
                ))}
              </span>

              <p className="short-description">{currentMovie?.tagline}</p>
              <p className="movie-description">{currentMovie?.overview}</p>
              <div className="movie-categories-container">
                {currentMovie?.genres.map((category) => (
                  <div className="movie-category" key={category.id}>
                    <i
                      className={`fa-solid fa-${
                        categoryIcons[category.name]
                      } category-icon`}
                      key={category.id}
                    ></i>{" "}
                    {category.name}
                  </div>
                ))}
              </div>
            </div>
          </section>
          <SimilarMoviesSection movieId={movieId} />
        </div>
      </Container>
    </div>
  );
}

export default DetailPage;
