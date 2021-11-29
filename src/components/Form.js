import { useParams } from "react-router";
import { useState } from "react";

export const Form = ({ questions, handleAction, setShowForm, showForm }) => {
  const { id } = useParams();
  const ID = parseInt(id);

  const [text, setText] = useState(questions[ID].text);
  const [answerA, setAnswerA] = useState(questions[ID].answers["a"]);
  const [answerB, setAnswerB] = useState(questions[ID].answers["b"]);
  const [answerC, setAnswerC] = useState(questions[ID].answers["c"]);
  const [answerD, setAnswerD] = useState(questions[ID].answers["d"]);
  const [correct, setCorrect] = useState("");

  const onSubmit = (e) => {
    e.preventDefault();
    if (!text || !answerA || !answerB || !answerC || !answerD) {
      alert("Please complete the form");
      return;
    }
    if (showForm.action === "edit") {
      handleAction(ID, {
        text,
        answers: { a: answerA, b: answerB, c: answerC, d: answerD },
      });
    } else if (showForm.action === "create") {
      handleAction({
        text,
        answers: { a: answerA, b: answerB, c: answerC, d: answerD },
        correct,
      });
    }

    setShowForm({ show: false, action: "edit" });
  };

  return (
    <form className="question" style={{ width: "500px" }} onSubmit={onSubmit}>
      <h1>{showForm.action.toUpperCase()}</h1>
      <div className="mb-3 row">
        <input
          className="form-control"
          type="text"
          placeholder={questions[ID].text}
          value={text}
          onChange={(e) => {
            setText(e.target.value);
          }}
        />
      </div>
      <div className="mb-3 row">
        <label className="col-sm-1 col-form-label" htmlFor="a">
          a
        </label>
        <div className="col-sm-11">
          <input
            id="a"
            className="form-control"
            type="text"
            placeholder={questions[ID].answers["a"]}
            value={answerA}
            onChange={(e) => {
              setAnswerA(e.target.value);
            }}
          />
        </div>
      </div>
      <div className="mb-3 row">
        <label className="col-sm-1 col-form-label" htmlFor="b">
          b
        </label>
        <div className="col-sm-11">
          <input
            id="b"
            className="form-control"
            type="text"
            placeholder={questions[ID].answers["b"]}
            value={answerB}
            onChange={(e) => {
              setAnswerB(e.target.value);
            }}
          />
        </div>
      </div>
      <div className="mb-3 row">
        <label className="col-sm-1 col-form-label" htmlFor="c">
          c
        </label>
        <div className="col-sm-11">
          <input
            id="c"
            className="form-control"
            type="text"
            placeholder={questions[ID].answers["c"]}
            value={answerC}
            onChange={(e) => {
              setAnswerC(e.target.value);
            }}
          />
        </div>
      </div>
      <div className="mb-3 row">
        <label className="col-sm-1 col-form-label" htmlFor="d">
          d
        </label>
        <div className="col-sm-11">
          <input
            id="d"
            className="form-control"
            type="text"
            placeholder={questions[ID].answers["c"]}
            value={answerD}
            onChange={(e) => {
              setAnswerD(e.target.value);
            }}
          />
        </div>
      </div>
      {showForm.action === "create" ? (
        <div className="mb-3 row">
          <label className="col-sm-2 col-form-label" htmlFor="correct">
            Correct
          </label>
          <div className="col-sm-2">
            <input
              id="correct"
              className="form-control"
              type="text"
              value={correct}
              placeholder="a"
              onChange={(e) => {
                setCorrect(e.target.value);
              }}
            />
          </div>
        </div>
      ) : (
        ""
      )}
      <div className="d-grid gap-2">
        <input type="submit" value="Save" className="btn btn-primary" />
      </div>
    </form>
  );
};
