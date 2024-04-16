import { useEffect, useState } from "react";
import { useAppDispatch } from "../store/store";
import { addBook, Book, editBook } from "../store/features/bookSlice";
import "./Form.css";

interface Props {
  type: string;
  visible: boolean;
  data?: Book;
  handleClose: Function;
}

const Form = (props: Props) => {
  const [id, setId] = useState<number>(0);
  const [name, setName] = useState<string>(props.data ? props.data.name : "");
  const [price, setPrice] = useState<number>(props.data ? props.data.price : 0);
  const [category, setCategory] = useState<string>(props.data ? props.data.category : "");
  const [description, setDescription] = useState<string>(props.data ? props.data.description : "");

  const dispatch = useAppDispatch();


  useEffect(() => {
    if (props.data) {
      setName(props.data.name);
      setPrice(props.data.price);
      setCategory(props.data.category);
      setDescription(props.data.description);
    }
  }, [props?.data]);

  useEffect(() => {
    if (props.visible) {
      document.body.style.overflowY = "hidden";
    } else {
      document.body.style.overflowY = "auto";
    }
  }, [props.visible]);

  const submitDisabled = (): boolean => {
    return !(name && price && category && description);
  };

  const clearInput = (): void => {
    setName("");
    setPrice(0);
    setCategory("");
    setDescription("");
  };

  return (
    <div className={"form-container"}
         style={props.visible ? { display: "block" } : { display: "none" }}>
      <dialog open={props.visible} onClick={(e) => e.stopPropagation()}>
        <h1 className={"dialog-title"}>{props.type} Book</h1>
        <form className={"form"}>
          <div className={"dialog-row"}>
            <label>Name
              <input
                value={name}
                type={"text"}
                onChange={(e) => {
                  setName(e.target.value);
                }}
                required
              />
            </label>
            <label>Price
              <input
                type={"number"}
                value={price}
                onChange={(e) => {
                  setPrice(e.target.valueAsNumber);
                }}
              />
            </label>
          </div>
          <div className={"dialog-row"}>
            <label>Category
              <input
                value={category}
                type={"text"}
                onChange={(e) => {
                  setCategory(e.target.value);
                }}
                required
              />
            </label>
          </div>
          <div className={"dialog-row"}>
            <label>Description
              <textarea
                value={description}
                onChange={(e) => {
                  setDescription(e.target.value);
                }}
                required
              />
            </label>
          </div>
          <div className={"button-container"}>
            <button onClick={(e) => {
              props.handleClose(false);
              props.type === "Add" && clearInput();
              e.preventDefault();
            }}>Cancel
            </button>
            <button className={"primary-btn"} type="button" disabled={submitDisabled()} onClick={() => {
              if (props.type === "Add") {
                dispatch(addBook({
                  id: id,
                  name: name,
                  price: price,
                  category: category,
                  description: description,
                }));
                clearInput();
              } else if (props.type === "Edit") {
                dispatch(editBook({
                  id: props.data ? props.data.id : 0,
                  name: name,
                  price: price,
                  category: category,
                  description: description,
                }));
              }
              setId(id + 1);
              props.handleClose(false);
            }
            }>{props.type === "Add" ? props.type : "Save"}
            </button>
          </div>
        </form>
      </dialog>
      <div className={"dialog-background"} onClick={() => props.handleClose(false)}></div>
    </div>
  );
};

export default Form;