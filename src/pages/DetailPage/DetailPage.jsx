import MovieCard from "../../components/MovieCard/MovieCard";
import Nav from "../../components/Nav/Nav";
import "./styles.css";

function DetailPage() {
  return (
    <div className="detailPage-container">
      <Nav isHomePage={false} />
      <div className="detailMovie-container">
        <section className="info-section">
          <div className="header-detailPage">
            <h1 className="movie-title">LIFE SENTENCE</h1>
            <h1 className="movie-score">
              <i className="fa-solid fa-star large-star"></i> 8.7
            </h1>
          </div>

          <p className="short-description">
            Fear makes you a prisoner. Only hope can liberate.
          </p>
          <p className="movie-description">
            Accused of the murder of his wife, Andrew Dufresne, after being
            sentenced to life in prison, is sent to Shawshank Prison. Over the
            years he will gain the trust of the director of the center and the
            respect of his fellow inmates, especially Red, the head of the
            bribery mafia.
          </p>
          <div className="movie-category">
            <i className="fa-solid fa-heart-crack category-icon"></i>Drama
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
