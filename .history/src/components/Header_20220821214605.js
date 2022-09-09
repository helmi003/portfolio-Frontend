import React from 'react'
import classes from "./Header.module.scss"
import {BiMenuAltRight} from 'react-icons/bi'
import {AiOutlineClose} from 'react-icons/ai'


export default function Header() {
  return <header className={classes.header}>
      <div className={classes.header__content}>
       
          <h2 className={classes.header__content_logo}>Navbar</h2>
       
        <nav className={classes.header__content__nav}>
          <ul>
            <li>
              <a href='/'>Home</a>
            </li>
            <li>
              <a href='/'>About</a>
            </li>
            <li>
              <a href='/'>Porfolio</a>
            </li>
            <li>
              <a href='/'>Contact</a>
            </li>
          </ul>
          <button>Resume</button>
        </nav>
        <div className={classes.header__content__toggle}>
          <BiMenuAltRight/>
        </div>
      </div>
  </header>;
};
