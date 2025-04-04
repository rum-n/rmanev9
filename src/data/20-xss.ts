export const xssContent = `
      <p>Cross-Site Scripting (XSS) is one of the most common web application security vulnerabilities. It allows attackers to inject client-side scripts into web pages viewed by other users, potentially compromising sensitive data and user sessions.</p>
      
      <h3>Types of XSS Attacks</h3>
      <ul>
        <li><strong>Reflected XSS</strong>: Malicious script is reflected off a web server, such as in search results or error messages</li>
        <li><strong>Stored XSS</strong>: Malicious script is stored on the target server, such as in a database, message forum, or comment field</li>
        <li><strong>DOM-based XSS</strong>: Vulnerability exists in client-side code rather than server-side code</li>
      </ul>

      <h3>Example of an XSS Vulnerability</h3>
      <pre><code>// Vulnerable code
function displayUserInput(input) {
  // Directly inserting user input into the DOM
  document.getElementById('output').innerHTML = input;
}

// User input: &lt;script&gt;alert('XSS');&lt;/script&gt;
// This would execute the script when displayed</code></pre>

      <h3>XSS Prevention Techniques</h3>
      <h4>1. Output Encoding</h4>
      <p>Always encode user-generated content before displaying it in the browser.</p>
      <pre><code>// Safe approach using encoding
function displayUserInput(input) {
  // Create a text node instead of using innerHTML
  const textNode = document.createTextNode(input);
  document.getElementById('output').appendChild(textNode);
}

// Alternative using a helper function
function escapeHTML(str) {
  return str
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;');
}

function displayUserInput(input) {
  document.getElementById('output').innerHTML = escapeHTML(input);
}</code></pre>

      <h4>2. Content Security Policy (CSP)</h4>
      <p>Implement CSP headers to restrict the sources from which content can be loaded.</p>
      <pre><code>// Example CSP header
Content-Security-Policy: default-src 'self'; script-src 'self' https://trusted-cdn.com;</code></pre>

      <h4>3. Input Validation</h4>
      <p>Validate user input on both client and server sides.</p>
      <pre><code>function validateInput(input) {
  // Remove potentially dangerous characters or patterns
  return input.replace(/<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi, '');
}

// Better approach: whitelist validation
function validateUsername(username) {
  // Only allow alphanumeric characters and underscores
  return /^[a-zA-Z0-9_]+$/.test(username);
}</code></pre>

      <h4>4. Use Modern Frameworks</h4>
      <p>Modern JavaScript frameworks like React, Angular, and Vue automatically escape content by default.</p>
      <pre><code>// React example - automatically escapes content
function UserProfile({ userData }) {
  return (
    <div>
      <h2>{userData.name}</h2>
      <p>{userData.bio}</p>
    </div>
  );
}

// To intentionally render HTML in React (use with caution)
function UserProfile({ userData }) {
  return (
    <div>
      <h2>{userData.name}</h2>
      <div dangerouslySetInnerHTML={{ __html: sanitizeHtml(userData.bio) }} />
    </div>
  );
}</code></pre>

      <h3>Common XSS Attack Vectors</h3>
      <ul>
        <li>URL parameters and query strings</li>
        <li>Form inputs</li>
        <li>HTTP headers (e.g., User-Agent)</li>
        <li>JSON data parsed and rendered without sanitization</li>
        <li>User-generated content (comments, posts, profiles)</li>
        <li>Third-party libraries with vulnerabilities</li>
      </ul>

      <h3>Real-World XSS Impact</h3>
      <p>XSS attacks can lead to:</p>
      <ul>
        <li>Session hijacking and account takeover</li>
        <li>Data theft (cookies, tokens, sensitive information)</li>
        <li>Keylogging user input</li>
        <li>Phishing attacks</li>
        <li>Website defacement</li>
        <li>Malware distribution</li>
      </ul>

      <h3>Testing for XSS Vulnerabilities</h3>
      <p>Common test payloads include:</p>
      <pre><code>&lt;script&gt;alert('XSS')&lt;/script&gt;
&lt;img src="x" onerror="alert('XSS')"&gt;
&lt;body onload="alert('XSS')"&gt;
javascript:alert('XSS')
&lt;svg/onload=alert('XSS')&gt;</code></pre>

      <h3>Additional Security Measures</h3>
      <ul>
        <li><strong>HTTP-only Cookies</strong>: Prevent JavaScript from accessing cookies</li>
        <li><strong>X-XSS-Protection Header</strong>: Enable browser's built-in XSS filters</li>
        <li><strong>Sanitization Libraries</strong>: Use libraries like DOMPurify to clean user input</li>
        <li><strong>Regular Security Audits</strong>: Conduct penetration testing and code reviews</li>
      </ul>

      <h3>Conclusion</h3>
      <p>XSS remains a critical security concern despite being well-understood. By implementing proper encoding, validation, and security headers, developers can significantly reduce the risk of XSS vulnerabilities in their applications.</p>
    `;
