import api from "./api";

export async function getMoviesByCategory(id) {
    const { data } = await api("discover/movie?with_genres="+ id);
  
    const moviesByCategory = data.results;
    return moviesByCategory;
  }