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
    tags: ["personal"]
  },
  {
    id: "11",
    title: "JS essentials #11: The 'this' keyword",
    date: "2025-02-22",
    excerpt: "Understanding the 'this' keyword and its behavior in different contexts",
    content: thisKeywordContent,
    slug: "js-essentials-this-keyword",
    tags: ["javascript"]
  }
];