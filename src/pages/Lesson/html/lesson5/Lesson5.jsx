import React from "react";
import "./Lesson5.css";
import Editor from "../../components/Editor/editor";
import { CodeBlock, DescriptionBlock, PreviewBlock } from "../../components/Editor";
import { InlineEditable } from "../../components/Editor/components/CodeBlock/components";
import { CodeSnippet, Highlight, Tip, Section, Task, Lesson } from "../../components/Editor/components/DescriptionBlock/components";
import InteractiveCodeBlock from "../../components/Editor/components/DescriptionBlock/components/InteractiveCodeBlock";
import HighlightTrigger from "../../components/Editor/components/DescriptionBlock/components/HighlightTrigger";
import Exercise from "../../components/Editor/components/DescriptionBlock/components/Exercise";

const Lesson5 = () => {
    return (
        <Editor>
            <CodeBlock>
                {`<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>`}<InlineEditable>Profile Card</InlineEditable>{`</title>
</head>
<body>
  <!-- Wrap this section in a <div> -->
  `}<InlineEditable>&lt;div&gt;</InlineEditable>{`
    <h2>About Me</h2>
    <p>Hello, I am learning HTML! My favorite hobby is `}<InlineEditable>&lt;span style="color: blue;"&gt;coding&lt;/span&gt;</InlineEditable>{`.</p>
  `}<InlineEditable>&lt;/div&gt;</InlineEditable>{`
  
  <!-- Practice more grouping and styling -->
  `}<InlineEditable>&lt;div&gt;</InlineEditable>{`
    <h2>My Skills</h2>
    <p>I'm getting good at `}<InlineEditable>&lt;span style="font-weight: bold;"&gt;HTML&lt;/span&gt;</InlineEditable>{` and I want to learn `}<InlineEditable>&lt;span style="color: green;"&gt;CSS&lt;/span&gt;</InlineEditable>{` next!</p>
  `}<InlineEditable>&lt;/div&gt;</InlineEditable>{`
</body>
</html>`}
            </CodeBlock>

            <DescriptionBlock category="html" lessonId="5">
                <Lesson>
                    <h1>HTML Lesson 5: &lt;div&gt; and &lt;span&gt; – Grouping & Inline Wrapping</h1>

                    <p>
                        When writing a webpage, sometimes you want to group content together or apply styles to just part of the text. That's where two of HTML's most versatile elements come in:
                    </p>
                    
                    <ul>
                        <li><code>&lt;div&gt;</code> → Block-level container (used to group larger sections of content).</li>
                        <li><code>&lt;span&gt;</code> → Inline container (used to style or wrap small pieces of text).</li>
                    </ul>
                    
                    <p>Think of <code>&lt;div&gt;</code> as a big box and <code>&lt;span&gt;</code> as a label on text.</p>

                    <Section title="📦 1. &lt;div&gt;: Block-Level Container">
                        <p>A <code>&lt;div&gt;</code> is like an invisible box.</p>
                        <ul>
                            <li>By default, it starts on a new line and stretches across the full width of its parent.</li>
                            <li>It doesn't add meaning by itself — it's purely structural.</li>
                        </ul>

                        <p><strong>Example:</strong></p>
                        <InteractiveCodeBlock language="html" hoverable={true}>
                            {`<div>
  <h2>About Me</h2>
  <p>Hello! My name is Mango 🥭. I love coding and eating noodles.</p>
</div>`}
                        </InteractiveCodeBlock>

                        <p>If you hover on this <code>&lt;div&gt;</code> in the editor, you'll see that it behaves like a big section wrapping around the heading and the paragraph.</p>
                    </Section>

                    <Section title="✨ 2. &lt;span&gt;: Inline Container">
                        <p>A <code>&lt;span&gt;</code> is like a highlighter pen ✨.</p>
                        <ul>
                            <li>It does not break text into a new line — it only wraps specific words or phrases.</li>
                            <li>Perfect for styling just a piece of text.</li>
                        </ul>

                        <p><strong>Example:</strong></p>
                        <InteractiveCodeBlock language="html" hoverable={true}>
                            {`<p>I love <span style="color: red;">spicy noodles</span> so much!</p>`}
                        </InteractiveCodeBlock>

                        <p>Here, only "spicy noodles" will be red. The rest of the sentence stays normal.</p>
                    </Section>

                    <Section title="🔑 3. When to Use Which">
                        <ul>
                            <li>Use <code>&lt;div&gt;</code> when you want to <strong>group larger chunks</strong>: sections, articles, or layout parts.</li>
                            <li>Use <code>&lt;span&gt;</code> when you want to <strong>style or target small inline content</strong>.</li>
                        </ul>

                        <Tip type="info">
                            <strong>🔑 Pro tip:</strong> While <code>&lt;div&gt;</code> and <code>&lt;span&gt;</code> are super common, remember that semantic tags (<code>&lt;section&gt;</code>, <code>&lt;article&gt;</code>, <code>&lt;header&gt;</code>, etc.) are better for accessibility. We'll get to those in a later lesson.
                        </Tip>
                    </Section>

                    <Section title="💡 Practical Examples">
                        <p><strong>Grouping a profile section:</strong></p>
                        <InteractiveCodeBlock language="html" hoverable={true}>
                            {`<div class="profile">
  <h2>John Doe</h2>
  <p>Software Developer</p>
  <p>I love <span style="color: blue;">JavaScript</span> and <span style="font-weight: bold;">React</span>!</p>
</div>`}
                        </InteractiveCodeBlock>

                        <p><strong>Styling parts of a sentence:</strong></p>
                        <InteractiveCodeBlock language="html" hoverable={true}>
                            {`<p>The price is <span style="color: green; font-size: 18px;">$29.99</span> today only!</p>`}
                        </InteractiveCodeBlock>

                        <p><strong>Creating a simple layout structure:</strong></p>
                        <InteractiveCodeBlock language="html" hoverable={true}>
                            {`<div class="header">
  <h1>My Website</h1>
</div>
<div class="content">
  <p>Welcome to my site!</p>
</div>
<div class="footer">
  <p>© 2024 My Website</p>
</div>`}
                        </InteractiveCodeBlock>
                    </Section>

                    <Tip type="info">
                        <strong>Interactive Features:</strong> Click on the highlighted elements in the text above
                        to see them highlighted in the code editor! Practice wrapping content with div and span
                        elements and add inline styles to see the effects.
                    </Tip>
                </Lesson>

                <Task
                    objective="Create a profile card using div and span elements"
                    validations={[
                        {
                            requirement: 'Wrap the "About Me" section content in a div',
                            validator: (doc) => {
                                const divs = doc.querySelectorAll('div');
                                const hasH2InDiv = Array.from(divs).some(div => div.querySelector('h2'));
                                return divs.length > 0 && hasH2InDiv;
                            }
                        },
                        {
                            requirement: 'Use span to highlight a word or phrase inline',
                            validator: (doc) => {
                                const spans = doc.querySelectorAll('span');
                                return spans.length > 0;
                            }
                        },
                        {
                            requirement: 'Add inline CSS styling to the span element',
                            validator: (doc) => {
                                const styledSpans = doc.querySelectorAll('span[style]');
                                return styledSpans.length > 0;
                            }
                        },
                        {
                            requirement: 'Bonus: Group multiple sections with divs',
                            validator: (doc) => {
                                const divs = doc.querySelectorAll('div');
                                return divs.length >= 2;
                            }
                        }
                    ]}
                    hints={[
                        'Wrap the h2 and p elements inside a <div> tag',
                        'Use <span> to wrap words inside a paragraph',
                        'Add style="color: blue;" or similar to your span',
                        'Try creating multiple sections each wrapped in their own div',
                        'Remember: div is for blocks, span is for inline text'
                    ]}
                >

                </Task>

                <Exercise
                    category="html"
                    lessonId="5"
                    title="🧠 HTML Div & Span Quiz"
                    description="Ready to test your understanding of HTML containers and inline styling? Take the interactive quiz to reinforce what you've learned!"
                    buttonText="Start Div & Span Quiz"
                    tipText="Make sure you've practiced with div and span elements above before taking the quiz!"
                />
            </DescriptionBlock>

            <PreviewBlock />
        </Editor>
    );
};


export default Lesson5;
