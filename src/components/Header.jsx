import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { HiMenuAlt2 } from "react-icons/hi";
import { CiSearch } from 'react-icons/ci';

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="bg-white mx-auto max-w-[900px] py-5 px-10">
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
          {/* Icône loupe mobile */}
          <button 
            className="p-2 text-[var(--color-primary)]"
            type="button"
            aria-label="Rechercher"
          >
            <CiSearch style={{ color: 'var(--color-primary)' }} size={30} />
          </button>

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
          <ul className="navbar-nav flex flex-row items-center justify-end w-full space-x-4 pt-2 text-sm">
            <li className="nav-item">
              <Link className="nav-link text-[var(--secondary-color)] hover:underline" to="/batiment">Bâtiment</Link>
            </li>
            <li className="nav-item pl-5">
              <Link className="nav-link text-[var(--secondary-color)] hover:underline" to="/services">Services</Link>
            </li>
            <li className="nav-item pl-5">
              <Link className="nav-link text-[var(--secondary-color)] hover:underline" to="/fabrication">Fabrication</Link>
            </li>
            <li className="nav-item pl-5">
              <Link className="nav-link text-[var(--secondary-color)] hover:underline" to="/alimentation">Alimentation</Link>
            </li>
          </ul>
        </div>
      </div>

      {/* Liens de navigation mobile */}
      <div className={`${menuOpen ? 'block' : 'hidden'} lg:hidden w-full`} id="navbarNav">
        <ul className="navbar-nav flex flex-col items-start w-full py-2">
          <li className="nav-item">
            <Link className="nav-link mx-1 text-[var(--secondary-color)] hover:underline" to="/batiment">Bâtiment</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link mx-1 text-[var(--secondary-color)] hover:underline" to="/services">Services</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link mx-1 text-[var(--secondary-color)] hover:underline" to="/fabrication">Fabrication</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link mx-1 text-[var(--secondary-color)] hover:underline" to="/alimentation">Alimentation</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Header;
