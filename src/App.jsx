import React from 'react';
import { Routes, Route } from 'react-router-dom'; 
import Header from './components/Header';
import Footer from './components/Footer';
import Search from './components/Search';
import Home from './pages/Home';
import _404 from './pages/_404';
import List from './pages/List';
import Fiche from './pages/Fiche';

function App() {
  return (
    <div className="App">
       <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/liste" element={<List />} />
        <Route path="/liste/:category" element={<List />} />
        <Route path="/fiche" element={<Fiche />} />
        <Route path="/fiche/:name" element={<Fiche />} />
        <Route path="*" element={<_404 />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
