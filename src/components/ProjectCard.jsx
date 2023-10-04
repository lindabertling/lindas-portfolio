import React from "react";
import classes from "./projectCard.module.css";
import Image from "next/image";
import Link from "next/link";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGlobe, faCircleInfo } from "@fortawesome/free-solid-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";

const ProjectCard = ({ project, handleViewMore }) => {
  const handleClickViewMore = (project, event) => {
    handleViewMore(project);
    event.target.classList.add(classes.noHover);
    setTimeout(() => {
      event.target.classList.remove(classes.noHover);
    }, 500);
  };

  return (
    <div className={classes.card}>
      <div className={classes.imageContainer}>
        <Image
          src={project.image}
          alt="Screenshot of project"
          style={{ objectFit: "cover" }}
        />
      </div>

      <div className={classes.cardContentContainer}>
        <h2>{project.title}</h2>
        <p className={classes.description}>{project.description}</p>
        <div className={classes.projectStackLabels}>
          {project.stack.map((item) => (
            <p className={classes.stackLabel} key={item}>
              {item}
            </p>
          ))}
        </div>

        <div className={classes.cardButtons}>
          {project.isPublished && (
            <>
              <Link
                href={project.url}
                target="_blank"
                className={classes.button}
              >
                <FontAwesomeIcon
                  icon={faGlobe}
                  size="lg"
                  style={{ color: "#ffffff" }}
                />
                Live demo
              </Link>
              <Link
                href={project.githubRepo}
                target="_blank"
                className={classes.button}
              >
                <FontAwesomeIcon
                  icon={faGithub}
                  size="lg"
                  style={{ color: "#ffffff" }}
                />
                View the code
              </Link>
            </>
          )}
          {!project.isPublished && (
            <div
              className={classes.button}
              onClick={(event) => handleClickViewMore(project, event)}
            >
              <FontAwesomeIcon
                icon={faCircleInfo}
                size="lg"
                style={{ color: "#ffffff" }}
              />
              View more
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
