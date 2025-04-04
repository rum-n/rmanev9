export const tddContent = `
      <p>Test-Driven Development is a software development approach where you write tests before writing the actual code. This methodology follows a simple cycle: Red (write a failing test), Green (make the test pass), and Refactor (improve the code while keeping tests green).</p>
      
      <h3>The TDD Cycle</h3>
      <ul>
        <li>Red: Write a test that fails</li>
        <li>Green: Write minimal code to make the test pass</li>
        <li>Refactor: Improve the code without changing its behavior</li>
      </ul>

      <h3>Basic Example</h3>
      <pre><code>// Step 1: Red - Write a failing test
import { calculateTotal } from './cart';

describe('Shopping Cart', () => {
  test('should calculate total with tax', () => {
    const items = [
      { price: 100, quantity: 2 },
      { price: 50, quantity: 1 }
    ];
    
    expect(calculateTotal(items, 0.1)).toBe(275); // 250 + 10% tax
  });
});</code></pre>

      <pre><code>// Step 2: Green - Write minimal code to pass
export function calculateTotal(items, taxRate) {
  const subtotal = items.reduce((total, item) => 
    total + (item.price * item.quantity), 0);
  return subtotal + (subtotal * taxRate);
}</code></pre>

      <pre><code>// Step 3: Refactor - Improve code while keeping tests green
export function calculateTotal(items, taxRate) {
  const calculateSubtotal = items => 
    items.reduce((total, item) => 
      total + (item.price * item.quantity), 0);
      
  const calculateTax = (amount, rate) => amount * rate;
  
  const subtotal = calculateSubtotal(items);
  const tax = calculateTax(subtotal, taxRate);
  
  return subtotal + tax;
}</code></pre>

      <h3>Benefits of TDD</h3>
      <ul>
        <li>Better design: Writing tests first forces you to think about interface before implementation</li>
        <li>Reliable documentation: Tests serve as living documentation of code behavior</li>
        <li>Fewer bugs: Catching issues early in the development cycle</li>
        <li>Confidence in refactoring: Tests ensure you don't break existing functionality</li>
      </ul>

      <h3>Advanced Example: Testing Async Code</h3>
      <pre><code>// Testing async user service
describe('UserService', () => {
  test('should fetch user data', async () => {
    // Arrange
    const userId = '123';
    const mockUser = { id: userId, name: 'John' };
    
    // Act
    const user = await UserService.fetchUser(userId);
    
    // Assert
    expect(user).toEqual(mockUser);
  });

  test('should handle user not found', async () => {
    // Arrange
    const userId = 'nonexistent';
    
    // Act & Assert
    await expect(
      UserService.fetchUser(userId)
    ).rejects.toThrow('User not found');
  });
});</code></pre>

      <h3>Best Practices</h3>
      <ul>
        <li>Keep tests simple and focused</li>
        <li>Follow the AAA pattern: Arrange, Act, Assert</li>
        <li>Test behavior, not implementation</li>
        <li>Maintain test independence</li>
        <li>Use descriptive test names</li>
      </ul>
    `;
