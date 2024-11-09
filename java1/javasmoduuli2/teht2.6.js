'use strict'

const lista=[]

function nopan_heitto() {
  lista.length=0
  let numero;
  while (true) {
    numero = (Math.floor(Math.random() * 6) + 1);
    if (numero === 6) break;
    lista.push(numero)
  }
}

nopan_heitto()
document.querySelector('#tulostus').innerHTML = `<ul>${lista.map(numero => `<li>${numero}</li>`).join('')}</ul>`;
