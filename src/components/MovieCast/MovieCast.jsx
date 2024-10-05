import { useEffect, useState } from "react";
import { fetchCastById } from "../../servises/api";
import { useParams } from "react-router-dom";

const MovieCast = () => {
  const { movieId } = useParams();
  const [casts, setCast] = useState([]);
  useEffect(() => {
    const getCastById = async () => {
      const data = await fetchCastById(movieId);
      setCast(data);
    };
    getCastById();
  }, [movieId]);
  return (
    <div>
      <ul>
        {casts.map((cast) => (
          <li key={cast.id}>
            <img src="" alt="" />
            <p>Actor: {cast.name}</p>
            <p>Character: {cast.character}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MovieCast;
