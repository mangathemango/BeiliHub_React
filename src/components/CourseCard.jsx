import React from 'react';

const CourseCard = ({ course, onPreview }) => {
    const handlePreviewClick = (e) => {
        e.preventDefault();
        onPreview(course);
    };

    return (
        <article className="course-card">
            <div className="course-thumb">
                <svg viewBox="0 0 800 120" preserveAspectRatio="xMidYMid slice">
                    <defs>
                        <linearGradient id={`cg${course.id}`} x1="0" x2="1">
                            <stop offset="0" stopColor="#ff9a8b" />
                            <stop offset="1" stopColor="#ff6a88" />
                        </linearGradient>
                    </defs>
                    <rect width="100%" height="100%" fill={`url(#cg${course.id})`} />
                    <text x="50%" y="55%" fontSize="28" textAnchor="middle" fill="#fff">
                        {course.title}
                    </text>
                </svg>
            </div>
            <div className="course-info">
                <div>
                    <div className="course-title">{course.title}</div>
                    <div className="course-meta">{course.author} • {course.level}</div>
                </div>
                <div className="course-meta">{course.length}</div>
            </div>
            <button className="btn primary preview" onClick={handlePreviewClick}>
                Preview
            </button>
        </article>
    );
};

export default CourseCard;