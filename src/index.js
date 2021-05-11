/* ------------------------- *\
    Imports y variables
\* ------------------------- */

import React from 'react';
import ReactDOM from 'react-dom';

/* Componentes */
import Invie from './components/Invie';

/* Styles */
import './styles/index.css';

/* Logos e imágenes */
import logoHeader from './items/images/invie.png';
import logoWhite from './items/images/invie-white.png';
import logoGibson from './items/images/gibson-logo.png';
import logoGibsonF from './items/images/gibson-logoF.png';
import g_acustica from './items/images/invie-acustica.png';
import g_electrica from './items/images/invie-classic.png';

import easter_guitarA from './items/images/easter-a.png';
import easter_guitarB from './items/images/easter-b.png';

/* libs */
import cheet from 'cheet.js';
import {Provider} from 'react-redux';
import { createStore } from 'redux';

/* Variables */
let videoP = "https://www.youtube.com/embed/R1dW8M4EqYY";

/* ------------------------- *\
    Propiedades
\* ------------------------- */

const initialState = {
  issAnimated: false,
  display: 'contenedor',

  logos: [
    {
      image: logoHeader,
      alt: 'Logo Invie',
    }
  ],
  logosF: [
    {
      image: logoWhite,
      alt: 'Logo Invie',
    }
  ],
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
  /* logoFooter: logoWhite, */
  videoP: videoP,
}

const easter = {
  issAnimated: "is-animated",
  display: "display-none",

  logos: [
    {
      image: logoGibson,
      alt: 'Logo Gibson',
    }
  ],
  logosF: [
    {
      image: logoGibsonF,
      alt: 'Logo Gibson',
    }
  ],
  menu: [
    {
      href: 'index.html',
      title: 'Home',
    },
    {
      href: '#guitarras',
      title: 'Electric',
    },
    {
      href: '#guitarras',
      title: 'Acoustic',
    },
    {
      href: '#video',
      title: 'Accesories',
    },
  ],
  guitarras: [
    {
      image: easter_guitarA,
      alt: 'Guitarra Gibson Acustiadventure',
      name: 'Gibson Padre de familia',
      features: [
        'Estilo Caricatura',
        'Madera imaginaria',
        'Incluye estuche invisible de papel',
      ]
    },
    {
      image: easter_guitarB,
      alt: 'Guitarra Gibson eléctric frame',
      name: 'Les Paul Invisible',
      features: [
        'Estilo Japones',
        'Madera bambú',
        'Incluye estuche magico y picks de diamantes',
      ]
    },
  ],
}

function reducer(state, action) {
  switch(action.type) {
    case 'UPDATE_PROPS': {
      const newProps = action.payload.props;
      return {...state, ...newProps}
    }
    default:
      return state
  }
}

const store = createStore(reducer, initialState);

/* ------------------------- *\
    Render
\* ------------------------- */

cheet('i n v i e', () =>{
  store.dispatch( {
    type: 'UPDATE_PROPS',
    payload: {
      props: easter
    }
  });
  /* console.log('Has descubierto el easter egg'); */
})

cheet('g o b a c k', () =>{
  /* console.log('Has vuelto al estado original'); */
  store.dispatch( {
    type: 'UPDATE_PROPS',
    payload: {
      props: initialState
    }
  });
})

ReactDOM.render(
  <Provider store={store}>
    <Invie />
  </Provider>,
  document.getElementById('root')
);
