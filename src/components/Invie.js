/* ------------------------- *\
    Imports y variables
\* ------------------------- */

/* Componentes */
import Hero from './Hero';
import Guitarras from './Guitarras';
import Footer from './Footer';

/* ------------------------- *\
    Propiedades
\* ------------------------- */

/* const data = {
  
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
} */

/* ------------------------- *\
    Render
\* ------------------------- */

function App() {
  return (
    <main className="Invie">
      {/* Header */}



      {/* Hero */}
      {/*<Hero menu={data.menu} logoP={data.logoPortada}/>*/}
      <Hero />



      {/* Guitarras */}
      {/*<Guitarras guitarras={data.guitarras} video={data.videoP}/>*/}
      <Guitarras />



      {/* Footer */}
      {/*<Footer logoF={data.logoFooter}/>*/}
      <Footer />
    </main>
  );
}

export default App;
