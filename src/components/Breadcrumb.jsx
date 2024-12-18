import React from 'react';
import { Link } from 'react-router-dom';

const Breadcrumb = () => {
  return (
    <nav className="breadcrumb flex items-center space-x-2 text-[var(--color-primary)]">
      <Link to="/" className="hover:underline">
        Accueil
      </Link>
    </nav>
  );
};

export default Breadcrumb;
