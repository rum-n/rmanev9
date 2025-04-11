import { closuresContent } from "./1-closures";
import { pureFunctionsContent } from "./2-pure-functions";
import { fpVsOopContent } from "./3-fp-vs-oop";
import { promisesContent } from "./4-promises";
import { tddContent } from "./5-tdd";
import { hoistingContent } from "./6-hoisting";
import { throttlingContent } from "./7-throttling";
import { bubblingContent } from "./8-bubbling";
import { domContent } from "./9-dom";
import { jobHuntContent } from "./10-job-hunt";
import { thisKeywordContent } from "./11-this";
import { solidContent } from "./12-solid";
import { rustOwnershipContent } from "./13-rust-ownership";
import { cachingContent } from "./14-caching";
import { marshallingContent } from "./15-marshaling";
import { concurrencyContent } from "./16-concurrency";
import { dataStructuresContent } from "./17-data-structures";
import { separationOfConcernsContent } from "./18-separation-of-concerns";
import { designPrinciplesContent } from "./19-design-principles";
import { xssContent } from "./20-xss";
import { csrfContent } from "./21-csrf";
import { higherOrderFunctionsContent } from "./22-higher-order-functions";
import { pollingContent } from "./23-polling";
import { webSocketsContent } from "./24-websockets";
import { apiComparisonContent } from "./25-api-comparison";
import { curryingContent } from "./26-currying";
import { callbacksContent } from "./27-callbacks";
import { proxyContent } from "./28-proxy";
import { webWorkersContent } from "./29-web-workers";
import { webRTCContent } from "./30-webrtc";
import { gitCommandsContent } from "./31-git-commands";
import { dependencyInjectionContent } from "./32-dependency-injection";
import { memoizationContent } from "./33-memoization";
import { useMemoVsUseCallbackContent } from "./34-useMemoVsUseCallBack";

export const blogPosts = [
  {
    id: "1",
    title: "Closures",
    date: "2025-02-05",
    excerpt:
      "Understanding closures - one of JavaScript's most powerful features",
    content: closuresContent,
    slug: "js-essentials-closures",
    tags: ["javascript"],
  },
  {
    id: "2",
    title: "Pure Functions",
    date: "2025-02-07",
    excerpt:
      "Understanding pure functions and their importance in modern JavaScript",
    content: pureFunctionsContent,
    slug: "js-essentials-pure-functions",
    tags: ["javascript"],
  },
  {
    id: "3",
    title: "FP vs OOP",
    date: "2025-02-07",
    excerpt:
      "Understanding the difference between Functional Programming and Object-Oriented Programming",
    content: fpVsOopContent,
    slug: "js-essentials-fp-vs-oop",
    tags: ["javascript"],
  },
  {
    id: "4",
    title: "Promises",
    date: "2025-02-09",
    excerpt: "Understanding Promises and asynchronous JavaScript",
    content: promisesContent,
    slug: "js-essentials-promises",
    tags: ["javascript"],
  },
  {
    id: "5",
    title: "Test-Driven Development",
    date: "2025-02-09",
    excerpt:
      "Understanding TDD and its importance in modern software development",
    content: tddContent,
    slug: "js-essentials-tdd",
    tags: ["javascript"],
  },
  {
    id: "6",
    title: "Hoisting",
    date: "2025-02-18",
    excerpt: "Understanding hoisting and its implications in JavaScript",
    content: hoistingContent,
    slug: "js-essentials-hoisting",
    tags: ["javascript"],
  },
  {
    id: "7",
    title: "Throttling",
    date: "2025-02-18",
    excerpt:
      "Understanding throttling and its practical applications in JavaScript",
    content: throttlingContent,
    slug: "js-essentials-throttling",
    tags: ["javascript"],
  },
  {
    id: "8",
    title: "Event Bubbling",
    date: "2025-02-18",
    excerpt:
      "Understanding event bubbling and its practical applications in JavaScript",
    content: bubblingContent,
    slug: "js-essentials-bubbling",
    tags: ["javascript"],
  },
  {
    id: "9",
    title: "The DOM",
    date: "2025-02-18",
    excerpt:
      "Understanding the Document Object Model and how to manipulate it effectively",
    content: domContent,
    slug: "js-essentials-dom",
    tags: ["javascript"],
  },
  {
    id: "10",
    title: "Job Hunt 2025",
    date: "2025-02-18",
    excerpt: "Once again on the hunt for a job.",
    content: jobHuntContent,
    slug: "job-hunt",
    tags: ["non-tech"],
  },
  {
    id: "11",
    title: "The 'this' keyword",
    date: "2025-02-22",
    excerpt:
      "Understanding the 'this' keyword and its behavior in different contexts",
    content: thisKeywordContent,
    slug: "js-essentials-this-keyword",
    tags: ["javascript"],
  },
  {
    id: "12",
    title: "SOLID Principles",
    date: "2025-02-23",
    excerpt:
      "Understanding SOLID principles and their application in JavaScript",
    content: solidContent,
    slug: "js-essentials-solid",
    tags: ["javascript"],
  },
  {
    id: "13",
    title: "Understanding Ownership in Rust",
    date: "2025-02-24",
    excerpt:
      "Understanding Rust's ownership system - one of its most unique features",
    content: rustOwnershipContent,
    slug: "rust-basics-ownership",
    tags: ["rust"],
  },
  {
    id: "14",
    title: "Caching Strategies",
    date: "2025-02-25",
    excerpt:
      "Understanding different caching strategies and their implementation in JavaScript",
    content: cachingContent,
    slug: "js-essentials-caching",
    tags: ["javascript"],
  },
  {
    id: "15",
    title: "Data Marshalling",
    date: "2025-02-26",
    excerpt:
      "Understanding data marshalling and its implementation in JavaScript",
    content: marshallingContent,
    slug: "js-essentials-marshalling",
    tags: ["javascript"],
  },
  {
    id: "16",
    title: "Concurrency",
    date: "2025-02-27",
    excerpt:
      "Understanding concurrency patterns and best practices in JavaScript",
    content: concurrencyContent,
    slug: "js-essentials-concurrency",
    tags: ["javascript"],
  },
  {
    id: "17",
    title: "Data Structures",
    date: "2025-02-27",
    excerpt:
      "Understanding JavaScript's built-in data structures and their practical applications",
    content: dataStructuresContent,
    slug: "js-essentials-data-structures",
    tags: ["javascript"],
  },
  {
    id: "18",
    title: "Separation of Concerns",
    date: "2025-02-27",
    excerpt:
      "Understanding the principle of separation of concerns and its applications",
    content: separationOfConcernsContent,
    slug: "separation-of-concerns",
    tags: ["general programming"],
  },
  {
    id: "19",
    title: "Design Principles",
    date: "2025-02-28",
    excerpt: "Understanding the principles of design and their applications",
    content: designPrinciplesContent,
    slug: "design-principles",
    tags: ["general programming"],
  },
  {
    id: "20",
    title: "Cross-Site Scripting (XSS)",
    date: "2025-02-28",
    excerpt:
      "Learn about XSS vulnerabilities and how to protect your web applications",
    content: xssContent,
    slug: "xss",
    tags: ["security", "web development"],
  },
  {
    id: "21",
    title: "Cross-Site Request Forgery (CSRF)",
    date: "2025-03-01",
    excerpt:
      "Learn about CSRF attacks and how to implement effective protection measures",
    content: csrfContent,
    slug: "csrf",
    tags: ["security", "web development"],
  },
  {
    id: "22",
    title: "Higher-Order Functions",
    date: "2025-03-02",
    excerpt:
      "Understanding higher-order functions and their powerful applications in JavaScript",
    content: higherOrderFunctionsContent,
    slug: "js-essentials-higher-order-functions",
    tags: ["javascript"],
  },
  {
    id: "23",
    title: "Polling",
    date: "2025-03-05",
    excerpt:
      "Understanding polling techniques and their implementation in JavaScript",
    content: pollingContent,
    slug: "js-essentials-polling",
    tags: ["javascript", "web development"],
  },
  {
    id: "24",
    title: "WebSockets",
    date: "2025-03-06",
    excerpt:
      "Understanding WebSocket protocol and real-time communication in JavaScript",
    content: webSocketsContent,
    slug: "js-essentials-websockets",
    tags: ["javascript", "web development"],
  },
  {
    id: "25",
    title: "API Technologies: REST vs GraphQL vs gRPC",
    date: "2025-03-07",
    excerpt:
      "A comprehensive comparison of modern API technologies and when to use each",
    content: apiComparisonContent,
    slug: "api-technologies-comparison",
    tags: ["web development"],
  },
  {
    id: "26",
    title: "Currying",
    date: "2025-03-08",
    excerpt:
      "Understanding currying and partial application in functional JavaScript",
    content: curryingContent,
    slug: "js-essentials-currying",
    tags: ["javascript"],
  },
  {
    id: "27",
    title: "Callbacks",
    date: "2025-03-12",
    excerpt:
      "Mastering callback functions and understanding asynchronous JavaScript",
    content: callbacksContent,
    slug: "js-essentials-callbacks",
    tags: ["javascript"],
  },
  {
    id: "28",
    title: "Proxy",
    date: "2025-03-13",
    excerpt:
      "Understanding JavaScript Proxies for intercept and customize object operations",
    content: proxyContent,
    slug: "js-essentials-proxy",
    tags: ["javascript"],
  },
  {
    id: "29",
    title: "Web Workers",
    date: "2025-03-14",
    excerpt:
      "Leveraging Web Workers for multi-threaded JavaScript in the browser",
    content: webWorkersContent,
    slug: "js-essentials-web-workers",
    tags: ["javascript", "web development"],
  },
  {
    id: "30",
    title: "WebRTC",
    date: "2025-03-15",
    excerpt: "Building real-time communication applications with WebRTC",
    content: webRTCContent,
    slug: "js-essentials-webrtc",
    tags: ["javascript", "web development", "networking"],
  },
  {
    id: "31",
    title: "Git Commands Every Developer Should Know",
    date: "2025-03-17",
    excerpt:
      "A practical guide to the most useful Git commands for everyday development",
    content: gitCommandsContent,
    slug: "git-commands",
    tags: ["web development"],
  },
  {
    id: "32",
    title: "Dependency Injection",
    date: "2025-03-19",
    excerpt:
      "A comprehensive guide to dependency injection and its implementation in modern applications",
    content: dependencyInjectionContent,
    slug: "dependency-injection",
    tags: ["general programming", "javascript"],
  },
  {
    id: "33",
    title: "Memoization",
    date: "2025-04-06",
    excerpt:
      "Understanding memoization and its benefits in optimizing function calls",
    content: memoizationContent,
    slug: "memoization",
    tags: ["javascript"],
  },
  {
    id: "34",
    title: "useMemo vs useCallback",
    date: "2025-04-11",
    excerpt:
      "Understanding the differences between useMemo and useCallback in React",
    content: useMemoVsUseCallbackContent,
    slug: "useMemo-vs-useCallback",
    tags: ["react"],
  },
];
