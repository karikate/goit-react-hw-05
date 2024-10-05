import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchReviewsById } from "../../servises/api";

const MovieReviews = () => {
  const { movieId } = useParams();
  const [reviews, setReviews] = useState();
  useEffect(() => {
    const getReviewsById = async () => {
      const data = await fetchReviewsById(movieId);
      setReviews(data);
    };
    getReviewsById();
  }, [movieId]);
  console.log(reviews);
  if (!reviews) {
    return <h2>Loading...</h2>;
  }
  return (
    <div>
      xrtcyvub
      <h4>Username: {reviews.author}</h4>
      {/* <p>{movie.content}</p> */}
    </div>
  );
};

export default MovieReviews;
