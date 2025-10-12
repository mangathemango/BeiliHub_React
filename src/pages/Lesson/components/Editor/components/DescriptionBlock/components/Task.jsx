import React, { useState, useCallback, useImperativeHandle, forwardRef } from 'react';
import { createPortal } from 'react-dom';

// Task component - defines learning tasks with validation and customization
const Task = forwardRef(({
    objective,
    requirements = [],
    validations = [], // New prop: array of {requirement, validator} objects
    hints = [],
    className = '',
    currentCode = ''
}, ref) => {
    const [validationResults, setValidationResults] = useState({});
    const [showCelebration, setShowCelebration] = useState(false);



    // Handle task submission with validation
    const handleSubmit = useCallback(async () => {
        if (!currentCode || validations.length === 0) return;

        // Add a small delay for better UX
        await new Promise(resolve => setTimeout(resolve, 500));

        const results = {};
        let allValid = true;

        validations.forEach((validation, index) => {
            try {
                // Create a temporary DOM parser to test the code
                const parser = new DOMParser();
                const doc = parser.parseFromString(currentCode, 'text/html');

                // Pass the parsed document to the validator function
                const isValid = validation.validator(doc, currentCode);
                results[`validation-${index}`] = Boolean(isValid);

                if (!isValid) allValid = false;
            } catch (error) {
                console.error('Validation error:', error);
                results[`validation-${index}`] = false;
                allValid = false;
            }
        });

        setValidationResults(results);

        // Show celebration if everything is correct! 🎉
        if (allValid) {
            setShowCelebration(true);
            // Hide celebration after 3 seconds
            setTimeout(() => setShowCelebration(false), 3000);
        }
    }, [currentCode, validations]);

    // Expose handleSubmit to parent components through ref
    useImperativeHandle(ref, () => ({
        handleSubmit
    }), [handleSubmit]);

    return (
        <div className={`task-container ${className}`} data-task>
            <div className="task-header">
                <h2>🎯 Your Task</h2>
            </div>

            {objective && (
                <div className="task-objective">
                    <h3>🎯 Objective</h3>
                    <p>{objective}</p>
                </div>
            )}

            {/* Requirements section - supports both old requirements array and new validations array */}
            {(requirements.length > 0 || validations.length > 0) && (
                <div className="task-requirements">
                    <h3>📋 Requirements</h3>
                    <p className="requirements-note">
                        Complete these requirements, then click "Check My Work!" to validate your solution:
                    </p>
                    <div className="requirement-list">
                        {/* Show validations with submission-based validation status */}
                        {validations.map((validation, index) => {
                            const isValid = validationResults[`validation-${index}`];
                            return (
                                <div key={`validation-${index}`} className="requirement-item">
                                    <span className="requirement-status">
                                        {isValid === true ? '✅' : isValid === false ? '❌' : '⏳'}
                                    </span>
                                    <span>{validation.requirement}</span>
                                </div>
                            );
                        })}

                        {/* Show static requirements (backward compatibility) */}
                        {requirements.map((req, index) => (
                            <div key={`requirement-${index}`} className="requirement-item">
                                <span className="requirement-status">⭕</span>
                                <span>{req}</span>
                            </div>
                        ))}
                    </div>
                </div>
            )}



            {hints.length > 0 && (
                <div className="task-hints">
                    <h3>💡 Helpful Hints</h3>
                    {hints.map((hint, index) => (
                        <div key={index} className="hint-item">
                            {hint}
                        </div>
                    ))}
                </div>
            )}

            {/* Celebration Animation - rendered as portal to escape container constraints */}
            {showCelebration && createPortal(
                <div className="celebration-overlay">
                    <div className="celebration-content">
                        <div className="checkmark-animation">
                            <div className="checkmark">✅</div>
                        </div>
                        <div className="celebration-text">
                            <h2>🎉 Awesome Work! 🎉</h2>
                            <p>You've completed all the requirements!</p>
                        </div>
                        <div className="confetti">
                            {Array.from({ length: 50 }).map((_, i) => (
                                <div
                                    key={i}
                                    className="confetti-piece"
                                    style={{
                                        '--delay': `${Math.random() * 3}s`,
                                        '--x': `${Math.random() * 100}vw`,
                                        '--rotation': `${Math.random() * 360}deg`,
                                        '--color': ['#ff6b6b', '#4ecdc4', '#45b7d1', '#96ceb4', '#ffeaa7', '#dda0dd'][Math.floor(Math.random() * 6)]
                                    }}
                                />
                            ))}
                        </div>
                    </div>
                </div>,
                document.body
            )}
        </div>
    );
});

Task.displayName = 'Task';

export default Task;