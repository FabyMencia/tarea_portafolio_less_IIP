// Importación de estilos LESS
import './styles/global.less';
import './styles/header.less';
import './styles/hero.less';
import './styles/main.less';
import './styles/variables.less';
import './styles/utilities.less';

// Importación de imágenes
import javascriptLogo from './javascript.svg';
import viteLogo from './vite.svg'; // Ruta relativa

// Importación de la función setupCounter
import { setupCounter } from './counter.js';

// Verifica que el elemento #app exista en el DOM
const appElement = document.querySelector('#app');
if (appElement) {
  // Inserta el contenido en el elemento #app
  appElement.innerHTML = `
    <div>
      <a href="https://vite.dev" target="_blank">
        <img src="${viteLogo}" class="logo" alt="Vite logo" />
      </a>
      <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" target="_blank">
        <img src="${javascriptLogo}" class="logo vanilla" alt="JavaScript logo" />
      </a>
      <h1>Hello Vite!</h1>
      <div class="card">
        <button id="counter" type="button"></button>
      </div>
      <p class="read-the-docs">
        Click on the Vite logo to learn more
      </p>
    </div>
  `;

  // Configura el contador
  const counterButton = document.querySelector('#counter');
  if (counterButton) {
    setupCounter(counterButton);
  } else {
    console.error('El botón #counter no fue encontrado en el DOM.');
  }
} else {
  console.error('El elemento #app no fue encontrado en el DOM.');
}