export const cachingContent = `
      <h2>Caching Strategies</h2>
      <p>Caching is a crucial technique for improving application performance by storing and reusing previously computed data or fetched resources. JavaScript offers several approaches to implement caching at different levels.</p>
      
      <h3>Memoization</h3>
      <pre><code>// Basic memoization function
function memoize(fn) {
  const cache = new Map();
  
  return function (...args) {
    const key = JSON.stringify(args);
    if (cache.has(key)) {
      console.log('Returning from cache');
      return cache.get(key);
    }
    
    const result = fn.apply(this, args);
    cache.set(key, result);
    return result;
  };
}

// Example usage
const expensiveCalculation = memoize((n) => {
  console.log('Calculating...');
  return n * n;
});

console.log(expensiveCalculation(5)); // Calculates
console.log(expensiveCalculation(5)); // Returns from cache</code></pre>

      <h3>Browser Caching with Service Workers</h3>
      <pre><code>// service-worker.js
self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open('v1').then((cache) => {
      return cache.addAll([
        '/',
        '/styles.css',
        '/app.js',
        '/api-data.json'
      ]);
    })
  );
});

self.addEventListener('fetch', (event) => {
  event.respondWith(
    caches.match(event.request).then((response) => {
      return response || fetch(event.request);
    })
  );
});</code></pre>

      <h3>HTTP Cache Headers</h3>
      <pre><code>// Setting cache headers in Node.js/Express
app.get('/api/data', (req, res) => {
  res.set({
    'Cache-Control': 'public, max-age=3600',
    'ETag': 'W/"123456789"'
  });
  res.json(data);
});</code></pre>

      <h3>Local Storage Cache</h3>
      <pre><code>class LocalStorageCache {
  constructor(ttl = 3600000) { // Default TTL: 1 hour
    this.ttl = ttl;
  }

  set(key, value) {
    const item = {
      value,
      timestamp: Date.now()
    };
    localStorage.setItem(key, JSON.stringify(item));
  }

  get(key) {
    const item = localStorage.getItem(key);
    if (!item) return null;

    const { value, timestamp } = JSON.parse(item);
    if (Date.now() - timestamp > this.ttl) {
      localStorage.removeItem(key);
      return null;
    }
    return value;
  }
}

// Usage
const cache = new LocalStorageCache();
cache.set('user', { id: 1, name: 'John' });
const user = cache.get('user');</code></pre>

      <h3>React Query/SWR Caching</h3>
      <pre><code>import { useQuery } from 'react-query';

function UserProfile({ userId }) {
  const { data, isLoading } = useQuery(
    ['user', userId],
    () => fetchUser(userId),
    {
      staleTime: 5 * 60 * 1000, // Data considered fresh for 5 minutes
      cacheTime: 30 * 60 * 1000 // Cache persists for 30 minutes
    }
  );

  if (isLoading) return 'Loading...';
  return <div>{data.name}</div>;
}</code></pre>

      <h3>Best Practices</h3>
      <ul>
        <li>Choose appropriate cache duration based on data volatility</li>
        <li>Implement cache invalidation strategies</li>
        <li>Consider memory limitations when caching in memory</li>
        <li>Use appropriate storage mechanism (Memory, LocalStorage, IndexedDB)</li>
        <li>Handle cache errors gracefully</li>
      </ul>
    `

