import "./styles.css";

function CategoryCard({ title, icon }) {
  return (
    <div class="category-container">
      <i class={`fa-solid fa-${icon}`}></i>
      <h3 class="category-title">{title}</h3>
    </div>
  );
}

export default CategoryCard;
