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
            <img src="/myself.jpg" loading="lazy" alt="My Portrait" className={css.image} />
          </div>
          <div className={css.text}>
            <p>{t("About1")}</p>
            <p>{t("About2")}</p>
            <p>{t("About3")}</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
