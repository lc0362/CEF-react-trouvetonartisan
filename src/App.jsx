import React from 'react';
import { Routes, Route } from 'react-router-dom'; 
import Header from './components/Header';
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
        <Route path="/" element={<Home />} />
        <Route path="/liste" element={<List />} />
        <Route path="/liste/:category" element={<List />} />
        <Route path="/fiche/:name" element={<Fiche />} />
        <Route path="/*" element={<Page404 />} />
      </Routes>
        <BackToTop />
        <Footer />
    </div>
  );
}

export default App;
