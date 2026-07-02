import React, { useCallback, useEffect, useMemo, useRef } from "react";

const hexToRgb = (hex) => {
  const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);

  return result
    ? {
        r: parseInt(result[1], 16),
        g: parseInt(result[2], 16),
        b: parseInt(result[3], 16),
      }
    : { r: 0, g: 0, b: 0 };
};

const DotPattern = ({
  dotSize = 2.5,
  gap = 20,
  baseColor = "#2a2f45",
  glowColor = "#a855f7",
  proximity = 120,
  waveSpeed = 0.8,
}) => {
  const canvasRef = useRef(null);
  const containerRef = useRef(null);
  const dotsRef = useRef([]);
  const mouseRef = useRef({ x: -1000, y: -1000 });
  const animationRef = useRef(null);
  const startTimeRef = useRef(Date.now());

  const baseRgb = useMemo(() => hexToRgb(baseColor), [baseColor]);
  const glowRgb = useMemo(() => hexToRgb(glowColor), [glowColor]);

  const buildGrid = useCallback(() => {
    const canvas = canvasRef.current;
    const container = containerRef.current;

    if (!canvas || !container) return;

    const rect = container.getBoundingClientRect();
    const dpr = window.devicePixelRatio || 1;

    canvas.width = rect.width * dpr;
    canvas.height = rect.height * dpr;

    canvas.style.width = `${rect.width}px`;
    canvas.style.height = `${rect.height}px`;

    const ctx = canvas.getContext("2d");

    // Reset transform before scaling (important on resize)
    ctx.setTransform(1, 0, 0, 1, 0, 0);
    ctx.scale(dpr, dpr);

    // Responsive spacing
    const isMobile = window.innerWidth < 640;
    const responsiveGap = isMobile ? gap + 8 : gap;

    const cellSize = dotSize + responsiveGap;

    const cols = Math.ceil(rect.width / cellSize) + 1;
    const rows = Math.ceil(rect.height / cellSize) + 1;

    const dots = [];

    for (let row = 0; row < rows; row++) {
      for (let col = 0; col < cols; col++) {
        dots.push({
          x: col * cellSize,
          y: row * cellSize,
          baseOpacity: 0.15 + Math.random() * 0.1,
        });
      }
    }

    dotsRef.current = dots;
  }, [dotSize, gap]);

  const draw = useCallback(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    const dpr = window.devicePixelRatio || 1;

    ctx.clearRect(0, 0, canvas.width / dpr, canvas.height / dpr);

    const { x: mx, y: my } = mouseRef.current;
    const proxSq = proximity * proximity;

    const time = (Date.now() - startTimeRef.current) * 0.001 * waveSpeed;

    const width = canvas.width / dpr;
    const height = canvas.height / dpr;

    // Free roaming glowing orb
    const orbX =
      width / 2 +
      Math.cos(time * 0.7) * width * 0.35 +
      Math.sin(time * 1.3) * width * 0.12;

    const orbY =
      height / 2 +
      Math.sin(time * 0.9) * height * 0.35 +
      Math.cos(time * 1.1) * height * 0.12;

    // Responsive orb size
    const orbRadius = window.innerWidth < 640 ? 180 : 280;
    const orbRadiusSq = orbRadius * orbRadius;

    for (const dot of dotsRef.current) {
      const dx = dot.x - mx;
      const dy = dot.y - my;
      const distSq = dx * dx + dy * dy;

      const ox = dot.x - orbX;
      const oy = dot.y - orbY;
      const orbDistSq = ox * ox + oy * oy;

      let opacity = dot.baseOpacity;
      let scale = 1;

      let r = baseRgb.r;
      let g = baseRgb.g;
      let b = baseRgb.b;

      // Roaming orb glow
      if (orbDistSq < orbRadiusSq) {
        const dist = Math.sqrt(orbDistSq);
        const t = 1 - dist / orbRadius;

        r = Math.round(baseRgb.r + (glowRgb.r - baseRgb.r) * t * 0.75);
        g = Math.round(baseRgb.g + (glowRgb.g - baseRgb.g) * t * 0.75);
        b = Math.round(baseRgb.b + (glowRgb.b - baseRgb.b) * t * 0.75);

        opacity += t * 0.6;
        scale += t * 0.6;
      }

      // Mouse / Touch interaction
      if (distSq < proxSq) {
        const dist = Math.sqrt(distSq);
        const t = 1 - dist / proximity;

        r = Math.round(baseRgb.r + (glowRgb.r - baseRgb.r) * t);
        g = Math.round(baseRgb.g + (glowRgb.g - baseRgb.g) * t);
        b = Math.round(baseRgb.b + (glowRgb.b - baseRgb.b) * t);

        opacity += t * 0.85;
        scale += t * 0.85;
      }

      ctx.beginPath();
      ctx.arc(dot.x, dot.y, (dotSize / 2) * scale, 0, Math.PI * 2);
      ctx.fillStyle = `rgba(${r}, ${g}, ${b}, ${opacity})`;
      ctx.fill();
    }

    animationRef.current = requestAnimationFrame(draw);
  }, [proximity, baseRgb, glowRgb, dotSize, waveSpeed]);

  useEffect(() => {
    buildGrid();

    const resizeObserver = new ResizeObserver(buildGrid);

    if (containerRef.current) {
      resizeObserver.observe(containerRef.current);
    }

    return () => resizeObserver.disconnect();
  }, [buildGrid]);

  useEffect(() => {
    animationRef.current = requestAnimationFrame(draw);

    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, [draw]);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const isTouchDevice =
      "ontouchstart" in window || navigator.maxTouchPoints > 0;

    const handleMouseMove = (e) => {
      const rect = container.getBoundingClientRect();

      mouseRef.current = {
        x: e.clientX - rect.left,
        y: e.clientY - rect.top,
      };
    };

    const handleTouchMove = (e) => {
      const rect = container.getBoundingClientRect();
      const touch = e.touches[0];

      mouseRef.current = {
        x: touch.clientX - rect.left,
        y: touch.clientY - rect.top,
      };
    };

    const handleLeave = () => {
      mouseRef.current = { x: -1000, y: -1000 };
    };

    // Desktop
    if (!isTouchDevice) {
      container.addEventListener("mousemove", handleMouseMove);
      container.addEventListener("mouseleave", handleLeave);
    }

    // Mobile / Touch
    if (isTouchDevice) {
      container.addEventListener("touchmove", handleTouchMove);
      container.addEventListener("touchend", handleLeave);
    }

    return () => {
      container.removeEventListener("mousemove", handleMouseMove);
      container.removeEventListener("mouseleave", handleLeave);
      container.removeEventListener("touchmove", handleTouchMove);
      container.removeEventListener("touchend", handleLeave);
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className="absolute inset-0 overflow-hidden z-0"
    >
      <canvas ref={canvasRef} className="absolute inset-0 w-full h-full" />
    </div>
  );
};

export default DotPattern;