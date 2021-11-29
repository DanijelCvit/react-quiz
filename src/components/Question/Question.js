import { Link } from "react-router-dom";
import { useParams } from "react-router";
import { Answers } from "./Answers";

export const Question = ({ questions, handleSubmit }) => {
  const { id } = useParams();
  const ID = parseInt(id);

  const saveAnswer = (answerKey) => {
    localStorage.setItem(ID, answerKey);
  };

  return (
    <div className="question position-relative">
      {ID > questions.length - 1 ? (
        <>
          <h4>No such question</h4>
          <div className="center">
            {" "}
            <Link className="btn btn-primary" to="/">
              Go to Start
            </Link>
          </div>
        </>
      ) : (
        <>
          <h1 className="mt-3">{`${ID + 1}. ${questions[ID].text}`}</h1>
          <Answers
            answers={questions[ID].answers}
            saveAnswer={saveAnswer}
            selected={questions[ID].selected}
          />
          <div className="buttons-question">
            <button
              className="btn btn-primary me-1"
              onClick={() => {
                handleSubmit(ID, { selected: localStorage.getItem(ID) });
              }}
            >
              Submit
            </button>
            <Link
              className="btn btn-primary ms-1"
              to={
                ID === questions.length - 1
                  ? "/results"
                  : `/questions/${ID + 1}`
              }
            >
              Next Question
            </Link>
          </div>
        </>
      )}
    </div>
  );
};
