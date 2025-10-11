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
            <div className="description-tabs">
                <button
                    className={activeTab === 'lesson' ? 'active' : ''}
                    onClick={() => setActiveTab('lesson')}
                >Lesson</button>
                {taskChild && (
                    <button
                        className={activeTab === 'task' ? 'active' : ''}
                        onClick={() => setActiveTab('task')}
                    >Task</button>
                )}
                {quizChild && (
                    <button
                        className={activeTab === 'quiz' ? 'active' : ''}
                        onClick={() => setActiveTab('quiz')}
                    >Quiz</button>
                )}
            </div>
            <div className="description-content">
                {activeTab === 'lesson' && lessonChild && lessonChild.props.children}
                {activeTab === 'task' && taskChild}
                {activeTab === 'quiz' && quizChild}
            </div>
        </div>
    );
};

export default DescriptionBlock;