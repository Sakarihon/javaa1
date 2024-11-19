'use strict'

function concat(array){
  let result=''
  for(let i=0; i<array.length; i++){
    result+=array[i];
  }
  return result;
}

const lista =['johny','deedee','joey','marky'];
const jono= concat(lista);

  

document.querySelector('#jono').innerHTML = jono;