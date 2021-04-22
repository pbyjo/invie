# React Animations

#### Configurando una aplicación en React JS

 >Clase 30

Actualmente, no es necesario instalar el paquete global. Para desinstalarlo `npm uninstall -g create-react-app `
Ahora directamente (luego de haber instalado Node.js) vamos a la carpeta donde queremos armar el proyecto (como la de animaciones-web).
Y ahí hacemos:

`npx | create-react-app | nombre del directorio a crear ` luego de, entramos y ejecutamos `npm init` y nos creara un live-server para empezar con nuestra app

#### Estructura de proyectos con React

 >Clase 31

Caracteristicas de react:

    1. Nuestro código html lo escribimos en un .jsx dentro de render() {}
    2. todas las etiquetas deben cerrarse ` />`
    3. Cuando usemos un archivo importado por una variable, lo invocamos con llaves `src={}`
    4. Las mayusculas son una convención para crear componentes. Los componentes son clases de js
    5. las clases en etiquetas HTML no serian class="" sino className="". Esto porque class es una palabra reservada de js.
    6. El atributo for de las etiquetas HTML se reemplazan por "htmlFor" ya que es una palabra igualmente reservada de js.
    7. El atributo checked de los input son reemplazados por defaultChecked.

Dentro de la carpeta public. Se crea el index.html que visualiza toda nuestra app y es enlazada con un div root, donde llama todo el contenido creado en react

La carpeta src se encuentran todos los archivos donde creamos nuestra app, incluye index.js, App.js, index.css, App.css
index.js es el enlace con el que arranca la aplicación

#### Animaciones con React Transicion Group

 >Clase 32

React transition group es una dependencia, no necesita el parametro -g. Lo instalamos localmente en cada uno de nuestros proyectos a trabajar.

**React Transition Group:**
    1. Instalación
    `npm install react-transition-group --save`
    2. Importar los componentes CSSTransition y TransitionGroup de la siguiente forma:
    `import {CSSTransition,TransitionGroup} from 'react-transition-group';`

sintaxis: 
``` js

 	<CSSTransition 
  	//key={this.state.logo}
    timeout={1000} 
    transitionName="fade">

   		<img 
        key={this.state.logo}
        src={logo} 
        className="App-logo" 
        alt="logo" 
      />
	</CSSTransition>

```

Documentación
    `https://reactjs.org/docs/animation.html`

#### Llevando HTML Y CSS a React JS

 >Clase 33

Llevamos el proyecto Invie a nuestra carpeta creada con `create-react-app` y nuestro CSS, images y demás elementos los llevamos a la carpeta `src`.
`index.js` es nuestro archivo principal donde llamamos todos nuestros componentes. Cabe resaltar que podemos personalizar el nombre de `App` según el proyecto que estamos trabajando.
`App.js` es nuestro principal Componente, donde construimos nuestra app web y llamamos react, css y react dom. Para gusto podemos moverla a la carpeta de Componentes dentro de src y cambio su formato a jsx junto con su nombre personalizado.

En la carpeta componentes vamos agregando todos nuestros jsx de gorma modular con eso podemos depurar y tener un mejor control de nuestra aplicación.

#### Pasando de una página estática a una dinámica con propiedades

 >Clase 34

Vamos a usar la libreria Redux.

Install:
`npm install --save redux react-redux` redux puede ser utilizado sin react pero si lo queremos enlazar a nuestra app react usamos una segunda dependencia `react-redux`.

Antes, agregamos iteradores para hacer dinamicos nuestros datos importados y el contenido de nuestra aplicacion web.

Agregamos un objeto super llamado data en nuestro `invie.jsx`. De igual modo importamos nuestros datos e imagenes a este mismo archivo y estos datos se agregan como atributos con un key en nuestras etiquetas main

Utilizamos un método muy importante de js llamado `.map` que nos ayuda a iterar los datos de nuestro objeto super creado en el componente `Invie.jsx`.

#### Puliendo el CSS de invie

 >Clase 35

Creando clases estandar para las guitarras, la idea es dejar una misma clase para todos los features y trabajar las diferencias desde css con pseudos como `:before` y `:after`.`

para crear una mejor sintaxis de las listas ordenadas, podemos usar `counter-reset: features` en ol `counter-increment: features` `content: counter(features)` en li.

Con `:nth-of-type()` podemos agregar valores como `(even)` para nuestros elementos pares. `(odd)` para los impares.

#### Añadiendo Cheet JS

 >Clase 36

Cheet JS es una libreria que nos funciona para usar easter eggs configurando la palabra o los carácteres que quiero usar.

``` jsx
import cheetjs from 'cheet.js';
cheetjs('i n v i e', () => {
  alert('Good mode activated')
})
```

Instalación:
`npm install cheet.js`

#### Configurando Redux

 >Clase 37

Trabajaremos en nuestro index.js, nuestro archivo raíz donde hace render nuestro principal componente Invie.
Pasaremos todas nuestras funciones y nuestro contenido.

Redux gestionará todos los datos de nuestros componentes incluyendo incluso el componente main que en este caso es Invie jsx. 
Para esto creamos un componente que sea el padre o mejor conocido como `provider` por encima de Invie

`import { Provider } from 'react-redux'` este Componente proveedor invoca react redux

y cambiamos nuestra etiqueta `<React.StrictMode>` por `<Provider>`

``` jsx 
ReactDOM.render(
  <Provider>
    <Invie />
  </Provider>,
  document.getElementById('root')
);
```

<Provider> recibe un objeto con los elementos para repartir a los diferentes componente de nuestra aplicación.

`<Provider store={store} >`

Para esto hay que importar un ‘almacen’ de datos desde redux. Es un método llamado createStore() que recibe dos parámetros; una función y un objeto. El objeto es el conjunto de elementos de mi aplicación y la función reducer será la que administra el dinamismo.

`import { createStore } from 'redux'`

``` jsx
function reducer(state, action) {

}

const store = createStore(reducer, initialState)
```

#### Animando las guitarras

 >Clase 38

Recapitulamos lo visto en css transition group para crear nuestro easter.
``` jsx
import { CSSTransition, TransitionGroup } from 'react-transition-group'

<TransitionGroup>
<CSSTransition>
```

#### Transición en los Cards de Guitarras

 >Clase 39

Agregamos  otra animacion para la info llamado `fade`

Para realizar una superposicion de los elementos que entran y salen agregamos un valor booleano para nuestro `exit: false` ya que necesitamos una salida inmediata y darle una transicion solo al elemento entrante.

usamos active y exit en css con transition. En este caso no es necesario un keyframes.

#### Animación de entrada y salida en la portada

 >Clase 40

