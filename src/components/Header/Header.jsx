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
                    <img className="logo" src="/images/icons/logo.png" alt="BeiliHub Logo" />
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