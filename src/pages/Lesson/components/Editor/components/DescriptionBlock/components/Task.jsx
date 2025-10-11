import React, { useState, useEffect } from 'react';

// Task component - defines learning tasks with validation and customization
const Task = ({
    children,
    objective,
    requirements = [],
    hints = [],
    className = '',
    currentCode = '',
    onCustomizationChange
}) => {
    const [validationResult, setValidationResult] = useState({});
    const [customizationOptions, setCustomizationOptions] = useState({
        themeColor: '#7f00ff',
        fontFamily: 'Arial',
        layout: 'standard'
    });

    // Validate HTML structure
    const validateHTML = (code) => {
        const validations = {};

        // Basic HTML structure validation
        const hasDoctype = /<!DOCTYPE\s+html>/i.test(code);
        const hasHtmlTag = /<html[^>]*>/i.test(code);
        const hasHeadTag = /<head[^>]*>[\s\S]*<\/head>/i.test(code);
        const hasBodyTag = /<body[^>]*>[\s\S]*<\/body>/i.test(code);

        validations['html-structure'] = hasDoctype && hasHtmlTag && hasHeadTag && hasBodyTag;

        // Check for semantic tags
        const hasSemanticTags = /<(header|main|section|article|aside|footer|nav)[^>]*>/i.test(code);
        validations['semantic-html'] = hasSemanticTags;

        return validations;
    };

    // Validate CSS
    const validateCSS = (code) => {
        const validations = {};

        // Basic CSS validation
        const hasSelectors = /[.#]?[a-zA-Z][a-zA-Z0-9-_]*\s*{/.test(code);
        const hasProperties = /[a-zA-Z-]+\s*:\s*[^;]+;/.test(code);

        validations['css-styling'] = hasSelectors && hasProperties;

        // Check for responsive design
        const hasMediaQueries = /@media\s*\([^)]+\)/.test(code);
        validations['responsive'] = hasMediaQueries;

        // Check for flexbox or grid
        const hasModernLayout = /(display\s*:\s*(flex|grid))|(grid-template)|(flex-direction)/i.test(code);
        validations['modern-layout'] = hasModernLayout;

        return validations;
    };

    // Validate JavaScript
    const validateJS = (code) => {
        const validations = {};

        try {
            // Basic syntax check
            if (code.trim()) {
                new Function(code);
                validations['js-syntax'] = true;
            }
        } catch {
            validations['js-syntax'] = false;
        }

        return validations;
    };

    // Run validation when code changes
    useEffect(() => {
        if (currentCode) {
            const htmlValidation = validateHTML(currentCode);
            const cssValidation = validateCSS(currentCode);
            const jsValidation = validateJS(currentCode);

            setValidationResult({
                ...htmlValidation,
                ...cssValidation,
                ...jsValidation
            });
        }
    }, [currentCode]);

    // Get completion percentage
    const getCompletionPercentage = () => {
        const validationKeys = Object.keys(validationResult);
        if (validationKeys.length === 0) return 0;

        const completedValidations = validationKeys.filter(key =>
            validationResult[key] === true
        ).length;

        return Math.round((completedValidations / validationKeys.length) * 100);
    };

    // Handle customization changes
    const handleCustomizationChange = (option, value) => {
        const newOptions = {
            ...customizationOptions,
            [option]: value
        };
        setCustomizationOptions(newOptions);

        // Notify parent component
        if (onCustomizationChange) {
            onCustomizationChange(newOptions);
        }
    };

    return (
        <div className={`task-container ${className}`} data-task>
            <div className="task-header">
                <h2>🎯 Your Task</h2>
                {Object.keys(validationResult).length > 0 && (
                    <div className="progress-indicator">
                        <div className="progress-bar">
                            <div
                                className="progress-fill"
                                style={{ width: `${getCompletionPercentage()}%` }}
                            ></div>
                        </div>
                        <span className="progress-text">{getCompletionPercentage()}% Complete</span>
                    </div>
                )}
            </div>

            {objective && (
                <div className="task-objective">
                    <h3>🎯 Objective</h3>
                    <p>{objective}</p>
                </div>
            )}

            {requirements.length > 0 && (
                <div className="task-requirements">
                    <h3>📋 Requirements</h3>
                    <div className="requirement-list">
                        {requirements.map((req, index) => (
                            <div key={index} className="requirement-item">
                                <span className="requirement-status">⭕</span>
                                <span>{req}</span>
                            </div>
                        ))}
                    </div>
                </div>
            )}

            {/* Live Validation Results */}
            {Object.keys(validationResult).length > 0 && (
                <div className="task-validation">
                    <h3>✅ Live Validation</h3>
                    <div className="requirement-list">
                        {Object.entries(validationResult).map(([key, passed]) => (
                            <div key={key} className="requirement-item">
                                <span className="requirement-status">
                                    {passed ? '✅' : '❌'}
                                </span>
                                <span className="requirement-label">
                                    {key.replace(/-/g, ' ').replace(/\b\w/g, l => l.toUpperCase())}
                                </span>
                            </div>
                        ))}
                    </div>
                </div>
            )}

            {/* Customization Panel */}
            <div className="customization-panel">
                <h3>🎨 Customization Options</h3>
                <div className="customization-options">
                    <div className="option-group">
                        <label>Theme Color:</label>
                        <input
                            type="color"
                            value={customizationOptions.themeColor}
                            onChange={(e) => handleCustomizationChange('themeColor', e.target.value)}
                        />
                    </div>
                    <div className="option-group">
                        <label>Font Family:</label>
                        <select
                            value={customizationOptions.fontFamily}
                            onChange={(e) => handleCustomizationChange('fontFamily', e.target.value)}
                        >
                            <option value="Arial">Arial</option>
                            <option value="Georgia">Georgia</option>
                            <option value="Times New Roman">Times New Roman</option>
                            <option value="Courier New">Courier New</option>
                            <option value="Helvetica">Helvetica</option>
                        </select>
                    </div>
                    <div className="option-group">
                        <label>Layout Style:</label>
                        <select
                            value={customizationOptions.layout}
                            onChange={(e) => handleCustomizationChange('layout', e.target.value)}
                        >
                            <option value="standard">Standard</option>
                            <option value="centered">Centered</option>
                            <option value="full-width">Full Width</option>
                            <option value="sidebar">Sidebar</option>
                        </select>
                    </div>
                </div>
            </div>

            {hints.length > 0 && (
                <div className="task-hints">
                    <h3>� Helpful Hints</h3>
                    {hints.map((hint, index) => (
                        <div key={index} className="hint-item">
                            {hint}
                        </div>
                    ))}
                    <div className="hint-item">
                        <strong>HTML:</strong> Make sure to include proper semantic tags like &lt;header&gt;, &lt;main&gt;, &lt;section&gt;
                    </div>
                    <div className="hint-item">
                        <strong>CSS:</strong> Use flexbox or grid for layout, and don't forget responsive breakpoints
                    </div>
                </div>
            )}

            <div className="task-content">
                {children}
            </div>
        </div>
    );
};

Task.displayName = 'Task';

export default Task;