import { createFileRoute } from "@tanstack/react-router";
import { SpaceBackground } from "@/components/SpaceBackground";
import { ProfileCard } from "@/components/ProfileCard";
import { ProjectGrid } from "@/components/ProjectGrid";
import { profile } from "@/data/projects";

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: [
      { title: `${profile.name} — Projects` },
      {
        name: "description",
        content: `Selected tech projects by ${profile.name}. ${profile.tagline}.`,
      },
      { property: "og:title", content: `${profile.name} — Projects` },
      {
        property: "og:description",
        content: `Selected tech projects by ${profile.name}.`,
      },
    ],
  }),
});

function Index() {
  return (
    <main className="relative min-h-screen">
      <SpaceBackground />
      <link
        rel="preconnect"
        href="https://fonts.googleapis.com"
      />
      <link
        href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600&family=Space+Grotesk:wght@500;600;700&display=swap"
        rel="stylesheet"
      />

      <section className="mx-auto flex min-h-screen max-w-6xl flex-col justify-center gap-8 px-5 py-10 sm:gap-10 sm:py-14">
        <ProfileCard />
        <ProjectGrid />
      </section>
    </main>
  );
}
