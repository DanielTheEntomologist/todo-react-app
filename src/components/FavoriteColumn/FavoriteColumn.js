import styles from "../Column/Column.module.scss";

import Card from "../Card/Card.js";
import CardForm from "../CardForm/CardForm.js";

import { useSelector } from "react-redux";
import { getFavoriteCards } from "../../redux/store.js";

const FavoriteColumn = ({ title, icon, id }) => {
  const cards = useSelector((state) => getFavoriteCards(state));

  const element = (
    <article className={styles.column}>
      <h1 className={styles.title}>
        <span className={styles.icon + " fa fa-" + icon}></span>
        {title}
      </h1>
      <ul className={styles.cards}>
        {cards.map((card) => (
          <Card
            key={card.id}
            id={card.id}
            title={card.title}
            isFavorite={card.isFavorite}
          />
        ))}
      </ul>
    </article>
  );

  return element;
};

export default FavoriteColumn;
