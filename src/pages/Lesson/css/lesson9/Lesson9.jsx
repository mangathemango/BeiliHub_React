import React from "react";
import "./Lesson9.css";
import Editor from "../../components/Editor/editor";
import { CodeBlock, DescriptionBlock, PreviewBlock } from "../../components/Editor";
import { InlineEditable } from "../../components/Editor/components/CodeBlock/components";
import { CodeSnippet, Highlight, Tip, Section, Task, Lesson } from "../../components/Editor/components/DescriptionBlock/components";
import InteractiveCodeBlock from "../../components/Editor/components/DescriptionBlock/components/InteractiveCodeBlock";
import HighlightTrigger from "../../components/Editor/components/DescriptionBlock/components/HighlightTrigger";
import Exercise from "../../components/Editor/components/DescriptionBlock/components/Exercise";

const Lesson9 = () => {
    return (
        <Editor>
            <CodeBlock>
                {`<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Tooltip Demo</title>
  <style>
    /* ===== Base Styles ===== */
    body {
      font-family: system-ui, sans-serif;
      padding: 40px 20px;
      background-color: #f8f9fa;
      margin: 0;
      line-height: 1.6;
    }
    
    h1 {
      text-align: center;
      color: #333;
      margin-bottom: 3rem;
    }
    
    `}<InlineEditable>{`/* ===== Pseudo-classes & Pseudo-elements Task ===== */
    
    /* Base tooltip styles */
    .tooltip {
      position: relative;
      cursor: pointer;
      display: inline-block;
      background-color: #007BFF;
      color: white;
      padding: 12px 20px;
      border-radius: 6px;
      margin: 20px 10px;
      transition: all 0.3s ease;
    }
    
    /* TODO: Add hover effect for tooltip */
    .tooltip:hover {
      /* Change background color and add transform */
    }
    
    /* TODO: Create tooltip content with ::after */
    .tooltip::after {
      /* Set content property with tooltip text */
      /* Position the tooltip above the element */
      /* Style with background, padding, border-radius */
      /* Add pointer arrow with borders */
    }
    
    /* Navigation list for pseudo-class practice */
    .nav {
      list-style: none;
      padding: 0;
      text-align: center;
      margin: 3rem 0;
    }
    
    .nav li {
      display: inline-block;
      margin: 0 15px;
      padding: 10px 20px;
      background-color: #6c757d;
      color: white;
      border-radius: 5px;
      cursor: pointer;
      transition: background-color 0.3s ease;
    }
    
    /* TODO: Style odd/even items differently */
    .nav li:nth-child(odd) {
      /* Add background color for odd items */
    }
    
    .nav li:nth-child(even) {
      /* Add background color for even items */
    }
    
    /* TODO: Add hover effects */
    .nav li:hover {
      /* Add hover background color */
    }
    
    /* Input focus styling */
    .focus-demo {
      width: 100%;
      max-width: 300px;
      padding: 12px;
      border: 2px solid #ddd;
      border-radius: 5px;
      font-size: 16px;
      margin: 10px;
    }
    
    /* TODO: Add focus styles */
    .focus-demo:focus {
      /* Style the input when focused */
    }`}</InlineEditable>{`
  </style>
</head>
<body>
  <h1>Pseudo-classes & Pseudo-elements Demo</h1>
  
  <section style="text-align: center; margin-bottom: 3rem;">
    <h3>Tooltips (::after pseudo-element)</h3>
    <div class="tooltip" data-tooltip="This is my first tooltip!">Hover for Tooltip 1</div>
    <div class="tooltip" data-tooltip="Here's another helpful tip!">Hover for Tooltip 2</div>
  </section>
  
  <section style="margin: 3rem 0;">
    <h3 style="text-align: center;">Navigation (:nth-child pseudo-class)</h3>
    <ul class="nav">
      <li>Home</li>
      <li>About</li>
      <li>Services</li>
      <li>Portfolio</li>
      <li>Contact</li>
    </ul>
  </section>
  
  <section style="text-align: center; margin: 3rem 0;">
    <h3>Form Focus (:focus pseudo-class)</h3>
    <input type="text" class="focus-demo" placeholder="Click to focus me">
    <br>
    <input type="email" class="focus-demo" placeholder="Email address">
  </section>
  
  <section style="margin-top: 3rem; padding: 1.5rem; background: #e9ecef; border-radius: 10px; max-width: 700px; margin-left: auto; margin-right: auto;">
    <h3>🎯 Your Challenge</h3>
    <ol style="text-align: left;">
      <li><strong>Tooltips:</strong> Create tooltips using <code>::after</code> pseudo-element</li>
      <li><strong>Navigation:</strong> Style odd/even items with <code>:nth-child()</code></li>
      <li><strong>Hover Effects:</strong> Add <code>:hover</code> states for interactivity</li>
      <li><strong>Focus Styles:</strong> Style inputs with <code>:focus</code> pseudo-class</li>
    </ol>
    
    <div style="margin-top: 1rem; padding: 1rem; background: #fff; border-radius: 8px;">
      <strong>💡 Hints:</strong>
      <ul style="text-align: left; margin: 0.5rem 0;">
        <li>Use <code>content: attr(data-tooltip);</code> to get tooltip text</li>
        <li>Position tooltips with <code>position: absolute;</code></li>
        <li>Style focus with <code>border-color</code> and <code>outline: none;</code></li>
      </ul>
    </div>
  </section>
</body>
</html>`}
            </CodeBlock>

            <DescriptionBlock category="css" lessonId="9">
                <Lesson>
                    <h1>🎭 CSS Lesson 9: Pseudo-classes & Pseudo-elements</h1>

                    <p>
                        <strong>Pseudo-classes</strong> select elements in specific states (like :hover, :focus), while 
                        <strong>pseudo-elements</strong> let you style specific parts of elements or insert content (like ::before, ::after).
                        These powerful selectors make your CSS more dynamic and interactive!
                    </p>

                    <Section title="🎯 Pseudo-classes">
                        <p>Select elements based on their state or position:</p>

                        <table style={{ width: '100%', borderCollapse: 'collapse', marginTop: '10px' }}>
                            <thead>
                                <tr style={{ backgroundColor: '#f0f0f0' }}>
                                    <th style={{ padding: '8px', border: '1px solid #ddd' }}>Pseudo-class</th>
                                    <th style={{ padding: '8px', border: '1px solid #ddd' }}>Description</th>
                                    <th style={{ padding: '8px', border: '1px solid #ddd' }}>Example</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td style={{ padding: '8px', border: '1px solid #ddd' }}><strong>:hover</strong></td>
                                    <td style={{ padding: '8px', border: '1px solid #ddd' }}>When user hovers over element</td>
                                    <td style={{ padding: '8px', border: '1px solid #ddd' }}>button:hover</td>
                                </tr>
                                <tr>
                                    <td style={{ padding: '8px', border: '1px solid #ddd' }}><strong>:focus</strong></td>
                                    <td style={{ padding: '8px', border: '1px solid #ddd' }}>When element receives keyboard focus</td>
                                    <td style={{ padding: '8px', border: '1px solid #ddd' }}>input:focus</td>
                                </tr>
                                <tr>
                                    <td style={{ padding: '8px', border: '1px solid #ddd' }}><strong>:nth-child()</strong></td>
                                    <td style={{ padding: '8px', border: '1px solid #ddd' }}>Selects elements by position</td>
                                    <td style={{ padding: '8px', border: '1px solid #ddd' }}>li:nth-child(odd)</td>
                                </tr>
                                <tr>
                                    <td style={{ padding: '8px', border: '1px solid #ddd' }}><strong>:first-child</strong></td>
                                    <td style={{ padding: '8px', border: '1px solid #ddd' }}>First child element</td>
                                    <td style={{ padding: '8px', border: '1px solid #ddd' }}>p:first-child</td>
                                </tr>
                                <tr>
                                    <td style={{ padding: '8px', border: '1px solid #ddd' }}><strong>:last-child</strong></td>
                                    <td style={{ padding: '8px', border: '1px solid #ddd' }}>Last child element</td>
                                    <td style={{ padding: '8px', border: '1px solid #ddd' }}>li:last-child</td>
                                </tr>
                            </tbody>
                        </table>
                    </Section>

                    <Section title="✨ Pseudo-elements">
                        <p>Create and style virtual elements within existing elements:</p>

                        <table style={{ width: '100%', borderCollapse: 'collapse', marginTop: '10px' }}>
                            <thead>
                                <tr style={{ backgroundColor: '#f0f0f0' }}>
                                    <th style={{ padding: '8px', border: '1px solid #ddd' }}>Pseudo-element</th>
                                    <th style={{ padding: '8px', border: '1px solid #ddd' }}>Description</th>
                                    <th style={{ padding: '8px', border: '1px solid #ddd' }}>Use Case</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td style={{ padding: '8px', border: '1px solid #ddd' }}><strong>::before</strong></td>
                                    <td style={{ padding: '8px', border: '1px solid #ddd' }}>Inserts content before element</td>
                                    <td style={{ padding: '8px', border: '1px solid #ddd' }}>Icons, decorations</td>
                                </tr>
                                <tr>
                                    <td style={{ padding: '8px', border: '1px solid #ddd' }}><strong>::after</strong></td>
                                    <td style={{ padding: '8px', border: '1px solid #ddd' }}>Inserts content after element</td>
                                    <td style={{ padding: '8px', border: '1px solid #ddd' }}>Tooltips, arrows</td>
                                </tr>
                                <tr>
                                    <td style={{ padding: '8px', border: '1px solid #ddd' }}><strong>::first-letter</strong></td>
                                    <td style={{ padding: '8px', border: '1px solid #ddd' }}>Styles first letter of text</td>
                                    <td style={{ padding: '8px', border: '1px solid #ddd' }}>Drop caps</td>
                                </tr>
                                <tr>
                                    <td style={{ padding: '8px', border: '1px solid #ddd' }}><strong>::selection</strong></td>
                                    <td style={{ padding: '8px', border: '1px solid #ddd' }}>Styles selected text</td>
                                    <td style={{ padding: '8px', border: '1px solid #ddd' }}>Custom highlights</td>
                                </tr>
                            </tbody>
                        </table>

                        <p><strong>Example:</strong></p>
                        <InteractiveCodeBlock language="css" hoverable={true}>
                            {`.tooltip::after {
  content: attr(data-tooltip);
  position: absolute;
  background: #333;
  color: white;
  padding: 5px 10px;
  border-radius: 4px;
}`}
                        </InteractiveCodeBlock>
                        
                        <p>✅ <strong>Key Point:</strong> Pseudo-elements require the <code>content</code> property to display!</p>
                    </Section>

                    <Section title="🔢 nth-child Patterns">
                        <p>Master complex selection patterns with nth-child:</p>
                        
                        <InteractiveCodeBlock language="css" hoverable={true}>
                            {`/* Basic patterns */
:nth-child(odd)     /* 1, 3, 5, 7... */
:nth-child(even)    /* 2, 4, 6, 8... */
:nth-child(3)       /* Exactly 3rd element */

/* Advanced patterns */
:nth-child(3n)      /* Every 3rd: 3, 6, 9... */
:nth-child(3n+1)    /* 1, 4, 7, 10... */
:nth-child(-n+3)    /* First 3 elements */

/* Practical example */
li:nth-child(odd) {
  background-color: #f8f9fa;
}

li:nth-child(even) {
  background-color: #e9ecef;
}`}
                        </InteractiveCodeBlock>

                        <p><strong>🧠 Try:</strong></p>
                        <ul>
                            <li>Create striped table rows with :nth-child(odd/even)</li>
                            <li>Highlight every 3rd item in a list</li>
                            <li>Style the first and last items differently</li>
                        </ul>
                    </Section>

                    <Section title="🎨 Interactive Examples">
                        <p>Combine pseudo-classes and pseudo-elements for powerful effects:</p>
                        
                        <InteractiveCodeBlock language="css" hoverable={true}>
                            {`/* Tooltip on hover */
.tooltip {
  position: relative;
}

.tooltip:hover::after {
  content: attr(data-tooltip);
  position: absolute;
  top: -40px;
  left: 50%;
  transform: translateX(-50%);
  background: #333;
  color: white;
  padding: 8px 12px;
  border-radius: 4px;
  white-space: nowrap;
  opacity: 1;
  visibility: visible;
}

.tooltip::after {
  opacity: 0;
  visibility: hidden;
  transition: all 0.3s ease;
}

/* Form focus styles */
input:focus {
  outline: none;
  border-color: #007bff;
  box-shadow: 0 0 0 3px rgba(0,123,255,0.25);
}`}
                        </InteractiveCodeBlock>

                        <p><strong>💡 Pro Tips:</strong></p>
                        <ul>
                            <li>Use <code>attr()</code> function to pull content from HTML attributes</li>
                            <li>Combine transitions with pseudo-classes for smooth effects</li>
                            <li>Pseudo-elements are inline by default - set display if needed</li>
                        </ul>
                    </Section>

                    <Tip type="info">
                        <strong>Memory Tip:</strong> Single colon <code>:</code> for pseudo-classes (states), 
                        double colon <code>::</code> for pseudo-elements (content). Think of pseudo-elements 
                        as "fake" HTML elements you create with CSS! 🎭
                    </Tip>
                </Lesson>

                <Task
                    objective="Create interactive tooltips using pseudo-classes and pseudo-elements"
                    validations={[
                        {
                            requirement: 'Add hover effects to .tooltip elements',
                            validator: (doc) => {
                                const styles = doc.querySelector('style');
                                if (!styles) return false;
                                const cssText = styles.textContent;
                                return cssText.includes('.tooltip:hover') && 
                                       (cssText.includes('background') || 
                                        cssText.includes('transform') ||
                                        cssText.includes('color'));
                            }
                        },
                        {
                            requirement: 'Create tooltip content using ::after pseudo-element',
                            validator: (doc) => {
                                const styles = doc.querySelector('style');
                                if (!styles) return false;
                                const cssText = styles.textContent;
                                return cssText.includes('.tooltip::after') && 
                                       cssText.includes('content:') &&
                                       (cssText.includes('attr(data-tooltip)') || 
                                        cssText.includes('"') || 
                                        cssText.includes("'"));
                            }
                        },
                        {
                            requirement: 'Style odd and even navigation items differently',
                            validator: (doc) => {
                                const styles = doc.querySelector('style');
                                if (!styles) return false;
                                const cssText = styles.textContent;
                                return (cssText.includes(':nth-child(odd)') || cssText.includes(':nth-child(even)')) &&
                                       cssText.includes('background');
                            }
                        },
                        {
                            requirement: 'Add focus styles to form inputs',
                            validator: (doc) => {
                                const styles = doc.querySelector('style');
                                if (!styles) return false;
                                const cssText = styles.textContent;
                                return cssText.includes(':focus') && 
                                       (cssText.includes('border') || 
                                        cssText.includes('outline') ||
                                        cssText.includes('box-shadow'));
                            }
                        }
                    ]}
                    hints={[
                        'Use .tooltip:hover { background-color: #0056b3; } for hover effects',
                        'Add .tooltip::after { content: attr(data-tooltip); position: absolute; } for tooltips',
                        'Style with .nav li:nth-child(odd) { background-color: #f8f9fa; }',
                        'Use .focus-demo:focus { border-color: #007bff; outline: none; }',
                        'Position tooltips with top: -40px; left: 50%; transform: translateX(-50%);'
                    ]}
                >

                </Task>

                <Exercise
                    category="css"
                    lessonId="9"
                    title="🎭 CSS Pseudo-selectors Quiz"
                    description="Test your understanding of pseudo-classes, pseudo-elements, and advanced selectors!"
                    buttonText="Start Pseudo-selectors Quiz"
                    tipText="Make sure you've completed the tooltip task above before taking the quiz!"
                />
            </DescriptionBlock>

            <PreviewBlock />
        </Editor>
    );
};


export default Lesson9;
