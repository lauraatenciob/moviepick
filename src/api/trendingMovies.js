import api from "./api";

export async function getTrendingMoviesPreview() {
  const { data } = await api("trending/movie/day");
  
  const movies = data.results;
  console.log({ data, movies });
  return movies;
}
