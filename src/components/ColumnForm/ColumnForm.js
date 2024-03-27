import styles from "./ColumnForm.module.scss";

import TextInput from "../TextInput/TextInput.js";
import Button from "../Button/Button.js";

const ColumnForm = function (props) {
  return (
    <form className={styles.form} onSubmit={props.handleSubmit}>
      <span>Title:</span>
      <TextInput
        type="text"
        value={props.title}
        onChange={props.onTitleChange}
      />
      <span>Icon:</span>
      <TextInput value={props.icon} onChange={props.onIconChange} />
      <Button>Add column</Button>
    </form>
  );
};

export default ColumnForm;
