import { Answer } from "./Answer";

export const Answers = ({ answers, saveAnswer, selected, disabled }) => {
  const newAnswers = Object.entries(answers);

  return (
    <div className="container">
      <ul className="text-start">
        {newAnswers.map(([answerKey, answerText]) => (
          <Answer
            key={answerKey}
            text={answerText}
            id={answerKey}
            saveAnswer={saveAnswer}
            selected={selected}
            disabled={disabled}
          />
        ))}
      </ul>
    </div>
  );
};
