import { useRef, useState } from "react";
import { useAppDispatch } from "../store/store";
import { useDispatch } from "react-redux";
import { deleteBook } from "../store/features/bookSlice";

const Delete = ({ bookID }: { bookID: number }) => {

  const dispatch = useAppDispatch();
  return (
    <button onClick={() => {
      dispatch(deleteBook({ id: bookID }));
    }}>Delete</button>
  );
};

export default Delete;