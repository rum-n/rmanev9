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

export const blogPosts = [
  {
    id: "1",
    title: "JS essentials #1: Closures",
    date: "2025-02-05",
    excerpt: "Understanding closures - one of JavaScript's most powerful features",
    content: closuresContent,
    slug: "js-essentials-closures",
    tags: ["javascript"]
  },
  {
    id: "2",
    title: "JS essentials #2: Pure Functions",
    date: "2025-02-07",
    excerpt: "Understanding pure functions and their importance in modern JavaScript",
    content: pureFunctionsContent,
    slug: "js-essentials-pure-functions",
    tags: ["javascript"]
  },
  {
    id: "3",
    title: "JS essentials #3: FP vs OOP",
    date: "2025-02-07",
    excerpt: "Understanding the difference between Functional Programming and Object-Oriented Programming",
    content: fpVsOopContent,
    slug: "js-essentials-fp-vs-oop",
    tags: ["javascript"]
  },
  {
    id: "4",
    title: "JS essentials #4: Promises",
    date: "2025-02-09",
    excerpt: "Understanding Promises and asynchronous JavaScript",
    content: promisesContent,
    slug: "js-essentials-promises",
    tags: ["javascript"]
  },
  {
    id: "5",
    title: "JS essentials #5: Test-Driven Development",
    date: "2025-02-09",
    excerpt: "Understanding TDD and its importance in modern software development",
    content: tddContent,
    slug: "js-essentials-tdd",
    tags: ["javascript"]
  },
  {
    id: "6",
    title: "JS essentials #6: Hoisting",
    date: "2025-02-18",
    excerpt: "Understanding hoisting and its implications in JavaScript",
    content: hoistingContent,
    slug: "js-essentials-hoisting",
    tags: ["javascript"]
  },
  {
    id: "7",
    title: "JS essentials #7: Throttling",
    date: "2025-02-18",
    excerpt: "Understanding throttling and its practical applications in JavaScript",
    content: throttlingContent,
    slug: "js-essentials-throttling",
    tags: ["javascript"]
  },
  {
    id: "8",
    title: "JS essentials #8: Event Bubbling",
    date: "2025-02-18",
    excerpt: "Understanding event bubbling and its practical applications in JavaScript",
    content: bubblingContent,
    slug: "js-essentials-bubbling",
    tags: ["javascript"]
  },
  {
    id: "9",
    title: "JS essentials #9: The DOM",
    date: "2025-02-18",
    excerpt: "Understanding the Document Object Model and how to manipulate it effectively",
    content: domContent,
    slug: "js-essentials-dom",
    tags: ["javascript"]
  },
  {
    id: "10",
    title: "Job Hunt 2025",
    date: "2025-02-18",
    excerpt: "Once again on the hunt for a job.",
    content: jobHuntContent,
    slug: "job-hunt",
    tags: ["non-tech"]
  },
  {
    id: "11",
    title: "JS essentials #11: The 'this' keyword",
    date: "2025-02-22",
    excerpt: "Understanding the 'this' keyword and its behavior in different contexts",
    content: thisKeywordContent,
    slug: "js-essentials-this-keyword",
    tags: ["javascript"]
  },
  {
    id: "12",
    title: "JS essentials #12: SOLID Principles",
    date: "2025-02-23",
    excerpt: "Understanding SOLID principles and their application in JavaScript",
    content: solidContent,
    slug: "js-essentials-solid",
    tags: ["javascript"]
  },
  {
    id: "13",
    title: "Rust basics #1: Understanding Ownership",
    date: "2025-02-24",
    excerpt: "Understanding Rust's ownership system - one of its most unique features",
    content: rustOwnershipContent,
    slug: "rust-basics-ownership",
    tags: ["rust"]
  },
  {
    id: "14",
    title: "JS essentials #14: Caching Strategies",
    date: "2025-02-25",
    excerpt: "Understanding different caching strategies and their implementation in JavaScript",
    content: cachingContent,
    slug: "js-essentials-caching",
    tags: ["javascript"]
  },
  {
    id: "15",
    title: "JS essentials #15: Data Marshalling",
    date: "2025-02-26",
    excerpt: "Understanding data marshalling and its implementation in JavaScript",
    content: marshallingContent,
    slug: "js-essentials-marshalling",
    tags: ["javascript"]
  },
  {
    id: "16",
    title: "JS essentials #16: Concurrency",
    date: "2025-02-27",
    excerpt: "Understanding concurrency patterns and best practices in JavaScript",
    content: concurrencyContent,
    slug: "js-essentials-concurrency",
    tags: ["javascript"]
  },
  {
    id: "17",
    title: "JS essentials #17: Data Structures",
    date: "2025-02-27",
    excerpt: "Understanding JavaScript's built-in data structures and their practical applications",
    content: dataStructuresContent,
    slug: "js-essentials-data-structures",
    tags: ["javascript"]
  },
  {
    id: "18",
    title: "Separation of Concerns",
    date: "2025-02-27",
    excerpt: "Understanding the principle of separation of concerns and its applications",
    content: separationOfConcernsContent,
    slug: "separation-of-concerns",
    tags: ["general programming"]
  },
  {
    id: "19",
    title: "Design Principles",
    date: "2025-02-28",
    excerpt: "Understanding the principles of design and their applications",
    content: designPrinciplesContent,
    slug: "design-principles",
    tags: ["general programming"]
  },
  {
    id: "20",
    title: "Understanding Cross-Site Scripting (XSS)",
    date: "2025-02-28",
    excerpt: "Learn about XSS vulnerabilities and how to protect your web applications",
    content: xssContent,
    slug: "understanding-xss",
    tags: ["security", "web development"]
  }
];