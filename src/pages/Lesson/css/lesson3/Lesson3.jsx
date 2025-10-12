import React from "react";
import "./Lesson3.css";
import Editor from "../../components/Editor/editor";
import { CodeBlock, DescriptionBlock, PreviewBlock } from "../../components/Editor";
import { InlineEditable } from "../../components/Editor/components/CodeBlock/components";
import { CodeSnippet, Highlight, Tip, Section, Task, Lesson } from "../../components/Editor/components/DescriptionBlock/components";
import InteractiveCodeBlock from "../../components/Editor/components/DescriptionBlock/components/InteractiveCodeBlock";
import HighlightTrigger from "../../components/Editor/components/DescriptionBlock/components/HighlightTrigger";
import Exercise from "../../components/Editor/components/DescriptionBlock/components/Exercise";

const Lesson3 = () => {
    return (
        <Editor>
            <CodeBlock>
                {`<!DOCTYPE html>
<html>
  <head>
    <title>Box Model Practice</title>
    <style>
      `}<InlineEditable>/* Add your CSS styles here */</InlineEditable>{`
    </style>
  </head>
  <body>
    <div class="demo">
      <div class="box">A Box</div>
      <div class="box">Another Box</div>
      <div class="box">Third Box</div>
    </div>
  </body>
</html>`}
            </CodeBlock>

            <DescriptionBlock category="css" lessonId="3">
                <Lesson>
                    <h1>🧱 CSS Lesson 3: The Box Model & Display</h1>

                    <p>
                        Everything you see on a webpage — text, buttons, cards, images — is built from boxes.
                        <strong>Understanding how these boxes behave</strong> is the foundation of CSS layout.
                    </p>

                    <Section title="📦 The Box Model">
                        <p>Every element on a page is a rectangular box made of four layers:</p>

                        <InteractiveCodeBlock language="text" hoverable={false}>
                            {`+---------------------------+
|        Margin             |
|  +---------------------+  |
|  |      Border         |  |
|  |  +---------------+  |  |
|  |  |   Padding     |  |  |
|  |  | +-----------+ |  |  |
|  |  | |  Content  | |  |  |
|  |  | +-----------+ |  |  |
|  |  +---------------+  |  |
|  +---------------------+  |
+---------------------------+`}
                        </InteractiveCodeBlock>

                        <ul>
                            <li><strong>Content</strong> – the text or image inside.</li>
                            <li><strong>Padding</strong> – the space between content and border.</li>
                            <li><strong>Border</strong> – wraps around the padding and content.</li>
                            <li><strong>Margin</strong> – space outside the border (pushes boxes apart).</li>
                        </ul>

                        <p><strong>Example:</strong></p>
                        <InteractiveCodeBlock language="css" hoverable={true}>
                            {`.card {
  width: 250px;
  padding: 20px;       /* space inside */
  border: 2px solid #3498db;
  margin: 15px;        /* space outside */
}`}
                        </InteractiveCodeBlock>

                        <table style={{ width: '100%', borderCollapse: 'collapse', marginTop: '10px' }}>
                            <thead>
                                <tr style={{ backgroundColor: '#f0f0f0' }}>
                                    <th style={{ padding: '8px', border: '1px solid #ddd' }}>Property</th>
                                    <th style={{ padding: '8px', border: '1px solid #ddd' }}>Function</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td style={{ padding: '8px', border: '1px solid #ddd' }}>padding</td>
                                    <td style={{ padding: '8px', border: '1px solid #ddd' }}>Adds inner spacing</td>
                                </tr>
                                <tr>
                                    <td style={{ padding: '8px', border: '1px solid #ddd' }}>border</td>
                                    <td style={{ padding: '8px', border: '1px solid #ddd' }}>Draws a visible edge</td>
                                </tr>
                                <tr>
                                    <td style={{ padding: '8px', border: '1px solid #ddd' }}>margin</td>
                                    <td style={{ padding: '8px', border: '1px solid #ddd' }}>Creates space between elements</td>
                                </tr>
                            </tbody>
                        </table>

                        <p>🧠 <strong>Tip:</strong> total width = content + padding + border + margin</p>
                        <p>You can make the browser calculate width including padding and border using:</p>
                        <InteractiveCodeBlock language="css" hoverable={true}>
                            {`* {
  box-sizing: border-box;
}`}
                        </InteractiveCodeBlock>
                        <p>Now width includes padding and border — layouts are easier to control.</p>
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
                        <p>Here's a quick sandbox for learners before the main project:</p>
                        
                        <InteractiveCodeBlock language="html" hoverable={true}>
                            {`<div class="demo">
  <div class="box">A Box</div>
  <div class="box">Another Box</div>
</div>`}
                        </InteractiveCodeBlock>

                        <InteractiveCodeBlock language="css" hoverable={true}>
                            {`.box {
  display: inline-block;
  background-color: #f1c40f;
  border: 2px solid #e67e22;
  padding: 10px;
  margin: 8px;
}`}
                        </InteractiveCodeBlock>

                        <p><strong>🧠 Try:</strong></p>
                        <ul>
                            <li>Change <code>display: inline-block;</code> → <code>block</code> or <code>inline</code>.</li>
                            <li>Increase margin or padding.</li>
                            <li>Add <code>border-radius</code> for softer corners.</li>
                        </ul>
                    </Section>

                    <Tip type="info">
                        <strong>Layout Tip:</strong> Master the box model first — it's the foundation for all CSS layouts! 
                        Use <code>box-sizing: border-box</code> to make width calculations predictable, and remember 
                        that <code>inline-block</code> gives you the best of both worlds. 📦
                    </Tip>
                </Lesson>

                <Task
                    objective="Create styled boxes using the box model and display properties"
                    validations={[
                        {
                            requirement: 'Style the .box class with background color and border',
                            validator: (doc) => {
                                const styles = doc.querySelector('style');
                                if (!styles) return false;
                                const cssText = styles.textContent;
                                return cssText.includes('.box') && 
                                       (cssText.includes('background-color:') || cssText.includes('background:')) &&
                                       cssText.includes('border');
                            }
                        },
                        {
                            requirement: 'Add padding to create inner spacing in the boxes',
                            validator: (doc) => {
                                const styles = doc.querySelector('style');
                                if (!styles) return false;
                                const cssText = styles.textContent;
                                return cssText.includes('.box') && cssText.includes('padding');
                            }
                        },
                        {
                            requirement: 'Add margin to create space between boxes',
                            validator: (doc) => {
                                const styles = doc.querySelector('style');
                                if (!styles) return false;
                                const cssText = styles.textContent;
                                return cssText.includes('.box') && cssText.includes('margin');
                            }
                        },
                        {
                            requirement: 'Use display: inline-block to make boxes sit side by side',
                            validator: (doc) => {
                                const styles = doc.querySelector('style');
                                if (!styles) return false;
                                const cssText = styles.textContent;
                                return cssText.includes('.box') && 
                                       cssText.includes('display: inline-block');
                            }
                        },
                        {
                            requirement: 'Apply box-sizing: border-box for predictable sizing',
                            validator: (doc) => {
                                const styles = doc.querySelector('style');
                                if (!styles) return false;
                                const cssText = styles.textContent;
                                return cssText.includes('box-sizing: border-box');
                            }
                        }
                    ]}
                    hints={[
                        'Style .box with background-color: #f1c40f; and border: 2px solid #e67e22;',
                        'Add padding: 15px; for inner spacing inside the boxes',
                        'Add margin: 10px; to create space between the boxes',
                        'Use display: inline-block; to make boxes sit horizontally',
                        'Add * { box-sizing: border-box; } at the top for better width control'
                    ]}
                >

                </Task>

                <Exercise
                    category="css"
                    lessonId="3"
                    title="🧠 CSS Box Model & Display Quiz"
                    description="Test your understanding of the box model, display properties, and layout fundamentals!"
                    buttonText="Start Box Model Quiz"
                    tipText="Make sure you've completed the box styling task above before taking the quiz!"
                />
            </DescriptionBlock>

            <PreviewBlock />
        </Editor>
    );
};


export default Lesson3;
