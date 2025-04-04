export const hoistingContent = `
      <p>Hoisting is a JavaScript behavior where variable and function declarations are moved to the top of their respective scopes during the compilation phase, before the code is executed.</p>
      
      <h3>Variable Hoisting</h3>
      <pre><code>console.log(x); // undefined
var x = 5;

// The above code is interpreted as:
var x;
console.log(x);
x = 5;</code></pre>

      <h3>let and const</h3>
      <p>Variables declared with let and const are hoisted but not initialized. Accessing them before declaration results in a ReferenceError.</p>
      <pre><code>console.log(x); // ReferenceError
let x = 5;</code></pre>

      <h3>Function Hoisting</h3>
      <pre><code>// Function declaration - hoisted
sayHello(); // "Hello!"
function sayHello() {
    console.log("Hello!");
}

// Function expression - not hoisted
sayGoodbye(); // TypeError
var sayGoodbye = function() {
    console.log("Goodbye!");
};</code></pre>

      <h3>Best Practices</h3>
      <ul>
        <li>Always declare variables at the top of their scope</li>
        <li>Use let and const instead of var</li>
        <li>Declare functions before using them</li>
        <li>Be aware of hoisting when using function expressions</li>
      </ul>

      <h3>Common Pitfalls</h3>
      <pre><code>// Variable shadowing due to hoisting
var x = 1;
function test() {
    console.log(x); // undefined
    var x = 2;
}
test();</code></pre>

      <h3>Practical Implications</h3>
      <ul>
        <li>Affects code organization and readability</li>
        <li>Can lead to unexpected behavior if not understood</li>
        <li>Important for debugging and troubleshooting</li>
        <li>Critical for understanding scope in JavaScript</li>
      </ul>
    `;
