import React from 'react';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import './Layout.css';

const Layout = ({ children }) => {
    return (
        <div className="layout">
            <Header />
            <main className="main-content">
                <div className="page-container">
                    {children}
                </div>
            </main>
            <Footer />
        </div>
    );
};

export default Layout;