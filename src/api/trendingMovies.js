export async function getTrendingMoviesPreview() {
  const res = await fetch(
    "https://api.themoviedb.org/3/trending/movie/day?api_key=" +
      process.env.REACT_APP_API_KEY
  );
  const data = await res.json();
  const movies = data.results;
  console.log({ data, movies });
  return movies;
}
