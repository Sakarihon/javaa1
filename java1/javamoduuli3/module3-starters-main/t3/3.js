'use strict';
const names = ['John', 'Paul', 'Jones'];

const targetElement = document.getElementById('target')

let listitems = '';

for (let i=0; i<names.length; i++){
  listitems+=`<li>${names[i]}</li>`;
}
targetElement.innerHTML=listitems;