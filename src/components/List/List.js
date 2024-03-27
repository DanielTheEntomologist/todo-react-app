import styles from "./List.module.scss";
import Column from "../Column/Column.js";

const List = () => {
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
        <Column title="Books" icon="book" />
        <Column title="Movies" icon="film" />
        <Column title="Games" icon="gamepad" />
      </section>
      {/* <ul>
            <li>Learn React</li>
            <li>Code React</li>
            <li>Refactor React</li>
        </ul> */}
    </div>
  );
};

export default List;
