import { Result } from "./Result/Result";
import { Link } from "react-router-dom";

export const Results = ({ questions }) => {
  return (
    <div>
      <h1>RESULTS</h1>
      <ul className="mt-5 mb-5">
        {questions.map((question, index) => (
          <Result key={question._id} question={question} number={index} />
        ))}
      </ul>
      <div className="center">
        <Link className="btn btn-primary" to="/">
          Try again
        </Link>
      </div>
    </div>
  );
};
