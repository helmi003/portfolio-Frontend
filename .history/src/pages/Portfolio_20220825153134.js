import React from "react";
import profile from "../images/helmi.jpg";
import classes from "../components/Layout/Layout.module.scss";

const Portfolio = () => {
  return (
    <>
      <div className={classes.container__p__content}>
        <div>
          <img src={profile} alt="project-1" />
          <p>
            <h2>Project 1</h2>I am a software developer. I have experience as a
            full stack developer but I lean more to the front end and I have
            built a lot of web apps and some mobile apps. Also, I am always
            learning and
          </p>
        </div>
        <div>
          <img src={profile} alt="project-2" />
          <p>
            <h2>Project 2</h2>I am a software developer. I have experience as a
            full stack developer but I lean more to the front end and I have
            built a lot of web apps and some mobile apps. Also, I am always
            learning and
          </p>
        </div>
        <div>
          <img src={profile} alt="project-3" />
          <p>
            <h2>Project 3</h2>I am a software developer. I have experience as a
            full stack developer but I lean more to the front end and I have
            built a lot of web apps and some mobile apps. Also, I am always
            learning and
          </p>
        </div>
      </div>
    </>
  );
};

export default Portfolio;
