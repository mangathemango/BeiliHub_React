import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import CosmicBackground from '../../components/CosmicBackground/CosmicBackground';
import CourseCard from '../../components/CourseCard/CourseCard';
import Modal from '../../components/Modal/Modal';
import './Home.css';

export default function Home() {
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedCourse, setSelectedCourse] = useState(null);
  const navigate = useNavigate();

  const sampleCourse = {
    id: 1,
    title: 'Frontend Development',
    desc: 'Learn how to build modern, responsive web interfaces.',
    duration: '20h',
    level: 'Beginner',
    instructor: 'Team Learn',
  };

  const openPreview = (course) => {
    setSelectedCourse(course);
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
    setSelectedCourse(null);
  };

  // Navigate straight to the CSS lesson folder inside Lesson
  // Adjust the path string below if your router uses a different casing or route naming.
  const goToCssLesson = () => {
    navigate('/Lesson/css');
    // If your router uses lowercase paths, use: navigate('/lesson/css');
    // If you want to pass state: navigate('/Lesson/css', { state: { from: 'home' } });
  };

  return (
    <>
      <CosmicBackground variant="full" />

      {/* HERO */}
      <section className="hero container" role="banner" aria-label="Hero">
        <div className="hero-inner">
          <div className="hero-left">
            <h1 className="hero-title">
              Learn Web
              <br />
              Development
              <br />
              <span className="hero-accent">Anytime, For Free.</span>
            </h1>

            {/* Start Learning button now navigates directly to Lesson -> css */}
            <button
              className="cta"
              aria-label="Start Learning Now"
              onClick={goToCssLesson}
            >
              Start Learning Now
            </button>
          </div>

          <div className="hero-right" aria-hidden="false" role="region" aria-label="Technologies">
            <div className="logo-card">
              <div className="logo-tile html" title="HTML5" aria-hidden="true">
                <svg viewBox="0 0 64 64" width="100%" height="100%" preserveAspectRatio="xMidYMid meet" aria-hidden="true">
                  <path d="M12 4h40l-4.5 50L32 60 16.5 54z" fill="#E44D26" />
                  <path d="M22 24h20v4H22z" fill="#fff" opacity="0.95" />
                  <text x="32" y="44" fontSize="18" fill="#fff" textAnchor="middle" fontFamily="sans-serif" fontWeight="700">5</text>
                </svg>
              </div>

              <div className="logo-tile css" title="CSS3" aria-hidden="true">
                <svg viewBox="0 0 64 64" width="100%" height="100%" preserveAspectRatio="xMidYMid meet" aria-hidden="true">
                  <rect x="6" y="6" width="52" height="52" rx="10" fill="#6E2CF6" />
                  <text x="32" y="40" fontSize="16" fill="#fff" textAnchor="middle" fontFamily="sans-serif" fontWeight="700">CSS</text>
                </svg>
              </div>

              <div className="logo-tile js" title="JavaScript" aria-hidden="true">
                <svg viewBox="0 0 64 64" width="100%" height="100%" preserveAspectRatio="xMidYMid meet" aria-hidden="true">
                  <rect x="6" y="6" width="52" height="52" rx="6" fill="#F0DB4F" />
                  <text x="32" y="40" fontSize="20" fill="#111" textAnchor="middle" fontFamily="sans-serif" fontWeight="800">JS</text>
                </svg>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FEATURES */}
      <main className="container main-content" role="main">
        <h2 className="features-heading">Our Features</h2>

        <section className="features-grid" aria-label="Our features">
          <article className="feature-card" tabIndex="0" aria-labelledby="f1-title">
            <h3 id="f1-title" className="feature-title">Structured Roadmap</h3>
            <div className="feature-thumb roadmap-thumb" aria-hidden="true">
              <div className="roadmap-sim">
                <div className="phase orange">Phase 1</div>
                <ul className="roadmap-list">
                  <li>HTML 1: First Page</li>
                  <li>HTML 2: Text Formatting</li>
                  <li>HTML 3: Links & Navigation</li>
                  <li>HTML 4: Images & Media</li>
                </ul>
                <div className="phase purple">Phase 2</div>
              </div>
            </div>
            <p className="feature-desc">
              Follow a guided path through HTML, CSS, and JavaScript, designed to build your skills in the right order.
            </p>
          </article>

          <article className="feature-card" tabIndex="0" aria-labelledby="f2-title">
            <h3 id="f2-title" className="feature-title">Interactive Editor</h3>
            <div className="feature-thumb editor-thumb" aria-hidden="true">
              <div className="editor-sim">
                <div className="code-pane"> &lt;!-- code editor --&gt; </div>
                <div className="preview-pane"> <img alt="preview" src="" style={{opacity:0.02}} /> </div>
              </div>
            </div>
            <p className="feature-desc">
              Write and test code directly in your browser with instant feedback.
            </p>
          </article>

          <article className="feature-card" tabIndex="0" aria-labelledby="f3-title">
            <h3 id="f3-title" className="feature-title">Topic Filters</h3>
            <div className="feature-thumb filters-thumb" aria-hidden="true">
              <div className="filters-box">
                <div className="filter-icon orange">👁️</div>
                <div className="filter-icon purple">👁️</div>
                <div className="filter-icon yellow">🚫</div>
              </div>
            </div>
            <p className="feature-desc">
              Focus only on what you need — HTML, CSS, or JavaScript — and learn at your own pace.
            </p>
          </article>
        </section>
      </main>

      {/* BOTTOM SIGNUP BAR */}
      <aside className="bottom-bar" role="dialog" aria-label="Sign up bar">
        <div className="bottom-inner container">
          <div className="bottom-text">Sign up to comment, edit, inspect and more.</div>
          <div className="bottom-actions">
            <button className="btn ghost">Sign up</button>
            <button className="btn primary">Continue</button>
          </div>
        </div>
      </aside>

      <Modal
        isOpen={modalOpen}
        onClose={closeModal}
        title={selectedCourse?.title || 'Preview'}
        description={selectedCourse?.desc || 'Course preview description'}
      />
    </>
  );
}