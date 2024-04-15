import { useAppSelector } from "../store/store";
import Delete from "./Delete";
import Form from "./Form";
import { useState } from "react";

const List = () => {
  const bookList = useAppSelector((state) => state.book.books);
  const [visible, setVisible] = useState(false);

  const handleClose = (openState: boolean) => {
    setVisible(openState);
  };

  return (
    <div onClick={() => setVisible(true)}>
      {bookList.map((book) => (<div>{book.name} {book.price} {book.category}<Delete bookID={book.id}/>
        <Form type={"Edit"} visible={visible} handleClose={handleClose} data={book}/>
      </div>))}

    </div>
  );
};

export default List;