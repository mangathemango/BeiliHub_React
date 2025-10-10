import React from 'react';
import './Modal.css';

const Modal = ({ isOpen, onClose, title, description, course, children }) => {
    const handleOverlayClick = (e) => {
        if (e.target === e.currentTarget) {
            onClose();
        }
    };

    React.useEffect(() => {
        const handleKeyDown = (e) => {
            if (e.key === 'Escape') {
                onClose();
            }
        };

        if (isOpen) {
            document.addEventListener('keydown', handleKeyDown);
            document.body.style.overflow = 'hidden';
        }

        return () => {
            document.removeEventListener('keydown', handleKeyDown);
            document.body.style.overflow = 'unset';
        };
    }, [isOpen, onClose]);

    if (!isOpen) return null;

    return (
        <div className="modal-overlay" onClick={handleOverlayClick}>
            <div className="modal-content" role="dialog" aria-modal="true" aria-labelledby="modal-title">
                <div className="modal-header">
                    <h2 id="modal-title" className="modal-title">
                        {title || (course ? `${course.title} Preview` : 'Modal')}
                    </h2>
                    <button
                        className="modal-close"
                        aria-label="Close modal"
                        onClick={onClose}
                    >
                        ✕
                    </button>
                </div>

                <div className="modal-body">
                    {course ? (
                        <div className="course-preview">
                            <div className="course-preview-header">
                                <h3 className="course-preview-title">{course.title}</h3>
                                <div className="course-preview-meta">
                                    <span>{course.author}</span>
                                    <span>{course.level}</span>
                                    <span>{course.length}</span>
                                </div>
                            </div>

                            <div className="modal-stats">
                                <div className="modal-stat">
                                    <span className="modal-stat-value">{course.lessons || '12'}</span>
                                    <span className="modal-stat-label">Lessons</span>
                                </div>
                                <div className="modal-stat">
                                    <span className="modal-stat-value">{course.rating || '4.8'}</span>
                                    <span className="modal-stat-label">Rating</span>
                                </div>
                                <div className="modal-stat">
                                    <span className="modal-stat-value">{course.students || '2.5k'}</span>
                                    <span className="modal-stat-label">Students</span>
                                </div>
                            </div>

                            <div className="modal-section">
                                <h3>📝 What you'll learn</h3>
                                <ul className="modal-list">
                                    <li>Core concepts and fundamentals</li>
                                    <li>Hands-on practical exercises</li>
                                    <li>Real-world project applications</li>
                                    <li>Best practices and industry standards</li>
                                </ul>
                            </div>

                            <div className="modal-section">
                                <h3>📚 Course Content</h3>
                                <div className="course-lessons">
                                    {[1, 2, 3, 4, 5].map((lesson) => (
                                        <div key={lesson} className="lesson-item">
                                            <div className="lesson-number">{lesson}</div>
                                            <div className="lesson-info">
                                                <div className="lesson-title">
                                                    Introduction to {course.title} - Part {lesson}
                                                </div>
                                                <div className="lesson-duration">15 min</div>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            <div className="modal-actions">
                                <button className="modal-btn secondary" onClick={onClose}>
                                    Close
                                </button>
                                <button className="modal-btn primary">
                                    🚀 Start Learning
                                </button>
                            </div>
                        </div>
                    ) : (
                        <>
                            {description && <p>{description}</p>}
                            {children}

                            <div className="modal-actions">
                                <button className="modal-btn secondary" onClick={onClose}>
                                    Close
                                </button>
                            </div>
                        </>
                    )}
                </div>
            </div>
        </div>
    );
};

export default Modal;