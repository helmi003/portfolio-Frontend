import React from "react";
// import SocialIcons from "./SocialIcons";
// import { Icons } from "./Menus";
import classes from "./Layout.module.scss";

const Footer = () => {
  return (
    // <footer className="bg-gray-900 text-white">
    //   <div
    //     className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10
    // text-center pt-2 text-gray-400 text-sm pb-8"
    //   >
    //     <span>© 2020 Appy. All rights reserved.</span>
    //     <span>Terms · Privacy Policy</span>
    //     <SocialIcons Icons={Icons} />
    //   </div>
    // </footer>
    <footer className={classes.container__footer}>
      <div className="">
        <span>© 2022 Appy. All rights reserved.</span>
        <span>Helmi</span>
      </div>
    </footer>
  );
};

export default Footer;
