export const Answer = ({ id, text, saveAnswer, selected }) => {
  return (
    <>
      <li className={id === selected ? "selected" : ""}>
        <input
          className="me-2"
          disabled={selected !== null}
          name="answer"
          id={id}
          type="radio"
          onChange={() => {
            saveAnswer(id);
          }}
        />
        <label htmlFor={id}>{text}</label>
      </li>
    </>
  );
};
