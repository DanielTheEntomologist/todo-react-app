import styles from "./List.module.scss";
import Column from "../Column/Column.js";
import ColumnForm from "../ColumnForm/ColumnForm.js";
import { useState /*,useEffect */ } from "react";
import { nanoid } from "nanoid";

const List = () => {
  const [columns, setColumns] = useState([
    { key: nanoid(), title: "Books", icon: "book" },
    { key: nanoid(), title: "Movies", icon: "film" },
    { key: nanoid(), title: "Games", icon: "gamepad" },
  ]);

  const defaultIcon = "book";

  const [title, setTitle] = useState("");
  const [icon, setIcon] = useState(defaultIcon);

  // run only once
  // useEffect(() => {
  //   setTimeout(() => {
  //     setColumns([...columns, { key: 4, title: "Test column" }]);
  //   }, 2000);
  // }, []);
  const handleSubmit = (e) => {
    e.preventDefault();
    setColumns([...columns, { key: nanoid(), title: title, icon: icon }]);
    setTitle("");
    setIcon(defaultIcon);
    e.target.reset();
  };

  return (
    <div className={styles.list}>
      <header className={styles.header}>
        <h2 className={styles.title}>
          Things to do <span>soon</span>
        </h2>
      </header>
      <p className={styles.description}>
        {" "}
        Interesting things I want to check out
      </p>
      <section className={styles.columns}>{columns.map(Column)}</section>
      <ColumnForm
        title={title}
        onTitleChange={(e) => setTitle(e.target.value)}
        onIconChange={(e) => setIcon(e.target.value)}
        handleSubmit={handleSubmit}
      />

      {/* <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={value}
          onChange={(e) => setValue(e.target.value)}
        />
        <button>Add column</button>
      </form> */}
    </div>
  );
};

export default List;
