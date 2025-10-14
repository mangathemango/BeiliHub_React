import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import CosmicBackground from '../../components/CosmicBackground/CosmicBackground';
import Modal from '../../components/Modal/Modal';
import './Home.css';

export default function Home() {
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedCourse, setSelectedCourse] = useState(null);
  const navigate = useNavigate();

  const closeModal = () => {
    setModalOpen(false);
    setSelectedCourse(null);
  };

  // Navigate straight to the CSS lesson folder inside Lesson
  const goToCssLesson = () => {
    navigate('/lesson-chose'); // adjust path casing if your router uses lowercase
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
                < img src="images/icons/HTML5.png" alt="HTML5 logo" loading="lazy" />
              </div>

              <div className="logo-tile css" title="CSS3" aria-hidden="true">
                < img src="images/icons/CSS.png" alt="CSS3 logo" loading="lazy" />
              </div>

              <div className="logo-tile js" title="JavaScript" aria-hidden="true">
                < img src="images/icons/JS.png" alt="JavaScript logo" loading="lazy" />
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
            <div className="feature-thumb roadmap-thumb" id='lesson-img' aria-hidden="true">

            </div>
            <p className="feature-desc">
              Follow a guided path through HTML, CSS, and JavaScript, designed to build your skills in the right order.
            </p >
          </article>

          <article className="feature-card" tabIndex="0" aria-labelledby="f2-title">
            <h3 id="f2-title" className="feature-title">Interactive Editor</h3>
            <div className="feature-thumb editor-thumb" id="editor-img" aria-hidden="true">

            </div>
            <p className="feature-desc">
              Write and test code directly in your browser with instant feedback.
            </p >
          </article>

          <article className="feature-card" tabIndex="0" aria-labelledby="f3-title">
            <h3 id="f3-title" className="feature-title">Topic Filters</h3>
            <div className="feature-thumb filters-thumb" aria-hidden="true">
              <div className="filters-box">
                <img className="filter-icon" src="images/icons/HTML5.png"></img>
                <img className="filter-icon" src="images/icons/CSS.png"></img>
                <img className="filter-icon" src="images/icons/JS.png" ></img>
              </div>
            </div>
            <p className="feature-desc">
              Focus only on what you need — HTML, CSS, or JavaScript — and learn at your own pace.
            </p >
          </article>
        </section>
      </main>

      <Modal
        isOpen={modalOpen}
        onClose={closeModal}
        title={selectedCourse?.title || 'Preview'}
        description={selectedCourse?.desc || 'Course preview description'}
      />
    </>
  );
}