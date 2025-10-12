# Component-Based Lesson System Documentation

## Overview

The lesson system now supports declarative, component-based content creation. Instead of passing props, you can compose lessons using child components that provide better flexibility and readability.

## Available Components

### CodeBlock Components

#### `<StartCode>`
Defines the initial code that loads in the editor.
```jsx
<StartCode>{`<!DOCTYPE html>
<html>
<head><title>My Page</title></head>
<body>
    <h1>Hello World</h1>
</body>
</html>`}</StartCode>
```

#### `<Highlightable name="identifier">`
Marks code regions that can be highlighted from the description panel.
```jsx
<Highlightable name="heading">
    <h1>My Heading</h1>
</Highlightable>
```

#### `<ReadOnly>` and `<Editable>` (Coming Soon)
Will mark code regions as read-only or editable.

### DescriptionBlock Components

#### `<Lesson>`
Wrapper for lesson content - goes in the "Lesson" tab.
```jsx
<Lesson>
    <Section title="Introduction">
        <p>Content here...</p>
    </Section>
</Lesson>
```

#### `<Section title="Title">`
Organizes content into logical sections with optional titles.
```jsx
<Section title="HTML Basics">
    <p>HTML is the foundation...</p>
</Section>
```

#### `<CodeSnippet language="html" executable={false}>`
Interactive code blocks that can be executed (for JavaScript).
```jsx
<CodeSnippet language="html">{`<h1>Example</h1>`}</CodeSnippet>
<CodeSnippet language="javascript" executable={true}>
{`console.log("Hello World!");`}
</CodeSnippet>
```

#### `<Highlight target="identifier">`
Text that highlights corresponding `<Highlightable>` regions in the code editor on hover.
```jsx
<p>HTML uses <Highlight target="tags">tags</Highlight> to structure content.</p>
```

**Available targets:**
- `"tags"` - Highlights HTML tags
- `"attributes"` - Highlights HTML attributes  
- `"head"` - Highlights head section
- `"body"` - Highlights body section
- Custom names matching `<Highlightable name="custom">`

#### `<Tip type="info|pro|warning" icon="💡">`
Displays helpful tips with different styling.
```jsx
<Tip type="pro" icon="💡">
    Always include alt attributes for accessibility!
</Tip>
```

**Types:**
- `info` (default) - Blue info tip
- `pro` - Purple pro tip  
- `warning` - Orange warning tip

#### `<Task>`
Defines learning tasks with objectives, requirements, and hints.
```jsx
<Task
    objective="Create a simple HTML page"
    requirements={[
        "Include DOCTYPE declaration",
        "Use semantic elements",
        "Add proper attributes"
    ]}
    hints={[
        "Start with HTML5 boilerplate",
        "Use descriptive alt text"
    ]}
>
    <p>Additional task description...</p>
</Task>
```

#### `<Quiz>`
Creates a quiz section with redirect to exercise page.
```jsx
<Quiz moduleId="html" lessonId="1" questions={5} duration={3} passPercentage={80}>
    <ul>
        <li>HTML document structure</li>
        <li>Common HTML elements</li>
        <li>HTML attributes</li>
    </ul>
</Quiz>
```

## Complete Example

```jsx
import React, { useState } from "react";
import Editor from "../../components/Editor/Editor";
import { 
    CodeBlock, DescriptionBlock, PreviewBlock,
    StartCode, Highlightable, Lesson, Section, 
    CodeSnippet, Highlight, Tip, Task, Quiz
} from "../../components/Editor/index.js";

const MyLesson = () => {
    const [code, setCode] = useState('');

    return (
        <Editor>
            <CodeBlock
                language="html"
                onCodeChange={setCode}
                onSubmit={handleSubmit}
            >
                <StartCode>{`<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>My Page</title>
</head>
<body>
    <Highlightable name="heading">
        <h1>Welcome!</h1>
    </Highlightable>
    <Highlightable name="paragraph">
        <p>Hello world!</p>
    </Highlightable>
</body>
</html>`}</StartCode>
            </CodeBlock>

            <DescriptionBlock moduleId="html" lessonId="1">
                <Lesson>
                    <Section title="HTML Basics">
                        <p>
                            HTML uses <Highlight target="tags">tags</Highlight> to 
                            structure content. Try hovering over 
                            <Highlight target="heading">headings</Highlight> and 
                            <Highlight target="paragraph">paragraphs</Highlight>!
                        </p>
                        
                        <CodeSnippet language="html">{`<h1>This is a heading</h1>
<p>This is a paragraph</p>`}</CodeSnippet>
                        
                        <Tip type="pro" icon="💡">
                            Use semantic HTML elements for better accessibility!
                        </Tip>
                    </Section>
                </Lesson>

                <Task
                    objective="Create your first HTML page"
                    requirements={[
                        "Include proper DOCTYPE",
                        "Add a heading and paragraph",
                        "Use semantic elements"
                    ]}
                    hints={[
                        "Start with the HTML5 boilerplate",
                        "Remember to close all tags"
                    ]}
                />

                <Quiz moduleId="html" lessonId="1">
                    <ul>
                        <li>HTML structure</li>
                        <li>Common elements</li>
                        <li>Best practices</li>
                    </ul>
                </Quiz>
            </DescriptionBlock>

            <PreviewBlock
                code={code}
                language="html"
                autoRefresh={true}
            />
        </Editor>
    );
};
```

## Features

### Interactive Highlighting
- Hover over `<Highlight target="name">` text in descriptions
- Corresponding `<Highlightable name="name">` regions in code editor get highlighted
- Supports predefined targets (tags, attributes, head, body) and custom names

### Executable Code Snippets  
- JavaScript code snippets can be executed with `executable={true}`
- Safe execution environment with console output capture
- Error handling for invalid code

### Modular Content Organization
- Content is organized into tabs: Lesson, Task, Quiz
- Each tab renders appropriate child components
- Flexible composition allows mixing and matching components

### Responsive Design
- All components are mobile-friendly
- Adaptive layouts for different screen sizes
- Touch-friendly interactive elements

This component-based approach makes lessons much more maintainable and allows for rich, interactive learning experiences!