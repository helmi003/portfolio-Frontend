import React from "react";

const About = () => {
    return <div className={classes.container__home__identificator}>
    <div>
      <h1>
        Hi, I'm{" "}
        <span className={classes.container__home__identificator__name}>
          Helmi Ben Romdhane{" "}
        </span>
        <br />I Like Building Things
        <br />
        <span className={classes.container__home__identificator__title}>
          Mobile and Software Developer <br />
          Life Long Learner
        </span>
      </h1>
    </div>
    <div>
      <img
        src={profile}
        alt="Profile_picture"
        className={classes.container__home__profile}
      />
    </div>
  </div>
};

export default About;