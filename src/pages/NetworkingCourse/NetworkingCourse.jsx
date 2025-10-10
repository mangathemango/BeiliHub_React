import React from 'react';
import { Link } from 'react-router-dom';
import './NetworkingCourse.css';

const NetworkingCourse = () => {
    const modules = [
        {
            number: 1,
            title: "Network Fundamentals",
            description: "Introduction to networking concepts, OSI model, and basic terminology"
        },
        {
            number: 2,
            title: "IP Addressing & Subnetting",
            description: "Understanding IPv4/IPv6 addressing, CIDR notation, and subnet calculations"
        },
        {
            number: 3,
            title: "Network Protocols",
            description: "Deep dive into TCP/IP, UDP, HTTP/HTTPS, DNS, and DHCP protocols"
        },
        {
            number: 4,
            title: "Routing & Switching",
            description: "Learn about routers, switches, VLANs, and routing protocols"
        },
        {
            number: 5,
            title: "Network Security",
            description: "Firewalls, VPNs, encryption, and network security best practices"
        },
        {
            number: 6,
            title: "Troubleshooting",
            description: "Network diagnostic tools and methodologies for problem-solving"
        }
    ];

    return (
        <div className="networking-course">
            <section className="networking-hero">
                <h1>Computer Networking</h1>
                <p>
                    Master the fundamentals of computer networking, from basic concepts to advanced
                    protocols and security. Build a solid foundation for your IT career.
                </p>
            </section>

            <div className="course-stats">
                <div className="stat-card">
                    <span className="stat-value">6</span>
                    <span className="stat-label">Modules</span>
                </div>
                <div className="stat-card">
                    <span className="stat-value">24</span>
                    <span className="stat-label">Hours</span>
                </div>
                <div className="stat-card">
                    <span className="stat-value">Beginner</span>
                    <span className="stat-label">Level</span>
                </div>
                <div className="stat-card">
                    <span className="stat-value">4.9</span>
                    <span className="stat-label">Rating</span>
                </div>
            </div>

            <div className="course-overview">
                <h2>What You'll Learn</h2>
                <ul className="learning-objectives">
                    <li>
                        <span>Understand the OSI and TCP/IP models and how data flows through networks</span>
                    </li>
                    <li>
                        <span>Master IP addressing, subnetting, and VLSM calculations</span>
                    </li>
                    <li>
                        <span>Configure and troubleshoot DNS, DHCP, and other essential protocols</span>
                    </li>
                    <li>
                        <span>Design and implement secure network architectures</span>
                    </li>
                    <li>
                        <span>Use network monitoring and diagnostic tools effectively</span>
                    </li>
                    <li>
                        <span>Apply network security best practices and implement VPNs</span>
                    </li>
                </ul>
            </div>

            <div className="course-modules">
                <h2>Course Modules</h2>
                <div className="module-list">
                    {modules.map((module) => (
                        <div key={module.number} className="module-item">
                            <div className="module-header">
                                <div className="module-number">{module.number}</div>
                                <h3 className="module-title">{module.title}</h3>
                            </div>
                            <p className="module-description">{module.description}</p>
                        </div>
                    ))}
                </div>
            </div>

            <div className="course-actions">
                <Link to="/learn" className="btn btn-primary">
                    🚀 Start Learning
                </Link>
                <Link to="/courses" className="btn btn-secondary">
                    ← Back to Courses
                </Link>
            </div>
        </div>
    );
};

export default NetworkingCourse;