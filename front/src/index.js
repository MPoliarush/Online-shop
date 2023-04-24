import React from 'react';
import ReactDOM from 'react-dom/client';
import './components/FirstPage.css'
import './components/Header.css'
import './components/Catalogs/CatalogCamera.css'
import './components/Catalogs/CatalogLinse.css'
import './components/Catalogs/ProductPage.css'
import './components/Admin/Admin.css'
import './components/Admin/AdminCart.css'
import './components/Footer.css'

import App from './App';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

