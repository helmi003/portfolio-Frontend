import React from 'react';
import Header from './components/Header';

function App() {
  return (
      <Layout>
          <Switch>
              <Route path="/" exact>
                  <Home />
              </Route>
              <Route path="/page-one">
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