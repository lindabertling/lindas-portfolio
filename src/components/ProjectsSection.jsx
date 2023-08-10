import React, { useState } from "react";
import classes from "./projectsSection.module.css";
import ProjectCard from "./ProjectCard";
import ProjectModal from "./ProjectModal";

//Images
import hiveImage from "../../public/images/projects/img_landingpage-hero-cropped.png";
import peersLandingPage from "../../public/images/projects/img_landingpage-collage.png";
import peersCollage from "../../public/images/projects/img_peers-collage.png";
import weatherAppImage from "../../public/images/projects/img_weather-app.png";

const projectList = [
  {
    image: hiveImage,
    title: "HIVE 11 X Bris",
    description:
      "A digital solution for peer-to-peer support system for children was created together with the HIVE 11 team at Humblebee and in collaboration with Bris.",
    stack: [
      "HMTL5",
      "CSS3",
      "TypeScript",
      "Next.js",
      "React",
      "Firebase",
      "MUI",
    ],
    isPublished: false,
    url: "",
    githubRepo: "",
    additionalImages: [peersLandingPage, peersCollage],
    additionalInfo:
      "I worked on this project with the amazing HIVE 11 team during my internship at Humblebee in Gothenburg, Sweden. The project was created in collaboration with Bris. The project has not been publicly published, the source code is available upon request.",
  },
  {
    image: weatherAppImage,
    title: "Current Weather",
    description:
      "Minimal web application that displays the current weather in the users location.",
    stack: ["HMTL5", "CSS3", "JavaScript", "API", "Parcel"],
    isPublished: true,
    url: "https://lindasweather.netlify.app/",
    githubRepo: "https://github.com/lindabertling/weather-app",
  },
];

const ProjectsSection = () => {
  const [showModal, setShowModal] = useState(false);
  const [selectedProject, setSelectedProject] = useState(false);

  const handleViewMore = (project) => {
    setShowModal(true);
    setSelectedProject(project);
  };
  return (
    <section className={classes.projectsSectionWrapper}>
      <div className={classes.projectsSectionContent}>
        <h3>FEATURED PROJECTS</h3>
        <div className={classes.projectsContainer}>
          {projectList.map((project) => (
            <ProjectCard
              key={project.title}
              project={project}
              handleViewMore={handleViewMore}
            />
          ))}
        </div>
      </div>
      {showModal && <ProjectModal project={selectedProject} />}
    </section>
  );
};

export default ProjectsSection;
