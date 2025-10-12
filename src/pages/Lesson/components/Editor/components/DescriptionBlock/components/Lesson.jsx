import React, { useCallback } from 'react';

// Lesson wrapper component for DescriptionBlock with interactive features
const Lesson = ({ children, onHighlight, codeEditorRef, onCodeChange }) => {
    // Handle highlighting code elements in the editor
    const handleHighlight = useCallback((target, action = 'highlight') => {
        if (onHighlight) {
            onHighlight(target, action);
        }
    }, [onHighlight]);

    // Recursively clone children and inject interactive props
    const injectPropsRecursively = (children) => {
        return React.Children.map(children, child => {
            if (React.isValidElement(child)) {
                // Check if this is an InteractiveCodeBlock or similar component that needs props
                const isInteractiveCodeBlock = child.type?.name === 'InteractiveCodeBlock' ||
                    child.type?.displayName === 'InteractiveCodeBlock';
                const needsProps = isInteractiveCodeBlock || typeof child.type === 'function';

                let clonedChild = child;

                // If it needs props, inject them
                if (needsProps) {
                    if (isInteractiveCodeBlock) {
                        console.log('Found InteractiveCodeBlock, injecting onCodeChange prop');
                    }
                    clonedChild = React.cloneElement(child, {
                        onHighlight: handleHighlight,
                        onCodeChange,
                        codeEditorRef,
                        ...child.props
                    });
                }

                // If the child has children, recursively process them too
                if (child.props?.children) {
                    clonedChild = React.cloneElement(clonedChild, {
                        ...clonedChild.props,
                        children: injectPropsRecursively(child.props.children)
                    });
                }

                return clonedChild;
            }
            return child;
        });
    };

    const enhancedChildren = injectPropsRecursively(children);

    return (
        <div className="lesson-container" data-lesson>
            {enhancedChildren}
        </div>
    );
};

Lesson.displayName = 'Lesson';

export default Lesson;