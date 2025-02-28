export const designPrinciplesContent = `
      <h2>Design Principles in Software Development</h2>
      <p>Design principles are fundamental guidelines that help developers create maintainable, scalable, and robust software. These principles have evolved over decades of software engineering practice and represent collective wisdom about what makes good code.</p>
      
      <h3>Core Design Principles</h3>
      <ul>
        <li>DRY (Don't Repeat Yourself): Avoid duplication in code</li>
        <li>KISS (Keep It Simple, Stupid): Simplicity should be a key goal</li>
        <li>YAGNI (You Aren't Gonna Need It): Don't add functionality until necessary</li>
        <li>Separation of Concerns: Divide your program into distinct sections</li>
        <li>Law of Demeter: Minimize dependencies between components</li>
      </ul>

      <h3>DRY (Don't Repeat Yourself)</h3>
      <p>The DRY principle states that "Every piece of knowledge must have a single, unambiguous, authoritative representation within a system."</p>
      <pre><code>// Violating DRY
function validateEmail(email) {
  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return regex.test(email);
}

function validateUserForm(user) {
  // Duplicating email validation logic
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(user.email)) {
    return false;
  }
  // Other validations...
  return true;
}

// Following DRY
function validateEmail(email) {
  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return regex.test(email);
}

function validateUserForm(user) {
  if (!validateEmail(user.email)) {
    return false;
  }
  // Other validations...
  return true;
}</code></pre>

      <h3>KISS (Keep It Simple, Stupid)</h3>
      <p>The KISS principle advocates for simplicity in design and implementation. Simple code is easier to understand, maintain, and debug.</p>
      <pre><code>// Overly complex
function getDaysBetweenDates(startDate, endDate) {
  let date1 = new Date(startDate);
  let date2 = new Date(endDate);
  
  // Adjust for timezone differences
  date1.setHours(0, 0, 0, 0);
  date2.setHours(0, 0, 0, 0);
  
  // Calculate difference in milliseconds
  const diffTime = Math.abs(date2 - date1);
  
  // Convert to days and handle edge cases
  const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
  
  return diffDays;
}

// Simpler approach
function getDaysBetweenDates(startDate, endDate) {
  const oneDay = 24 * 60 * 60 * 1000; // hours*minutes*seconds*milliseconds
  const start = new Date(startDate);
  const end = new Date(endDate);
  
  return Math.round(Math.abs((start - end) / oneDay));
}</code></pre>

      <h3>YAGNI (You Aren't Gonna Need It)</h3>
      <p>YAGNI suggests that developers should not add functionality until it is necessary. This prevents overengineering and keeps the codebase lean.</p>
      <pre><code>// Violating YAGNI
class User {
  constructor(name, email) {
    this.name = name;
    this.email = email;
    this.preferences = {};
    this.socialProfiles = {}; // Not needed yet
    this.paymentMethods = [];  // Not needed yet
    this.subscriptionStatus = 'none'; // Not needed yet
  }
  
  // Methods for features we don't need yet
  addPaymentMethod() { /* ... */ }
  updateSubscription() { /* ... */ }
  connectSocialProfile() { /* ... */ }
}

// Following YAGNI
class User {
  constructor(name, email) {
    this.name = name;
    this.email = email;
    this.preferences = {};
  }
  
  // Only implement what's currently needed
}</code></pre>

      <h3>Law of Demeter (Principle of Least Knowledge)</h3>
      <p>The Law of Demeter states that a unit should have limited knowledge about other units and should only talk to its immediate friends.</p>
      <pre><code>// Violating Law of Demeter
function processPayment(user) {
  // Reaching through multiple objects
  const amount = user.account.wallet.balance;
  
  if (amount >= 100) {
    user.account.wallet.deduct(100);
    return true;
  }
  return false;
}

// Following Law of Demeter
function processPayment(user) {
  if (user.canAfford(100)) {
    user.deduct(100);
    return true;
  }
  return false;
}

// User class has methods that encapsulate the details
class User {
  canAfford(amount) {
    return this.account.getBalance() >= amount;
  }
  
  deduct(amount) {
    this.account.deduct(amount);
  }
}</code></pre>

      <h3>Relationship with SOLID Principles</h3>
      <p>These design principles complement the SOLID principles (Single Responsibility, Open/Closed, Liskov Substitution, Interface Segregation, Dependency Inversion) that you've already explored in a previous post.</p>
      
      <h3>Benefits of Following Design Principles</h3>
      <ul>
        <li>Improved code maintainability</li>
        <li>Reduced complexity</li>
        <li>Easier onboarding for new team members</li>
        <li>Fewer bugs and easier debugging</li>
        <li>More adaptable codebase for future changes</li>
      </ul>

      <h3>When to Break the Rules</h3>
      <p>While these principles provide valuable guidance, they shouldn't be followed blindly. Sometimes, practical considerations may require deviating from these principles:</p>
      <ul>
        <li>Performance optimizations might require some duplication</li>
        <li>Legacy code integration might limit your design options</li>
        <li>Tight deadlines might necessitate pragmatic compromises</li>
        <li>Domain-specific requirements might call for specialized approaches</li>
      </ul>
    `