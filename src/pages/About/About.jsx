import React, { useEffect, useRef } from 'react';
import './About.css';

const About = () => {
    const canvasRef = useRef(null);

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

        // Create stars for animated background
        const stars = Array.from({ length: 80 }, () => ({
            x: Math.random() * window.innerWidth,
            y: Math.random() * window.innerHeight,
            r: Math.random() * 1.2 + 0.5,
            dx: (Math.random() - 0.5) * 0.15,
            dy: (Math.random() - 0.5) * 0.15,
            alpha: Math.random() * 0.5 + 0.5
        }));

        const drawStars = () => {
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            for (const s of stars) {
                ctx.save();
                ctx.globalAlpha = s.alpha;
                ctx.beginPath();
                ctx.arc(s.x, s.y, s.r, 0, 2 * Math.PI);
                ctx.fillStyle = '#fff';
                ctx.shadowColor = '#fff';
                ctx.shadowBlur = 8;
                ctx.fill();
                ctx.restore();
                s.x += s.dx;
                s.y += s.dy;
                if (s.x < 0 || s.x > canvas.width) s.dx *= -1;
                if (s.y < 0 || s.y > canvas.height) s.dy *= -1;
                s.alpha += (Math.random() - 0.5) * 0.02;
                s.alpha = Math.max(0.3, Math.min(1, s.alpha));
            }
            animationId = requestAnimationFrame(drawStars);
        };

        drawStars();

        return () => {
            window.removeEventListener('resize', resize);
            if (animationId) {
                cancelAnimationFrame(animationId);
            }
        };
    }, []);

    const teamMembers = [
        {
            name: 'Vagif Bakhshaliyev',
            role: 'Founder & CEO',
            image: '/images/member_photo/vagif.jpg',
            profileUrl: 'https://mangathemango.github.io/vagif_page'
        },
        {
            name: 'Mango',
            role: 'CTO & Backend Developer',
            image: '/images/member_photo/mango.jpg',
            profileUrl: 'https://mangathemango.github.io/Portfolio'
        },
        {
            name: 'Darren',
            role: 'Backend Developer',
            image: '/images/member_photo/darren.jpg',
            profileUrl: 'https://inkt13.github.io/darren_page'
        },
        {
            name: 'Aiuna Arkhipova',
            role: 'Frontend Developer & UI/UX Designer',
            image: '/images/member_photo/aiuna.jpg',
            profileUrl: 'https://inkt13.github.io/aiuna_page'
        },
        {
            name: 'Darrel',
            role: 'UI/UX & Frontend Designer',
            image: '/images/member_photo/darrel.jpg',
            profileUrl: 'https://mangathemango.github.io/darrel_page'
        },
        {
            name: 'Nada',
            role: 'CIO & Documentation Specialist',
            image: '/images/member_photo/nada.jpg',
            profileUrl: 'https://mangathemango.github.io/nada_page'
        }
    ];

    return (
        <>
            <canvas
                ref={canvasRef}
                className="star-canvas"
            />

            <div className="container about-page">
                <section className="about-hero">
                    <h1>About Us</h1>
                    <p className="muted">
                        Welcome to BeiliHub! We are a passionate team dedicated to making practical education accessible for everyone. Our platform is built on project-based learning, real-world skills, and a supportive community.
                    </p>
                    <hr />
                </section>

                <section>
                    <h2 style={{ textAlign: 'center', marginBottom: '1rem', color: '#fff', fontWeight: 800, textShadow: '0 2px 8px #2226, 0 1px 0 #222' }}>
                        Meet The Team
                    </h2>
                    <p className="muted" style={{ textAlign: 'center', marginBottom: '2rem', color: '#fff', fontWeight: 600, background: 'rgba(0,0,0,0.2)', borderRadius: '8px', padding: '0.5em 1em', boxShadow: '0 2px 8px #2223' }}>
                        Get to know the people behind BeiliHub. We combine diverse backgrounds and expertise to deliver the best learning experience for you.
                    </p>
                </section>

                <section className="team-grid">
                    {teamMembers.map((member, index) => (
                        <article key={index} className="team-card">
                            <img
                                className="avatar"
                                src={member.image}
                                alt={member.name}
                                onError={(e) => {
                                    e.target.style.display = 'none';
                                }}
                            />
                            <h3>{member.name}</h3>
                            <p>{member.role}</p>
                            <a
                                href={member.profileUrl}
                                className="btn primary"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                View Profile
                            </a>
                        </article>
                    ))}
                </section>
            </div>
        </>
    );
};

export default About;