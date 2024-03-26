import styles from "./List.module.scss";

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
        <article>
          <h1 className={styles.title}>Books</h1>
        </article>
        <article>
          <h1 className={styles.title}>Movies</h1>
        </article>
        <article>
          <h1 className={styles.title}>Games</h1>
        </article>
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
