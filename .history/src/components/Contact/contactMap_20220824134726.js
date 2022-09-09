import React from "react";
import classes from "../Layout/Layout.module.scss";
export default function contactMap() {
  return (
    <div className={classes.container}>
      <div className={classes.containermap__card}>
        <h3 className={classes.map__card__heading}>Here is me</h3>
        <h3>Nabeul, dar chaaben el fehri</h3>
        <a
          className={classes.map__card__link}
          href="https://www.google.com/maps/place/Dar+Chaabane+Al+Fehri/@36.4588447,10.7431697,14z/data=!4m5!3m4!1s0x1302a2a14f916b27:0xc9d10e73748bb66e!8m2!3d36.4626965!4d10.7492466"
          target="_blank"
          rel="noreferrer"
        >
          Open in google map
        </a>
      </div>
    </div>
  );
}
