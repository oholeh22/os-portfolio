import React from "react";
import Logo from "../Logo/Logo";
import css from "./Header.module.css";

const Header = () => {
  return (
    <header className={css.header}>
      <nav>
        <div className={css.logoContainer}>
          <Logo />
        </div>

        <ul className={css.navList}>
          <li className={css.navItem}>
            <a className={css.navLink} href="#about-me">
              About Me
            </a>
          </li>
          <li className={css.navItem}>
            <a className={css.navLink} href="#my-project">
              My Project
            </a>
          </li>
          <li className={css.navItem}>
            <a className={css.navLink} href="#contacts">
              Contacts
            </a>
          </li>
        </ul>

        <div className={css.switchers}>
          <button className={css.switcherBtn}>Dark/Light</button>
          <button className={css.switcherBtn}>EN/UA</button>
        </div>
      </nav>
    </header>
  );
};

export default Header;
