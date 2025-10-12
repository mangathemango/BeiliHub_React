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
  <title>Canvas Doodle</title>
</head>
<body>
  <canvas id="sky" width="400" height="300"></canvas>

  <script>
    const canvas = document.getElementById("sky");
    const ctx = canvas.getContext("2d");

    // Draw the blue sky
    ctx.fillStyle = "skyblue";
    ctx.fillRect(0, 0, 400, 300);

    `}<InlineEditable>// TODO: Draw the sun (a yellow circle at top-right corner)</InlineEditable>{`
  </script>
</body>
</html>`}
            </CodeBlock>

            <DescriptionBlock category="html" lessonId="10">
                <Lesson>
                    <h1>HTML Lesson 10: The &lt;canvas&gt; Element</h1>

                    <p>
                        The <code>&lt;canvas&gt;</code> tag in HTML is like a blank drawing board 🎨. By itself, it doesn't display much — it's just an empty box. But once you use JavaScript with it, you can draw shapes, animations, even games.
                    </p>
                    <p>
                        Think of it like a piece of paper:
                    </p>
                    <ul>
                        <li><code>&lt;canvas&gt;</code> = the paper</li>
                        <li>JavaScript = your pen/paintbrush</li>
                    </ul>

                    <Section title="1️⃣ Basic Syntax">
                        <InteractiveCodeBlock language="html" hoverable={true}>
                            {`<canvas id="myCanvas" width="400" height="200"></canvas>`}
                        </InteractiveCodeBlock>
                        
                        <ul>
                            <li><strong>id:</strong> To target it with JavaScript.</li>
                            <li><strong>width & height:</strong> Dimensions of your canvas (in pixels).</li>
                            <li>If you don't set them, the default is 300×150.</li>
                        </ul>
                    </Section>

                    <Section title="2️⃣ Drawing with JavaScript">
                        <p>We need to grab the canvas and tell it we're drawing in 2D mode.</p>
                        <InteractiveCodeBlock language="html" hoverable={true}>
                            {`<canvas id="myCanvas" width="300" height="150"></canvas>
<script>
  const canvas = document.getElementById("myCanvas");
  const ctx = canvas.getContext("2d");

  // Draw a red rectangle
  ctx.fillStyle = "red";
  ctx.fillRect(50, 30, 100, 70);
</script>`}
                        </InteractiveCodeBlock>
                        
                        <p>🔑 <code>getContext("2d")</code> is the magic call that gives you the drawing functions.</p>
                    </Section>

                    <Section title="3️⃣ What Can You Draw?">
                        <ul>
                            <li><strong>Rectangles:</strong> <code>fillRect(x, y, width, height)</code></li>
                            <li><strong>Lines:</strong> <code>moveTo()</code>, <code>lineTo()</code>, <code>stroke()</code></li>
                            <li><strong>Circles:</strong> <code>arc(x, y, radius, startAngle, endAngle)</code></li>
                            <li><strong>Text:</strong> <code>fillText("Hello", x, y)</code></li>
                            <li><strong>Images:</strong> <code>drawImage(img, x, y)</code></li>
                        </ul>

                        <p><strong>Drawing a circle example:</strong></p>
                        <InteractiveCodeBlock language="javascript" hoverable={true}>
                            {`// Draw a yellow circle (sun)
ctx.beginPath();
ctx.arc(350, 50, 30, 0, 2 * Math.PI);
ctx.fillStyle = "yellow";
ctx.fill();`}
                        </InteractiveCodeBlock>
                    </Section>

                    <Section title="4️⃣ Why Learn &lt;canvas&gt;?">
                        <ul>
                            <li>Lets you build interactive graphics, charts, and games.</li>
                            <li>Often used in game dev, data visualization, and cool UI effects.</li>
                            <li>It's a perfect way to introduce JavaScript interactivity in a fun way.</li>
                        </ul>
                    </Section>

                    <Tip type="info">
                        <strong>Fun Fact:</strong> Canvas is pixel-based (like MS Paint), while SVG is vector-based (like Adobe Illustrator). 
                        Canvas is great for games and complex animations, while SVG is better for scalable icons and simple graphics! 🎮
                    </Tip>
                </Lesson>

                <Task
                    objective="Draw a sun on the canvas to complete the 'sun and sky' doodle"
                    validations={[
                        {
                            requirement: 'Canvas element exists with id="sky"',
                            validator: (doc) => {
                                const canvas = doc.querySelector('canvas#sky');
                                return canvas !== null;
                            }
                        },
                        {
                            requirement: 'JavaScript gets the 2D context from canvas',
                            validator: (doc) => {
                                const scripts = doc.querySelectorAll('script');
                                for (let script of scripts) {
                                    if (script.textContent.includes('getContext("2d")')) {
                                        return true;
                                    }
                                }
                                return false;
                            }
                        },
                        {
                            requirement: 'Draw at least one shape (circle, rectangle, or line)',
                            validator: (doc) => {
                                const scripts = doc.querySelectorAll('script');
                                for (let script of scripts) {
                                    const text = script.textContent;
                                    if (text.includes('fillRect') || 
                                        text.includes('arc') || 
                                        text.includes('beginPath') ||
                                        text.includes('stroke') ||
                                        text.includes('fill')) {
                                        return true;
                                    }
                                }
                                return false;
                            }
                        },
                        {
                            requirement: 'Add drawing code to create the sun (replace the TODO comment)',
                            validator: (doc) => {
                                const scripts = doc.querySelectorAll('script');
                                for (let script of scripts) {
                                    const text = script.textContent;
                                    // Check if TODO comment is replaced with actual drawing code
                                    const hasTodo = text.includes('TODO: Draw the sun');
                                    const hasDrawingCode = text.includes('arc') || text.includes('fillRect');
                                    return !hasTodo && hasDrawingCode;
                                }
                                return false;
                            }
                        }
                    ]}
                    hints={[
                        'Replace the TODO comment with drawing code for a yellow circle',
                        'Use ctx.beginPath() to start drawing',
                        'Use ctx.arc(x, y, radius, 0, 2 * Math.PI) to draw a circle',
                        'Set ctx.fillStyle = "yellow" for the sun color',
                        'Use ctx.fill() to actually draw the filled circle'
                    ]}
                >

                </Task>

                <Exercise
                    category="html"
                    lessonId="10"
                    title="🧠 HTML Canvas Element Quiz"
                    description="Test your understanding of the canvas element, JavaScript drawing context, and basic graphics programming!"
                    buttonText="Start Canvas Quiz"
                    tipText="Make sure you've drawn the sun on the canvas before taking the quiz!"
                />
            </DescriptionBlock>

            <PreviewBlock />
        </Editor>
    );
};

export default Lesson10;
            