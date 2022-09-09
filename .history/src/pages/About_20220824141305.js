import React from "react";
import profile from "../images/helmi.jpg";
import classes from "../components/Layout/Layout.module.scss";
const About = () => {
    return <>
    <div className={classes.container__about}>
    <div className={classes.container__about__identificator}>
          <div>
            <h1>
              Hi, I am{" "}
              <span className={classes.container__about__identificator__name}>
                Helmi Ben Romdhane{" "}
              </span>
              
              <br />
              <span className={classes.container__about__identificator__title}>
                Mobile and Software Developer <br />
                Life Long Learner
              </span>
            </h1>
          </div>
          <div>
            <img
              src={profile}
              alt="Profile_picture"
              className={classes.container__about__profile}
            />
          </div>
        </div>
    </div>
    </>;
};

export default About;