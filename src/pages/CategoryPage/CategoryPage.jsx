import "./styles.css";
import { useEffect, useState } from "react";
import CategoryCard from "../../components/CategoryCard/CategoryCard";
import MovieCard from "../../components/MovieCard/MovieCard";
import Nav from "../../components/Nav/Nav";
import { getMoviesByCategory } from "../../api/moviesbycategory";
import { useSearchParams } from "react-router-dom";
import { categoryIcons } from "../../sections/CategorySection/CategoriesSection";
import { getCategories } from "../../api/categories";
import Container from "../../components/Container/Container";

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
    if (!categoryIds.includes(id)) {
      console.log(categoryIds, categoryIds?.split(",").concat([id]));
      searchParams.set(
        "category",
        categoryIds === "" ? id : categoryIds.split(",").concat([id]).join(",")
      );
    } else {
      searchParams.set(
        "category",
        categoryIds
          .split(",")
          .filter((categoryId) => id.toString() !== categoryId)
          .join(",")
      );
    }
    setSearchParams(searchParams);
  };

  return (
    <div id="categoryPage-container">
      <Container>
        <Nav isHomePage={false} />
        <div id="categories-container">
          {categories.map((category) => (
            <CategoryCard
              key={category.id}
              title={category.name}
              icon={categoryIcons[category.name] || "film"}
              onClickFuntion={() => onCategoryClick(category.id)}
              selected={categoryIds.includes(category.id)}
            />
          ))}
        </div>
        <div id="movies-container">
          {movieList.map((movie) => (
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

export default CategoryPage;
