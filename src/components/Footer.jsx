import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/components/Footer.scss';

const Footer = () => {
  return (
    <footer className="footer bg-[var(--color-primary)] text-[var(--color-white)]">
      <div className="mt-8 text-center">
          <img src="/bulle-bas.png" alt="Bulle d'information" className="mx-auto" />
        </div>
        <div className="mx-auto max-w-[900px] px-10">
        <Link to="/" className="flex items-center">
          <img 
            src="/Logo-blanc.png" 
            alt="Logo Trouve ton artisan" 
            className="navbar-logo h-auto max-w-[250px] py-3"
          />
        </Link>
        <div className='adresse'>
            <strong className='py-5 block'>Lyon</strong>
             <address className="not-italic">101 cours Charlemagne <br />
                    CS 20033<br />
                    69269 LYON CEDEX 02<br />
                    France<br />
                    <a href="tel:+330426734000">+33 (0)4 26 73 40 00</a>
              </address>
        </div>  
       

                <div className='line py-10'>
                <svg viewBox="0 0 200 1" xmlns="http://www.w3.org/2000/svg">
                <line x1="1000" y1="0" x2="0" y2="0" stroke="white" /></svg>
                </div>

<div className='flex flex-wrap space-x-5 text-sm'>
<a href="/">Mentions légales</a>  
<a href="/">Données personnelles</a>
<a href="/">Données Accessibilité : partiellement conforme</a>
<a href="/">Presse</a>
<a href="/">Marchés publics</a>
<a href="/">Venir à la Région</a>
<a href="/">Contacts</a>
<a href="/">Gestion des cookies</a>
</div>


        
      
      
      </div>
    </footer>
  );
};

export default Footer;
