import styles from "./Button.module.scss";

const SearchForm = (props) => {
  let className = styles.button;

  // Add additional classes
  if (props.classList) {
    className += props.classList.map((x) => ` ${x}`).reduce((a, b) => a + b);
  }

  return <button className={className}>{props.children}</button>;
};

export default SearchForm;
