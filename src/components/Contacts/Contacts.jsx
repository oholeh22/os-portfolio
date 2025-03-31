import React from "react";
import css from "./Contacts.module.css";
import { useTranslation } from "react-i18next";

const Contacts = () => {
    const { t } = useTranslation();

  const handleBellClick = () => {
    window.open("https://t.me/oneshiyan", "_blank");
  };

  

  return (
    <section id="contacts" className={css.contacts}>
      <div className={css.headerContainer}>
        <h2 className={css.title}>{t("contacts")}</h2>
        <img
          src="/assets/bell.svg"
          alt="Bell Icon"
          className={css.bellIcon}
          onClick={handleBellClick}
        />
      </div>

      <div className={css.socials}>
        <a
          href="https://github.com/oholeh22"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src="/assets/github.svg" alt="GitHub" className={css.icon} />
        </a>
        <a
          href="https://www.linkedin.com/in/olehshyian/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src="/assets/linkedin.svg" alt="LinkedIn" className={css.icon} />
        </a>
        <a
          href="https://www.instagram.com/shyian10"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            src="/assets/instagram.svg"
            alt="Instagram"
            className={css.icon}
          />
        </a>
        <a
          href="mailto:shiyan4242@gmail.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src="/assets/gmail.svg" alt="Gmail" className={css.icon} />
        </a>
        <a
          href="https://t.me/oneshiyan"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src="/assets/telegram.svg" alt="Telegram" className={css.icon} />
        </a>
      </div>

      <div className={css.location}>
        <img
          src="/assets/location.svg"
          alt="Location"
          className={css.locationIcon}
        />
        <span>{t("location")}</span>
      </div>

      <a
        href="https://drive.google.com/file/d/1s7VTPAguH-pwp20QVur_6jPZur-fdAdA/view"
        target="_blank"
        rel="noopener noreferrer"
        className={css.resumeButton}
      >
        {t("resume")}
      </a>
    </section>
  );
};

export default Contacts;
