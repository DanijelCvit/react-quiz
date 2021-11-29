export const Answer = ({ id, text, saveAnswer, selected, disabled }) => {
  return (
    <>
      <li className={id === selected ? "selected" : ""}>
        <input
          checked={selected === id}
          className="me-2"
          disabled={disabled}
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
