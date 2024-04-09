import { Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar/Navbar.js";

import Home from "./components/HomePage/Home.js";
import Favorite from "./components/FavoritePage/FavoritePage.js";
import About from "./components/AboutPage/AboutPage.js";
import NoMatch from "./components/NoMatchPage/NoMatchPage.js";

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/favorite" element={<Favorite />} />
        <Route path="*" element={<NoMatch />} />
      </Routes>
    </div>
  );
}

export default App;
