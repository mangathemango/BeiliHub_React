import React from 'react';

// ReadOnly component - marks code that cannot be edited
const ReadOnly = ({ children, className = '' }) => {
    return (
        <span
            className={`readonly-region ${className}`}
            data-readonly="true"
        >
            {children}
        </span>
    );
};

export default ReadOnly;