import React from 'react';
import Layout from "./;
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Portfolio from "./pages/Portfolio";
import Contact from "./pages/Contact";
import Resume from "./pages/Resume";

function App() {
  return (
      <Layout>
          <Routes>
            <Route exact path="/" element={<Home/>} />
            <Route path="/About" element={<About/>} />
            <Route path="/Portfolio" element={<Portfolio/>} />
            <Route path="/Contact" element={<Contact/>} />
            <Route path="/Resume" element={<Resume/>} />
          </Routes>
      </Layout>
  );
}

export default App;