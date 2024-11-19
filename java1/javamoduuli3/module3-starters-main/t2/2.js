'use strict'

const targetElement=document.getElementById('target')

const items= ['first item', 'second item', 'third item']
items.forEach((text, index)=> {
      const listitem= document.createElement('li');
      listitem.innerText=text;

      if (index===1){
      listitem.classList.add('my-item');
      }
      targetElement.appendChild(listitem);
});
