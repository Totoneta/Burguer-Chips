import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals.js';
import App from './App.jsx';
import { CarritoContext } from './contextos/carrito-context.jsx';




const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <CarritoContext>
    <App />
  </CarritoContext>
);


reportWebVitals();
