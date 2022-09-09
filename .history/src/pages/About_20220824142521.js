import React from "react";
import profile from "../images/helmi.jpg";
import classes from "../components/Layout/Layout.module.scss";
const About = () => {
  return (
    <>
      <div className={classes.container__about}>
        <div className={classes.container__about__identificator}>
          <div>
            <h1>
              <span
                className={classes.container__about__identificator__identify}
              >
                Hi, I am{" "}
                <span className={classes.container__about__identificator__name}>
                  Helmi Ben Romdhane{" "}
                </span>
              </span>
              <br />
              <span className={classes.container__about__identificator__title}>
                Mobile and Software Developer <br />
              </span>
            </h1>
            <br />
            <p>
              I am from chittagong, Bangladesh. A place of beauty and nature.
              Since my childhood, i love art and design. I always try to design
              stuff with my unique point of view. I also love to create things
              that can be usefull to others.
            </p>
            <br />
            <p>
              I started coding since I was in high school. Coding is also an art
              for me. I love it and now I have the opportunity to design along
              with the coding. I find it really interesting and I enjoyed the
              process a lot.
            </p>
            <br />
            <p>
              My vision is to make the world a better place. Now almost
              everything is becoming better than ever. It is time for us to
              create more good stuff that helps the world to become a better
              place.
            </p>
          </div>
          <div>
            <img
              src={profile}
              alt="Profile_picture"
              className={classes.container__about__profile}
            />
          </div>
        </div>
        <div className={classes.container__about__rest}>
          <h1>Education</h1>
          <div className={classes.container__about__rest__row}>
            <ul>
              <li><spanWCollage</li>
              <li>School</li>
              <li>high school</li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
