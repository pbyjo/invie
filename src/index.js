/* ------------------------- *\
    Imports y variables
\* ------------------------- */

import React from 'react';
import ReactDOM from 'react-dom';
import reportWebVitals from './reportWebVitals';

/* Componentes */
import Invie from './components/Invie';

/* Styles */
import './styles/index.css';

/* Logos */
import logoPortada from '../items/images/invie.png';
import logoWhite from '../items/images/invie-white.png';
import g_acustica from '../items/images/invie-acustica.png';
import g_electrica from '../items/images/invie-classic.png';

/* libs */
import cheet from 'cheet.js';

/* ------------------------- *\
    Propiedades
\* ------------------------- */

const data = {
  
  guitarras: [
    {
      image: g_acustica,
      alt: 'Guitarra Invie Acustica',
      name: 'Invie Acustica',
      features: [
        'Estilo vintage',
        'Madera pura',
        'Incluye estuche invisible de aluminio',
      ]
    },
    {
      image: g_electrica,
      alt: 'Guitarra Invie eléctrica',
      name: 'Invie Eléctrica',
      features: [
        'Estilo moderno',
        'Madera caoba',
        'Incluye estuche de cuero y picks',
      ]
    },
  ],
  menu: [
    {
      href: 'index.html',
      title: 'Home',
    },
    {
      href: '#guitarras',
      title: 'Guitarras',
    },
    {
      href: 'precios.html',
      title: 'Precios',
    }
  ],
  
  logoPortada: logoPortada,
  logoFooter: logoWhite,
  videoP: videoP,
}

/* ------------------------- *\
    Render
\* ------------------------- */

cheet('i n v i e', () =>{
  console.log('Has descubierto el easter egg');
})

cheet('g o b a c k' , () =>{
  console.log('Has vuelto al estado original');
})

ReactDOM.render(
  <React.StrictMode>
    <Invie />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
