import React, { useRef, useEffect } from 'react';

const Canvas = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    canvas.width = 1920;
    canvas.height = 1080;

    let szczupakX = 0;
    let szczupakY = 300;
    let szczupakSpeed = 2;
    let szczupakWidth = 400;
    let szczupakHeight = 100;

    let wodorostyOffset = 0;

    const drawBackground = () => {
      ctx.fillStyle = '#87CEEB'; // Kolor nieba
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      ctx.fillStyle = '#1E90FF'; // Kolor wody
      ctx.fillRect(0, 400, canvas.width, 200);
    };

    const drawWodorosty = () => {
      ctx.fillStyle = 'green';
      for (let i = 0; i < canvas.width; i += 50) {
        ctx.beginPath();
        ctx.moveTo(i, 600);
        for (let j = 0; j < 100; j += 20) {
          ctx.lineTo(i + 10 * Math.sin((j + wodorostyOffset) / 10), 600 - j - 20);
        }
        ctx.lineTo(i, 600);
        ctx.fill();
      }
    };

    const drawSzczupak = () => {
      ctx.beginPath();
      ctx.moveTo(szczupakX, szczupakY);
      ctx.quadraticCurveTo(szczupakX + 100, szczupakY - 100, szczupakX + 200, szczupakY);
      ctx.quadraticCurveTo(szczupakX + 300, szczupakY + 100, szczupakX + 400, szczupakY);
      ctx.lineTo(szczupakX + 360, szczupakY + 10);
      ctx.lineTo(szczupakX + 360, szczupakY - 10);
      ctx.lineTo(szczupakX + 400, szczupakY);
      ctx.quadraticCurveTo(szczupakX + 300, szczupakY - 100, szczupakX + 200, szczupakY);
      ctx.quadraticCurveTo(szczupakX + 100, szczupakY + 100, szczupakX, szczupakY);
      ctx.closePath();

      const gradient = ctx.createLinearGradient(szczupakX, szczupakY, szczupakX + 400, szczupakY);
      gradient.addColorStop(0, 'green');
      gradient.addColorStop(0.5, 'yellow');
      gradient.addColorStop(1, 'green');
      ctx.fillStyle = gradient;
      ctx.fill();
      ctx.strokeStyle = 'darkgreen';
      ctx.stroke();

      // Oko
      ctx.beginPath();
      ctx.arc(szczupakX + 20, szczupakY - 10, 10, 0, Math.PI * 2, true);
      ctx.fillStyle = 'white';
      ctx.fill();
      ctx.stroke();

      ctx.beginPath();
      ctx.arc(szczupakX + 25, szczupakY - 10, 5, 0, Math.PI * 2, true);
      ctx.fillStyle = 'black';
      ctx.fill();

      // Płetwy
      ctx.beginPath();
      ctx.moveTo(szczupakX + 150, szczupakY + 50);
      ctx.lineTo(szczupakX + 120, szczupakY + 70);
      ctx.lineTo(szczupakX + 140, szczupakY + 90);
      ctx.lineTo(szczupakX + 150, szczupakY + 50);
      ctx.closePath();
      ctx.fillStyle = 'darkgreen';
      ctx.fill();
      ctx.stroke();

      ctx.beginPath();
      ctx.moveTo(szczupakX + 250, szczupakY - 50);
      ctx.lineTo(szczupakX + 220, szczupakY - 30);
      ctx.lineTo(szczupakX + 240, szczupakY - 10);
      ctx.lineTo(szczupakX + 250, szczupakY - 50);
      ctx.closePath();
      ctx.fillStyle = 'darkgreen';
      ctx.fill();
      ctx.stroke();
    };

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      drawBackground();
      drawWodorosty();
      drawSzczupak();
      szczupakX += szczupakSpeed;
      if (szczupakX > canvas.width) {
        szczupakX = -400;
      }
      wodorostyOffset += 1;
      requestAnimationFrame(animate);
    };

    const handleClick = (event) => {
      const rect = canvas.getBoundingClientRect();
      const mouseX = event.clientX - rect.left;
      const mouseY = event.clientY - rect.top;

      if (
        mouseX >= szczupakX &&
        mouseX <= szczupakX + szczupakWidth &&
        mouseY >= szczupakY - szczupakHeight / 2 &&
        mouseY <= szczupakY + szczupakHeight / 2
      ) {
        window.open('https://www.youtube.com/watch?v=dQw4w9WgXcQ', '_blank');
      }
    };

    canvas.addEventListener('click', handleClick);

    animate();

    return () => {
      canvas.removeEventListener('click', handleClick);
    };
  }, []);

  return <canvas ref={canvasRef} />;
};

export default Canvas;
