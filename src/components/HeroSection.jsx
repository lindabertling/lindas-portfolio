import React from "react";
import Image from "next/image";
import Link from "next/link";

import classes from "./heroSection.module.css";
import { sourceCodePro } from "../utils/fonts";

import profilePicture from "../../public/icons/icon_avatar.svg";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedinIn, faGithub } from "@fortawesome/free-brands-svg-icons";

const HeroSection = () => {
  return (
    <div className={classes.heroContentWrapper}>
      <section className={classes.aboutSection}>
        <div className={classes.avatarContainer}>
          <Image
            src={profilePicture}
            alt="Illustration of coder"
            className={classes.profilePicture}
          />
        </div>
        <div className={classes.introduction}>
          <h2>Hi, I'm Linda.</h2>
          <p className={sourceCodePro.className}>
            I'm an enthusiastic frontend developer and I help companies build
            seamless web experiences with React and modern technologies.
          </p>
          <section className={classes.heroIcons}>
            <Link
              href={"https://www.linkedin.com/in/linda-bertling/"}
              target="_blank"
            >
              <FontAwesomeIcon
                icon={faLinkedinIn}
                size="2xl"
                style={{ color: "#FFF" }}
              />
            </Link>
            <Link
              href={"https://github.com/lindabertling?tab=repositories"}
              target="_blank"
            >
              <FontAwesomeIcon
                icon={faGithub}
                size="2xl"
                style={{ color: "#FFF" }}
              />
            </Link>
          </section>
        </div>
      </section>
    </div>
  );
};

export default HeroSection;
