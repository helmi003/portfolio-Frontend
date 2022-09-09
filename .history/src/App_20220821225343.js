import React from 'react';

import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Porfolio from "./pages/Porfolio";
import Contact from "./pages/Contact";

function App() {
  return (
      
          <Routes>
          <Route exact path="/" element={<Home/>} />
          <Route path="/" element={<About/>} />
          <Route path="/" element={<Porfolio/>} />
          <Route path="/" element={<Contact/>} />
          </Routes>
      
  );
}

export default App;