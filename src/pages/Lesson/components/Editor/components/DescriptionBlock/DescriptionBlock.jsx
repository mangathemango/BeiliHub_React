import React, { useState, useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import './DescriptionBlock.css';

const DescriptionBlock = ({
    children,
    codeEditorRef,
    currentCode,
    onCodeChange,
    category = 'html',
    lessonId = '1'
}) => {
    const [activeTab, setActiveTab] = useState('lesson');
    const [_customizationOptions, setCustomizationOptions] = useState({});
    const navigate = useNavigate();

    // Handle quiz navigation
    const handleQuizRedirect = useCallback(() => {
        navigate(`/lesson/${category}/${lessonId}/exercise`);
    }, [navigate, category, lessonId]);

    // Find children by type
    const lessonChild = React.Children.toArray(children).find(
        child => child.type?.name === 'Lesson'
    );
    const taskChild = React.Children.toArray(children).find(
        child => child.type?.name === 'Task'
    );

    // Handle highlighting elements in the code editor
    const handleHighlight = useCallback((target, action) => {
        if (codeEditorRef?.current) {
            // This would integrate with the CodeBlock component
            // to highlight specific elements based on the target
            console.log('Highlighting:', target, action);

            // Example: highlight specific code patterns
            const codeElement = codeEditorRef.current;
            if (action === 'highlight') {
                // Add highlighting logic here
                codeElement.style.outline = '2px solid var(--accent1)';
            } else if (action === 'unhighlight') {
                // Remove highlighting logic here
                codeElement.style.outline = 'none';
            }
        }
    }, [codeEditorRef]);

    // Handle customization changes from Task component
    const handleCustomizationChange = useCallback((options) => {
        setCustomizationOptions(options);
        // Apply customization to the preview or code editor
        if (onCodeChange) {
            // This could modify the code with custom CSS variables
            console.log('Customization applied:', options);
            // You could inject this CSS into the preview
        }
    }, [onCodeChange]);

    return (
        <div className="description-block">
            <div className="panel-header">
                <h3>Learning Content</h3>
                <div className="tab-navigation">
                    <button
                        className={`tab-btn ${activeTab === 'lesson' ? 'active' : ''}`}
                        onClick={() => setActiveTab('lesson')}
                    >
                        📚 Lesson
                    </button>
                    <button
                        className={`tab-btn ${activeTab === 'task' ? 'active' : ''}`}
                        onClick={() => setActiveTab('task')}
                    >
                        🎯 Task
                    </button>
                    <button
                        className={`tab-btn ${activeTab === 'quiz' ? 'active' : ''}`}
                        onClick={() => setActiveTab('quiz')}
                    >
                        🧠 Quiz
                    </button>
                </div>
            </div>
            <div className="panel-content">
                <div className="description-content">
                    {activeTab === 'lesson' && (
                        <div className="lesson-content">
                            {lessonChild
                                ? React.cloneElement(lessonChild, {
                                    onHighlight: handleHighlight,
                                    codeEditorRef,
                                    ...lessonChild.props
                                })
                                : <div className="empty-tab">No lesson content yet.</div>
                            }
                        </div>
                    )}
                    {activeTab === 'task' && (
                        <div className="task-content">
                            {taskChild
                                ? React.cloneElement(taskChild, {
                                    currentCode,
                                    onCustomizationChange: handleCustomizationChange,
                                    ...taskChild.props
                                })
                                : <div className="empty-tab">No task for this lesson yet.</div>
                            }
                        </div>
                    )}
                    {activeTab === 'quiz' && (
                        <div className="quiz-content">
                            <div className="quiz-redirect-page">
                                <div className="quiz-intro">
                                    <h2>🧠 Knowledge Check</h2>
                                    <p>
                                        Ready to test your understanding of this lesson?
                                        Take the interactive quiz to reinforce what you've learned!
                                    </p>
                                    <div className="quiz-features">
                                        <div className="feature-item">
                                            <span className="feature-icon">📝</span>
                                            <span>Multiple choice questions</span>
                                        </div>
                                        <div className="feature-item">
                                            <span className="feature-icon">💡</span>
                                            <span>Instant feedback</span>
                                        </div>
                                        <div className="feature-item">
                                            <span className="feature-icon">📊</span>
                                            <span>Detailed explanations</span>
                                        </div>
                                        <div className="feature-item">
                                            <span className="feature-icon">🏆</span>
                                            <span>Track your progress</span>
                                        </div>
                                    </div>
                                </div>
                                <button
                                    className="btn quiz-redirect-button large"
                                    onClick={handleQuizRedirect}
                                >
                                    <span>Start Quiz</span>
                                    <span className="btn-arrow">→</span>
                                </button>
                                <p className="quiz-note">
                                    💡 <strong>Tip:</strong> Make sure you've completed the lesson and task before taking the quiz!
                                </p>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default DescriptionBlock;