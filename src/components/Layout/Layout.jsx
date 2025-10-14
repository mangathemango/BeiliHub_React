import React from 'react';
import Header from '../Header/Header';
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
        </div>
    );
};

export default Layout;