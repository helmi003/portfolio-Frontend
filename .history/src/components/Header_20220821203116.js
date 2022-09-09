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
      <div className=''>

      </div>
  </header>;
};
