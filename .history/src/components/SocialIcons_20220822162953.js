import React from "react";
import classes from "./Layout.module"

const SocialIcons = ({ Icons }) => {
  return (
    <div className="text-teal-500">
      {Icons.map((icon) => (
        <span
          key={icon.name}
          className={classes.footer__icons}
        >
          <ion-icon name={icon.name}></ion-icon>
        </span>
      ))}
    </div>
  );
};

export default SocialIcons;