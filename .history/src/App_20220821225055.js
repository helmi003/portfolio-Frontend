import React from 'react';
import Layout from "./components/Layout";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Porfolio from "./pages/Porfolio";
import Contact from "./pages/Contact";

function App() {
  return (
      <Layout>
          <Routes>
          <Route exact path="/" element={<Home/>} />
          <Route  path="/" element={<About/>} />
          <Route  path="/" element={<Porfolio/>} />
          <Route exact path="/" element={<Contact/>} />
          </Routes>
      </Layout>
  );
}

export default App;