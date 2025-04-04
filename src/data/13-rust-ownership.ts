export const rustOwnershipContent = `
      <p>Ownership is one of Rust's most unique and important features. It enables Rust to make memory safety guarantees without needing a garbage collector.</p>
      
      <h3>Basic Rules of Ownership</h3>
      <ul>
        <li>Each value in Rust has a variable that's called its owner</li>
        <li>There can only be one owner at a time</li>
        <li>When the owner goes out of scope, the value will be dropped</li>
      </ul>

      <h3>Simple Example</h3>
      <pre><code>fn main() {
    // s1 is valid here
    let s1 = String::from("hello");
    
    // s1's value moves into s2
    let s2 = s1;
    
    // s1 is no longer valid
    // println!("{}", s1); // This would cause a compile error!
    
    println!("{}", s2); // This works fine
}</code></pre>

      <h3>Ownership with Functions</h3>
      <pre><code>fn main() {
    let s = String::from("hello");
    
    takes_ownership(s); // s's value moves into the function
    // s is no longer valid here
    
    let x = 5;
    makes_copy(x); // x would still be valid here
}

fn takes_ownership(some_string: String) {
    println!("{}", some_string);
} // some_string goes out of scope and drop is called

fn makes_copy(some_integer: i32) {
    println!("{}", some_integer);
} // some_integer goes out of scope, nothing special happens</code></pre>

      <h3>References and Borrowing</h3>
      <pre><code>fn main() {
    let s1 = String::from("hello");
    
    let len = calculate_length(&s1); // We borrow s1
    
    println!("The length of '{}' is {}.", s1, len);
}

fn calculate_length(s: &String) -> usize {
    s.len()
} // s goes out of scope, but because it's a reference,
  // nothing happens to the value it refers to</code></pre>

      <h3>Mutable References</h3>
      <pre><code>fn main() {
    let mut s = String::from("hello");
    
    change(&mut s);
    println!("{}", s); // Prints "hello world"
}

fn change(some_string: &mut String) {
    some_string.push_str(" world");
}</code></pre>

      <h3>Key Points to Remember</h3>
      <ul>
        <li>Only one mutable reference to a particular piece of data in a particular scope</li>
        <li>Cannot have a mutable reference while we have an immutable one</li>
        <li>References must always be valid</li>
        <li>The scope of a reference cannot outlive the scope of its owner</li>
      </ul>

      <h3>Common Ownership Patterns</h3>
      <pre><code>// Clone when you need a deep copy
let s1 = String::from("hello");
let s2 = s1.clone();

// Return ownership when needed
fn gives_ownership() -> String {
    String::from("hello")
}

// Take and return ownership
fn take_and_give_back(a_string: String) -> String {
    a_string
}</code></pre>
    `;
