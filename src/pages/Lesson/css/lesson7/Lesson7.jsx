import React from "react";
import "./Lesson7.css";
import Editor from "../../components/Editor/editor";
import { CodeBlock, DescriptionBlock, PreviewBlock } from "../../components/Editor";
import { InlineEditable } from "../../components/Editor/components/CodeBlock/components";
import { CodeSnippet, Highlight, Tip, Section, Task, Lesson } from "../../components/Editor/components/DescriptionBlock/components";
import InteractiveCodeBlock from "../../components/Editor/components/DescriptionBlock/components/InteractiveCodeBlock";
import HighlightTrigger from "../../components/Editor/components/DescriptionBlock/components/HighlightTrigger";
import Exercise from "../../components/Editor/components/DescriptionBlock/components/Exercise";

const Lesson7 = () => {
    return (
        <Editor>
            <CodeBlock>
                {`<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Responsive Homepage</title>
  <style>
    /* ===== Base Styles ===== */
    body {
      font-family: system-ui, sans-serif;
      margin: 0;
      padding: 0;
      background-color: #f8f9fa;
    }
    
    `}<InlineEditable>{`/* ===== Mobile-First Responsive Design Task ===== */
    
    /* Mobile-first default styles */
    .site-header {
      background-color: #007BFF;
      color: white;
      padding: 15px;
      text-align: center;
    }
    
    .site-header nav a {
      color: white;
      margin: 0 10px;
      text-decoration: none;
      font-size: 14px;
    }
    
    .content {
      padding: 10px;
    }
    
    .intro h2 {
      font-size: 20px;
      color: #333;
    }
    
    .features {
      display: flex;
      flex-direction: column;
      gap: 10px;
      margin-top: 20px;
    }
    
    .feature {
      background: #28a745;
      color: white;
      padding: 15px;
      border-radius: 8px;
      text-align: center;
    }
    
    /* TODO: Add tablet styles (min-width: 768px) */
    @media (min-width: 768px) {
      /* TODO: Increase content padding and font sizes */
      /* TODO: Make features display in a row with flex-direction: row */
    }
    
    /* TODO: Add desktop styles (min-width: 1024px) */
    @media (min-width: 1024px) {
      /* TODO: Center content with max-width and margin auto */
      /* TODO: Increase header font size and spacing */
    }`}</InlineEditable>{`
  </style>
</head>
<body>
  <header class="site-header">
    <h1>My Homepage</h1>
    <nav>
      <a href="#">Home</a>
      <a href="#">About</a>
      <a href="#">Contact</a>
    </nav>
  </header>

  <main class="content">
    <section class="intro">
      <h2>Welcome to My Site</h2>
      <p>Resize the browser window to see the responsive design in action. Notice how the layout adapts to different screen sizes!</p>
    </section>
    
    <section class="features">
      <div class="feature">
        <h3>Feature 1</h3>
        <p>Mobile-first design</p>
      </div>
      <div class="feature">
        <h3>Feature 2</h3>
        <p>Responsive layout</p>
      </div>
      <div class="feature">
        <h3>Feature 3</h3>
        <p>Cross-device compatibility</p>
      </div>
    </section>
    
    <section style="margin-top: 2rem; padding: 1rem; background: #e9ecef; border-radius: 8px;">
      <h3>Instructions</h3>
      <p>Complete the media queries above to make this responsive!</p>
      <ol>
        <li>Add tablet styles in <code>@media (min-width: 768px)</code></li>
        <li>Add desktop styles in <code>@media (min-width: 1024px)</code></li>
        <li>Test by resizing your browser window</li>
      </ol>
    </section>
  </main>
</body>
</html>`}
            </CodeBlock>

            <DescriptionBlock category="css" lessonId="7">
                <Lesson>
                    <h1>📱 CSS Lesson 7: Responsive Design – Media Queries & Mobile-First Design</h1>

                    <p>
                        Responsive design ensures your website <strong>looks good on all devices</strong>, from phones to desktops.
                        The key tool: <strong>media queries</strong>. Learn to create layouts that adapt beautifully 
                        to any screen size!
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

                    <Section title="🖊 Try It Yourself">
                        <p>Practice with this interactive grid sandbox:</p>
                        
                        <InteractiveCodeBlock language="html" hoverable={true}>
                            {`<div class="grid-container">
  <div>1</div>
  <div>2</div>
  <div>3</div>
  <div>4</div>
</div>`}
                        </InteractiveCodeBlock>

                        <InteractiveCodeBlock language="css" hoverable={true}>
                            {`.grid-container {
  display: grid;
  grid-template-columns: repeat(2, 100px);
  gap: 10px;
}

/* Students can change: */
/* - Number of columns in repeat() */
/* - Gap size */
/* - Add grid-column: span 2; to items */`}
                        </InteractiveCodeBlock>

                        <p><strong>🧠 Experiment:</strong></p>
                        <ul>
                            <li>Change <code>repeat(2, 100px)</code> to <code>repeat(3, 100px)</code></li>
                            <li>Try <code>repeat(auto-fit, minmax(100px, 1fr))</code></li>
                            <li>Add <code>grid-column: span 2;</code> to the first item</li>
                            <li>Adjust the gap size</li>
                        </ul>
                    </Section>

                    <Tip type="info">
                        <strong>Grid Tip:</strong> Use <code>repeat(auto-fit, minmax(min, 1fr))</code> to create 
                        responsive grids that automatically adjust to screen size. Grid is perfect for 2D layouts 
                        while Flexbox excels at 1D layouts! 🧱
                    </Tip>
                </Lesson>

                <Task
                    objective="Create a mobile-first responsive homepage using media queries"
                    validations={[
                        {
                            requirement: 'Add tablet media query @media (min-width: 768px)',
                            validator: (doc) => {
                                const styles = doc.querySelector('style');
                                if (!styles) return false;
                                const cssText = styles.textContent;
                                return cssText.includes('@media') && 
                                       (cssText.includes('min-width: 768px') || cssText.includes('min-width:768px'));
                            }
                        },
                        {
                            requirement: 'Add desktop media query @media (min-width: 1024px)',
                            validator: (doc) => {
                                const styles = doc.querySelector('style');
                                if (!styles) return false;
                                const cssText = styles.textContent;
                                return cssText.includes('@media') && 
                                       (cssText.includes('min-width: 1024px') || cssText.includes('min-width:1024px'));
                            }
                        },
                        {
                            requirement: 'Change features layout to row on larger screens',
                            validator: (doc) => {
                                const styles = doc.querySelector('style');
                                if (!styles) return false;
                                const cssText = styles.textContent;
                                return cssText.includes('flex-direction: row') || cssText.includes('flex-direction:row');
                            }
                        },
                        {
                            requirement: 'Increase content padding for larger screens',
                            validator: (doc) => {
                                const styles = doc.querySelector('style');
                                if (!styles) return false;
                                const cssText = styles.textContent;
                                // Check for padding increases in media queries
                                const mediaQuerySections = cssText.split('@media');
                                return mediaQuerySections.some(section => 
                                    section.includes('padding') && (
                                        section.includes('20px') || 
                                        section.includes('30px') ||
                                        section.includes('2rem') ||
                                        section.includes('3rem')
                                    )
                                );
                            }
                        },
                        {
                            requirement: 'Add max-width container for desktop layout',
                            validator: (doc) => {
                                const styles = doc.querySelector('style');
                                if (!styles) return false;
                                const cssText = styles.textContent;
                                return cssText.includes('max-width') && 
                                       (cssText.includes('1200px') || cssText.includes('1000px') || cssText.includes('80rem'));
                            }
                        }
                    ]}
                    hints={[
                        'Add @media (min-width: 768px) { } for tablet styles',
                        'Add @media (min-width: 1024px) { } for desktop styles',
                        'Change .features to flex-direction: row; in tablet media query',
                        'Increase .content padding to 20px or 2rem in media queries',
                        'Add max-width: 1200px; and margin: 0 auto; for desktop container'
                    ]}
                >

                </Task>

                <Exercise
                    category="css"
                    lessonId="7"
                    title="📱 CSS Responsive Design Quiz"
                    description="Test your understanding of media queries, mobile-first design, and responsive layouts!"
                    buttonText="Start Responsive Design Quiz"
                    tipText="Make sure you've completed the responsive homepage task above before taking the quiz!"
                />
            </DescriptionBlock>

            <PreviewBlock />
        </Editor>
    );
};


export default Lesson7;
