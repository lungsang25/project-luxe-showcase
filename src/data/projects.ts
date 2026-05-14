export type Project = {
  title: string;
  description: string;
  tags: string[];
  year: string;
  link: string;
  featured?: boolean;
};

// EDIT YOUR PROJECTS HERE
export const projects: Project[] = [
  {
    title: "Neural Canvas",
    description: "AI-powered design tool that turns sketches into production UI.",
    tags: ["Next.js", "OpenAI", "tRPC"],
    year: "2025",
    link: "#",
    featured: true,
  },
  {
    title: "Echo Realtime",
    description: "Low-latency voice agent platform for product teams.",
    tags: ["WebRTC", "Rust", "React"],
    year: "2025",
    link: "#",
    featured: true,
  },
  {
    title: "Lumen DB",
    description: "Edge-native vector database with hybrid search.",
    tags: ["Go", "WASM", "Cloudflare"],
    year: "2024",
    link: "#",
  },
  {
    title: "Paperback",
    description: "Beautiful reading app with AI summaries and notes.",
    tags: ["Swift", "SwiftUI", "GPT-4"],
    year: "2024",
    link: "#",
  },
  {
    title: "Drift",
    description: "Minimal habit tracker built on local-first principles.",
    tags: ["React", "SQLite", "PWA"],
    year: "2023",
    link: "#",
  },
];

// EDIT YOUR PROFILE HERE
export const profile = {
  name: "YOUR NAME",
  tagline: "Software Developer • AI & Product Builder",
};
