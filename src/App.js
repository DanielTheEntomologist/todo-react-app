// import logo from "./logo.svg";
// import "./App.css";
import Hero from "./components/Hero/Hero.js";
import SearchForm from "./components/SearchForm/SearchForm.js";
import List from "./components/List/List.js";
import Container from "./components/Container/Container.js";

function App() {
  return (
    <Container>
      <Hero />
      <SearchForm />
      <List />
    </Container>
  );
  // <div className="App">
  //   <header className="App-header">
  //     <img src={logo} className="App-logo" alt="logo" />
  //     <p>
  //       Edit <code>src/App.js</code> and save to reload.
  //     </p>
  //     <a
  //       className="App-link"
  //       href="https://reactjs.org"
  //       target="_blank"
  //       rel="noopener noreferrer"
  //     >
  //       Learn React
  //     </a>
  //   </header>
  // </div>
}

export default App;
