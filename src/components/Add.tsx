import { useRef, useState } from "react";
import { useAppDispatch } from "../store/store";
import { useDispatch } from "react-redux";
import { addBook } from "../store/features/bookSlice";
import Form from "./Form";

const Add = () => {
  const name = useRef<string>("");
  const dispatch = useAppDispatch();
  const [cnt, setCnt] = useState<number>(0);
  const [visible, setVisible] = useState<boolean>(false);

  const handleClose = (openState: boolean) => {
    setVisible(openState);
  };

  return (
    <div>
      {/*<dialog open>*/}
      <button onClick={() => setVisible(true)}>New Book</button>
      <Form type={"Add"} visible={visible} handleClose={handleClose}/>
      {/*<form className={"form"}>*/}
      {/*  <label>Book Name</label>*/}
      {/*  <input*/}
      {/*    className={"input"}*/}
      {/*    onChange={(e) => {*/}
      {/*      name.current = e.target.value;*/}
      {/*    }}*/}
      {/*  />*/}
      {/*  <button type="button" onClick={() => {*/}
      {/*    dispatch(addBook({ id: cnt, name: name.current }));*/}
      {/*    setCnt(cnt + 1);*/}
      {/*  }*/}
      {/*  }>Add*/}
      {/*  </button>*/}
      {/*</form>*/}
      {/*/!*</dialog>*!/*/}
    </div>
  );
};

export default Add;