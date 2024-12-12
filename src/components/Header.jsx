import React from 'react';
import '../styles/components/Header.scss';

const Header = () => {
  return (
    <header className="header">
      <div className="logo">Header</div>
      <nav>
        <ul>
          <li><a href="/">Accueil</a></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
