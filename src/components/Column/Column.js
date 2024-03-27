import styles from "./Column.module.scss";

const Column = (props) => {
  const element = (
    <article className={styles.column} key={props.key}>
      <h1 className={styles.title}>
        <span className={styles.icon + " fa fa-" + props.icon}></span>
        {props.title}
      </h1>
    </article>
  );

  return element;
};

export default Column;
