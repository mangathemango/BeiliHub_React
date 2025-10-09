import React, { useState } from 'react';

const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });
    const [status, setStatus] = useState('');
    const [showStatus, setShowStatus] = useState(false);

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setStatus('Sending...');
        setShowStatus(true);

        // Simulate form submission
        setTimeout(() => {
            setStatus('Thanks — we received your message!');
            setFormData({ name: '', email: '', message: '' });

            // Hide status after 3 seconds
            setTimeout(() => {
                setShowStatus(false);
            }, 3000);
        }, 900);
    };

    return (
        <div className="container">
            <section className="contact-hero">
                <h1>Contact Us</h1>
                <p className="muted">
                    Have questions? Want to get in touch? We'd love to hear from you.
                </p>
            </section>

            <div className="contact-form">
                <form onSubmit={handleSubmit}>
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
                        <label htmlFor="message">Message</label>
                        <textarea
                            id="message"
                            name="message"
                            value={formData.message}
                            onChange={handleChange}
                            required
                        />
                    </div>

                    <button type="submit" className="btn primary">
                        Send Message
                    </button>

                    {showStatus && (
                        <div className="contact-status show">
                            {status}
                        </div>
                    )}
                </form>
            </div>

            <section style={{ marginTop: '40px', textAlign: 'center' }}>
                <h2 style={{ marginBottom: '16px' }}>Other Ways to Reach Us</h2>
                <div style={{ display: 'flex', justifyContent: 'center', gap: '40px', flexWrap: 'wrap' }}>
                    <div>
                        <h3 style={{ color: 'var(--accent1)', marginBottom: '8px' }}>Email</h3>
                        <p className="muted">support@beilihub.com</p>
                    </div>
                    <div>
                        <h3 style={{ color: 'var(--accent2)', marginBottom: '8px' }}>Community</h3>
                        <p className="muted">Join our Discord server</p>
                    </div>
                    <div>
                        <h3 style={{ color: 'var(--accent3)', marginBottom: '8px' }}>Social</h3>
                        <p className="muted">Follow us on Twitter</p>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Contact;