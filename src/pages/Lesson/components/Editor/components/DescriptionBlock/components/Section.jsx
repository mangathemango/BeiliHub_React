import React from 'react';

// Section component - organizes content into sections
const Section = ({ 
    children, 
    title, 
    className = '',
    onHighlight,
    onCodePreview,
    onCodePreviewEnd,
    codeEditorRef
}) => {
    // Clone children and pass down interactive props
    const enhancedChildren = React.Children.map(children, child => {
        if (React.isValidElement(child)) {
            return React.cloneElement(child, {
                onHighlight,
                onCodePreview,
                onCodePreviewEnd,
                codeEditorRef,
                ...child.props
            });
        }
        return child;
    });

    return (
        <div className={`lesson-section ${className}`}>
            {title && <h3 className="section-title">{title}</h3>}
            <div className="section-content">
                {enhancedChildren}
            </div>
        </div>
    );
};

export default Section;