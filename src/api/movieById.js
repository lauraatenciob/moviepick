import api from "./api";

export async function getMovieById(id) {
  const { data } = await api("movie/" + id);

  return data;
}
