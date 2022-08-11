import React from "react";
import { Route, Routes, Link } from "react-router-dom";
import About from "./Pages/About";
import Home from "./Pages/Home";
import Profile from "./Pages/Profile";
import Article from "./Pages/Article";
import Articles from "./pages/Articles";

import "./App.css";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/profiles/:username" element={<Profile />} />
        <Route Path="/articles" element={<Articles />} />
        <Route path=":id" element={<Article />} />
      </Routes>
    </div>
  );
}

export default App;
