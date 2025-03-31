import React from "react";
import css from "./TechSkills.module.css";
import { useTranslation } from "react-i18next";

const techSkills = [
  { name: "JavaScript", image: "/assets/js.svg" },
  { name: "HTML", image: "/assets/html.svg" },
  { name: "CSS", image: "/assets/css.svg" },
  { name: "Figma", image: "/assets/figma.svg" },
  { name: "Git", image: "/assets/git.svg" },
  { name: "REST API", image: "/assets/API.svg" },
  { name: "Vite", image: "/assets/VITE.svg" },
  { name: "Vercel", image: "/assets/vercel.svg" },
  { name: "NPM", image: "/assets/npm.svg" },
  { name: "VSC", image: "/assets/vsc.svg" },
  { name: "React", image: "/assets/react.svg" },
];

const TechSkills = () => {
  const { t } = useTranslation();

  return (
    <section className={css.techSection} id="tech-skills">
      <h2 className={css.title}>{t("techSkills")}</h2>
      <div className={css.marqueeContainer}>
        <div className={css.marquee}>
          {techSkills.map((tech, index) => (
            <div key={index} className={css.techCard}>
              <img src={tech.image} alt={tech.name} className={css.techIcon} />
              <p className={css.techName}>{tech.name}</p>
            </div>
          ))}
          {techSkills.map((tech, index) => (
            <div key={`dup-${index}`} className={css.techCard}>
              <img src={tech.image} alt={tech.name} className={css.techIcon} />
              <p className={css.techName}>{tech.name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TechSkills;
