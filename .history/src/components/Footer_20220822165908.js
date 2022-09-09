import React from "react";
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
      <div className={classes.container__footer}">
  	 			<h4>Check out my social media</h4>
  	 			<div className="social-links">
  	 				<a href="#f"><i className="fab fa-facebook-f"></i></a>
  	 				<a href="#f"><i className="fab fa-twitter"></i></a>
  	 				<a href="#f"><i className="fab fa-instagram"></i></a>
  	 				<a href="#f"><i className="fab fa-linkedin-in"></i></a>
  	 			</div>
  	 		</div>
      <div className={classes.container__footer__span}>
        <span>All rights reserved © 2022 . </span>
        <span className={classes.container__footer__span__name}>Helmi Ben Romdhane</span>
      </div>
    </footer>
  );
};

export default Footer;
