import styles from "./Button.module.scss";

const SearchForm = (props) => {
  return <button className={styles.button}>{props.children}</button>;
};

export default SearchForm;
