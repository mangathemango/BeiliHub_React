import { Link, useLocation } from 'react-router-dom';
import './Header.css';

const Header = () => {
    const location = useLocation();

    const isActive = (path) => {
        return location.pathname === path ? 'active' : '';
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
                    <Link to="/about" className={isActive('/about')}>About</Link>
                </nav>
            </div>
        </header>
    );
};

export default Header;