'use strict';

const answer = confirm('Haluatko neliöjuuren?');
console.log(answer)

if (answer===true){
  const answer1 = Number(prompt('anna luku'));
  if (answer1>0) {
    document.querySelector('#neliö').innerHTML = `neliöjuuri on ${Math.sqrt(answer1)}`;
  }else{
    document.querySelector('#neliö').innerHTML = `Ei voida laskea miinus numerosta.`
  }
}else{
  document.querySelector('#neliö').innerHTML = `Ei voida laskea ilman lukua.`;
}
