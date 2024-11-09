'use strict';
const maara=Number(prompt('anna koirien määrä!'));

let lista=[];

for (let i = 1; i <= maara; i++) {
  const nimi=(prompt('kerro nimi!'));
  lista.push(nimi)
}
const aakkosjärjestys=lista.sort();

let length = aakkosjärjestys.length;

for (let i = 0; i <= length; i++) {
  aakkosjärjestys.push(aakkosjärjestys[length - i]);

}
for (let i = 0; i <= length; i++) {
  aakkosjärjestys.shift();

}

document.querySelector('#tulostus').innerHTML = `<ol>${aakkosjärjestys.map(name => `<li>${name}</li>`).join('')}</ol>`;