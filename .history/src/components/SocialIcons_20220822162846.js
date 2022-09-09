import React from "react";

const SocialIcons = ({ Icons }) => {
  return (
    <div className="text-teal-500">
      {Icons.map((icon) => (
        <span
          key={icon.name}
          className=""
        >
          <ion-icon name={icon.name}></ion-icon>
        </span>
      ))}
    </div>
  );
};

export default SocialIcons;