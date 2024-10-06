import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchReviewsById } from "../../servises/api";

const MovieReviews = () => {
  const { movieId } = useParams();
  const [reviews, setReviews] = useState([]);
  useEffect(() => {
    if (!movieId) return;
    const getReviewsById = async () => {
      const data = await fetchReviewsById(movieId);
      setReviews(data);
    };
    getReviewsById();
  }, [movieId]);

  if (!reviews) {
    return <h2>Loading...</h2>;
  }
  return (
    <div>
      <ul>
        {reviews.map((review) => (
          <li key={review.id}>
            <h4>Username: {review.author}</h4>
            <p>{review.content}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MovieReviews;
