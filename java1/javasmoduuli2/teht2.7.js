'use strict'

const max=Number(prompt("nopan sivujen määrä?"))

const lista=[]

function nopan_heitto(määrä) {
  lista.length=0
  let numero;
  while (true) {
    numero = (Math.floor(Math.random() * määrä) + 1);
    if (numero === määrä) break;
    lista.push(numero)
  }
}

nopan_heitto(max)
document.querySelector('#tulostus').innerHTML = `<ul>${lista.map(numero => `<li>${numero}</li>`).join('')}</ul>`;
