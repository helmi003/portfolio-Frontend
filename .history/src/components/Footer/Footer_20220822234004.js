import React from "react";
import classes from "../Footer/Footer.module.scss";
import Icon from '../icons'
import { Link } from "react-router-dom";
const Footer = () => {
  return (
    <footer className={classes.footer}>
      
                    
                
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
