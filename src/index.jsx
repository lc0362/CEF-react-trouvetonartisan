import './styles/main.scss'; 
import React from 'react';
import App from './App';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter basename="/CEF-react-trouvetonartisan">
      <App />
    </BrowserRouter>
  </React.StrictMode>
);

reportWebVitals();