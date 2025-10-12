import React from "react";
import "./Lesson1.css";
import Editor from "../../components/Editor/editor";
import { CodeBlock, DescriptionBlock, PreviewBlock } from "../../components/Editor";
import { InlineEditable } from "../../components/Editor/components/CodeBlock/components";
import { CodeSnippet, Highlight, Tip, Section, Task, Lesson } from "../../components/Editor/components/DescriptionBlock/components";
import InteractiveCodeBlock from "../../components/Editor/components/DescriptionBlock/components/InteractiveCodeBlock";
import HighlightTrigger from "../../components/Editor/components/DescriptionBlock/components/HighlightTrigger";
import Exercise from "../../components/Editor/components/DescriptionBlock/components/Exercise";

const Lesson1 = () => {
    return (
        <Editor>
            <CodeBlock>
                {`<!DOCTYPE html>
<html>
  <head>
    <title>My Blog Post</title>
    <style>
      `}<InlineEditable>/* Add your CSS styles here */</InlineEditable>{`
    </style>
  </head>
  <body>
    <h1 class="title">The Journey of Learning CSS</h1>
    <p class="intro">CSS gives life to your HTML. Let's explore its power!</p>
    <p id="quote">"Good design is as little design as possible." – Dieter Rams</p>
  </body>
</html>`}
            </CodeBlock>

            <DescriptionBlock category="css" lessonId="1">
                <Lesson>
                    <h1>🧩 CSS Lesson 1: Introduction & Selectors</h1>

                    <p>
                        So far, your HTML pages might look a little plain — everything is structured, but not styled.
                        That's where <strong>CSS (Cascading Style Sheets)</strong> comes in. CSS lets you change how elements look: their color, size, spacing, borders, and even animations.
                    </p>

                    <Section title="🧬 What is CSS?">
                        <p>CSS describes how HTML elements are displayed on the screen. There are three main ways to add CSS to your page:</p>

                        <p><strong>1. Inline CSS</strong></p>
                        <p>You add styles directly inside an HTML element using the <code>style</code> attribute.</p>
                        <InteractiveCodeBlock language="html" hoverable={true}>
                            {`<h1 style="color: red;">This is a red heading</h1>
<p style="font-size: 20px;">This is larger text</p>`}
                        </InteractiveCodeBlock>
                        <p>✅ Good for testing.<br/>❌ Bad for large projects — mixes structure and style.</p>

                        <p><strong>2. Internal CSS</strong></p>
                        <p>You write your styles inside a <code>&lt;style&gt;</code> tag in the <code>&lt;head&gt;</code> section.</p>
                        <InteractiveCodeBlock language="html" hoverable={true}>
                            {`<!DOCTYPE html>
<html>
  <head>
    <style>
      h1 {
        color: blue;
      }
      p {
        font-size: 18px;
      }
    </style>
  </head>
  <body>
    <h1>Internal CSS Example</h1>
    <p>This paragraph uses internal styling.</p>
  </body>
</html>`}
                        </InteractiveCodeBlock>
                        <p>✅ Keeps CSS in one place.<br/>❌ Still limited — can't be reused across multiple pages.</p>

                        <p><strong>3. External CSS</strong></p>
                        <p>You store your CSS in a separate <code>.css</code> file and link it using <code>&lt;link&gt;</code>.</p>
                        <InteractiveCodeBlock language="html" hoverable={true}>
                            {`<!-- index.html -->
<link rel="stylesheet" href="styles.css">`}
                        </InteractiveCodeBlock>
                        <InteractiveCodeBlock language="css" hoverable={true}>
                            {`/* styles.css */
h1 {
  color: green;
}
p {
  font-size: 18px;
}`}
                        </InteractiveCodeBlock>
                        <p>✅ Best practice — clean, modular, and reusable.<br/>❌ Requires managing multiple files (but worth it!).</p>
                    </Section>

                    <Section title="🎯 Selectors — Targeting HTML Elements">
                        <p>Selectors tell CSS which HTML elements to style. Let's look at the main types 👇</p>

                        <p><strong>1. Element Selector</strong></p>
                        <p>Targets all elements of a certain type.</p>
                        <InteractiveCodeBlock language="css" hoverable={true}>
                            {`p {
  color: gray;
}`}
                        </InteractiveCodeBlock>
                        <p>🎨 This will turn all paragraphs gray.</p>

                        <p><strong>2. Class Selector</strong></p>
                        <p>Targets elements with a specific class attribute. Classes are written with a <code>.</code> prefix.</p>
                        <InteractiveCodeBlock language="html" hoverable={true}>
                            {`<p class="highlight">I am highlighted!</p>`}
                        </InteractiveCodeBlock>
                        <InteractiveCodeBlock language="css" hoverable={true}>
                            {`.highlight {
  background-color: yellow;
}`}
                        </InteractiveCodeBlock>
                        <p>🎯 Classes can be reused on multiple elements.</p>

                        <p><strong>3. ID Selector</strong></p>
                        <p>Targets an element with a specific id attribute. IDs are written with a <code>#</code> prefix.</p>
                        <InteractiveCodeBlock language="html" hoverable={true}>
                            {`<p id="unique">I have a unique ID.</p>`}
                        </InteractiveCodeBlock>
                        <InteractiveCodeBlock language="css" hoverable={true}>
                            {`#unique {
  color: orange;
}`}
                        </InteractiveCodeBlock>
                        <p>🎯 IDs are unique — only one element should have each ID.</p>
                    </Section>

                    <Section title="� Quick Comparison">
                        <table style={{ width: '100%', borderCollapse: 'collapse', marginTop: '10px' }}>
                            <thead>
                                <tr style={{ backgroundColor: '#f0f0f0' }}>
                                    <th style={{ padding: '8px', border: '1px solid #ddd' }}>Selector Type</th>
                                    <th style={{ padding: '8px', border: '1px solid #ddd' }}>Example</th>
                                    <th style={{ padding: '8px', border: '1px solid #ddd' }}>Use Case</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td style={{ padding: '8px', border: '1px solid #ddd' }}>Element</td>
                                    <td style={{ padding: '8px', border: '1px solid #ddd' }}><code>p {`{}`}</code></td>
                                    <td style={{ padding: '8px', border: '1px solid #ddd' }}>Style all elements of a type</td>
                                </tr>
                                <tr>
                                    <td style={{ padding: '8px', border: '1px solid #ddd' }}>Class</td>
                                    <td style={{ padding: '8px', border: '1px solid #ddd' }}><code>.highlight {`{}`}</code></td>
                                    <td style={{ padding: '8px', border: '1px solid #ddd' }}>Reusable styles</td>
                                </tr>
                                <tr>
                                    <td style={{ padding: '8px', border: '1px solid #ddd' }}>ID</td>
                                    <td style={{ padding: '8px', border: '1px solid #ddd' }}><code>#main {`{}`}</code></td>
                                    <td style={{ padding: '8px', border: '1px solid #ddd' }}>One-off unique styling</td>
                                </tr>
                            </tbody>
                        </table>
                    </Section>

                    <Tip type="info">
                        <strong>Pro Tip:</strong> Start with element selectors for general styles, use classes for reusable 
                        components, and reserve IDs for unique elements. This creates clean, maintainable CSS! 🎨
                    </Tip>
                </Lesson>

                <Task
                    objective="Style a blog post using CSS selectors"
                    validations={[
                        {
                            requirement: 'Style the .title class (make it blue and centered)',
                            validator: (doc) => {
                                const styles = doc.querySelector('style');
                                if (!styles) return false;
                                const cssText = styles.textContent;
                                return cssText.includes('.title') && 
                                       (cssText.includes('color: blue') || cssText.includes('color:blue')) &&
                                       (cssText.includes('text-align: center') || cssText.includes('text-align:center'));
                            }
                        },
                        {
                            requirement: 'Style the .intro class (gray text with larger font)',
                            validator: (doc) => {
                                const styles = doc.querySelector('style');
                                if (!styles) return false;
                                const cssText = styles.textContent;
                                return cssText.includes('.intro') && 
                                       (cssText.includes('color: gray') || cssText.includes('color:gray')) &&
                                       (cssText.includes('font-size:') || cssText.includes('font-size '));
                            }
                        },
                        {
                            requirement: 'Style the #quote ID (italic and purple)',
                            validator: (doc) => {
                                const styles = doc.querySelector('style');
                                if (!styles) return false;
                                const cssText = styles.textContent;
                                return cssText.includes('#quote') && 
                                       (cssText.includes('color: purple') || cssText.includes('color:purple')) &&
                                       (cssText.includes('font-style: italic') || cssText.includes('font-style:italic'));
                            }
                        },
                        {
                            requirement: 'Use all three selector types (element, class, and ID)',
                            validator: (doc) => {
                                const styles = doc.querySelector('style');
                                if (!styles) return false;
                                const cssText = styles.textContent;
                                return cssText.includes('.') && cssText.includes('#') && 
                                       (cssText.includes('h1') || cssText.includes('p') || cssText.includes('body'));
                            }
                        }
                    ]}
                    hints={[
                        'Use .title { } for the class selector with color: blue; and text-align: center;',
                        'Use .intro { } for the intro class with color: gray; and font-size: 20px;',
                        'Use #quote { } for the ID selector with color: purple; and font-style: italic;',
                        'Try adding margin or padding to space out elements: margin: 20px;',
                        'Remember: classes use dots (.), IDs use hashes (#), elements use just the tag name'
                    ]}
                >

                </Task>

                <Exercise
                    category="css"
                    lessonId="1"
                    title="🧠 CSS Introduction & Selectors Quiz"
                    description="Test your understanding of CSS basics, different ways to add styles, and selector types!"
                    buttonText="Start CSS Basics Quiz"
                    tipText="Make sure you've completed the blog styling task above before taking the quiz!"
                />
            </DescriptionBlock>

            <PreviewBlock />
        </Editor>
    );
};


export default Lesson1;
