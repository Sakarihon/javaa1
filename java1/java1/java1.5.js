'use strict';

const answer = Number(prompt('anna vuosiluku'));
console.log(answer);

if (answer%4===0) {
  if (answer % 100 === 0) {
    if (answer % 400 === 0) {
      document.querySelector('#tulostus').innerHTML = `Vuosi on karkausvuosi!`;
    } else {
      document.querySelector('#tulostus').innerHTML = `Vuosi ei ole karkausvuosi!`;
    }
  } else {
    document.querySelector('#tulostus').innerHTML = `Vuosi on karkausvuosi!`;
  }
}else{
        document.querySelector('#tulostus').innerHTML = `Vuosi ei ole karkausvuosi!`;
}
