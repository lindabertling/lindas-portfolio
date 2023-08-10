import React, { useEffect, useState } from "react";
import classes from "./navbar.module.css";
import Link from "next/link";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleUp } from "@fortawesome/free-solid-svg-icons";

const HamburgerMenu = ({ isMenuOpen, handleClose }) => {
  return (
    <div
      className={`${classes.hamburgerMenu} ${isMenuOpen ? classes.open : ""}`}
      onClick={handleClose}
    >
      <div className={classes.bar}></div>
      <div className={classes.bar}></div>
      <div className={classes.bar}></div>
    </div>
  );
};

const Navbar = () => {
  const [showBackToTopIcon, setShowBackToTopIcon] = useState(false);
  const [viewportWidth, setViewportWidth] = useState();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    setViewportWidth(window.innerWidth);
    console.log(viewportWidth);

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

  const handleClose = () => {
    setIsMenuOpen(false);
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
        <HamburgerMenu isMenuOpen={isMenuOpen} handleClose={handleClose} />
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
