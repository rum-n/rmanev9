export const marshallingContent = `
      <h2>Data Marshalling</h2>
      <p>Data marshalling is the process of transforming memory representations of objects to a data format suitable for storage or transmission. In JavaScript, this is commonly used when working with APIs, file systems, or cross-platform communication.</p>
      
      <h3>Common Marshalling Formats</h3>
      <ul>
        <li>JSON: Most common format for web APIs</li>
        <li>XML: Traditional format, still used in enterprise systems</li>
        <li>Protocol Buffers: Google's efficient binary format</li>
        <li>MessagePack: Binary format alternative to JSON</li>
      </ul>

      <h3>JSON Marshalling</h3>
      <pre><code>// Basic JSON marshalling
const user = {
  name: 'John Doe',
  age: 30,
  hobbies: ['reading', 'coding'],
  address: {
    street: '123 Main St',
    city: 'Boston'
  }
};

// Marshal (serialize)
const marshalled = JSON.stringify(user);

// Unmarshal (deserialize)
const unmarshalled = JSON.parse(marshalled);</code></pre>

      <h3>Handling Special Types</h3>
      <pre><code>// Custom serialization for Dates and undefined
const data = {
  id: 1,
  date: new Date(),
  status: undefined
};

const marshal = (obj) => {
  return JSON.stringify(obj, (key, value) => {
    if (value instanceof Date) {
      return ['__DATE__', value.toISOString()];
    }
    return value;
  });
};

const unmarshal = (str) => {
  return JSON.parse(str, (key, value) => {
    if (Array.isArray(value) && value[0] === '__DATE__') {
      return new Date(value[1]);
    }
    return value;
  });
};</code></pre>

      <h3>Binary Data Marshalling</h3>
      <pre><code>// Using ArrayBuffer for binary data
const marshallBinary = (data) => {
  const buffer = new ArrayBuffer(data.length);
  const view = new Uint8Array(buffer);
  
  for (let i = 0; i < data.length; i++) {
    view[i] = data.charCodeAt(i);
  }
  
  return buffer;
};

const unmarshallBinary = (buffer) => {
  const view = new Uint8Array(buffer);
  let string = '';
  
  for (let i = 0; i < view.length; i++) {
    string += String.fromCharCode(view[i]);
  }
  
  return string;
};</code></pre>

      <h3>Common Use Cases</h3>
      <ul>
        <li>API Communication</li>
        <li>Local Storage</li>
        <li>WebSocket Messages</li>
        <li>Cross-Origin Communication</li>
        <li>File System Operations</li>
      </ul>

      <h3>Best Practices</h3>
      <pre><code>// Error handling
const safeMarshall = (data) => {
  try {
    return JSON.stringify(data);
  } catch (error) {
    console.error('Marshalling failed:', error);
    return null;
  }
};

// Validation after unmarshalling
const safeUnmarshall = (str, schema) => {
  try {
    const data = JSON.parse(str);
    return schema.validate(data);
  } catch (error) {
    console.error('Unmarshalling failed:', error);
    return null;
  }
};</code></pre>

      <h3>Performance Considerations</h3>
      <ul>
        <li>Choose appropriate format based on data size and structure</li>
        <li>Consider using binary formats for large datasets</li>
        <li>Cache marshalled data when possible</li>
        <li>Be mindful of deep object structures</li>
        <li>Handle circular references appropriately</li>
      </ul>
    `