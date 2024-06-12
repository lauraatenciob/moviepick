import "./styles.css";
import { useEffect, useState } from "react";
import { getSimilarMoviesById } from "../../api/similarMoviesById";
import Carousel from "../../components/Carousel/Carousel";

function SimilarMoviesSection({movieId}) {
  const [similarMovies, setSimilarMovies] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const newSimilarMovies = await getSimilarMoviesById(movieId);
      setSimilarMovies(newSimilarMovies);
    }
    fetchData();
  }, [movieId]);


  return (
    <section className="similarMoviesSection-container">
      <p className="similarMovies-text">Similar movies</p>
      <Carousel movies={similarMovies} />
    </section>
  );
}

export default SimilarMoviesSection;
