import "./styles.css";
import CategoryCard from "../../components/CategoryCard/CategoryCard";

export const categories = [
  {
    title: "Action",
    icon: "bomb",
  },
  {
    title: "Romance",
    icon: "heart",
  },
  {
    title: "Adventure",
    icon: "compass",
  },
  {
    title: "Musical",
    icon: "music",
  },
  {
    title: "Comedy",
    icon: "masks-theater",
  },
  {
    title: "Drama",
    icon: "heart-crack",
  }
];

function CategorySection() {
  return (
    <section id="categories" className="categories-container">
      <h2 className="categories-title">Categories</h2>
      <article className="categories-list">
        {categories.map((category) => (
          <CategoryCard key={category.title} title={category.title} icon={category.icon} />
        ))}
      </article>
    </section>
  );
}

export default CategorySection;
