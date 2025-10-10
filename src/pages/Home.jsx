import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import CosmicBackground from '../components/CosmicBackground';
import CourseCard from '../components/CourseCard';
import Modal from '../components/Modal';
import { sampleCourses } from '../data/courses';

const Home = () => {
    const [modalOpen, setModalOpen] = useState(false);
    const [selectedCourse, setSelectedCourse] = useState(null);
    const featuredCardRef = useRef(null);

    useEffect(() => {
        // Animate featured card periodically
        if (featuredCardRef) {
            const intervalId = setInterval(() => {
                featuredCardRef.animate(
                    [
                        { transform: 'translateY(0)' },
                        { transform: 'translateY(-6px)' },
                        { transform: 'translateY(0)' }
                    ],
                    { duration: 2500, iterations: 1 }
                );
            }, 4000);

            return () => clearInterval(intervalId);
        }
    }, []);

    const handlePreview = (course) => {
        setSelectedCourse(course);
        setModalOpen(true);
    };

    const closeModal = () => {
        setModalOpen(false);
        setSelectedCourse(null);
    };

    const featuredCourses = sampleCourses.slice(0, 6);

    return (
        <>
            <CosmicBackground variant="full" />

            <section className="hero container">
                <div className="hero-left">
                    <h1 className="headline">
                        Learn <span className="accent">whatever</span> you want — <br />
                        from people who build it.
                    </h1>
                    <p className="sub">
                        Bite-sized lessons, projects, and community challenges. Hands-on learning inspired by the best platforms.
                    </p>

                    <div className="hero-cta">
                        <Link className="btn primary" to="/courses">Browse courses</Link>
                        <a className="btn outline" href="#how">How it works</a>
                    </div>

                    <ul className="features">
                        <li><strong>Interactive</strong> exercises</li>
                        <li><strong>Projects</strong> & portfolios</li>
                        <li><strong>Certificates</strong> you can share</li>
                    </ul>
                </div>

                <div className="hero-right">
                    <div className="device">
                        <div
                            className="player-card"
                            id="featured-card"
                            ref={featuredCardRef}
                        >
                            <div className="cover" aria-hidden="true">
                                <svg viewBox="0 0 800 450" preserveAspectRatio="xMidYMid slice">
                                    <defs>
                                        <linearGradient id="hg" x1="0" x2="1">
                                            <stop offset="0" stopColor="#7f00ff" />
                                            <stop offset="1" stopColor="#e100ff" />
                                        </linearGradient>
                                    </defs>
                                    <rect width="100%" height="100%" fill="url(#hg)" />
                                    <text x="50%" y="50%" fill="#fff" fontSize="48" textAnchor="middle">
                                        Practical Web Dev
                                    </text>
                                </svg>
                            </div>
                            <div className="meta">
                                <div className="title">Practical Web Development</div>
                                <div className="meta-row">22h • Intermediate • Team Learn</div>
                            </div>
                            <button
                                className="play"
                                onClick={() => handlePreview(sampleCourses[1])}
                            >
                                ▶ Play preview
                            </button>
                        </div>

                        <div className="sparkles" aria-hidden="true">
                            <span className="s1"></span>
                            <span className="s2"></span>
                            <span className="s3"></span>
                        </div>
                    </div>
                </div>
            </section>

            <section id="how" className="how container">
                <h2 className="section-title">How BeiliHub helps you grow</h2>
                <div className="steps-grid">
                    <article className="step">
                        <div className="icon">1</div>
                        <h3>Learn by doing</h3>
                        <p>Projects-first approach: build while you learn and show your work.</p>
                    </article>
                    <article className="step">
                        <div className="icon">2</div>
                        <h3>Adaptive practice</h3>
                        <p>Quizzes adapt to your mistakes and reinforce weak spots.</p>
                    </article>
                    <article className="step">
                        <div className="icon">3</div>
                        <h3>Peer reviews</h3>
                        <p>Get feedback from the community on your projects and assignments.</p>
                    </article>
                </div>
            </section>

            <section className="featured container">
                <h2 className="section-title">Featured courses</h2>
                <div className="cards-grid">
                    {featuredCourses.map(course => (
                        <CourseCard
                            key={course.id}
                            course={course}
                            onPreview={handlePreview}
                        />
                    ))}
                </div>
            </section>

            <section className="cta container big-cta">
                <div>
                    <h2>Start your free trial</h2>
                    <p>No credit card. Cancel anytime.</p>
                </div>
                <div>
                    <Link className="btn primary" to="/login">Get started</Link>
                </div>
            </section>

            <Modal
                isOpen={modalOpen}
                onClose={closeModal}
                title={selectedCourse?.title || 'Preview'}
                description={selectedCourse?.desc || 'Course preview description'}
            />
        </>
    );
};

export default Home;