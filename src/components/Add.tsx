import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import "./Add.css";

import Form from "./Form";

const Add = () => {
  const [visible, setVisible] = useState<boolean>(false);

  const handleClose = (openState: boolean) => {
    setVisible(openState);
  };

  return (
    <div>
      <button className={"primary-btn plus"} onClick={() => setVisible(true)}>
        <FontAwesomeIcon icon={faPlus}/>
        New
      </button>
      <Form type={"Add"} visible={visible} handleClose={handleClose}/>
    </div>
  );
};

export default Add;