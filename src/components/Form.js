import { useParams } from "react-router";
import { useState } from "react";

export const Form = ({ questions, handleSubmit }) => {
  const { id } = useParams();
  const ID = parseInt(id);

  const [text, setText] = useState(questions[ID].text);
  const [answerA, setAnswerA] = useState(questions[ID].answers["a"]);
  const [answerB, setAnswerB] = useState(questions[ID].answers["b"]);
  const [answerC, setAnswerC] = useState(questions[ID].answers["c"]);
  const [answerD, setAnswerD] = useState(questions[ID].answers["d"]);

  const onSubmit = (e) => {
    e.preventDefault();
    if (!text || !answerA || !answerB || !answerC || !answerD) {
      alert("Please complete the form");
      return;
    }
    handleSubmit(ID, {
      text,
      answers: { a: answerA, b: answerB, c: answerC, d: answerD },
    });
  };

  return (
    <form className="question" style={{ width: "500px" }} onSubmit={onSubmit}>
      <h1>EDIT</h1>
      <div className="mb-3">
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
      <div className="mb-2">
        <input
          className="form-control"
          type="text"
          placeholder={questions[ID].answers["a"]}
          value={answerA}
          onChange={(e) => {
            setAnswerA(e.target.value);
          }}
        />
      </div>
      <div className="mb-2">
        <input
          className="form-control"
          type="text"
          placeholder={questions[ID].answers["b"]}
          value={answerB}
          onChange={(e) => {
            setAnswerB(e.target.value);
          }}
        />
      </div>
      <div className="mb-2">
        <input
          className="form-control"
          type="text"
          placeholder={questions[ID].answers["c"]}
          value={answerC}
          onChange={(e) => {
            setAnswerC(e.target.value);
          }}
        />
      </div>
      <div className="mb-2">
        <input
          className="form-control"
          type="text"
          placeholder={questions[ID].answers["c"]}
          value={answerD}
          onChange={(e) => {
            setAnswerD(e.target.value);
          }}
        />
      </div>
      <div className="d-grid gap-2">
        <input type="submit" value="Save" className="btn btn-primary" />
      </div>
    </form>
  );
};
