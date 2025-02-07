export const closuresContent = `
      <h2>What is a Closure?</h2>
      <p>A closure is a fundamental JavaScript concept where a function retains access to variables from its outer scope even after the outer function has finished executing. In simpler terms, it's like a function remembering the environment it was created in.</p>
      
      <h3>Example</h3>
      <pre><code>function createCounter() {
      let count = 0;  // This variable is "enclosed" in the closure
        return {
          increment: function() {
            count++;
            return count;
          },
          getCount: function() {
            return count;
          }
        };
      }
const counter = createCounter();

console.log(counter.getCount());  // Output: 0
console.log(counter.increment()); // Output: 1
console.log(counter.increment()); // Output: 2
</code></pre>
      
      <h3>Why are Closures useful?</h3>
      <ul>
        <li>Data privacy: Variables inside closures are not accessible from outside</li>
        <li>State management: Maintain state without using global variables</li>
        <li>Factory functions: Create functions with "built-in" data</li>
        <li>Module pattern: Create private methods and properties</li>
      </ul>

      <h3>Common Use Cases</h3>
      <p>Closures are commonly used in:</p>
      <ul>
        <li>Event handlers</li>
        <li>Callback functions</li>
        <li>Partial application and currying</li>
        <li>Module patterns</li>
      </ul>
    `