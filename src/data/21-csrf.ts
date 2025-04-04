export const csrfContent = `
      <p>Cross-Site Request Forgery (CSRF) is a type of security vulnerability that allows an attacker to trick users into performing unwanted actions on a website where they're already authenticated. Unlike XSS, which exploits the trust a user has in a particular site, CSRF exploits the trust that a site has in a user's browser.</p>
      
      <h3>How CSRF Attacks Work</h3>
      <p>A typical CSRF attack follows these steps:</p>
      <ol>
        <li>The victim logs into a legitimate website (e.g., a banking site) and receives a session cookie</li>
        <li>Without logging out, the victim visits a malicious website</li>
        <li>The malicious site contains code that submits a form or sends a request to the legitimate website</li>
        <li>The victim's browser automatically includes their session cookies with the request</li>
        <li>The legitimate website processes the request as if the victim intentionally submitted it</li>
      </ol>

      <h3>CSRF Prevention Techniques</h3>
      <h4>1. CSRF Tokens</h4>
      <p>The most common defense is to include a unique, unpredictable token with each request:</p>
      <pre><code>// Server-side (Node.js/Express example)
app.use(csrf());

app.get('/form', (req, res) => {
  // Generate and include CSRF token in the form
  res.render('form', { csrfToken: req.csrfToken() });
});
</code></pre>

      <h4>2. Same-Site Cookies</h4>
      <pre><code>// Set cookies with SameSite attribute
res.cookie('sessionId', 'abc123', { 
  httpOnly: true, 
  secure: true,
  sameSite: 'strict' // or 'lax'
});</code></pre>

      <h4>3. Custom Request Headers</h4>
      <p>For AJAX requests, using custom headers that simple forms can't add:</p>
      <pre><code>// Client-side AJAX request with custom header
fetch('/api/data', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
    'X-Requested-With': 'XMLHttpRequest' // Custom header
  },
  body: JSON.stringify(data)
});

// Server-side verification
if (req.headers['x-requested-with'] !== 'XMLHttpRequest') {
  return res.status(403).send('CSRF validation failed');
}</code></pre>

      <h4>4. Double Submit Cookie Pattern</h4>
      <pre><code>// Server sets a random token in a cookie
res.cookie('csrfToken', randomToken);

// Client includes both the cookie and a matching parameter
<form action="/submit" method="POST">
  <input type="hidden" name="csrf" value="{{randomToken}}" />
  <!-- other form fields -->
</form>

// Server verifies that the cookie and parameter match
if (req.cookies.csrfToken !== req.body.csrf) {
  return res.status(403).send('CSRF validation failed');
}</code></pre>

      <h3>CSRF vs. XSS</h3>
      <table>
        <tr>
          <th>CSRF</th>
          <th>XSS</th>
        </tr>
        <tr>
          <td>Exploits the trust a site has in a user's browser</td>
          <td>Exploits the trust a user has in a particular site</td>
        </tr>
        <tr>
          <td>Can only perform actions the user is authorized to do</td>
          <td>Can read any data accessible to the user and execute any actions</td>
        </tr>
        <tr>
          <td>Doesn't need to inject code into the target site</td>
          <td>Requires injecting malicious code into the target site</td>
        </tr>
        <tr>
          <td>Prevented with tokens, SameSite cookies</td>
          <td>Prevented with output encoding, CSP, input validation</td>
        </tr>
      </table>

      <h3>Common CSRF Targets</h3>
      <ul>
        <li>Financial transactions</li>
        <li>Password changes</li>
        <li>Email/address changes</li>
        <li>Account settings modifications</li>
        <li>Data deletion or modification</li>
        <li>Administrative actions</li>
      </ul>

      <h3>Testing for CSRF Vulnerabilities</h3>
      <p>To test for CSRF vulnerabilities:</p>
      <ol>
        <li>Identify state-changing operations in the application</li>
        <li>Analyze the request to see if it contains unpredictable values</li>
        <li>Create a test HTML page that submits the same request</li>
        <li>Verify if the request succeeds without proper validation</li>
      </ol>

      <h3>Modern Framework Protection</h3>
      <p>Many modern frameworks include built-in CSRF protection:</p>
      <ul>
        <li>Express.js: csurf middleware</li>
        <li>Django: csrf_token template tag</li>
        <li>Rails: protect_from_forgery</li>
        <li>Spring: CSRF tokens</li>
        <li>Laravel: @csrf directive</li>
      </ul>

      <h3>Conclusion</h3>
      <p>CSRF attacks remain a significant security concern despite being well-understood. By implementing proper token validation, using SameSite cookies, and following security best practices, developers can effectively protect their applications from CSRF vulnerabilities.</p>
    `;
