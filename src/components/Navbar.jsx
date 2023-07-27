import React from "react";
import classes from "./navbar.module.css";
import Link from "next/link";

const Navbar = () => {
  return (
    <div className={classes.navbarContainer}>
      <Link href={"/#about"}>About</Link>
      <Link href={"/#projects"}>Projects</Link>
      <Link href={"/#skills"}>Skills</Link>
      <Link href={"/#contact"}>Contact</Link>
    </div>
  );
};

export default Navbar;
