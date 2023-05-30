import React from "react";
import Image from "next/image";
import classes from "./heroSection.module.css";

import heroImage from "../../public/images/img_hero-image.jpg";
import profilePicture from "../../public/images/img_profile-picture.jpg";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedinIn, faGithub } from "@fortawesome/free-brands-svg-icons";
import Link from "next/link";
// import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";

const HeroSection = () => {
  return (
    <div className={classes.heroContentWrapper}>
      <Image
        src={heroImage}
        alt="photo of purple paint"
        className={classes.heroImage}
      />
      <section className={classes.aboutSection}>
        <div className={classes.introduction}>
          <Image
            src={profilePicture}
            alt="photo of Linda"
            className={classes.profilePicture}
          />
          <div>
            <h2>Linda Bertling</h2>
            <h1>Frontend Developer</h1>
          </div>
        </div>
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptates,
          recusandae. Consequatur eligendi, totam ad voluptas cupiditate sequi
          in ipsam impedit velit repellat dicta recusandae fugiat autem
          inventore qui corrupti nisi!
        </p>
        <section className={classes.heroIcons}>
          <Link href={"https://www.linkedin.com/in/linda-bertling/"}>
            <FontAwesomeIcon
              icon={faLinkedinIn}
              size="2xl"
              style={{ color: "#3c1d5a" }}
            />
          </Link>
          <Link href={"https://github.com/lindabertling?tab=repositories"}>
            <FontAwesomeIcon
              icon={faGithub}
              size="2xl"
              style={{ color: "#3c1d5a" }}
            />
          </Link>
        </section>
      </section>
    </div>
  );
};

export default HeroSection;
