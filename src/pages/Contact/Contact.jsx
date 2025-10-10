import React, { useState } from 'react';
import './Contact.css';

const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: '',
        message: ''
    });
    const [showStatus, setShowStatus] = useState(false);

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Simulate form submission
        setShowStatus(true);
        setTimeout(() => setShowStatus(false), 3000);
        setFormData({
            name: '',
            email: '',
            subject: '',
            message: ''
        });
    };

    return (
        <div className="contact">
            <div className="contact-hero">
                <h1>Get in Touch</h1>
                <p>We'd love to hear from you. Send us a message and we'll respond as soon as possible.</p>
            </div>

            <form className="contact-form" onSubmit={handleSubmit}>
                <div className="form-group">
                    <label htmlFor="name">Name</label>
                    <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                    />
                </div>

                <div className="form-group">
                    <label htmlFor="email">Email</label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                    />
                </div>

                <div className="form-group">
                    <label htmlFor="subject">Subject</label>
                    <input
                        type="text"
                        id="subject"
                        name="subject"
                        value={formData.subject}
                        onChange={handleChange}
                        required
                    />
                </div>

                <div className="form-group">
                    <label htmlFor="message">Message</label>
                    <textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        required
                    />
                </div>

                <button type="submit" className="btn btn-primary">Send Message</button>

                <div className={`contact-status ${showStatus ? 'show' : ''}`}>
                    Thank you for your message! We'll get back to you soon.
                </div>
            </form>

            <div className="contact-methods">
                <h2>Other Ways to Reach Us</h2>
                <div className="methods-grid">
                    <div className="method-card">
                        <h3>Email</h3>
                        <p>support@beilihub.com</p>
                    </div>
                    <div className="method-card">
                        <h3>Phone</h3>
                        <p>+1 (555) 123-4567</p>
                    </div>
                    <div className="method-card">
                        <h3>Office</h3>
                        <p>123 Learning St<br />Education City</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contact;