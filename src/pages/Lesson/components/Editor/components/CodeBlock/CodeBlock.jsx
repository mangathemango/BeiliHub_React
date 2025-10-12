import React, { useState, useEffect, useCallback, useImperativeHandle, forwardRef } from 'react';
import './CodeBlock.css';

const CodeBlock = forwardRef(({
    initialCode = '',
    language = 'html',
    onCodeChange,
    onSubmit,
    children
}, ref) => {
    // Simple JSX to string converter (for unsupported elements)
    const jsxToString = (element) => {
        if (typeof element === 'string') return element;
        if (!React.isValidElement(element)) return '';
        return `<${element.type || 'div'}>${element.props?.children || ''}</${element.type || 'div'}>`;
    };

    const parseChildren = () => {
        if (!children) return [{ type: 'editable', content: initialCode, id: 'main' }];

        try {
            const segments = [];
            let segmentId = 0;
            let currentLineSegments = [];

        const flushCurrentLine = () => {
            if (currentLineSegments.length > 0) {
                if (currentLineSegments.length === 1 && currentLineSegments[0].type === 'editable') {
                    // Single block editable - keep as separate line
                    segments.push(currentLineSegments[0]);
                } else {
                    // Multiple segments or inline segments - group as inline line
                    segments.push({
                        type: 'inline-group',
                        segments: currentLineSegments,
                        id: `line-${segmentId++}`
                    });
                }
                currentLineSegments = [];
            }
        };

        React.Children.forEach(children, (child) => {
            // Skip null, undefined, or boolean children
            if (child == null || typeof child === 'boolean') {
                return;
            }
            
            if (React.isValidElement(child)) {
                // If it's <Editable>, flush current line and add as block
                if (child.type?.name === 'Editable' || child.type?.displayName === 'Editable') {
                    flushCurrentLine();
                    const content = typeof child.props?.children === 'string' ? child.props.children : jsxToString(child.props?.children || '');
                    segments.push({ type: 'editable', content, id: `segment-${segmentId++}` });
                }
                // If it's <InlineEditable>, add to current line
                else if (child.type?.name === 'InlineEditable' || child.type?.displayName === 'InlineEditable') {
                    const content = typeof child.props?.children === 'string' ? child.props.children : jsxToString(child.props?.children || '');
                    currentLineSegments.push({ type: 'inline-editable', content, id: `segment-${segmentId++}` });
                } else {
                    // Otherwise, add as readonly to current line
                    currentLineSegments.push({ type: 'readonly', content: jsxToString(child), id: `segment-${segmentId++}` });
                }
            } else if (typeof child === 'string') {
                // Split string by lines and add each line separately
                const lines = child.split('\n');
                lines.forEach((line, index) => {
                    if (line || index === 0) {
                        currentLineSegments.push({ type: 'readonly', content: line, id: `segment-${segmentId++}` });
                    }
                    if (index < lines.length - 1) {
                        // End of line - flush current segments
                        if (currentLineSegments.length > 0) {
                            currentLineSegments[currentLineSegments.length - 1].content += '\n';
                        }
                        flushCurrentLine();
                    }
                });
            }
        });

            // Flush any remaining segments
            flushCurrentLine();

            return segments.length > 0 ? segments : [{ type: 'editable', content: initialCode, id: 'main' }];
        } catch (error) {
            console.error('Error parsing CodeBlock children:', error);
            // Return fallback content on error
            return [{ type: 'editable', content: initialCode || '', id: 'main' }];
        }
    };

    const [codeSegments, setCodeSegments] = useState(parseChildren());
    const [isSubmitting, setIsSubmitting] = useState(false);

    // Get the full code by combining all segments
    const getFullCode = useCallback(() => {
        return codeSegments.map(segment => {
            if (segment.type === 'inline-group') {
                return segment.segments.map(s => s.content).join('');
            }
            return segment.content;
        }).join('');
    }, [codeSegments]);

    // Update full code when segments change
    useEffect(() => {
        const newFullCode = getFullCode();
        onCodeChange?.(newFullCode);
    }, [getFullCode, onCodeChange]);

    const handleSegmentChange = (segmentId, newContent) => {
        setCodeSegments(prev =>
            prev.map(segment => {
                if (segment.id === segmentId) {
                    return { ...segment, content: newContent };
                } else if (segment.type === 'inline-group') {
                    // Check if the segment ID is within this inline group
                    const updatedSegments = segment.segments.map(inlineSegment =>
                        inlineSegment.id === segmentId
                            ? { ...inlineSegment, content: newContent }
                            : inlineSegment
                    );
                    return { ...segment, segments: updatedSegments };
                }
                return segment;
            })
        );
    };

    const handleSubmit = async () => {
        setIsSubmitting(true);
        try {
            const currentCode = getFullCode();
            await onSubmit?.(currentCode);
        } finally {
            setIsSubmitting(false);
        }
    };

    const applySyntaxHighlighting = (code) => {
        let highlightedCode = code;

        // Apply syntax highlighting
        if (language === 'html') {
            // HTML Comments (must be first to avoid interfering with tags)
            highlightedCode = highlightedCode
                .replace(/(&lt;!--[\s\S]*?--&gt;)/g, '<span class="comment">$1</span>');

            // HTML Doctype
            highlightedCode = highlightedCode
                .replace(/(&lt;!DOCTYPE[^&gt;]*&gt;)/gi, '<span class="doctype">$1</span>');

            // Process HTML tags as complete units to avoid interference
            highlightedCode = highlightedCode.replace(/(&lt;\/?)([a-zA-Z][a-zA-Z0-9]*\b)([^&gt;]*)(&gt;)/g, (match, openBracket, tagName, attributes, closeBracket) => {
                let result = `<span class="bracket">${openBracket}</span><span class="tag">${tagName}</span>`;

                // Process attributes within this tag
                if (attributes) {
                    result += attributes.replace(/(\s+)([a-zA-Z-]+)(=)("([^"]*)"|'([^']*)'|([^\s&gt;]+))/g,
                        (attrMatch, space, attrName, equals, attrValue) => {
                            return `${space}<span class="attribute">${attrName}</span>${equals}<span class="string">${attrValue}</span>`;
                        });
                }

                result += `<span class="bracket">${closeBracket}</span>`;
                return result;
            });

        } else if (language === 'css') {
            // CSS Comments
            highlightedCode = highlightedCode
                .replace(/(\/\*[\s\S]*?\*\/)/g, '<span class="comment">$1</span>');

            // CSS Selectors
            highlightedCode = highlightedCode
                .replace(/([.#]?[a-zA-Z-_][a-zA-Z0-9-_]*|\*|::?[a-zA-Z-]+)(\s*{)/g, '<span class="selector">$1</span>$2');

            // CSS Properties
            highlightedCode = highlightedCode
                .replace(/([a-zA-Z-]+)(\s*:)/g, '<span class="property">$1</span>$2');

            // CSS Values
            highlightedCode = highlightedCode
                .replace(/(:\s*)([^;{}]+)/g, '$1<span class="value">$2</span>');

        } else if (language === 'javascript') {
            // JS Comments
            highlightedCode = highlightedCode
                .replace(/(\/\/.*$)/gm, '<span class="comment">$1</span>')
                .replace(/(\/\*[\s\S]*?\*\/)/g, '<span class="comment">$1</span>');

            // JS Keywords
            highlightedCode = highlightedCode
                .replace(/\b(function|var|let|const|if|else|for|while|return|true|false|null|undefined|class|import|export|from|async|await|try|catch|finally)\b/g, '<span class="keyword">$1</span>');

            // JS Strings
            highlightedCode = highlightedCode
                .replace(/(["'`])[^"'`]*\1/g, '<span class="string">$&</span>');
        }

        return highlightedCode;
    };

    // Simple line numbering - each rendered segment gets exactly one line number
    const getLineNumbers = () => {
        const lineNumbers = [];
        let currentLine = 1;

        codeSegments.forEach((segment) => {
            // Skip invalid segments
            if (!segment || !segment.id) {
                return;
            }
            // Every segment gets exactly one line number, regardless of content
            lineNumbers.push({
                segmentId: segment.id,
                lines: [currentLine++]
            });
        });

        return lineNumbers;
    };

    const renderSegment = (segment) => {
        // Safety check for undefined segments
        if (!segment || !segment.id || !segment.type) {
            console.warn('Invalid segment found:', segment);
            return null;
        }

        const baseClasses = `code-segment segment-${segment.type}`;
        const classes = baseClasses;

        const lineNumbers = getLineNumbers();
        const segmentLineNumbers = lineNumbers.find(ln => ln.segmentId === segment.id)?.lines || [];

        switch (segment.type) {
            case 'readonly':
                return (
                    <div key={segment.id} className={`code-line-container ${classes}`}>
                        <div className="segment-line-numbers">
                            {segmentLineNumbers.map(lineNum => (
                                <div key={lineNum} className="line-number">{lineNum}</div>
                            ))}
                        </div>
                        <pre className="code-content readonly-content">
                            <code dangerouslySetInnerHTML={{
                                __html: applySyntaxHighlighting(segment.content.replace(/</g, '&lt;').replace(/>/g, '&gt;'))
                            }} />
                        </pre>
                    </div>
                );

            case 'editable':
                return (
                    <div key={segment.id} className={`code-line-container ${classes}`}>
                        <div className="segment-line-numbers">
                            {segmentLineNumbers.map(lineNum => (
                                <div key={lineNum} className="line-number">{lineNum}</div>
                            ))}
                        </div>
                        <div className="editable-content-wrapper">
                            <textarea
                                className="editable-content"
                                value={segment.content}
                                onChange={(e) => handleSegmentChange(segment.id, e.target.value)}
                                onKeyDown={(e) => {
                                    if (e.key === 'Tab') {
                                        e.preventDefault();
                                        const textarea = e.target;
                                        const start = textarea.selectionStart;
                                        const end = textarea.selectionEnd;
                                        const newContent = segment.content.substring(0, start) + '  ' + segment.content.substring(end);
                                        handleSegmentChange(segment.id, newContent);
                                        setTimeout(() => {
                                            textarea.selectionStart = textarea.selectionEnd = start + 2;
                                        }, 0);
                                    }
                                }}
                                spellCheck={false}
                                autoComplete="off"
                                placeholder="Enter your code here..."
                                rows={segment.content.split('\n').length || 1}
                            />
                            <pre className="syntax-overlay" aria-hidden="true">
                                <code dangerouslySetInnerHTML={{
                                    __html: applySyntaxHighlighting(segment.content.replace(/</g, '&lt;').replace(/>/g, '&gt;'))
                                }} />
                            </pre>
                        </div>
                    </div>
                );

            case 'inline-group': {
                // Force inline groups to always show just one line number
                const firstLineNum = segmentLineNumbers[0] || 1;
                return (
                    <div key={segment.id} className={`code-line-container ${classes}`}>
                        <div className="segment-line-numbers">
                            <div className="line-number">{firstLineNum}</div>
                        </div>
                        <div className="inline-group-content">
                            {segment.segments.map((inlineSegment) => {
                                if (inlineSegment.type === 'inline-editable') {
                                    return (
                                        <span key={inlineSegment.id} className="inline-editable-wrapper">
                                            <input
                                                type="text"
                                                className="inline-editable-input"
                                                value={inlineSegment.content}
                                                onChange={(e) => handleSegmentChange(inlineSegment.id, e.target.value)}
                                                spellCheck={false}
                                                autoComplete="off"
                                                placeholder="Edit..."
                                                style={{ width: `${Math.max(inlineSegment.content.length + 1, 8)}ch` }}
                                            />
                                            <span className="inline-syntax-highlight" aria-hidden="true">
                                                <span dangerouslySetInnerHTML={{
                                                    __html: applySyntaxHighlighting(inlineSegment.content.replace(/</g, '&lt;').replace(/>/g, '&gt;'))
                                                }} />
                                            </span>
                                        </span>
                                    );
                                } else {
                                    return (
                                        <span key={inlineSegment.id} className="inline-readonly-content">
                                            <span dangerouslySetInnerHTML={{
                                                __html: applySyntaxHighlighting(inlineSegment.content.replace(/</g, '&lt;').replace(/>/g, '&gt;'))
                                            }} />
                                        </span>
                                    );
                                }
                            })}
                        </div>
                    </div>
                );
            }

            default:
                return (
                    <div key={segment.id} className={`code-line-container ${classes}`}>
                        <div className="segment-line-numbers">
                            {segmentLineNumbers.map(lineNum => (
                                <div key={lineNum} className="line-number">{lineNum}</div>
                            ))}
                        </div>
                        <div className="code-content">
                            {segment.content}
                        </div>
                    </div>
                );
        }
    };

    // Expose methods to parent components through ref
    useImperativeHandle(ref, () => ({
        getContent: getFullCode
    }), [getFullCode]);

    return (
        <div className="code-block">
            <div className="panel-header">
                <h3>Code Editor</h3>
                <div className="code-actions">
                    <button
                        className="btn primary"
                        onClick={handleSubmit}
                        disabled={isSubmitting}
                    >
                        {isSubmitting ? 'Submitting...' : 'Submit Code'}
                    </button>
                </div>
            </div>
            <div className="panel-content">
                <div className="code-editor segmented unified">
                    {codeSegments.map(renderSegment).filter(element => element !== null)}
                </div>
            </div>
        </div>
    );
});

CodeBlock.displayName = 'CodeBlock';

export default CodeBlock;