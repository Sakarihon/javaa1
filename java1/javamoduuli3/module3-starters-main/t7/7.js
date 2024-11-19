'use strict'
const button=document.querySelector('p')
button.addEventListener('mouseover', function(evt) {
  const img=document.querySelector('img')
  img.setAttribute('src','img/picB.jpg')
});
button.addEventListener('mouseout', function(evt) {
  const img = document.querySelector('img')
  img.setAttribute('src', 'img/picA.jpg')
});
