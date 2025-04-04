export const thisKeywordContent = `
      <p>The 'this' keyword in JavaScript is a special identifier that refers to the current execution context. Understanding how 'this' works is crucial for JavaScript development, as its behavior can be quite different from other programming languages.</p>
      
      <h3>Global Context</h3>
      <pre><code>console.log(this); // Window (in browser) or global (in Node.js)

// In strict mode
'use strict';
console.log(this); // undefined</code></pre>

      <h3>Object Methods</h3>
      <pre><code>const user = {
  name: 'John',
  greet() {
    console.log(\`Hello, \${this.name}!\`);
  }
};

user.greet(); // "Hello, John!"

// But be careful with context loss
const greetFn = user.greet;
greetFn(); // "Hello, undefined!" - this is now the global object</code></pre>

      <h3>Constructor Functions</h3>
      <pre><code>function User(name) {
  this.name = name;
  this.greet = function() {
    console.log(\`Hello, \${this.name}!\`);
  };
}

const john = new User('John');
john.greet(); // "Hello, John!"</code></pre>

      <h3>Arrow Functions</h3>
      <p>Arrow functions don't have their own 'this'. They inherit it from the enclosing scope.</p>
      <pre><code>const user = {
  name: 'John',
  friends: ['Jane', 'Bob'],
  greetFriends() {
    // Arrow function preserves 'this' from greetFriends
    this.friends.forEach(friend => {
      console.log(\`\${this.name} says hi to \${friend}\`);
    });
  }
};

user.greetFriends();
// "John says hi to Jane"
// "John says hi to Bob"</code></pre>

      <h3>Common Pitfalls</h3>
      <pre><code>// Problem: Callback loses context
class Button {
  constructor(text) {
    this.text = text;
    this.element = document.createElement('button');
    this.element.textContent = text;
    
    // Wrong way - 'this' will be the button element
    this.element.addEventListener('click', function() {
      console.log(this.text); // undefined
    });
    
    // Right way - using arrow function
    this.element.addEventListener('click', () => {
      console.log(this.text); // works correctly
    });
  }
}</code></pre>

      <h3>Explicit Binding</h3>
      <p>JavaScript provides three methods to explicitly set 'this':</p>
      <pre><code>function greet() {
  console.log(\`Hello, \${this.name}!\`);
}

const user = { name: 'John' };

// call - immediately invokes with new this
greet.call(user); // "Hello, John!"

// apply - like call but takes array of arguments
greet.apply(user); // "Hello, John!"

// bind - creates new function with fixed this
const boundGreet = greet.bind(user);
boundGreet(); // "Hello, John!"</code></pre>

      <h3>Best Practices</h3>
      <ul>
        <li>Use arrow functions for callbacks to preserve context</li>
        <li>Be careful with method extraction</li>
        <li>Use bind when you need a permanent this binding</li>
        <li>Consider using class syntax for clearer this behavior</li>
      </ul>
    `;
