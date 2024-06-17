import api from "./api";

export async function getMoviesByCategory(categoryId, page) {
  const { data } = await api("discover/movie", {
    params: {
      "with_genres" : categoryId,
      "page" : page
    },
  });

  return data;
}
