import "./styles.css";

function CategoryCard({ title, icon, onClickFuntion, selected }) {
  return (
    <div
      className={`${
        selected ? "category-container selected" : "category-container"
      }`}
      onClick={onClickFuntion}
    >
      <i className={`fa-solid fa-${icon}`}></i>
      <h3 className="category-title">{title}</h3>
    </div>
  );
}

export default CategoryCard;
