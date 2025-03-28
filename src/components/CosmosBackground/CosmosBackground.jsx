import React, { useRef, useEffect } from 'react';
import css from './CosmosBackground.module.css';

function CosmosBackground() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');

    let animationFrameId;
    const stars = [];

    function resizeCanvas() {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    }
    window.addEventListener('resize', resizeCanvas);
    resizeCanvas();

    function createStar() {
      return {
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        r: Math.random() * 2 + 1,            
        speedX: (Math.random() - 0.5) * 0.5, 
        speedY: Math.random() * 2 + 0.5,     
      };
    }

    for (let i = 0; i < 50; i++) {
      stars.push(createStar());
    }

    function animate() {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      for (let i = 0; i < stars.length; i++) {
        const s = stars[i];
        s.x += s.speedX;
        s.y += s.speedY;

        if (s.y > canvas.height) {
          s.x = Math.random() * canvas.width;
          s.y = -10; 
        }

        ctx.beginPath();
        ctx.arc(s.x, s.y, s.r, 0, Math.PI * 2);
        ctx.fillStyle = '#fff';
        ctx.fill();
      }

      animationFrameId = requestAnimationFrame(animate);
    }
    animate();

    return () => {
      window.removeEventListener('resize', resizeCanvas);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <div className={css.backgroundContainer}>
      <div className={css.backgroundImage} />

      <canvas ref={canvasRef} className={css.canvasElement} />
    </div>
  );
}

export default CosmosBackground;
