import React, { useState, useRef } from 'react';

const InteractiveCodeBlock = ({
    language,
    children,
    runnable = false,
    hoverable = false,
    onCodeChange,  // This will update the main preview
    codeEditorRef  // Reference to the CodeBlock to get current content
}) => {
    const [output, setOutput] = useState('');
    const [isRunning, setIsRunning] = useState(false);
    const [copied, setCopied] = useState(false);
    const codeRef = useRef(null);

    const code = typeof children === 'string' ? children : children?.toString() || '';

    // Handle code execution for JavaScript
    const runCode = async () => {
        if (language !== 'javascript' || !runnable) return;

        setIsRunning(true);
        setOutput('');

        try {
            // Create a safe execution environment
            const originalLog = console.log;
            const logs = [];

            // Override console.log to capture output
            console.log = (...args) => {
                logs.push(args.join(' '));
            };

            // Execute the code
            const func = new Function(code);
            const result = func();

            // Restore console.log
            console.log = originalLog;

            // Set output
            if (logs.length > 0) {
                setOutput(logs.join('\n'));
            } else if (result !== undefined) {
                setOutput(String(result));
            } else {
                setOutput('Code executed successfully');
            }
        } catch (error) {
            setOutput(`Error: ${error.message}`);
        } finally {
            setIsRunning(false);
        }
    };

    // Handle copy to clipboard
    const copyCode = async () => {
        try {
            await navigator.clipboard.writeText(code);
            setCopied(true);
            setTimeout(() => setCopied(false), 2000);
        } catch (err) {
            console.error('Failed to copy code:', err);
        }
    };

    // Handle hover preview for HTML/CSS - update main preview
    const handleMouseEnter = () => {
        console.log('Mouse enter on code block:', language, hoverable);
        if (hoverable && (language === 'html' || language === 'css') && onCodeChange) {
            // Update the main preview with this code
            console.log('Updating preview with hovered code:', code.substring(0, 50) + '...');
            onCodeChange(code);
        }
    };

    const handleMouseLeave = () => {
        console.log('Mouse leave on code block:', hoverable);
        if (hoverable && (language === 'html' || language === 'css') && onCodeChange && codeEditorRef?.current) {
            // Get the current content from the CodeBlock and restore it
            const currentCodeBlockContent = codeEditorRef.current.getContent ?
                codeEditorRef.current.getContent() : '';
            console.log('Restoring CodeBlock content:', currentCodeBlockContent.substring(0, 50) + '...');
            onCodeChange(currentCodeBlockContent);
        }
    };

    return (
        <div className="interactive-code-block">
            <div className="code-header">
                <span className="language-tag">{language}</span>
                <div className="code-actions">
                    <button
                        className="btn small"
                        onClick={copyCode}
                        title="Copy code"
                    >
                        {copied ? '✓ Copied' : '📋 Copy'}
                    </button>
                    {runnable && language === 'javascript' && (
                        <button
                            className="btn small"
                            onClick={runCode}
                            disabled={isRunning}
                            title="Run JavaScript code"
                        >
                            {isRunning ? '⏳ Running...' : '▶️ Run'}
                        </button>
                    )}
                    {hoverable && (language === 'html' || language === 'css') && (
                        <span className="hover-hint">🔍 Hover to preview</span>
                    )}
                </div>
            </div>
            <div
                className="code-snippet-content"
                ref={codeRef}
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
            >
                {code}
            </div>
            {output && (
                <div className="code-output">
                    <div className="output-header">Output</div>
                    <pre className="output-content">{output}</pre>
                </div>
            )}
        </div>
    );
};

export default InteractiveCodeBlock;