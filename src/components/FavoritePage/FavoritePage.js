import styles from "./FavoritePage.module.scss";

import Container from "../Container/Container";
import PageTitle from "../PageTitle/PageTitle";
import FavoriteColumn from "../FavoriteColumn/FavoriteColumn";

const FavoritePage = () => {
  return (
    <Container>
      <div className={styles.favorite}>
        <PageTitle>Favorite</PageTitle>
        <FavoriteColumn title="Favorite" />
      </div>
    </Container>
  );
};

export default FavoritePage;
