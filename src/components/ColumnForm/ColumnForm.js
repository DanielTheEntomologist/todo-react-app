import styles from "./ColumnForm.module.scss";

import TextInput from "../TextInput/TextInput.js";
import Button from "../Button/Button.js";
import { nanoid } from "nanoid";

const id1 = nanoid();
const id2 = nanoid();

const ColumnForm = function (props) {
  return (
    <form className={styles.form} onSubmit={props.handleSubmit}>
      <label htmlFor={id1}>Title:</label>
      <TextInput
        type="text"
        id={id1}
        value={props.title}
        onChange={props.onTitleChange}
      />
      <label htmlFor={id2}>Icon:</label>
      <TextInput value={props.icon} id={id2} onChange={props.onIconChange} />
      <Button>Add column</Button>
    </form>
  );
};

export default ColumnForm;
