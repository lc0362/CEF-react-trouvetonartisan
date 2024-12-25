import React from 'react';
import { VscDash } from "react-icons/vsc";
import artisansData from '../components/data/datas.json';
import departementsData from '../components/data/departements.json';
import Rating from '../components/Rating';
import { Link } from 'react-router-dom';

const Home = () => {
  // Filtre des artisans ayant la propriété "top" à true dans datas.json
  const topArtisans = artisansData.filter((artisan) => artisan.top);

  

  return (
    <>
     <div style={{ backgroundColor: 'var(--color-secondary)' }} className="text-white pt-8">
  <div className="max-w-lg mx-auto md:max-w-[800px] p-5 ">
    <div className="md:flex md:items-center md:space-x-5 ">
      <h1 className="text-2xl mb-6 md:mb-0 flex items-center justify-center md:text-center md:mx-15 md:mr-10 md:max-w-[250px] ">
        Comment trouver mon artisan ?
      </h1>
      <div className="space-y-5 text-left ">
        <p className="flex items-center 
        ">
          <span
            style={{ backgroundColor: 'var(--color-primary)' }}
            className="text-white rounded-full w-8 h-7 flex items-center justify-center mr-3 hover:scale-110"
          >
            1
          </span>
          Choisir la catégorie d'artisanat dans le menu.
        </p>
        <p className="flex items-center">
          <span
            style={{ backgroundColor: 'var(--color-primary)' }}
            className="text-white rounded-full w-8 h-7 flex items-center justify-center mr-3 hover:scale-110"
          >
            2
          </span>
          Choisir un artisan.
        </p>
        <p className="flex items-center">
          <span
            style={{ backgroundColor: 'var(--color-primary)' }}
            className="text-white rounded-full w-8 h-7 flex items-center justify-center mr-3 hover:scale-110"
          >
            3
          </span>
          Le contacter via le formulaire de contact.
        </p>
        <p className="flex items-center">
          <span
            style={{ backgroundColor: 'var(--color-primary)' }}
            className="text-white rounded-full w-8 h-7 flex items-center justify-center mr-3 hover:scale-110"
          >
            4
          </span>
          Une réponse sera apportée sous 48h.
        </p>
      </div>
    </div>
  </div>



        <div className="mt-8 text-center">
          <img src="/bulle-haut.png" alt="Bulle d'information" className="mx-auto" />
        </div>
      </div>

      <div className="mx-auto max-w-[900px]">
        <div className="max-w-7xl mx-auto px-10 lg:px-0
         ">
          <div className="mb-5 lg:pl-20
          ">
            <div>
              <VscDash className="dash text-7xl" style={{ color: 'var(--color-primary)' }} />
            </div>
            <h1 className="text-xl" style={{ color: 'var(--color-secondary)' }}>Artisans du mois</h1>
          </div>

          <div className="flex flex-wrap gap-10
           md:gap-2
            transition-all duration-30
           text-center justify-center items-start 
          ">
  {topArtisans.map((artisan) => {
    const departement = departementsData[artisan.location];

  // Générer un slug à partir du nom de l'artisan
  const artisanSlug = artisan.name
  .toLowerCase() // Passe tout en minuscule
  .replace(/ /g, '-') // Remplace les espaces par des tirets
  .normalize('NFD') // Supprime les accents
  .replace(/[\u0300-\u036f]/g, ""); // Supprime les accents et caracteres speciaux

    return (
      <Link key={artisan.id} to={`/fiche/${artisanSlug}`} className="block lg:basis-[32%]">
      <div
      key={artisan.id}
      style={{ backgroundColor: 'var(--color-white)' }}
      className="text-dark p-6 transition-all duration-300 group relative basis-full 
      hover:outline-[var(--color-primary)] 
      outline-none
      hover:outline
      hover:outline-4 
       hover:cursor-pointer"
    >
      <h2
        className="text-lg mb-2 transition-transform duration-200 group-hover:scale-110"
        style={{ color: 'var(--color-secondary)' }}
      >
        {artisan.name}
      </h2>
      <p className="mb-3  ">
        <strong>{artisan.note}</strong> <Rating note={artisan.note} />
      </p>
      <p className="mb-3 lg:text-sm md:px-20 lg:px-0 
      ">
        <strong>{artisan.specialty}</strong>. {artisan.about}
      </p>
      <p className="mb-3 lg:text-sm">
        <strong>{artisan.location}</strong>
        {departement && ` (${departement})`}
      </p>
    
      {/* Icône flèche */}
      <span
        className="flex justify-center mt-4 transition-transform duration-200 group-hover:scale-125"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={4}
          stroke="currentColor"
          className="w-4 h-4 mt-6"
          style={{ color: 'var(--color-primary)' }}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3"
          />
        </svg>
      </span>
    </div>
    </Link>
    

    );
  })}
</div>


          <div className="my-5 text-center">
            <Link to="/liste">
            <button
              style={{ backgroundColor: 'var(--color-primary)' }}
              className="text-white py-2 px-8 rounded-full transition-all duration-300 transform hover:scale-105"
              onMouseEnter={(e) => (e.target.style.backgroundColor = 'var(--color-secondary)')}
              onMouseLeave={(e) => (e.target.style.backgroundColor = 'var(--color-primary)')}
            >
              Tous les artisans
            </button>
            </Link>

          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
