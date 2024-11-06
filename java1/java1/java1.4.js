'use strict';

const answer1 = prompt('anna nimi?');
console.log(answer1);

let randomNumber = Math.floor(Math.random() * 4) + 1;

if (randomNumber===1)
{
  document.querySelector('#tulostus').innerHTML = `${answer1} gryffinord!`;
}else if (randomNumber===2)
{
  document.querySelector('#tulostus').innerHTML = `${answer1} olet slytherin!`;
}
else if (randomNumber===3)
{
  document.querySelector('#tulostus').innerHTML = `${answer1} olet hufflepuff!`;
}
else if (randomNumber===4)
{
  document.querySelector('#tulostus').innerHTML = `${answer1} olet ravenclaw!`;
}

