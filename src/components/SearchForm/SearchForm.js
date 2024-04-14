import styles from "./SearchForm.module.scss";
import TextInput from "../TextInput/TextInput.js";
import Button from "../Button/Button.js";
import buttonStyles from "../Button/Button.module.scss";

import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import { changeSearchTerm } from "../../redux/searchTermRedux.js";

const SearchForm = () => {
  const [term, setTerm] = useState("");

  const dispatch = useDispatch();

  const previousTerm = useSelector((state) => state.searchTerm);

  const handleSubmit = (e) => {
    e.preventDefault();

    let termToDispatch = term;
    if (term === previousTerm) {
      setTerm("");
      termToDispatch = "";
    }
    termToDispatch = termToDispatch.trim();

    dispatch(changeSearchTerm(termToDispatch));
    e.target.reset();
  };

  const filteringActive = previousTerm !== "";

  let placeholder = previousTerm;
  if (!filteringActive) placeholder = "Search...";

  return (
    <form className={styles.searchForm} onSubmit={handleSubmit}>
      <TextInput
        placeholder={placeholder}
        onChange={(e) => {
          setTerm(e.target.value);
        }}
      />
      <Button classList={filteringActive ? [buttonStyles.danger] : null}>
        <span
          className={filteringActive ? "fa fa-filter" : "fa fa-search"}
        ></span>
      </Button>
    </form>
  );
};

export default SearchForm;
