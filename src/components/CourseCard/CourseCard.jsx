import React from 'react';
import './CourseCard.css';

const CourseCard = ({ course, onPreview, featured = false }) => {
    const handlePreviewClick = (e) => {
        e.preventDefault();
        onPreview(course);
    };

    return (
        <article className={`course-card ${featured ? 'featured' : ''}`}>
            <div className="course-header">
                <div className="course-icon">
                    {course.icon || '📚'}
                </div>
                <div className="course-meta">
                    <h3 className="course-title">{course.title}</h3>
                    <div className="course-level">{course.level}</div>
                </div>
            </div>

            <p className="course-description">
                {course.description || 'Comprehensive course covering all essential topics.'}
            </p>

            <div className="course-stats">
                <div className="course-stat">
                    <span>⏱️</span>
                    <span>{course.length}</span>
                </div>
                <div className="course-stat">
                    <span>👨‍🏫</span>
                    <span>{course.author}</span>
                </div>
                <div className="course-stat">
                    <span>⭐</span>
                    <span>{course.rating || '4.8'}</span>
                </div>
            </div>

            {course.tags && (
                <div className="course-tags">
                    {course.tags.map((tag, index) => (
                        <span key={index} className="course-tag">{tag}</span>
                    ))}
                </div>
            )}

            {course.progress !== undefined && (
                <div className="course-progress">
                    <div className="progress-bar">
                        <div
                            className="progress-fill"
                            style={{ width: `${course.progress}%` }}
                        />
                    </div>
                    <div className="progress-text">
                        {course.progress}% Complete
                    </div>
                </div>
            )}

            <div className="course-footer">
                <div className={`course-price ${course.price === 'Free' ? 'free' : ''}`}>
                    {course.price || 'Free'}
                </div>
                <div className="course-actions">
                    <button className="course-btn primary" onClick={handlePreviewClick}>
                        Preview
                    </button>
                    <button className="course-btn secondary">
                        ♡
                    </button>
                </div>
            </div>
        </article>
    );
};

export default CourseCard;