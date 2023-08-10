import React from "react";
import classes from "./skillsSection.module.css";

const ListSection = ({ title, listOfSkills, background }) => {
  return (
    <div className={classes.skillsColumn}>
      <h4>
        <span className={`${classes.highlighted} ${classes[background]}`}>
          {title}
        </span>
      </h4>
      <ul>
        {listOfSkills.map((skill) => {
          return <li key={skill}>{skill}</li>;
        })}
      </ul>
    </div>
  );
};

const SkillsSection = () => {
  const codeBullets = [
    "HTML5",
    "CSS3",
    "JavaScript ES6",
    "TypeScript",
    "React",
    "Material UI",
    "SQL",
    "Postgres",
    "Java",
  ];
  const toolsBullets = [
    "VS Code",
    "Git",
    "Kanban",
    "Jira",
    "Trello",
    "Figma",
    "Postman",
    "Slack",
    "Microsoft Teams",
  ];
  const moreBullets = [
    "Agile methodology",
    "Pair programming",
    "Mob programming",
  ];
  const upcomingBullets = [
    "Redux",
    "Next.js",
    "Node.js",
    "Tailwind CSS",
    "Animations",
    "Sass",
  ];

  return (
    <section className={classes.skillsSectionWrapper} id="skills">
      <div className={classes.skillsContentWrapper}>
        <h3>SKILLS</h3>
        <div className={classes.skillsContent}>
          <ListSection
            title="Code"
            listOfSkills={codeBullets}
            background="purple"
          />
          <ListSection
            title="Tools"
            listOfSkills={toolsBullets}
            background="pink"
          />
          <ListSection
            title="More"
            listOfSkills={moreBullets}
            background="green"
          />
          <ListSection
            title="Upcoming"
            listOfSkills={upcomingBullets}
            background="blue"
          />
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
