import React, { useState } from "react";
import "./Lesson1.css";
import Editor, { CodeBlock, DescriptionBlock, PreviewBlock } from "../../components/Editor/Editor";

const Lesson1 = () => {
    const [code, setCode] = useState(
`<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>My First HTML Page</title>
</head>
<body>
    <!-- Write your code here -->
    <h1>Welcome to HTML!</h1>
    <p>This is my first HTML page.</p>
</body>
</html>`
);

    const handleCodeChange = (newCode) => {
        setCode(newCode);
    };

    const handleCodeSubmit = async (submittedCode) => {
        // Simple validation logic
        const hasDoctype = submittedCode.includes('<!DOCTYPE html>');
        const hasTitle = submittedCode.includes('<title>');
        const hasH1 = submittedCode.includes('<h1>');
        const hasParagraph = submittedCode.includes('<p>');

        const results = {
            hasDoctype,
            hasTitle,
            hasH1,
            hasParagraph,
            score: [hasDoctype, hasTitle, hasH1, hasParagraph].filter(Boolean).length
        };

        console.log('Validation Results:', results);

        // You could show a modal or update UI with results
        alert(`Code validation complete! Score: ${results.score}/4`);

        return results;
    };

    const handleHighlightCode = (target) => {
        // This would highlight specific parts of the code editor
        console.log('Highlighting:', target);
    };

    return (
        <Editor>
            <CodeBlock
                initialCode={code}
                language="html"
                onCodeChange={handleCodeChange}
                onSubmit={handleCodeSubmit}
            />
            <DescriptionBlock
                moduleId="html"
                lessonId="1"
                onHighlightCode={handleHighlightCode}
            />
            <PreviewBlock
                code={code}
                language="html"
                autoRefresh={true}
                refreshInterval={1000}
            />
        </Editor>
    );
};

export default Lesson1;
