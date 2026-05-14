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
    description: "AI-powered design tool that turns sketches into production UI.",
    tags: ["Next.js", "OpenAI", "tRPC"],
    year: "2025",
    link: "#",
    code: "https://github.com/Lungsangg/neural-canvas",
    featured: true,
  },
  {
    title: "tibet417",
    description: "Low-latency voice agent platform for product teams.",
    tags: ["WebRTC", "Rust", "React"],
    year: "2025",
    link: "#",
    code: "https://github.com/Lungsangg/echo-realtime",
    featured: true,
  },
  {
    title: "jajin-ai-tutor",
    description: "Edge-native vector database with hybrid search.",
    tags: ["Go", "WASM", "Cloudflare"],
    year: "2024",
    link: "#",
    code: "https://github.com/Lungsangg/lumen-db",
  },
  {
    title: "webuddhist",
    description: "Beautiful reading app with AI summaries and notes.",
    tags: ["Swift", "SwiftUI", "GPT-4"],
    year: "2024",
    link: "#",
    code: "https://github.com/your-username/paperback",
  },
  {
    title: "tiblingo",
    description: "Minimal habit tracker built on local-first principles.",
    tags: ["React", "SQLite", "PWA"],
    year: "2023",
    link: "#",
    code: "https://github.com/your-username/drift",
  },
];

// EDIT YOUR PROFILE HERE
export const profile = {
  name: "Lungsang",
  tagline: "Full stack Developer • AI & Product Builder",
  year: "2024",
  socials: [
    { label: "Github", href: "https://github.com/Lungsangg" },
    { label: "LinkedIn", href: "https://www.linkedin.com/in/tenzin-lungsang-b6564a25b/?skipRedirect=true" },
    { label: "LeetCode", href: "https://leetcode.com/u/lungsang/" },
  ],
};
