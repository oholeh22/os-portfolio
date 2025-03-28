import React from 'react';
import css from './HeroSection.module.css';
import { useTranslation } from "react-i18next";

const HeroSection = () => {

    const { t } = useTranslation();

  return (
    <section className={css.hero}>
      <div className={css.overlay}>
        <h1 className={css.name}>SHYIAN</h1>
        <h2 className={css.title}>FRONTEND DEVELOPER</h2>
        <p className={css.quote}>{t('heroQuote')}</p>
      </div>
    </section>
  );
};

export default HeroSection;
