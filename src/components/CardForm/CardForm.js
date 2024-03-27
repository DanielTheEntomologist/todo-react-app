import styles from "./CardForm.module.scss";

import TextInput from "../TextInput/TextInput.js";
import Button from "../Button/Button.js";
import { nanoid } from "nanoid";
import { useState } from "react";

const CardForm = function (props) {
  const [title, setTitle] = useState("New Card");

  const handleSubmit = (e) => {
    e.preventDefault();
    props.action(title, props.columnId);
    setTitle("New Card");
    e.target.reset();
  };

  return (
    <form className={styles.cardForm} onSubmit={handleSubmit}>
      <TextInput
        type="text"
        id={nanoid()}
        placeholder={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <Button>Add card</Button>
    </form>
  );
};

export default CardForm;
