import { useRef, useEffect } from "react";
import style from "./ParticlesBackground.module.css"

export default function ParticlesBackground() {
    const canvasRef = useRef(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        const ctx = canvas.getContext("2d");

        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;

        let stars = [];
        for (let i = 0; i < 100; i++) {
            stars.push({
                x: Math.random() * canvas.width,
                y: Math.random() * canvas.height,
                radius: Math.random() * 2,
                dx: Math.random() * 0.5,
                dy: Math.random() * 0.5,
            });
        }

        const draw = () => {
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            ctx.fillStyle = "#fff";

            stars.forEach((star) => {
                ctx.beginPath();
                ctx.arc(star.x, star.y, star.radius, 0, Math.PI * 2);
                ctx.fill();

                star.x += star.dx;
                star.y += star.dy;

                if (star.x > canvas.width || star.x < 0) star.dx *= -1;
                if (star.y > canvas.height || star.y < 0) star.dy *= -1;
            });

            requestAnimationFrame(draw);
        };

        draw();
    }, []);

    return <canvas ref={canvasRef} className={style.canvas}></canvas>;
}