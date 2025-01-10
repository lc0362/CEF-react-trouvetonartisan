import React from 'react';
import { VscDash } from "react-icons/vsc";
import { FaArrowRight } from "react-icons/fa";
import artisansData from '../components/data/datas.json';
import departementsData from '../components/data/departements.json';
import Rating from '../components/Rating';
import { Link } from 'react-router-dom';

const Home = () => {
  // Filtre des artisans ayant la propriété "top" à true dans datas.json
  const topArtisans = artisansData.filter((artisan) => artisan.top);

  

  return (
    <>
     <section className="text-white pt-8 bg-[var(--color-secondary)]">
  <div className="max-w-lg mx-auto md:max-w-[800px] p-5 ">
    <div className="md:flex md:items-center md:space-x-5 ">
      <div className="flex flex-col">
      <h1 className="text-2xl mb-6 md:mb-0 justify-center items-center text-center md:mr-10 md:max-w-[250px]">
        Comment trouver mon artisan ?
      </h1>
      </div>
      <div className="space-y-5 text-left ">
        <div className="flex items-center 
        ">
          <span
            className="text-white rounded-full w-8 h-7 flex items-center justify-center mr-3 hover:scale-110 bg-[var(--color-primary)]"
          >
            1
          </span>
          Choisir la catégorie d'artisanat dans le menu.
        </div>
        <div className="flex items-center">
          <span
            className="text-white rounded-full w-8 h-7 flex items-center justify-center mr-3 hover:scale-110 bg-[var(--color-primary)]"
          >
            2
          </span>
          Choisir un artisan.
        </div>
        <div className="flex items-center">
          <span
            className="text-white rounded-full w-8 h-7 flex items-center justify-center mr-3 hover:scale-110 bg-[var(--color-primary)]"
          >
            3
          </span>
          Le contacter via le formulaire de contact.
        </div>
        <div className="flex items-center">
          <span
            className="text-white rounded-full w-8 h-7 flex items-center justify-center mr-3 hover:scale-110 bg-[var(--color-primary)]"
          >
            4
          </span>
          Une réponse sera apportée sous 48h.
        </div>
      </div>
    </div>
  </div>
  <div className="mt-8 text-center">
          <img src="/CEF-react-trouvetonartisan/bulle-haut.png" alt="Bulle d'information haut" className="mx-auto" />
        </div>
      </section>

      <section className="mx-auto max-w-[900px]">
        <div className="max-w-7xl mx-auto px-10 lg:px-0
         ">
          <div className="mb-5 lg:pl-20
          ">
            <div>
              <VscDash className="dash text-7xl text-[var(--color-primary)]"/>
            </div>
            <h1 className="text-xl text-[var(--color-secondary)]">Artisans du mois</h1>
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
        <article>
      <div
      key={artisan.id}
      className="z-[5] bg-[var(--color-white)] text-dark p-6 
      transition-all duration-300 group relative basis-full 
      hover:outline-[var(--color-primary)] 
      outline-none
      hover:outline
      hover:outline-4 
       hover:cursor-pointer"
    >
      <h2
        className="text-[var(--color-secondary)] text-lg mb-2"
      >
        {artisan.name}
      </h2>
      <div
       className="mb-3  ">
        <strong>{artisan.note}</strong> <Rating note={artisan.note} />
      </div>
      <div className="mb-3 lg:text-sm md:px-20 lg:px-0 
      ">
        <strong>{artisan.specialty}</strong>. {artisan.about}
      </div>
      <div className="mb-3 lg:text-sm">
        <strong>{artisan.location}</strong>
        {departement && ` (${departement})`}
      </div>
     
      {/* Icône flèche */}
      <div
        className="text-[var(--color-primary)] flex justify-center mt-4 group-hover:text-[var(--color-secondary)]"
      >
        <FaArrowRight />
        
      </div>
    </div>
    </article>
    </Link>
    

    );
  })}
</div><div className="my-5 pt-5 text-center">
  <Link
    to="/liste"
    className="text-white bg-[var(--color-primary)]  py-2 px-8 rounded-full 
    transition-all duration-300 transform hover:bg-[var(--color-secondary)]"
  >
    Tous les artisans
  </Link>
</div>

        </div>
      </section>
    </>
  );
};

export default Home;