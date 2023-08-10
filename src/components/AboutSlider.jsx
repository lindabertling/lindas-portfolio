import React, { useEffect, useState } from "react";
import classes from "./aboutSlider.module.css";

const AboutSlider = ({ slides }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [consoleLogged, setConsoleLogged] = useState(false);

  useEffect(() => {
    if (currentIndex != 0 && !consoleLogged) {
      console.log(
        "Hi there! 👋🏻 I'm so excited you want to learn more about me. 🙌🏼 Please do send me an email or connect on LinkedIn. 🌼"
      );
      setConsoleLogged(true);
    }
  }, [currentIndex, consoleLogged]);

  const goToPrevious = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const goToNext = () => {
    const isLastSlide = currentIndex === slides.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  const goToSlide = (slideIndex) => {
    setCurrentIndex(slideIndex);
  };

  return (
    <div className={classes.slider}>
      <div
        className={`${classes.arrow} ${classes.left}`}
        onClick={goToPrevious}
      >
        ‹
      </div>
      <div className={`${classes.arrow} ${classes.right}`} onClick={goToNext}>
        ›
      </div>
      <div className={classes.slideContentContainer}>
        <div className={classes.slideMainContent}>
          <h3>{slides[currentIndex].heading}</h3>
          <p>{slides[currentIndex].content}</p>
        </div>

        <div className={classes.dotsContainer}>
          {slides.map((slide, slideIndex) => (
            <div
              key={slideIndex}
              className={`${classes.dot} ${
                slideIndex === currentIndex ? classes.current : ""
              }`}
              onClick={() => goToSlide(slideIndex)}
            >
              ⏺
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AboutSlider;
