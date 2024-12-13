import React from 'react';
import { VscDash } from "react-icons/vsc";
import artisansData from '../components/data/datas.json';
import departementsData from '../components/data/departements.json';
import Rating from '../components/Rating';

const Home = () => {
  // Filtrer les artisans ayant la propriété "top" à true
  const topArtisans = artisansData.filter((artisan) => artisan.top);

  return (
    <>
    


      <div style={{ backgroundColor: 'var(--color-secondary)'}} className=" text-white pt-8">
        <div className="max-w-lg mx-auto text-center mx-auto max-w-[900px]">
          <h1 className="text-xl  mb-6">Comment trouver mon artisan ?</h1>
          <div className="space-y-4 text-left">
            <p className="flex items-center">
              <span style={{ backgroundColor: 'var(--color-primary)'}} className=" text-white rounded-full w-8 h-8 flex items-center justify-center mr-3 ">1</span>
              Choisir la catégorie d'artisanat dans le menu.
            </p>
            <p className="flex items-center">
              <span style={{ backgroundColor: 'var(--color-primary)'}} className=" text-white rounded-full w-8 h-8 flex items-center justify-center mr-3 ">2</span>
              Choisir un artisan.
            </p>
            <p className="flex items-center">
              <span style={{ backgroundColor: 'var(--color-primary)'}} className=" text-white rounded-full w-8 h-8 flex items-center justify-center mr-3 ">3</span>
              Le contacter via le formulaire de contact.
            </p>
            <p className="flex items-center">
              <span style={{ backgroundColor: 'var(--color-primary)'}} className=" text-white rounded-full w-8 h-8 flex items-center justify-center mr-3 ">4</span>
              Une réponse sera apportée sous 48h.
            </p>
          </div>
        </div>
        <div className="mt-8 text-center">
          <img src="/bulle-haut.png" alt="Bulle d'information" className="mx-auto" />
        </div>
      </div>

      <div className="mx-auto max-w-[900px]">
        <div className="max-w-7xl mx-auto px-4">
          <div className="mb-8">
            <div className="flex items-center mb-2">
              <VscDash className="text-7xl" style={{ color: 'var(--color-primary)'}} />
            </div>
            <h1 className="text-2xl" style={{ color: 'var(--color-secondary)'}}>Artisans du mois</h1>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 text-center">
            {topArtisans.map((artisan) => {
              const departement = departementsData[artisan.location];

              return (
                <div key={artisan.id} style={{ backgroundColor: 'var(--color-white)' }} className="text-dark p-6 t">
                  <h2 className="text-lg mb-2" style={{ color: 'var(--color-secondary)'}}>{artisan.name}</h2>
                  <p className="text-sm mb-2">
                    <strong>{artisan.note}</strong> <Rating note={artisan.note} />
                  </p>
                  <p className="text-sm mb-2">
                    <strong>{artisan.specialty}</strong>. {artisan.about}
                  </p>
                  <p className="text-sm">
                    <strong>{artisan.location}</strong>{departement && ` (${departement})`}
                  </p>
                </div>
              );
            })}
          </div>

          <div className="my-8 text-center">
          <button style={{ backgroundColor: 'var(--color-primary)' }} className=" text-white py-2 px-8 rounded-full transition-all duration-300 transform hover:scale-105" onMouseEnter={(e) => e.target.style.backgroundColor = 'var(--color-secondary)'} onMouseLeave={(e) => e.target.style.backgroundColor = 'var(--color-primary)'}>              Tous les artisans
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
