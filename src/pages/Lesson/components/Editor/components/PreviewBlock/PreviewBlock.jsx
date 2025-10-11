import React, { useState, useEffect, useRef } from 'react';
import './PreviewBlock.css';

const PreviewBlock = ({
    code = '',
    language = 'html',
    autoRefresh = true,
    refreshInterval = 1000
}) => {
    const [previewContent, setPreviewContent] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);
    const iframeRef = useRef(null);
    const timeoutRef = useRef(null);

    const generateHTML = (htmlCode, cssCode = '', jsCode = '') => {
        return `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Preview</title>
    <style>
        body {
            font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
            margin: 20px;
            background: #f5f5f5;
            color: #333;
        }
        ${cssCode}
    </style>
</head>
<body>
    ${htmlCode}
    <script>
        // Prevent alerts and confirms from blocking
        window.alert = function(msg) { console.log('Alert:', msg); };
        window.confirm = function(msg) { console.log('Confirm:', msg); return true; };
        
        // Capture console logs and display them
        const originalLog = console.log;
        console.log = function(...args) {
            originalLog.apply(console, args);
            // Could send logs to parent window if needed
        };
        
        try {
            ${jsCode}
        } catch (error) {
            console.error('JavaScript Error:', error.message);
        }
    </script>
</body>
</html>`;
    };

    const updatePreview = React.useCallback((newCode) => {
        if (timeoutRef.current) {
            clearTimeout(timeoutRef.current);
        }

        timeoutRef.current = setTimeout(() => {
            setIsLoading(true);
            setError(null);

            try {
                let content = '';

                if (language === 'html') {
                    // Extract CSS and JS from HTML if present
                    const styleMatch = newCode.match(/<style[^>]*>([\s\S]*?)<\/style>/i);
                    const scriptMatch = newCode.match(/<script[^>]*>([\s\S]*?)<\/script>/i);

                    const cssCode = styleMatch ? styleMatch[1] : '';
                    const jsCode = scriptMatch ? scriptMatch[1] : '';

                    // Remove style and script tags from HTML
                    const cleanHTML = newCode
                        .replace(/<style[^>]*>[\s\S]*?<\/style>/gi, '')
                        .replace(/<script[^>]*>[\s\S]*?<\/script>/gi, '');

                    content = generateHTML(cleanHTML, cssCode, jsCode);
                } else if (language === 'css') {
                    content = generateHTML('<div>CSS Preview</div>', newCode);
                } else if (language === 'javascript') {
                    content = generateHTML('<div id="output">JavaScript Output</div>', '', newCode);
                } else {
                    content = `<pre style="padding: 20px; background: #f8f9fa; border-radius: 4px; overflow: auto;">${newCode}</pre>`;
                }

                setPreviewContent(content);
                setIsLoading(false);
            } catch (err) {
                setError(err.message);
                setIsLoading(false);
            }
        }, autoRefresh ? refreshInterval : 0);
    }, [language, autoRefresh, refreshInterval]);

    useEffect(() => {
        updatePreview(code);
        return () => {
            if (timeoutRef.current) {
                clearTimeout(timeoutRef.current);
            }
        };
    }, [code, language, autoRefresh, refreshInterval, updatePreview]);

    const handleRefresh = () => {
        updatePreview(code);
    };

    const openInNewTab = () => {
        const newWindow = window.open('', '_blank');
        newWindow.document.write(previewContent);
        newWindow.document.close();
    };

    const downloadHTML = () => {
        const blob = new Blob([previewContent], { type: 'text/html' });
        const url = URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = 'preview.html';
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
        URL.revokeObjectURL(url);
    };

    return (
        <div className="preview-block">
            <div className="panel-header">
                <h3>Live Preview</h3>
                <div className="preview-actions">
                    <button
                        className="btn ghost small"
                        onClick={handleRefresh}
                        disabled={isLoading}
                        title="Refresh Preview"
                    >
                        🔄
                    </button>
                    <button
                        className="btn ghost small"
                        onClick={openInNewTab}
                        disabled={!previewContent || isLoading}
                        title="Open in New Tab"
                    >
                        🔗
                    </button>
                    <button
                        className="btn ghost small"
                        onClick={downloadHTML}
                        disabled={!previewContent || isLoading}
                        title="Download HTML"
                    >
                        💾
                    </button>
                </div>
            </div>

            <div className="panel-content preview-content">
                {isLoading && (
                    <div className="preview-loading">
                        <div className="loading-spinner"></div>
                        <span>Updating preview...</span>
                    </div>
                )}

                {error && (
                    <div className="preview-error">
                        <h4>Preview Error</h4>
                        <p>{error}</p>
                        <button className="btn ghost small" onClick={handleRefresh}>
                            Try Again
                        </button>
                    </div>
                )}

                {!isLoading && !error && (
                    <div className="preview-wrapper">
                        {previewContent ? (
                            <iframe
                                ref={iframeRef}
                                srcDoc={previewContent}
                                className="preview-iframe"
                                title="Code Preview"
                                sandbox="allow-scripts allow-same-origin allow-forms"
                            />
                        ) : (
                            <div className="preview-placeholder">
                                <div className="placeholder-content">
                                    <h3>Preview will appear here</h3>
                                    <p>Start typing in the code editor to see a live preview of your {language.toUpperCase()} code.</p>
                                    <div className="preview-features">
                                        <div className="feature-item">
                                            <span className="feature-icon">⚡</span>
                                            <span>Live updates</span>
                                        </div>
                                        <div className="feature-item">
                                            <span className="feature-icon">🔍</span>
                                            <span>Responsive preview</span>
                                        </div>
                                        <div className="feature-item">
                                            <span className="feature-icon">🐛</span>
                                            <span>Error handling</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )}
                    </div>
                )}
            </div>
        </div>
    );
};

export default PreviewBlock;