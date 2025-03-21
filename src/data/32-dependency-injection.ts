export const dependencyInjectionContent = `
<p>Dependency Injection (DI) is a design pattern that implements Inversion of Control (IoC) for managing dependencies between components. It's a fundamental concept in modern software development that promotes loose coupling, better testability, and more maintainable code.</p>

<h2>What is Dependency Injection?</h2>

<p>At its core, dependency injection means providing a component with its dependencies rather than having the component create them itself. Instead of a class creating its own dependencies, they are "injected" from the outside.</p>

<h3>Traditional Approach (Without DI):</h3>

<pre><code class="language-javascript">class UserService {
  constructor() {
    // Service creates its own dependency
    this.database = new Database();
  }

  getUser(id) {
    return this.database.query('users', id);
  }
}

const userService = new UserService();</code></pre>

<h3>With Dependency Injection:</h3>

<pre><code class="language-javascript">class UserService {
  constructor(database) {
    // Dependency is injected
    this.database = database;
  }

  getUser(id) {
    return this.database.query('users', id);
  }
}

const database = new Database();
const userService = new UserService(database);</code></pre>

<h2>Benefits of Dependency Injection</h2>

<ol>
  <li><strong>Loose Coupling</strong>: Components are not tightly bound to their dependencies, making the system more flexible and maintainable.</li>

  <li><strong>Testability</strong>: Dependencies can be easily mocked during testing:</li>
</ol>

<pre><code class="language-javascript">class MockDatabase {
  query() {
    return Promise.resolve({ id: 1, name: 'Test User' });
  }
}

const mockDb = new MockDatabase();
const userService = new UserService(mockDb);
// Now you can test UserService without a real database</code></pre>

<ol start="3">
  <li><strong>Reusability</strong>: Components can be reused with different implementations of their dependencies.</li>
  <li><strong>Maintainability</strong>: Dependencies are explicit and centralized, making the code easier to understand and modify.</li>
</ol>

<h2>Types of Dependency Injection</h2>

<h3>1. Constructor Injection</h3>

<p>The most common form, where dependencies are provided through the constructor:</p>

<pre><code class="language-javascript">class UserController {
  constructor(userService, logger) {
    this.userService = userService;
    this.logger = logger;
  }
}</code></pre>

<h3>2. Setter Injection</h3>

<p>Dependencies are set through setter methods:</p>

<pre><code class="language-javascript">class UserController {
  setUserService(userService) {
    this.userService = userService;
  }

  setLogger(logger) {
    this.logger = logger;
  }
}</code></pre>

<h3>3. Property Injection</h3>

<p>Dependencies are set directly on properties:</p>

<pre><code class="language-javascript">const userController = new UserController();
userController.userService = new UserService();
userController.logger = new Logger();</code></pre>

<h2>DI Containers</h2>

<p>In modern applications, DI is often managed by a container that handles the creation and injection of dependencies:</p>

<pre><code class="language-javascript">class Container {
  constructor() {
    this.services = new Map();
  }

  register(name, instance) {
    this.services.set(name, instance);
  }

  resolve(name) {
    return this.services.get(name);
  }
}

// Usage
const container = new Container();
container.register('database', new Database());
container.register('userService', new UserService(container.resolve('database')));</code></pre>

<h2>Real-World Example</h2>

<p>Here's a practical example using TypeScript and a simple DI container:</p>

<pre><code class="language-typescript">interface Logger {
  log(message: string): void;
}

interface UserRepository {
  findById(id: string): Promise<User>;
}

class UserService {
  constructor(
    private repository: UserRepository,
    private logger: Logger
  ) {}

  async getUser(id: string) {
    this.logger.log(\`Fetching user \${id}\`);
    return this.repository.findById(id);
  }
}

// Usage with DI container
const container = new Container();
container.register('logger', new ConsoleLogger());
container.register('userRepo', new PostgresUserRepository());
container.register('userService', new UserService(
  container.resolve('userRepo'),
  container.resolve('logger')
));</code></pre>

<h2>Best Practices</h2>

<ol>
  <li><strong>Favor Constructor Injection</strong>: It makes dependencies explicit and ensures they're available throughout the object's lifecycle.</li>
  <li><strong>Depend on Abstractions</strong>: Use interfaces or abstract classes rather than concrete implementations.</li>
  <li><strong>Single Responsibility</strong>: Keep your classes focused and avoid having too many dependencies.</li>
  <li><strong>Avoid Service Locator</strong>: While similar to DI, the Service Locator pattern can hide dependencies and make code harder to test.</li>
</ol>

<h2>Popular DI Frameworks</h2>

<ul>
  <li><strong>Angular</strong>: Built-in dependency injection system</li>
  <li><strong>InversifyJS</strong>: A powerful DI container for TypeScript</li>
  <li><strong>TypeDI</strong>: Dependency injection for TypeScript</li>
  <li><strong>Awilix</strong>: Dependency injection for Node.js</li>
</ul>

<h2>Conclusion</h2>

<p>Dependency Injection is a powerful pattern that, when used correctly, can significantly improve your code's quality, testability, and maintainability. While it may seem complex at first, the benefits it brings to larger applications make it well worth the initial learning curve.</p>

<p>Remember: The goal of DI is not just to move object creation around—it's to make your code more modular, testable, and maintainable by reducing tight coupling between components.</p>
`;
