import { useRef, useEffect } from "react";
import style from "./ParticlesBackground.module.css"

export default function ParticlesBackground() {
    const canvasRef = useRef(null);
    const starsRef = useRef([]);

    useEffect(() => {
        const canvas = canvasRef.current;
        const ctx = canvas.getContext("2d");

        const resizeCanvas = () => {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;

            starsRef.current.forEach((star) => {
                star.x = Math.random() * canvas.width;
                star.y = Math.random() * canvas.height;
            });
        };

        const initStars = (count = 50) => {
            starsRef.current = Array.from({ length: count }, () => ({
                x: Math.random() * canvas.width,
                y: Math.random() * canvas.height,
                radius: Math.random() * 2,
                dx: (Math.random() - 0.5) * 0.5,
                dy: (Math.random() - 0.5) * 0.5,
            }));
        };

        const animate = () => {
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            ctx.fillStyle = "#fff";

            starsRef.current.forEach((star) => {
                ctx.beginPath();
                ctx.arc(star.x, star.y, star.radius, 0, Math.PI * 2);
                ctx.fill();

                star.x += star.dx;
                star.y += star.dy;

                if (star.x >= canvas.width || star.x <= 0) star.dx *= -1;
                if (star.y >= canvas.height || star.y <= 0) star.dy *= -1;
            });

            requestAnimationFrame(animate);
        };

        resizeCanvas();
        initStars();
        animate();

        window.addEventListener("resize", resizeCanvas);

        return () => {
            window.removeEventListener("resize", resizeCanvas);
        };
    }, []);

    return <canvas ref={canvasRef} className={style.canvas} />;
}