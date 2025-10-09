import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Login = () => {
    const [formData, setFormData] = useState({
        email: '',
        password: ''
    });
    const navigate = useNavigate();

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Simple demo login - in real app, you'd validate credentials
        alert('Signed in (demo) — redirecting to courses');
        navigate('/courses');
    };

    return (
        <div className="container">
            <div className="login-container">
                <section className="login-hero">
                    <h1>Welcome Back</h1>
                    <p className="muted">Sign in to continue your learning journey</p>
                </section>

                <form className="login-form" onSubmit={handleSubmit}>
                    <div className="form-group">
                        <label htmlFor="email">Email</label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            required
                            placeholder="Enter your email"
                        />
                    </div>

                    <div className="form-group">
                        <label htmlFor="password">Password</label>
                        <input
                            type="password"
                            id="password"
                            name="password"
                            value={formData.password}
                            onChange={handleChange}
                            required
                            placeholder="Enter your password"
                        />
                    </div>

                    <button type="submit" className="btn primary">
                        Sign In
                    </button>
                </form>

                <div style={{ textAlign: 'center', marginTop: '20px' }}>
                    <p className="muted">
                        Don't have an account? <a href="#" style={{ color: 'var(--accent1)' }}>Sign up</a>
                    </p>
                    <p className="muted">
                        <a href="#" style={{ color: 'var(--accent2)' }}>Forgot password?</a>
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Login;