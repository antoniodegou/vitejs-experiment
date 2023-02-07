import 'normalize.css'
import 'bootstrap/dist/js/bootstrap.js'
import 'bootstrap/scss/bootstrap.scss'
import './style.css'
// import javascriptLogo from './javascript.svg'
// import { setupCounter } from './counter.js'
// import * as drag from '/node_modules/dragjs/'
// import * as ONECOLOR from '/node_modules/onecolor/'
// import * as colorjoe from '/node_modules/colorjoe/'
// import * as colorjoe from 'colorjoe'
// import  '/node_modules/colorjoe/css/colorjoe.css'


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


// const joe = colorjoe.rgb(
//   "my-color", 
//   "#FFFFFF",
//   [
//     "alpha",
//     ["fields",
//   //  {space: 'RGB', limit: 255, fix: 0},
//    {space: 'HSL'},
//   //  'Hex'
//   //  'hex', 'HSL', "RGB"
//   ]
// ]);

// joe.on("change", color => console.log("Selecting " + color.css()));
// joe.on("done", color => console.log("Selected " + color.css()));

// var val = document.getElementById('rgbValue');

// colorjoe.rgb('rgbPicker').on('change', function(c) {
//     val.innerHTML = c.css();
// });

// requirejs(['../dist/colorjoe'], function(colorjoe) {
//   var val = document.getElementById('rgbValue');

//   colorjoe.rgb('rgbPicker').on('change', function(c) {
//       val.innerHTML = c.css();
//   });
// });


// requirejs(['/node_modules/colorjoe/dist/colorjoe.js'], function(colorjoe) {
//   var val = document.getElementById('rgbValue');

//   colorjoe.rgb('rgbPicker').on('change', function(c) {
//       val.innerHTML = c.css();
//   });
// });

// const colInput = document.getElementById("mypick")

// colInput.addEventListener("input", function(e){
//   // let col = e.target.attributes.value.nodeValue
//   // console.log(col)
//   console.log(colInput.value)
//   document.getElementById("mypicklable").style.backgroundColor = `${colInput.value}`
// });

const hexInput = document.getElementById("hex_code")
const form = document.getElementById("myForm")

document.addEventListener('keyup', function(e){
  let input =  e.target;

 form.reportValidity();

 console.log(input)
  if(!input.validity.valid) {
    input.classList.add('invalid');
  } else {
   input.classList.remove('invalid');
  }

});