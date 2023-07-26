import React from "react";
import classes from "./techOverviewSection.module.css";
import { mukta, inter } from "../utils/fonts";

const TechOverviewSection = () => {
  return (
    <section className={classes.techSectionWrapper}>
      <div className={classes.techOverviewContent}>
        <h3 className={mukta.className}>TECH</h3>
        <p className={inter.className}>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quaerat,
          magni. Beatae quisquam laudantium ex nesciunt fuga. Architecto ad
          similique, repudiandae pariatur deleniti aspernatur laudantium, ea
          facere omnis, facilis cumque soluta.
        </p>
      </div>
    </section>
  );
};

export default TechOverviewSection;
