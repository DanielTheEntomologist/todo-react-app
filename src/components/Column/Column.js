import styles from "./Column.module.scss";

import Card from "../Card/Card.js";

const Column = (props) => {
  const element = (
    <article className={styles.column} key={props.key}>
      <h1 className={styles.title}>
        <span className={styles.icon + " fa fa-" + props.icon}></span>
        {props.title}
      </h1>
      <ul className={styles.cards}>
        {props.cards.map((card) => (
          <Card key={card.key} title={card.title} />
        ))}
      </ul>
    </article>
  );

  return element;
};

export default Column;
