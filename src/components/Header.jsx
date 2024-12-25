import React, { useState, useEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { HiMenuAlt2 } from "react-icons/hi";
import { CiSearch } from 'react-icons/ci';
import { motion } from "framer-motion";
import { RiCloseLargeFill } from "react-icons/ri";
import datas from './data/datas.json';


function Header() {
  const [menuOpen, setMenuOpen] = useState(false);  // État pour gérer l'ouverture et fermeture du menu (mobile)
  const location = useLocation();
  const isNotHomePage = location.pathname !== '/'; // Vérification que l'url n'est pas la page d'accueil

  const [searchVisible, setSearchVisible] = useState(false); // Barre de recherche non visible par défaut
  const [searchTerm, setSearchTerm] = useState(""); // Stocker la valeur de la recherche
  const [showResults, setShowResults] = useState(false); // Afficher ou masquer les résultats de recherche

  const searchInputRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        searchVisible && // Vérifie si la recherche est visible
        !event.target.closest('.search-menu-mobile') && // Ignore les clics dans la zone mobile
        !event.target.closest('#searchBar') // Ignore les clics dans l'input
      ) {
        setSearchVisible(false);
        setSearchTerm(""); 
        setShowResults(false);
      }
    };

    

    if (searchVisible) {
      document.addEventListener('click', handleClickOutside);
      searchInputRef.current?.focus(); // Focus sur l'input lorsque visible
    } else {
      document.removeEventListener('click', handleClickOutside);
    }

    return () => document.removeEventListener('click', handleClickOutside); // Nettoyage
  }, [searchVisible]); // Dépendance
  

  const toggleSearch = () => {
    setTimeout(() => { // Ajout d'un délai pour éviter la fermeture immédiate
      setSearchVisible(!searchVisible); 
      setSearchTerm(""); 
      setShowResults(false);
    }, 50); // Délai de 50ms pour laisser le temps au DOM de se stabiliser
  };
  

  const handleSearchTerm = (e) => {
    let value = e.target.value;
    setSearchTerm(value);
};

  const menuVars = {
    initial:{
      scaleY: 0,
    },
    animate:{
      scaleY: 1,
      transition:{
        duration:0.5,
        ease: [0.12, 0, 0.39, 0]
      }
    },
    exit:{
      scaleY: 0,
      transition:{
        duration:0.5,
        ease: [0.22, 1, 0.36, 1]
      }
    },
  };


  

  return (
     // Ajout de bordures conditionnelles si ce n'est pas la page d'accueil
    <div className={`${isNotHomePage ? 'border-b-4 border-[var(--color-dark)]-400 mb-5' : ''}  py-5`}>
    <nav className="bg-white mx-auto max-w-[900px] px-10 ">
      <div className="w-full py-2 flex items-center justify-between h-16">
        {/* Logo */}
        <Link to="/" className="flex items-center">
          <img 
            src="/Logo.png" 
            alt="Logo Trouve ton artisan" 
            className="navbar-logo h-auto max-w-[250px]"
          />
        </Link>

        {/* Sur mobile : loupe + burger */}
        <div className="search-menu-mobile flex items-center lg:hidden ml-2">
        {!searchVisible && (
            <button className="p-2 text-[var(--color-primary)]" 
            type="button" 
            aria-label="Rechercher" 
            onClick={toggleSearch}
            >
              <CiSearch style={{ color: 'var(--color-primary)' }} size={40} />
            </button>
          )}
          {searchVisible && (
            <div className="absolute top-0 left-0 w-full bg-white z-50 p-4 flex items-center border-b border-[var(--color-primary)]">

              <input 
                type='text' 
                name='searchBar' 
                id="searchBar" 
                placeholder="Rechercher"
                ref={searchInputRef}
                className="w-full p-2 border-none focus:outline-none"
                onChange={handleSearchTerm}
                value={searchTerm}
              />
              <button 
                type="button"
                className="p-2 text-[var(--color-primary)]"
                onClick={() => setShowResults(true)}
              >
                <CiSearch style={{ color: 'var(--color-primary)' }} size={30} />
              </button>
            </div>
          )}

          {/* Menu burger */}
          <button
            className="navbar-toggler border-none flex items-center"
            type="button"
            aria-label="Toggle navigation"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            <div className="flex flex-col items-center justify-center">
              <HiMenuAlt2 
                style={{ color: 'var(--color-primary)' }}
                size={40}
                className="transform rotate-180" 
              />
              <span 
                className="menu-text text-xs"
                style={{ color: 'var(--color-primary)' }}
              >
                Menu
              </span>
            </div>
          </button>
        </div>
        

        

        <div className="header-lg-right hidden lg:flex flex-col items-end">
          {/* Barre de recherche visible à partir de lg */}
          <form className="search-bar hidden lg:flex items-center border-b border-r border-[var(--color-primary)] mb-2 text-sm">
            <input 
              type="text" 
              aria-label="Search"
              placeholder="Rechercher"
              className="border-none px-2 py-1 focus:outline-none"
            />
            <button 
              type="submit"
              aria-label="Rechercher"
              className="px-2 text-[var(--color-primary)]"
            >
              <CiSearch style={{ color: 'var(--color-primary)' }} size={20} />
            </button>
          </form>

          {/* Liens de navigation desktop */}
          <nav className="navbar-nav flex flex-row items-center justify-end w-full space-x-4 pt-2 text-sm ">
            <Link 
              className={`nav-link text-[var(--secondary-color)] hover:underline ${location.pathname === '/liste/batiment' ? 'underline font-bold' : ''}`} 
              to="/liste/batiment"
            >
              Bâtiment
            </Link>

            <Link 
              className={`nav-link text-[var(--secondary-color)] hover:underline ${location.pathname === '/liste/services' ? 'underline font-bold' : ''}`} 
              to="/liste/services"
            >
              Services
            </Link>

            <Link 
              className={`nav-link text-[var(--secondary-color)] hover:underline ${location.pathname === '/liste/fabrication' ? 'underline font-bold' : ''}`} 
              to="/liste/fabrication"
            >
              Fabrication
            </Link>

            <Link 
              className={`nav-link text-[var(--secondary-color)] hover:underline ${location.pathname === '/liste/alimentation' ? 'underline font-bold' : ''}`} 
              to="/liste/alimentation"
            >
              Alimentation
            </Link>
          </nav>
        </div>
      </div>

      {/* Liens de navigation mobile */}
      <div className={`${menuOpen ? 'block' : 'hidden'} lg:hidden absolute mt-5 left-0 w-full`} id="mobile-menu">


      <motion.nav
      variants={menuVars}
      initial="initial"
      animate={menuOpen ? "animate" : "initial"}
      exit="exit"
      className="flex flex-col h-full items-center   gap-2 bg-[var(--color-secondary)]  
      text-[var(--color-white)]  z-10 sticky top-0 origin-top" 
      >
        
<div className="pb-10 text-center">
          <img src="/bulle-bas.png" alt="Bulle d'information" className="mx-auto" />
        </div>
        

<div className="pb-10">Choisissez une catégorie d'artisanat :</div>

          <Link 
            className={`nav-link uppercase text-3xl hover:underline px-20 py-5 ${location.pathname === '/liste/batiment' ? 'underline font-bold' : ''}`} 
            to="/liste/batiment"
          >
            Bâtiment
          </Link>

        
        
          <Link 
            className={`nav-link uppercase text-3xl hover:underline px-20 py-5 ${location.pathname === '/liste/services' ? 'underline font-bold' : ''}`} 
            to="/liste/services"
          >
            Services
          </Link>
       
          <Link 
            className={`nav-link uppercase text-3xl hover:underline px-20 py-5 ${location.pathname === '/liste/fabrication' ? 'underline font-bold' : ''}`} 
            to="/liste/fabrication"
          >
            Fabrication
          </Link>
       
          <Link 
            className={`nav-link uppercase text-3xl hover:underline px-20 py-5 ${location.pathname === '/liste/alimentation' ? 'underline font-bold' : ''}`} 
            to="/liste/alimentation"
          >
            Alimentation
          </Link>

 <div className="flex flex-row items-center cursor-pointer mt-40 p-2 pb-5 gap-3 text-slate-400 hover:text-inherit">
 <RiCloseLargeFill />
  Fermer le menu
  </div>


          
       
        

        </motion.nav>

       
        
      </div>
    </nav>
    </div>
  );
}

export default Header;