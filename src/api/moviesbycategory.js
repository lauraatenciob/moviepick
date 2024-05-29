import api from "./api";

export async function getMoviesByCategory(categoryId) {
  const { data } = await api("discover/movie?with_genres=" + categoryId);

  const moviesByCategory = data.results;
  return moviesByCategory;
}
