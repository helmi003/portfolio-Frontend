import React, { useState } from "react";
import classes from "../components/Layout/Layout.module.scss";

const Contact = () => {
  const [name, setName] = useState("");
  const [subject, setSubject] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
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
        <div className={classes.container__contact__content__right}>
          <label htmlFor="name">Name</label>
          <br />
          <input
            type="text"
            id="name"
            name="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <br />
          <label for="subject">Subject</label>
          <br />
          <input
            type="text"
            id="subject"
            name="subject"
            value={subject}
            onChange={(e) => setSubject(e.target.value)}
            required
          />
          <br />
          <label for="email">Email</label>
          <br />
          <input
            type="email"
            id="email"
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <br />
          <label for="message">Message</label>
          <br />
          <textarea
            type="text"
            id="message"
            name="message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            rows="8"
            cols="40"
            required
          ></textarea>
          <br />
          <button type="submit" onClick="">Send</button>
        </div>
      </div>
      <div className="container">
        <div className="map__card">
          <h3 className="map__card__heading">Here is me</h3>
          <PText>Nabeul, Chittagong, Bangladesh</PText>
          <a
            className="map__card__link"
            href="https://www.google.com/maps/place/GEC+More,+Chittagong/@22.3590818,91.8195583,17z/data=!3m1!4b1!4m5!3m4!1s0x30acd89aaa8239cd:0x6e65fa00001dd59f!8m2!3d22.3590715!4d91.8215486"
            target="_blank"
            rel="noreferrer"
          >
            Open in google map
          </a>
        </div>
      </div>
    </div>
  );
};

export default Contact;
