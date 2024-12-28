import React from 'react';
import { Link } from 'react-router-dom';
import Breadcrumb from '../components/Breadcrumb'; 

const Page404 = () => {
  const links = [
    { label: 'Accueil', to: '/' },
  ];
  return (
    <div className=" mx-auto max-w-[900px] px-10">
       
      {/* Fil d'Ariane */}
      <Breadcrumb links={links} />
      <h1 className="text-2xl py-5 text-[var(--color-secondary)]">Erreur 404</h1>
      <p className="font-bold ">Page non trouvée...</p>
      


      <div className="my-5 text-center">
      <div className="mx-auto max-w-[200px] m-5">
          <img src="/404-error.png" alt="Bulle d'information" className="mx-auto" />
        </div>
        <Link to="/">
            <button
              style={{ backgroundColor: 'var(--color-primary)' }}
              className="text-white py-2 px-8 rounded-full transition-all duration-300 transform hover:scale-105"
              onMouseEnter={(e) => e.target.style.backgroundColor = 'var(--color-secondary)'}
              onMouseLeave={(e) => e.target.style.backgroundColor = 'var(--color-primary)'}
            >
              Retourner vers la page d'accueil
            </button>
            </Link>
          </div>

    </div>
  );
};

export default Page404;
