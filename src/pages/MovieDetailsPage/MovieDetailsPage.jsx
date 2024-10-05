import { useEffect, useState } from "react";
import { Link, Outlet, useParams } from "react-router-dom";
import { fetchMoviesById } from "../../servises/api";
import s from "./MovieDetailsPage.module.css";

const MovieDetailsPage = () => {
  const { movieId } = useParams();
  const [movie, setMovie] = useState();
  useEffect(() => {
    const getMoviesById = async () => {
      const data = await fetchMoviesById(movieId);
      setMovie(data);
    };
    getMoviesById();
  }, [movieId]);
  // console.log(movie);

  if (!movie) {
    return <h2>Loading...</h2>;
  }
  return (
    <div>
      <img src="" alt="" />
      <h2>{movie.title}</h2>
      <p>User Score: {movie.vote_average}</p>
      <p>Overview {movie.overview}</p>

      <ul>
        Genres:
        {movie.genres.map((genre) => (
          <li key={genre.id}> {genre.name}</li>
        ))}
      </ul>
      <hr />
      <h3>Addition information</h3>
      <div className={s.wrapperAddInfo}>
        <Link to="cast">Cast</Link>
        <Link to="reviews">Reviews</Link>
      </div>
      <Outlet />
    </div>
  );
};

export default MovieDetailsPage;
