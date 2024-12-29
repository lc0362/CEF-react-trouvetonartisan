import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { HiMenuAlt2 } from "react-icons/hi";
import { CiSearch } from 'react-icons/ci';
import { motion } from "framer-motion";
import { RiCloseLargeFill } from "react-icons/ri";
import artisansData from '../components/data/datas.json';
import { FaArrowRight } from "react-icons/fa";


function Header() {
  const [menuOpen, setMenuOpen] = useState(false);  // État pour gérer l'ouverture et fermeture du menu
  const location = useLocation();
  const isNotHomePage = location.pathname !== '/'; // Variable pour repérer si l'url n'est pas la page d'accueil
  const [searchVisible, setSearchVisible] = useState(false); // Barre de recherche non visible par défaut
  const [showDesktopResults, setShowDesktopResults] = useState(false);
  const [showMobileResults, setShowMobileResults] = useState(false);

  const [searchTerm, setSearchTerm] = useState(""); // Stocker la valeur de la recherche

  const normalizeString = (str) => {
    return str
      .toLowerCase() // Passe tout en minuscule
      .replace(/ /g, '-') // Remplace les espaces par des tirets
      .normalize('NFD') // Décompose les caractères accentués
      .replace(/[\u0300-\u036f]/g, ""); // Supprime les accents et caractères spéciaux
  };
  

  const artisanResult = searchTerm.length >= 0
    ? artisansData.filter((artisan) => {
        const normalizedSearchTerm = normalizeString(searchTerm);
        return (
          normalizeString(artisan.name).includes(normalizedSearchTerm) ||
          normalizeString(artisan.specialty).includes(normalizedSearchTerm) ||
          normalizeString(artisan.location).includes(normalizedSearchTerm)
        );
      }).slice(0, 4)
    : [];

 
  
  


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

  // Ajout/Suppression d'un écouteur d'événement en fonction de l'état du menu
  const handleClickOutside = (event) => {
    if (!event.target.closest('.navbar-toggler')) {
      setMenuOpen(false);
    }
    if (!event.target.closest('.search-menu-mobile')) {
      setSearchVisible(false);
    }
  };
  
  useEffect(() => {
    document.addEventListener('click', handleClickOutside);
    return () => document.removeEventListener('click', handleClickOutside);
  }, [menuOpen, searchVisible]);

  return (
    <div className={`${isNotHomePage ? 'border-b-4 border-[var(--color-dark)]-400 mb-5' : ''}  py-5 `}>
    <nav className="bg-white mx-auto max-w-[900px] px-10 z-[100]">
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
        {/* Icône loupe mobile */}
        <div className="search-menu-mobile flex items-center lg:hidden ml-2">
        {!searchVisible && ( // Si la barre de recherche n'est pas visible
          <button 
            className="p-2 text-[var(--color-primary)]"
            type="button"
            aria-label="Rechercher"
            aria-expanded={searchVisible}
            onClick={(event) => {
              event.stopPropagation(); // Eviter la fermeture immédiate
              setSearchVisible(!searchVisible); // Utilisation directe de l'état
            }}
          
          >
            <CiSearch style={{ color: 'var(--color-primary)' }} size={30} />
          </button>
        )}
         {searchVisible && ( // Si la barre de recherche est visible
         <div className="">
          <div className="absolute top-0 left-0 w-full bg-white z-50 p-4 flex items-center border-b border-[var(--color-primary)]">

              <input 
                type="text"
                name="searchBar"
                id="searchBar"
                placeholder="Entrez votre recherche (nom, métier ou ville)"
                className="w-full p-2 border-none focus:outline-none"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
              <button 
                type="button"
                className="p-2 text-[var(--color-primary)]"
                onClick={() => setShowMobileResults(!showMobileResults)}
              >
                <CiSearch style={{ color: 'var(--color-primary)' }} size={30} />
              </button >
              </div> 
              {/* Affichage des résultats */}
              <div className="bg-[var(--color-white)] rounded-md top-20 left-0 w-80 shadow-md flex flex-col gap-5 absolute z-[20]"
              onClick={(event) => {
              setSearchVisible(!searchVisible); // Utilisation directe de l'état
              }}>
              {artisanResult.length > 0 ? (
  artisanResult.map((artisan) => {
    const artisanSlug = artisan.name
      .toLowerCase()
      .replace(/ /g, '-')
      .normalize('NFD')
      .replace(/[\u0300-\u036f]/g, "");

    return (
      <div key={artisan.id} className="flex-col border-b p-10">
        <div className="hover:scale-110">
          <Link to={`/fiche/${artisanSlug}`}>
            <p className="text-lg font-bold text-[var(--color-secondary)]">{artisan.name}</p>
            <p className="text-sm text-[var(--color-secondary)]">{artisan.specialty} - {artisan.location}</p>
            <div className="flex justify-center mt-4 transition-transform duration-200" style={{ color: 'var(--color-primary)' }}>
              <FaArrowRight />
            </div>
          </Link>
        </div>
       
      </div>

    ); 
  }) 
  
) : (
  <p className="text-[var(--color-accent)] p-5">Aucun artisan ne correspond à votre recherche.</p>
)}
                   <div className="flex flex-row items-center cursor-pointer gap-3 text-slate-400 hover:text-inherit px-10 pb-2"
              onClick={(event) => {
              setSearchVisible(!searchVisible); // Utilisation directe de l'état
              }}
                   >
 <RiCloseLargeFill />
  Fermer la recherche
  </div>
            </div>
              </div>
         )}

          {/* Menu burger */}
          <button
            className="navbar-toggler border-none flex items-center"
            type="button"
            aria-label="Toggle navigation"
            aria-expanded={menuOpen}
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
          
          <form 
          onSubmit={(e) => e.preventDefault()} 
          className="search-bar hidden lg:flex items-center border-b border-r border-[var(--color-primary)] mb-2 text-sm"
          >
            <input 
              type="text" 
              aria-label="Search"
              placeholder="Rechercher"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)} 
              className="border-none px-2 py-1 focus:outline-none"
            />
            <button 
              aria-label="Rechercher"
              className="px-2 text-[var(--color-primary)]"
              onClick={() => setShowDesktopResults(!showDesktopResults)}
            >
              <CiSearch style={{ color: 'var(--color-primary)' }} size={20} />
            </button>
          </form>


          {showDesktopResults && (
  <div className="absolute top-14 bg-[var(--color-white)] shadow-lg rounded-md">
    <ul className="max-w-[900px] z-[100]">
      {artisanResult.length > 0 ? (
        artisanResult.map((artisan) => {
          // Générer un slug propre pour l'URL
          const artisanSlug = artisan.name
            .toLowerCase()
            .replace(/ /g, '-')
            .normalize('NFD')
            .replace(/[\u0300-\u036f]/g, "");

          return (
            <li key={artisan.id} 
            className="border-b px-10 py-5 flex justify-center "
            onClick={() => setShowDesktopResults(false)} 
            >
              <div className="transition duration-200 hover:scale-110">
              <Link to={`/fiche/${artisanSlug}`} className="block">
                <p className="text-lg font-bold text-[var(--color-secondary)]">
                  {artisan.name}
                </p>
                <p className="text-sm text-[var(--color-secondary)]">
                  {artisan.specialty} - {artisan.location}
                </p>
                <div className="flex justify-center mt-4 transition-transform duration-200 text-[var(--color-primary)]">
                  <FaArrowRight />
                </div>
              </Link>
              </div>
            </li>
          );
        })
      ) : (
        // Message si aucun résultat trouvé
        <li className="flex-wrap border-b p-5 my-4 text-[var(--color-accent)] max-w-[260px]">
          Aucun artisan ne correspond à votre recherche.
        </li>
      )}
    </ul>

    {/* Bouton pour fermer la recherche desktop */}
    <div
      className="flex flex-row items-center cursor-pointer gap-3 text-slate-400 hover:text-inherit px-10 py-5"
      onClick={() => setShowDesktopResults(false)} 
    >
      <RiCloseLargeFill />
      Fermer la recherche
    </div>
  </div>
)}

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
      <div className={`${menuOpen ? '' : 'hidden'} lg:hidden absolute mt-5 left-0 w-full`} id="mobile-menu">


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