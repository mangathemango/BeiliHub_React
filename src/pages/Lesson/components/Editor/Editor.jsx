import React, { useState, useRef, useCallback } from 'react';
import CodeBlock from "./components/CodeBlock/CodeBlock";
import DescriptionBlock from "./components/DescriptionBlock/DescriptionBlock";
import PreviewBlock from "./components/PreviewBlock/PreviewBlock";
import './Editor.css';

const Editor = ({ children }) => {
    const [layout, setLayout] = useState({
        code: { width: 33.33 },
        description: { width: 33.33 },
        preview: { width: 33.33 }
    });

    const containerRef = useRef(null);
    const [isResizing, setIsResizing] = useState(null);

    const handleMouseDown = useCallback((resizer) => {
        setIsResizing(resizer);
    }, []);

    const handleMouseMove = useCallback((e) => {
        if (!isResizing || !containerRef.current) return;

        const containerRect = containerRef.current.getBoundingClientRect();
        const mouseX = e.clientX - containerRect.left;
        const containerWidth = containerRect.width;
        const percentage = (mouseX / containerWidth) * 100;

        if (isResizing === 'code-description') {
            const newCodeWidth = Math.max(20, Math.min(60, percentage));
            const remainingWidth = 100 - newCodeWidth;
            const previewRatio = layout.preview.width / (layout.description.width + layout.preview.width);

            setLayout(prev => ({
                ...prev,
                code: { width: newCodeWidth },
                description: { width: remainingWidth * (1 - previewRatio) },
                preview: { width: remainingWidth * previewRatio }
            }));
        } else if (isResizing === 'description-preview') {
            const codeWidth = layout.code.width;
            const availableWidth = 100 - codeWidth;
            const descriptionWidth = Math.max(15, Math.min(availableWidth - 15, percentage - codeWidth));
            const previewWidth = availableWidth - descriptionWidth;

            setLayout(prev => ({
                ...prev,
                description: { width: descriptionWidth },
                preview: { width: previewWidth }
            }));
        }
    }, [isResizing, layout]);

    const handleMouseUp = useCallback(() => {
        setIsResizing(null);
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
            <div
                className="editor-panel code-panel"
                style={{ width: `${layout.code.width}%` }}
            >
                {React.Children.toArray(children).find(child => child.type?.name === 'CodeBlock')}
            </div>

            <div
                className="resizer vertical-resizer"
                onMouseDown={() => handleMouseDown('code-description')}
            />

            <div
                className="editor-panel description-panel"
                style={{ width: `${layout.description.width}%` }}
            >
                {React.Children.toArray(children).find(child => child.type?.name === 'DescriptionBlock')}
            </div>

            <div
                className="resizer vertical-resizer"
                onMouseDown={() => handleMouseDown('description-preview')}
            />

            <div
                className="editor-panel preview-panel"
                style={{ width: `${layout.preview.width}%` }}
            >
                {React.Children.toArray(children).find(child => child.type?.name === 'PreviewBlock')}
            </div>
        </div>
    );
};

export { CodeBlock, DescriptionBlock, PreviewBlock };
export default Editor;
