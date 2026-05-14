import { profile } from "@/data/projects";

export function ProfileCard() {
  return (
    <div className="perspective-1000 flex justify-center">
      <div className="animate-portal-in preserve-3d relative">
        {/* Portal glow behind */}
        <div
          aria-hidden
          className="absolute inset-0 -z-10 mx-auto h-full w-full rounded-2xl blur-2xl opacity-70"
          style={{
            background:
              "radial-gradient(ellipse at center, var(--cyan), var(--violet) 50%, transparent 75%)",
          }}
        />
        <div
          className="relative rounded-2xl border border-border/60 bg-card/70 px-8 py-5 backdrop-blur-md sm:px-12 sm:py-6"
          style={{
            boxShadow:
              "0 30px 80px -20px oklch(0.7 0.22 300 / 0.45), 0 0 0 1px oklch(0.85 0.18 200 / 0.15) inset",
          }}
        >
          <h1 className="font-display text-center text-3xl font-semibold tracking-tight sm:text-5xl">
            <span className="text-glow-cyan bg-gradient-to-r from-[oklch(0.92_0.05_220)] via-[oklch(0.85_0.18_200)] to-[oklch(0.7_0.22_300)] bg-clip-text text-transparent">
              {profile.name}
            </span>
          </h1>
          <p className="mt-2 text-center text-xs text-muted-foreground sm:text-sm">
            {profile.tagline}
          </p>
        </div>
      </div>
    </div>
  );
}
