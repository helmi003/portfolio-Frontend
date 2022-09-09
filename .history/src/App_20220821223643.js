import React from 'react';
import Layout from "./components/Layout";
import { Switch, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Porfolio from "./pages/Porfolio";
import PageCTA from "./pages/PageCTA";

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
              <Route path="/page-three">
                  <PageThree />
              </Route>
              <Route path="/page-cta">
                  <PageCTA />
              </Route>
          </Switch>
      </Layout>
  );
}

export default App;