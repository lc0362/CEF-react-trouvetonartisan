import React from 'react';
import { Routes, Route } from 'react-router-dom'; 
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import _404 from './pages/_404';

function App() {
  return (
    <div className="App">
       <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="*" element={<_404 />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
