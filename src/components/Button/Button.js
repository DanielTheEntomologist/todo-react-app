import styles from "./Button.module.scss";

const SearchForm = (props) => {
  return <button className={styles.button}>{props.text}</button>;
};

export default SearchForm;
