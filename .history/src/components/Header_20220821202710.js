import React from 'react'
import classes from "./Header.module.scss"


export default function Header() {
  return <header className={classes.header}>
      <div className={classes.header__content}>
        <navbar>Navbar</navbar>
      </div>
      <nav className={classes.header__content__nav}>
        <ul>
          <li>
            <a href='/'
          </li>
        </ul>
      </nav>
  </header>;
};
