import { useSearchParams } from "react-router-dom";
import Nav from "../../components/Nav/Nav";
import { useEffect, useState } from "react";
import { getMoviesBySearch } from "../../api/moviesBySearch";
import MovieCard from "../../components/MovieCard/MovieCard";
import "./styles.css";
import Container from "../../components/Container/Container";

function SearchPage() {
  const [movieListBySearch, setMovieListBySearch] = useState([]);
  const [searchParams] = useSearchParams();
  const query = searchParams.get("search");

  useEffect(() => {
    async function fetchData() {
      const newMovieListBySearch = await getMoviesBySearch(query);
      setMovieListBySearch(newMovieListBySearch);
    }
    fetchData();
  }, [query]);

  return (
    <div>
      <Container>
        <Nav isHomePage={false} />
        <div className="moviesBySearch-container">
          {movieListBySearch.map((movie) => (
            <MovieCard
              movieId={movie.id}
              key={movie.id}
              imgUrl={`https://image.tmdb.org/t/p/w300${movie.poster_path}`}
              name={movie.title}
              score={movie.vote_average}
            />
          ))}
        </div>
      </Container>
    </div>
  );
}

export default SearchPage;
