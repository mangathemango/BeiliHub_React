// Export all CodeBlock child components
export { ReadOnly, Editable, Highlightable, Template } from './components/CodeBlock/components/index.js';

// Export all DescriptionBlock child components  
export { CodeSnippet, Highlight, Tip, Section, Task, Quiz, Lesson} from './components/DescriptionBlock/components/index.js';

// Export main components
export { default as CodeBlock } from './components/CodeBlock/CodeBlock.jsx';
export { default as DescriptionBlock } from './components/DescriptionBlock/DescriptionBlock.jsx';
export { default as PreviewBlock } from './components/PreviewBlock/PreviewBlock.jsx';
export { default as Editor } from './editor.jsx';