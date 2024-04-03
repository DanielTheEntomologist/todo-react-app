import styles from "./List.module.scss";
import Column from "../Column/Column.js";
import ColumnForm from "../ColumnForm/ColumnForm.js";
import { useState /*,useEffect */ } from "react";
import { nanoid } from "nanoid";

import { useSelector } from "react-redux";

const List = () => {
  // const [columns, setColumns] = useState([
  //   { key: nanoid(), title: "Books", icon: "book" },
  //   { key: nanoid(), title: "Movies", icon: "film" },
  //   { key: nanoid(), title: "Games", icon: "gamepad" },
  // ]);

  const columns = useSelector((state) => state.columns);

  const setColumns = (columns) => {
    return null;
  };

  // const [columns, setColumns] = useState([
  //   {
  //     key: nanoid(),
  //     title: "Books",
  //     icon: "book",
  //     cards: [
  //       { key: nanoid(), title: "This is Going to Hurt" },
  //       { key: nanoid(), title: "Interpreter of Maladies" },
  //     ],
  //   },
  //   {
  //     key: nanoid(),
  //     title: "Movies",
  //     icon: "film",
  //     cards: [
  //       { key: nanoid(), title: "Harry Potter" },
  //       { key: nanoid(), title: "Star Wars" },
  //     ],
  //   },
  //   {
  //     key: nanoid(),
  //     title: "Games",
  //     icon: "gamepad",
  //     cards: [
  //       { key: nanoid(), title: "The Witcher" },
  //       { key: nanoid(), title: "Skyrim" },
  //     ],
  //   },
  // ]);

  const defaultIcon = "book";

  const [title, setTitle] = useState("");
  const [icon, setIcon] = useState(defaultIcon);

  // run only once
  // useEffect(() => {
  //   setTimeout(() => {
  //     setColumns([...columns, { key: 4, title: "Test column" }]);
  //   }, 2000);
  // }, []);
  // const addColumn = (e) => {
  //   e.preventDefault();
  //   setColumns([
  //     ...columns,
  //     { key: nanoid(), title: title, icon: icon, cards: [] },
  //   ]);
  //   setTitle("");
  //   setIcon(defaultIcon);
  //   e.target.reset();
  // };

  const addCard = (title, columnId) => {
    // console.log(newCard, columnId);
    const newCard = { key: nanoid(), title: title };

    const newColumns = columns.map((column) => {
      if (column.key === columnId) {
        return {
          ...column,
          cards: [...column.cards, newCard],
        };
      }
      return column;
    });
    setColumns(newColumns);
    // setCards([...cards, newCard]);
    // setTitle(defaultCardTitle);
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
      <section className={styles.columns}>
        {columns.map((column) => {
          return (
            <Column
              key={column.id}
              id={column.id}
              title={column.title}
              icon={column.icon}
            />
          );
        })}
      </section>
      <ColumnForm
        title={title}
        onTitleChange={(e) => setTitle(e.target.value)}
        onIconChange={(e) => setIcon(e.target.value)}
        // handleSubmit={addColumn}
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
