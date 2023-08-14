import React, { useEffect, useState } from "react";
import classes from "./navbar.module.css";
import Link from "next/link";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleUp } from "@fortawesome/free-solid-svg-icons";

const HamburgerMenu = ({ isMenuOpen, toggleMenu }) => {
  return (
    <div
      className={`${classes.hamburgerMenu} ${isMenuOpen ? classes.open : ""}`}
      onClick={toggleMenu}
    >
      <div className={classes.bar}></div>
      <div className={classes.bar}></div>
      <div className={classes.bar}></div>
    </div>
  );
};

const MenuDrawer = ({ toggleMenu, isMenuOpen }) => {
  return (
    <div
      className={`${classes.drawerWrapper} ${isMenuOpen ? classes.open : ""}`}
      onClick={toggleMenu}
    >
      <div
        className={`${classes.menuDrawer} ${isMenuOpen ? classes.open : ""}`}
      >
        <div className={classes.menuItem} onClick={toggleMenu}>
          <a href="/#">Back to top</a>
        </div>
        <div className={classes.menuItem} onClick={toggleMenu}>
          <a href="/#about">About</a>
        </div>
        <div className={classes.menuItem} onClick={toggleMenu}>
          <a href="/#projects">Projects</a>
        </div>
        <div className={classes.menuItem} onClick={toggleMenu}>
          <a href="/#skills">Skills</a>
        </div>
        <div className={classes.menuItem} onClick={toggleMenu}>
          <a href="/#contact">Contact</a>
        </div>
      </div>
    </div>
  );
};

const Navbar = () => {
  const [showBackToTopIcon, setShowBackToTopIcon] = useState(false);
  const [viewportWidth, setViewportWidth] = useState();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    setViewportWidth(window.innerWidth);

    const handleScroll = () => {
      const breakPoint = 600;
      const windowScroll = window.scrollY;

      if (windowScroll > breakPoint) {
        setShowBackToTopIcon(true);
      } else {
        setShowBackToTopIcon(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [viewportWidth]);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <>
      {viewportWidth > 600 ? (
        <div className={classes.navbarContainer}>
          <a href="/#about">About</a>
          <a href="/#projects">Projects</a>
          <a href="/#skills">Skills</a>
          <a href="/#contact">Contact</a>
        </div>
      ) : (
        <HamburgerMenu isMenuOpen={isMenuOpen} toggleMenu={toggleMenu} />
      )}
      {isMenuOpen && (
        <MenuDrawer toggleMenu={toggleMenu} isMenuOpen={isMenuOpen} />
      )}

      {showBackToTopIcon && (
        <div className={classes.backToTopIcon}>
          <Link href={"/#"}>
            <FontAwesomeIcon
              icon={faCircleUp}
              size="xl"
              style={{ color: "#ffffff" }}
            />
          </Link>
        </div>
      )}
    </>
  );
};

export default Navbar;
