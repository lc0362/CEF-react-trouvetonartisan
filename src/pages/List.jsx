import React from 'react';
import { Link } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import artisansData from '../components/data/datas.json';
import departementsData from '../components/data/departements.json';
import Rating from '../components/Rating';
import { VscDash } from 'react-icons/vsc';

const List = () => {
  const { category } = useParams(); // pour récupérer la catégorie depuis l'URL

  // Filtrer les artisans en fonction de la catégorie, ou afficher tous les artisans si aucune catégorie n'est précisée
  const filteredArtisans = category
    ? artisansData.filter((artisan) => artisan.category.toLowerCase() === category.toLowerCase())
    : artisansData;

  return (
    <>
      <div className="mx-auto max-w-[900px]">
        <div className="max-w-7xl mx-auto px-10 lg:px-0">
          {/* Titre de la section */}
          <div className="mb-5 lg:pl-20">
            <div>
              <VscDash className="dash text-7xl" style={{ color: 'var(--color-primary)' }} />
            </div>
            <h1 className="text-xl" style={{ color: 'var(--color-secondary)' }}>
              {category ? `Artisans de la catégorie "${category}"` : 'Tous les artisans'}
            </h1>
          </div>

          {/* Liste des artisans */}
          <div className="flex flex-wrap gap-10 md:gap-2 transition-all duration-30 text-center">
            {filteredArtisans.length > 0 ? (
              filteredArtisans.map((artisan) => {
                const departement = departementsData[artisan.location];
                return (
                  <div
                    key={artisan.id}
                    style={{ backgroundColor: 'var(--color-white)' }}
                    className="text-dark p-6 transition-all duration-300 group relative basis-full lg:basis-[32%] hover:outline-[var(--color-primary)] outline-none hover:outline hover:outline-4 hover:cursor-pointer"
                  >
                    <h2
                      className="text-lg mb-2 transition-transform duration-200 group-hover:scale-110"
                      style={{ color: 'var(--color-secondary)' }}
                    >
                      {artisan.name}
                    </h2>
                    <p className="mb-3">
                      <strong>{artisan.note}</strong> <Rating note={artisan.note} />
                    </p>
                    <p className="mb-3 lg:text-sm md:px-20 lg:px-0">
                      <strong>{artisan.specialty}</strong>. {artisan.about}
                    </p>
                    <p className="mb-3 lg:text-sm">
                      <strong>{artisan.location}</strong>
                      {departement && ` (${departement})`}
                    </p>

                    {/* Icône flèche */}
                    <span className="flex justify-center mt-4 transition-transform duration-200 group-hover:scale-125">
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
                );
              })
            ) : (
              <p>Aucun artisan trouvé.</p>
            )}
          </div>

          {/* Bouton */}
          <div className="my-5 text-center">
          <Link to="/liste">
            <button
              style={{ backgroundColor: 'var(--color-primary)' }}
              className="text-white py-2 px-8 rounded-full transition-all duration-300 transform hover:scale-105"
              onMouseEnter={(e) => (e.target.style.backgroundColor = 'var(--color-secondary)')}
              onMouseLeave={(e) => (e.target.style.backgroundColor = 'var(--color-primary)')}
            >
              Voir plus de résultats
            </button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default List;
