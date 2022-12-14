import React, { useEffect, useState } from "react";

import { BiMenuAltRight } from "react-icons/bi";
import { AiOutlineClose } from "react-icons/ai";

import classes from "./Header.module.scss";
import { Link, useNavigate } from "react-router-dom";
i

const Header = () => {
  const history = useNavigate();
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

    const resumeClickHandler = () => {
        menuToggleHandler();
        history.push("/Resume");
    };

  return (
    <header className={classes.header}>
      <div className={classes.header__content}>
        <Link to="/" className={classes.header__content__logo}>
        <img src={logo} alt="Logo" />
        </Link>
        <nav
          className={`${classes.header__content__nav} ${
            menuOpen && size.width < 768 ? classes.isMenu : ""
          }`}
        >
          <ul>
            <li>
              <Link to="/About" onClick={menuToggleHandler}>
                About
              </Link>
            </li>
            <li>
              <Link to="/Porfolio" onClick={menuToggleHandler}>
                Porfolio
              </Link>
            </li>
            <li>
              <Link to="/Contact" onClick={menuToggleHandler}>
                Contact
              </Link>
            </li>
          </ul>
          <button onClick={resumeClickHandler}>Resume</button>
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
};

export default Header;
