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
        // If htmlCode already contains a full HTML document, use it as-is
        if (htmlCode.trim().toLowerCase().startsWith('<!doctype html>') ||
            htmlCode.trim().toLowerCase().startsWith('<html')) {
            return htmlCode;
        }

        // Otherwise, wrap it in a proper HTML structure
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
            background: #fff;
            color: #333;
            line-height: 1.6;
        }
        h1, h2, h3, h4, h5, h6 {
            color: #2c3e50;
            margin-top: 0;
        }
        p {
            margin-bottom: 1em;
        }
        a {
            color: #3498db;
            text-decoration: none;
        }
        a:hover {
            text-decoration: underline;
        }
        ${cssCode}
    </style>
</head>
<body>
    ${htmlCode}
    <script>
        // Prevent alerts and confirms from blocking the UI
        window.alert = function(msg) { 
            console.log('Alert:', msg);
            const alertDiv = document.createElement('div');
            alertDiv.style.cssText = 'position:fixed;top:10px;right:10px;background:#333;color:white;padding:10px;border-radius:5px;z-index:9999;max-width:300px;';
            alertDiv.textContent = 'Alert: ' + msg;
            document.body.appendChild(alertDiv);
            setTimeout(() => alertDiv.remove(), 3000);
        };
        
        window.confirm = function(msg) { 
            console.log('Confirm:', msg);
            return true;
        };
        
        // Enhanced error handling
        window.onerror = function(msg, url, line, col, error) {
            console.error('Script Error:', msg, 'at line', line);
            return false;
        };
        
        try {
            ${jsCode}
        } catch (error) {
            console.error('JavaScript Error:', error.message);
            const errorDiv = document.createElement('div');
            errorDiv.style.cssText = 'background:#f8d7da;color:#721c24;padding:10px;margin:10px 0;border-radius:5px;border:1px solid #f5c6cb;';
            errorDiv.textContent = 'JavaScript Error: ' + error.message;
            document.body.appendChild(errorDiv);
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
                                className={`preview-iframe ${isLoading ? 'loading' : ''}`}
                                title="Code Preview"
                                sandbox="allow-scripts allow-same-origin allow-forms"
                                onLoad={() => setIsLoading(false)}
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