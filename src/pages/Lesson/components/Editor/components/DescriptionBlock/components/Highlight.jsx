import React from 'react';

// Highlight component - highlights specific parts in CodeBlock
const Highlight = ({ children, target, className = '' }) => {
    return (
        <span
            className={`highlight-trigger ${className}`}
            data-highlight-target={target}
            onMouseEnter={() => {
                // Dispatch custom event to highlight code
                window.dispatchEvent(new CustomEvent('highlightCode', {
                    detail: { target, action: 'highlight' }
                }));
            }}
            onMouseLeave={() => {
                window.dispatchEvent(new CustomEvent('highlightCode', {
                    detail: { target, action: 'unhighlight' }
                }));
            }}
        >
            {children}
        </span>
    );
};

export default Highlight;