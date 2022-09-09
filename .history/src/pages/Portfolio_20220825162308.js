import React from "react";
import profile from "../images/helmi.jpg";
import classes from "../components/Layout/Layout.module.scss";

const Portfolio = () => {
    const [search, setSearch] = useState("");
  return (
    <>
      <div className={classes.container__portfolio}>
        <div>
            <h1>
                Some of my recent works
            </h1>
            <input
            type="text"
            id="name"
            name="name"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>
        <div className={classes.container__portfolio__content}>
          <div className={classes.container__portfolio__content__div}>
            <img src={profile} alt="project-1" />
            <p>
              <h2>Project 1</h2>I am a software developer. I have experience as
              a full stack developer but I lean more to the front end and I have
              built a lot of web apps and some mobile apps. Also, I am always
              learning and
            </p>
          </div>
          <div>
            <img src={profile} alt="project-2" />
            <p>
              <h2>Project 2</h2>I am a software developer. I have experience as
              a full stack developer but I lean more to the front end and I have
              built a lot of web apps and some mobile apps. Also, I am always
              learning and
            </p>
          </div>
          <div>
            <img src={profile} alt="project-3" />
            <p>
              <h2>Project 3</h2>I am a software developer. I have experience as
              a full stack developer but I lean more to the front end and I have
              built a lot of web apps and some mobile apps. Also, I am always
              learning and
            </p>
          </div>
          <div>
            <img src={profile} alt="project-3" />
            <p>
              <h2>Project 3</h2>I am a software developer. I have experience as
              a full stack developer but I lean more to the front end and I have
              built a lot of web apps and some mobile apps. Also, I am always
              learning and
            </p>
          </div>
          <div>
            <img src={profile} alt="project-3" />
            <p>
              <h2>Project 3</h2>I am a software developer. I have experience as
              a full stack developer but I lean more to the front end and I have
              built a lot of web apps and some mobile apps. Also, I am always
              learning and
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Portfolio;
