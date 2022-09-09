import React from "react";
import profile from "../images/helmi.jpg";
import classes from "../components/Layout/Layout.module.scss";

const Home = () => {
  return (
    <>
      <div className={classes.container__home}>
        <div className={classes.container__home__identificator}>
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
        <div className={classes.container__home__About}>
          <h1>
            About
          </h1>
          <p></p>
        </div>
      </div>
    </>
  );
};

export default Home;
