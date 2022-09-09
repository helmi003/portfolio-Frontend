import React from "react";
import profile from "../images/helmi.jpg";
import classes from "../components/Layout.module.scss";

const Home = () => {
  return (
    <>
      <div className={classes.container__profile}>
        <div>
          <h1>
            Hi, I am Helmi Ben Romdhane <br />I Like Building Things
            <br />
            <span>
              Mobile and Software Developer <br />
              Life Long Learner
            </span>
          </h1>
        </div>
        <div>
          <img
            src={profile}
            alt="Profile_picture"
            className={classes.container__profile}
          />
        </div>
      </div>
    </>
  );
};

export default Home;
