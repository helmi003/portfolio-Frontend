import React from 'react';
import Layout from "./components/Layout";
import { Switch, Route } from "react-router-dom";

function App() {
  return (
      <Layout>
          <Switch>
              <Route path="/" exact>
                  <Home />
              </Route>
              <Route path="/About">
                  <PageOne />
              </Route>
              <Route path="/page-two">
                  <PageTwo />
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