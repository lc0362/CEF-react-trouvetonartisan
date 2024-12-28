import React from 'react';
import { useParams, Link } from 'react-router-dom';
import artisansData from '../components/data/datas.json';
import departementsData from '../components/data/departements.json';
import Rating from '../components/Rating';
import { VscDash } from 'react-icons/vsc';

const Fiche = () => {
  const { name } = useParams(); // Récupérer le slug depuis l'URL

  // Fonction pour générer un slug à partir d'un nom
  const artisanSlug = (text) => {
    return text
      .toLowerCase() // Passe tout en minuscule
      .replace(/ /g, '-') // Remplace les espaces par des tirets
      .normalize('NFD') // Supprime les accents
      .replace(/[\u0300-\u036f]/g, ""); // Supprime les accents et caracteres speciaux
    
  };

  // Trouver l'artisan correspondant au slug
  const artisan = artisansData.find(
    (artisan) => artisanSlug(artisan.name) === name
  );

  // Vérifier si l'artisan existe (sinon message non trouvé)
  if (!artisan) {
    return (
      <div className="text-center m-10">
        <p 
          style={{ color: 'var(--color-accent)' }}
          className="mb-10"
        >
          Artisan non trouvé
        </p>
        <Link to="/liste">
          <button
            style={{ backgroundColor: 'var(--color-primary)' }}
            className="text-white py-2 px-8 rounded-full transition-all duration-300 transform hover:scale-105"
          >
            Retour à la liste
          </button>
        </Link>
      </div>
    );
  }

  const departement = departementsData[artisan.location];

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
              {artisan.name}
            </h1>
          </div>

          {/* Infos de l'artisan */}
          <div className="text-lg mb-5">
            <div>
              <strong>Note :</strong> {artisan.note} <Rating note={artisan.note} />
            </div>
            <p>
              <strong>Spécialité :</strong> {artisan.specialty}
            </p>
            <p>
              <strong>Localisation :</strong> {artisan.location}
              {departement && ` (${departement})`}
            </p>
            <p>
              <strong>À propos :</strong> {artisan.about}
            </p>
          </div>

          {/* Bouton retour */}
          <div className="text-center mt-5">
            <Link to="/liste">
              <button
                style={{ backgroundColor: 'var(--color-primary)' }}
                className="text-white py-2 px-8 rounded-full transition-all duration-300 transform hover:scale-105"
              >
                Retour à la liste
              </button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Fiche;

