import React, { useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import artisansData from '../components/data/datas.json';
import { FaArrowRight } from "react-icons/fa";
import departementsData from '../components/data/departements.json';
import Rating from '../components/Rating';
import Breadcrumb from '../components/Breadcrumb.jsx';

const List = () => {
  const { category } = useParams(); // Récupérer la catégorie depuis l'URL

  // État pour contrôler l'affichage de tous les résultats
  const [showAll, setShowAll] = useState(false);

  // Filtrer les artisans en fonction de la catégorie, ou afficher tous les artisans si aucune catégorie n'est précisée
  const filteredArtisans = category
    ? artisansData.filter((artisan) => artisan.category.toLowerCase() === category.toLowerCase())
    : artisansData;

  // Limiter à 9 résultats par défaut
  const visibleArtisans = showAll ? filteredArtisans : filteredArtisans.slice(0, 9);

  return (
    <>
    
      <div className="mx-auto max-w-[900px]">
      <div className="mx-auto px-10 lg:px-0 py-5
      ">

        
          {/* Titre de la section */}
          <div className="">
            <div className=" text-xs">
            < Breadcrumb />
            </div>
          
            <h1 className="text-xl my-5
            " style={{ color: 'var(--color-secondary)'}}>
              {category ? `Liste des artisans "${category}"` : 'Tous les artisans'}
            </h1>
          </div>

{/* Filtre*/}
          <div   
          style={{ backgroundColor: 'var(--color-white)' }}
          className="text-dark p-6 lg:basis-[90%]"
          >


          </div>

<div className='my-5 text-xs'>
{filteredArtisans.length} résultat(s)
</div>


          {/* Liste des artisans */}
          <div className="flex flex-wrap gap-10 md:gap-2 transition-all duration-30 text-center">
            {visibleArtisans.length > 0 ? (
              visibleArtisans.map((artisan) => {
                // Générer un slug à partir du nom de l'artisan
                const artisanSlug = artisan.name
                  .toLowerCase()
                  .replace(/ /g, '-') // Remplace les espaces par des tirets
                  .normalize('NFD') // Supprime les accents
                  .replace(/[\u0300-\u036f]/g, ""); // Supprime les accents et caractères spéciaux

                const departement = departementsData[artisan.location];
                return (
                  <div
                    key={artisan.id}
                    style={{ backgroundColor: 'var(--color-white)' }}
                    className="text-dark p-6 transition-all duration-300 group relative basis-full lg:basis-[32%] hover:outline-[var(--color-primary)] outline-none hover:outline hover:outline-4 hover:cursor-pointer"
                  >
                    <Link to={`/fiche/${artisanSlug}`}>
                      <h2
                        className="text-lg mb-2 transition-transform duration-200 group-hover:scale-110"
                        style={{ color: 'var(--color-secondary)' }}
                      >
                        {artisan.name}
                      </h2>
                      <div className="mb-3">
                        <strong>{artisan.note}</strong> <Rating note={artisan.note} />
                      </div>
                      <div className="mb-3 lg:text-sm md:px-20 lg:px-0">
                        <strong>{artisan.specialty}</strong>. {artisan.about}
                      </div>
                      <div className="mb-3 lg:text-sm">
                        <strong>{artisan.location}</strong>
                        {departement && ` (${departement})`}
                      </div>

                      {/* Icône flèche */}
                     <div
                             className="flex justify-center mt-4 transition-transform duration-200 group-hover:scale-125"
                             style={{ color: 'var(--color-primary)' }} 
                           >
                             <FaArrowRight />
                             
                           </div>
                    </Link>
                  </div>
                );
              })
            ) : (
              <div>Aucun artisan trouvé.</div>
            )}
          </div>

          {/* Bouton Voir plus */}
          {!showAll && filteredArtisans.length > 9 && (
            <div className="my-5 text-center">
              <button
                onClick={() => setShowAll(true)} // Met à jour l'état 
                style={{ backgroundColor: 'var(--color-primary)' }}
                className="text-white py-2 px-8 rounded-full transition-all duration-300 transform hover:scale-110"
              >
                Voir plus de résultats
              </button>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default List;
