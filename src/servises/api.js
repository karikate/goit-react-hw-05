import axios from "axios";
axios.defaults.baseURL = `https://api.themoviedb.org/`;

const options = {
  headers: {
    Authorization: `Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJkZDg5ZTI3MWQxMjYxZTQ2YWNmYWFiZTU2OTJlMmNmZiIsIm5iZiI6MTcyODE0ODU1Ny4wNzA3NjEsInN1YiI6IjY2ZmZiZWZhOWViZWExOTAwNmY4MGMyMiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.d9NfRMtL47ydET9BmgYf34ScFvX9fACLHZ1IsBv8hBc`,
  },
  params: {
    language: "en-US",
    page: 1,
    include_adult: false,
  },
};

export const fetchTrendinMovies = async () => {
  const { data } = await axios.get(`3/trending/movie/day?`, options);
  return data.results;
};
export const fetchMoviesById = async (movieId) => {
  const { data } = await axios.get(`3/movie/${movieId}?`, options);
  return data;
};
export const fetchCastById = async (movieId) => {
  const { data } = await axios.get(`3/movie/${movieId}/credits?`, options);
  return data.cast;
};

export const fetchReviewsById = async (movieId) => {
  const { data } = await axios.get(`3/movie/${movieId}/reviews?`, options);
  return data.results;
};

export const fetchSearchMovie = async (query) => {
  const { data } = await axios.get(`3/search/movie?query=${query}&`, options);
  return data;
};
