import React, { useState, useEffect, useCallback } from 'react';
import './CodeBlock.css';

const CodeBlock = ({
    initialCode = '',
    language = 'html',
    onCodeChange,
    onSubmit,
    children
}) => {
    // Parse children to create code segments
    const parseChildren = () => {
        if (!children) return [{ type: 'editable', content: initialCode, id: 'main' }];

        const segments = [];
        let segmentId = 0;

        React.Children.forEach(children, (child) => {
            if (React.isValidElement(child)) {
                const childType = child.type?.name || child.type?.displayName;
                const content = typeof child.props.children === 'string' ? child.props.children : '';

                switch (childType) {
                    case 'ReadOnly':
                        segments.push({ type: 'readonly', content, id: `segment-${segmentId++}` });
                        break;
                    case 'Template':
                        segments.push({ type: 'readonly', content, id: `segment-${segmentId++}` });
                        break;
                    case 'Editable':
                        segments.push({ type: 'editable', content, id: `segment-${segmentId++}` });
                        break;
                    case 'Highlightable':
                        segments.push({ type: 'highlightable', content, id: `segment-${segmentId++}`, name: child.props.name });
                        break;
                    default:
                        // If it's just text or unknown component, treat as readonly
                        segments.push({ type: 'readonly', content, id: `segment-${segmentId++}` });
                }
            }
        });

        return segments.length > 0 ? segments : [{ type: 'editable', content: initialCode, id: 'main' }];
    };

    const [codeSegments, setCodeSegments] = useState(parseChildren());
    const [highlightedRegions, setHighlightedRegions] = useState([]);
    const [isSubmitting, setIsSubmitting] = useState(false);

    // Get the full code by combining all segments
    const getFullCode = useCallback(() => {
        return codeSegments.map(segment => segment.content).join('');
    }, [codeSegments]);

    // Update full code when segments change
    useEffect(() => {
        const newFullCode = getFullCode();
        onCodeChange?.(newFullCode);
    }, [getFullCode, onCodeChange]);

    // Listen for highlight events from DescriptionBlock
    useEffect(() => {
        const handleHighlight = (event) => {
            const { target, action } = event.detail;
            if (action === 'highlight') {
                setHighlightedRegions(prev => [...prev, target]);
            } else if (action === 'unhighlight') {
                setHighlightedRegions(prev => prev.filter(item => item !== target));
            }
        };

        window.addEventListener('highlightCode', handleHighlight);
        return () => window.removeEventListener('highlightCode', handleHighlight);
    }, []);

    const handleSegmentChange = (segmentId, newContent) => {
        setCodeSegments(prev =>
            prev.map(segment =>
                segment.id === segmentId
                    ? { ...segment, content: newContent }
                    : segment
            )
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

        // Apply highlighting for regions
        highlightedRegions.forEach(target => {
            if (target === 'tags') {
                highlightedCode = highlightedCode.replace(
                    /<span class="tag">([^<]*)<\/span>/g,
                    '<span class="tag highlighted">$1</span>'
                );
            } else if (target === 'attributes') {
                highlightedCode = highlightedCode.replace(
                    /<span class="attribute">([^<]*)<\/span>/g,
                    '<span class="attribute highlighted">$1</span>'
                );
            } else if (target === 'head') {
                highlightedCode = highlightedCode.replace(
                    /(&lt;head[^&]*&gt;[\s\S]*?&lt;\/head&gt;)/gi,
                    '<span class="highlighted-region">$1</span>'
                );
            } else if (target === 'body') {
                highlightedCode = highlightedCode.replace(
                    /(&lt;body[^&]*&gt;[\s\S]*?&lt;\/body&gt;)/gi,
                    '<span class="highlighted-region">$1</span>'
                );
            }
        });

        return highlightedCode;
    };

    const renderSegment = (segment) => {
        const baseClasses = `code-segment segment-${segment.type}`;
        const isHighlighted = highlightedRegions.includes(segment.name);
        const classes = `${baseClasses} ${isHighlighted ? 'highlighted' : ''}`;

        switch (segment.type) {
            case 'readonly':
                return (
                    <pre key={segment.id} className={classes}>
                        <code dangerouslySetInnerHTML={{
                            __html: applySyntaxHighlighting(segment.content.replace(/</g, '&lt;').replace(/>/g, '&gt;'))
                        }} />
                    </pre>
                );

            case 'editable':
                return (
                    <textarea
                        key={segment.id}
                        className={`${classes} editable-segment`}
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
                );

            case 'highlightable':
                return (
                    <div key={segment.id} className={classes} data-name={segment.name}>
                        <pre>
                            <code dangerouslySetInnerHTML={{
                                __html: applySyntaxHighlighting(segment.content.replace(/</g, '&lt;').replace(/>/g, '&gt;'))
                            }} />
                        </pre>
                    </div>
                );

            default:
                return (
                    <div key={segment.id} className={classes}>
                        {segment.content}
                    </div>
                );
        }
    };

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
                <div className="code-editor segmented">
                    {codeSegments.map(renderSegment)}
                </div>
            </div>
        </div>
    );
};

export default CodeBlock;