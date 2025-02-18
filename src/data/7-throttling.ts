export const throttlingContent = `
      <h2>What is Throttling?</h2>
      <p>Throttling is a technique used to limit the rate at which a function can be called. It ensures that a function is executed at most once in a specified time period, regardless of how many times it's called.</p>
      
      <h3>Basic Implementation</h3>
      <pre><code>function throttle(func, limit) {
  let inThrottle = false;
  
  return function(...args) {
    if (!inThrottle) {
      func.apply(this, args);
      inThrottle = true;
      
      setTimeout(() => {
        inThrottle = false;
      }, limit);
    }
  };
}</code></pre>

      <h3>Common Use Cases</h3>
      <ul>
        <li>Window resize event handlers</li>
        <li>Scroll event handlers</li>
        <li>Game input controls</li>
        <li>API rate limiting</li>
      </ul>

      <h3>Practical Example</h3>
      <pre><code>// Without throttling (dangerous!)
window.addEventListener('scroll', () => {
  // This will fire many times per second
  calculateScrollPosition();
});

// With throttling (better performance)
const throttledScroll = throttle(() => {
  calculateScrollPosition();
}, 250);

window.addEventListener('scroll', throttledScroll);</code></pre>

      <h3>Throttle vs Debounce</h3>
      <p>While both throttle and debounce limit function calls, they work differently:</p>
      <ul>
        <li>Throttle: Executes at a regular interval (like every 250ms)</li>
        <li>Debounce: Waits for a pause in calls before executing</li>
      </ul>

      <h3>Advanced Example with Options</h3>
      <pre><code>function advancedThrottle(func, limit, options = {}) {
  let inThrottle = false;
  let lastFunc;
  let lastRan;
  
  return function(...args) {
    if (!inThrottle) {
      func.apply(this, args);
      lastRan = Date.now();
      inThrottle = true;
    } else {
      if (options.trailing) {
        clearTimeout(lastFunc);
        lastFunc = setTimeout(() => {
          if (Date.now() - lastRan >= limit) {
            func.apply(this, args);
            lastRan = Date.now();
          }
        }, limit - (Date.now() - lastRan));
      }
    }
  };
}</code></pre>

      <h3>Real-world Implementation</h3>
      <pre><code>// Throttled API call
const throttledSearch = throttle(async (query) => {
  try {
    const response = await fetch(
      \`https://api.example.com/search?q=\${query}\`
    );
    const data = await response.json();
    updateSearchResults(data);
  } catch (error) {
    console.error('Search failed:', error);
  }
}, 500);

// Usage in search input
searchInput.addEventListener('input', (e) => {
  throttledSearch(e.target.value);
});</code></pre>

      <h3>Best Practices</h3>
      <ul>
        <li>Choose appropriate time limits based on use case</li>
        <li>Consider using leading/trailing options for edge cases</li>
        <li>Clean up throttled functions when components unmount</li>
        <li>Use existing libraries for production code</li>
      </ul>
    `