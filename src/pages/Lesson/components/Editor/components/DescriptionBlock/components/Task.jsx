import React from 'react';

// Task component - defines learning tasks
const Task = ({ children, objective, requirements = [], hints = [], className = '' }) => {
    return (
        <div className={`task-container ${className}`}>
            {objective && (
                <div className="task-objective">
                    <h3>🎯 Objective</h3>
                    <p>{objective}</p>
                </div>
            )}
            {requirements.length > 0 && (
                <div className="task-requirements">
                    <h3>📋 Requirements</h3>
                    <div className="requirement-list">
                        {requirements.map((req, index) => (
                            <div key={index} className="requirement-item">
                                <span className="requirement-status">⭕</span>
                                <span>{req}</span>
                            </div>
                        ))}
                    </div>
                </div>
            )}
            {hints.length > 0 && (
                <div className="task-hints">
                    <h3>💭 Hints</h3>
                    {hints.map((hint, index) => (
                        <div key={index} className="hint-item">
                            {hint}
                        </div>
                    ))}
                </div>
            )}
            <div className="task-content">
                {children}
            </div>
        </div>
    );
};

export default Task;