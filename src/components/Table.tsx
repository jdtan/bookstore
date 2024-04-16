import { useState } from "react";
import { useAppSelector } from "../store/store";
import { Book } from "../store/features/bookSlice";

import Delete from "./Delete";
import Form from "./Form";
import "./Table.css";

const Table = () => {
  const bookList = useAppSelector((state) => state.book.books);

  const [visible, setVisible] = useState<boolean>(false);
  const [dialogData, setDialogData] = useState<Book>();

  const handleClose = (openState: boolean) => {
    setVisible(openState);
  };

  const handleClick = (data: Book) => {
    setVisible(true);
    setDialogData(data);
  };

  return (
    <div className={"table-container"}>
      <div className={"table-header table-row"}>
        <span className={"col col-name"}>Name</span>
        <span className={"col col-price"}>Price</span>
        <span className={"col col-category"}>Category</span>
        <span className={"col col-delete"}>Action</span>
      </div>
      {bookList.length === 0 ?
        <div className={"empty-table"}>
          <p>No Books Found</p>
          Try adding books to view them here!
        </div> :
        bookList.map((book) => (
            <div className={"table-row"} key={book.id} onClick={() => handleClick(book)}>
              <span className={"col col-name"}><span>Name </span>{book.name}</span>
              <span className={"col col-price"}><span>Price </span>${book.price.toFixed(2)}</span>
              <span className={"col col-category"}><span>Category </span>{book.category}</span>
              <span className={"col col-delete"}>
                <Delete bookID={book.id} handleClose={handleClose}/>
              </span>
            </div>
          )
        )}
      <Form type={"Edit"} visible={visible} handleClose={handleClose} data={dialogData}/>
    </div>
  );
};

export default Table;