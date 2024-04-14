import styles from "./TextInput.module.scss";

const TextInput = (props) => {
  return (
    <input
      id={props.id}
      className={styles.input}
      type="text"
      placeholder={props.placeholder}
      onChange={props.onChange}
    />
  );
};

export default TextInput;
