import { categories } from "../../sections/CategorySection/CategoriesSection";

function CategoryButton() {
  return (
    <div class="recommend-containerButtons">
      {categories.map((category) => (
        <button class="recommend-categoryBtn">{category.title}</button>
      ))}
    </div>
  );
}

export default CategoryButton;
