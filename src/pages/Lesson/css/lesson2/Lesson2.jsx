import React from "react";
import "./Lesson2.css";
import Editor from "../../components/Editor/editor";
import { CodeBlock, DescriptionBlock, PreviewBlock } from "../../components/Editor";
import { InlineEditable } from "../../components/Editor/components/CodeBlock/components";
import { CodeSnippet, Highlight, Tip, Section, Task, Lesson } from "../../components/Editor/components/DescriptionBlock/components";
import InteractiveCodeBlock from "../../components/Editor/components/DescriptionBlock/components/InteractiveCodeBlock";
import HighlightTrigger from "../../components/Editor/components/DescriptionBlock/components/HighlightTrigger";
import Exercise from "../../components/Editor/components/DescriptionBlock/components/Exercise";

const Lesson2 = () => {
    return (
        <Editor>
            <CodeBlock>
                {`<!DOCTYPE html>
<html>
  <head>
    <title>My Styled Blog</title>
    <link href="https://fonts.googleapis.com/css2?family=Lora&family=Roboto&display=swap" rel="stylesheet">
    <style>
      `}<InlineEditable>/* Add your CSS styles here */</InlineEditable>{`
    </style>
  </head>
  <body>
    <article>
      <h1>The Joy of Learning CSS</h1>
      <p class="intro">CSS lets you transform raw structure into something expressive and beautiful.</p>
      <p class="body-text">Whether it's choosing colors that pop or fonts that tell a story, every decision shapes how readers feel about your content.</p>
      <p class="quote">"Design is intelligence made visible." – Alina Wheeler</p>
    </article>
  </body>
</html>`}
            </CodeBlock>

            <DescriptionBlock category="css" lessonId="2">
                <Lesson>
                    <h1>🎨 CSS Lesson 2: Colors & Typography</h1>

                    <p>
                        Your content may be structured and styled, but it still lacks character.
                        <strong>Color and typography</strong> are the soul of web design — they set the tone, mood, and personality of your website.
                        Let's explore how to use them properly.
                    </p>

                    <Section title="🎨 Colors in CSS">
                        <p>CSS gives you several ways to specify color. You'll often use these formats:</p>

                        <p><strong>1. Named Colors</strong></p>
                        <p>Simple, human-readable names like "red", "blue", "gold", "tomato".</p>
                        <InteractiveCodeBlock language="css" hoverable={true}>
                            {`h1 {
  color: tomato;
}`}
                        </InteractiveCodeBlock>
                        <p>🎯 Great for small projects or quick prototypes.</p>

                        <p><strong>2. Hexadecimal Colors</strong></p>
                        <p>Written as #RRGGBB, where each pair represents Red, Green, and Blue (values from 00 to FF).</p>
                        <InteractiveCodeBlock language="css" hoverable={true}>
                            {`p {
  color: #2ecc71; /* bright green */
}`}
                        </InteractiveCodeBlock>
                        <p>🔢 Tip: #000000 = black, #ffffff = white.</p>

                        <p><strong>3. RGB and RGBA</strong></p>
                        <p>RGB uses numbers (0–255) for red, green, and blue. RGBA adds alpha (opacity).</p>
                        <InteractiveCodeBlock language="css" hoverable={true}>
                            {`div {
  color: rgb(255, 0, 0);     /* red */
  background-color: rgba(0, 0, 255, 0.2); /* transparent blue background */
}`}
                        </InteractiveCodeBlock>
                        <p>🎨 rgba() is great for overlays and subtle transparency effects.</p>

                        <p><strong>4. HSL and HSLA</strong></p>
                        <p>Stands for Hue, Saturation, and Lightness (and Alpha for transparency).</p>
                        <InteractiveCodeBlock language="css" hoverable={true}>
                            {`h2 {
  color: hsl(200, 70%, 50%);
}`}
                        </InteractiveCodeBlock>
                        <p>🧠 HSL is easier to tweak manually — you can quickly adjust brightness or saturation for themes.</p>
                    </Section>

                    <Section title="🖋️ Typography Basics">
                        <p>Typography defines how text looks. We control this with CSS properties like:</p>

                        <table style={{ width: '100%', borderCollapse: 'collapse', marginTop: '10px' }}>
                            <thead>
                                <tr style={{ backgroundColor: '#f0f0f0' }}>
                                    <th style={{ padding: '8px', border: '1px solid #ddd' }}>Property</th>
                                    <th style={{ padding: '8px', border: '1px solid #ddd' }}>Description</th>
                                    <th style={{ padding: '8px', border: '1px solid #ddd' }}>Example</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td style={{ padding: '8px', border: '1px solid #ddd' }}>font-family</td>
                                    <td style={{ padding: '8px', border: '1px solid #ddd' }}>The typeface</td>
                                    <td style={{ padding: '8px', border: '1px solid #ddd' }}><code>font-family: Arial, sans-serif;</code></td>
                                </tr>
                                <tr>
                                    <td style={{ padding: '8px', border: '1px solid #ddd' }}>font-size</td>
                                    <td style={{ padding: '8px', border: '1px solid #ddd' }}>Size of text</td>
                                    <td style={{ padding: '8px', border: '1px solid #ddd' }}><code>font-size: 18px;</code></td>
                                </tr>
                                <tr>
                                    <td style={{ padding: '8px', border: '1px solid #ddd' }}>font-weight</td>
                                    <td style={{ padding: '8px', border: '1px solid #ddd' }}>Boldness</td>
                                    <td style={{ padding: '8px', border: '1px solid #ddd' }}><code>font-weight: bold;</code></td>
                                </tr>
                                <tr>
                                    <td style={{ padding: '8px', border: '1px solid #ddd' }}>font-style</td>
                                    <td style={{ padding: '8px', border: '1px solid #ddd' }}>Italic or normal</td>
                                    <td style={{ padding: '8px', border: '1px solid #ddd' }}><code>font-style: italic;</code></td>
                                </tr>
                                <tr>
                                    <td style={{ padding: '8px', border: '1px solid #ddd' }}>text-align</td>
                                    <td style={{ padding: '8px', border: '1px solid #ddd' }}>Alignment</td>
                                    <td style={{ padding: '8px', border: '1px solid #ddd' }}><code>text-align: center;</code></td>
                                </tr>
                                <tr>
                                    <td style={{ padding: '8px', border: '1px solid #ddd' }}>line-height</td>
                                    <td style={{ padding: '8px', border: '1px solid #ddd' }}>Vertical spacing</td>
                                    <td style={{ padding: '8px', border: '1px solid #ddd' }}><code>line-height: 1.6;</code></td>
                                </tr>
                            </tbody>
                        </table>
                    </Section>

                    <Section title="🧩 Font Stacks">
                        <p>When using fonts, you should provide fallbacks in case the user's browser doesn't have the primary one.</p>
                        <InteractiveCodeBlock language="css" hoverable={true}>
                            {`body {
  font-family: "Helvetica Neue", Arial, sans-serif;
}`}
                        </InteractiveCodeBlock>
                        <p>💡 If "Helvetica Neue" isn't available, the browser uses Arial. If Arial isn't, it falls back to a generic sans-serif font.</p>
                    </Section>

                    <Section title="🌐 Using Google Fonts">
                        <p>Google Fonts provides a free library of web-safe fonts you can embed easily.</p>
                        <p><strong>Example:</strong> Let's use Roboto.</p>
                        <ol>
                            <li>Go to Google Fonts</li>
                            <li>Select a font → Click "Get embed code"</li>
                            <li>Add this line inside your HTML <code>&lt;head&gt;</code>:</li>
                        </ol>
                        <InteractiveCodeBlock language="html" hoverable={true}>
                            {`<link href="https://fonts.googleapis.com/css2?family=Roboto&display=swap" rel="stylesheet">`}
                        </InteractiveCodeBlock>
                        <p>Then use it in CSS:</p>
                        <InteractiveCodeBlock language="css" hoverable={true}>
                            {`body {
  font-family: "Roboto", sans-serif;
}`}
                        </InteractiveCodeBlock>
                        <p>🎯 You can combine it with others:</p>
                        <InteractiveCodeBlock language="css" hoverable={true}>
                            {`h1 {
  font-family: "Playfair Display", serif;
}`}
                        </InteractiveCodeBlock>
                    </Section>

                    <Tip type="info">
                        <strong>Design Tip:</strong> Use no more than 2-3 font families per project. Pair a decorative font 
                        (for headings) with a readable font (for body text). Colors should complement each other — 
                        try tools like Adobe Color or Coolors.co for inspiration! 🎨
                    </Tip>
                </Lesson>

                <Task
                    objective="Style a blog article with colors and typography"
                    validations={[
                        {
                            requirement: 'Set a light background color for the body',
                            validator: (doc) => {
                                const styles = doc.querySelector('style');
                                if (!styles) return false;
                                const cssText = styles.textContent;
                                return cssText.includes('body') && 
                                       (cssText.includes('background-color:') || cssText.includes('background:'));
                            }
                        },
                        {
                            requirement: 'Apply a Google Font (Roboto or Lora) to text elements',
                            validator: (doc) => {
                                const styles = doc.querySelector('style');
                                if (!styles) return false;
                                const cssText = styles.textContent;
                                return (cssText.includes('Roboto') || cssText.includes('Lora')) && 
                                       cssText.includes('font-family');
                            }
                        },
                        {
                            requirement: 'Style h1 with dark navy color and center alignment',
                            validator: (doc) => {
                                const styles = doc.querySelector('style');
                                if (!styles) return false;
                                const cssText = styles.textContent;
                                return cssText.includes('h1') && 
                                       (cssText.includes('color: navy') || cssText.includes('color: #000080') || cssText.includes('color: #001f3f')) &&
                                       (cssText.includes('text-align: center') || cssText.includes('text-align:center'));
                            }
                        },
                        {
                            requirement: 'Style .intro class with gray text and larger font size',
                            validator: (doc) => {
                                const styles = doc.querySelector('style');
                                if (!styles) return false;
                                const cssText = styles.textContent;
                                return cssText.includes('.intro') && 
                                       (cssText.includes('color: gray') || cssText.includes('color: grey')) &&
                                       cssText.includes('font-size:');
                            }
                        },
                        {
                            requirement: 'Style .quote class with italic purple text and left border',
                            validator: (doc) => {
                                const styles = doc.querySelector('style');
                                if (!styles) return false;
                                const cssText = styles.textContent;
                                return cssText.includes('.quote') && 
                                       (cssText.includes('color: purple') || cssText.includes('color: #800080')) &&
                                       cssText.includes('font-style: italic') &&
                                       cssText.includes('border-left');
                            }
                        }
                    ]}
                    hints={[
                        'Set body background: body { background-color: #f9f9f9; }',
                        'Apply Google Font: body { font-family: "Roboto", sans-serif; }',
                        'Style h1: h1 { color: navy; text-align: center; }',
                        'Style .intro: .intro { color: gray; font-size: 20px; }',
                        'Style .quote: .quote { color: purple; font-style: italic; border-left: 3px solid purple; padding-left: 15px; }'
                    ]}
                >

                </Task>

                <Exercise
                    category="css"
                    lessonId="2"
                    title="🧠 CSS Colors & Typography Quiz"
                    description="Test your knowledge of color formats, font properties, and typography best practices!"
                    buttonText="Start Colors & Typography Quiz"
                    tipText="Make sure you've styled the blog article above before taking the quiz!"
                />
            </DescriptionBlock>

            <PreviewBlock />
        </Editor>
    );
};


export default Lesson2;
