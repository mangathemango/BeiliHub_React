import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';

const Footer = () => {
    return (
        <footer className="site-footer">
            <div className="footer-content">
                <div className="footer-grid">
                    <div className="footer-brand">
                        <h3>BeiliHub</h3>
                        <p>Empowering learners worldwide with quality education and interactive courses. Join our community and unlock your potential.</p>
                        <div className="social-links">
                            <a href="#" className="social-link" aria-label="Twitter">𝕏</a>
                            <a href="#" className="social-link" aria-label="Facebook">f</a>
                            <a href="#" className="social-link" aria-label="LinkedIn">in</a>
                            <a href="#" className="social-link" aria-label="GitHub">⚡</a>
                        </div>
                    </div>

                    <div className="footer-section">
                        <h4>Learn</h4>
                        <ul>
                            <li><Link to="/courses">All Courses</Link></li>
                            <li><Link to="/learn">Practice</Link></li>
                            <li><a href="#">Certifications</a></li>
                            <li><a href="#">Study Groups</a></li>
                        </ul>
                    </div>

                    <div className="footer-section">
                        <h4>Company</h4>
                        <ul>
                            <li><Link to="/about">About Us</Link></li>
                            <li><a href="#">Careers</a></li>
                            <li><a href="#">Blog</a></li>
                            <li><a href="#">Press</a></li>
                        </ul>
                    </div>

                    <div className="footer-section">
                        <h4>Support</h4>
                        <ul>
                            <li><Link to="/contact">Contact</Link></li>
                            <li><a href="#">Help Center</a></li>
                            <li><a href="#">Community</a></li>
                            <li><a href="#">Status</a></li>
                        </ul>
                    </div>
                </div>

                <div className="footer-bottom">
                    <div>© 2025 BeiliHub. Made with ♥ • Inspired by Khan Academy, Coursera & Udemy</div>
                    <div className="footer-links">
                        <a href="#">Privacy Policy</a>
                        <a href="#">Terms of Service</a>
                        <a href="#">Cookie Policy</a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;