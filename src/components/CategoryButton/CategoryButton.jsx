import "./styles.css";
import { categories } from "../../sections/CategorySection/CategoriesSection";

function CategoryButton() {
  return (
    <div className="recommend-containerButtons">
      {categories.map((category) => (
        <button key={category.title} className="recommend-categoryBtn">{category.title}</button>
      ))}
    </div>
  );
}

export default CategoryButton;
