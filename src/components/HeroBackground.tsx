import React, { useEffect, useRef } from "react";
import { useTheme } from "./ThemeProvider";

const HeroBackground: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const { theme } = useTheme();
  const animRef = useRef<number>(0);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let w = 0;
    let h = 0;

    const resize = () => {
      const parent = canvas.parentElement;
      if (!parent) return;
      w = parent.clientWidth;
      h = parent.clientHeight;
      canvas.width = w * window.devicePixelRatio;
      canvas.height = h * window.devicePixelRatio;
      canvas.style.width = w + "px";
      canvas.style.height = h + "px";
      ctx.scale(window.devicePixelRatio, window.devicePixelRatio);
    };

    resize();
    window.addEventListener("resize", resize);

    let time = 0;

    const draw = () => {
      time += 0.003;
      ctx.clearRect(0, 0, w, h);

      const isLight = theme === "light";

      const orbs = [
        { x: w * 0.25 + Math.sin(time * 0.7) * 60, y: h * 0.3 + Math.cos(time * 0.5) * 40, r: 280, color: isLight ? "0, 184, 163" : "0, 229, 204" },
        { x: w * 0.7 + Math.cos(time * 0.6) * 50, y: h * 0.6 + Math.sin(time * 0.4) * 45, r: 240, color: isLight ? "99, 102, 241" : "99, 102, 241" },
        { x: w * 0.5 + Math.sin(time * 0.8) * 70, y: h * 0.75 + Math.cos(time * 0.3) * 35, r: 200, color: isLight ? "236, 72, 153" : "236, 72, 153" },
      ];

      for (const orb of orbs) {
        const grad = ctx.createRadialGradient(orb.x, orb.y, 0, orb.x, orb.y, orb.r);
        grad.addColorStop(0, `rgba(${orb.color}, ${isLight ? 0.18 : 0.08})`);
        grad.addColorStop(1, `rgba(${orb.color}, 0)`);
        ctx.fillStyle = grad;
        ctx.beginPath();
        ctx.arc(orb.x, orb.y, orb.r, 0, Math.PI * 2);
        ctx.fill();
      }

      animRef.current = requestAnimationFrame(draw);
    };

    animRef.current = requestAnimationFrame(draw);

    return () => {
      cancelAnimationFrame(animRef.current);
      window.removeEventListener("resize", resize);
    };
  }, [theme]);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 pointer-events-none"
      style={{ zIndex: 0 }}
    />
  );
};

export default HeroBackground;
