import React from "react";
import Footer from "./Footer";
import Header from "./Header";

import classes from "./Layout.module.scss";

const Layout = ({ children }) => {
  return (
    <>
      <div className={classes.backg}>
        <Header />
        <div className={classes.container}>{children}</div>
        <Footer></Footer>
      </div>
    </>
  );
};

export default Layout;
