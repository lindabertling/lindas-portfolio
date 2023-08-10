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
        <Link href={"/#about"} scroll={false}>
          About
        </Link>
        <Link href={"/#projects"} scroll={false}>
          Projects
        </Link>
        <Link href={"/#skills"} scroll={false}>
          Skills
        </Link>
        <Link href={"/#contact"} scroll={false}>
          Contact
        </Link>
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
