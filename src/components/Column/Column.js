import styles from "./Column.module.scss";

import Card from "../Card/Card.js";
import CardForm from "../CardForm/CardForm.js";

import { useState } from "react";
import { nanoid } from "nanoid";

import { useSelector } from "react-redux";

const Column = ({ title, icon, id }) => {
  // const [cards, setCards] = useState(props.cards);

  // const defaultCardTitle = "New Card";

  const cards = useSelector((state) =>
    state.cards.filter((card) => card.columnId === id)
  );

  console.log(cards);

  const element = (
    <article className={styles.column}>
      <h1 className={styles.title}>
        <span className={styles.icon + " fa fa-" + icon}></span>
        {title}
      </h1>
      <ul className={styles.cards}>
        {cards.map((card) => (
          <Card key={card.key} title={card.title} />
        ))}
      </ul>
      <CardForm
        title={title}
        f
        columnId={id}
        // action={addCard}
        // onTitleChange={(e) => setTitle(e.target.value)}
      />
    </article>
  );

  return element;
};

export default Column;
