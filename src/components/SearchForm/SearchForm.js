import styles from "./SearchForm.module.scss";
import TextInput from "../TextInput/TextInput.js";
import Button from "../Button/Button.js";

import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";

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

    dispatch({
      type: "CHANGE_SEARCH_TERM",
      payload: { term: termToDispatch },
    });
    e.target.reset();
  };

  return (
    <form className={styles.searchForm} onSubmit={handleSubmit}>
      <TextInput
        placeholder="Search..."
        onChange={(e) => {
          setTerm(e.target.value);
        }}
      />
      <Button>
        <span className="fa fa-search"></span>
      </Button>
    </form>
  );
};

export default SearchForm;
