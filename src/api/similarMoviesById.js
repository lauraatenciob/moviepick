import api from "./api";

export async function getSimilarMoviesById(id) {
    const { data } = await api ("movie/" + id + "/similar");
    const simimlarMovies = data.results;
    return simimlarMovies;
};