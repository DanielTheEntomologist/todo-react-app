import styles from "./ListForm.module.scss";

import TextInput from "../TextInput/TextInput.js";
import Button from "../Button/Button.js";
import { nanoid } from "nanoid";

import { useState } from "react";
import { useDispatch } from "react-redux";
import { addList } from "../../redux/listsRedux.js";

const ListForm = function () {
  const [[id1, id2], setIds] = useState(() => {
    return [nanoid(), nanoid()];
  });

  const defaultTitle = "New List";
  const defaultSubtitle = "Short Description";
  const [title, setTitle] = useState(defaultTitle);
  const [subtitle, setSubtitle] = useState(defaultSubtitle);

  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(addList(title, subtitle));
    setTitle(defaultTitle);
    setSubtitle(defaultSubtitle);
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
        <label htmlFor={id2}>Subtitle:</label>
        <TextInput
          placeholder={defaultSubtitle}
          id={id2}
          onChange={(e) => setSubtitle(e.target.value)}
        />
      </div>
      <Button>Add List</Button>
    </form>
  );
};

export default ListForm;
