import React from "react";
import Screenshot from "../images/map.png";
import classes from "../components/Layout/Layout.module.scss";

export default function Project() {
  return (
    <>
      <div className={classes.container__project}>
        <h1>Learneur</h1>
        <p>Course app made with Flutter and TSOA </p>
        <span>#test </span>
        <span>#test </span>
        <span>#test </span>
        <span>#test </span>
        <hr />
        <h2>About the project</h2>
        <p>Course app made with Flutter and TSOA </p>
        <br/>
        <h2>Technologies</h2>
        <ul>
          <li>faza 1</li>
          <li>faza 2</li>
          <li>faza 3</li>
        </ul>
        <h2>Screenshots</h2>
        <img src={Screenshot} alt="screenshot" />
        <h2>Showcase</h2>
        <button>DEMO</button><button>SOURCE CODE</button>
      </div>
    </>
  );
}
