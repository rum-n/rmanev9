export const proxyContent = `
<article>
  <p>Introduced in ES6 (ES2015), the Proxy object provides a powerful way to intercept and customize operations performed on objects. Proxies enable you to create custom behavior for fundamental operations like property lookup, assignment, enumeration, function invocation, and more.</p>

  <h2>Understanding Proxies</h2>

  <p>A Proxy wraps around a target object and can intercept fundamental operations that would otherwise be performed directly on the target. This interception is done using "traps" - functions that provide custom behavior for various operations.</p>

  <pre><code class="language-javascript">
// Basic syntax for creating a proxy
const proxy = new Proxy(target, handler);
  </code></pre>

  <p>Where:</p>
  <ul>
    <li><code>target</code>: The original object you want to proxy</li>
    <li><code>handler</code>: An object containing traps (methods that intercept operations)</li>
  </ul>

  <h2>Simple Proxy Example</h2>

  <pre><code class="language-javascript">
// The target object
const user = {
  firstName: 'John',
  lastName: 'Doe',
  age: 30
};

// The handler with a get trap
const handler = {
  get(target, property, receiver) {
    console.log(\`Getting property: \${String(property)}\`);
    
    // Custom behavior for accessing non-existent properties
    if (!(property in target)) {
      return \`Property "\${String(property)}" does not exist\`;
    }
    
    return Reflect.get(target, property, receiver);
  }
};

// Create the proxy
const userProxy = new Proxy(user, handler);

// Using the proxy
console.log(userProxy.firstName);  // Getting property: firstName
                                  // John

console.log(userProxy.middleName); // Getting property: middleName
                                  // Property "middleName" does not exist
  </code></pre>

  <h2>Common Proxy Traps</h2>

  <p>JavaScript Proxies provide a comprehensive set of traps for different operations:</p>

  <h3>1. get</h3>
  <p>Intercepts property access: <code>obj.prop</code> or <code>obj['prop']</code></p>

  <h3>2. set</h3>
  <p>Intercepts property assignment: <code>obj.prop = value</code></p>

  <pre><code class="language-javascript">
const person = {
  name: 'Alice',
  age: 25
};

const validatingProxy = new Proxy(person, {
  set(target, property, value, receiver) {
    if (property === 'age' && typeof value !== 'number') {
      throw new TypeError('Age must be a number');
    }
    
    if (property === 'age' && value < 0) {
      throw new RangeError('Age must be a positive number');
    }
    
    console.log(\`Setting \${String(property)} to \${value}\`);
    return Reflect.set(target, property, value, receiver);
  }
});

validatingProxy.age = 30;  // Setting age to 30
console.log(person.age);   // 30

try {
  validatingProxy.age = 'thirty';  // Throws TypeError
} catch (e) {
  console.error(e.message);  // Age must be a number
}

try {
  validatingProxy.age = -5;  // Throws RangeError
} catch (e) {
  console.error(e.message);  // Age must be a positive number
}
  </code></pre>

  <h3>3. has</h3>
  <p>Intercepts the <code>in</code> operator: <code>prop in obj</code></p>

  <pre><code class="language-javascript">
const secretData = {
  visibleProp: 'This can be seen',
  _hiddenProp: 'This is secret',
  __superSecret: 'Top secret data'
};

const privateFieldsProxy = new Proxy(secretData, {
  has(target, property) {
    if (String(property).startsWith('_')) {
      console.log(\`Hiding existence of: \${String(property)}\`);
      return false;
    }
    return Reflect.has(target, property);
  }
});

console.log('visibleProp' in privateFieldsProxy);  // true
console.log('_hiddenProp' in privateFieldsProxy);  // false (logged: Hiding existence of: _hiddenProp)
console.log('__superSecret' in privateFieldsProxy);  // false (logged: Hiding existence of: __superSecret)
  </code></pre>

  <h3>4. apply</h3>
  <p>Intercepts function calls: <code>func(...args)</code></p>

  <pre><code class="language-javascript">
function sum(a, b) {
  return a + b;
}

const loggingFuncProxy = new Proxy(sum, {
  apply(target, thisArg, argumentsList) {
    console.log(\`Function called with arguments: \${argumentsList.join(', ')}\`);
    const start = performance.now();
    
    const result = Reflect.apply(target, thisArg, argumentsList);
    
    const end = performance.now();
    console.log(\`Function execution took \${end - start}ms\`);
    
    return result;
  }
});

console.log(loggingFuncProxy(10, 20));
// Function called with arguments: 10, 20
// Function execution took 0.123ms
// 30
  </code></pre>

  <h3>5. construct</h3>
  <p>Intercepts the <code>new</code> operator: <code>new Func(...args)</code></p>

  <pre><code class="language-javascript">
class User {
  constructor(name) {
    this.name = name;
  }
}

const UserProxy = new Proxy(User, {
  construct(target, args, newTarget) {
    console.log(\`Creating new instance with args: \${args.join(', ')}\`);
    
    // Ensure name is capitalized
    if (args[0] && typeof args[0] === 'string') {
      args[0] = args[0].charAt(0).toUpperCase() + args[0].slice(1);
    }
    
    return Reflect.construct(target, args, newTarget);
  }
});

const user1 = new UserProxy('john');
// Creating new instance with args: john
console.log(user1.name);  // John (capitalized)
  </code></pre>

  <h2>Practical Use Cases for Proxies</h2>

  <h3>1. Data Validation</h3>

  <pre><code class="language-javascript">
function createValidatedObject(validations) {
  return new Proxy({}, {
    set(target, property, value) {
      if (validations.hasOwnProperty(property)) {
        const validator = validations[property];
        if (!validator.validate(value)) {
          throw new Error(\`Invalid value for \${property}: \${validator.message}\`);
        }
      }
      target[property] = value;
      return true;
    }
  });
}

const user = createValidatedObject({
  name: {
    validate: value => typeof value === 'string' && value.length >= 2,
    message: 'Name must be a string with at least 2 characters'
  },
  email: {
    validate: value => /^[^@]+@[^@]+\\.[^@]+$/.test(value),
    message: 'Email must be valid'
  },
  age: {
    validate: value => typeof value === 'number' && value >= 18,
    message: 'Age must be a number of at least 18'
  }
});

user.name = 'Alice';  // Valid
// user.email = 'invalid-email';  // Error: Invalid value for email: Email must be valid
user.email = 'alice@example.com';  // Valid
// user.age = 16;  // Error: Invalid value for age: Age must be a number of at least 18
user.age = 25;  // Valid

console.log(user);  // { name: 'Alice', email: 'alice@example.com', age: 25 }
  </code></pre>

  <h3>2. Logging and Debugging</h3>

  <pre><code class="language-javascript">
function createLoggingProxy(target, name = 'Object') {
  return new Proxy(target, {
    get(target, property, receiver) {
      const value = Reflect.get(target, property, receiver);
      console.log(\`[GET] \${name}.\${String(property)} => \${JSON.stringify(value)}\`);
      return value;
    },
    set(target, property, value, receiver) {
      console.log(\`[SET] \${name}.\${String(property)} = \${JSON.stringify(value)}\`);
      return Reflect.set(target, property, value, receiver);
    },
    deleteProperty(target, property) {
      console.log(\`[DELETE] \${name}.\${String(property)}\`);
      return Reflect.deleteProperty(target, property);
    }
  });
}

const config = createLoggingProxy({
  apiUrl: 'https://api.example.com',
  timeout: 5000
}, 'Config');

const url = config.apiUrl;  // [GET] Config.apiUrl => "https://api.example.com"
config.timeout = 10000;     // [SET] Config.timeout = 10000
delete config.apiUrl;       // [DELETE] Config.apiUrl
  </code></pre>

  <h3>3. Implementing Virtual Properties</h3>

  <pre><code class="language-javascript">
const person = {
  firstName: 'John',
  lastName: 'Doe'
};

const personWithVirtualProps = new Proxy(person, {
  get(target, property, receiver) {
    if (property === 'fullName') {
      return \`\${target.firstName} \${target.lastName}\`;
    }
    
    if (property === 'reverseName') {
      return \`\${target.lastName}, \${target.firstName}\`;
    }
    
    return Reflect.get(target, property, receiver);
  }
});

console.log(personWithVirtualProps.fullName);     // John Doe
console.log(personWithVirtualProps.reverseName);  // Doe, John
  </code></pre>

  <h3>4. Observable Objects for Data Binding</h3>

  <pre><code class="language-javascript">
function createObservable(target) {
  const listeners = new Map();
  
  function notify(property, value) {
    if (listeners.has(property)) {
      listeners.get(property).forEach(callback => callback(value));
    }
  }
  
  return new Proxy(target, {
    set(obj, property, value) {
      const result = Reflect.set(obj, property, value);
      notify(property, value);
      return result;
    },
    
    deleteProperty(obj, property) {
      const result = Reflect.deleteProperty(obj, property);
      notify(property, undefined);
      return result;
    }
  });
}

function observe(observable, property, callback) {
  if (!observable.__listeners) {
    observable.__listeners = new Map();
  }
  
  if (!observable.__listeners.has(property)) {
    observable.__listeners.set(property, []);
  }
  
  observable.__listeners.get(property).push(callback);
}

// Usage
const user = createObservable({
  name: 'Alice',
  age: 25
});

observe(user, 'name', newValue => {
  console.log(\`Name updated to: \${newValue}\`);
  document.getElementById('nameDisplay').textContent = newValue;
});

observe(user, 'age', newValue => {
  console.log(\`Age updated to: \${newValue}\`);
  document.getElementById('ageDisplay').textContent = newValue;
});

// When these properties change, UI will automatically update
user.name = 'Bob';  // Name updated to: Bob
user.age = 30;      // Age updated to: 30
  </code></pre>

  <h3>5. Caching and Memoization</h3>

  <pre><code class="language-javascript">
function createCachingProxy(target) {
  const cache = new Map();
  
  return new Proxy(target, {
    apply(target, thisArg, args) {
      // Create a cache key from the function arguments
      const key = JSON.stringify(args);
      
      if (cache.has(key)) {
        console.log('Cache hit');
        return cache.get(key);
      }
      
      console.log('Cache miss');
      const result = Reflect.apply(target, thisArg, args);
      cache.set(key, result);
      return result;
    }
  });
}

function expensiveOperation(a, b) {
  console.log('Performing expensive calculation...');
  // Simulate expensive operation
  let result = 0;
  for (let i = 0; i < 1000000; i++) {
    result += a * b / (i + 1);
  }
  return result;
}

const cachedOperation = createCachingProxy(expensiveOperation);

console.time('first call');
cachedOperation(5, 10);  // Cache miss
console.timeEnd('first call');  // first call: 50ms

console.time('second call');
cachedOperation(5, 10);  // Cache hit
console.timeEnd('second call');  // second call: 0.1ms
  </code></pre>

  <h2>Creating a Revocable Proxy</h2>

  <p>JavaScript also provides <code>Proxy.revocable()</code>, which creates a proxy that can be disabled:</p>

  <pre><code class="language-javascript">
const target = {
  message: 'Hello, world!'
};

// Create a revocable proxy
const { proxy, revoke } = Proxy.revocable(target, {
  get(target, property) {
    console.log(\`Accessing \${String(property)}\`);
    return target[property];
  }
});

console.log(proxy.message);  // Accessing message
                            // Hello, world!

// Revoke the proxy
revoke();

try {
  // After revocation, any operation on the proxy will throw
  console.log(proxy.message);
} catch (e) {
  console.error(e.message);  // Cannot perform 'get' on a proxy that has been revoked
}
  </code></pre>

  <h2>Performance Considerations</h2>
  
  <p>While Proxies are powerful, they do introduce some overhead:</p>
  
  <ul>
    <li>Property access is slower through a Proxy compared to direct access</li>
    <li>Creating many Proxies can impact memory usage</li>
    <li>Complex Proxy handlers can slow down your application</li>
  </ul>
  
  <p>It's important to use Proxies judiciously, especially in performance-critical code paths.</p>

  <h2>Browser Compatibility</h2>
  
  <p>Proxies are supported in all modern browsers and Node.js, but have no polyfill or workaround for older browsers like Internet Explorer. Always check compatibility before using Proxies in production.</p>

  <h2>Advanced Example: Deep Observable Objects</h2>

  <pre><code class="language-javascript">
function deepObservable(obj, callback) {
  // Helper to check if value should be wrapped in a proxy
  function shouldWrap(value) {
    return value && typeof value === 'object' && !(value instanceof Date) 
      && !(value instanceof RegExp) && !(value instanceof Promise);
  }
  
  // Create proxy for nested objects
  function createDeepProxy(target, path = '') {
    return new Proxy(target, {
      get(target, property, receiver) {
        if (property === Symbol.iterator && Array.isArray(target)) {
          return target[Symbol.iterator].bind(target);
        }
        
        const value = Reflect.get(target, property, receiver);
        if (shouldWrap(value)) {
          return createDeepProxy(value, path ? \`\${path}.\${String(property)}\` : String(property));
        }
        return value;
      },
      
      set(target, property, value, receiver) {
        const currentPath = path ? \`\${path}.\${String(property)}\` : String(property);
        
        // Recursively create proxies for nested objects
        if (shouldWrap(value)) {
          value = deepObservable(value, (nestedPath, newValue, oldValue) => {
            callback(\`\${currentPath}.\${nestedPath}\`, newValue, oldValue);
          });
        }
        
        const oldValue = target[property];
        const result = Reflect.set(target, property, value, receiver);
        
        if (oldValue !== value) {
          callback(currentPath, value, oldValue);
        }
        
        return result;
      },
      
      deleteProperty(target, property) {
        const currentPath = path ? \`\${path}.\${String(property)}\` : String(property);
        const oldValue = target[property];
        const result = Reflect.deleteProperty(target, property);
        
        if (result && oldValue !== undefined) {
          callback(currentPath, undefined, oldValue);
        }
        
        return result;
      }
    });
  }
  
  // Start by wrapping the root object
  return createDeepProxy(obj);
}

// Usage example
const state = deepObservable({
  user: {
    name: 'Alice',
    contacts: [
      { name: 'Bob', email: 'bob@example.com' },
      { name: 'Charlie', email: 'charlie@example.com' }
    ]
  },
  settings: {
    theme: 'dark',
    notifications: true
  }
}, (path, newValue, oldValue) => {
  console.log(\`Path '\${path}' changed: \${JSON.stringify(oldValue)} => \${JSON.stringify(newValue)}\`);
});

// Changes will be tracked at any level of nesting
state.user.name = 'Alicia';
// Path 'user.name' changed: "Alice" => "Alicia"

state.user.contacts[0].email = 'bob.new@example.com';
// Path 'user.contacts.0.email' changed: "bob@example.com" => "bob.new@example.com"

state.settings.theme = 'light';
// Path 'settings.theme' changed: "dark" => "light"
  </code></pre>

  <h2>Conclusion</h2>

  <p>JavaScript Proxies provide a powerful mechanism for meta-programming, enabling you to intercept and customize fundamental object operations. While they might seem complex at first, Proxies open up a world of possibilities for creating advanced patterns like data validation, reactive programming, caching, logging, and more.</p>

  <p>By understanding how to use Proxies effectively, you can write more flexible, maintainable code that adapts to changing requirements without modifying the core functionality. Just remember to use them judiciously, keeping performance implications in mind, especially for performance-critical applications.</p>
</article>
`;