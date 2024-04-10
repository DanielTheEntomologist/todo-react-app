import styles from "./Home.module.scss";

// import Container from "../Container/Container";
import Hero from "../Hero/Hero";
import SearchForm from "../SearchForm/SearchForm";
import List from "../List/List";

const HomePage = () => {
  return (
    <div>
      <Hero />
      <SearchForm />
      <List listId={1} />
    </div>
  );
};

export default HomePage;
