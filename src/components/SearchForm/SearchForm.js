import styles from "./SearchForm.module.scss";
import TextInput from "../TextInput/TextInput.js";
import Button from "../Button/Button.js";

import { useDispatch } from "react-redux";
import { useState } from "react";

const SearchForm = () => {
  const [term, setTerm] = useState("");

  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch({
      type: "CHANGE_SEARCH_TERM",
      payload: { term: term },
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
