import styles from "./ColumnForm.module.scss";

import TextInput from "../TextInput/TextInput.js";
import Button from "../Button/Button.js";
import { nanoid } from "nanoid";

import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";

const ColumnForm = function () {
  const [[id1, id2], setIds] = useState(() => {
    return [nanoid(), nanoid()];
  });

  const defaultTitle = "New Column";
  const defaultIcon = "star";
  const [title, setTitle] = useState(defaultTitle);
  const [icon, setIcon] = useState(defaultIcon);

  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch({
      type: "ADD_COLUMN",
      newColumn: { id: nanoid(), title: title, icon: icon },
    });
    setTitle(defaultTitle);
    setIcon(defaultIcon);
    e.target.reset();
  };

  return (
    <form className={styles.columnForm} onSubmit={handleSubmit}>
      <div>
        <label htmlFor={id1}>Title:</label>
        <TextInput
          type="text"
          id={id1}
          // value={title}
          placeholder={defaultTitle}
          onChange={(e) => setTitle(e.target.value)}
        />
      </div>
      <div>
        <label htmlFor={id2}>Icon:</label>
        <TextInput
          placeholder={defaultIcon}
          id={id2}
          onChange={(e) => setIcon(e.target.value)}
        />
      </div>
      <Button>Add column</Button>
    </form>
  );
};

export default ColumnForm;
