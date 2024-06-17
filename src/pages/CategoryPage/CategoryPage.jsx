import "./styles.css";
import { useEffect, useState } from "react";
import CategoryCard from "../../components/CategoryCard/CategoryCard";
import Nav from "../../components/Nav/Nav";
import { getMoviesByCategory } from "../../api/moviesbycategory";
import { useSearchParams } from "react-router-dom";
import { categoryIcons } from "../../sections/CategorySection/CategoriesSection";
import { getCategories } from "../../api/categories";
import Container from "../../components/Container/Container";
import Carousel from "../../components/Carousel/Carousel";
import MoviesGrid from "../../components/MoviesGrid/MoviesGrid";

function CategoryPage() {
  const [movieList, setMovieList] = useState([]);
  const [categories, setCategories] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();
  const [totalPages, setTotalPages] = useState(1);
  const categoryIds = searchParams.get("category");
  const currentPage = searchParams.get("page") ?? 1;

  useEffect(() => {
    async function fetchData() {
      const moviesResponse = await getMoviesByCategory(
        categoryIds,
        currentPage
      );
      setMovieList(moviesResponse.results);
      setTotalPages(moviesResponse.total_pages);
    }
    fetchData();
  }, [categoryIds, currentPage]);

  useEffect(() => {
    async function fetchData() {
      const newCategories = await getCategories();
      setCategories(newCategories);
    }
    fetchData();
  }, []);

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
    searchParams.set("page", 1);
    setSearchParams(searchParams);
  };

  const onPageClick = (Page) => {
    searchParams.set("page", Page);
    setSearchParams(searchParams);
  };

  return (
    <div id="categoryPage-container">
      <Container>
        <Nav isHomePage={false} />

        <div className="carouselCategories-container">
          <Carousel
            items={categories}
            renderItem={(category) => (
              <CategoryCard
                key={category.id}
                title={category.name}
                icon={categoryIcons[category.name] || "film"}
                onClickFuntion={() => onCategoryClick(category.id)}
                selected={categoryIds.includes(category.id)}
              />
            )}
          />
        </div>

        <MoviesGrid movieList={movieList} />
        
        <div className="pagination-container">
          {currentPage > 1 && (
            <button className="btnPage" onClick={() => onPageClick(Number(currentPage) - 1)}>
              <i className="fa-solid fa-angles-left"></i>
            </button>
          )}
          <div className="page-number">{currentPage} of {totalPages}</div>
          {currentPage < totalPages && (
            <button className="btnPage" onClick={() => onPageClick(Number(currentPage) + 1)}>
              <i className="fa-solid fa-angles-right"></i>
            </button>
          )}
        </div>
      </Container>
    </div>
  );
}

export default CategoryPage;
