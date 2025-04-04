export const fpVsOopContent = `
      <p>Two major programming paradigms dominate modern software development: Functional Programming (FP) and Object-Oriented Programming (OOP). Each has its strengths, philosophies, and ideal use cases. Let's explore both approaches and understand when to use each.</p>
      
      <h3>Key Differences</h3>
      <ul>
        <li>Data Handling: FP treats data and behaviors separately, while OOP combines them into objects</li>
        <li>State Management: FP emphasizes immutability, OOP allows for mutable state</li>
        <li>Program Composition: FP focuses on function composition, OOP on object inheritance</li>
        <li>Side Effects: FP aims to eliminate them, OOP encapsulates them</li>
      </ul>

      <h3>Functional Programming Example</h3>
      <pre><code>// Data is separate from behavior
const user = {
  name: "John",
  age: 30,
  email: "john@example.com"
};

// Pure functions to handle data
const getDisplayName = (user) => \`\${user.name} (\${user.age})\`;
const isAdult = (user) => user.age >= 18;
const getEmailDomain = (user) => user.email.split('@')[1];

// Function composition
const getAdultEmailDomain = (user) => 
  isAdult(user) ? getEmailDomain(user) : null;</code></pre>

      <h3>Object-Oriented Example</h3>
      <pre><code>// Data and behavior are combined
class User {
  constructor(name, age, email) {
    this.name = name;
    this.age = age;
    this.email = email;
  }

  getDisplayName() {
    return \`\${this.name} (\${this.age})\`;
  }

  isAdult() {
    return this.age >= 18;
  }

  getEmailDomain() {
    return this.email.split('@')[1];
  }
}

const user = new User("John", 30, "john@example.com");</code></pre>

      <h3>When to Use Each Approach</h3>
      
      <h4>Choose Functional Programming when:</h4>
      <ul>
        <li>Working with data transformations</li>
        <li>Building concurrent systems</li>
        <li>Need high predictability and testability</li>
        <li>Implementing complex algorithms</li>
      </ul>

      <h4>Choose Object-Oriented Programming when:</h4>
      <ul>
        <li>Modeling real-world entities and relationships</li>
        <li>Building large-scale applications with clear hierarchies</li>
        <li>Working with stateful components</li>
        <li>Need strong encapsulation</li>
      </ul>

      <h3>Modern JavaScript: The Best of Both Worlds</h3>
      <pre><code>// Combining FP and OOP approaches
class DataService {
  constructor(data) {
    this.data = data;
  }

  // FP-style immutable transformations
  transform(transformFn) {
    return new DataService(transformFn(this.data));
  }

  // Method chaining with pure functions
  filter(predicate) {
    return this.transform(data => data.filter(predicate));
  }

  map(mapper) {
    return this.transform(data => data.map(mapper));
  }
}

// Usage
const service = new DataService([1, 2, 3, 4])
  .filter(n => n > 2)
  .map(n => n * 2);

// Result: [6, 8]</code></pre>
    `;
