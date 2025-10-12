import React from "react";
import "./Lesson4.css";
import Editor from "../../components/Editor/editor";
import { CodeBlock, DescriptionBlock, PreviewBlock } from "../../components/Editor";
import { InlineEditable } from "../../components/Editor/components/CodeBlock/components";
import { CodeSnippet, Highlight, Tip, Section, Task, Lesson } from "../../components/Editor/components/DescriptionBlock/components";
import InteractiveCodeBlock from "../../components/Editor/components/DescriptionBlock/components/InteractiveCodeBlock";
import HighlightTrigger from "../../components/Editor/components/DescriptionBlock/components/HighlightTrigger";
import Exercise from "../../components/Editor/components/DescriptionBlock/components/Exercise";

const Lesson4 = () => {
    return (
        <Editor>
            <CodeBlock>
                {`<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Sticky Navbar Task</title>
  <style>
    /* ===== Base Styles ===== */
    body {
      margin: 0;
      font-family: system-ui, sans-serif;
      line-height: 1.6;
      background-color: #f8f9fa;
    }
    
    main {
      padding: 2rem;
    }
    
    `}<InlineEditable>{`/* ===== Your Task: Make the navbar sticky ===== */
    .navbar {
      background-color: #007BFF;
      color: white;
      padding: 1rem;
      text-align: center;
      font-size: 1.5rem;
      /* TODO: Add position: sticky; and top: 0; */
    }
    
    /* TODO: Add hover effect */
    .navbar:hover {
      /* Example: background-color: #0056b3; */
    }`}</InlineEditable>{`
  </style>
</head>
<body>
  <header class="navbar">
    <h1>My Website</h1>
  </header>

  <main>
    <section class="hero">
      <h2>Welcome!</h2>
      <p>Scroll down to see the sticky navbar in action.</p>
    </section>

    <section class="content">
      <h3>About</h3>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.</p>
      <p>Keep adding more paragraphs here so the page scrolls. The navbar should stay visible as you scroll.</p>
      <p>Try adjusting the navbar's position and style in the CSS section above.</p>
      <p>Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Donec velit neque, auctor sit amet aliquam vel, ullamcorper sit amet ligula.</p>
      <p>Sed porttitor lectus nibh. Vivamus magna justo, lacinia eget consectetur sed, convallis at tellus.</p>
      <p>Pellentesque in ipsum id orci porta dapibus. Vestibulum ac diam sit amet quam vehicula elementum sed sit amet dui.</p>
    </section>
  </main>
</body>
</html>`}
            </CodeBlock>

            <DescriptionBlock category="css" lessonId="4">
                <Lesson>
                    <h1>📍 CSS Lesson 4: Positioning – relative, absolute, fixed, sticky</h1>

                    <p>
                        The <code>position</code> property lets you control where elements appear on a page, often independent of their normal flow.
                        <strong>Understanding positioning</strong> is essential for creating complex layouts and interactive elements.
                    </p>

                    <Section title="� Position Property Values">
                        <p>The most common position values are:</p>

                        <table style={{ width: '100%', borderCollapse: 'collapse', marginTop: '10px' }}>
                            <thead>
                                <tr style={{ backgroundColor: '#f0f0f0' }}>
                                    <th style={{ padding: '8px', border: '1px solid #ddd' }}>Position</th>
                                    <th style={{ padding: '8px', border: '1px solid #ddd' }}>Description</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td style={{ padding: '8px', border: '1px solid #ddd' }}><strong>static</strong></td>
                                    <td style={{ padding: '8px', border: '1px solid #ddd' }}>Default; element stays in normal document flow.</td>
                                </tr>
                                <tr>
                                    <td style={{ padding: '8px', border: '1px solid #ddd' }}><strong>relative</strong></td>
                                    <td style={{ padding: '8px', border: '1px solid #ddd' }}>Moves an element relative to its normal position.</td>
                                </tr>
                                <tr>
                                    <td style={{ padding: '8px', border: '1px solid #ddd' }}><strong>absolute</strong></td>
                                    <td style={{ padding: '8px', border: '1px solid #ddd' }}>Positions element relative to the nearest positioned ancestor.</td>
                                </tr>
                                <tr>
                                    <td style={{ padding: '8px', border: '1px solid #ddd' }}><strong>fixed</strong></td>
                                    <td style={{ padding: '8px', border: '1px solid #ddd' }}>Stays in a fixed spot on the screen, even when scrolling.</td>
                                </tr>
                                <tr>
                                    <td style={{ padding: '8px', border: '1px solid #ddd' }}><strong>sticky</strong></td>
                                    <td style={{ padding: '8px', border: '1px solid #ddd' }}>Behaves like relative until a scroll threshold, then "sticks" in place.</td>
                                </tr>
                            </tbody>
                        </table>
                    </Section>

                    <Section title="� Display Modes">
                        <p><code>display</code> controls how elements behave in the layout.</p>

                        <table style={{ width: '100%', borderCollapse: 'collapse', marginTop: '10px' }}>
                            <thead>
                                <tr style={{ backgroundColor: '#f0f0f0' }}>
                                    <th style={{ padding: '8px', border: '1px solid #ddd' }}>Value</th>
                                    <th style={{ padding: '8px', border: '1px solid #ddd' }}>Description</th>
                                    <th style={{ padding: '8px', border: '1px solid #ddd' }}>Example</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td style={{ padding: '8px', border: '1px solid #ddd' }}>block</td>
                                    <td style={{ padding: '8px', border: '1px solid #ddd' }}>Takes full width, starts on a new line</td>
                                    <td style={{ padding: '8px', border: '1px solid #ddd' }}>&lt;div&gt;, &lt;p&gt;, &lt;h1&gt;</td>
                                </tr>
                                <tr>
                                    <td style={{ padding: '8px', border: '1px solid #ddd' }}>inline</td>
                                    <td style={{ padding: '8px', border: '1px solid #ddd' }}>Sits in line with text</td>
                                    <td style={{ padding: '8px', border: '1px solid #ddd' }}>&lt;span&gt;, &lt;a&gt;</td>
                                </tr>
                                <tr>
                                    <td style={{ padding: '8px', border: '1px solid #ddd' }}>inline-block</td>
                                    <td style={{ padding: '8px', border: '1px solid #ddd' }}>Acts inline but keeps box properties</td>
                                    <td style={{ padding: '8px', border: '1px solid #ddd' }}>buttons, badges</td>
                                </tr>
                                <tr>
                                    <td style={{ padding: '8px', border: '1px solid #ddd' }}>none</td>
                                    <td style={{ padding: '8px', border: '1px solid #ddd' }}>Hides the element completely</td>
                                    <td style={{ padding: '8px', border: '1px solid #ddd' }}>modals, dropdowns</td>
                                </tr>
                            </tbody>
                        </table>

                        <p><strong>Example:</strong></p>
                        <InteractiveCodeBlock language="css" hoverable={true}>
                            {`span {
  display: inline;
}

div {
  display: block;
}

button {
  display: inline-block;
}`}
                        </InteractiveCodeBlock>
                        
                        <p>✅ <strong>Inline-block</strong> is a sweet spot — you can set width, height, and margin without breaking flow.</p>
                    </Section>

                    <Section title="� Try It Yourself">
                        <p>Practice positioning with this interactive sandbox:</p>
                        
                        <InteractiveCodeBlock language="html" hoverable={true}>
                            {`<div class="container">
  <div class="relative-box">Relative</div>
  <div class="absolute-box">Absolute</div>
  <div class="fixed-box">Fixed</div>
</div>`}
                        </InteractiveCodeBlock>

                        <InteractiveCodeBlock language="css" hoverable={true}>
                            {`.container {
  position: relative;
  height: 200px;
  background: #ecf0f1;
  border: 2px dashed #95a5a6;
}

.relative-box {
  position: relative;
  top: 20px;
  left: 20px;
  background: #3498db;
  color: white;
  padding: 10px;
}

.absolute-box {
  position: absolute;
  top: 10px;
  right: 10px;
  background: #e74c3c;
  color: white;
  padding: 10px;
}

.fixed-box {
  position: fixed;
  bottom: 20px;
  right: 20px;
  background: #f39c12;
  color: white;
  padding: 10px;
}`}
                        </InteractiveCodeBlock>

                        <p><strong>🧠 Try:</strong></p>
                        <ul>
                            <li>Change positioning values (top, right, bottom, left)</li>
                            <li>Switch position types to see the difference</li>
                            <li>Add z-index to control stacking</li>
                        </ul>
                    </Section>

                    <Tip type="info">
                        <strong>Positioning Tip:</strong> Remember that absolute and fixed elements are removed from the 
                        normal document flow, while relative elements maintain their space. Use z-index to control 
                        which elements appear on top! 🎯
                    </Tip>
                </Lesson>

                <Task
                    objective="Create a sticky navigation bar that stays at the top when scrolling"
                    validations={[
                        {
                            requirement: 'Create a .navbar class with sticky positioning',
                            validator: (doc) => {
                                const styles = doc.querySelector('style');
                                if (!styles) return false;
                                const cssText = styles.textContent;
                                return cssText.includes('.navbar') && 
                                       cssText.includes('position: sticky');
                            }
                        },
                        {
                            requirement: 'Set top: 0 to stick to the top of the viewport',
                            validator: (doc) => {
                                const styles = doc.querySelector('style');
                                if (!styles) return false;
                                const cssText = styles.textContent;
                                return cssText.includes('.navbar') && 
                                       (cssText.includes('top: 0') || cssText.includes('top:0'));
                            }
                        },
                        {
                            requirement: 'Add z-index to keep navbar above other content',
                            validator: (doc) => {
                                const styles = doc.querySelector('style');
                                if (!styles) return false;
                                const cssText = styles.textContent;
                                return cssText.includes('.navbar') && cssText.includes('z-index');
                            }
                        },
                        {
                            requirement: 'Style the navbar with background color and padding',
                            validator: (doc) => {
                                const styles = doc.querySelector('style');
                                if (!styles) return false;
                                const cssText = styles.textContent;
                                return cssText.includes('.navbar') && 
                                       (cssText.includes('background-color:') || cssText.includes('background:')) &&
                                       cssText.includes('padding');
                            }
                        },
                        {
                            requirement: 'Add content with enough height to test scrolling behavior',
                            validator: (doc) => {
                                const content = doc.body;
                                if (!content) return false;
                                // Check if there's enough content to make scrolling necessary
                                const allElements = content.querySelectorAll('*');
                                return allElements.length >= 3; // At least navbar + some content
                            }
                        }
                    ]}
                    hints={[
                        'Create .navbar class with position: sticky; and top: 0;',
                        'Add z-index: 100; to keep navbar above other content',
                        'Style with background: #2c3e50; color: white; padding: 15px;',
                        'Add enough content below (like multiple <p> elements) to test scrolling',
                        'Make sure to include nav items like <a> links in the navbar'
                    ]}
                >

                </Task>

                <Exercise
                    category="css"
                    lessonId="4"
                    title="🎯 CSS Positioning Quiz"
                    description="Test your understanding of position properties and element placement!"
                    buttonText="Start Positioning Quiz"
                    tipText="Make sure you've completed the sticky navbar task above before taking the quiz!"
                />
            </DescriptionBlock>

            <PreviewBlock />
        </Editor>
    );
};


export default Lesson4;
