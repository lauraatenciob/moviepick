import "./styles.css";
import CategoryButton from "../../components/CategoryButton/CategoryButton";

function RandomMovieSection() {
  return (
    <section id="recommend" class="recommend-container">
      <h1 class="welcome-text">
        Let us <strong class="fontWeigth-medium">recommend</strong> a movie for
        you
      </h1>
      <p class="recommend-category-title">Select a category</p>
      <CategoryButton />
      <button id="recommend-btn">Get a movie</button>
    </section>
  );
};

export default RandomMovieSection;
