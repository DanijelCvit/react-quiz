export const Answer = ({ id, text }) => {
  return (
    <>
      <li>
        <input name="answer" id={id} type="radio" />
        <label htmlFor={id}>{text}</label>
      </li>
    </>
  );
};
