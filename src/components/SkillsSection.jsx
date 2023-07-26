import React from "react";
import classes from "./skillsSection.module.css";

const SkillsSection = () => {
  return (
    <section className={classes.skillsSectionWrapper}>
      <div className={classes.skillsContentWrapper}>
        <h3>Skills</h3>
        <div className={classes.skillsContent}>
          <div className={classes.skillsColumn}>
            <h4>Code</h4>
            <ul>
              <li>Text</li>
              <li>Text</li>
              <li>Text</li>
              <li>Text</li>
              <li>Text</li>
            </ul>
          </div>
          <div className={classes.skillsColumn}>
            <h4>Tools</h4>
            <ul>
              <li>Text</li>
              <li>Text</li>
              <li>Text</li>
              <li>Text</li>
              <li>Text</li>
            </ul>
          </div>
          <div className={classes.skillsColumn}>
            <h4>More</h4>
            <ul>
              <li>Text</li>
              <li>Text</li>
              <li>Text</li>
              <li>Text</li>
              <li>Text</li>
            </ul>
          </div>
          <div className={classes.skillsColumn}>
            <h4>Upcoming</h4>
            <ul>
              <li>Text</li>
              <li>Text</li>
              <li>Text</li>
              <li>Text</li>
              <li>Text</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
