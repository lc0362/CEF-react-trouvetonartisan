import React from 'react';
import { Link } from 'react-router-dom';

const Breadcrumb = () => {
  return (
    <nav
      className="breadcrumb flex items-center space-x-2"
      style={{
        color: 'var(--color-secondary)',
        position: 'relative',
        zIndex: 10, 
      }}
    >
      <Link to="/" className="hover:underline">
        Accueil
      </Link>
    </nav>
  );
};

export default Breadcrumb;
