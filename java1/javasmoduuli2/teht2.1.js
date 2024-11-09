'use strict';

const answer1 = Number(prompt('anna numero?'));
const answer2 = Number(prompt('anna numero?'));
const answer3 = Number(prompt('anna numero?'));
const answer4 = Number(prompt('anna numero?'));
const answer5 = Number(prompt('anna numero?'));
console.log(answer1);

const lista = [answer1, answer2, answer3, answer4, answer5];

for (let i = 0; i <= 4; i++) {
  lista.push(lista[4 - i]);

}
for (let i = 0; i <= 4; i++) {
  lista.shift();

}
console.log(lista)
