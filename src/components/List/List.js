import styles from "./List.module.scss";
import Column from "../Column/Column.js";

const List = () => {
  const columns = [
    { key: 1, title: "Books", icon: "book" },
    { key: 2, title: "Movies", icon: "film" },
    { key: 3, title: "Games", icon: "gamepad" },
  ];

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
    </div>
  );
};

export default List;
