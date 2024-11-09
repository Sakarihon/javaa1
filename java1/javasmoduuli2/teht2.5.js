'use strict'

const lista= []
let numero;

while (true) {
  const numero = Number(prompt('anna numero!'))
  if (lista.includes(numero)) break;
  lista.push(numero)
}

const järjestys = lista.sort((a, b) => a - b);
console.log(järjestys)