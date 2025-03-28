import React from 'react';
import css from './AboutMe.module.css';
import { useTranslation } from "react-i18next";

const AboutMe = () => {

    const { t } = useTranslation();

  return (
    <section id="about-me" className={css.section}>
      <div className={css.container}>
        <h2 className={css.title}>{t('aboutMe')}</h2>
        <div className={css.content}>
          <div className={css.imageWrapper}>
            <img
              src="/myself.jpg"
              alt="My Portrait"
              className={css.image}
            />
          </div>
          <div className={css.text}>
            <p>
              Hi! I'm a passionate Front-End Developer who loves creating clean, responsive, and interactive websites. I specialize in React, JavaScript, and modern UI/UX practices.
            </p>
            <p>
              I enjoy turning complex problems into simple, beautiful interfaces. When I'm not coding, I’m probably drinking coffee ☕, traveling, or learning something new.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
