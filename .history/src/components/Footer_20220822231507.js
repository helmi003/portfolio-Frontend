import React from "react";
import classes from "./Footer.module.scss";

const Footer = () => {
  return (
    <footer className={classes.container__footer}>
      <div className={classes.container__footer__span}>
        <span>All rights reserved © 2022 . </span>
        <span className={classes.container__footer__span__name}>
          Helmi Ben Romdhane
        </span>
      </div>
    </footer>
  );
};

export default Footer;
