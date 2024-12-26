import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/components/Footer.scss';

const Footer = () => {
  return (
    <footer className="footer bg-[var(--color-primary)] text-[var(--color-white)]">
      <div className="mt-8 text-center">
          <img src="/bulle-bas.png" alt="Bulle d'information" className="mx-auto" />
        </div>
        <div className="mx-auto max-w-[900px] lg:max-w-[1100px] px-10">
          <div className="flex flex-col  lg:flex-row lg:gap-x-36">

        <Link to="/" className="flex items-center lg:place-items-start">
          <img 
            src="/Logo-blanc.png" 
            alt="Logo Trouve ton artisan" 
            className="h-auto max-w-[250px] py-3 "
          />
        </Link>
        <div>
            <strong className='py-3 lg:pt-3 block'>Lyon</strong>
             <address className="not-italic">101 cours Charlemagne <br />
                    CS 20033<br />
                    69269 LYON CEDEX 02<br />
                    France<br />
                    <Link to="tel:+330426734000">+33 (0)4 26 73 40 00</Link>
              </address>
        </div>  
        </div>

                <div className='line py-10 lg:max-w-[900px] lg:mx-auto'>
                <svg viewBox="0 0 200 1" xmlns="http://www.w3.org/2000/svg">
                <line x1="1000" y1="0" x2="0" y2="0" stroke="white" /></svg>
                </div>

<small className='pb-30'>
  <div className='flex flex-wrap text-balance gap-x-12 md:gap-x-12
  lg:gap-x-4 lg:place-content-evenly gap-y-5 lg:text-xs lg:max-w-[900px] lg:mx-auto'>
<Link to="#">Mentions légales</Link>  
<Link to="#">Données personnelles</Link>
<Link to="#">Données Accessibilité : partiellement conforme</Link>
<Link to="#">Presse</Link>
<Link to="#">Marchés publics</Link>
<Link to="#">Venir à la Région</Link>
<Link to="#">Contacts</Link>
</div>
<div className='py-5 lg:max-w-[900px] lg:mx-auto lg:text-center lg:text-xs'>
<Link to="#">Gestion des cookies</Link>
</div>
</small>


        
      
      
      </div>
    </footer>
  );
};

export default Footer;
