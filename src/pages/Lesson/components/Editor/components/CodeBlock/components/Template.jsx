import React from 'react';

// Template component - provides boilerplate code structure
const Template = ({ children, language = 'html' }) => {
    return (
        <div
            className="code-template"
            data-language={language}
        >
            {children}
        </div>
    );
};

export default Template;