import styles from "./SearchForm.module.scss";
import TextInput from "../TextInput/TextInput.js";
import Button from "../Button/Button.js";

const SearchForm = () => {
  return (
    <form className={styles.searchForm}>
      <TextInput placeholder="Search..." />
      <Button text="Search" />
    </form>
  );
};

export default SearchForm;
