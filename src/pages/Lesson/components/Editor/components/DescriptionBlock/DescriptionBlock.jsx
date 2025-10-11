import React, { useState } from 'react';
import './DescriptionBlock.css';
const DescriptionBlock = ({ children }) => {
    const [activeTab, setActiveTab] = useState('lesson');

    // Find children by type
    const lessonChild = React.Children.toArray(children).find(
        child => child.type?.name === 'Lesson'
    );
    const taskChild = React.Children.toArray(children).find(
        child => child.type?.name === 'Task'
    );
    const quizChild = React.Children.toArray(children).find(
        child => child.type?.name === 'Quiz'
    );

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
                    {taskChild && (
                        <button
                            className={`tab-btn ${activeTab === 'task' ? 'active' : ''}`}
                            onClick={() => setActiveTab('task')}
                        >
                            🎯 Task
                        </button>
                    )}
                    {quizChild && (
                        <button
                            className={`tab-btn ${activeTab === 'quiz' ? 'active' : ''}`}
                            onClick={() => setActiveTab('quiz')}
                        >
                            🧠 Quiz
                        </button>
                    )}
                </div>
            </div>
            <div className="panel-content">
                <div className="description-content">
                    {activeTab === 'lesson' && lessonChild && (
                        <div className="lesson-content">
                            {lessonChild.props.children}
                        </div>
                    )}
                    {activeTab === 'task' && taskChild && (
                        <div className="task-content">
                            {taskChild}
                        </div>
                    )}
                    {activeTab === 'quiz' && quizChild && (
                        <div className="quiz-content">
                            {quizChild}
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default DescriptionBlock;