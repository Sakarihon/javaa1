'use strict';

// Select the element with id "target"
const targetElement = document.getElementById('target');

// Add the class "my-list" to the element
targetElement.classList.add('my-list');

// Add HTML content (list items) to the target element
targetElement.innerHTML = `
  <li>First item</li>
  <li>Second item</li>
  <li>Third item</li>
`;

