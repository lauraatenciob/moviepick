import { Link } from "react-router-dom";
import "./styles.css";

function MovieCard({ imgUrl, name, score, year, movieId }) {
  return (
    <Link to={`/detail?movie=${movieId}`} className="trendMovie-container">
      <div className="movieImg-container">
        <img src={imgUrl} className="movie-img" alt={name} />
      </div>
      <div className="movieInfo-container">
        <p className="movieName" title={name}>
          {name}
        </p>
        <div className="movieDetails-container">
          <p className="movieScore">
            <i className="fa-solid fa-star star"></i> {score.toFixed(1)}
          </p>
          <p className="movieYear">{year}</p>
        </div>
      </div>
    </Link>
  );
}

export default MovieCard;
