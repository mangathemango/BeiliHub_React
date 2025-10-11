import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './DescriptionBlock.css';

const DescriptionBlock = ({
    lessonContent,
    taskContent,
    moduleId,
    lessonId,
    onHighlightCode
}) => {
    const [activeTab, setActiveTab] = useState('lesson');
    const navigate = useNavigate();

    const handleQuizRedirect = () => {
        navigate(`/lesson/${moduleId}/${lessonId}/exercise`);
    };

    const handleCodeHover = (codeElement, action) => {
        if (action === 'enter') {
            onHighlightCode?.(codeElement);
        } else {
            onHighlightCode?.(null);
        }
    };

    const InteractiveCodeBlock = ({ code, language = 'html', executable = false }) => {
        const [output, setOutput] = useState('');

        const executeCode = () => {
            if (language === 'javascript') {
                try {
                    // Create a safe execution context
                    const func = new Function('console', code);
                    const logs = [];
                    const mockConsole = {
                        log: (...args) => logs.push(args.join(' ')),
                        error: (...args) => logs.push('ERROR: ' + args.join(' ')),
                        warn: (...args) => logs.push('WARNING: ' + args.join(' '))
                    };
                    func(mockConsole);
                    setOutput(logs.join('\n') || 'Code executed successfully');
                } catch (error) {
                    setOutput(`Error: ${error.message}`);
                }
            }
        };

        return (
            <div className="interactive-code-block">
                <div className="code-header">
                    <span className="language-tag">{language}</span>
                    {executable && (
                        <button className="btn ghost small" onClick={executeCode}>
                            Run Code
                        </button>
                    )}
                </div>
                <pre
                    className={`code-content ${language}`}
                    onMouseEnter={() => handleCodeHover(code, 'enter')}
                    onMouseLeave={() => handleCodeHover(code, 'leave')}
                >
                    <code>{code}</code>
                </pre>
                {output && (
                    <div className="code-output">
                        <div className="output-header">Output:</div>
                        <pre className="output-content">{output}</pre>
                    </div>
                )}
            </div>
        );
    };

    const HighlightableText = ({ children, highlightTarget }) => {
        return (
            <span
                className="highlightable-text"
                onMouseEnter={() => handleCodeHover(highlightTarget, 'enter')}
                onMouseLeave={() => handleCodeHover(highlightTarget, 'leave')}
            >
                {children}
            </span>
        );
    };

    return (
        <div className="description-block">
            <div className="panel-header">
                <div className="tab-navigation">
                    <button
                        className={`tab-btn ${activeTab === 'lesson' ? 'active' : ''}`}
                        onClick={() => setActiveTab('lesson')}
                    >
                        Lesson
                    </button>
                    <button
                        className={`tab-btn ${activeTab === 'task' ? 'active' : ''}`}
                        onClick={() => setActiveTab('task')}
                    >
                        Task
                    </button>
                    <button
                        className={`tab-btn ${activeTab === 'quiz' ? 'active' : ''}`}
                        onClick={() => setActiveTab('quiz')}
                    >
                        Quiz
                    </button>
                </div>
            </div>

            <div className="panel-content">
                {activeTab === 'lesson' && (
                    <div className="lesson-content">
                        <h2>HTML Basics</h2>
                        <p>
                            HTML (HyperText Markup Language) is the foundation of web pages.
                            It uses <HighlightableText highlightTarget="tags">tags</HighlightableText> to
                            structure content and define elements.
                        </p>

                        <h3>Basic HTML Structure</h3>
                        <InteractiveCodeBlock
                            code={`<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>My First Page</title>
</head>
<body>
    <h1>Hello World!</h1>
    <p>This is my first HTML page.</p>
</body>
</html>`}
                            language="html"
                        />

                        <p>
                            Every HTML document starts with a DOCTYPE declaration, followed by
                            the html element. Inside the html element, we have the
                            <HighlightableText highlightTarget="head">head section</HighlightableText>
                            for metadata and the
                            <HighlightableText highlightTarget="body">body section</HighlightableText>
                            for visible content.
                        </p>

                        <h3>HTML Attributes</h3>
                        <p>
                            <HighlightableText highlightTarget="attributes">Attributes</HighlightableText> provide
                            additional information about HTML elements. They are written inside the opening tag.
                        </p>

                        <InteractiveCodeBlock
                            code={`<img src="image.jpg" alt="Description" width="300">
<a href="https://example.com" target="_blank">Visit Example</a>
<div class="container" id="main-content">Content here</div>`}
                            language="html"
                        />

                        <div className="lesson-tip">
                            <h4>💡 Pro Tip</h4>
                            <p>Always include the alt attribute for images to make your website accessible!</p>
                        </div>
                    </div>
                )}

                {activeTab === 'task' && (
                    <div className="task-content">
                        <h2>Your Task</h2>
                        <div className="task-objective">
                            <h3>🎯 Objective</h3>
                            <p>Create a simple HTML page with the following elements:</p>
                            <ul>
                                <li>A proper HTML5 document structure</li>
                                <li>A heading (h1) with your name</li>
                                <li>A paragraph describing yourself</li>
                                <li>An image with proper attributes</li>
                                <li>A link to your favorite website</li>
                            </ul>
                        </div>

                        <div className="task-requirements">
                            <h3>📋 Requirements</h3>
                            <div className="requirement-list">
                                <div className="requirement-item">
                                    <span className="requirement-status">⭕</span>
                                    <span>Include DOCTYPE declaration</span>
                                </div>
                                <div className="requirement-item">
                                    <span className="requirement-status">⭕</span>
                                    <span>Use semantic HTML5 elements</span>
                                </div>
                                <div className="requirement-item">
                                    <span className="requirement-status">⭕</span>
                                    <span>Add alt text to images</span>
                                </div>
                                <div className="requirement-item">
                                    <span className="requirement-status">⭕</span>
                                    <span>Include at least one link</span>
                                </div>
                            </div>
                        </div>

                        <div className="task-hints">
                            <h3>💭 Hints</h3>
                            <div className="hint-item">
                                <strong>Structure:</strong> Start with the basic HTML5 boilerplate
                            </div>
                            <div className="hint-item">
                                <strong>Images:</strong> Use relative paths like "images/photo.jpg"
                            </div>
                            <div className="hint-item">
                                <strong>Links:</strong> Remember to use target="_blank" for external links
                            </div>
                        </div>
                    </div>
                )}

                {activeTab === 'quiz' && (
                    <div className="quiz-content">
                        <h2>Test Your Knowledge</h2>
                        <p>Ready to test what you've learned? Take a quick quiz to reinforce your understanding.</p>

                        <div className="quiz-preview">
                            <h3>Quiz Preview</h3>
                            <div className="quiz-stats">
                                <div className="stat-item">
                                    <span className="stat-number">5</span>
                                    <span className="stat-label">Questions</span>
                                </div>
                                <div className="stat-item">
                                    <span className="stat-number">~3</span>
                                    <span className="stat-label">Minutes</span>
                                </div>
                                <div className="stat-item">
                                    <span className="stat-number">80%</span>
                                    <span className="stat-label">To Pass</span>
                                </div>
                            </div>

                            <div className="quiz-topics">
                                <h4>Topics Covered:</h4>
                                <ul>
                                    <li>HTML document structure</li>
                                    <li>Common HTML elements</li>
                                    <li>HTML attributes</li>
                                    <li>Best practices</li>
                                    <li>Accessibility basics</li>
                                </ul>
                            </div>
                        </div>

                        <button
                            className="btn primary large"
                            onClick={handleQuizRedirect}
                        >
                            Start Quiz →
                        </button>
                    </div>
                )}
            </div>
        </div>
    );
};

export default DescriptionBlock;