import React from 'react';
import { Link } from 'react-router-dom';
import Breadcrumb from '../components/Breadcrumb'; 

const Page404 = () => {
  return (
    <div className=" mx-auto max-w-[900px] px-10">
       
      {/* Fil d'Ariane */}
      <Breadcrumb />
      <h1 className="text-2xl py-5 text-[var(--color-secondary)]">Erreur 404</h1>
      <p className="font-bold ">Page non trouvée...</p>
      


      <div className="my-5 text-center">
      <div className="mx-auto max-w-[200px] m-5">
          <img src="/CEF-react-trouvetonartisan/404-error.png" alt="Point d'exclamation dans un triangle" className="mx-auto" />
        </div>
        <Link to="/" className="text-white bg-[var(--color-primary)] py-2 px-8 rounded-full 
              transition-all duration-300 transform hover:bg-[var(--color-secondary)]">
            
              Retourner vers la page d'accueil
            
            </Link>
          </div>

    </div>
  );
};

export default Page404;