// import logo from "./logo.svg";
// import "./App.css";
import Hero from "./components/Hero/Hero.js";
import SearchForm from "./components/SearchForm/SearchForm.js";
import List from "./components/List/List.js";
import Container from "./components/Container/Container.js";
import Navbar from "./components/Navbar/Navbar.js";

function App() {
  return (
    <div>
      <Navbar />
      <Container>
        <Hero />
        <SearchForm />
        <List />
      </Container>
    </div>
  );
}

export default App;
