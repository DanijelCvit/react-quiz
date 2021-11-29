import { Link } from "react-router-dom";
import { useEffect } from "react";

export const Start = ({ resetDatabase }) => {
  useEffect(() => {
    resetDatabase();
  }, []);
  return (
    <div>
      <h1>JAVASCRIPT QUIZ</h1>
      <div className="center mt-4">
        <Link className="btn btn-primary" to={`questions/0`}>
          Start Quiz
        </Link>
      </div>
    </div>
  );
};
