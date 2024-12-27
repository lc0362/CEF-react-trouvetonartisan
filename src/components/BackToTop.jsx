import React, { useState, useEffect } from 'react';
import { FaArrowRight } from "react-icons/fa";

const BackToTop = () => {
  // Gère l'affichage du bouton, visible ou pas
  const [isVisible, setIsVisible] = useState(false);

  // Fonction appelée lors du défilement
  const scrollFunction = () => {
    // Si l'utilisateur défile vers le bas de 20px, montre le bouton
    if (window.scrollY > 20) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  // Fonction pour remonter en haut de la page
  const topFunction = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' }); // Défilement fluide
  };

  // Ajouter un écouteur d'événements lors du montage du composant
  useEffect(() => {
    window.addEventListener('scroll', scrollFunction);
    // Nettoie l'événement lors du démontage du composant
    return () => {
      window.removeEventListener('scroll', scrollFunction);
    };
  }, []);

  return (
    <button
      onClick={topFunction}
      title="Revenir en haut de la page"
      style={{ backgroundColor: 'var(--color-white)' }}
      onMouseEnter={(e) => (e.target.style.backgroundColor = 'var(--color-dark)')}
                  onMouseLeave={(e) => (e.target.style.backgroundColor = 'var(--color-white)')}
      className={`fixed bottom-5 right-7 z-[99] border-none outline-none 
                  text-white cursor-pointer p-4 rounded-full text-lg 
                  transition-all duration-300 shadow-xl 
                  ${isVisible ? 'block' : 'hidden'}`}
    >
       <FaArrowRight
       style={{ color: 'var(--color-primary)' }}
       className="transform -rotate-90"  />
    </button>
  );
};

export default BackToTop;
