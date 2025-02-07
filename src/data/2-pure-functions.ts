export const pureFunctionsContent = `
      <h2>What is a Pure Function?</h2>
      <p>A pure function is a function that, given the same inputs, will always return the same output and has no side effects. It's a fundamental concept in functional programming that makes code more predictable, testable, and easier to reason about.</p>
      
      <h3>Key Characteristics</h3>
      <ul>
        <li>Deterministic: Same inputs always produce same outputs</li>
        <li>No side effects: Doesn't modify external state</li>
        <li>No external dependencies: Only relies on its input parameters</li>
      </ul>

      <h3>Example</h3>
      <pre><code>// Pure function
function add(a, b) {
  return a + b;
}

// Impure function (has side effects)
let total = 0;
function addToTotal(value) {
  total += value;  // Modifies external state
  return total;
}

// Pure function
function formatName(firstName, lastName) {
  return \`\${firstName} \${lastName}\`;
}

// Impure function (depends on external state)
const config = { titleCase: true };
function formatNameWithConfig(firstName, lastName) {
  if (config.titleCase) {
    return \`\${firstName.toUpperCase()} \${lastName.toUpperCase()}\`;
  }
  return \`\${firstName} \${lastName}\`;
}</code></pre>
      
      <h3>Benefits of Pure Functions</h3>
      <ul>
        <li>Easier to test: Input/output relationship is clear and consistent</li>
        <li>Cacheable: Results can be memoized since outputs are predictable</li>
        <li>Self-documenting: Function behavior is determined solely by its inputs</li>
        <li>Concurrent code: Pure functions can safely run in parallel</li>
      </ul>

      <h3>Common Use Cases</h3>
      <p>Pure functions are especially useful in:</p>
      <ul>
        <li>Data transformations</li>
        <li>Mathematical computations</li>
        <li>Functional programming patterns</li>
        <li>Redux reducers</li>
        <li>React components (ideally)</li>
      </ul>

      <h3>Converting Impure to Pure</h3>
      <pre><code>// Impure function
function calculateTotal(items) {
  let total = 0;
  for(let i = 0; i < items.length; i++) {
    total += items[i].price * items[i].quantity;
  }
  items.forEach(item => item.total = item.price * item.quantity); // Side effect!
  return total;
}

// Pure version
function calculateTotal(items) {
  return items.reduce((total, item) => 
    total + (item.price * item.quantity), 0);
}

function calculateItemTotals(items) {
  return items.map(item => ({
    ...item,
    total: item.price * item.quantity
  }));
}</code></pre>
    `
