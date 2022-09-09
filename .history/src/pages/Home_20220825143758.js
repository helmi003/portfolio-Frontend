import React from "react";
import profile from "../images/helmi.jpg";
import classes from "../components/Layout/Layout.module.scss";
import { Link } from "react-router-dom";

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
        <div className={classes.container__home__about}>
          <h1>
            About{" "}
            <Link to="/About">
              <i class="fa fa-arrow-right"></i> Read more
            </Link>
          </h1>
          <p>
            I am a software developer. I have experience as a full stack
            developer but I lean more to the front end and I have built a lot of
            web apps and some mobile apps. Also, I am always learning and
            experimenting with new technologies (currently learning about the
            ethereum blockchain) and other topics other than software
            engineering.
          </p>
        </div>
        <br />
        <div className={classes.container__home__services}>
          <div className={classes.container__home__services__title}>
            <h4>What i can do</h4>
            <h1>Services</h1>
          </div>
          <br>
          <div className={classes.container__home__services__content}>
            <div className={classes.container__home__services__content__div}>
              <i class="fa fa-desktop"></i>
              <h3>web design</h3>
              <p>
                I do ui/ux design for the website that helps website to get a
                unique look.
              </p>
            </div>
            <div className={classes.container__home__services__content__div}>
              <i class="fa fa-code"></i>
              <h3>web dev</h3>
              <p>
                I also develop the websites. I create high performance website
                with blazing fast speed.
              </p>
            </div>
            <div className={classes.container__home__services__content__div}>
              <i class="fa fa-mobile"></i>
              <h3>app Dev</h3>
              <p>
                I develop mobile application. I create mobile app with eye
                catching ui.
              </p>
            </div>
          </div>
        </div>
        <div className={classes.container__home__portfolio}>
          <h1>
            Portfolio{" "}
            <Link to="/Portfolio">
              <i class="fa fa-arrow-right"></i> See more
            </Link>
          </h1>
          <div className={classes.container__home__portfolio__content}>
            <p>
              I am a software developer. I have experience as a full stack
              developer but I lean more to the front end and I have built a lot
              of web apps and some mobile apps. Also, I am always learning and
              experimenting with new technologies (currently learning about the
              ethereum blockchain) and other topics other than software
              engineering.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
