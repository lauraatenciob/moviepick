import api from "./api";

export async function getTrendingMoviesPreview() {
  const { data } = await api("trending/movie/day");
  
  const movies = data.results;
  return movies;
}
