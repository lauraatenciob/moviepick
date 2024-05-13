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
    <section id="categories" class="categories-container">
      <h2 class="categories-title">Categories</h2>
      <article class="categories-list">
        {categories.map((category) => (
          <CategoryCard title={category.title} icon={category.icon} />
        ))}
      </article>
    </section>
  );
}

export default CategorySection;
