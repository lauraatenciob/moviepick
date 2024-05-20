import "./styles.css";

function CategoryCard({ title, icon }) {
  return (
    <div className="category-container">
        <i className={`fa-solid fa-${icon}`}></i>
        <h3 className="category-title">{title}</h3>
    </div>
  );
}

export default CategoryCard;
