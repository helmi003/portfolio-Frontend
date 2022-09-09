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
              <i className="fa fa-phone fa-2x fa-rotate-90" /> +216 20 499 382
            </li>
            <li>
              <i className="fa fa-envelope fa-2x" />
              <span
                className={classes.container__contact__content__left__span}
              ></span>
              helmi.br1999@gmail.com
            </li>
            <li>
              <i className="fa fa-map-marker fa-2x" /> nabeul 8011,
              <br />
              dar chaaben el fehri, <br />
              Street monsof bey
            </li>
          </ul>
        </div>
        <div className={classes.container__contact__content__middle}></div>
        <div className={classes.container__contact__content__right}>
          <label for="fname">Name</label>
          <br />
          <input type="text" id="fname" name="fname" />
          <br />
          <label for="fname">Subject</label>
          <br />
          <input type="text" id="fname" name="fname" />
          <br />
          <label for="fname">Email</label>
          <br />
          <input type="text" id="fname" name="fname" />
          <br />
          <label for="fname">Message</label>
          <br />
          <textarea id="w3review" name="w3review" rows="4" cols=""></textarea>
        </div>
      </div>
    </div>
  );
};

export default Contact;
