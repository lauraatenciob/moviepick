import { useSearchParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { getMoviesBySearch } from "../../api/moviesBySearch";
import Nav from "../../components/Nav/Nav";
import Container from "../../components/Container/Container";
import MoviesGrid from "../../components/MoviesGrid/MoviesGrid";

import "./styles.css";


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
        <MoviesGrid movieList={movieListBySearch} />
      </Container>
    </div>
  );
}

export default SearchPage;
