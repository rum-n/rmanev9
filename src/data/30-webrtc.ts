export const webRTCContent = `
<article>
  <p>WebRTC (Web Real-Time Communication) is a powerful technology that enables peer-to-peer audio, video, and data sharing directly in web browsers without plugins or additional software. Supported by all major browsers, it's the foundation for many modern communication tools.</p>

  <h2>Key Components</h2>

  <ul>
    <li><strong>MediaStream (getUserMedia)</strong>: Captures audio and video from local devices</li>
    <li><strong>RTCPeerConnection</strong>: Manages peer-to-peer connections, including encryption and bandwidth handling</li>
    <li><strong>RTCDataChannel</strong>: Enables peer-to-peer exchange of arbitrary data</li>
  </ul>

  <h2>Accessing User Media</h2>

  <pre><code class="language-javascript">
// Request access to camera and microphone
navigator.mediaDevices.getUserMedia({
  audio: true,
  video: true
})
.then(stream => {
  // Display local video
  document.getElementById('localVideo').srcObject = stream;
})
.catch(error => console.error('Media error:', error));
  </code></pre>

  <h2>Creating a Peer Connection</h2>

  <pre><code class="language-javascript">
// Configuration with STUN servers for NAT traversal
const configuration = {
  iceServers: [{ urls: 'stun:stun.l.google.com:19302' }]
};

// Create peer connection
const peerConnection = new RTCPeerConnection(configuration);

// Add local stream tracks
localStream.getTracks().forEach(track => {
  peerConnection.addTrack(track, localStream);
});

// Handle incoming tracks
peerConnection.addEventListener('track', event => {
  document.getElementById('remoteVideo').srcObject = event.streams[0];
});
  </code></pre>

  <h2>Signaling: The Missing Piece</h2>

  <p>WebRTC requires a separate signaling mechanism to exchange connection information between peers. This isn't provided by WebRTC itself and typically uses WebSockets or another messaging service.</p>

  <pre><code class="language-javascript">
// Creating an offer (simplified)
async function createOffer() {
  const offer = await peerConnection.createOffer();
  await peerConnection.setLocalDescription(offer);
  
  // Send offer via your signaling channel
  signalingChannel.send(JSON.stringify(offer));
}

// Handling ICE candidates
peerConnection.addEventListener('icecandidate', event => {
  if (event.candidate) {
    // Send candidate via your signaling channel
    signalingChannel.send(JSON.stringify(event.candidate));
  }
});
  </code></pre>

  <h2>Using Data Channels</h2>

  <pre><code class="language-javascript">
// Create a data channel
const dataChannel = peerConnection.createDataChannel('chat');

// Listen for messages
dataChannel.addEventListener('message', event => {
  console.log('Received:', event.data);
});

// Send data
dataChannel.addEventListener('open', () => {
  dataChannel.send('Hello from WebRTC!');
});
  </code></pre>

  <h2>Common Use Cases</h2>
  
  <ul>
    <li>Video conferencing and chat applications</li>
    <li>Peer-to-peer file sharing</li>
    <li>Low-latency gaming and collaborative tools</li>
    <li>Live streaming with reduced server costs</li>
    <li>IoT device communication</li>
  </ul>

  <h2>Challenges and Considerations</h2>
  
  <ul>
    <li><strong>NAT traversal</strong>: Many connections require STUN/TURN servers to work across networks</li>
    <li><strong>Signaling infrastructure</strong>: You need to implement your own signaling mechanism</li>
    <li><strong>Scalability</strong>: The peer-to-peer model doesn't scale easily for many participants</li>
    <li><strong>Browser compatibility</strong>: While broadly supported, implementations can vary slightly</li>
    <li><strong>Mobile battery usage</strong>: Real-time communication can be resource-intensive</li>
  </ul>

  <h2>WebRTC Connection Flow</h2>
  
  <ol>
    <li>Get user media permissions and streams</li>
    <li>Create RTCPeerConnection objects on both ends</li>
    <li>Create and exchange session descriptions (offer/answer) via signaling</li>
    <li>Exchange ICE candidates via signaling</li>
    <li>Establish direct peer-to-peer connection</li>
    <li>Share media streams or open data channels</li>
  </ol>

  <h2>Conclusion</h2>
  
  <p>WebRTC revolutionizes how we build real-time communication applications on the web by enabling direct peer-to-peer connections. While it requires careful implementation of signaling and handling of network challenges, it offers significant benefits in latency, quality, and server cost reduction for real-time applications.</p>
  
  <p>As more applications require real-time features, WebRTC continues to grow in importance as a fundamental web technology for building the next generation of collaborative and interactive experiences.</p>
</article>
`;