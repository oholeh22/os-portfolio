import React from "react";
import Logo from "../Logo/Logo";
import css from "./Header.module.css";
import { useTranslation } from "react-i18next";
import gbFlag from "../../assets/gb.svg";
import uaFlag from "../../assets/ua.svg";

const Header = () => {
  const { t, i18n } = useTranslation();

  const toggleLang = () => {
    const newLang = i18n.language === "EN" ? "UA" : "EN";
    i18n.changeLanguage(newLang);
  };

  const isUA = i18n.language === "UA";

  return (
    <header className={css.header}>
      <nav>
        <div className={css.logoContainer}>
          <Logo />
        </div>

        <ul className={css.navList}>
          <li className={css.navItem}>
            <a className={css.navLink} href="#about-me">
              {t("aboutMe")}
            </a>
          </li>
          <li className={css.navItem}>
            <a className={css.navLink} href="#my-project">
              {t("myProject")}
            </a>
          </li>
          <li className={css.navItem}>
            <a className={css.navLink} href="#contacts">
              {t("contacts")}
            </a>
          </li>
        </ul>

        <div className={css.switchers}>
          <div className={css.langToggle} onClick={toggleLang}>
            <span className={css.langIcon}></span>
            <div className={`${css.toggleTrack} ${isUA ? css.ua : css.en}`}>
              <div className={css.toggleThumb}>
                <img
                  src={isUA ? uaFlag : gbFlag}
                  alt="Lang flag"
                  className={css.flagInside}
                />
              </div>
            </div>
            <span className={css.langIcon}></span>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
