import React from 'react';

const HighlightTrigger = ({
    children,
    target,
    onHighlight,
    className = ''
}) => {
    const handleMouseEnter = () => {
        if (onHighlight && target) {
            onHighlight(target, 'highlight');
        }
    };

    const handleMouseLeave = () => {
        if (onHighlight && target) {
            onHighlight(target, 'unhighlight');
        }
    };

    return (
        <span
            className={`highlight-trigger ${className}`}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
        >
            {children}
        </span>
    );
};

export default HighlightTrigger;