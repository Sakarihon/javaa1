'use strict';
const students = [
  {
    name: 'John',
    id: '2345768',
  },
  {
    name: 'Paul',
    id: '2134657',
  },
  {
    name: 'Jones',
    id: '5423679',
  },
];
const targetElement=document.getElementById('target')



students.forEach(student => {
  const option= document.createElement('option');
  option.setAttribute('value',student.id)
  option.innerText=student.name
  targetElement.appendChild(option);

});