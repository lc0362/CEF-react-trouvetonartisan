import React from 'react';
import { Routes, Route } from 'react-router-dom'; 
import Header from  './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import Page404 from './pages/Page404';
import List from './pages/List';
import Fiche from './pages/Fiche';
import BackToTop from './components/BackToTop';

function App() {
  return (
    <div className="App">
       <Header />
      <Routes>
        <Route path="/trouvetonartisan/" element={<Home />} />
        <Route path="/trouvetonartisan/liste" element={<List />} />
        <Route path="/trouvetonartisan/liste/:category" element={<List />} />
        <Route path="/trouvetonartisan/fiche/:name" element={<Fiche />} />
        <Route path="/*" element={<Page404 />} />
      </Routes>
        <BackToTop />
        <Footer />
    </div>
  );
}

export default App;
