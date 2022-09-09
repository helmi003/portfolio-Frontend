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
              I am from Tunisia, Nabeul. A place of beauty and nature. 22 years
              old, ambition student, ready for the upcoming. Since my childhood,
              i love gaming and software development. I always try to develop
              stuff with my unique point of view. I also love to create things
              that can be usefull to others.
            </p>
            <br />
            <p>
              I started coding since I was in school. Coding is also an art for
              me. I love it and now I have the opportunity to design along with
              the coding. I find it really interesting and I enjoyed the process
              a lot.
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
            <div className={classes.container__about__rest__part}>
              <div className={classes.container__about__rest__part__col1}>
                <div>Collage</div>
                <div>School</div>
                <div>high school</div>
              </div>
              <div className={classes.container__about__rest__part__col2}>
                <div>
                  <span>dar chaaben el fehri</span>
                </div>
                <div>
                  <span>dar chaaben el fehri</span>
                </div>
                <div>
                  <span>ISET Sousse</span>
                </div>
              </div>
            </div>
          </div>
          <div>
            <h1>MY SKILLS</h1>
            <div className={classes.container__about__rest__part}>
              <div className={classes.container__about__rest__part__col1}>
                <div>FrontEnd</div>
                <div>BackEnd</div>
                <div>Data base</div>
                <div>Languages</div>
              </div>
              <div className={classes.container__about__rest__part__col2}>
                <div>
                  <span>Next-js</span> <span>React-js</span>{" "}
                  <span>Flutter</span> <span>Angular</span> <span>Symfony</span>
                </div>
                <div>
                  <span>Django</span> <span>Node-js</span> <span>PHP</span>
                </div>
                <div>
                  <span>Firebase</span> <span>MongoDB</span> <span>MySQL</span>
                </div>
                <div>
                  <span>Python</span> <span>Dart</span> <span>Java</span>{" "}
                  <span>JavaScript</span> <span>CSS</span> <span>HTML</span>
                </div>
              </div>
            </div>
          </div>
          <div>
            <h1>EXPERIENCE : Internships</h1>
            <div>
              <div>
                <div>Neopolis</div>
                <div>AfterCode</div>
                <div>Meta Service</div>
              </div>
              <div className={classes.container__about__rest__part__col2}>
                <div>
                  <span>Nabeul</span> <span>FrontEnd Developer</span>
                </div>
                <div>
                  <span>Nabeul</span>{" "}
                  <span>FrontEnd and BackEnd Developer</span>
                </div>
                <div>
                  <span>Sousse</span>{" "}
                  <span>FrontEnd and BackEnd Developer</span>
                </div>
              </div>
            </div>
          </div>
          <div>
            <h1>Currently</h1>
            <p>
              I am studying at ISET Sousse information system development to get
              my master degree then i'll try to redirect to software engineering
              in a private university.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
