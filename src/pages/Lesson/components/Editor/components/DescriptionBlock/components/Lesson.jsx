import React, { useState, useCallback } from 'react';

// Lesson wrapper component for DescriptionBlock with interactive features
const Lesson = ({ children, onHighlight, codeEditorRef }) => {
    const [hoveredElement, setHoveredElement] = useState(null);

    // Handle highlighting code elements in the editor
    const handleHighlight = useCallback((target, action = 'highlight') => {
        if (onHighlight) {
            onHighlight(target, action);
        }
    }, [onHighlight]);

    // Handle HTML/CSS preview on hover
    const handleCodePreview = useCallback((code, language) => {
        if (language === 'html' || language === 'css') {
            setHoveredElement({ code, language });
        }
    }, []);

    const handleCodePreviewEnd = useCallback(() => {
        setHoveredElement(null);
    }, []);

    // Clone children and inject interactive props
    const enhancedChildren = React.Children.map(children, child => {
        if (React.isValidElement(child)) {
            // Pass down interactive props to all components
            return React.cloneElement(child, {
                onHighlight: handleHighlight,
                onCodePreview: handleCodePreview,
                onCodePreviewEnd: handleCodePreviewEnd,
                codeEditorRef,
                ...child.props
            });
        }
        return child;
    });

    return (
        <div className="lesson-container" data-lesson>
            {enhancedChildren}

            {/* Floating preview for HTML/CSS */}
            {hoveredElement && (
                <div className="code-preview-tooltip">
                    <div className="preview-header">
                        <span className="language-tag">{hoveredElement.language}</span>
                        <span>Preview</span>
                    </div>
                    <div className="preview-content">
                        {hoveredElement.language === 'html' ? (
                            <div
                                className="html-preview"
                                dangerouslySetInnerHTML={{ __html: hoveredElement.code }}
                            />
                        ) : (
                            <div className="css-preview">
                                <style>{hoveredElement.code}</style>
                                <div className="sample-element">Sample Element</div>
                            </div>
                        )}
                    </div>
                </div>
            )}
        </div>
    );
};

Lesson.displayName = 'Lesson';

export default Lesson;