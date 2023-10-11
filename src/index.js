import React from 'react';
import ReactDOM from 'react-dom/client';
import './css/ImportCssGeral.css';
import Header from './Components/Header/Header';
import Footer from './Components/Footer/Footer';
import BodyHome from './Components/BodyHome/BodyHome';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <div className='container'>
  <React.StrictMode>
    <Header />
    <BodyHome />
    <Footer />
  </React.StrictMode>
  </div>
);
