import React from 'react';

// Quiz component - quiz section with redirect
const Quiz = ({ children, moduleId, lessonId, questions = 5, duration = 3, passPercentage = 80, className = '' }) => {
    const handleStartQuiz = () => {
        window.location.href = `/lesson/${moduleId}/${lessonId}/exercise`;
    };

    return (
        <div className={`quiz-container ${className}`}>
            <h2>Test Your Knowledge</h2>
            <p>Ready to test what you've learned? Take a quick quiz to reinforce your understanding.</p>

            <div className="quiz-preview">
                <h3>Quiz Preview</h3>
                <div className="quiz-stats">
                    <div className="stat-item">
                        <span className="stat-number">{questions}</span>
                        <span className="stat-label">Questions</span>
                    </div>
                    <div className="stat-item">
                        <span className="stat-number">~{duration}</span>
                        <span className="stat-label">Minutes</span>
                    </div>
                    <div className="stat-item">
                        <span className="stat-number">{passPercentage}%</span>
                        <span className="stat-label">To Pass</span>
                    </div>
                </div>

                {children && (
                    <div className="quiz-topics">
                        <h4>Topics Covered:</h4>
                        {children}
                    </div>
                )}
            </div>

            <button
                className="btn primary large"
                onClick={handleStartQuiz}
            >
                Start Quiz →
            </button>
        </div>
    );
};

export default Quiz;