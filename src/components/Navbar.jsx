import React, { useEffect, useState } from "react";
import classes from "./navbar.module.css";
import Link from "next/link";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleUp } from "@fortawesome/free-solid-svg-icons";

const Navbar = () => {
  const [showBackToTopIcon, setShowBackToTopIcon] = useState(false);

  useEffect(() => {
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
  }, []);

  return (
    <>
      <div className={classes.navbarContainer}>
        <a href="/#about">About</a>
        <a href="/#projects">Projects</a>
        <a href="/#skills">Skills</a>
        <a href="/#contact">Contact</a>
      </div>
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
