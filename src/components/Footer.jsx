import React from 'react';
import '../styles/components/Footer.scss';

const Footer = () => {
  return (
    <footer className="footer">
      <p>Footer</p>
      <p>
        <a href="/mentions-legales">Mentions légales</a> | 
        <a href="/politique-confidentialite"> Politique de confidentialité</a>
      </p>
    </footer>
  );
};

export default Footer;
