// import logo from "./logo.svg";
// import "./App.css";
import Container from "./components/Container/Container.js";
import Navbar from "./components/Navbar/Navbar.js";
import PageTitle from "./components/PageTitle/PageTitle.js";

import Home from "./components/HomePage/Home.js";
import About from "./components/AboutPage/AboutPage.js";
import Favorite from "./components/FavoritePage/FavoritePage.js";

function App() {
  return (
    <div>
      <Navbar />
      <Home />
      <About />
      <Favorite />
    </div>
  );
}

export default App;
