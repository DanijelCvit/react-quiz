import { Answer } from "./Answer";

export const Answers = ({ answers }) => {
  const newAnswers = Object.entries(answers);

  return (
    <ul>
      {newAnswers.map(([answerKey, answerText]) => (
        <Answer key={answerKey} text={answerText} id={answerKey} />
      ))}
    </ul>
  );
};
