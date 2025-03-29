import React from 'react';
import css from './TechSkills.module.css';
import { useTranslation } from 'react-i18next';

const techSkills = [
  { name: 'JavaScript', image: '/src/assets/js.svg' },
  { name: 'HTML', image: '/src/assets/html.svg' },
  { name: 'CSS', image: '/src/assets/css.svg' },
  { name: 'Figma', image: '/src/assets/figma.svg' },
  { name: 'Git', image: '/src/assets/git.svg' },
  { name: 'REST API', image: '/src/assets/API.svg' },
  { name: 'Vite', image: '/src/assets/VITE.svg' },
  { name: 'Vercel', image: '/src/assets/vercel.svg' },
  { name: 'NPM', image: '/src/assets/npm.svg' },
  { name: 'VSC', image: '/src/assets/vsc.svg' },
  { name: 'React', image: '/src/assets/react.svg' },
];

const TechSkills = () => {
    const { t } = useTranslation();

  return (
    <section className={css.techSection} id="tech-skills">
      <h2 className={css.title}>{t('techSkills')}</h2>
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
