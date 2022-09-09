import React from "react";
import classes from "../Footer/Footer.module.scss";
const Footer = () => {
  return (
    <footer className={classes.footer}>
      <div className={classes.footer__icons}>
        <a href="https://www.facebook.com/helmi.benromdhane.9">
          <i className="fab fa-facebook test margin-right:10px;" color="cornflowerblue"/>
        </a>
        <a href="https://twitter.com/HelmiBenRomdha8">
          <i className="fab fa-twitter" />
        </a>
        <a href="https://github.com/helmi003">
          <i className="fab fa-github" />
        </a>
        <a href="https://www.linkedin.com/in/helmi-ben-romdhane-b96a71226/">
          <i className="fab fa-linkedin" />
        </a>
        <a href="https://www.instagram.com/helmi_b.r/">
          <i className="fab fa-instagram" />
        </a>
        {/* <a href="/About">
          <i className="fab fa-facebook-f colo" />
        </a>
        <a href="/About">
          <i className="fab fa-facebook-f colo" />
        </a>
        <a href="/About">
          <i className="fab fa-facebook-f colo" />
        </a> */}
      </div>
      <div className={classes.footer__span}>
        <span>All rights reserved © 2022 . </span>
        <span className={classes.footer__span__name}>Helmi Ben Romdhane</span>
      </div>
    </footer>
  );
};

export default Footer;
