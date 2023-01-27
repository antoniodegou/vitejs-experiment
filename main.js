import './style.css'
import javascriptLogo from './javascript.svg'
import { setupCounter } from './counter.js'
import * as drag from './node_modules/dragjs/'
import * as colorjoe from '/node_modules/colorjoe/'
import  './node_modules/colorjoe/css/colorjoe.css'

// document.querySelector('#app').innerHTML = `
//   <div>
//     <a href="https://vitejs.dev" target="_blank">
//       <img src="/vite.svg" class="logo" alt="Vite logo" />
//     </a>
//     <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" target="_blank">
//       <img src="${javascriptLogo}" class="logo vanilla" alt="JavaScript logo" />
//     </a>
//     <h1>Hello Vite!</h1>
//     <div class="card">
//       <button id="counter" type="button"></button>
//     </div>
//     <p class="read-the-docs">
//       Click on the Vite logo to learn more
//     </p>
//   </div>
// `

// setupCounter(document.querySelector('#counter'))


const joe = colorjoe.rgb("my-color", "#FFFFFF");

joe.on("change", color => console.log("Selecting " + color.css()));
joe.on("done", color => console.log("Selected " + color.css()));


requirejs(['../dist/colorjoe'], function(colorjoe) {
  var val = document.getElementById('rgbValue');

  colorjoe.rgb('rgbPicker').on('change', function(c) {
      val.innerHTML = c.css();
  });
});
