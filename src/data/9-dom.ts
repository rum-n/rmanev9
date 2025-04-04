export const domContent = `
      <p>The DOM is a programming interface for HTML documents. It represents the page as a tree-like structure where each node is an object representing a part of the document, allowing JavaScript to dynamically access and modify the content, structure, and style of web pages.</p>
      
      <h3>DOM Tree Structure</h3>
      <pre><code><!DOCTYPE html>
<html>
  <head>
    <title>My Page</title>
  </head>
  <body>
    <div id="container">
      <h1>Hello World</h1>
      <p>Welcome to my website</p>
    </div>
  </body>
</html></code></pre>

      <h3>Basic DOM Manipulation</h3>
      <pre><code>// Selecting elements
const container = document.getElementById('container');
const paragraphs = document.getElementsByTagName('p');
const buttons = document.querySelectorAll('.btn');

// Creating elements
const newDiv = document.createElement('div');
newDiv.textContent = 'New content';
container.appendChild(newDiv);

// Modifying elements
const title = document.querySelector('h1');
title.style.color = 'blue';
title.classList.add('highlight');</code></pre>

      <h3>Event Handling</h3>
      <pre><code>const button = document.querySelector('#submitBtn');

button.addEventListener('click', (event) => {
  event.preventDefault();
  console.log('Button clicked!');
});

// Event delegation
document.querySelector('#list').addEventListener('click', (event) => {
  if (event.target.matches('.list-item')) {
    handleItemClick(event.target);
  }
});</code></pre>

      <h3>DOM Traversal</h3>
      <pre><code>const element = document.querySelector('.example');

// Moving up
const parent = element.parentNode;
const grandparent = element.closest('.container');

// Moving down
const children = element.children;
const firstChild = element.firstElementChild;
const lastChild = element.lastElementChild;

// Moving sideways
const nextSibling = element.nextElementSibling;
const previousSibling = element.previousElementSibling;</code></pre>

      <h3>Best Practices</h3>
      <ul>
        <li>Cache DOM selections in variables</li>
        <li>Use document fragments for batch insertions</li>
        <li>Implement event delegation for dynamic elements</li>
        <li>Minimize DOM manipulations</li>
        <li>Use modern APIs (querySelector over getElementById)</li>
      </ul>

      <h3>Performance Considerations</h3>
      <pre><code>// Bad: Multiple DOM manipulations
for (let i = 0; i < 1000; i++) {
  container.innerHTML += '<div>' + i + '</div>';
}

// Good: Using DocumentFragment
const fragment = document.createDocumentFragment();
for (let i = 0; i < 1000; i++) {
  const div = document.createElement('div');
  div.textContent = i;
  fragment.appendChild(div);
}
container.appendChild(fragment);</code></pre>
    `;
