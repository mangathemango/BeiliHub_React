import React from 'react';

// CodeSnippet component - interactive code blocks
const CodeSnippet = ({ children, language = 'html', executable = false, className = '' }) => {
    return (
        <div
            className={`code-snippet ${className}`}
            data-language={language}
            data-executable={executable}
        >
            {children}
        </div>
    );
};

export default CodeSnippet;