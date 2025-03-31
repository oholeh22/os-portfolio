import React, { useState } from "react";
import css from "./Projects.module.css";
import { useTranslation } from "react-i18next";

const teamProjects = [
  {
    id: 1,
    title: "Team Project 1",
    image: "/aqua.png",
    url: "https://aquacoders.vercel.app/",
  },
  {
    id: 2,
    title: "Team Project 2",
    image: "/jefferson.png",
    url: "https://denyshv1.github.io/team-portfolio-js/",
  },
  {
    id: 3,
    title: "Team Project 3",
    image: "/watch.png",
    url: "https://alisa777gul.github.io/project-SmartCats/",
  },
];

const personalProjects = [
  {
    id: 1,
    title: "Personal Project 1",
    image: "/groom.png",
    url: "https://didykgroom.com/",
  },
  {
    id: 2,
    title: "Personal Project 2",
    image: "/weather.png",
    url: "https://weather-app-ten-pi-90.vercel.app/",
  },
  {
    id: 3,
    title: "Personal Project 3",
    image: "/studio.png",
    url: "https://oholeh22.github.io/goit-markup-hw-06/",
  },
  {
    id: 4,
    title: "Personal Project 4",
    image: "/gallery.png",
    url: "https://oholeh22.github.io/goit-js-hw-12/",
  },
];

const MyProjects = () => {
  const { t } = useTranslation();
  const [teamVisible, setTeamVisible] = useState(2);
  const [personalVisible, setPersonalVisible] = useState(2);

  const loadMoreTeam = () => {
    setTeamVisible((prev) => Math.min(prev + 2, teamProjects.length));
  };

  const loadMorePersonal = () => {
    setPersonalVisible((prev) => Math.min(prev + 2, personalProjects.length));
  };

  return (
    <section className={css.myProjectsSection} id="my-project">
      <h2 className={css.sectionTitle}>{t("Projects")}</h2>
      <div className={css.projectsContainer}>
        <div className={css.column}>
          <h3 className={css.columnTitle}>{t("teamProjects")}</h3>
          <div className={css.projectsGrid}>
            {teamProjects.slice(0, teamVisible).map((project) => (
              <div key={project.id} className={css.projectCard}>
                <img
                  src={project.image}
                  alt={project.title}
                  loading="lazy"
                  className={css.projectImage}
                />
                <button
                  onClick={() => window.open(project.url, "_blank")}
                  className={css.projectButton}
                >
                  {t("view")}
                </button>
              </div>
            ))}
          </div>
          {teamVisible < teamProjects.length && (
            <button onClick={loadMoreTeam} className={css.loadMoreButton}>
              {t("load")}
            </button>
          )}
        </div>
        <div className={css.column}>
          <h3 className={css.columnTitle}>{t("personalProjects")}</h3>
          <div className={css.projectsGrid}>
            {personalProjects.slice(0, personalVisible).map((project) => (
              <div key={project.id} className={css.projectCard}>
                <img
                  src={project.image}
                  alt={project.title}
                  loading="lazy"
                  className={css.projectImage}
                />
                <button
                  onClick={() => window.open(project.url, "_blank")}
                  className={css.projectButton}
                >
                  {t("view")}
                </button>
              </div>
            ))}
          </div>
          {personalVisible < personalProjects.length && (
            <button onClick={loadMorePersonal} className={css.loadMoreButton}>
              {t("load")}
            </button>
          )}
        </div>
      </div>
    </section>
  );
};

export default MyProjects;
