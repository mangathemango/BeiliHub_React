import React from "react";
import "./Lesson8.css";
import Editor from "../../components/Editor/editor";
import { CodeBlock, DescriptionBlock, PreviewBlock } from "../../components/Editor";
import { InlineEditable } from "../../components/Editor/components/CodeBlock/components";
import { CodeSnippet, Highlight, Tip, Section, Task, Lesson } from "../../components/Editor/components/DescriptionBlock/components";
import InteractiveCodeBlock from "../../components/Editor/components/DescriptionBlock/components/InteractiveCodeBlock";
import HighlightTrigger from "../../components/Editor/components/DescriptionBlock/components/HighlightTrigger";
import Exercise from "../../components/Editor/components/DescriptionBlock/components/Exercise";

const Lesson8 = () => {
    return (
        <Editor>
            <CodeBlock>
                {`<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Animated Buttons</title>
  <style>
    /* ===== Base Styles ===== */
    body {
      font-family: system-ui, sans-serif;
      text-align: center;
      padding: 40px 20px;
      background-color: #f8f9fa;
      margin: 0;
    }
    
    h1 {
      color: #333;
      margin-bottom: 2rem;
    }
    
    `}<InlineEditable>{`/* ===== Animation Task: Create Interactive Buttons ===== */
    
    /* Base button styles */
    .btn1, .btn2 {
      padding: 12px 24px;
      margin: 15px;
      border: none;
      border-radius: 8px;
      cursor: pointer;
      color: white;
      background-color: #007BFF;
      font-size: 16px;
      font-weight: 500;
      display: inline-block;
    }
    
    /* TODO: Add hover transition for btn1 */
    .btn1 {
      /* Add transition property here */
    }
    
    .btn1:hover {
      /* Add hover effects here (background-color, transform, etc.) */
    }
    
    /* TODO: Add pulsing animation for btn2 */
    .btn2 {
      /* Add animation properties here */
    }
    
    /* TODO: Create @keyframes for pulse animation */
    @keyframes pulse {
      /* Define animation frames here */
    }
    
    /* Demonstration card for interactive testing */
    .demo-card {
      background: #28a745;
      color: white;
      padding: 20px;
      border-radius: 10px;
      margin: 2rem auto;
      width: 200px;
      cursor: pointer;
      transition: all 0.3s ease;
    }
    
    .demo-card:hover {
      transform: translateY(-5px);
      box-shadow: 0 10px 25px rgba(0,0,0,0.1);
    }`}</InlineEditable>{`
  </style>
</head>
<body>
  <h1>Button Animation Playground</h1>
  
  <div style="margin: 2rem 0;">
    <button class="btn1">Hover Me!</button>
    <button class="btn2">Pulse Me!</button>
  </div>
  
  <div class="demo-card">
    <h3>Interactive Demo</h3>
    <p>This card shows a working transition example!</p>
  </div>
  
  <section style="margin-top: 3rem; padding: 1.5rem; background: #e9ecef; border-radius: 10px; max-width: 600px; margin-left: auto; margin-right: auto;">
    <h3>🎯 Your Mission</h3>
    <ol style="text-align: left;">
      <li><strong>Transition Button:</strong> Add smooth hover effects to <code>.btn1</code></li>
      <li><strong>Animation Button:</strong> Create a pulsing animation for <code>.btn2</code></li>
      <li><strong>Keyframes:</strong> Define <code>@keyframes pulse</code> animation</li>
      <li><strong>Test:</strong> Hover over buttons to see your animations!</li>
    </ol>
    
    <div style="margin-top: 1rem; padding: 1rem; background: #fff; border-radius: 8px;">
      <strong>💡 Hints:</strong>
      <ul style="text-align: left; margin: 0.5rem 0;">
        <li>Use <code>transition: all 0.3s ease;</code> for smooth effects</li>
        <li>Try <code>transform: scale(1.1);</code> on hover</li>
        <li>Animation properties: <code>animation-duration, animation-iteration-count</code></li>
      </ul>
    </div>
  </section>
</body>
</html>`}
            </CodeBlock>

            <DescriptionBlock category="css" lessonId="8">
                <Lesson>
                    <h1>✨ CSS Lesson 8: Transitions & Animations</h1>

                    <p>
                        CSS animations let elements <strong>move, transform, or change style over time</strong>.
                        Two main types: <strong>Transitions</strong> (triggered by user actions like hover) and 
                        <strong>Animations</strong> (timeline-based, continuous or complex sequences).
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
                    objective="Create interactive buttons using CSS transitions and animations"
                    validations={[
                        {
                            requirement: 'Add transition property to .btn1 for smooth hover effects',
                            validator: (doc) => {
                                const styles = doc.querySelector('style');
                                if (!styles) return false;
                                const cssText = styles.textContent;
                                return cssText.includes('.btn1') && 
                                       (cssText.includes('transition:') || cssText.includes('transition '));
                            }
                        },
                        {
                            requirement: 'Add hover effects to .btn1 (background-color, transform, etc.)',
                            validator: (doc) => {
                                const styles = doc.querySelector('style');
                                if (!styles) return false;
                                const cssText = styles.textContent;
                                return cssText.includes('.btn1:hover') && 
                                       (cssText.includes('background-color') || 
                                        cssText.includes('transform') ||
                                        cssText.includes('scale') ||
                                        cssText.includes('color'));
                            }
                        },
                        {
                            requirement: 'Add animation properties to .btn2',
                            validator: (doc) => {
                                const styles = doc.querySelector('style');
                                if (!styles) return false;
                                const cssText = styles.textContent;
                                return cssText.includes('.btn2') && 
                                       (cssText.includes('animation:') || 
                                        cssText.includes('animation-name') ||
                                        cssText.includes('animation-duration'));
                            }
                        },
                        {
                            requirement: 'Create @keyframes animation (pulse, bounce, or similar)',
                            validator: (doc) => {
                                const styles = doc.querySelector('style');
                                if (!styles) return false;
                                const cssText = styles.textContent;
                                return cssText.includes('@keyframes') && 
                                       (cssText.includes('0%') || cssText.includes('from')) &&
                                       (cssText.includes('100%') || cssText.includes('to'));
                            }
                        },
                        {
                            requirement: 'Use animation properties like duration, iteration-count, or direction',
                            validator: (doc) => {
                                const styles = doc.querySelector('style');
                                if (!styles) return false;
                                const cssText = styles.textContent;
                                return cssText.includes('animation-duration') || 
                                       cssText.includes('animation-iteration-count') ||
                                       cssText.includes('animation-direction') ||
                                       cssText.includes('infinite');
                            }
                        }
                    ]}
                    hints={[
                        'Add transition: all 0.3s ease; to .btn1 for smooth effects',
                        'Use .btn1:hover { background-color: #0056b3; transform: scale(1.1); }',
                        'Add animation: pulse 2s infinite; to .btn2',
                        'Create @keyframes pulse { 0% { transform: scale(1); } 50% { transform: scale(1.1); } 100% { transform: scale(1); } }',
                        'Try different timing functions: ease, linear, ease-in-out'
                    ]}
                >

                </Task>

                <Exercise
                    category="css"
                    lessonId="8"
                    title="✨ CSS Animations Quiz"
                    description="Test your understanding of transitions, keyframes, and animation properties!"
                    buttonText="Start Animations Quiz"
                    tipText="Make sure you've completed the animated buttons task above before taking the quiz!"
                />
            </DescriptionBlock>

            <PreviewBlock />
        </Editor>
    );
};


export default Lesson8;
