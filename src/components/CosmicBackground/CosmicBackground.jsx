import React, { useEffect, useRef } from 'react';
import './CosmicBackground.css';

const CosmicBackground = ({ variant = 'full' }) => {
    const canvasRef = useRef(null);
    const nebulaRef = useRef(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;

        const ctx = canvas.getContext('2d');
        let animationId;

        const resize = () => {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
        };

        resize();
        window.addEventListener('resize', resize);

        // Create nebula clouds
        const createNebulaClouds = () => {
            const nebulaDiv = nebulaRef.current;
            if (!nebulaDiv) return;

            nebulaDiv.innerHTML = '';
            for (let i = 0; i < 3; i++) {
                const neb = document.createElement('div');
                neb.style.position = 'absolute';
                neb.style.left = (20 + i * 30) + 'vw';
                neb.style.top = (10 + i * 25) + 'vh';
                neb.style.width = (320 + i * 80) + 'px';
                neb.style.height = (180 + i * 60) + 'px';
                neb.style.background = `radial-gradient(circle at 40% 40%, rgba(127,0,255,0.3) 0%, rgba(229,46,113,0.18) 60%, rgba(255,138,0,0.12) 100%)`;
                neb.style.filter = 'blur(60px)';
                neb.style.borderRadius = '50%';
                neb.style.opacity = 0.7 - i * 0.2;
                nebulaDiv.appendChild(neb);
            }
        };

        // Initialize stars
        const twinkleStars = [];
        for (let i = 0; i < 40; i++) {
            twinkleStars.push({
                x: Math.random() * window.innerWidth,
                y: Math.random() * window.innerHeight,
                r: Math.random() * 1.8 + 0.8,
                phase: Math.random() * Math.PI * 2
            });
        }

        // Initialize planets
        const planets = [
            { x: 120, y: 180, r: 38, color: '#e52e71', angle: 0, speed: 0.0007 },
            { x: 420, y: 80, r: 22, color: '#7f00ff', angle: 0, speed: 0.0012 },
            { x: 900, y: 320, r: 28, color: '#ff8a00', angle: 0, speed: 0.0009 }
        ];

        // Initialize comets
        let comets = [];
        const spawnComet = () => {
            comets.push({
                x: Math.random() * window.innerWidth,
                y: Math.random() * window.innerHeight * 0.5,
                len: Math.random() * 80 + 40,
                speed: Math.random() * 2 + 1,
                alpha: 1
            });
        };

        const cometInterval = setInterval(spawnComet, 3500);

        // Draw aurora ribbons
        const drawAurora = (ctx) => {
            ctx.save();
            ctx.globalAlpha = 0.18;
            for (let i = 0; i < 2; i++) {
                ctx.beginPath();
                for (let x = 0; x < window.innerWidth; x += 12) {
                    let y = Math.sin((Date.now() / 1200 + x / 80 + i * 2)) * 38 + 120 + i * 120;
                    ctx.lineTo(x, y);
                }
                ctx.strokeStyle = i === 0 ? '#7f00ff' : '#e52e71';
                ctx.lineWidth = 18;
                ctx.shadowColor = i === 0 ? '#7f00ff' : '#e52e71';
                ctx.shadowBlur = 24;
                ctx.stroke();
            }
            ctx.restore();
        };

        let scrollY = 0;
        const updateScroll = () => {
            scrollY = window.scrollY || window.pageYOffset;
        };
        window.addEventListener('scroll', updateScroll);

        // Animation loop
        const animate = () => {
            ctx.clearRect(0, 0, canvas.width, canvas.height);

            // Twinkling stars
            ctx.save();
            for (let star of twinkleStars) {
                ctx.globalAlpha = 0.7 + 0.3 * Math.sin(Date.now() / 600 + star.phase);
                ctx.beginPath();
                ctx.arc(star.x, star.y - scrollY * 0.3, star.r, 0, Math.PI * 2);
                ctx.fillStyle = '#fff';
                ctx.shadowColor = '#fff';
                ctx.shadowBlur = 12;
                ctx.fill();
            }
            ctx.restore();

            if (variant === 'full') {
                // Planets
                for (let planet of planets) {
                    planet.angle += planet.speed;
                    let px = planet.x + Math.cos(planet.angle) * 60;
                    let py = planet.y + Math.sin(planet.angle) * 40;
                    ctx.save();
                    ctx.globalAlpha = 0.7;
                    ctx.beginPath();
                    ctx.arc(px, py - scrollY * 0.2, planet.r, 0, Math.PI * 2);
                    ctx.fillStyle = planet.color;
                    ctx.shadowColor = planet.color;
                    ctx.shadowBlur = 32;
                    ctx.fill();
                    ctx.restore();
                }

                // Comets
                for (let comet of comets) {
                    ctx.save();
                    ctx.globalAlpha = comet.alpha;
                    ctx.strokeStyle = '#fff';
                    ctx.lineWidth = 2.5;
                    ctx.beginPath();
                    ctx.moveTo(comet.x, comet.y - scrollY * 0.25);
                    ctx.lineTo(comet.x + comet.len, comet.y + comet.len * 0.2 - scrollY * 0.25);
                    ctx.stroke();
                    ctx.restore();
                    comet.x += comet.speed;
                    comet.y += comet.speed * 0.3;
                    comet.alpha -= 0.008;
                }
                comets = comets.filter(c => c.alpha > 0);

                // Aurora ribbons
                drawAurora(ctx);
            }

            animationId = requestAnimationFrame(animate);
        };

        createNebulaClouds();
        animate();

        return () => {
            window.removeEventListener('resize', resize);
            window.removeEventListener('scroll', updateScroll);
            clearInterval(cometInterval);
            if (animationId) {
                cancelAnimationFrame(animationId);
            }
        };
    }, [variant]);

    return (
        <div className="cosmic-background">
            <div
                ref={nebulaRef}
                className="nebula-bg"
                aria-hidden="true"
            />
            <canvas
                ref={canvasRef}
                className="cosmic-canvas"
            />
        </div>
    );
};

export default CosmicBackground;