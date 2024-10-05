import { useEffect, useState } from "react";
import { fetchTrendinMovies } from "../../servises/api";
import { Link } from "react-router-dom";

const MoveList = () => {
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
      <ul>
        {movies.map((movie) => (
          <li key={movie.id}>
            <Link to={`/movies/${movie.id}`}>
              <p>{movie.title}</p>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MoveList;
