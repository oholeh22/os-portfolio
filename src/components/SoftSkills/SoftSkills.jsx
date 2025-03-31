import React, { useState, useEffect } from "react";
import css from "./SoftSkills.module.css";
import { useTranslation } from "react-i18next";

const allSkills = [
  "Communication",
  "Teamwork",
  "Problem Solving",
  "Adaptability",
  "Time Management",
  "Critical Thinking",
  "Creativity",
  "Responsibility",
  "Emotional Intelligence",
  "Initiative",
];

const SoftSkills = () => {
  const { t } = useTranslation();
  const [visibleCount, setVisibleCount] = useState(10);

  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;

      if (width <= 480) {
        setVisibleCount(8);
      } else if (width <= 1024) {
        setVisibleCount(9);
      } else {
        setVisibleCount(10);
      }
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const visibleSkills = allSkills.slice(0, visibleCount);

  return (
    <section className={css.section} id="soft-skills">
      <h2 className={css.title}>{t("softSkillsTitle")}</h2>
      <div className={css.grid}>
        {visibleSkills.map((skill, index) => (
          <div key={index} className={css.card}>
            {t(`soft.${skill}`) || skill}
          </div>
        ))}
      </div>
    </section>
  );
};

export default SoftSkills;
