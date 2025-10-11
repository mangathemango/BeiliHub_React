import React, { useState, useRef, useEffect } from 'react';
import './CodeBlock.css';

const CodeBlock = ({
    initialCode = '',
    language = 'html',
    onCodeChange,
    onSubmit,
    children
}) => {
    // Extract initial code from children if provided
    const getInitialCodeFromChildren = () => {
        if (!children) return initialCode;

        const startCodeChild = React.Children.toArray(children).find(
            child => child.type?.name === 'StartCode'
        );

        if (startCodeChild) {
            return typeof startCodeChild.props.children === 'string'
                ? startCodeChild.props.children
                : initialCode;
        }

        return initialCode;
    };

    const [code, setCode] = useState(getInitialCodeFromChildren());
    const [lineNumbers, setLineNumbers] = useState([]);
    const [highlightedRegions, setHighlightedRegions] = useState([]);
    const textareaRef = useRef(null);
    const [isSubmitting, setIsSubmitting] = useState(false);

    useEffect(() => {
        const lines = code.split('\n');
        setLineNumbers(lines.map((_, index) => index + 1));
    }, [code]);

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

    const handleCodeChange = (e) => {
        const newCode = e.target.value;
        setCode(newCode);
        onCodeChange?.(newCode);
    };

    const handleSubmit = async () => {
        setIsSubmitting(true);
        try {
            await onSubmit?.(code);
        } finally {
            setIsSubmitting(false);
        }
    };

    const handleKeyDown = (e) => {
        if (e.key === 'Tab') {
            e.preventDefault();
            const textarea = e.target;
            const start = textarea.selectionStart;
            const end = textarea.selectionEnd;

            const newCode = code.substring(0, start) + '  ' + code.substring(end);
            setCode(newCode);
            onCodeChange?.(newCode);

            // Move cursor after the inserted tab
            setTimeout(() => {
                textarea.selectionStart = textarea.selectionEnd = start + 2;
            }, 0);
        }
    };

    const applySyntaxHighlighting = (code) => {
        let highlightedCode = code;

        // Apply syntax highlighting
        if (language === 'html') {
            highlightedCode = highlightedCode
                .replace(/(&lt;\/?)([a-zA-Z][a-zA-Z0-9]*)/g, '$1<span class="tag">$2</span>')
                .replace(/(\s)([a-zA-Z-]+)(=)/g, '$1<span class="attribute">$2</span>$3')
                .replace(/(=)"([^"]*)"/g, '$1<span class="string">"$2"</span>')
                .replace(/(&lt;!--.*?--&gt;)/g, '<span class="comment">$1</span>');
        } else if (language === 'css') {
            highlightedCode = highlightedCode
                .replace(/([.#]?[a-zA-Z-]+)(\s*{)/g, '<span class="selector">$1</span>$2')
                .replace(/([a-zA-Z-]+)(\s*:)/g, '<span class="property">$1</span>$2')
                .replace(/(:\s*)([^;{}]+)/g, '$1<span class="value">$2</span>')
                .replace(/(\/\*.*?\*\/)/g, '<span class="comment">$1</span>');
        } else if (language === 'javascript') {
            highlightedCode = highlightedCode
                .replace(/\b(function|var|let|const|if|else|for|while|return|true|false|null|undefined)\b/g, '<span class="keyword">$1</span>')
                .replace(/(\/\/.*$)/gm, '<span class="comment">$1</span>')
                .replace(/(["'])[^"']*\1/g, '<span class="string">$&</span>');
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
                <div className="code-editor">
                    <div className="line-numbers">
                        {lineNumbers.map(num => (
                            <div key={num} className="line-number">{num}</div>
                        ))}
                    </div>
                    <div className="code-input-container">
                        <textarea
                            ref={textareaRef}
                            value={code}
                            onChange={handleCodeChange}
                            onKeyDown={handleKeyDown}
                            className="code-textarea"
                            spellCheck={false}
                            autoComplete="off"
                            placeholder={`Write your ${language} code here...`}
                        />
                        <div
                            className="syntax-highlight"
                            dangerouslySetInnerHTML={{
                                __html: applySyntaxHighlighting(code.replace(/</g, '&lt;').replace(/>/g, '&gt;'))
                            }}
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CodeBlock;