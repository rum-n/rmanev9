export const higherOrderFunctionsContent = `
      <p>Higher-order functions are a powerful concept in JavaScript that allows for more flexible, reusable, and expressive code. They are functions that either take other functions as arguments or return functions as their result.</p>
      
      <h3>What Makes a Function "Higher-Order"?</h3>
      <p>A higher-order function must do at least one of the following:</p>
      <ol>
        <li>Accept one or more functions as arguments</li>
        <li>Return a function as its result</li>
      </ol>

      <h3>Functions as Arguments</h3>
      <pre><code>// Array.prototype.map is a higher-order function
const numbers = [1, 2, 3, 4, 5];
const doubled = numbers.map(function(num) {
  return num * 2;
});
console.log(doubled); // [2, 4, 6, 8, 10]

// Using arrow function syntax
const tripled = numbers.map(num => num * 3);
console.log(tripled); // [3, 6, 9, 12, 15]

// Custom higher-order function
function applyOperation(numbers, operation) {
  const result = [];
  for (let i = 0; i < numbers.length; i++) {
    result.push(operation(numbers[i]));
  }
  return result;
}

const squared = applyOperation(numbers, num => num * num);
console.log(squared); // [1, 4, 9, 16, 25]</code></pre>

      <h3>Functions as Return Values</h3>
      <pre><code>// Function factory
function createMultiplier(factor) {
  return function(number) {
    return number * factor;
  };
}

const double = createMultiplier(2);
const triple = createMultiplier(3);

console.log(double(5)); // 10
console.log(triple(5)); // 15

// Practical example: Creating a greeting function
function createGreeter(greeting) {
  return function(name) {
    return \`\${greeting}, \${name}!\`;
  };
}

const sayHello = createGreeter('Hello');
const sayHi = createGreeter('Hi');

console.log(sayHello('John')); // "Hello, John!"
console.log(sayHi('Sarah')); // "Hi, Sarah!"</code></pre>

      <h3>Common Built-in Higher-Order Functions</h3>
      <p>JavaScript arrays have several built-in higher-order functions:</p>
      <pre><code>const numbers = [1, 2, 3, 4, 5];

// map: Transform each element
const doubled = numbers.map(num => num * 2);
// [2, 4, 6, 8, 10]

// filter: Keep elements that pass a test
const evens = numbers.filter(num => num % 2 === 0);
// [2, 4]

// reduce: Accumulate values
const sum = numbers.reduce((total, num) => total + num, 0);
// 15

// forEach: Perform an action for each element
numbers.forEach(num => console.log(num));
// Logs each number

// find: Get the first element that passes a test
const firstEven = numbers.find(num => num % 2 === 0);
// 2

// some: Check if at least one element passes a test
const hasEven = numbers.some(num => num % 2 === 0);
// true

// every: Check if all elements pass a test
const allEven = numbers.every(num => num % 2 === 0);
// false</code></pre>

      <h3>Advanced Patterns with Higher-Order Functions</h3>
      <h4>1. Function Composition</h4>
      <pre><code>// Compose two functions
function compose(f, g) {
  return function(x) {
    return f(g(x));
  };
}

const addOne = x => x + 1;
const double = x => x * 2;

const addOneThenDouble = compose(double, addOne);
const doubleThenAddOne = compose(addOne, double);

console.log(addOneThenDouble(3)); // (3 + 1) * 2 = 8
console.log(doubleThenAddOne(3)); // (3 * 2) + 1 = 7

// More general compose function
function composeMultiple(...functions) {
  return functions.reduce((acc, fn) => {
    return (...args) => acc(fn(...args));
  });
}</code></pre>

      <h4>2. Currying</h4>
      <pre><code>// Converting a function with multiple arguments into a sequence of functions
function curry(fn) {
  return function curried(...args) {
    if (args.length >= fn.length) {
      return fn.apply(this, args);
    } else {
      return function(...moreArgs) {
        return curried.apply(this, args.concat(moreArgs));
      };
    }
  };
}

function add(a, b, c) {
  return a + b + c;
}

const curriedAdd = curry(add);

console.log(curriedAdd(1)(2)(3)); // 6
console.log(curriedAdd(1, 2)(3)); // 6
console.log(curriedAdd(1)(2, 3)); // 6
console.log(curriedAdd(1, 2, 3)); // 6</code></pre>

      <h4>3. Partial Application</h4>
      <pre><code>// Fixing a number of arguments to a function
function partial(fn, ...fixedArgs) {
  return function(...remainingArgs) {
    return fn.apply(this, [...fixedArgs, ...remainingArgs]);
  };
}

function greet(greeting, name) {
  return \`\${greeting}, \${name}!\`;
}

const sayHello = partial(greet, 'Hello');
console.log(sayHello('John')); // "Hello, John!"</code></pre>

      <h3>Practical Applications</h3>
      <h4>1. Memoization</h4>
      <pre><code>function memoize(fn) {
  const cache = {};
  return function(...args) {
    const key = JSON.stringify(args);
    if (cache[key]) {
      console.log('Returning from cache');
      return cache[key];
    }
    const result = fn.apply(this, args);
    cache[key] = result;
    return result;
  };
}

const expensiveCalculation = (n) => {
  console.log('Computing...');
  return n * n;
};

const memoizedCalc = memoize(expensiveCalculation);

console.log(memoizedCalc(4)); // Computing... 16
console.log(memoizedCalc(4)); // Returning from cache 16</code></pre>

      <h4>2. Event Handling</h4>
      <pre><code>function debounce(fn, delay) {
  let timeoutId;
  return function(...args) {
    clearTimeout(timeoutId);
    timeoutId = setTimeout(() => {
      fn.apply(this, args);
    }, delay);
  };
}

const handleSearch = debounce(function(query) {
  console.log('Searching for:', query);
  // API call or search logic
}, 300);

// In a real app, this might be connected to an input event
handleSearch('a');
handleSearch('ap');
handleSearch('app');
// Only 'app' will be logged after 300ms</code></pre>

      <h3>Benefits of Higher-Order Functions</h3>
      <ul>
        <li><strong>Abstraction</strong>: Hide implementation details and focus on what to do rather than how</li>
        <li><strong>Reusability</strong>: Create generic functions that can be specialized for different use cases</li>
        <li><strong>Composition</strong>: Build complex behavior by combining simpler functions</li>
        <li><strong>Declarative code</strong>: Express what the program should accomplish rather than how</li>
        <li><strong>Cleaner code</strong>: Reduce repetition and improve readability</li>
      </ul>

      <h3>Conclusion</h3>
      <p>Higher-order functions are a cornerstone of functional programming in JavaScript. They enable powerful patterns like composition, currying, and memoization that can make your code more modular, reusable, and expressive. By mastering higher-order functions, you'll be able to write more elegant solutions to complex problems and take full advantage of JavaScript's functional capabilities.</p>
    `;
