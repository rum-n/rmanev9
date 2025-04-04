export const solidContent = `
      <p>SOLID is an acronym for five design principles that help create maintainable and scalable software. While these principles were originally conceived for object-oriented design, they're valuable in any programming paradigm, including JavaScript.</p>
      
      <h3>S - Single Responsibility Principle (SRP)</h3>
      <p>A class or module should have only one reason to change.</p>
      <pre><code>// Bad: Class handles multiple responsibilities
class User {
  constructor(name) {
    this.name = name;
  }
  
  saveToDatabase() {
    // Database logic here
  }
  
  generateReport() {
    // Reporting logic here
  }
}

// Good: Separated responsibilities
class User {
  constructor(name) {
    this.name = name;
  }
}

class UserRepository {
  saveUser(user) {
    // Database logic here
  }
}

class UserReportGenerator {
  generateReport(user) {
    // Reporting logic here
  }
}</code></pre>

      <h3>O - Open/Closed Principle</h3>
      <p>Software entities should be open for extension but closed for modification.</p>
      <pre><code>// Bad: Need to modify class to add new shapes
class AreaCalculator {
  calculateArea(shape) {
    if (shape.type === 'rectangle') {
      return shape.width * shape.height;
    } else if (shape.type === 'circle') {
      return Math.PI * shape.radius ** 2;
    }
  }
}

// Good: Extended through inheritance
class Shape {
  calculateArea() {
    throw new Error('Method not implemented');
  }
}

class Rectangle extends Shape {
  constructor(width, height) {
    super();
    this.width = width;
    this.height = height;
  }
  
  calculateArea() {
    return this.width * this.height;
  }
}

class Circle extends Shape {
  constructor(radius) {
    super();
    this.radius = radius;
  }
  
  calculateArea() {
    return Math.PI * this.radius ** 2;
  }
}</code></pre>

      <h3>L - Liskov Substitution Principle</h3>
      <p>Objects should be replaceable with their subtypes without affecting the correctness of the program.</p>
      <pre><code>class Bird {
  fly() {
    return "Flying...";
  }
}

// Bad: Penguin can't fly, violates LSP
class Penguin extends Bird {
  fly() {
    throw new Error("Can't fly!");
  }
}

// Good: Restructured hierarchy
class Bird {
  move() {
    return "Moving...";
  }
}

class FlyingBird extends Bird {
  fly() {
    return "Flying...";
  }
}

class SwimmingBird extends Bird {
  swim() {
    return "Swimming...";
  }
}</code></pre>

      <h3>I - Interface Segregation Principle</h3>
      <p>Clients should not be forced to depend on interfaces they don't use.</p>
      <pre><code>// Bad: One large interface
interface Worker {
  work();
  eat();
  sleep();
}

// Good: Segregated interfaces
interface Workable {
  work();
}

interface Eatable {
  eat();
}

interface Sleepable {
  sleep();
}

class Human implements Workable, Eatable, Sleepable {
  work() { /* ... */ }
  eat() { /* ... */ }
  sleep() { /* ... */ }
}

class Robot implements Workable {
  work() { /* ... */ }
}</code></pre>

      <h3>D - Dependency Inversion Principle</h3>
      <p>High-level modules should not depend on low-level modules. Both should depend on abstractions.</p>
      <pre><code>// Bad: Direct dependency on low-level module
class NotificationService {
  constructor() {
    this.emailSender = new EmailSender();
  }
  
  send(message) {
    this.emailSender.sendEmail(message);
  }
}

// Good: Depends on abstraction
class NotificationService {
  constructor(messageSender) {
    this.messageSender = messageSender;
  }
  
  send(message) {
    this.messageSender.sendMessage(message);
  }
}

// Can now use any type of sender
const emailSender = new EmailSender();
const smsSender = new SMSSender();
const notificationService = new NotificationService(emailSender);</code></pre>

      <h3>Benefits of SOLID</h3>
      <ul>
        <li>More maintainable code</li>
        <li>Easier to extend and modify</li>
        <li>Better testability</li>
        <li>Reduced coupling between components</li>
        <li>More reusable code</li>
      </ul>
    `;
