export const concurrencyContent = `
      <h2>Understanding Concurrency in JavaScript</h2>
      <p>JavaScript is single-threaded but provides several mechanisms for handling concurrent operations. Understanding these patterns is crucial for building performant web applications.</p>
      
      <h3>Core Concepts</h3>
      <ul>
        <li>Single-threaded Execution: JavaScript runs in one main thread</li>
        <li>Call Stack: Where function calls are tracked</li>
        <li>Event Loop: Manages async operations and callbacks</li>
        <li>Task Queue: Where callbacks wait to be executed</li>
        <li>Microtask Queue: Higher priority queue for Promises</li>
      </ul>

      <h3>The Event Loop Explained</h3>
      <pre><code>console.log('1'); // Synchronous

setTimeout(() => {
  console.log('2'); // Macrotask
}, 0);

Promise.resolve().then(() => {
  console.log('3'); // Microtask
});

console.log('4'); // Synchronous

// Output:
// 1
// 4
// 3
// 2</code></pre>

      <h3>Concurrency vs Parallelism</h3>
      <p>While often confused, these concepts are different:</p>
      <ul>
        <li>Concurrency: Managing multiple tasks over time (JavaScript's approach)</li>
        <li>Parallelism: Executing multiple tasks simultaneously (true multi-threading)</li>
      </ul>

      <h3>Web Workers for True Parallelism</h3>
      <pre><code>// main.js
const worker = new Worker('worker.js');

worker.postMessage({
  type: 'HEAVY_CALCULATION',
  data: largeArray
});

worker.onmessage = (event) => {
  const result = event.data;
  updateUI(result);
};

// worker.js
self.onmessage = (event) => {
  if (event.data.type === 'HEAVY_CALCULATION') {
    const result = performHeavyCalculation(event.data.data);
    self.postMessage(result);
  }
};</code></pre>

      <h3>Async Patterns</h3>
      <pre><code>// Sequential execution
async function sequential() {
  const result1 = await fetchUser(1);
  const result2 = await fetchUser(2);
  return [result1, result2];
}

// Concurrent execution
async function concurrent() {
  const [result1, result2] = await Promise.all([
    fetchUser(1),
    fetchUser(2)
  ]);
  return [result1, result2];
}

// Race condition handling
async function safeUpdate() {
  let currentVersion = await getVersion();
  
  const newData = await prepareUpdate();
  
  // Check if version changed during preparation
  if (currentVersion !== await getVersion()) {
    throw new Error('Data was modified');
  }
  
  return saveUpdate(newData);
}</code></pre>

      <h3>Advanced Concurrency Patterns</h3>
      <pre><code>// Semaphore pattern for limiting concurrent operations
class Semaphore {
  constructor(max) {
    this.max = max;
    this.count = 0;
    this.queue = [];
  }

  async acquire() {
    if (this.count < this.max) {
      this.count++;
      return;
    }

    await new Promise(resolve => this.queue.push(resolve));
    this.count++;
  }

  release() {
    this.count--;
    if (this.queue.length > 0) {
      const next = this.queue.shift();
      next();
    }
  }
}

// Usage
const semaphore = new Semaphore(3); // Max 3 concurrent operations

async function controlledFetch(url) {
  await semaphore.acquire();
  try {
    return await fetch(url);
  } finally {
    semaphore.release();
  }
}</code></pre>

      <h3>Common Concurrency Issues</h3>
      <ul>
        <li>Race Conditions: When operations happen in unexpected order</li>
        <li>Dead Locks: When operations wait for each other indefinitely</li>
        <li>Resource Starvation: When operations can't access needed resources</li>
        <li>Memory Leaks: When resources aren't properly released</li>
      </ul>

      <h3>Best Practices</h3>
      <ul>
        <li>Use async/await for better readability</li>
        <li>Handle errors in all async operations</li>
        <li>Avoid blocking the main thread</li>
        <li>Use Web Workers for CPU-intensive tasks</li>
        <li>Implement proper error boundaries</li>
        <li>Consider using libraries like RxJS for complex async operations</li>
      </ul>

      <h3>Modern Tools and Libraries</h3>
      <ul>
        <li>RxJS: Reactive programming library for complex async operations</li>
        <li>Web Workers: For true parallel processing</li>
        <li>SharedArrayBuffer: For sharing memory between threads</li>
        <li>Atomics: For thread-safe operations</li>
        <li>Service Workers: For offline functionality and background processing</li>
      </ul>
    `