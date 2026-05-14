import { profile } from "@/data/projects";

export function ProfileCard() {
  return (
    <div className="animate-portal-in flex w-full items-start justify-between gap-6">
      <div>
        <h1 className="font-display text-lg font-semibold sm:text-xl">
          <span className="text-glow-cyan bg-gradient-to-r from-[oklch(0.92_0.05_220)] via-[oklch(0.85_0.18_200)] to-[oklch(0.7_0.22_300)] bg-clip-text text-transparent">
            {profile.name}
          </span>
        </h1>
        <p className="mt-1 text-sm text-muted-foreground">{profile.tagline}</p>
      </div>

      <div className="text-right text-sm">
        <p className="text-muted-foreground">© {profile.year} {profile.name}</p>
        <ul className="mt-1 flex flex-col items-end gap-0.5 sm:flex-row sm:gap-4">
          {profile.socials.map((s) => (
            <li key={s.label}>
              <a
                href={s.href}
                target="_blank"
                rel="noreferrer"
                className="text-[var(--cyan)] transition-colors hover:text-[var(--violet)]"
              >
                {s.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
