import React from "react";
import classes from "../Footer/Footer.module.scss";
import { Link } from "react-router-dom";
const Footer = () => {
  return (
    <footer className={classes.footer}>
      <div>
        <a href="/About"><i className="fab fa-facebook-f colo" /></a>
        <a href="/About"><i className="fab fa-facebook-f colo" /></a>
        <a href="/About"><i className="fab fa-facebook-f colo" /></a>
        <a href="/About"><i className="fab fa-facebook-f colo" /></a>
      </div>
      <div className={classes.footer__span}>
        <span>All rights reserved © 2022 . </span>
        <span className={classes.footer__span__name}>Helmi Ben Romdhane</span>
      </div>
    </footer>
  );
};

export default Footer;
