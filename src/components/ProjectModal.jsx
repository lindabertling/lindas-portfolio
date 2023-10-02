import React from "react";
import classes from "./projectModal.module.css";
import Image from "next/image";

const ProjectModal = ({ project, handleClose }) => {
  console.log(project);

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") {
      handleClose();
    }
  });

  return (
    <div className={classes.modalBackdrop} onClick={handleClose}>
      <div
        className={classes.modalWrapper}
        onClick={(event) => {
          event.stopPropagation();
        }}
      >
        <div className={classes.closeBtnWrapper}>
          <button onClick={handleClose}> X </button>
        </div>
        <div className={classes.title}>
          <h2>{project.title}</h2>
        </div>
        <div className={classes.mainContent}>
          <p>{project.description}</p>
          <p>{project.additionalInfo}</p>
          <div className={classes.modalImages}>
            {project.additionalImages.map((image, index) => (
              <Image key={index} src={image} alt="Screenshots from project." />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectModal;
