export const blogPosts = [
  {
    id: "1",
    title: "Getting Started with React and TypeScript",
    date: "2024-03-15",
    excerpt: "A beginner's guide to setting up and using TypeScript with React",
    content: `
      <h2>Introduction</h2>
      <p>TypeScript has become an essential tool in modern React development. In this guide, we'll explore how to set up a new React project with TypeScript and understand the key benefits it brings.</p>
      
      <h3>Setting up your project</h3>
      <p>You can quickly create a new React + TypeScript project using Vite:</p>
      <pre><code>npm create vite@latest my-app -- --template react-ts</code></pre>
      
      <h3>Key Benefits</h3>
      <ul>
        <li>Type safety for props and state</li>
        <li>Better IDE support and autocompletion</li>
        <li>Catch errors during development</li>
      </ul>
    `,
    slug: "getting-started-react-typescript"
  },
  {
    id: "2",
    title: "Building Responsive Layouts with Styled Components",
    date: "2024-03-10",
    excerpt: "Learn how to create responsive layouts using styled-components",
    content: `
      <h2>Why Styled Components?</h2>
      <p>Styled Components allows you to write actual CSS in your JavaScript, making it easier to create dynamic and maintainable styles.</p>
      
      <h3>Basic Example</h3>
      <pre><code>const Container = styled.div\`
  max-width: 800px;
  margin: 0 auto;
  
  @media (max-width: 768px) {
    padding: 0 1rem;
  }
\`;</code></pre>
    `,
    slug: "responsive-layouts-styled-components"
  }
];