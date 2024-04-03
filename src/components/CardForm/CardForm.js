import styles from "./CardForm.module.scss";

import TextInput from "../TextInput/TextInput.js";
import Button from "../Button/Button.js";
import { nanoid } from "nanoid";
import { useState } from "react";
import { useDispatch } from "react-redux";

const CardForm = function ({ columnId }) {
  const defaultTitle = "New Card";
  const [title, setTitle] = useState(defaultTitle);

  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch({
      type: "ADD_CARD",
      payload: { id: nanoid(), columnId: columnId, title: title },
    });
    setTitle(defaultTitle);
    e.target.reset();
  };

  return (
    <form className={styles.cardForm} onSubmit={handleSubmit}>
      <TextInput
        type="text"
        id={nanoid()}
        placeholder={defaultTitle}
        onChange={(e) => setTitle(e.target.value)}
      />
      <Button>Add card</Button>
    </form>
  );
};

export default CardForm;
