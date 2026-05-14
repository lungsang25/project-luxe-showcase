export type Project = {
  title: string;
  description: string;
  tags: string[];
  year: string;
  link: string;
  code?: string;
  featured?: boolean;
};

// EDIT YOUR PROJECTS HERE
export const projects: Project[] = [
  {
    title: "letsgokings",
    description: "Global leaderboard for streak tracking in men's vital retention, with participant profiles and public chat.",
    tags: ["Typscript", "React", "firebase", "tailwindcss"],
    year: "2026",
    link: "https://www.letsgokings.club/",
    code: "https://github.com/Lungsangg/neural-canvas",
    featured: true,
  },
  {
    title: "webuddhist",
    description: "A collaborative project to create a platform for Buddhist teachings and resources.",
    tags: ["js", "react", "python", "fastapi", "mongodb", "postgres", "docker", "render"],
    year: "2022 - present",
    link: "https://webuddhist.com",
    code: "https://github.com/Lungsangg/echo-realtime",
    featured: true,
  },
  {
    title: "jajin-ai-tutor",
    description: "Ai powered smart Tibetan language tutor for fun, effective learning",
    tags: ["javascript", "react", "model integration in progress"],
    year: "2025",
    link: "#",
    code: "https://github.com/Lungsangg/lumen-db",
  },
  {
    title: "tibet417",
    description: "A modern online store for easy shopping and fast checkout",
    tags: ["javascript", "react", "node.js", "express.js", "mongodb","cloudinary"],
    year: "2024",
    link: "https://www.tibet417.com/",
    code: "https://github.com/your-username/paperback",
  },
  {
    title: "tiblingo",
    description: "A Duolingo-style app for learning Tibetan",
    tags: ["React", "postgres sql", "PWA"],
    year: "2023",
    link: "#",
    code: "https://github.com/your-username/drift",
  },
];

// EDIT YOUR PROFILE HERE
export const profile = {
  name: "Lungsang",
  tagline: "Full stack Developer • AI & Product Builder",
  year: "2026",
  socials: [
    { label: "Github", href: "https://github.com/Lungsangg" },
    { label: "LinkedIn", href: "https://www.linkedin.com/in/tenzin-lungsang-b6564a25b/?skipRedirect=true" },
    { label: "LeetCode", href: "https://leetcode.com/u/lungsang/" },
  ],
};
