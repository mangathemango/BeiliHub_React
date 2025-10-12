import React from "react";
import "./Lesson6.css";
import Editor from "../../components/Editor/editor";
import { CodeBlock, DescriptionBlock, PreviewBlock } from "../../components/Editor";
import { InlineEditable } from "../../components/Editor/components/CodeBlock/components";
import { CodeSnippet, Highlight, Tip, Section, Task, Lesson } from "../../components/Editor/components/DescriptionBlock/components";
import InteractiveCodeBlock from "../../components/Editor/components/DescriptionBlock/components/InteractiveCodeBlock";
import HighlightTrigger from "../../components/Editor/components/DescriptionBlock/components/HighlightTrigger";
import Exercise from "../../components/Editor/components/DescriptionBlock/components/Exercise";

const Lesson6 = () => {
    return (
        <Editor>
            <CodeBlock>
                {`<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Photo Gallery</title>
  <style>
    /* ===== Base Styles ===== */
    body {
      font-family: system-ui, sans-serif;
      background-color: #f8f9fa;
      margin: 0;
      padding: 20px;
    }
    
    header h1 {
      text-align: center;
      color: #333;
    }
    
    `}<InlineEditable>{`/* ===== Your Task: Create a responsive photo gallery ===== */
    .gallery {
      display: grid;
      /* TODO: Add grid-template-columns with auto-fit and minmax */
      /* TODO: Add gap for spacing between images */
      margin: 2rem 0;
    }
    
    .gallery img {
      width: 100%;
      height: 200px;
      object-fit: cover;
      border-radius: 8px;
      /* TODO: Make one image span multiple columns with grid-column */
    }
    
    /* Placeholder for when no images are available */
    .placeholder {
      background: linear-gradient(45deg, #007BFF, #28a745);
      color: white;
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 1.2rem;
      font-weight: bold;
      border-radius: 8px;
      height: 200px;
    }`}</InlineEditable>{`
  </style>
</head>
<body>
  <header>
    <h1>My Photo Gallery</h1>
  </header>

  <div class="gallery">
    <!-- Using placeholder divs since we don't have actual images -->
    <div class="placeholder featured">Featured Photo</div>
    <div class="placeholder">Photo 2</div>
    <div class="placeholder">Photo 3</div>
    <div class="placeholder">Photo 4</div>
    <div class="placeholder">Photo 5</div>
    <div class="placeholder">Photo 6</div>
    <div class="placeholder">Photo 7</div>
    <div class="placeholder">Photo 8</div>
  </div>

  <section style="margin-top: 3rem; text-align: center;">
    <h3>Instructions</h3>
    <p>Complete the CSS Grid properties above to create a responsive photo gallery!</p>
    <ol style="text-align: left; max-width: 600px; margin: 0 auto;">
      <li>Add <code>grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));</code></li>
      <li>Add <code>gap: 15px;</code> for spacing</li>
      <li>Make the featured photo span 2 columns with <code>grid-column: span 2;</code></li>
    </ol>
  </section>
</body>
</html>`}
            </CodeBlock>

            <DescriptionBlock category="css" lessonId="6">
                <Lesson>
                    <h1>🧱 CSS Lesson 6: Grid – grid-template, spanning, gaps, auto-fit</h1>

                    <p>
                        CSS Grid is perfect for creating <strong>2D layouts: rows and columns</strong>.
                        Unlike Flexbox, which is mostly 1D, Grid handles both axes easily and is ideal for 
                        complex layouts like photo galleries, dashboards, and card grids!
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
                    objective="Create a responsive photo gallery using CSS Grid"
                    validations={[
                        {
                            requirement: 'Use display: grid on .gallery class',
                            validator: (doc) => {
                                const styles = doc.querySelector('style');
                                if (!styles) return false;
                                const cssText = styles.textContent;
                                return cssText.includes('.gallery') && 
                                       cssText.includes('display: grid');
                            }
                        },
                        {
                            requirement: 'Add grid-template-columns with auto-fit and minmax',
                            validator: (doc) => {
                                const styles = doc.querySelector('style');
                                if (!styles) return false;
                                const cssText = styles.textContent;
                                return cssText.includes('.gallery') && 
                                       cssText.includes('grid-template-columns') &&
                                       cssText.includes('auto-fit') &&
                                       cssText.includes('minmax');
                            }
                        },
                        {
                            requirement: 'Add gap property for spacing between grid items',
                            validator: (doc) => {
                                const styles = doc.querySelector('style');
                                if (!styles) return false;
                                const cssText = styles.textContent;
                                return cssText.includes('.gallery') && cssText.includes('gap');
                            }
                        },
                        {
                            requirement: 'Make featured image span multiple columns with grid-column',
                            validator: (doc) => {
                                const styles = doc.querySelector('style');
                                if (!styles) return false;
                                const cssText = styles.textContent;
                                return (cssText.includes('grid-column: span') || 
                                       cssText.includes('grid-column:span')) &&
                                       (cssText.includes('.featured') || 
                                        cssText.includes('.gallery img') ||
                                        cssText.includes('.placeholder'));
                            }
                        },
                        {
                            requirement: 'Ensure the gallery is responsive with proper minmax values',
                            validator: (doc) => {
                                const styles = doc.querySelector('style');
                                if (!styles) return false;
                                const cssText = styles.textContent;
                                return cssText.includes('minmax(') && 
                                       (cssText.includes('150px') || cssText.includes('200px'));
                            }
                        }
                    ]}
                    hints={[
                        'Add display: grid; to .gallery class',
                        'Use grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));',
                        'Add gap: 15px; for spacing between images',
                        'Make featured image span 2 columns: .featured { grid-column: span 2; }',
                        'Ensure minmax() has reasonable minimum width (150px-200px)'
                    ]}
                >

                </Task>

                <Exercise
                    category="css"
                    lessonId="6"
                    title="🧱 CSS Grid Quiz"
                    description="Test your understanding of Grid layout, spanning, and responsive design!"
                    buttonText="Start Grid Quiz"
                    tipText="Make sure you've completed the photo gallery task above before taking the quiz!"
                />
            </DescriptionBlock>

            <PreviewBlock />
        </Editor>
    );
};


export default Lesson6;
