import React from "react";
import classes from "../components/Layout/Layout.module.scss";

const Contact = () => {
  return (
    <div className={classes.container__contact}>
        <div className={classes.container__contact__content__left}>
        <h4>Get in touch</h4>
      <h1>Contact</h1>
        </div>
      
      <div className={classes.container__contact__content}>
        <div className={classes.container__contact__content__left}>
          <p>wa</p>
        </div>
        <div className={classes.container__contact__content__middle}>
          <p>wa</p>
        </div>
        <div className={classes.container__contact__content__right}>
          <p>wa</p>
        </div>
      </div>
    </div>
  );
};

export default Contact;
