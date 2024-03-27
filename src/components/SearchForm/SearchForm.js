import styles from "./SearchForm.module.scss";
import TextInput from "../TextInput/TextInput.js";

const SearchForm = () => {
  return (
    <form className={styles.searchForm}>
      <TextInput />
      <Button />
    </form>
  );
};

export default SearchForm;
