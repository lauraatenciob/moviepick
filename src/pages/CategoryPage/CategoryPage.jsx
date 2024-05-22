import { useEffect, useState } from "react";
import CategoryCard from "../../components/CategoryCard/CategoryCard";
import MovieCard from "../../components/MovieCard/MovieCard";
import Nav from "../../components/Nav/Nav";
import "./styles.css";
import { getMoviesByCategory } from "../../api/moviesbycategory";
import { useSearchParams } from "react-router-dom";
import { categoryIcons } from "../../sections/CategorySection/CategoriesSection";
import { getCategories } from "../../api/categories";

function CategoryPage() {
  const [movieList, setMovieList] = useState([]);
  const [categories, setCategories] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();
  const categoryIds = searchParams.get("category");

  useEffect(() => {
    async function fetchData() {
      const newMovieList = await getMoviesByCategory(categoryIds);
      setMovieList(newMovieList);
      const newCategories = await getCategories();
      setCategories(newCategories);
    }
    fetchData();
  }, [categoryIds]);

  const onCategoryClick = (id) => {
    searchParams.set("category", `${categoryIds},${id}`);
    setSearchParams(searchParams);
  };

  return (
    <div id="categoryPage-container">
      <Nav />
      <div id="categories-container" onClick={() => onCategoryClick(53)}>
        {categories.map((category) => (
          <CategoryCard
            key={category.id}
            title={category.name}
            icon={categoryIcons[category.name] || "film"}
          />
        ))}
      </div>
      <div id="movies-container">
        {movieList.map((movie) => (
          <MovieCard
            key={movie.id}
            imgUrl={`https://image.tmdb.org/t/p/w300${movie.poster_path}`}
            name={movie.title}
            score={movie.vote_average}
          />
        ))}
      </div>
    </div>
  );
}

export default CategoryPage;
