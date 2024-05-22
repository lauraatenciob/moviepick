import api from "./api";

export async function getCategories() {
  const { data } = await api("genre/movie/list");

  const categories = data.genres;
  return categories;
}
