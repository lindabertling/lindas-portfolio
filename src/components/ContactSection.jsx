import React from "react";
import classes from "./contactSection.module.css";

const ContactSection = () => {
  return (
    <section className={classes.contactSectionWrapper} id="contact">
      <div>
        <h3>Get In Touch</h3>
        <p>
          Do you have questions or just want to say hi? 👋🏻
          <br />
          Please don't hesitate to{" "}
          <span>
            <a href="mailto:lindabertling@hotmail.com" target="_blank">
              pop me an email
            </a>
          </span>{" "}
          at lindabertling@hotmail.com or via{" "}
          <span>
            <a
              href="https://www.linkedin.com/in/linda-bertling/"
              target="_blank"
            >
              LinkedIn
            </a>
          </span>
          . I'd love to hear from you! 💌
        </p>
      </div>
    </section>
  );
};

export default ContactSection;
