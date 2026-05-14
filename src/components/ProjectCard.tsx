import { useRef, useState } from "react";
import { ArrowUpRight } from "lucide-react";
import type { Project } from "@/data/projects";

export function ProjectCard({ project, index }: { project: Project; index: number }) {
  const ref = useRef<HTMLAnchorElement>(null);
  const [tilt, setTilt] = useState({ rx: 0, ry: 0 });
  const [hover, setHover] = useState(false);

  const onMove = (e: React.MouseEvent) => {
    const el = ref.current;
    if (!el) return;
    const r = el.getBoundingClientRect();
    const x = (e.clientX - r.left) / r.width - 0.5;
    const y = (e.clientY - r.top) / r.height - 0.5;
    setTilt({ rx: -y * 10, ry: x * 12 });
  };
  const reset = () => {
    setTilt({ rx: 0, ry: 0 });
    setHover(false);
  };

  return (
    <a
      ref={ref}
      href={project.link}
      target="_blank"
      rel="noreferrer"
      onMouseMove={onMove}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={reset}
      className={`group perspective-1000 animate-rise-in block ${
        project.featured ? "sm:col-span-2" : ""
      }`}
      style={{ animationDelay: `${0.6 + index * 0.08}s` }}
    >
      <div
        className="preserve-3d relative h-full rounded-xl border border-border/70 bg-card/60 p-5 backdrop-blur-md transition-[transform,box-shadow,border-color] duration-300 ease-out will-change-transform"
        style={{
          transform: `rotateX(${tilt.rx}deg) rotateY(${tilt.ry}deg) translateZ(0)`,
          boxShadow: hover
            ? "0 24px 60px -20px oklch(0.85 0.18 200 / 0.45), 0 0 0 1px oklch(0.85 0.18 200 / 0.4) inset, 0 0 40px -10px oklch(0.7 0.22 300 / 0.45)"
            : "0 12px 40px -20px oklch(0 0 0 / 0.6), 0 0 0 1px oklch(1 0 0 / 0.04) inset",
        }}
      >
        {/* Gradient sheen */}
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 rounded-xl opacity-0 transition-opacity duration-300 group-hover:opacity-100"
          style={{
            background:
              "radial-gradient(600px circle at var(--mx, 50%) var(--my, 0%), oklch(0.85 0.18 200 / 0.08), transparent 40%)",
          }}
        />

        <div className="flex items-start justify-between gap-3">
          <div>
            <h3 className="font-display text-lg font-semibold sm:text-xl">
              {project.title}
            </h3>
            <p className="mt-1 text-sm text-muted-foreground">{project.description}</p>
          </div>
          <ArrowUpRight
            className="h-5 w-5 shrink-0 text-muted-foreground transition-all duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-[var(--cyan)]"
            aria-hidden
          />
        </div>

        <div className="mt-4 flex flex-wrap items-center gap-1.5">
          {project.tags.map((t) => (
            <span
              key={t}
              className="rounded-full border border-border/60 bg-secondary/50 px-2 py-0.5 text-[10px] uppercase tracking-wider text-muted-foreground"
            >
              {t}
            </span>
          ))}
          <span className="ml-auto text-[11px] tabular-nums text-muted-foreground/70">
            {project.year}
          </span>
        </div>
      </div>
    </a>
  );
}
