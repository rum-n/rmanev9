export const dataStructuresContent = `
      <p>Understanding different data structures is crucial for writing efficient and maintainable code. JavaScript provides several built-in data structures, each with its own use cases and performance characteristics.</p>
      
      <h3>Arrays</h3>
      <p>Arrays are the most common data structure in JavaScript, offering ordered collections of elements.</p>
      <pre><code>// Basic array operations
const fruits = ['apple', 'banana', 'orange'];

// Adding/removing elements
fruits.push('grape');     // Add to end
fruits.pop();            // Remove from end
fruits.unshift('mango'); // Add to start
fruits.shift();          // Remove from start

// Common array methods
const numbers = [1, 2, 3, 4, 5];
const doubled = numbers.map(n => n * 2);    // [2, 4, 6, 8, 10]
const evens = numbers.filter(n => n % 2 === 0); // [2, 4]
const sum = numbers.reduce((a, b) => a + b, 0); // 15

// Slicing and splicing
const subset = fruits.slice(1, 3);    // Extract portion
fruits.splice(1, 1, 'kiwi');          // Remove and insert</code></pre>

      <h3>Maps</h3>
      <p>Maps are key-value pair collections where keys can be of any type, unlike object literals where keys are always strings.</p>
      <pre><code>// Creating and using Maps
const userMap = new Map();

// Setting values
userMap.set('john', { age: 30, role: 'admin' });
userMap.set('jane', { age: 25, role: 'user' });

// Getting values
console.log(userMap.get('john')); // { age: 30, role: 'admin' }

// Checking existence
console.log(userMap.has('jane')); // true

// Iteration
for (const [key, value] of userMap) {
  console.log(\`\${key}: \${value.role}\`);
}

// Using objects as keys (not possible with regular objects)
const objKey = { id: 1 };
userMap.set(objKey, 'associated value');</code></pre>

      <h3>Sets</h3>
      <p>Sets are collections of unique values, useful for removing duplicates and checking value existence.</p>
      <pre><code>// Creating and using Sets
const uniqueNumbers = new Set([1, 2, 2, 3, 3, 4]);
console.log([...uniqueNumbers]); // [1, 2, 3, 4]

// Adding and removing values
uniqueNumbers.add(5);
uniqueNumbers.delete(1);

// Checking existence
console.log(uniqueNumbers.has(2)); // true

// Practical example: Removing duplicates from array
const array = [1, 2, 2, 3, 3, 4];
const unique = [...new Set(array)];

// Set operations
const setA = new Set([1, 2, 3]);
const setB = new Set([2, 3, 4]);

// Union
const union = new Set([...setA, ...setB]);

// Intersection
const intersection = new Set(
  [...setA].filter(x => setB.has(x))
);</code></pre>

      <h3>Queues</h3>
      <p>Queues follow the First-In-First-Out (FIFO) principle. While JavaScript doesn't have a built-in Queue class, we can implement one.</p>
      <pre><code>class Queue {
  constructor() {
    this.items = [];
  }

  enqueue(element) {
    this.items.push(element);
  }

  dequeue() {
    if (this.isEmpty()) return null;
    return this.items.shift();
  }

  peek() {
    if (this.isEmpty()) return null;
    return this.items[0];
  }

  isEmpty() {
    return this.items.length === 0;
  }

  size() {
    return this.items.length;
  }
}

// Usage
const queue = new Queue();
queue.enqueue('Task 1');
queue.enqueue('Task 2');
console.log(queue.dequeue()); // 'Task 1'</code></pre>

      <h3>Stacks</h3>
      <p>Stacks follow the Last-In-First-Out (LIFO) principle, perfect for managing function calls, undo operations, or parsing expressions.</p>
      <pre><code>class Stack {
  constructor() {
    this.items = [];
  }

  push(element) {
    this.items.push(element);
  }

  pop() {
    if (this.isEmpty()) return null;
    return this.items.pop();
  }

  peek() {
    if (this.isEmpty()) return null;
    return this.items[this.items.length - 1];
  }

  isEmpty() {
    return this.items.length === 0;
  }

  size() {
    return this.items.length;
  }
}

// Practical example: Checking balanced parentheses
function isBalanced(expression) {
  const stack = new Stack();
  
  for (const char of expression) {
    if (char === '(') {
      stack.push(char);
    } else if (char === ')') {
      if (stack.isEmpty()) return false;
      stack.pop();
    }
  }
  
  return stack.isEmpty();
}

console.log(isBalanced('((()))')); // true
console.log(isBalanced('(()')); // false</code></pre>

      <h3>Performance Comparison</h3>
      <table>
        <tr>
          <th>Data Structure</th>
          <th>Access</th>
          <th>Search</th>
          <th>Insertion</th>
          <th>Deletion</th>
        </tr>
        <tr>
          <td>Array</td>
          <td>O(1)</td>
          <td>O(n)</td>
          <td>O(n)</td>
          <td>O(n)</td>
        </tr>
        <tr>
          <td>Map</td>
          <td>O(1)</td>
          <td>O(1)</td>
          <td>O(1)</td>
          <td>O(1)</td>
        </tr>
        <tr>
          <td>Set</td>
          <td>-</td>
          <td>O(1)</td>
          <td>O(1)</td>
          <td>O(1)</td>
        </tr>
        <tr>
          <td>Queue</td>
          <td>O(n)</td>
          <td>O(n)</td>
          <td>O(1)</td>
          <td>O(1)</td>
        </tr>
        <tr>
          <td>Stack</td>
          <td>O(n)</td>
          <td>O(n)</td>
          <td>O(1)</td>
          <td>O(1)</td>
        </tr>
      </table>

      <h3>Best Practices</h3>
      <ul>
        <li>Choose the right data structure based on your use case</li>
        <li>Consider performance implications for large datasets</li>
        <li>Use built-in methods when available</li>
        <li>Implement custom data structures only when necessary</li>
        <li>Consider memory usage, especially for large collections</li>
      </ul>
    `;
