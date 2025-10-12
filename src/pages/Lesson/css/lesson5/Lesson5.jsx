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
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Flexbox Navbar Task</title>
  <style>
    /* ===== Base Styles ===== */
    body {
      margin: 0;
      font-family: system-ui, sans-serif;
      background-color: #f8f9fa;
    }
    
    a {
      text-decoration: none;
      color: white;
      font-weight: 500;
    }
    
    main {
      padding: 2rem;
    }
    
    `}<InlineEditable>{`/* ===== Your Task: Use Flexbox for responsive navbar ===== */
    .navbar {
      background-color: #007BFF;
      color: white;
      padding: 1rem;
      /* TODO: Add display: flex; */
      /* TODO: Add justify-content: space-between; */
      /* TODO: Add align-items: center; */
      /* TODO: Add flex-wrap: wrap; */
    }
    
    .logo {
      font-size: 1.5rem;
      font-weight: bold;
    }
    
    .nav-links {
      /* TODO: Add display: flex; */
    }
    
    .nav-links a {
      margin: 0 0.5rem;
      padding: 0.5rem 1rem;
      border-radius: 4px;
      transition: background-color 0.3s;
    }
    
    .nav-links a:hover {
      background-color: rgba(255, 255, 255, 0.1);
    }
    
    /* TODO: Add responsive behavior */
    @media (max-width: 600px) {
      .navbar {
        /* flex-direction: column; */
      }
    }`}</InlineEditable>{`
  </style>
</head>
<body>
  <header class="navbar">
    <div class="logo">MySite</div>
    <nav class="nav-links">
      <a href="#">Home</a>
      <a href="#">Services</a>
      <a href="#">Blog</a>
      <a href="#">Contact</a>
    </nav>
  </header>

  <main>
    <section class="content">
      <h2>Welcome to MySite</h2>
      <p>Resize the window to see how the navbar responds with Flexbox!</p>
      <p>Complete the flexbox properties in the CSS above to make the navbar work properly.</p>
      
      <div class="demo-cards">
        <div class="card">Card 1</div>
        <div class="card">Card 2</div>
        <div class="card">Card 3</div>
      </div>
    </section>
  </main>
  
  <style>
    .content {
      max-width: 1200px;
      margin: 0 auto;
    }
    
    .demo-cards {
      display: flex;
      gap: 1rem;
      margin-top: 2rem;
    }
    
    .card {
      background: #28a745;
      color: white;
      padding: 2rem;
      border-radius: 8px;
      flex: 1;
      text-align: center;
    }
  </style>
</body>
</html>`}
            </CodeBlock>

            <DescriptionBlock category="css" lessonId="5">
                <Lesson>
                    <h1>🧱 CSS Lesson 5: Flexbox – Row/Column, Justify Content, Align Items, Wrap</h1>

                    <p>
                        Flexbox makes it easy to create clean, responsive layouts without messy floats or positioning.
                        It's <strong>perfect for navigation bars, cards, and centered content</strong> — basically any layout 
                        where you want elements to align nicely!
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


export default Lesson5;
