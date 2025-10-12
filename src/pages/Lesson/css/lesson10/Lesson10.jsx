import React from "react";
import "./Lesson10.css";
import Editor from "../../components/Editor/editor";
import { CodeBlock, DescriptionBlock, PreviewBlock } from "../../components/Editor";
import { InlineEditable } from "../../components/Editor/components/CodeBlock/components";
import { CodeSnippet, Highlight, Tip, Section, Task, Lesson } from "../../components/Editor/components/DescriptionBlock/components";
import InteractiveCodeBlock from "../../components/Editor/components/DescriptionBlock/components/InteractiveCodeBlock";
import HighlightTrigger from "../../components/Editor/components/DescriptionBlock/components/HighlightTrigger";
import Exercise from "../../components/Editor/components/DescriptionBlock/components/Exercise";

const Lesson10 = () => {
    return (
        <Editor>
            <CodeBlock>
                {`<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Theme Switcher</title>
  <style>
    /* ===== Base Styles ===== */
    `}<InlineEditable>{`/* CSS Variables (Custom Properties) */
    :root {
      --bg-color: #ffffff;
      --text-color: #000000;
      --card-bg: #007BFF;
      --card-padding: 15px;
      --card-margin: 10px;
      --border-radius: 8px;
    }
    
    body {
      background-color: var(--bg-color);
      color: var(--text-color);
      font-family: system-ui, sans-serif;
      padding: 20px;
      margin: 0;
      transition: background-color 0.3s ease, color 0.3s ease;
    }
    
    h1 {
      text-align: center;
      margin-bottom: 2rem;
      font-size: clamp(24px, 5vw, 48px);
    }
    
    /* TODO: Style the theme toggle button */
    #toggle-theme {
      display: block;
      margin: 0 auto 2rem auto;
      padding: 12px 24px;
      background-color: var(--card-bg);
      color: white;
      border: none;
      border-radius: var(--border-radius);
      cursor: pointer;
      font-size: 16px;
      transition: all 0.3s ease;
    }
    
    #toggle-theme:hover {
      /* Add hover effects here */
    }
    
    /* Container using calc() for responsive width */
    .cards {
      max-width: calc(100% - 40px);
      margin: 0 auto;
      display: flex;
      flex-direction: column;
      gap: var(--card-margin);
    }
    
    /* TODO: Complete the card styling */
    .card {
      background-color: var(--card-bg);
      color: white;
      padding: var(--card-padding);
      border-radius: var(--border-radius);
      margin: var(--card-margin) 0;
      
      /* Use clamp() for responsive font size */
      font-size: clamp(14px, 2vw, 18px);
      
      /* Use calc() for dynamic width */
      width: calc(100% - 20px);
      
      transition: all 0.3s ease;
    }
    
    .card:hover {
      /* Add hover transform here */
    }
    
    /* TODO: Dark theme variables */
    .dark {
      --bg-color: #121212;
      --text-color: #f8f9fa;
      --card-bg: #28a745;
    }`}</InlineEditable>{`
  </style>
</head>
<body>
  <h1>🎨 Advanced CSS Theme Switcher</h1>
  
  <button id="toggle-theme">🌓 Toggle Light/Dark Theme</button>
  
  <div class="cards">
    <div class="card">
      <h3>Card with CSS Variables</h3>
      <p>This card uses custom properties for theming!</p>
    </div>
    <div class="card">
      <h3>Responsive with clamp()</h3>
      <p>Font size scales between 14px and 18px using clamp().</p>
    </div>
    <div class="card">
      <h3>Dynamic with calc()</h3>
      <p>Width calculated as calc(100% - 20px) for perfect spacing.</p>
    </div>
  </div>
  
  <section style="margin-top: 3rem; padding: 1.5rem; background: var(--card-bg); color: white; border-radius: var(--border-radius); opacity: 0.9;">
    <h3>🎯 Your Mission</h3>
    <ol>
      <li><strong>CSS Variables:</strong> Complete the variable definitions and usage</li>
      <li><strong>calc() Function:</strong> Use calc() for dynamic sizing and spacing</li>
      <li><strong>clamp() Function:</strong> Implement responsive typography</li>
      <li><strong>Dark Theme:</strong> Complete the dark theme variable overrides</li>
      <li><strong>Hover Effects:</strong> Add interactive hover states</li>
    </ol>
    
    <div style="margin-top: 1rem; padding: 1rem; background: rgba(255,255,255,0.1); border-radius: 8px;">
      <strong>💡 Hints:</strong>
      <ul>
        <li>Use <code>transform: translateY(-3px);</code> for hover effects</li>
        <li>Try <code>calc(100vh - 100px)</code> for viewport-based sizing</li>
        <li>clamp() syntax: <code>clamp(min, preferred, max)</code></li>
        <li>Dark theme overrides variables when <code>.dark</code> class is present</li>
      </ul>
    </div>
  </section>
  
  <script>
    const toggle = document.getElementById('toggle-theme');
    toggle.addEventListener('click', () => {
      document.documentElement.classList.toggle('dark');
      const isDark = document.documentElement.classList.contains('dark');
      toggle.textContent = isDark ? '☀️ Switch to Light Theme' : '🌙 Switch to Dark Theme';
    });
  </script>
</body>
</html>`}
            </CodeBlock>

            <DescriptionBlock category="css" lessonId="10">
                <Lesson>
                    <h1>� CSS Lesson 10: Advanced Styling – Variables, calc(), clamp()</h1>

                    <p>
                        Modern CSS allows <strong>dynamic styling</strong> using variables, math, and constraints. 
                        <strong>CSS Variables</strong> store reusable values, <strong>calc()</strong> performs calculations, 
                        and <strong>clamp()</strong> constrains values between min and max. This makes themes, layouts, 
                        and responsive designs much easier to maintain!
                    </p>

                    <Section title="🧱 CSS Variables (Custom Properties)">
                        <p>Store and reuse values throughout your stylesheet:</p>

                        <table style={{ width: '100%', borderCollapse: 'collapse', marginTop: '10px' }}>
                            <thead>
                                <tr style={{ backgroundColor: '#f0f0f0' }}>
                                    <th style={{ padding: '8px', border: '1px solid #ddd' }}>Syntax</th>
                                    <th style={{ padding: '8px', border: '1px solid #ddd' }}>Description</th>
                                    <th style={{ padding: '8px', border: '1px solid #ddd' }}>Example</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td style={{ padding: '8px', border: '1px solid #ddd' }}><strong>:root {"{}"}</strong></td>
                                    <td style={{ padding: '8px', border: '1px solid #ddd' }}>Global variables accessible everywhere</td>
                                    <td style={{ padding: '8px', border: '1px solid #ddd' }}>:root {"{ --color: blue; }"}</td>
                                </tr>
                                <tr>
                                    <td style={{ padding: '8px', border: '1px solid #ddd' }}><strong>--name</strong></td>
                                    <td style={{ padding: '8px', border: '1px solid #ddd' }}>Define a custom property</td>
                                    <td style={{ padding: '8px', border: '1px solid #ddd' }}>--primary-color: #007bff;</td>
                                </tr>
                                <tr>
                                    <td style={{ padding: '8px', border: '1px solid #ddd' }}><strong>var(--name)</strong></td>
                                    <td style={{ padding: '8px', border: '1px solid #ddd' }}>Use a custom property</td>
                                    <td style={{ padding: '8px', border: '1px solid #ddd' }}>color: var(--primary-color);</td>
                                </tr>
                                <tr>
                                    <td style={{ padding: '8px', border: '1px solid #ddd' }}><strong>var(--name, fallback)</strong></td>
                                    <td style={{ padding: '8px', border: '1px solid #ddd' }}>Use with fallback value</td>
                                    <td style={{ padding: '8px', border: '1px solid #ddd' }}>color: var(--color, red);</td>
                                </tr>
                            </tbody>
                        </table>

                        <p><strong>Example:</strong></p>
                        <InteractiveCodeBlock language="css" hoverable={true}>
                            {`:root {
  --primary-color: #007BFF;
  --card-padding: 15px;
  --border-radius: 8px;
}

.card {
  background-color: var(--primary-color);
  padding: var(--card-padding);
  border-radius: var(--border-radius);
}

/* Change theme by updating variables */
.dark {
  --primary-color: #28a745;
}`}
                        </InteractiveCodeBlock>
                        
                        <p>✅ <strong>Power:</strong> Change one variable to update all elements using it!</p>
                    </Section>

                    <Section title="🧮 calc() Function">
                        <p>Perform calculations with different units:</p>

                        <table style={{ width: '100%', borderCollapse: 'collapse', marginTop: '10px' }}>
                            <thead>
                                <tr style={{ backgroundColor: '#f0f0f0' }}>
                                    <th style={{ padding: '8px', border: '1px solid #ddd' }}>Operation</th>
                                    <th style={{ padding: '8px', border: '1px solid #ddd' }}>Example</th>
                                    <th style={{ padding: '8px', border: '1px solid #ddd' }}>Use Case</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td style={{ padding: '8px', border: '1px solid #ddd' }}><strong>Addition</strong></td>
                                    <td style={{ padding: '8px', border: '1px solid #ddd' }}>calc(100% + 20px)</td>
                                    <td style={{ padding: '8px', border: '1px solid #ddd' }}>Extending container size</td>
                                </tr>
                                <tr>
                                    <td style={{ padding: '8px', border: '1px solid #ddd' }}><strong>Subtraction</strong></td>
                                    <td style={{ padding: '8px', border: '1px solid #ddd' }}>calc(100% - 40px)</td>
                                    <td style={{ padding: '8px', border: '1px solid #ddd' }}>Accounting for margins</td>
                                </tr>
                                <tr>
                                    <td style={{ padding: '8px', border: '1px solid #ddd' }}><strong>Multiplication</strong></td>
                                    <td style={{ padding: '8px', border: '1px solid #ddd' }}>calc(50% * 2)</td>
                                    <td style={{ padding: '8px', border: '1px solid #ddd' }}>Scaling dimensions</td>
                                </tr>
                                <tr>
                                    <td style={{ padding: '8px', border: '1px solid #ddd' }}><strong>Division</strong></td>
                                    <td style={{ padding: '8px', border: '1px solid #ddd' }}>calc(100vh / 3)</td>
                                    <td style={{ padding: '8px', border: '1px solid #ddd' }}>Equal height sections</td>
                                </tr>
                            </tbody>
                        </table>

                        <InteractiveCodeBlock language="css" hoverable={true}>
                            {`/* Flexible container with fixed margins */
.container {
  width: calc(100% - 40px);
  padding: 20px;
  margin: 0 auto;
}

/* Perfect centering with viewport units */
.modal {
  width: calc(100vw - 200px);
  height: calc(100vh - 100px);
  top: 50px;
  left: 100px;
}`}
                        </InteractiveCodeBlock>
                    </Section>

                    <Section title="⚡ clamp() Function">
                        <p>Constrain values between minimum and maximum bounds:</p>
                        
                        <InteractiveCodeBlock language="css" hoverable={true}>
                            {`/* Syntax: clamp(min, preferred, max) */

/* Responsive font sizes */
h1 {
  font-size: clamp(18px, 4vw, 48px);
}
/* Never smaller than 18px, never larger than 48px */

/* Responsive spacing */
.container {
  padding: clamp(10px, 5%, 50px);
}

/* Responsive width */
.sidebar {
  width: clamp(200px, 25%, 400px);
}

/* Complex responsive design */
.card {
  width: clamp(300px, 50vw, 600px);
  padding: clamp(15px, 3vw, 30px);
  margin: clamp(10px, 2vw, 20px);
}`}
                        </InteractiveCodeBlock>

                        <p><strong>🎯 Benefits:</strong></p>
                        <ul>
                            <li>Eliminates need for multiple media queries</li>
                            <li>Creates truly fluid, responsive designs</li>
                            <li>Prevents content from becoming too small/large</li>
                            <li>Works with any CSS property that accepts lengths</li>
                        </ul>
                    </Section>

                    <Section title="🎨 Combining All Three">
                        <p>Create powerful, maintainable stylesheets:</p>
                        
                        <InteractiveCodeBlock language="css" hoverable={true}>
                            {`:root {
  --min-font: 14px;
  --max-font: 20px;
  --base-padding: 16px;
  --primary-color: #007bff;
}

.responsive-card {
  /* Combine variables with clamp() */
  font-size: clamp(
    var(--min-font), 
    2.5vw, 
    var(--max-font)
  );
  
  /* Use calc() with variables */
  padding: calc(var(--base-padding) * 1.5);
  width: calc(100% - var(--base-padding) * 2);
  
  /* Dynamic theming */
  background: var(--primary-color);
  border-radius: calc(var(--base-padding) / 2);
}

/* Theme switching */
.dark-theme {
  --primary-color: #28a745;
  --base-padding: 20px;
}`}
                        </InteractiveCodeBlock>

                        <p><strong>💡 Pro Pattern:</strong> Use CSS variables as your "design tokens" - store colors, 
                        spacing, typography scales, and more in one place for easy theming!</p>
                    </Section>

                    <Tip type="success">
                        <strong>Modern CSS Power:</strong> Variables + calc() + clamp() = the holy trinity of 
                        responsive, maintainable CSS! Use variables for consistency, calc() for flexibility, 
                        and clamp() for fluid responsiveness. No more media query overload! 🚀
                    </Tip>
                </Lesson>

                <Task
                    objective="Build a complete theme switcher using CSS variables, calc(), and clamp()"
                    validations={[
                        {
                            requirement: 'Use CSS variables in :root for theme colors',
                            validator: (doc) => {
                                const styles = doc.querySelector('style');
                                if (!styles) return false;
                                const cssText = styles.textContent;
                                return cssText.includes(':root') && 
                                       cssText.includes('--') &&
                                       cssText.includes('var(--');
                            }
                        },
                        {
                            requirement: 'Implement dark theme with variable overrides',
                            validator: (doc) => {
                                const styles = doc.querySelector('style');
                                if (!styles) return false;
                                const cssText = styles.textContent;
                                return cssText.includes('.dark') && 
                                       cssText.includes('--') &&
                                       (cssText.includes('--bg-color') || cssText.includes('--text-color'));
                            }
                        },
                        {
                            requirement: 'Use calc() for dynamic sizing or spacing',
                            validator: (doc) => {
                                const styles = doc.querySelector('style');
                                if (!styles) return false;
                                const cssText = styles.textContent;
                                return cssText.includes('calc(') && 
                                       (cssText.includes('100%') || cssText.includes('100vw') || cssText.includes('100vh'));
                            }
                        },
                        {
                            requirement: 'Use clamp() for responsive typography or spacing',
                            validator: (doc) => {
                                const styles = doc.querySelector('style');
                                if (!styles) return false;
                                const cssText = styles.textContent;
                                return cssText.includes('clamp(') && 
                                       (cssText.includes('vw') || cssText.includes('rem') || cssText.includes('%'));
                            }
                        },
                        {
                            requirement: 'Add hover effects using transform or other properties',
                            validator: (doc) => {
                                const styles = doc.querySelector('style');
                                if (!styles) return false;
                                const cssText = styles.textContent;
                                return cssText.includes(':hover') && 
                                       (cssText.includes('transform') || 
                                        cssText.includes('scale') ||
                                        cssText.includes('translateY'));
                            }
                        }
                    ]}
                    hints={[
                        'Define variables like --bg-color: #ffffff; in :root',
                        'Override in .dark { --bg-color: #121212; }',
                        'Use calc(100% - 20px) for responsive widths with fixed margins',
                        'Try clamp(14px, 2vw, 18px) for fluid font sizes',
                        'Add transform: translateY(-3px) for smooth hover effects'
                    ]}
                >

                </Task>

                <Exercise
                    category="css"
                    lessonId="10"
                    title="� CSS Advanced Styling Quiz"
                    description="Test your understanding of CSS variables, calc(), clamp(), and modern styling techniques!"
                    buttonText="Start Advanced Styling Quiz"
                    tipText="Make sure you've completed the theme switcher task above before taking the quiz!"
                />
            </DescriptionBlock>

            <PreviewBlock />
        </Editor>
    );
};


export default Lesson10;
