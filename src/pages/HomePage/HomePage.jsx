import MoveList from "../../components/MoveList/MoveList";
import { useEffect, useState } from "react";
import { fetchTrendinMovies } from "../../servises/api";

const HomePage = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const getTrendingFilms = async () => {
      const data = await fetchTrendinMovies();
      setMovies(data);
    };
    getTrendingFilms();
  }, []);
  return (
    <div>
      <h2>Trending today</h2>
      <MoveList movies={movies} />
    </div>
  );
};

export default HomePage;
