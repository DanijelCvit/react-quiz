import { Link } from "react-router-dom";

export const Result = ({ question, number }) => {
  return (
    <>
      <li>
        <Link
          className={
            question.correct === question.selected ? "correct" : "incorrect"
          }
          to={`/questions/${number}`}
        >
          {`${number + 1}. ${question.text}`}
        </Link>
      </li>
    </>
  );
};
