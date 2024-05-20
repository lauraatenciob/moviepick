import CategoryCard from "../../components/CategoryCard/CategoryCard";
import MovieCard from "../../components/MovieCard/MovieCard";
import Nav from "../../components/Nav/Nav";
import "./styles.css";

function CategoryPage() {
  return (
    <div id="categoryPage-container">
      <Nav />
      <div id="categories-container">
        <CategoryCard title={"Romance"} icon={"heart"} />
        <CategoryCard title={"Romance"} icon={"heart"} />
        <CategoryCard title={"Romance"} icon={"heart"} />
      </div>
      <div id="movies-container">
        <MovieCard
          name={"Life Sentence"}
          imgUrl={
            "https://www.themoviedb.org/t/p/w600_and_h900_bestv2/uRRTV7p6l2ivtODWJVVAMRrwTn2.jpg"
          }
          score={9}
          year={1997}
        />
        <MovieCard
          name={"Life Sentence"}
          imgUrl={
            "https://www.themoviedb.org/t/p/w600_and_h900_bestv2/uRRTV7p6l2ivtODWJVVAMRrwTn2.jpg"
          }
          score={9}
          year={1997}
        />
        <MovieCard
          name={"Life Sentence"}
          imgUrl={
            "https://www.themoviedb.org/t/p/w600_and_h900_bestv2/uRRTV7p6l2ivtODWJVVAMRrwTn2.jpg"
          }
          score={9}
          year={1997}
        />
      </div>
    </div>
  );
}

export default CategoryPage;
