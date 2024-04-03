import styles from "./Column.module.scss";

import Card from "../Card/Card.js";
import CardForm from "../CardForm/CardForm.js";

import { useSelector } from "react-redux";

const Column = ({ title, icon, id }) => {
  const cards = useSelector((state) =>
    state.cards.filter((card) => card.columnId === id)
  );

  const searchTerm = useSelector((state) => state.searchTerm);

  const filteredCards = cards.filter((card) =>
    card.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const element = (
    <article className={styles.column}>
      <h1 className={styles.title}>
        <span className={styles.icon + " fa fa-" + icon}></span>
        {title}
      </h1>
      <ul className={styles.cards}>
        {filteredCards.map((card) => (
          <Card key={card.id} id={card.id} title={card.title} />
        ))}
      </ul>
      <CardForm columnId={id} />
    </article>
  );

  return element;
};

export default Column;
