// src/components/MatrixBackground.js
import React, { useEffect, useRef } from 'react';

const MatrixBackground = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    // Canvas setup
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');

    // Characters used in the animation
    const letters = 'アァカサタナハマヤャラワン0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const fontSize = 16;
    let columns;
    let drops;

    // Function to resize canvas and reset drops
    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;

      columns = Math.floor(canvas.width / fontSize);
      drops = Array(columns).fill(0);
    };

    // Initial resize
    resizeCanvas();

    // Draw function
    const draw = () => {
      ctx.fillStyle = 'rgba(0, 0, 0, 0.05)';
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      ctx.fillStyle = '#0F0'; // Green text
      ctx.font = `${fontSize}px monospace`;

      for (let i = 0; i < drops.length; i++) {
        const text = letters.charAt(Math.floor(Math.random() * letters.length));
        const x = i * fontSize;
        const y = drops[i] * fontSize;

        ctx.fillText(text, x, y);

        if (y > canvas.height && Math.random() > 0.975) {
          drops[i] = 0;
        } else {
          drops[i]++;
        }
      }
    };

    const interval = setInterval(draw, 33);

    // Handle window resize
    window.addEventListener('resize', resizeCanvas);

    // Cleanup on component unmount
    return () => {
      clearInterval(interval);
      window.removeEventListener('resize', resizeCanvas);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%', // Ensure canvas spans full width
        height: '100%', // Ensure canvas spans full height
        zIndex: -1,
      }}
    />
  );
};

export default MatrixBackground;
