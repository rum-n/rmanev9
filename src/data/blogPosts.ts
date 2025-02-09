import { closuresContent } from "./1-closures";
import { pureFunctionsContent } from "./2-pure-functions";
import { fpVsOopContent } from "./3-fp-vs-oop";
import { promisesContent } from "./4-promises";
import { tddContent } from "./5-tdd";

export const blogPosts = [
  {
    id: "1",
    title: "Coding essentials #1: Closures",
    date: "2025-02-05",
    excerpt: "Understanding closures - one of JavaScript's most powerful features",
    content: closuresContent,
    slug: "coding-essentials-closures"
  },
  {
    id: "2",
    title: "Coding essentials #2: Pure Functions",
    date: "2025-02-07",
    excerpt: "Understanding pure functions and their importance in modern JavaScript",
    content: pureFunctionsContent,
    slug: "coding-essentials-pure-functions"
  },
  {
    id: "3",
    title: "Coding essentials #3: FP vs OOP",
    date: "2025-02-07",
    excerpt: "Understanding the difference between Functional Programming and Object-Oriented Programming",
    content: fpVsOopContent,
    slug: "coding-essentials-fp-vs-oop"
  },
  {
    id: "4",
    title: "Coding essentials #4: Promises",
    date: "2025-02-09",
    excerpt: "Understanding Promises and asynchronous JavaScript",
    content: promisesContent,
    slug: "coding-essentials-promises"
  },
  {
    id: "5",
    title: "Coding essentials #5: Test-Driven Development",
    date: "2025-02-09",
    excerpt: "Understanding TDD and its importance in modern software development",
    content: tddContent,
    slug: "coding-essentials-tdd"
  }
];