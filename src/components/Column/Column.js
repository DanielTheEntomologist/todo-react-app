import styles from "./Column.module.scss";

import Card from "../Card/Card.js";
import CardForm from "../CardForm/CardForm.js";

import { useState } from "react";
import { nanoid } from "nanoid";

const Column = (props) => {
  // const [cards, setCards] = useState(props.cards);

  const defaultCardTitle = "New Card";
  const [title, setTitle] = useState(defaultCardTitle);

  const element = (
    <article className={styles.column}>
      <h1 className={styles.title}>
        <span className={styles.icon + " fa fa-" + props.icon}></span>
        {props.title}
      </h1>
      <ul className={styles.cards}>
        {props.cards.map((card) => (
          <Card key={card.key} title={card.title} />
        ))}
      </ul>
      <CardForm
        title={props.title}
        f
        columnId={props.id}
        action={props.addCard}
        onTitleChange={(e) => setTitle(e.target.value)}
      />
    </article>
  );

  return element;
};

export default Column;
