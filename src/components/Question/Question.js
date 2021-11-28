import { Link } from "react-router-dom";
import { useParams } from "react-router";
import { Answers } from "./Answers";

export const Question = ({ questions }) => {
  const { id } = useParams();
  const ID = parseInt(id);

  return (
    <div className="question">
      <h1>{`${ID + 1}. ${questions[ID].text}`}</h1>
      <Answers answers={questions[ID].answers} />
      <div className="buttons-question">
        <button>Submit</button>
        <Link
          to={ID === questions.length - 1 ? "/results" : `/questions/${ID + 1}`}
        >
          Next Question
        </Link>
      </div>
    </div>
  );
};
