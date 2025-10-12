import React, { useState, useCallback } from 'react';
import './DescriptionBlock.css';
import Exercise from './components/Exercise';

const DescriptionBlock = ({
    children,
    codeEditorRef,
    currentCode,
    onCodeChange,
    category = 'html',
    lessonId = '1',
    taskRef
}) => {
    const [activeTab, setActiveTab] = useState('lesson');
    const [_customizationOptions, setCustomizationOptions] = useState({});

    // Find children by type (with more robust detection for forwardRef components)
    const lessonChild = React.Children.toArray(children).find(
        child => child.type?.name === 'Lesson' || child.type?.displayName === 'Lesson'
    );
    const taskChild = React.Children.toArray(children).find(
        child => {
            // Check multiple ways a Task component might be identified
            const isTask = child.type?.name === 'Task' ||
                child.type?.displayName === 'Task' ||
                (child.props && 'validations' in child.props && 'objective' in child.props);
            return isTask;
        }
    );

    // Debug logging
    console.log('DescriptionBlock children:', React.Children.toArray(children).map(child => ({
        type: child.type?.name,
        displayName: child.type?.displayName,
        props: Object.keys(child.props || {}),
        actualType: child.type
    })));
    console.log('Found taskChild:', taskChild ? 'YES' : 'NO');
    console.log('All children types:', React.Children.toArray(children).map(child => child.type));

    // More detailed check for Task component
    const allChildren = React.Children.toArray(children);
    allChildren.forEach((child, index) => {
        console.log(`Child ${index}:`, {
            type: child.type,
            typeName: child.type?.name,
            displayName: child.type?.displayName,
            isTask: child.type?.name === 'Task' || child.type?.displayName === 'Task',
            props: child.props
        });
    });

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
                                    onCodeChange,
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
                                    onCodeChange,
                                    ref: taskRef,
                                    ...taskChild.props
                                })
                                : <div className="empty-tab">No task for this lesson yet.</div>
                            }
                        </div>
                    )}
                    {activeTab === 'quiz' && (
                        <div className="quiz-content">
                            <Exercise
                                category={category}
                                lessonId={lessonId}
                            />
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

DescriptionBlock.displayName = 'DescriptionBlock';

export default DescriptionBlock;