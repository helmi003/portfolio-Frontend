import React from "react";
import classes from "../Footer/Footer.module.scss";
import Icon from '../icons'
const Footer = () => {
  return (
    <footer className={classes.footer}>
      
                    <Link href="#"><Icon className="fab fa-facebook-f" />Facebook</Footer.Link>
                    <Link href="#"><Icon className="fab fa-instagram" />Instagram</Footer.Link>
                    <Footer.Link href="#"><Icon className="fab fa-youtube" />Youtube</Footer.Link>
                    <Footer.Link href="#"><Icon className="fab fa-twitter" />Twitter</Footer.Link>
                </Footer.Column>
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
