import { Link } from "react-router-dom";

export const Start = ({ resetDatabase }) => {
  localStorage.clear();

  return (
    <div>
      <h1>START PAGE</h1>
      <div className="center mt-4">
        <Link
          className="btn btn-primary"
          onClick={resetDatabase}
          to={`questions/0`}
        >
          Start Quiz
        </Link>
      </div>
    </div>
  );
};
