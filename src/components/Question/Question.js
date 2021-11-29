import { Link } from "react-router-dom";
import { useParams } from "react-router";
import { Answers } from "./Answers";
import { useState } from "react";

export const Question = ({ questions, handleSubmit }) => {
  const { id } = useParams();
  const ID = parseInt(id);
  const [answer, setAnswer] = useState(questions[ID].selected);

  const saveAnswer = (answerKey) => {
    setAnswer(answerKey);
  };

  return (
    <div className="question position-relative">
      {/* Check if question number exists, show error message and back button instead */}
      {ID > questions.length - 1 ? (
        <>
          <h4>No such question</h4>
          <div className="center">
            <Link className="btn btn-primary" to="/">
              Go to Start
            </Link>
          </div>
        </>
      ) : (
        <>
          {/* Question */}
          <h1 className="mt-3">{`${ID + 1}. ${questions[ID].text}`}</h1>
          <Answers
            answers={questions[ID].answers}
            saveAnswer={saveAnswer}
            disabled={questions[ID].selected}
            selected={answer}
          />
          {/* Submit button */}
          <div className="buttons-question">
            <button
              disabled={questions[ID].selected}
              className="btn btn-primary me-1"
              onClick={() => {
                handleSubmit(ID, { selected: answer });
              }}
            >
              Submit
            </button>
            {/* Route to next question or results */}
            <Link
              className="btn btn-primary ms-1"
              to={
                ID === questions.length - 1
                  ? "/results"
                  : `/questions/${ID + 1}`
              }
            >
              {questions[ID].selected ? "Next Question" : "Skip Question"}
            </Link>
          </div>
        </>
      )}
    </div>
  );
};
