import React from 'react';

// Editable component - marks code that can be edited
const Editable = ({ children, placeholder = '', className = '' }) => {
    return (
        <span
            className={`editable-region ${className}`}
            data-editable="true"
            data-placeholder={placeholder}
        >
            {children}
        </span>
    );
};

export default Editable;