'use strict';

const answer1 =Number (prompt('anna nopan heittojen määrä?'));
console.log(answer1);

const lista=[];

for (let i=1; i<=answer1; i++) {
  lista.push (Math.floor(Math.random() * 6) + 1);
}
document.querySelector('#tulostus').innerHTML = `Nopan heittojen summa on ${lista.reduce((acc,number)=> acc + number, 0)}`;
