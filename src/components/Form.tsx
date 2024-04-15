import { useRef, useState } from "react";
import { useAppDispatch } from "../store/store";
import { useDispatch } from "react-redux";
import { addBook, Book, editBook } from "../store/features/bookSlice";
import { PayloadAction } from "@reduxjs/toolkit";

interface Props {
  type: string;
  visible: boolean;
  data?: any;
  handleClose: Function;
}

const Form = (props: Props) => {
  // const name = useRef<string>("");
  // const price = useRef<number>(0);
  // const category = useRef<string>("");
  // const description = useRef<string>("");
  const [name, setName] = useState<string>(props.data ? props.data.name : "");
  const [price, setPrice] = useState<number>(0);
  const [category, setCategory] = useState<string>("");
  const [description, setDescription] = useState<string>("");

  // const [visible, setVisible] = useState<boolean>(props.visible);

  const dispatch = useAppDispatch();

  const [cnt, setCnt] = useState<number>(0);
  // const [submitDisabled, setSubmitDisabled] = useState<boolean>(true);

  const submitDisabled = (): boolean => {
    // return !(name.current && price.current && category.current && description.current && description.current.length > 0);
    return !(name && price && category && description);
  };

  return (
    <div>
      <dialog open={props.visible}>
        <form className={"form"}>
          <label>Name
            <input
              className={"input"}
              value={name}
              onChange={(e) => {
                // name.current = e.target.value;
                setName(e.target.value);
              }}
              required
            />
          </label>
          <label>Price
            <input
              className={"input"}
              type={"number"}
              onChange={(e) => {
                // price.current = e.target.valueAsNumber;
                setPrice(e.target.valueAsNumber);
              }}
            />
          </label>
          <label>Category
            <input
              className={"input"}
              onChange={(e) => {
                // category.current = e.target.value;
                setCategory(e.target.value);
              }}
              required
            />
          </label>
          <label>Description
            <textarea
              className={"input"}
              onChange={(e) => {
                // description.current = e.target.value;
                setDescription(e.target.value);
              }}
              required
            />
          </label>
          <button type="button" disabled={submitDisabled()} onClick={() => {
            if (props.type === "Add") {
              dispatch(addBook({
                id: cnt,
                // name: name.current,
                // price: price.current,
                // category: category.current,
                // description: description.current
                name: name,
                price: price,
                category: category,
                description: description,
              }));
            } else if (props.type === "Edit") {
              dispatch(editBook({
                id: props.data.id,
                name: name,
                price: price,
                category: category,
                description: description,
              }));
            }

            // dispatch(addBook({ id: cnt, name: name.current }));
            // props.buttonAction;
            setCnt(cnt + 1);
          }
          }>Add
          </button>
          <button onClick={(e) => {
            props.handleClose(false);
            e.preventDefault();
          }}>Cancel
          </button>
        </form>
      </dialog>
    </div>
  );
};

export default Form;