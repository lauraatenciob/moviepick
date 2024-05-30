import api from "./api";

export async function getTopRatedMovies() {
  const { data } = await api("movie/top_rated");
  
  const topRatedMovies = data.results;
  return topRatedMovies;
}