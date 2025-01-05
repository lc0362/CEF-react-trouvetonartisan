import React from 'react';
import { useParams, Link } from 'react-router-dom';
import artisansData from '../components/data/datas.json';
import departementsData from '../components/data/departements.json';
import Rating from '../components/Rating';
import { VscDash } from 'react-icons/vsc';
import Breadcrumb from '../components/Breadcrumb.jsx';

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
          <div className=" text-xs">
            < Breadcrumb />
            </div>
            <h1 className="text-xl py-5" style={{ color: 'var(--color-secondary)' }}>
              {artisan.name}
            </h1>


            <div>
              <VscDash className="dash text-7xl" style={{ color: 'var(--color-primary)' }} />
            </div>
            {/* A propos */}
            <h2 className="text-xl" style={{ color: 'var(--color-secondary)' }}>
             A propos
            </h2>
          </div>

          
          <div className="my-10 space-y-5">
            <div>
            <strong>{artisan.note}</strong> <Rating note={artisan.note} />
            </div>
            <p>
              <strong>Spécialité :</strong> {artisan.specialty}. {artisan.about}
            </p>
           
          
            <p>
              <strong>Localisation :</strong> {artisan.location}
              {departement && ` (${departement})`}.
            </p>
          </div>

          <div>
              <VscDash className="dash text-7xl" style={{ color: 'var(--color-primary)' }} />
            </div>
            {/* Formulaire de contact */}
            <h2 className="text-xl" style={{ color: 'var(--color-secondary)' }}>
             Envoyer un mail à cet artisan
            </h2>
         
          

          
          <div className="my-10 ml-10 space-y-5 max-w-[500px]">
            <p className="text-xs italic ">Les champs marqués d'un astérisque (*) sont requis.</p>
            <form className="space-y-5">
            <label className="flex flex-col" >
              <div className="flex flex-row pb-3">
                Nom <div style={{ color: 'var(--color-accent)' }}>*</div>:
              </div>
                <input className="border rounded-full outline outline-1 outline-[var(--color-primary)] 
                min-h-[35px]" 
                style={{ backgroundColor: 'var(--color-white)' }} 
                type="text" 
                name="Nom" 
                />
              </label>

              <label className="flex flex-col" >
              <div className="flex flex-row pb-3">
              Objet <div style={{ color: 'var(--color-accent)' }}>*</div>:
              </div>
                <input className="border rounded-full outline outline-1 outline-[var(--color-primary)] 
                min-h-[35px]" 
                style={{ backgroundColor: 'var(--color-white)' }} 
                type="text" 
                name="Objet" 
                />
              </label>

              <label className="flex flex-col" >
              <div className="flex flex-row pb-3">
                Votre message <div style={{ color: 'var(--color-accent)' }}>*</div>:
              </div>
                <input className="border rounded-3xl outline outline-1 outline-[var(--color-primary)] 
                min-h-[150px]" 
                style={{ backgroundColor: 'var(--color-white)' }} 
                type="text" 
                name="Message" 
                />
              </label>

              <p className="text-xs italic ">
                Les informations recueillies à partir de ce formulaire 
                sont nécessaires aux services de la Région Auvergne-Rhône-Alpes pour 
                la gestion de votre demande. 
              </p>
              <p className="text-xs italic"
              style={{ color: 'var(--color-primary)' }}>
                Pour en savoir plus sur la gestion de vos données et vos droits. 
              </p>
              <input className="border rounded-full hover:scale-110 hover:cursor-pointer px-8
              min-h-[35px]"
              style={{ backgroundColor: 'var(--color-primary)', color: 'var(--color-white)' }}
              type="submit" value="Soumettre" />
              </form>
              </div>

              <div>
              <VscDash className="dash text-7xl" style={{ color: 'var(--color-primary)' }} />
            </div>
            {/* Site web */}
            <h2 className="text-xl" style={{ color: 'var(--color-secondary)' }}>
             Site web
            </h2>
          

          
          <div className="my-10">
          <strong>{artisan.website}</strong>
          </div>

      </div>
      </div>
    </>
  );
};

export default Fiche;

