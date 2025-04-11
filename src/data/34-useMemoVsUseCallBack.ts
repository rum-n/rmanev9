export const useMemoVsUseCallbackContent = `
<p>In React, <code>useMemo</code> and <code>useCallback</code> are hooks designed to optimize performance by memoizing values and functions, respectively. While they may seem similar, they serve distinct purposes and are used in different scenarios.</p>

<h2>What is <code>useMemo</code>?</h2>

<p><code>useMemo</code> is used to memoize the result of a computation. It prevents expensive calculations from being re-executed unnecessarily by caching the computed value and recomputing it only when its dependencies change.</p>

<h3>Example:</h3>

<pre><code class="language-javascript">import React, { useMemo } from 'react';

function ExpensiveComponent({ value }) {
  const computedValue = useMemo(() => {
    // Expensive computation
    return value * 1000;
  }, [value]);

  return <div>{computedValue}</div>;
}</code></pre>

<h2>What is <code>useCallback</code>?</h2>

<p><code>useCallback</code> is used to memoize a function. It ensures that the same function instance is returned unless its dependencies change. This is particularly useful when passing functions as props to child components to prevent unnecessary re-renders.</p>

<h3>Example:</h3>

<pre><code class="language-javascript">import React, { useCallback } from 'react';

function ParentComponent() {
  const handleClick = useCallback(() => {
    console.log('Button clicked');
  }, []);

  return <ChildComponent onClick={handleClick} />;
}

function ChildComponent({ onClick }) {
  return <button onClick={onClick}>Click Me</button>;
}</code></pre>

<h2>Key Differences</h2>

<ol>
  <li><strong>Purpose:</strong> 
    <ul>
      <li><code>useMemo</code> memoizes the result of a computation.</li>
      <li><code>useCallback</code> memoizes a function.</li>
    </ul>
  </li>
  <li><strong>Return Value:</strong> 
    <ul>
      <li><code>useMemo</code> returns the computed value.</li>
      <li><code>useCallback</code> returns the memoized function.</li>
    </ul>
  </li>
  <li><strong>Use Case:</strong> 
    <ul>
      <li>Use <code>useMemo</code> for expensive calculations that depend on changing inputs.</li>
      <li>Use <code>useCallback</code> to prevent re-creation of functions passed as props.</li>
    </ul>
  </li>
</ol>

<h2>Conclusion</h2>

<p>Both <code>useMemo</code> and <code>useCallback</code> are valuable tools for optimizing React applications. Understanding their differences and when to use each can help you write more efficient and performant code.</p>
`;
