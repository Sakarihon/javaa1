'use strict';
console.log("i'm printing to console.")
const answer = prompt('print your name');
document.querySelector('#answer').innerHTML = `hello ${answer}!`;