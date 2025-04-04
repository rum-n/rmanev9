export const pollingContent = `
      <p>Polling is a technique where a client repeatedly checks a server at regular intervals to see if there's new data or if a condition has been met. It's a common approach for real-time updates when more advanced solutions like WebSockets aren't available.</p>
      
      <h3>Basic Polling Implementation</h3>
      <pre><code>// Simple polling function
function startPolling(url, interval) {
  const poll = async () => {
    try {
      const response = await fetch(url);
      const data = await response.json();
      processData(data);
    } catch (error) {
      console.error('Polling error:', error);
    } finally {
      setTimeout(poll, interval);
    }
  };
  
  poll(); // Start the polling process
}

// Usage
startPolling('https://api.example.com/updates', 5000); // Poll every 5 seconds</code></pre>

      <h3>Advantages of Polling</h3>
      <ul>
        <li>Simple to implement</li>
        <li>Works across all browsers</li>
        <li>No special server requirements</li>
        <li>Firewall-friendly</li>
      </ul>

      <h3>Disadvantages of Polling</h3>
      <ul>
        <li>Increased server load</li>
        <li>Wasted bandwidth when there's no new data</li>
        <li>Latency between updates</li>
        <li>Battery drain on mobile devices</li>
      </ul>

      <h3>Intelligent Polling with Backoff</h3>
      <pre><code>function adaptivePolling(url, initialInterval, maxInterval) {
  let currentInterval = initialInterval;
  let consecutiveEmptyResponses = 0;
  
  const poll = async () => {
    try {
      const response = await fetch(url);
      const data = await response.json();
      
      if (data.hasUpdates) {
        // Reset interval if we got updates
        currentInterval = initialInterval;
        consecutiveEmptyResponses = 0;
        processData(data);
      } else {
        // Increase interval if no updates
        consecutiveEmptyResponses++;
        if (consecutiveEmptyResponses > 2) {
          currentInterval = Math.min(currentInterval * 1.5, maxInterval);
        }
      }
    } catch (error) {
      console.error('Polling error:', error);
    } finally {
      setTimeout(poll, currentInterval);
    }
  };
  
  poll();
}</code></pre>

      <h3>Long Polling</h3>
      <p>Long polling is an improved version where the server holds the request open until new data is available or a timeout occurs.</p>
      <pre><code>async function longPoll(url) {
  try {
    const response = await fetch(url, {
      method: 'GET',
      headers: { 'Content-Type': 'application/json' },
      // Some servers require a longer timeout for long polling
      signal: AbortSignal.timeout(60000) // 60 second timeout
    });
    
    const data = await response.json();
    processData(data);
    
    // Immediately start the next long poll
    longPoll(url);
  } catch (error) {
    if (error.name === 'AbortError') {
      console.log('Long poll timed out, reconnecting...');
    } else {
      console.error('Long polling error:', error);
      // Wait before retrying on error
      setTimeout(() => longPoll(url), 5000);
    }
  }
}</code></pre>

      <h3>Polling vs. WebSockets vs. Server-Sent Events</h3>
      <ul>
        <li><strong>Polling:</strong> Simple but inefficient for real-time updates</li>
        <li><strong>Long Polling:</strong> Better efficiency but still has overhead</li>
        <li><strong>WebSockets:</strong> Full-duplex communication, most efficient for real-time</li>
        <li><strong>Server-Sent Events (SSE):</strong> Server-to-client only, good middle ground</li>
      </ul>

      <h3>Best Practices</h3>
      <ul>
        <li>Use appropriate intervals based on your use case</li>
        <li>Implement exponential backoff for less critical updates</li>
        <li>Include version or timestamp parameters to avoid redundant data</li>
        <li>Handle network errors gracefully</li>
        <li>Consider user activity to pause polling when appropriate</li>
        <li>Use more efficient alternatives (WebSockets, SSE) when possible</li>
      </ul>

      <h3>Real-world Example: Chat Application</h3>
      <pre><code>class ChatPoller {
  constructor(chatId, interval = 3000) {
    this.chatId = chatId;
    this.interval = interval;
    this.lastMessageId = null;
    this.isPolling = false;
    this.timeoutId = null;
  }
  
  start() {
    if (this.isPolling) return;
    this.isPolling = true;
    this.poll();
  }
  
  stop() {
    this.isPolling = false;
    if (this.timeoutId) {
      clearTimeout(this.timeoutId);
      this.timeoutId = null;
    }
  }
  
  async poll() {
    if (!this.isPolling) return;
    
    try {
      const url = \`https://api.example.com/chats/\${this.chatId}/messages\${
        this.lastMessageId ? \`?since=\${this.lastMessageId}\` : ''
      }\`;
      
      const response = await fetch(url);
      const messages = await response.json();
      
      if (messages.length > 0) {
        this.lastMessageId = messages[messages.length - 1].id;
        this.displayMessages(messages);
      }
    } catch (error) {
      console.error('Chat polling error:', error);
    } finally {
      this.timeoutId = setTimeout(() => this.poll(), this.interval);
    }
  }
  
  displayMessages(messages) {
    // Update UI with new messages
    messages.forEach(message => {
      // Add message to chat UI
    });
  }
}</code></pre>
    `;
