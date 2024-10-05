import axios from "axios";
axios.defaults.baseURL = `https://api.themoviedb.org/`;
////////////////https://api.themoviedb.org/3/trending/movie/day?language=en-US&page=1
// const Url = `https://api.themoviedb.org/3/trending/movie/day?language=en-US`;
/////////////// "https://api.themoviedb.org/3/search/movie?include_adult=false&language=en-US&page=1";
const options = {
  headers: {
    Authorization: `Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJkZDg5ZTI3MWQxMjYxZTQ2YWNmYWFiZTU2OTJlMmNmZiIsIm5iZiI6MTcyODE0ODU1Ny4wNzA3NjEsInN1YiI6IjY2ZmZiZWZhOWViZWExOTAwNmY4MGMyMiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.d9NfRMtL47ydET9BmgYf34ScFvX9fACLHZ1IsBv8hBc`,
  },
};

export const fetchTrendinMovies = async () => {
  const { data } = await axios.get(
    `3/trending/movie/day?language=en-US`,
    options
  );
  return data.results;
};
export const fetchMoviesById = async (movieId) => {
  const { data } = await axios.get(
    `3/movie/${movieId}?language=en-US`,
    options
  );
  return data;
};
export const fetchCastById = async (movieId) => {
  const { data } = await axios.get(
    `3/movie/${movieId}/credits?language=en-US`,
    options
  );
  return data.cast;
};

export const fetchReviewsById = async (movieId) => {
  const { data } = await axios.get(
    `3/movie/${movieId}/reviews?language=en-US&page=1`,
    options
  );
  return data;
};
