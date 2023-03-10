import 'normalize.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import * as bootstrap from 'bootstrap'
import './style.scss'




const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]')
const tooltipList = [...tooltipTriggerList].map(tooltipTriggerEl => new bootstrap.Tooltip(tooltipTriggerEl))


/* __________
-- DARK MODE --
__________ */ 

  const body = document.body;
  const btn = document.getElementById("my_switch");
  const preferenceQuery = window.matchMedia("(prefers-color-scheme: dark)");

  const addDarkMode = () => {
    body.classList.remove("light-mode");
    body.classList.add("dark-mode");
  };
  
  const addLightMode = () => {
    body.classList.remove("dark-mode");
    body.classList.add("light-mode");
  };
  
  const toggleTheme = () =>
    !body.classList.contains("dark-mode") ? addDarkMode() : addLightMode();
  
  const checkPreference = () =>
    preferenceQuery.matches ? addDarkMode() : addLightMode();
  
  btn.addEventListener("change", toggleTheme);
  preferenceQuery.addEventListener("change", checkPreference);
  
  (() => checkPreference())();



/* __________
-- FORM VALIDATION --
__________ */ 

const hexInput = document.getElementById("hex_code")
const form = document.getElementById("myForm")

document.addEventListener('keyup', function(e){
  let input =  e.target;

 form.reportValidity();

//  console.log(input)
  if(!input.validity.valid) {
    input.classList.add('invalid');
  } else {
   input.classList.remove('invalid');
  }

});