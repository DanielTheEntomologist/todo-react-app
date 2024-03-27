import styles from "./Card.module.scss";

const Card = (props) => {
  const element = <li className={styles.card}>{props.title}</li>;

  return element;
};
export default Card;
