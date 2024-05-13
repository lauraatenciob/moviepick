import "./styles.css";

function MovieCard( {imgUrl, name, score, year } ) {
  return (
    <div class="trendMovie-container">
      <div class="movieImg-container">
        <img
          src= {imgUrl}
          class="movie-img"
          alt=""
        />
      </div>
      <div class="movieInf-container">
        <p class="movieName">{name}</p>
        <p class="movieScore">
          <i class="fa-solid fa-star star"></i> {score}
        </p>
        <p class="movieYear">{year}</p>
      </div>
    </div>
  );
}

export default MovieCard;
