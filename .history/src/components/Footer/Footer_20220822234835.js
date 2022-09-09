import React from "react";
import classes from "../Footer/Footer.module.scss";
import { Link } from "react-router-dom";
const Footer = () => {
  return (
    <footer className={classes.footer}>
      <Link href="#fdf"></Link>
      <Link href="#fdf"></Link>
      <Link href="#fdfd"></Link>
      <Link href="#"></Link>       
      <div className={classes.footer__span}>
        <span>All rights reserved © 2022 . </span>
        <span className={classes.footer__span__name}>
          Helmi Ben Romdhane
        </span>
      </div>
    </footer>
  );
};

export default Footer;
