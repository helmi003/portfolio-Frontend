import React from "react";
import profile from "../images/helmi.jpg";
import classes from "../styles/style.scss";

const Home = () => {
  return (
    <>
      <div className={classes.header}>
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
            className="profile"
          />
        </div>
      </div>
    </>
  );
};

export default Home;
