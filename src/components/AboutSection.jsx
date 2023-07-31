import React from "react";
import classes from "./aboutSection.module.css";
import AboutSlider from "./AboutSlider";
import Link from "next/link";

const AboutSection = () => {
  const salsaVideoUrl = "https://www.youtube.com/shorts/aZLHge2u18M";
  const slides = [
    {
      id: 0,
      heading: "💁🏻‍♀️",
      content:
        "If you're just here for code related things, please feel free to skip this section as I will mostly ramble about my other passions in life. However, if you do want to know what there is to me beyond the world of code, here we go!",
    },
    {
      id: 1,
      heading: "🧶",
      content:
        "I love a good craft, whether it be digital or something I can actually hold in my hands. I always have at least one work in progress on my knitting needles but you could also find me with a hammer or screwdriver in hand DIYing of fixing something. I simply like to make things happen. Whether it's physical crafting or finding creative solutions to real-life challenges, there is just something about turning ideas into reality.",
    },
    {
      id: 2,
      heading: "💃🏻",
      content: (
        <>
          Another passion in my life is dancing, more specifically Cuban Salsa -
          it is truly one of the best things in life! If you're curious about
          salsa, you can find a short video of me dancing{" "}
          <Link
            href={salsaVideoUrl}
            target="_blank"
            style={{ textDecorationLine: "underline" }}
          >
            here
          </Link>
          .
        </>
      ),
    },
  ];

  return (
    <section className={classes.aboutSectionWrapper} id="about">
      <div className={classes.aboutContent}>
        <h3>ABOUT</h3>
        <AboutSlider slides={slides} />
      </div>
    </section>
  );
};

export default AboutSection;
