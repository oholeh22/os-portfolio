import React from 'react';
import Logo from '../Logo/Logo'; 

const Header = () => {
  return (
    <header>
      <nav>
        {/* Левый блок с логотипом */}
        <div>
          <Logo />
        </div>

        {/* Правый блок с навигацией (якорные ссылки) */}
        <ul>
          <li>
            <a href="#about-me">About Me</a>
          </li>
          <li>
            <a href="#my-project">My Project</a>
          </li>
          <li>
            <a href="#contacts">Contacts</a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
