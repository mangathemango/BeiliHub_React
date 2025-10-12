import React, { useState, useRef, useCallback } from 'react';
import CodeBlock from "./components/CodeBlock/CodeBlock";
import DescriptionBlock from "./components/DescriptionBlock/DescriptionBlock";
import PreviewBlock from "./components/PreviewBlock/PreviewBlock";
import './Editor.css';

const Editor = ({ children }) => {
    const [layout, setLayout] = useState({
        leftWidth: 50,  // Left side (code + description)
        codeHeight: 60  // Code takes 60% of left side height
    });

    // State for managing code and preview
    const [currentCode, setCurrentCode] = useState('');
    const codeEditorRef = useRef(null);
    const taskRef = useRef(null);

    // Get initial code from CodeBlock children
    React.useEffect(() => {
        const codeBlockChild = React.Children.toArray(children).find(child =>
            child.type?.name === 'CodeBlock' || child.type?.displayName === 'CodeBlock'
        );
        if (codeBlockChild && codeBlockChild.props.children) {
            // Extract initial code from CodeBlock
            let initialCode = '';
            React.Children.forEach(codeBlockChild.props.children, (child) => {
                if (typeof child === 'string') {
                    initialCode += child;
                } else if (React.isValidElement(child) && child.props.children) {
                    initialCode += child.props.children;
                }
            });
            if (initialCode && !currentCode) {
                setCurrentCode(initialCode);
            }
        }
    }, [children, currentCode]);

    const containerRef = useRef(null);
    const [isResizing, setIsResizing] = useState(null);

    const handleMouseDown = useCallback((resizer) => {
        setIsResizing(resizer);
    }, []);

    const handleMouseMove = useCallback((e) => {
        if (!isResizing || !containerRef.current) return;

        const containerRect = containerRef.current.getBoundingClientRect();

        if (isResizing === 'vertical') {
            // Vertical resizer between left and right
            const mouseX = e.clientX - containerRect.left;
            const containerWidth = containerRect.width;
            const percentage = (mouseX / containerWidth) * 100;
            const newLeftWidth = Math.max(30, Math.min(70, percentage));

            setLayout(prev => ({
                ...prev,
                leftWidth: newLeftWidth
            }));
        } else if (isResizing === 'horizontal') {
            // Horizontal resizer between code and description
            const mouseY = e.clientY - containerRect.top;
            const containerHeight = containerRect.height;
            const percentage = (mouseY / containerHeight) * 100;
            const newCodeHeight = Math.max(30, Math.min(70, percentage));

            setLayout(prev => ({
                ...prev,
                codeHeight: newCodeHeight
            }));
        }
    }, [isResizing]);

    const handleMouseUp = useCallback(() => {
        setIsResizing(null);
    }, []);

    // Handle code changes from CodeBlock
    const handleCodeChange = useCallback((newCode) => {
        setCurrentCode(newCode);
        console.log("Setting new code");
        console.log(newCode);
    }, []);

    // Handle code submission from CodeBlock
    const handleCodeSubmit = useCallback(() => {
        // Find the Task component and trigger its validation
        if (taskRef.current && taskRef.current.handleSubmit) {
            taskRef.current.handleSubmit();
        }
    }, []);

    React.useEffect(() => {
        if (isResizing) {
            document.addEventListener('mousemove', handleMouseMove);
            document.addEventListener('mouseup', handleMouseUp);
            return () => {
                document.removeEventListener('mousemove', handleMouseMove);
                document.removeEventListener('mouseup', handleMouseUp);
            };
        }
    }, [isResizing, handleMouseMove, handleMouseUp]);

    return (
        <div className="editor-container" ref={containerRef}>
            {/* Left side container */}
            <div
                className="left-container"
                style={{ width: `${layout.leftWidth}%` }}
            >
                {/* Code editor on top */}
                <div
                    className="editor-panel code-panel"
                    style={{ height: `${layout.codeHeight}%` }}
                >
                    {React.Children.toArray(children).find(child =>
                        child.type?.name === 'CodeBlock' || child.type?.displayName === 'CodeBlock'
                    ) &&
                        React.cloneElement(
                            React.Children.toArray(children).find(child =>
                                child.type?.name === 'CodeBlock' || child.type?.displayName === 'CodeBlock'
                            ),
                            {
                                onCodeChange: handleCodeChange,
                                onSubmit: handleCodeSubmit,
                                ref: codeEditorRef
                            }
                        )
                    }
                </div>

                {/* Horizontal resizer between code and description */}
                <div
                    className="resizer horizontal-resizer"
                    onMouseDown={() => handleMouseDown('horizontal')}
                />

                {/* Description on bottom */}
                <div
                    className="editor-panel description-panel"
                    style={{ height: `${100 - layout.codeHeight}%` }}
                >
                    {React.Children.toArray(children).find(child =>
                        child.type?.name === 'DescriptionBlock' || child.type?.displayName === 'DescriptionBlock'
                    ) &&
                        React.cloneElement(
                            React.Children.toArray(children).find(child =>
                                child.type?.name === 'DescriptionBlock' || child.type?.displayName === 'DescriptionBlock'
                            ),
                            {
                                codeEditorRef,
                                currentCode,
                                onCodeChange: handleCodeChange,
                                taskRef
                            }
                        )
                    }
                </div>
            </div>

            {/* Vertical resizer between left and right */}
            <div
                className="resizer vertical-resizer"
                onMouseDown={() => handleMouseDown('vertical')}
            />

            {/* Preview on the entire right side */}
            <div
                className="editor-panel preview-panel"
                style={{ width: `${100 - layout.leftWidth}%` }}
            >
                {React.Children.toArray(children).find(child =>
                    child.type?.name === 'PreviewBlock' || child.type?.displayName === 'PreviewBlock'
                ) ?
                    React.cloneElement(
                        React.Children.toArray(children).find(child =>
                            child.type?.name === 'PreviewBlock' || child.type?.displayName === 'PreviewBlock'
                        ),
                        {
                            code: currentCode,
                            language: 'html',
                            autoRefresh: true
                        }
                    ) :
                    <PreviewBlock code={currentCode} language="html" autoRefresh={true} />
                }
            </div>
        </div>
    );
};

export { CodeBlock, DescriptionBlock, PreviewBlock };
export default Editor;
