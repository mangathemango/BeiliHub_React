import React from 'react';
import { useNavigate } from 'react-router-dom';

const Exercise = ({
    children,
    className = '',
    category = 'html',
    lessonId = '1',
    title = '🧠 Knowledge Check',
    description = 'Ready to test your understanding of this lesson? Take the interactive quiz to reinforce what you\'ve learned!',
    buttonText = 'Start Quiz',
    redirectPath = null, // If provided, uses this instead of the default path
    features = null, // Custom features array, uses default if not provided
    tipText = 'Make sure you\'ve completed the lesson and task before taking the quiz!'
}) => {
    const navigate = useNavigate();

    const handleExerciseRedirect = () => {
        // Use custom redirect path or default lesson exercise path
        const path = redirectPath || `/lesson/${category}/${lessonId}/exercise`;
        navigate(path);
    };

    // Default features if none provided
    const defaultFeatures = [
        { icon: '📝', text: 'Multiple choice questions' },
        { icon: '💡', text: 'Instant feedback' },
        { icon: '📊', text: 'Detailed explanations' },
        { icon: '🏆', text: 'Track your progress' }
    ];

    const featureList = features || defaultFeatures;

    return (
        <div className={`exercise-container ${className}`}>
            <div className="quiz-redirect-page">
                <div className="quiz-intro">
                    <h2>{title}</h2>
                    <p>{description}</p>
                    {children}
                    <div className="quiz-features">
                        {featureList.map((feature, index) => (
                            <div key={index} className="feature-item">
                                <span className="feature-icon">{feature.icon}</span>
                                <span>{feature.text}</span>
                            </div>
                        ))}
                    </div>
                </div>
                <button
                    className="btn quiz-redirect-button large"
                    onClick={handleExerciseRedirect}
                >
                    <span>{buttonText}</span>
                    <span className="btn-arrow">→</span>
                </button>
                <p className="quiz-note">
                    💡 <strong>Tip:</strong> {tipText}
                </p>
            </div>
        </div>
    );
};

Exercise.displayName = 'Exercise';

export default Exercise;