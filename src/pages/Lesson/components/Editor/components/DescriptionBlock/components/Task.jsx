import React, { useState, useEffect } from 'react';

// Task component - defines learning tasks with validation and customization
const Task = ({
    objective,
    requirements = [],
    validations = [], // New prop: array of {requirement, validator} objects
    hints = [],
    className = '',
    currentCode = ''
}) => {
    const [validationResults, setValidationResults] = useState({});

    // Get completion percentage
    const getCompletionPercentage = () => {
        if (validations.length === 0) return 0;

        const completedValidations = Object.values(validationResults).filter(Boolean).length;
        return Math.round((completedValidations / validations.length) * 100);
    };

    // Run custom validations when code changes
    useEffect(() => {
        if (currentCode && validations.length > 0) {
            const results = {};

            validations.forEach((validation, index) => {
                try {
                    // Create a temporary DOM parser to test the code
                    const parser = new DOMParser();
                    const doc = parser.parseFromString(currentCode, 'text/html');

                    // Pass the parsed document to the validator function
                    const isValid = validation.validator(doc, currentCode);
                    results[`validation-${index}`] = Boolean(isValid);
                } catch (error) {
                    console.error('Validation error:', error);
                    results[`validation-${index}`] = false;
                }
            });

            setValidationResults(results);
        }
    }, [currentCode, validations]);


    return (
        <div className={`task-container ${className}`} data-task>
            {validations.length > 0 && (
                <div className="task-header">
                    <h2>🎯 Your Task</h2>
                    <div className="progress-indicator">
                        <div className="progress-bar">
                            <div
                                className="progress-fill"
                                style={{ width: `${getCompletionPercentage()}%` }}
                            ></div>
                        </div>
                        <span className="progress-text">{getCompletionPercentage()}% Complete</span>
                    </div>
                </div>
            )}

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
                    {validations.length > 0 && (
                        <div className="task-progress">
                            <div className="progress-bar">
                                <div
                                    className="progress-fill"
                                    style={{ width: `${getCompletionPercentage()}%` }}
                                ></div>
                            </div>
                            <span className="progress-text">{getCompletionPercentage()}% Complete</span>
                        </div>
                    )}
                    <div className="requirement-list">
                        {/* Show validations with live validation status */}
                        {validations.map((validation, index) => {
                            const isValid = validationResults[`validation-${index}`];
                            return (
                                <div key={`validation-${index}`} className="requirement-item">
                                    <span className="requirement-status">
                                        {isValid === true ? '✅' : isValid === false ? '❌' : '⭕'}
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
                    <h3>� Helpful Hints</h3>
                    {hints.map((hint, index) => (
                        <div key={index} className="hint-item">
                            {hint}
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
};

Task.displayName = 'Task';

export default Task;