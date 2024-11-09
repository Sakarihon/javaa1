'use strict'

const lista= []
let numero;

while (true) {
  const numero = Number(prompt('anna numero!'))
  if (numero===0) break;
  lista.push(numero)
}

const järjestys = lista.sort((a, b) => b - a);
console.log(järjestys)