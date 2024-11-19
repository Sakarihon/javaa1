'use strict'
const button=document.querySelector('button');
const select=document.querySelector('select');
const num1Input=document.querySelector('#num1');
const num2Input=document.querySelector('#num2');
const resultElement=document.querySelector('p');

button.addEventListener('click',function(evt){

  const num1=parseInt(num1Input.value);
  const num2=parseInt(num2Input.value);
  const operation=select.value

  let result;

  switch(operation){
    case 'add':
      result=num1+num2;
      break;
    case 'sub':
      result=num1-num2;
      break;
    case 'multi':
      result=num1*num2;
      break;
    case 'div':
      result=num1/num2;
      break;
    default:
      result='virheellinen'
  }
  resultElement.innerText=`result ${result}`


});
