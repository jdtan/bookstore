import { useAppDispatch } from "../store/store";
import { deleteBook } from "../store/features/bookSlice";
import "./Delete.css";

interface Props {
  bookID: number;
  handleClose: Function;
}

const Delete = (props: Props) => {
  const { bookID, handleClose } = props;

  const dispatch = useAppDispatch();
  return (
    <button className={"negative-btn"} onClick={(e) => {
      dispatch(deleteBook({ id: bookID }));
      handleClose(false);
      e.stopPropagation();
    }}>Delete</button>
  );
};

export default Delete;