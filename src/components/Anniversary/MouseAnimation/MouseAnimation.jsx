import { useEffect, useRef } from 'react';
import './MouseAnimation.css'
const ParticleCanvas = () => {
    let canvas, ctx, w, h, particles = [];
    let mouse = {
        x: undefined,
        y: undefined,
    };
    let hue = 0;

    useEffect(() => {
        const init = () => {
            canvas = canvasRef.current;
            ctx = canvas.getContext('2d');
            resizeReset();
            animationLoop();
        };

        const resizeReset = () => {
            w = canvas.width = window.innerWidth;
            h = canvas.height = window.innerHeight;
        };

        const mousemove = (e) => {
            mouse.x = e.clientX;
            mouse.y = e.clientY;
        };

        const mouseout = () => {
            mouse.x = undefined;
            mouse.y = undefined;
        };

        const animationLoop = () => {
            if (mouse.x !== undefined && mouse.y !== undefined) {
                hue += 2;
                particles.push(new Particle(mouse.x, mouse.y));
            }

            ctx.clearRect(0, 0, w, h);
            ctx.globalCompositeOperation = 'lighter';

            drawScene();
            arrayCleanup();
            requestAnimationFrame(animationLoop);
        };

        const arrayCleanup = () => {
            let dump = [];
            particles.forEach((particle) => {
                if (particle.radius > 0) {
                    dump.push(particle);
                }
            });
            particles = dump;
        };

        const drawScene = () => {
            particles.forEach((particle) => {
                particle.update();
                particle.draw();
            });
        };

        class Particle {
            constructor(x, y) {
                this.x = x;
                this.y = y;
                this.radius = 5;
                this.size = 0;
                this.rotate = 0;
                this.hue = hue % 360;
                this.alpha = 0.5;
            }

            setPoint() {
                let r, x, y;
                this.point = [];
                for (let a = 0; a < 360; a += 36) {
                    let d = (a / 36) % 2 === 0 ? this.size : this.size / 2;
                    r = (Math.PI / 180) * (a + this.rotate);
                    x = this.x + d * Math.sin(r);
                    y = this.y + d * Math.cos(r);
                    this.point.push({ x: x, y: y, r: this.radius });
                }
            }

            draw() {
                if (this.radius <= 0) return;
                // draw points
                this.point.forEach((p) => {
                    ctx.beginPath();
                    ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
                    ctx.fillStyle = `hsla(${this.hue}, 100%, 50%, ${this.alpha})`;
                    ctx.fill();
                    ctx.closePath();
                });

                // draw lines
                ctx.beginPath();
                for (let i = 0; i < this.point.length; i++) {
                    if (i === 0) {
                        ctx.moveTo(this.point[i].x, this.point[i].y);
                    } else {
                        ctx.lineTo(this.point[i].x, this.point[i].y);
                    }
                }
                ctx.closePath();
                ctx.strokeStyle = `hsla(${this.hue}, 100%, 50%, ${this.alpha})`;
                ctx.stroke();
            }

            update() {
                this.setPoint();
                this.radius -= 0.05;
                this.size += 0.5;
                this.rotate -= 1;
                this.alpha = this.radius * 0.5 < 0.5 ? this.radius * 0.5 : 0.5;
            }
        }

        init();

        window.addEventListener('resize', resizeReset);
        window.addEventListener('mousemove', mousemove);
        window.addEventListener('mouseout', mouseout);

        return () => {
            window.removeEventListener('resize', resizeReset);
            window.removeEventListener('mousemove', mousemove);
            window.removeEventListener('mouseout', mouseout);
        };
    }, []);

    const canvasRef = useRef(null);

    return (
        <canvas ref={canvasRef}>
        </canvas>
    );
};

export default ParticleCanvas;
