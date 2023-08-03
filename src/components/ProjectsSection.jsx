import React from "react";
import classes from "./projectsSection.module.css";
import ProjectCard from "./ProjectCard";

const projectList = [
  {
    image: "", // url/src
    title: "Hejsan svejsan",
    description: "",
    stack: [], // List of strings (icons?),
    url: "",
    githubRepo: "",
  },
  {
    image: "", // url/src
    title: "Hallå där, köp blåbär!",
    description: "",
    stack: [], // List of strings (icons?),
    url: "",
    githubRepo: "",
  },
];

const ProjectsSection = () => {
  return (
    <section className={classes.projectsSectionWrapper}>
      <div className={classes.projectsSectionContent}>
        <h3>FEATURED PROJECTS</h3>
        <div className={classes.projectsContainer}>
          {projectList.map((project) => (
            <ProjectCard key={project.title} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
