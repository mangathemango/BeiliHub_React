import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <footer className="site-footer">
            <div className="container footer-grid">
                <div className="brand-compact">
                    <strong>BeiliHub</strong>
                    <div className="muted">© 2025</div>
                </div>
                <div className="links">
                    <Link to="/courses">Courses</Link>
                    <Link to="/about">About</Link>
                    <Link to="/contact">Contact</Link>
                </div>
                <div className="social muted">Made with ♥ • Inspired by Khan Academy, Coursera & Udemy</div>
            </div>
        </footer>
    );
};

export default Footer;