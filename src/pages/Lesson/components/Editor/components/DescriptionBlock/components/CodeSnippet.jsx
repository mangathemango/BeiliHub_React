import React, { useState } from 'react';

// CodeSnippet component - interactive code blocks
const CodeSnippet = ({ children, language = 'html', executable = false, className = '' }) => {
    const [copied, setCopied] = useState(false);

    const handleCopy = async () => {
        try {
            await navigator.clipboard.writeText(children);
            setCopied(true);
            setTimeout(() => setCopied(false), 2000);
        } catch (err) {
            console.error('Failed to copy code:', err);
        }
    };

    return (
        <div
            className={`code-snippet ${className}`}
            data-language={language}
            data-executable={executable}
        >
            <div className="code-header">
                <span className="language-tag">{language}</span>
                <button
                    className="btn small"
                    onClick={handleCopy}
                    title="Copy code"
                >
                    {copied ? '✓ Copied!' : '📋 Copy'}
                </button>
            </div>
            <pre className="code-snippet-content">
                <code>{children}</code>
            </pre>
        </div>
    );
};

export default CodeSnippet;