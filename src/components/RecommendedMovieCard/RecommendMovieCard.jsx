import { Link } from "react-router-dom";
import "./styles.css";

function RecommendedMovieCard({
  imgUrl,
  name,
  score,
  movieId,
  tagline,
  year,
  duration,
  watchProviders,
}) {
  return (
    <Link
      to={`/detail?movie=${movieId}`}
      className="recommendedMovie-container"
    >
      <div className="movieImg-container">
        <img src={imgUrl} className="movie-img" alt={name} />
      </div>
      <div className="movieInf-container">
        <p className="recommendedMovie-name" title={name}>
          {name}
        </p>
        <p className="recommendedMovie-score">
          <i className="fa-solid fa-star star"></i> {score.toFixed(1)}
        </p>
      </div>
      <p className="movieTagline">{tagline}</p>
      <div className="detailsMovie-container">
        <p>{year.slice(0, 4)}</p>
        <p>|</p>
        <p>{duration} min</p>
        <p>|</p>
        <span className="watchProviders-container">
          {watchProviders?.map((watchProvider) => (
            <div className="watchProvider-logoContainer" key={watchProvider.provider_id}>
              <img
                src={`https://image.tmdb.org/t/p/w300${watchProvider.logo_path}`}
                className="watchProvider-img"
                alt={watchProvider.provider_name}
                key={watchProvider.provider_id}
              />
            </div>
          ))}
        </span>
      </div>
    </Link>
  );
}

export default RecommendedMovieCard;
