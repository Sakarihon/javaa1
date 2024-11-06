'use strict';

const answer1 = Number(prompt('anna kokonaisluku'));
const answer2 = Number(prompt('anna kokonaisluku'));
const answer3 = Number(prompt('anna kokonaisluku'));
console.log(answer1,answer2,answer3)


document.querySelector('#summa').innerHTML = `summa ${answer1 + answer2 + answer3}`;
document.querySelector('#tulo').innerHTML = `tulo ${answer1 * answer2 * answer3}`;
document.querySelector('#keskiarvo').innerHTML = `keskiarvo ${(answer1 + answer2 + answer3) / 3}`;