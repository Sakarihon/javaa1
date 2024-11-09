'use strict';
const maara=Number(prompt('anna osallistujien määrä!'));

let lista=[];

for (let i = 1; i <= maara; i++) {
  const nimi=(prompt('kerro nimi!'));
  lista.push(nimi)
}
const aakkosjärjestys=lista.sort();
document.querySelector('#tulostus').innerHTML = `<ol>${aakkosjärjestys.map(name => `<li>${name}</li>`).join('')}</ol>`;