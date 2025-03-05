export const webSocketsContent = `
# Understanding WebSockets in JavaScript

WebSocket is a communication protocol that provides full-duplex communication channels over a single TCP connection. Unlike HTTP, which is unidirectional where the client must initiate communication, WebSocket enables both client and server to send messages to each other independently.

## Why WebSockets?

Traditional web communication methods like HTTP polling or long polling have limitations:
- They create unnecessary overhead with headers in each request
- They require constant new connections
- They don't provide real-time capabilities efficiently

WebSocket solves these issues by:
- Maintaining a persistent connection
- Enabling bi-directional communication
- Reducing overhead after initial handshake
- Providing true real-time capabilities

## WebSocket Protocol

The WebSocket protocol consists of two parts:
1. The handshake - where the connection is established
2. The data transfer - where messages are exchanged

### The Handshake

The client initiates a WebSocket connection by sending an HTTP upgrade request:

\`\`\`http
GET /chat HTTP/1.1
Host: server.example.com
Upgrade: websocket
Connection: Upgrade
Sec-WebSocket-Key: dGhlIHNhbXBsZSBub25jZQ==
Sec-WebSocket-Version: 13
\`\`\`

The server responds with:

\`\`\`http
HTTP/1.1 101 Switching Protocols
Upgrade: websocket
Connection: Upgrade
Sec-WebSocket-Accept: s3pPLMBiTxaQ9kYGzzhZRbK+xOo=
\`\`\`

## Using WebSocket in JavaScript

Here's how to create a WebSocket connection:

\`\`\`javascript
const socket = new WebSocket('ws://example.com/socketserver');

// Connection opened
socket.addEventListener('open', (event) => {
    console.log('Connected to WebSocket server');
    socket.send('Hello Server!');
});

// Listen for messages
socket.addEventListener('message', (event) => {
    console.log('Message from server:', event.data);
});

// Handle errors
socket.addEventListener('error', (event) => {
    console.error('WebSocket error:', event);
});

// Connection closed
socket.addEventListener('close', (event) => {
    console.log('Disconnected from WebSocket server');
});
\`\`\`

## Building a Simple Chat Application

Here's a basic example of a chat application using WebSocket:

\`\`\`javascript
// Client-side code
class ChatApp {
    constructor() {
        this.socket = new WebSocket('ws://localhost:8080');
        this.setupEventListeners();
    }

    setupEventListeners() {
        this.socket.onopen = () => {
            console.log('Connected to chat server');
        };

        this.socket.onmessage = (event) => {
            this.displayMessage(JSON.parse(event.data));
        };

        // Handle form submission
        document.getElementById('chatForm').onsubmit = (e) => {
            e.preventDefault();
            const input = document.getElementById('messageInput');
            const message = {
                type: 'message',
                content: input.value,
                timestamp: new Date().toISOString()
            };
            this.socket.send(JSON.stringify(message));
            input.value = '';
        };
    }

    displayMessage(message) {
        const messageDiv = document.createElement('div');
        messageDiv.textContent = \`\${new Date(message.timestamp).toLocaleTimeString()}: \${message.content}\`;
        document.getElementById('messages').appendChild(messageDiv);
    }
}
\`\`\`

## Best Practices

1. **Always handle connection errors**
   - Implement error handling
   - Consider implementing reconnection logic

2. **Message Format**
   - Use a consistent message format (e.g., JSON)
   - Include message types for different kinds of messages

3. **Connection Management**
   - Implement heartbeat mechanisms
   - Handle connection timeouts
   - Clean up resources when connection closes

4. **Security Considerations**
   - Validate all incoming messages
   - Use wss:// (WebSocket Secure) in production
   - Implement proper authentication

## Example: Implementing Heartbeat

\`\`\`javascript
class WebSocketClient {
    constructor(url) {
        this.url = url;
        this.reconnectAttempts = 0;
        this.maxReconnectAttempts = 5;
        this.heartbeatInterval = null;
        this.connect();
    }

    connect() {
        this.ws = new WebSocket(this.url);
        this.ws.onopen = this.onOpen.bind(this);
        this.ws.onclose = this.onClose.bind(this);
        this.ws.onerror = this.onError.bind(this);
        this.ws.onmessage = this.onMessage.bind(this);
    }

    onOpen() {
        console.log('Connected');
        this.reconnectAttempts = 0;
        this.startHeartbeat();
    }

    startHeartbeat() {
        this.heartbeatInterval = setInterval(() => {
            if (this.ws.readyState === WebSocket.OPEN) {
                this.ws.send(JSON.stringify({ type: 'ping' }));
            }
        }, 30000); // Send heartbeat every 30 seconds
    }

    onClose() {
        clearInterval(this.heartbeatInterval);
        if (this.reconnectAttempts < this.maxReconnectAttempts) {
            this.reconnectAttempts++;
            setTimeout(() => this.connect(), 1000 * this.reconnectAttempts);
        }
    }

    onError(error) {
        console.error('WebSocket error:', error);
    }

    onMessage(event) {
        const data = JSON.parse(event.data);
        if (data.type === 'pong') {
            console.log('Heartbeat acknowledged');
            return;
        }
        // Handle other message types
    }
}
\`\`\`

## When to Use WebSockets

WebSockets are ideal for:
- Real-time applications (chat, gaming)
- Live data feeds (stock tickers, sports scores)
- Collaborative features (shared editing)
- Any scenario requiring frequent bi-directional communication

However, they might not be the best choice for:
- Simple request-response patterns
- Infrequent updates
- When HTTP REST APIs would suffice

## Alternatives to WebSockets

1. **Server-Sent Events (SSE)**
   - One-way server-to-client communication
   - Built on HTTP
   - Simpler to implement for one-way updates

2. **Long Polling**
   - More compatible with older browsers
   - Easier to implement
   - Higher latency

3. **WebRTC**
   - Peer-to-peer communication
   - Better for video/audio streaming
   - More complex to implement

## Conclusion

WebSockets provide a powerful way to implement real-time features in web applications. While they require more setup and consideration than traditional HTTP communications, they offer significant benefits for applications requiring live updates and bi-directional communication. Understanding when to use WebSockets and how to implement them properly is crucial for modern web development.
`; 