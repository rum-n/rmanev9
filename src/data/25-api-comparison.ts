export const apiComparisonContent = `
<article>
  <p>Modern web applications rely heavily on APIs for communication between clients and servers. Three technologies stand out in today's landscape: REST, GraphQL, and gRPC. Each offers different approaches to solving similar problems, with their own strengths and weaknesses.</p>

  <h2>REST: The Industry Standard</h2>
  <p>Representational State Transfer (REST) has been the dominant API paradigm for over a decade. Built on HTTP principles, REST uses standard methods and status codes to manipulate resources.</p>
  
  <h3>Key Characteristics of REST</h3>
  <ul>
    <li>Stateless communication</li>
    <li>Resource-based approach with uniform interface</li>
    <li>Uses HTTP methods (GET, POST, PUT, DELETE)</li>
    <li>Typically returns JSON or XML responses</li>
    <li>Leverages HTTP caching</li>
  </ul>

  <h3>REST Example</h3>
  <pre><code class="language-javascript">
// Fetching a user with REST
fetch('https://api.example.com/users/123')
  .then(response => response.json())
  .then(user => console.log(user))
  .catch(error => console.error('Error fetching user:', error));

// Creating a new user
fetch('https://api.example.com/users', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json'
  },
  body: JSON.stringify({
    name: 'John Doe',
    email: 'john@example.com'
  })
})
  .then(response => response.json())
  .then(newUser => console.log('Created user:', newUser))
  .catch(error => console.error('Error creating user:', error));
  </code></pre>

  <h2>GraphQL: The Query Language for APIs</h2>
  <p>Developed by Facebook, GraphQL addresses some of REST's limitations by allowing clients to request exactly the data they need, reducing over-fetching and under-fetching problems.</p>

  <h3>Key Characteristics of GraphQL</h3>
  <ul>
    <li>Single endpoint for all operations</li>
    <li>Client specifies exactly what data it needs</li>
    <li>Strong typing system</li>
    <li>Introspection capabilities</li>
    <li>Hierarchical data retrieval</li>
    <li>Real-time updates with subscriptions</li>
  </ul>

  <h3>GraphQL Example</h3>
  <pre><code class="language-javascript">
// GraphQL query
const query = \`
  query GetUser($id: ID!) {
    user(id: $id) {
      id
      name
      email
      posts {
        id
        title
        comments {
          id
          text
        }
      }
    }
  }
\`;

// Fetching data with GraphQL
fetch('https://api.example.com/graphql', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify({
    query,
    variables: { id: '123' }
  })
})
  .then(res => res.json())
  .then(result => console.log(result.data.user))
  .catch(error => console.error('Error:', error));
  </code></pre>

  <h2>gRPC: High-Performance RPC Framework</h2>
  <p>Developed by Google, gRPC is a high-performance RPC (Remote Procedure Call) framework that uses HTTP/2 and Protocol Buffers to optimize communication, particularly for microservices architectures.</p>

  <h3>Key Characteristics of gRPC</h3>
  <ul>
    <li>Uses Protocol Buffers (protobuf) for serialization</li>
    <li>Strongly typed contracts via .proto files</li>
    <li>HTTP/2 for transport (multiplexing, streaming)</li>
    <li>Supports bidirectional streaming</li>
    <li>Code generation for multiple languages</li>
    <li>Excellent for microservices communication</li>
  </ul>

  <h3>gRPC Example</h3>
  <p>First, define a service using Protocol Buffers:</p>
  <pre><code class="language-protobuf">
// user.proto
syntax = "proto3";

package userservice;

service UserService {
  rpc GetUser (UserRequest) returns (User) {}
  rpc CreateUser (User) returns (User) {}
  rpc ListUsers (Empty) returns (stream User) {}
}

message UserRequest {
  string id = 1;
}

message User {
  string id = 1;
  string name = 2;
  string email = 3;
}

message Empty {}
  </code></pre>

  <p>Then use the generated client in JavaScript (with gRPC-Web):</p>
  <pre><code class="language-javascript">
const { UserServiceClient } = require('./user_grpc_web_pb');
const { UserRequest } = require('./user_pb');

const client = new UserServiceClient('https://api.example.com');

// Get a user
const request = new UserRequest();
request.setId('123');

client.getUser(request, {}, (err, response) => {
  if (err) {
    console.error('Error:', err);
    return;
  }
  console.log('User:', {
    id: response.getId(),
    name: response.getName(),
    email: response.getEmail()
  });
});
  </code></pre>

  <h2>Comparison: When to Use Each Technology</h2>
  
  <h3>Choose REST when:</h3>
  <ul>
    <li>Building public APIs with wide compatibility needs</li>
    <li>Working with simple CRUD operations</li>
    <li>Leveraging HTTP caching is important</li>
    <li>Your API needs to be browsable and self-discoverable</li>
    <li>You need simplicity and broad framework/tooling support</li>
  </ul>

  <h3>Choose GraphQL when:</h3>
  <ul>
    <li>Working with complex, nested data structures</li>
    <li>Your clients need flexible data fetching</li>
    <li>You want to avoid multiple round-trips to the server</li>
    <li>You need to aggregate data from multiple sources</li>
    <li>Your app has diverse clients with varying data needs</li>
  </ul>

  <h3>Choose gRPC when:</h3>
  <ul>
    <li>Performance and efficiency are critical</li>
    <li>Building microservices architectures</li>
    <li>You need strong typing and contract validation</li>
    <li>Working in polyglot environments (multiple programming languages)</li>
    <li>You need bidirectional streaming capabilities</li>
    <li>Internal service-to-service communication is the primary use case</li>
  </ul>

  <h2>Integration Approaches</h2>
  <p>In many modern architectures, these technologies can be combined:</p>
  <ul>
    <li>Use gRPC for internal service communication</li>
    <li>Expose GraphQL to web/mobile clients</li>
    <li>Maintain REST endpoints for legacy systems and third-party integrations</li>
  </ul>

  <pre><code class="language-javascript">
// Example architecture visualization
/**
 *  Client Layer         Internal Services          Data Layer
 * ┌─────────────┐       ┌───────────────┐       ┌─────────────┐
 * │ Mobile Apps │◄─────►│               │       │             │
 * └─────────────┘  G    │               │       │             │
 *                  r    │  Microservice │       │             │
 * ┌─────────────┐  a  ┌►│     Layer     │◄─────►│  Databases  │
 * │   Web Apps  │◄──┐ p │    (gRPC)     │  SQL/ │     and     │
 * └─────────────┘   │ h │               │  NoSQL│   Storage   │
 *                   └─┐ │               │       │             │
 * ┌─────────────┐     └►│               │       │             │
 * │External APIs│◄─────►│               │       │             │
 * └─────────────┘  REST └───────────────┘       └─────────────┘
 */
  </code></pre>

  <h2>Performance Considerations</h2>
  <p>In general performance ranking:</p>
  <ol>
    <li><strong>gRPC</strong>: Fastest due to HTTP/2 and binary serialization</li>
    <li><strong>REST</strong>: Good performance with proper caching</li>
    <li><strong>GraphQL</strong>: Potentially slower due to query resolution, but reduces network payload</li>
  </ol>

  <h2>Conclusion</h2>
  <p>The choice between REST, GraphQL, and gRPC isn't about finding the "best" technology, but rather selecting the right tool for your specific requirements. Understanding the strengths and weaknesses of each approach will help you make informed decisions about your API architecture.</p>
  
  <p>In many cases, a hybrid approach leveraging multiple technologies provides the optimal solution, giving you the best of each world for different aspects of your system architecture.</p>
</article>
`;