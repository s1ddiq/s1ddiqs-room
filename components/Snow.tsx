'use client';

import { useEffect, useRef } from 'react';

export default function Snow() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let width = window.innerWidth;
    let height = window.innerHeight;
    canvas.width = width;
    canvas.height = height;

    const snowflakes = Array.from({ length: 300 }, () => ({
      x: Math.random() * width,
      y: Math.random() * height,
      r: Math.random() * 4 + 1,
      d: Math.random() * 200,
    }));

    let angle = 0;

    function draw() {
      ctx?.clearRect(0, 0, width, height);
      if (!ctx) return;
      ctx.fillStyle = 'white';
      ctx?.beginPath();
      snowflakes.forEach(flake => {
        ctx?.moveTo(flake.x, flake.y);
        ctx?.arc(flake.x, flake.y, flake.r, 0, Math.PI * 2, true);
      });
      ctx?.fill();
      update();
    }

    function update() {
      angle += 0.01;
      snowflakes.forEach(flake => {
        flake.y += Math.cos(flake.d) + 1 + flake.r / 2;
        flake.x += Math.sin(angle) * 2;

        if (flake.y > height) {
          flake.y = 0;
          flake.x = Math.random() * width;
        }
      });
    }

    const animate = () => {
      draw();
      requestAnimationFrame(animate);
    };

    animate();

    const handleResize = () => {
      width = window.innerWidth;
      height = window.innerHeight;
      canvas.width = width;
      canvas.height = height;
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        pointerEvents: 'none',
        zIndex: 4,
        
      }}
    />
  );
}
