export const promisesContent = `
      <h2>What is a Promise?</h2>
      <p>A Promise in JavaScript is an object representing the eventual completion (or failure) of an asynchronous operation. It's a way to handle asynchronous operations in a more elegant way than callbacks.</p>
      
      <h3>Promise States</h3>
      <ul>
        <li>Pending: Initial state, neither fulfilled nor rejected</li>
        <li>Fulfilled: Operation completed successfully</li>
        <li>Rejected: Operation failed</li>
      </ul>

      <h3>Basic Example</h3>
      <pre><code>const myPromise = new Promise((resolve, reject) => {
  // Simulating an async operation
  setTimeout(() => {
    const randomNumber = Math.random();
    if (randomNumber > 0.5) {
      resolve('Success!');
    } else {
      reject('Error: Number too low');
    }
  }, 1000);
});

myPromise
  .then(result => console.log(result))
  .catch(error => console.error(error));</code></pre>
      
      <h3>Common Use Cases</h3>
      <ul>
        <li>API calls (fetch)</li>
        <li>File operations</li>
        <li>Database operations</li>
        <li>Any asynchronous tasks</li>
      </ul>

      <h3>Async/Await Syntax</h3>
      <p>Modern JavaScript provides a more elegant way to work with Promises using async/await:</p>
      <pre><code>async function fetchUserData() {
  try {
    const response = await fetch('https://api.example.com/user');
    const userData = await response.json();
    return userData;
  } catch (error) {
    console.error('Error fetching user:', error);
  }
}</code></pre>

      <h3>Promise Methods</h3>
      <ul>
        <li>Promise.all(): Waits for all promises to resolve</li>
        <li>Promise.race(): Resolves/rejects as soon as one promise settles</li>
        <li>Promise.allSettled(): Waits for all promises to settle</li>
        <li>Promise.any(): Resolves when any promise fulfills</li>
      </ul>

      <h3>Advanced Example</h3>
      <pre><code>// Promise.all example
const fetchMultipleUsers = async (userIds) => {
  try {
    const promises = userIds.map(id => 
      fetch(\`https://api.example.com/users/\${id}\`)
        .then(res => res.json())
    );
    
    const users = await Promise.all(promises);
    return users;
  } catch (error) {
    console.error('Error fetching users:', error);
  }
};</code></pre>

      <h3>Best Practices</h3>
      <ul>
        <li>Always handle errors using .catch() or try/catch</li>
        <li>Avoid nesting promises (promise chaining)</li>
        <li>Use async/await for cleaner code</li>
        <li>Return promises from functions for better composability</li>
      </ul>
    `