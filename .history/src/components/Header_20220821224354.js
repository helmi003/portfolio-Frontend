import React, { useEffect, useState } from "react";
import classes from "./Header.module.scss";
import { Link, useNavigate } from "react-router-dom";
import { BiMenuAltRight } from "react-icons/bi";
import { AiOutlineClose } from "react-icons/ai";

export default function Header() {
  const history = useNavigate ();
  const [menuOpen, setMenuOpen] = useState(false);
  const [size, setSize] = useState({
    width: undefined,
    height: undefined,
  });

  useEffect(() => {
    const handleResize = () => {
      setSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    if (size.width > 768 && menuOpen) {
      setMenuOpen(false);
    }
  }, [size.width, menuOpen]);

  const menuToggleHandler = () => {
    setMenuOpen((p) => !p);
  };
  const ctaClickHandler = () => {
    menuToggleHandler();
    history.push("/page-cta");
  };
  return (
    <header className={classes.header}>
      <div className={classes.header__content}>
        <Link to="/" className={classes.header__content__logo}>
          navbar
        </Link>
        <nav
          className={`${classes.header__content__nav} ${
            menuOpen && size.width < 768 ? classes.isMenu : ""
          }`}
        >
          <ul>
            <li>
              <Link href="/About" onClick={menuToggleHandler}>About</Link>
            </li>
            <li>
              <Link href="/Porfolio" onClick={menuToggleHandler}>Porfolio</Link>
            </li>
            <li>
              <Link href="/Contact" onClick={menuToggleHandler}>Contact</Link>
            </li>
          </ul>
          <button onClick={ctaClickHandler}>Resume</button>
        </nav>
        <div className={classes.header__content__toggle}>
          {!menuOpen ? (
            <BiMenuAltRight onClick={menuToggleHandler} />
          ) : (
            <AiOutlineClose onClick={menuToggleHandler} />
          )}
        </div>
      </div>
    </header>
  );
}
