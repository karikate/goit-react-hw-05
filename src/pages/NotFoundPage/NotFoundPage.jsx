import { Link } from "react-router-dom";

const NotFoundPage = () => {
  return (
    <div>
      <h2>Oops! We can not find the page you are looking for</h2>

      <Link to="/">Home</Link>
    </div>
  );
};

export default NotFoundPage;
