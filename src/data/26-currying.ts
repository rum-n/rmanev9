export const curryingContent = `
<article>
  <p>Currying is a fundamental concept in functional programming that transforms a function with multiple arguments into a sequence of functions, each taking a single argument. Named after mathematician Haskell Curry, this technique enables more flexible and composable code.</p>

  <h2>What is Currying?</h2>
  
  <p>In its simplest form, currying converts a function like <code>f(a, b, c)</code> into <code>f(a)(b)(c)</code>. Instead of taking all arguments at once, a curried function takes the first argument and returns a new function that takes the second argument, and so on.</p>

  <h3>Basic Example</h3>
  
  <pre><code class="language-javascript">
// Regular function that takes multiple arguments
function add(a, b, c) {
  return a + b + c;
}

// Curried version
function curriedAdd(a) {
  return function(b) {
    return function(c) {
      return a + b + c;
    };
  };
}

// Usage
console.log(add(1, 2, 3)); // 6
console.log(curriedAdd(1)(2)(3)); // 6
  </code></pre>

  <p>With ES6 arrow functions, we can make the curried version more concise:</p>
  
  <pre><code class="language-javascript">
const curriedAddArrow = a => b => c => a + b + c;

console.log(curriedAddArrow(1)(2)(3)); // 6
  </code></pre>

  <h2>Creating a Curry Function</h2>
  
  <p>We can create a utility that automatically curries any function:</p>
  
  <pre><code class="language-javascript">
function curry(fn) {
  return function curried(...args) {
    if (args.length >= fn.length) {
      return fn.apply(this, args);
    } else {
      return function(...args2) {
        return curried.apply(this, args.concat(args2));
      };
    }
  };
}

// Usage
const sum = (a, b, c) => a + b + c;
const curriedSum = curry(sum);

console.log(curriedSum(1)(2)(3)); // 6
console.log(curriedSum(1, 2)(3)); // 6
console.log(curriedSum(1)(2, 3)); // 6
console.log(curriedSum(1, 2, 3)); // 6
  </code></pre>

  <h2>Partial Application vs. Currying</h2>
  
  <p>While often used interchangeably, currying and partial application are distinct concepts:</p>
  
  <ul>
    <li><strong>Currying</strong> transforms a function with multiple arguments into a sequence of unary (single-argument) functions.</li>
    <li><strong>Partial application</strong> fixes a number of arguments to a function, producing a function of smaller arity.</li>
  </ul>
  
  <pre><code class="language-javascript">
// Partial application
function partial(fn, ...presetArgs) {
  return function(...laterArgs) {
    return fn(...presetArgs, ...laterArgs);
  };
}

const add5 = partial(sum, 5); // Fixes first argument to 5
console.log(add5(10, 20)); // 35 (5 + 10 + 20)
  </code></pre>

  <h2>Practical Use Cases</h2>
  
  <h3>1. Function Composition</h3>
  
  <pre><code class="language-javascript">
const compose = (f, g) => x => f(g(x));

const double = x => x * 2;
const square = x => x * x;

const doubleSquare = compose(double, square);
console.log(doubleSquare(3)); // 18 (double(square(3)) = double(9) = 18)
  </code></pre>

  <h3>2. Event Handling</h3>
  
  <pre><code class="language-javascript">
const handleEvent = eventType => element => callback => {
  element.addEventListener(eventType, callback);
  return {
    remove: () => element.removeEventListener(eventType, callback)
  };
};

const handleClick = handleEvent('click');
const handleButtonClick = handleClick(document.querySelector('button'));
const clickListener = handleButtonClick(e => console.log('Button clicked!'));

// Later, to remove:
clickListener.remove();
  </code></pre>

  <h3>3. Configuration Objects</h3>
  
  <pre><code class="language-javascript">
const configureRequest = baseUrl => endpoint => method => headers => body => {
  return {
    url: \`\${baseUrl}\${endpoint}\`,
    method,
    headers,
    body: JSON.stringify(body)
  };
};

const apiRequest = configureRequest('https://api.example.com');
const usersRequest = apiRequest('/users');
const getUsersRequest = usersRequest('GET');
const getAuthenticatedUsersRequest = getUsersRequest({ 
  'Authorization': 'Bearer token123', 
  'Content-Type': 'application/json' 
});

// Full request config:
const request = getAuthenticatedUsersRequest({ page: 1, limit: 10 });
console.log(request);
/*
{
  url: 'https://api.example.com/users',
  method: 'GET',
  headers: { Authorization: 'Bearer token123', 'Content-Type': 'application/json' },
  body: '{"page":1,"limit":10}'
}
*/
  </code></pre>

  <h3>4. Memoization with Currying</h3>
  
  <pre><code class="language-javascript">
const memoize = fn => {
  const cache = {};
  return arg => {
    if (cache[arg]) {
      console.log('Retrieving from cache');
      return cache[arg];
    }
    console.log('Calculating result');
    const result = fn(arg);
    cache[arg] = result;
    return result;
  };
};

const expensiveCalculation = x => {
  console.log('Performing expensive calculation');
  return x * x;
};

const memoizedCalc = memoize(expensiveCalculation);

console.log(memoizedCalc(4)); // Logs: Calculating result, 16
console.log(memoizedCalc(4)); // Logs: Retrieving from cache, 16
console.log(memoizedCalc(5)); // Logs: Calculating result, 25
  </code></pre>

  <h2>Benefits of Currying</h2>
  
  <ul>
    <li><strong>Function reusability</strong>: Create specialized functions from more general ones.</li>
    <li><strong>Partial evaluation</strong>: Pre-fill arguments to create new functions.</li>
    <li><strong>Cleaner code</strong>: Avoid repeating arguments in function calls.</li>
    <li><strong>Point-free style</strong>: Write code that focuses on operations, not data.</li>
    <li><strong>Composition</strong>: Build complex functions by combining simpler ones.</li>
  </ul>

  <h2>Limitations and Considerations</h2>
  
  <ul>
    <li>Can reduce readability if overused or not properly documented.</li>
    <li>Requires a mental shift for developers used to imperative programming.</li>
    <li>Order of arguments becomes more important (first arguments are typically fixed first).</li>
    <li>May be less efficient for functions called only once with all arguments.</li>
  </ul>

  <h2>Advanced Example: Point-Free Programming</h2>
  
  <p>Point-free programming (tacit programming) lets you define functions without explicitly mentioning their arguments:</p>
  
  <pre><code class="language-javascript">
// Utility functions
const curry = fn => 
  function curried(...args) {
    return args.length >= fn.length
      ? fn.apply(this, args)
      : (...moreArgs) => curried.apply(this, args.concat(moreArgs));
  };

const map = curry((fn, arr) => arr.map(fn));
const filter = curry((predicate, arr) => arr.filter(predicate));
const compose = (...fns) => x => fns.reduceRight((acc, fn) => fn(acc), x);

// Point-free transformations
const double = x => x * 2;
const isEven = x => x % 2 === 0;
const sum = arr => arr.reduce((a, b) => a + b, 0);

// With points (explicit arguments)
const sumOfDoubledEvens = numbers => {
  const evens = numbers.filter(x => x % 2 === 0);
  const doubled = evens.map(x => x * 2);
  return doubled.reduce((a, b) => a + b, 0);
};

// Point-free version
const sumOfDoubledEvensPointFree = compose(
  sum,
  map(double),
  filter(isEven)
);

const numbers = [1, 2, 3, 4, 5, 6];
console.log(sumOfDoubledEvens(numbers)); // 24
console.log(sumOfDoubledEvensPointFree(numbers)); // 24
  </code></pre>

  <h2>Conclusion</h2>
  
  <p>Currying is a powerful technique that promotes function composition, code reuse, and cleaner architecture. While it may seem abstract at first, mastering currying can significantly enhance your functional programming toolkit and lead to more elegant, maintainable JavaScript code.</p>
  
  <p>As with any programming pattern, the key is understanding when to apply currying for maximum benefit, and when simpler approaches might be more appropriate. When used judiciously, currying can transform complex function calls into a series of simpler, more readable operations.</p>
</article>
`;