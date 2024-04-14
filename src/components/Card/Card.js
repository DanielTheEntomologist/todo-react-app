import styles from "./Card.module.scss";

const Card = (props) => {
  const isFavorite = true;

  const element = (
    <li className={styles.card}>
      <span>{props.title}</span>
      <div className={styles.controls}>
        <i
          className={`${styles.button} ${
            isFavorite ? styles.isFavorite : ""
          } fa fa-star-o`}
        ></i>
        <i className={`${styles.button} fa fa-trash`}></i>
      </div>
    </li>
  );

  return element;
};
export default Card;
