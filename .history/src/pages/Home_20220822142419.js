import React from "react";
import profile from "../images/helmi.png";
import classes from "../.scss";

const Home = () => {
  return (
    <>
      <div>
        <div>
          <h1>
            Hi, I am Helmi Ben Romdhane <br />I Like Building Things
            <br />
            <span>
              Software Developer <br />
              Life Long Learner
            </span>
          </h1>
        </div>
        <div>
          <img
            src={profile}
            alt="Profile_picture"
            className={classes.profile__image}
          />
        </div>
      </div>
    </>
  );
};

export default Home;
