import "./styles.css";
import CategoryCard from "../../components/CategoryCard/CategoryCard";
import { useEffect, useState } from "react";
import { getCategories } from "../../api/categories";

const categoryIcons = {
  Action: "bomb",
  Adventure: "compass",
  Animation: "hat-wizard",
  Comedy: "masks-theater",
  Crime: "handcuffs",
  Documentary: "video",
  Drama: "heart-crack",
  Family: "people-roof",
  Fantasy: "wand-sparkles",
  History: "landmark",
  Horror: "ghost",
  Music: "music",
  Mystery: "user-secret",
  Romance: "heart",
  "Science Fiction": "robot",
  "TV Movie": "tv",
  Thriller: "brain",
  War: "gun",
  Western: "hat-cowboy",
};

function CategorySection() {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const newCategories = await getCategories();
      setCategories(newCategories);
    }
    fetchData();
  }, []);

  return (
    <section id="categories" className="categories-container">
      <h2 className="categories-title">Categories</h2>
      <article className="categories-list">
        {categories.map((category) => (
          <CategoryCard
            key={category.id}
            title={category.name}
            icon={categoryIcons[category.name] || "film"}
          />
        ))}
      </article>
    </section>
  );
}

export default CategorySection;
