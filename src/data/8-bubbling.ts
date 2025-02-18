export const bubblingContent = `
      <h2>Event Bubbling in JavaScript</h2>
      <p>Event bubbling is a mechanism in the DOM where an event triggered on a nested element "bubbles up" through its parent elements in the DOM tree. Understanding this concept is crucial for proper event handling in web applications.</p>
      
      <h3>How Bubbling Works</h3>
      <pre><code><!-- HTML Structure -->
<div id="grandparent">
  <div id="parent">
    <button id="child">Click me!</button>
  </div>
</div>

// JavaScript
document.getElementById('child').addEventListener('click', e => {
  console.log('Child clicked');
});

document.getElementById('parent').addEventListener('click', e => {
  console.log('Parent clicked');
});

document.getElementById('grandparent').addEventListener('click', e => {
  console.log('Grandparent clicked');
});</code></pre>

      <h3>Stopping Propagation</h3>
      <pre><code>document.getElementById('child').addEventListener('click', e => {
  e.stopPropagation(); // Event stops here
  console.log('Child clicked');
});</code></pre>

      <h3>Event Delegation</h3>
      <p>Event bubbling enables event delegation, a powerful pattern for handling events on multiple elements:</p>
      <pre><code>const todoList = document.getElementById('todo-list');

todoList.addEventListener('click', e => {
  if (e.target.matches('.delete-btn')) {
    const todoItem = e.target.closest('.todo-item');
    todoItem.remove();
  }
  
  if (e.target.matches('.edit-btn')) {
    const todoItem = e.target.closest('.todo-item');
    editTodo(todoItem);
  }
});</code></pre>

      <h3>Capturing Phase</h3>
      <p>Events in DOM have three phases: capturing, target, and bubbling. You can listen to the capturing phase by setting the third parameter to true:</p>
      <pre><code>element.addEventListener('click', handler, true); // Capturing phase
element.addEventListener('click', handler, false); // Bubbling phase (default)</code></pre>

      <h3>Best Practices</h3>
      <ul>
        <li>Use event delegation for dynamic elements</li>
        <li>Be cautious with stopPropagation()</li>
        <li>Consider both capturing and bubbling phases</li>
        <li>Use event.target vs event.currentTarget appropriately</li>
      </ul>

      <h3>Common Gotchas</h3>
      <pre><code>// Multiple handlers on same element
element.addEventListener('click', e => {
  e.stopPropagation();
  console.log('First handler');
});

element.addEventListener('click', e => {
  // This still runs! stopPropagation only affects parent elements
  console.log('Second handler');
});

// Use stopImmediatePropagation() to prevent other handlers
element.addEventListener('click', e => {
  e.stopImmediatePropagation();
  console.log('Only this handler runs');
});</code></pre>

      <h3>Real-world Example</h3>
      <pre><code>class DynamicTable {
  constructor(tableId) {
    this.table = document.getElementById(tableId);
    this.setupEventHandlers();
  }

  setupEventHandlers() {
    this.table.addEventListener('click', e => {
      const target = e.target;
      
      if (target.matches('.sort-header')) {
        const column = target.dataset.column;
        this.sortBy(column);
      }
      
      if (target.matches('.row-action')) {
        const row = target.closest('tr');
        const action = target.dataset.action;
        this.handleRowAction(row, action);
      }
    });
  }
}</code></pre>
    `