import React from "react";
import classes from "./skillsSection.module.css";

const ListSection = ({ title, listOfSkills }) => {
  return (
    <div className={classes.skillsColumn}>
      <h4>{title}</h4>
      <ul>
        {listOfSkills.map((skill) => {
          return <li key={skill}>{skill}</li>;
        })}
      </ul>
    </div>
  );
};

const SkillsSection = () => {
  const codeSkills = ["HTML", "CSS", "JavaScript", "React", "Node.js"];

  return (
    <section className={classes.skillsSectionWrapper}>
      <div className={classes.skillsContentWrapper}>
        <h3>SKILLS</h3>
        <div className={classes.skillsContent}>
          <ListSection title="Code" listOfSkills={codeSkills} />
          <ListSection title="Tools" listOfSkills={codeSkills} />
          <ListSection title="More" listOfSkills={codeSkills} />
          <ListSection title="Upcoming" listOfSkills={codeSkills} />
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
