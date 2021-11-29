import { useParams } from "react-router";
import { Link } from "react-router-dom";

export const Delete = ({ handleDelete, questions, disabled }) => {
  const { id } = useParams();
  const ID = parseInt(id);
  return (
    <>
      <Link
        to={
          ID === questions.length - 1
            ? `/questions/${ID - 1}`
            : `/questions/${ID}`
        }
        onClick={() => {
          handleDelete(ID);
        }}
        className={`btn btn-link ${disabled && "disabled"}`}
      >
        <span className="material-icons">delete_outline</span>
      </Link>
    </>
  );
};
