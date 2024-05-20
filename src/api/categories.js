export async function getCategories() {
  const res = await fetch(
    "https://api.themoviedb.org/3/genre/movie/list?api_key=" +
      process.env.REACT_APP_API_KEY
  );
  const data = await res.json();
  const categories = data.genres;
  console.log(data);
  return categories;
}
