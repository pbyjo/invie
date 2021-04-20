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

/* Logos e imágenes */
import logoHeader from './items/images/invie.png';
import logoWhite from './items/images/invie-white.png';
import g_acustica from './items/images/invie-acustica.png';
import g_electrica from './items/images/invie-classic.png';

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
  
  logoHeader: logoHeader,
  logoFooter: logoWhite,
  videoP: videoP,
}

const easter = {
  menu: [
    {
      href: 'index.html',
      title: 'Home',
    }
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

cheet('g o b a c k' , () =>{
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

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
