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
          <div>
            <h1>EDUCATION</h1>
            <div>
              <ul>
                <li>
                  <span>Collage</span>
                  <span className={classes.container__about__rest__def}>
                    dar chaaben el fehri
                  </span>
                </li>
                <li>
                  <span>School</span>
                  <span className={classes.container__about__rest__def}>
                    dar chaaben el fehri
                  </span>
                </li>
                <li>
                  <span>high school</span>
                  <span className={classes.container__about__rest__def}>
                    ISET Sousse
                  </span>
                </li>
              </ul>
            </div>
          </div>
          <div>
            <h1>MY SKILLS</h1>
            <div>
              <ul>
                <li>
                  <span>FrontEnd</span>
                  <span className={classes.container__about__rest__def}>
                    Next-js React-js Flutter Angular Symfony
                  </span>
                </li>
                <li>
                  <span>BackEnd</span>
                  <span className={classes.container__about__rest__def}>
                    Django Node-js PHP
                  </span>
                </li>
                <li>
                  <span>Data base</span>
                  <span className={classes.container__about__rest__def}>
                    Firebase MongoDB MySQL
                  </span>
                </li>
                <li>
                  <span>Languages</span>
                  <span className={classes.container__about__rest__def}>
                    Python Dart Java JavaScript CSS HTML
                  </span>
                </li>
              </ul>
            </div>
          </div>
          <div>
            <h1>EXPERIENCE : Internships</h1>
            <div>
              <ul>
                <li>
                  <span>Neopolis</span>
                  <span className={classes.container__about__rest__def}>
                    Nabeul, FrontEnd Developer
                  </span>
                </li>
                <li>
                  <span>AfterCode</span>
                  <span className={classes.container__about__rest__def}>
                    Nabeul, FrontEnd and BackEnd Developer
                  </span>
                </li>
                <li>
                  <span>Meta Service</span>
                  <span className={classes.container__about__rest__def}>
                    Sousse, FrontEnd and BackEnd Developer
                  </span>
                </li>
              </ul>
            </div>
          </div>
          <div>
            
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
