import { Link } from "react-router-dom";

export const Start = () => {
  return (
    <>
      <h1>START PAGE</h1>
      <Link to={`questions/0`}>Start Quiz</Link>
    </>
  );
};
