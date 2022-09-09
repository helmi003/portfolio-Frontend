import React from "react";
import profile from "../images/helmi.png"

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
        <div><img
            src={profile}
            alt="Profile_picture"
            className={classes.header__content__logo}
          /></div>
      </div>
    </>
  );
};

export default Home;
