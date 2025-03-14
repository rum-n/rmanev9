export const webWorkersContent = `
<article>
  <p>JavaScript is traditionally known as a single-threaded language, with all code running on the main UI thread. This can lead to performance issues when handling computationally intensive tasks. Web Workers provide a solution by enabling JavaScript to run in background threads, separate from the main execution thread.</p>

  <h2>What Are Web Workers?</h2>

  <p>Web Workers are a browser API that allows you to run JavaScript code in the background, independent of the main UI thread. They enable true parallel processing in web applications without freezing the user interface, making your applications more responsive.</p>

  <h2>Creating a Basic Web Worker</h2>

  <p>Here's how to create and use a simple dedicated worker:</p>

  <h3>Main Script</h3>
  <pre><code class="language-javascript">
// Create a new worker
const worker = new Worker('worker.js');

// Listen for messages from the worker
worker.addEventListener('message', function(event) {
  console.log('Result from worker:', event.data);
  document.getElementById('result').textContent = event.data;
});

// Send data to the worker
document.getElementById('calculateButton').addEventListener('click', function() {
  const num = parseInt(document.getElementById('number').value, 10);
  worker.postMessage(num);
});
  </code></pre>

  <h3>Worker Script (worker.js)</h3>
  <pre><code class="language-javascript">
// Listen for messages from the main thread
self.addEventListener('message', function(event) {
  const number = event.data;
  
    // Perform a computationally intensive task
  const result = calculateFactorial(number);
    
    // Send the result back to the main thread
  self.postMessage(result);
});

// A computationally intensive function
function calculateFactorial(n) {
  if (n === 0 || n === 1) {
    return 1;
  }
  
  let result = 1;
  for (let i = 2; i <= n; i++) {
    result *= i;
  }
  
  return result;
}
  </code></pre>

  <h2>Communication Between Worker and Main Thread</h2>

  <p>Web Workers and the main thread communicate by sending and receiving messages, using the <code>postMessage()</code> method and the <code>message</code> event. This message-passing interface ensures isolation between threads.</p>

  <pre><code class="language-javascript">
// From main thread to worker
worker.postMessage(data);

// From worker to main thread
self.postMessage(result);
  </code></pre>

  <h2>Transferable Objects</h2>

  <p>For better performance with large data, you can use transferable objects which are transferred without copying:</p>

  <pre><code class="language-javascript">
// Main thread
const largeArray = new Uint8Array(1024 * 1024 * 32); // 32MB array
fillArrayWithData(largeArray);

// Transfer ownership of the array to the worker
worker.postMessage({ data: largeArray }, [largeArray.buffer]);

// After transfer, largeArray is no longer usable in the main thread
console.log(largeArray.length); // 0
  </code></pre>

  <h2>Terminating Workers</h2>

  <p>When a worker is no longer needed, it should be terminated to free up resources:</p>

  <pre><code class="language-javascript">
// From the main thread
worker.terminate();

// Self-termination from within the worker
self.close();
  </code></pre>

  <h2>Web Worker Limitations</h2>

  <p>Workers operate under certain constraints:</p>

  <ul>
    <li>No direct access to the DOM or parent objects</li>
    <li>No access to the window or document objects</li>
    <li>No shared memory by default (communication is via message passing)</li>
    <li>Same-origin policy applies</li>
  </ul>

  <h2>A Practical Example: Image Processing</h2>

  <p>A common use case for Web Workers is image processing, where filters or transformations can be applied without blocking the UI:</p>

  <pre><code class="language-javascript">
// Main.js (simplified)
const imageWorker = new Worker('image-processor.js');

imageWorker.addEventListener('message', function(event) {
  const resultImageData = event.data;
  const canvas = document.getElementById('resultCanvas');
  const ctx = canvas.getContext('2d');
  ctx.putImageData(resultImageData, 0, 0);
});

function processImage() {
  const canvas = document.getElementById('sourceCanvas');
      const ctx = canvas.getContext('2d');
      const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
      
      // Send to worker for processing
      imageWorker.postMessage({
        imageData: imageData,
    filter: 'grayscale'
      }, [imageData.data.buffer]);
}
  </code></pre>

  <pre><code class="language-javascript">
// image-processor.js (simplified)
self.addEventListener('message', function(event) {
  const { imageData, filter } = event.data;
  
  if (filter === 'grayscale') {
      applyGrayscale(imageData);
  }
  
  // Send processed image data back
  self.postMessage(imageData, [imageData.data.buffer]);
});

function applyGrayscale(imageData) {
  const data = imageData.data;
  for (let i = 0; i < data.length; i += 4) {
    const avg = (data[i] + data[i + 1] + data[i + 2]) / 3;
    data[i] = avg;     // Red
    data[i + 1] = avg; // Green
    data[i + 2] = avg; // Blue
  }
}
  </code></pre>

  <h2>Best Practices</h2>

  <ol>
    <li><strong>Only use workers for computationally intensive tasks</strong> - The overhead isn't worth it for simple operations.</li>
    <li><strong>Minimize message passing</strong> - Group related data to reduce overhead.</li>
    <li><strong>Use transferable objects</strong> for large data transfers.</li>
    <li><strong>Properly handle errors</strong> in both the worker and main thread.</li>
    <li><strong>Terminate unused workers</strong> to free up resources.</li>
  </ol>

  <h2>When to Use Web Workers</h2>

  <p>Web Workers are particularly useful for:</p>

  <ul>
    <li>Complex mathematical calculations</li>
    <li>Image and video processing</li>
    <li>Data parsing and manipulation</li>
    <li>Encryption and hashing</li>
    <li>Processing large datasets</li>
  </ul>

  <h2>Conclusion</h2>

  <p>Web Workers provide a powerful way to leverage parallel processing in JavaScript applications. By moving computationally expensive tasks to background threads, you can create more responsive web applications that make better use of modern multi-core processors.</p>

  <p>While there are some limitations and a bit of overhead in setting them up, the performance benefits for CPU-intensive tasks make Web Workers an essential tool in a modern web developer's toolkit.</p>
</article>
`;