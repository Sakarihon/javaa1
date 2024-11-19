'use strict'

function even(array){
  let tasat=[]
  for (let i = 0; i<array.length; i++){
    if (array[i]%2===0) {
      tasat.push(array[i])
    }
  }
  return tasat;
}
const luvut=[2,7,4]

let tulos=even(luvut)


document.querySelector('#jono').innerHTML = tulos.join('');
