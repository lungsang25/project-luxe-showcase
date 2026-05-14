import { useEffect, useRef } from "react";

export function ParallaxBackground() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handle = (e: MouseEvent) => {
      if (!ref.current) return;
      const x = (e.clientX / window.innerWidth - 0.5) * 20;
      const y = (e.clientY / window.innerHeight - 0.5) * 20;
      ref.current.style.setProperty("--px", `${x}px`);
      ref.current.style.setProperty("--py", `${y}px`);
    };
    window.addEventListener("mousemove", handle);
    return () => window.removeEventListener("mousemove", handle);
  }, []);

  // Generate stable particle positions
  const particles = Array.from({ length: 28 }, (_, i) => ({
    left: `${(i * 37) % 100}%`,
    top: `${(i * 53) % 100}%`,
    delay: `${(i % 10) * 0.6}s`,
    duration: `${8 + (i % 6)}s`,
    size: i % 3 === 0 ? 3 : 1.5,
  }));

  return (
    <div
      ref={ref}
      aria-hidden
      className="pointer-events-none fixed inset-0 -z-10 overflow-hidden bg-mystery"
    >
      {/* Parallax glow blobs */}
      <div
        className="absolute -top-40 -left-40 h-[480px] w-[480px] rounded-full opacity-40 blur-3xl animate-float-slow"
        style={{
          background: "radial-gradient(circle, var(--violet), transparent 70%)",
          transform: "translate(var(--px,0), var(--py,0))",
        }}
      />
      <div
        className="absolute bottom-[-200px] right-[-160px] h-[520px] w-[520px] rounded-full opacity-30 blur-3xl animate-float-slow"
        style={{
          background: "radial-gradient(circle, var(--cyan), transparent 70%)",
          animationDelay: "2s",
          transform: "translate(calc(var(--px,0) * -1), calc(var(--py,0) * -1))",
        }}
      />

      {/* Light rays */}
      <div
        className="absolute -top-20 left-1/4 h-[140vh] w-[40vw] origin-top opacity-20 blur-2xl animate-rays"
        style={{
          background:
            "linear-gradient(180deg, oklch(0.85 0.18 200 / 0.55), transparent 70%)",
          transform: "rotate(-8deg)",
        }}
      />

      {/* Particles */}
      {particles.map((p, i) => (
        <span
          key={i}
          className="absolute rounded-full bg-foreground/70 animate-particle"
          style={{
            left: p.left,
            top: p.top,
            width: p.size,
            height: p.size,
            animationDelay: p.delay,
            animationDuration: p.duration,
            boxShadow: "0 0 8px oklch(0.85 0.18 200 / 0.8)",
          }}
        />
      ))}

      {/* Vignette */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse at center, transparent 40%, oklch(0.04 0.01 270 / 0.7) 100%)",
        }}
      />
    </div>
  );
}
