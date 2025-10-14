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
    tipText = 'Make sure you\'ve completed the lesson and task before taking the quiz!'
}) => {
    const navigate = useNavigate();

    const handleExerciseRedirect = () => {
        // Use custom redirect path or default lesson exercise path
        const path = redirectPath || `/lesson/${category}/${lessonId}/exercise`;
        navigate(path);
    };


    return (
        <div className={`exercise-container ${className}`}>
            <div className="quiz-intro">
                <h2>{title}</h2>
                <p>{description}</p>
                {children}
            </div>
            <button
                className="quiz-redirect-button btn"
                onClick={handleExerciseRedirect}
            >
                <span>{buttonText}</span>
            </button>
            <p className="quiz-note">
                💡 <strong>Tip:</strong> {tipText}
            </p>
        </div>
    );
};

Exercise.displayName = 'Exercise';

export default Exercise;