'use strict';

const answer = Number(prompt('anna alku vuosiluku'));
const answer2 = Number(prompt('anna loppu vuosiluku'));
console.log(answer);
let lista=[];
for (let i=answer; i<=answer2; i++) {
  if (i % 4===0) {
    if (i % 100 === 0) {
      if (i % 400 === 0) {
        lista.push(i);
      }
    } else {
      lista.push(i);
    }
  }
}

document.querySelector('#tulostus').innerHTML = `<ul>${lista.map(year => `<li>${year}</li>`).join('')}</ul>`;
