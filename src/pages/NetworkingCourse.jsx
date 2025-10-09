import React from 'react';
import { Link } from 'react-router-dom';

const NetworkingCourse = () => {
    return (
        <div className="container">
            <section style={{ textAlign: 'center', padding: '40px 0' }}>
                <h1>Networking Course</h1>
                <p className="muted">
                    Learn the fundamentals of computer networking, including protocols, routing, and security.
                </p>

                <div style={{
                    background: 'linear-gradient(180deg, rgba(255,255,255,0.02), transparent)',
                    padding: '24px',
                    borderRadius: '12px',
                    margin: '32px 0',
                    maxWidth: '600px',
                    marginLeft: 'auto',
                    marginRight: 'auto'
                }}>
                    <h2>What you'll learn:</h2>
                    <ul style={{ textAlign: 'left', color: 'var(--muted)' }}>
                        <li>IP addressing and subnetting</li>
                        <li>DNS and DHCP protocols</li>
                        <li>TCP/IP stack fundamentals</li>
                        <li>Network security basics</li>
                        <li>Routing and switching concepts</li>
                    </ul>
                </div>

                <div style={{ display: 'flex', gap: '16px', justifyContent: 'center', flexWrap: 'wrap' }}>
                    <Link to="/learn" className="btn primary">
                        Start Learning
                    </Link>
                    <Link to="/courses" className="btn outline">
                        Back to Courses
                    </Link>
                </div>
            </section>
        </div>
    );
};

export default NetworkingCourse;