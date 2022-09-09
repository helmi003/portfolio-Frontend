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
          <Switch>
              <Route path="/" exact>
                  <Home />
              </Route>
              <Route path="/About">
                  <About />
              </Route>
              <Route path="/Porfolio">
                  <Porfolio />
              </Route>
              <Route path="/Contact">
                  <Contact />
              </Route>
          </Switch>
      </Layout>
  );
}

export default App;