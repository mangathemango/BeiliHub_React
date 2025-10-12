import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Header.css';

const Header = () => {
    const [searchQuery, setSearchQuery] = useState('');
    const location = useLocation();

    const isActive = (path) => {
        return location.pathname === path ? 'active' : '';
    };

    const handleSearch = (e) => {
        setSearchQuery(e.target.value);
        // You can implement search functionality here
    };

    return (
        <header className="site-header">
            <div className="container header-grid">
                <Link className="brand" to="/">
                    <svg className="logo" viewBox="0 0 100 100" aria-hidden="true">
                        <defs>
                            <linearGradient id="g" x1="0" x2="1">
                                <stop offset="0" stopColor="#FF8A00" />
                                <stop offset="1" stopColor="#E52E71" />
                            </linearGradient>
                        </defs>
                        <rect x="6" y="6" width="88" height="88" rx="18" fill="url(#g)" />
                        <text x="50" y="60" textAnchor="middle" fontSize="42" fontWeight="700" fill="#fff">L</text>
                    </svg>
                    <span>BeiliHub</span>
                </Link>

                <nav className="main-nav" aria-label="Main Navigation">
                    <Link to="/" className={isActive('/')}>Home</Link>
                    <Link to="/lesson-chose" className={isActive('/lesson-chose')}>Courses</Link>
                    <Link to="/learn" className={isActive('/learn')}>Learn</Link>
                    <Link to="/about" className={isActive('/about')}>About</Link>
                    <Link to="/contact" className={isActive('/contact')}>Contact</Link>
                </nav>

                <div className="nav-actions">
                    <input
                        id="search"
                        className="search"
                        placeholder="Search courses, topics..."
                        aria-label="Search"
                        value={searchQuery}
                        onChange={handleSearch}
                    />
                    <Link className="btn ghost" to="/login">Log in</Link>
                </div>
            </div>
        </header>
    );
};

export default Header;