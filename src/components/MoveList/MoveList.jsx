import { Link, useLocation } from "react-router-dom";
import s from "./MoveList.module.css";

const MoveList = ({ movies }) => {
  const location = useLocation();
  return (
    <div className={s.wrapperMoveList}>
      <ul>
        {movies.map((movie) => (
          <li key={movie.id}>
            <Link to={`/movies/${movie.id}`} state={location}>
              <p>{movie.title}</p>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MoveList;
