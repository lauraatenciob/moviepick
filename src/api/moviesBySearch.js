import api from "./api";

export async function getMoviesBySearch(query) {
  const { data } = await api("search/movie", {
    params: {
      query,
    },
  });

  const moviesBySearch = data.results;
  return moviesBySearch;
}
