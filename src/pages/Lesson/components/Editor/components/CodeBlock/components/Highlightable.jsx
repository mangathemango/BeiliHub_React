import React from 'react';

// Highlightable component - code that can be highlighted from description
const Highlightable = ({ children, name, className = '' }) => {
    return (
        <span
            className={`highlightable-region ${className}`}
            data-highlight-name={name}
            data-highlightable="true"
        >
            {children}
        </span>
    );
};

export default Highlightable;