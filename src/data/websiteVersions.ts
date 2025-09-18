export interface WebsiteVersion {
  id: string;
  name: string;
  description: string;
  date: string;
  technologies: string[];
  features: string[];
  previewImage?: string;
  colorScheme: {
    primary: string;
    secondary: string;
    background: string;
    text: string;
  };
  style: string;
  isCurrent: boolean;
}

export const websiteVersions: WebsiteVersion[] = [
  {
    id: "v1",
    name: "Minimal Portfolio",
    description:
      "My first portfolio website with a clean, minimal design focused on typography and white space.",
    date: "2020-01",
    technologies: ["HTML", "CSS", "Vanilla JavaScript"],
    features: [
      "Simple navigation",
      "Project showcase",
      "Contact form",
      "Responsive design",
    ],
    colorScheme: {
      primary: "#000000",
      secondary: "#666666",
      background: "#ffffff",
      text: "#333333",
    },
    style: "minimal",
    isCurrent: false,
  },
  {
    id: "v2",
    name: "Modern React Portfolio",
    description:
      "Upgraded to React with modern components, styled-components, and improved user experience.",
    date: "2021-06",
    technologies: ["React", "TypeScript", "Styled Components", "React Router"],
    features: [
      "Component-based architecture",
      "Type safety",
      "Dynamic routing",
      "Enhanced animations",
    ],
    colorScheme: {
      primary: "#3b82f6",
      secondary: "#1e40af",
      background: "#f8fafc",
      text: "#1e293b",
    },
    style: "modern",
    isCurrent: false,
  },
  {
    id: "v3",
    name: "Dark Theme Portfolio",
    description:
      "Switched to a dark theme with neon accents and cyberpunk-inspired design elements.",
    date: "2022-03",
    technologies: ["React", "TypeScript", "Styled Components", "Framer Motion"],
    features: [
      "Dark theme",
      "Neon effects",
      "Smooth animations",
      "Interactive elements",
    ],
    colorScheme: {
      primary: "#00ffff",
      secondary: "#ff00ff",
      background: "#0a0a0a",
      text: "#ffffff",
    },
    style: "cyberpunk",
    isCurrent: false,
  },
  {
    id: "v4",
    name: "Windows 95 Desktop",
    description:
      "A nostalgic recreation of the Windows 95 desktop experience with desktop icons and windows.",
    date: "2024-12",
    technologies: ["React", "TypeScript", "Styled Components", "React Router"],
    features: [
      "Desktop interface",
      "Window management",
      "Icon-based navigation",
      "Retro aesthetics",
    ],
    colorScheme: {
      primary: "#008080",
      secondary: "#c0c0c0",
      background: "#008080",
      text: "#000000",
    },
    style: "retro-windows",
    isCurrent: false,
  },
  {
    id: "v5",
    name: "90s Web Design",
    description:
      "A vibrant 90s-inspired design with neon colors, animated backgrounds, and retro typography.",
    date: "2024-12",
    technologies: [
      "React",
      "TypeScript",
      "Styled Components",
      "CSS Animations",
    ],
    features: [
      "Neon color scheme",
      "Animated backgrounds",
      "Retro typography",
      "Glow effects",
    ],
    colorScheme: {
      primary: "#ff00ff",
      secondary: "#00ffff",
      background: "#000000",
      text: "#00ffff",
    },
    style: "90s-retro",
    isCurrent: true,
  },
];
