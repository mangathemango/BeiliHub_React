import React from 'react';

// Tip component - shows helpful tips
const Tip = ({ children, type = 'info', icon = '💡', className = '' }) => {
    return (
        <div className={`lesson-tip tip-${type} ${className}`}>
            <div className="tip-header">
                <span className="tip-icon">{icon}</span>
                <span className="tip-label">
                    {type === 'pro' ? 'Pro Tip' :
                        type === 'warning' ? 'Warning' :
                            type === 'info' ? 'Tip' : 'Note'}
                </span>
            </div>
            <div className="tip-content">
                {children}
            </div>
        </div>
    );
};

export default Tip;