import { useEffect, useRef, useState } from "react";
import { Link, Outlet, useLocation, useParams } from "react-router-dom";
import { fetchMoviesById } from "../../servises/api";
import s from "./MovieDetailsPage.module.css";

const MovieDetailsPage = () => {
  const defaultImg =
    "https://dummyimage.com/400x600/cdcdcd/000.jpg&text=No+poster";

  const { movieId } = useParams();
  const [movie, setMovie] = useState();
  const location = useLocation();
  const refGoBack = useRef(location.state);
  useEffect(() => {
    if (!movieId) return;
    const getMoviesById = async () => {
      const data = await fetchMoviesById(movieId);
      setMovie(data);
    };
    getMoviesById();
  }, [movieId]);

  if (!movie) {
    return <h2>Loading...</h2>;
  }
  return (
    <div>
      <Link to={refGoBack.current}>Go back</Link>
      <img
        src={
          movie.poster_path
            ? `https://image.tmdb.org/t/p/w500/${movie.poster_path}`
            : defaultImg
        }
        width={250}
        alt="poster"
      />
      ;<h2>{movie.title}</h2>
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
