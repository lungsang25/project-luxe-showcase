import { useEffect, useRef } from "react";
import * as THREE from "three";

export function SpaceBackground() {
  const mountRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const mount = mountRef.current;
    if (!mount) return;

    const scene = new THREE.Scene();
    scene.fog = new THREE.FogExp2(0x05060d, 0.0009);

    const camera = new THREE.PerspectiveCamera(
      70,
      window.innerWidth / window.innerHeight,
      0.1,
      2000,
    );
    camera.position.z = 1;

    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setClearColor(0x000000, 0);
    mount.appendChild(renderer.domElement);

    // Starfield — a tunnel/cloud of stars
    const STAR_COUNT = 1800;
    const positions = new Float32Array(STAR_COUNT * 3);
    const colors = new Float32Array(STAR_COUNT * 3);
    const sizes = new Float32Array(STAR_COUNT);

    const cyan = new THREE.Color(0.45, 0.85, 1.0);
    const violet = new THREE.Color(0.7, 0.45, 1.0);
    const white = new THREE.Color(1, 1, 1);

    for (let i = 0; i < STAR_COUNT; i++) {
      // Distribute stars in a large box around the camera
      positions[i * 3] = (Math.random() - 0.5) * 1600;
      positions[i * 3 + 1] = (Math.random() - 0.5) * 1600;
      positions[i * 3 + 2] = (Math.random() - 0.5) * 1600;

      const t = Math.random();
      const c = t < 0.6 ? white : t < 0.85 ? cyan : violet;
      colors[i * 3] = c.r;
      colors[i * 3 + 1] = c.g;
      colors[i * 3 + 2] = c.b;

      sizes[i] = Math.random() * 1.6 + 0.4;
    }

    const geometry = new THREE.BufferGeometry();
    geometry.setAttribute("position", new THREE.BufferAttribute(positions, 3));
    geometry.setAttribute("color", new THREE.BufferAttribute(colors, 3));
    geometry.setAttribute("size", new THREE.BufferAttribute(sizes, 1));

    // Round soft star sprite
    const canvas = document.createElement("canvas");
    canvas.width = canvas.height = 64;
    const ctx = canvas.getContext("2d")!;
    const grd = ctx.createRadialGradient(32, 32, 0, 32, 32, 32);
    grd.addColorStop(0, "rgba(255,255,255,1)");
    grd.addColorStop(0.4, "rgba(255,255,255,0.6)");
    grd.addColorStop(1, "rgba(255,255,255,0)");
    ctx.fillStyle = grd;
    ctx.fillRect(0, 0, 64, 64);
    const starTexture = new THREE.CanvasTexture(canvas);

    const material = new THREE.PointsMaterial({
      size: 2.2,
      map: starTexture,
      vertexColors: true,
      transparent: true,
      depthWrite: false,
      blending: THREE.AdditiveBlending,
      sizeAttenuation: true,
    });

    const stars = new THREE.Points(geometry, material);
    scene.add(stars);

    // Distant nebula glow planes
    const nebulaTex = (color: string) => {
      const c = document.createElement("canvas");
      c.width = c.height = 256;
      const cx = c.getContext("2d")!;
      const g = cx.createRadialGradient(128, 128, 0, 128, 128, 128);
      g.addColorStop(0, color);
      g.addColorStop(1, "rgba(0,0,0,0)");
      cx.fillStyle = g;
      cx.fillRect(0, 0, 256, 256);
      return new THREE.CanvasTexture(c);
    };

    const makeNebula = (color: string, x: number, y: number, z: number, scale: number) => {
      const sprite = new THREE.Sprite(
        new THREE.SpriteMaterial({
          map: nebulaTex(color),
          transparent: true,
          depthWrite: false,
          blending: THREE.AdditiveBlending,
          opacity: 0.55,
        }),
      );
      sprite.position.set(x, y, z);
      sprite.scale.set(scale, scale, 1);
      return sprite;
    };

    scene.add(makeNebula("rgba(140, 90, 255, 0.9)", -300, 120, -600, 900));
    scene.add(makeNebula("rgba(80, 200, 255, 0.8)", 350, -160, -500, 800));
    scene.add(makeNebula("rgba(200, 100, 255, 0.6)", 0, 0, -900, 1200));

    // Mouse parallax
    let mx = 0;
    let my = 0;
    const onMouse = (e: MouseEvent) => {
      mx = (e.clientX / window.innerWidth - 0.5) * 0.4;
      my = (e.clientY / window.innerHeight - 0.5) * 0.4;
    };
    window.addEventListener("mousemove", onMouse);

    const onResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    };
    window.addEventListener("resize", onResize);

    let raf = 0;
    const clock = new THREE.Clock();
    const animate = () => {
      const t = clock.getElapsedTime();
      stars.rotation.y = t * 0.02;
      stars.rotation.x = t * 0.01;

      // Slow forward drift through space
      camera.position.x += (mx * 30 - camera.position.x) * 0.02;
      camera.position.y += (-my * 30 - camera.position.y) * 0.02;
      camera.lookAt(0, 0, -100);

      renderer.render(scene, camera);
      raf = requestAnimationFrame(animate);
    };
    animate();

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("mousemove", onMouse);
      window.removeEventListener("resize", onResize);
      mount.removeChild(renderer.domElement);
      geometry.dispose();
      material.dispose();
      starTexture.dispose();
      renderer.dispose();
    };
  }, []);

  return (
    <div
      ref={mountRef}
      aria-hidden
      className="pointer-events-none fixed inset-0 -z-10"
      style={{
        background:
          "radial-gradient(ellipse at center, oklch(0.08 0.02 270) 0%, oklch(0.04 0.015 270) 60%, oklch(0.02 0.01 270) 100%)",
      }}
    />
  );
}
