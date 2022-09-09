import React from "react";
import classes from "../Footer/Footer.module.scss";
import { Link } from "react-router-dom";
const Footer = () => {
  return (
    <footer className={classes.footer}>
      
      <a href="/About"><i className="fab fa-facebook-f colo" /></a>
      {/* <Link href="#"><i className="fab fa-facebook-f" />Facebook</Link>
      <Link href="#"><i className="fab fa-instagram" />Instagram</Link>
      <Link href="#"><i className="fab fa-youtube" />Youtube</Link>
      <Link href="#"><i className="fab fa-twitter" />Twitter</Link>        */}
      <div className={classes.footer__span}>
        <span>All rights reserved © 2022 . </span>
        <span className={classes.footer__span__name}>Helmi Ben Romdhane</span>
      </div>
    </footer>
  );
};

export default Footer;
