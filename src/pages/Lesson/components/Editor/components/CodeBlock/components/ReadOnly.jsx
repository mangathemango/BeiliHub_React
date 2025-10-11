import React from 'react';

// ReadOnly component - marks code that cannot be edited
const ReadOnly = ({ children, startLine, endLine, className = '' }) => {
    return (
        <span
            className={`readonly-region ${className}`}
            data-start-line={startLine}
            data-end-line={endLine}
            data-readonly="true"
        >
            {children}
        </span>
    );
};

export default ReadOnly;