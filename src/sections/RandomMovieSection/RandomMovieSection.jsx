import "./styles.css";
import CategoryButton from "../../components/CategoryButton/CategoryButton";

function RandomMovieSection() {
  return (
    <section id="recommend" className="recommend-container">
      <h1 className="welcome-text">
        Let us <strong className="fontWeigth-medium">recommend</strong> a movie for
        you
      </h1>
      <p className="recommend-category-title">Select a category</p>
      <CategoryButton />
      <button id="recommend-btn">Get a movie</button>
    </section>
  );
};

export default RandomMovieSection;
