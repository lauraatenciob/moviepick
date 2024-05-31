import api from "./api";

export async function getWatchProvidersById(movieId) {
  const { data } = await api("movie/" + movieId + "/watch/providers");
  const watchProviders = data.results.US;
  return watchProviders;
};
