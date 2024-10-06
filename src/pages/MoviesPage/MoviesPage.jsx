import { useEffect, useState } from "react";
import SearchForm from "../../components/SearchForm/SearchForm";
import { useSearchParams } from "react-router-dom";
import { fetchSearchMovie } from "../../servises/api";
import MoveList from "../../components/MoveList/MoveList";

const MoviesPage = () => {
  const [movies, setMovies] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();
  const query = searchParams.get("query") ?? "";
  useEffect(() => {
    if (!query) return;
    const getSearchMovies = async () => {
      const data = await fetchSearchMovie(query);
      setMovies(data.results);
    };
    getSearchMovies();
  }, [query]);

  const handleSearch = (newQuery) => {
    searchParams.set("query", newQuery);
    setSearchParams(searchParams);
  };

  return (
    <div>
      <SearchForm setSearchParams={handleSearch} />
      {movies.length > 0 && <MoveList movies={movies} />}
      {/* {!movies.length && <p>There are no movies that matched your query</p>} */}
    </div>
  );
};

export default MoviesPage;
