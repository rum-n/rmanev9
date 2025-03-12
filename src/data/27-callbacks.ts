export const callbacksContent = `
<article>
  <p>Callbacks are one of JavaScript's fundamental concepts for handling asynchronous operations. They represent a function that's passed as an argument to another function and executed at a later time, often after some asynchronous operation completes.</p>

  <h2>What Are Callback Functions?</h2>

  <p>In its simplest form, a callback is just a function passed to another function. This pattern enables code to be executed once an asynchronous operation has completed.</p>

  <pre><code class="language-javascript">
// Basic callback example
function doSomething(callback) {
  console.log('Doing something...');
  // The callback is invoked after the function completes its task
  callback();
}

function onComplete() {
  console.log('Task completed!');
}

// Pass onComplete as a callback
doSomething(onComplete);
// Output:
// Doing something...
// Task completed!
  </code></pre>

  <h2>Synchronous vs. Asynchronous Callbacks</h2>

  <p>Callbacks can be executed synchronously (immediately) or asynchronously (later).</p>

  <h3>Synchronous Callbacks</h3>

  <pre><code class="language-javascript">
// Synchronous callback example
[1, 2, 3].forEach(function(item) {
  console.log(item);
});
console.log('Array processing complete');

// Output:
// 1
// 2
// 3
// Array processing complete
  </code></pre>

  <h3>Asynchronous Callbacks</h3>

  <pre><code class="language-javascript">
// Asynchronous callback example
console.log('Starting async operation...');

setTimeout(function() {
  console.log('Callback executed after 2 seconds');
}, 2000);

console.log('Main code execution completed');

// Output:
// Starting async operation...
// Main code execution completed
// (2 seconds later)
// Callback executed after 2 seconds
  </code></pre>

  <h2>Common Callback Patterns</h2>

  <h3>1. Error-First Callbacks (Node.js Style)</h3>

  <p>The "error-first" pattern became standard in Node.js and is widely used in JavaScript:</p>

  <pre><code class="language-javascript">
function readFile(path, callback) {
  // Simulate file reading with potential error
  const random = Math.random();
  
  setTimeout(() => {
    if (random < 0.2) {
      // If error occurs, call callback with error as first argument
      callback(new Error('Failed to read file'));
    } else {
      // On success, first argument is null, second is the result
      callback(null, 'File content goes here');
    }
  }, 1000);
}

// Usage
readFile('/path/to/file.txt', function(error, content) {
  if (error) {
    console.error('Error reading file:', error.message);
    return;
  }
  
  console.log('File content:', content);
});
  </code></pre>

  <h3>2. Event-Based Callbacks</h3>

  <pre><code class="language-javascript">
// Event listener is a form of callback
document.getElementById('myButton').addEventListener('click', function(event) {
  console.log('Button clicked!');
  console.log('Event details:', event);
});
  </code></pre>

  <h3>3. Callback with Options Object</h3>

  <pre><code class="language-javascript">
function loadData(options) {
  // Default options
  const config = {
    url: options.url || 'https://api.example.com/data',
    method: options.method || 'GET',
    onSuccess: options.onSuccess || function() {},
    onError: options.onError || function() {},
    onComplete: options.onComplete || function() {}
  };
  
  // Simulate AJAX request
  setTimeout(() => {
    const success = Math.random() > 0.3;
    
    if (success) {
      const data = { result: 'Some data' };
      config.onSuccess(data);
    } else {
      config.onError(new Error('Failed to load data'));
    }
    
    config.onComplete();
  }, 1500);
}

// Usage
loadData({
  url: 'https://api.example.com/users',
  onSuccess: function(data) {
    console.log('Data loaded successfully:', data);
  },
  onError: function(error) {
    console.error('Error loading data:', error.message);
  },
  onComplete: function() {
    console.log('Operation completed');
  }
});
  </code></pre>

  <h2>Callback Hell (Pyramid of Doom)</h2>

  <p>One of the challenges with callbacks is managing complex asynchronous flows, leading to what's known as "callback hell" or the "pyramid of doom":</p>

  <pre><code class="language-javascript">
// Callback hell example
getData(function(a) {
  getMoreData(a, function(b) {
    getEvenMoreData(b, function(c) {
      getYetEvenMoreData(c, function(d) {
        getFinalData(d, function(finalData) {
          console.log('Final data:', finalData);
        }, errorCallback);
      }, errorCallback);
    }, errorCallback);
  }, errorCallback);
}, errorCallback);
  </code></pre>

  <h3>Mitigating Callback Hell</h3>

  <h4>1. Using Named Functions</h4>

  <pre><code class="language-javascript">
function handleFinalData(finalData) {
  console.log('Final data:', finalData);
}

function handleD(d) {
  getFinalData(d, handleFinalData, handleError);
}

function handleC(c) {
  getYetEvenMoreData(c, handleD, handleError);
}

function handleB(b) {
  getEvenMoreData(b, handleC, handleError);
}

function handleA(a) {
  getMoreData(a, handleB, handleError);
}

function handleError(error) {
  console.error('An error occurred:', error);
}

// Much cleaner initial call
getData(handleA, handleError);
  </code></pre>

  <h4>2. Modularizing Code</h4>

  <pre><code class="language-javascript">
function getDataStep1(callback, errorCallback) {
  getData(function(a) {
    getMoreData(a, callback, errorCallback);
  }, errorCallback);
}

function getDataStep2(b, callback, errorCallback) {
  getEvenMoreData(b, function(c) {
    getYetEvenMoreData(c, callback, errorCallback);
  }, errorCallback);
}

// Usage
getDataStep1(function(b) {
  getDataStep2(b, function(d) {
    getFinalData(d, function(result) {
      console.log('Final data:', result);
    }, handleError);
  }, handleError);
}, handleError);
  </code></pre>

  <h2>Modern Alternatives to Callback Patterns</h2>

  <h3>1. Promises</h3>

  <pre><code class="language-javascript">
// Converting callback-based function to Promise
function readFilePromise(path) {
  return new Promise((resolve, reject) => {
    readFile(path, (error, content) => {
      if (error) {
        reject(error);
      } else {
        resolve(content);
      }
    });
  });
}

// Usage with promises
readFilePromise('/path/to/file.txt')
  .then(content => {
    console.log('File content:', content);
    return processContent(content);
  })
  .then(processedData => {
    console.log('Processed data:', processedData);
  })
  .catch(error => {
    console.error('Error:', error.message);
  });
  </code></pre>

  <h3>2. Async/Await</h3>

  <pre><code class="language-javascript">
// Using async/await with promises
async function processFile() {
  try {
    const content = await readFilePromise('/path/to/file.txt');
    console.log('File content:', content);
    
    const processedData = await processContent(content);
    console.log('Processed data:', processedData);
    
    return processedData;
  } catch (error) {
    console.error('Error:', error.message);
    throw error;
  }
}

// Calling the async function
processFile()
  .then(result => console.log('Final result:', result))
  .catch(error => console.error('Process failed:', error));
  </code></pre>

  <h2>When to Still Use Callbacks</h2>

  <p>Despite modern alternatives, callbacks are still relevant in many contexts:</p>

  <ul>
    <li>Event handlers (addEventListener, onClick, etc.)</li>
    <li>Simple one-off asynchronous operations</li>
    <li>Working with APIs that are callback-based</li>
    <li>Higher-order functions in functional programming</li>
  </ul>

  <h2>Advanced Patterns with Callbacks</h2>

  <h3>1. The Revealing Module Pattern</h3>

  <pre><code class="language-javascript">
const counterModule = (function() {
  let count = 0;
  
  function change(val) {
    count += val;
  }
  
  function increment(callback) {
    change(1);
    if (callback) callback(count);
  }
  
  function decrement(callback) {
    change(-1);
    if (callback) callback(count);
  }
  
  function value(callback) {
    callback(count);
  }
  
  return {
    increment,
    decrement,
    value
  };
})();

// Usage
counterModule.increment(function(newValue) {
  console.log('New counter value:', newValue);
});
  </code></pre>

  <h3>2. Immediate Invocation Pattern</h3>

  <pre><code class="language-javascript">
function downloadData(url, callback) {
  // Simulate server request
  setTimeout(() => {
    const data = { key: 'value from ' + url };
    callback(null, data);
  }, 1000);
}

// IIFE with callback
(function(callback) {
  downloadData('https://api.example.com/data', function(err, result) {
    if (err) {
      callback(err);
      return;
    }
    
    // Process the data
    result.processed = true;
    callback(null, result);
  });
})(function(err, result) {
  if (err) {
    console.error('Error:', err);
    return;
  }
  console.log('Final result:', result);
});
  </code></pre>

  <h2>Error Handling Best Practices</h2>

  <ol>
    <li>Always check for errors in callbacks</li>
    <li>Make sure callbacks are called exactly once</li>
    <li>Handle timeouts for async operations</li>
    <li>Use try/catch blocks when appropriate</li>
  </ol>

  <pre><code class="language-javascript">
function safeOperation(callback) {
  // Initialize timeout
  let called = false;
  let timeoutId = setTimeout(() => {
    if (!called) {
      called = true;
      callback(new Error('Operation timed out'));
    }
  }, 5000);
  
  try {
    riskyOperation(function(err, result) {
      // Ensure callback is called only once
      if (called) return;
      called = true;
      
      // Clear the timeout
      clearTimeout(timeoutId);
      
      // Forward the error or result
      callback(err, result);
    });
  } catch (e) {
    // Handle synchronous errors
    if (!called) {
      called = true;
      clearTimeout(timeoutId);
      callback(e);
    }
  }
}
  </code></pre>

  <h2>Conclusion</h2>

  <p>Callbacks are a fundamental part of JavaScript's asynchronous nature. While modern alternatives like Promises and async/await offer cleaner syntax for complex operations, understanding callbacks is essential for any JavaScript developer.</p>

  <p>When used correctly, callbacks provide a powerful mechanism for handling asynchronous operations, events, and functional programming patterns. By following best practices and understanding the pitfalls, you can write effective and maintainable code using callbacks.</p>

  <p>Regardless of the emergence of more modern patterns, callbacks remain a core part of JavaScript and continue to be widely used in browser APIs, Node.js, and third-party libraries.</p>
</article>
`;