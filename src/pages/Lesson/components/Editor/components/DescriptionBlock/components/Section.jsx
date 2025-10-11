import React from 'react';

// Section component - organizes content into sections
const Section = ({ children, title, className = '' }) => {
    return (
        <div className={`lesson-section ${className}`}>
            {title && <h3 className="section-title">{title}</h3>}
            <div className="section-content">
                {children}
            </div>
        </div>
    );
};

export default Section;