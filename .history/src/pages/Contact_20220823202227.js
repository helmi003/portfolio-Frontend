import React from "react";
import classes from "../components/Layout/Layout.module.scss";

const Contact = () => {
  return (
    <div className={classes.container__contact}>
      <div className={classes.container__contact__title}>
        <h4>Get in touch</h4>
        <h1>Contact</h1>
      </div>
      <div className={classes.container__contact__content}>
        <div className={classes.container__contact__content__left}>
            <ul>
                <li>

                </li>
                <li>
                    
                </li>
                <li>
                    
                </li>
            </ul>
          <i className="fa fa-phone fa-2x fa-rotate-90" /> +216 20 499 382
          <i className="fa fa-phone fa-2x fa-rotate-90" /> +216 20 499 382
          <i className="fa fa-phone fa-2x fa-rotate-90" /> +216 20 499 382
        </div>
        <div className={classes.container__contact__content__middle}></div>
        <div className={classes.container__contact__content__right}>
          <p>wa</p>
        </div>
      </div>
    </div>
  );
};

export default Contact;
