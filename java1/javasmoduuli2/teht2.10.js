'use strict'

function kandit(amount){
  let kandidaatit={}
  for(let i=0;i<amount;i++){
    const nimi=(prompt(`kandidaatin${i+1} nimi?`))
    kandidaatit[nimi]=0

  }
  return kandidaatit
}

const määrä=Number(prompt('Montako kandidaattia?'));
const kandidaatit=kandit(määrä)

const äänestäjät=Number(prompt('Montako osallistujaa?'))

function äänestys(kandidaatit, äänestäjät){
  for (let i=0; i<äänestäjät; i++){
    const äänestettävä=(prompt('ketä äänestät?'))
    kandidaatit[äänestettävä]+=1
  }

}


äänestys(kandidaatit, äänestäjät);

// Display the results in HTML
let output = '';
for (const [name, votes] of Object.entries(kandidaatit)) {
  output += `${name}: ${votes} ääntä<br>`;
}

document.querySelector('#jono').innerHTML = output;
