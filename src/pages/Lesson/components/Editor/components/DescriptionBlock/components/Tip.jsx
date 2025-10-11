import React from 'react';

// Tip component - shows helpful tips
const Tip = ({ children, type = 'info', icon, className = '' }) => {
    // Auto-select icons based on type if not provided
    const getIcon = () => {
        if (icon) return icon;
        switch (type) {
            case 'pro': return '🚀';
            case 'warning': return '⚠️';
            case 'info': return '💡';
            case 'note': return '📝';
            default: return '💡';
        }
    };

    const getLabel = () => {
        switch (type) {
            case 'pro': return 'Pro Tip';
            case 'warning': return 'Warning';
            case 'info': return 'Tip';
            case 'note': return 'Note';
            default: return 'Tip';
        }
    };

    return (
        <div className={`lesson-tip tip-${type} ${className}`}>
            <div className="tip-header">
                <span className="tip-icon">{getIcon()}</span>
                <span className="tip-label">{getLabel()}</span>
            </div>
            <div className="tip-content">
                {children}
            </div>
        </div>
    );
};

export default Tip;