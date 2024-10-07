import { useEffect, useState } from "react";
import { fetchCastById } from "../../servises/api";
import { useParams } from "react-router-dom";
import s from "./MovieCast.module.css";

const MovieCast = () => {
  const { movieId } = useParams();
  const [casts, setCast] = useState([]);
  const defaultImg =
    "https://dummyimage.com/400x600/cdcdcd/000.jpg&text=No+poster";
  useEffect(() => {
    if (!movieId) return;
    const getCastById = async () => {
      const data = await fetchCastById(movieId);
      setCast(data);
    };
    getCastById();
  }, [movieId]);
  return (
    <div>
      <ul className={s.wrapperCast}>
        {casts.map((cast) => (
          <li key={cast.id}>
            <img
              src={
                cast.profile_path
                  ? `https://image.tmdb.org/t/p/w500/${cast.profile_path}`
                  : defaultImg
              }
              width={250}
              alt="poster"
            />
            <p>Actor: {cast.name}</p>
            {cast.character && <p>Character: {cast.character}</p>}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MovieCast;
