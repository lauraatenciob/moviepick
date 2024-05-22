import "./styles.css";
import CategoryCard from "../../components/CategoryCard/CategoryCard";
import { useEffect, useState } from "react";
import { getCategories } from "../../api/categories";
import { Link } from "react-router-dom";

export const categoryIcons = {
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
          <Link
            to={`/categories?category=${category.id}`}
            key={category.id}
            className="a-container"
          >
            <CategoryCard
              key={category.id}
              title={category.name}
              icon={categoryIcons[category.name] || "film"}
            />
          </Link>
        ))}
      </article>
    </section>
  );
}

export default CategorySection;
