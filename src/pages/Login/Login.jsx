import React, { useState } from 'react';
import './Login.css';

const Login = () => {
    const [formData, setFormData] = useState({
        email: '',
        password: '',
        rememberMe: false
    });
    const [showPassword, setShowPassword] = useState(false);
    const [error, setError] = useState('');

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: type === 'checkbox' ? checked : value
        }));
        if (error) setError(''); // Clear error when user starts typing
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        // Simple validation
        if (!formData.email || !formData.password) {
            setError('Please fill in all fields');
            return;
        }

        if (!formData.email.includes('@')) {
            setError('Please enter a valid email address');
            return;
        }

        if (formData.password.length < 6) {
            setError('Password must be at least 6 characters long');
            return;
        }

        // Simulate login process
        console.log('Login attempt:', { ...formData, password: '[HIDDEN]' });

        // For demo purposes, just show success
        alert('Login successful! (This is a demo)');
    };

    const togglePassword = () => {
        setShowPassword(!showPassword);
    };

    return (
        <div className="login-container">
            <div className="login-box">
                <div className="login-header">
                    <h1>Welcome Back</h1>
                    <p>Sign in to continue your learning journey</p>
                </div>

                <form className="login-form" onSubmit={handleSubmit}>
                    {error && (
                        <div className="error-message">
                            {error}
                        </div>
                    )}

                    <div className="form-group">
                        <label htmlFor="email">Email Address</label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            placeholder="Enter your email"
                            required
                        />
                    </div>

                    <div className="form-group">
                        <label htmlFor="password">Password</label>
                        <input
                            type={showPassword ? 'text' : 'password'}
                            id="password"
                            name="password"
                            value={formData.password}
                            onChange={handleChange}
                            placeholder="Enter your password"
                            required
                        />
                        <button
                            type="button"
                            className="password-toggle"
                            onClick={togglePassword}
                        >
                            {showPassword ? 'Hide' : 'Show'}
                        </button>
                    </div>

                    <div className="form-options">
                        <label className="remember-me">
                            <input
                                type="checkbox"
                                name="rememberMe"
                                checked={formData.rememberMe}
                                onChange={handleChange}
                            />
                            Remember me
                        </label>
                        <a href="#" className="forgot-password">
                            Forgot password?
                        </a>
                    </div>

                    <button type="submit" className="login-btn">
                        Sign In
                    </button>
                </form>

                <div className="login-footer">
                    <p>Don't have an account?</p>
                    <a href="#" className="signup-link">Create Account</a>

                    <div className="social-login">
                        <button className="social-btn">
                            Continue with Google
                        </button>
                        <button className="social-btn">
                            Continue with GitHub
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;