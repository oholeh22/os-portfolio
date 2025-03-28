import React from "react";
import css from "./AboutMe.module.css";
import { useTranslation } from "react-i18next";

const AboutMe = () => {
  const { t } = useTranslation();

  return (
    <section id="about-me" className={css.section}>
      <div className={css.container}>
        <h2 className={css.title}>{t("aboutMe")}</h2>
        <div className={css.content}>
          <div className={css.imageWrapper}>
            <img src="/myself.jpg" alt="My Portrait" className={css.image} />
          </div>
          <div className={css.text}>
            <p>
              Hello! I'm a junior Front-End Developer with a strong desire to
              grow and create. I'm focused on building clean, responsive, and
              user-friendly websites using modern technologies.
            </p>
            <p>
              I have experience with HTML5, CSS3, JavaScript, React, and Git. I
              can help you build landing pages, adaptive layouts, interactive
              interfaces, and bring your design ideas to life in the browser.
            </p>
            <p>
              I'm constantly learning and improving my skills, and I truly
              believe that consistency beats talent. Let’s create something
              great together!
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
