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
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>`}<InlineEditable>Try HTML Links</InlineEditable>{`</title>
</head>
<body>
  <h1>HTML Links Practice</h1>

  <!-- Editable area below -->
  <a href="`}<InlineEditable></InlineEditable>{`" target="_blank">Learn HTML on MDN</a>
  <br>
  <a href="`}<InlineEditable></InlineEditable>{`">Go to Bottom</a>

  <p>Scroll down...</p>

  <div style="height: 200px;"></div>

  <h2 id="bottom">Bottom Section</h2>
</body>
</html>`}
            </CodeBlock>

            <DescriptionBlock category="html" lessonId="3">
                <Lesson>
                    <h1>HTML Lesson 3: Links & Navigation</h1>

                    <p>
                        Websites are made of pages, and links are how we connect them.
                        In this lesson, we'll explore anchor tags, relative/absolute links, and internal navigation (jumping between sections).
                    </p>

                    <Section title="🔗 1. Basic Links">
                        <p>The <code>&lt;a&gt;</code> tag creates a hyperlink.</p>

                        <InteractiveCodeBlock language="html" hoverable={true}>
                            {`<a href="https://www.wikipedia.org">Visit Wikipedia</a>`}
                        </InteractiveCodeBlock>

                        <p>
                            ✅ <HighlightTrigger target="href">href</HighlightTrigger> defines the link's destination.<br/>
                            ✅ Clicking opens the page in the same tab.
                        </p>

                        <p>To open in a new tab:</p>
                        <InteractiveCodeBlock language="html" hoverable={true}>
                            {`<a href="https://www.wikipedia.org" target="_blank">Open in new tab</a>`}
                        </InteractiveCodeBlock>
                    </Section>

                    <Section title="🗂️ 2. Relative vs Absolute Links">
                        <p><strong>Absolute link:</strong> points to a full URL (external website).</p>
                        <InteractiveCodeBlock language="html" hoverable={true}>
                            {`<a href="https://openai.com">Go to OpenAI</a>`}
                        </InteractiveCodeBlock>

                        <p><strong>Relative link:</strong> connects to another file in your project.</p>
                        <InteractiveCodeBlock language="html" hoverable={true}>
                            {`<a href="about.html">About Us</a>`}
                        </InteractiveCodeBlock>

                        <p>
                            ✅ Relative links are used when linking between pages in the same website.<br/>
                            ✅ Absolute links are used for linking to other sites.
                        </p>
                    </Section>

                    <Section title="🧭 3. Internal Page Navigation">
                        <p>You can link to sections within the same page using IDs.</p>
                        
                        <InteractiveCodeBlock language="html" hoverable={true}>
                            {`<h2 id="contact">Contact Us</h2>
<a href="#contact">Go to Contact Section</a>`}
                        </InteractiveCodeBlock>

                        <p>
                            ✅ The browser scrolls to the element with that id.<br/>
                            ✅ Great for one-page sites or long articles.
                        </p>
                    </Section>

                    <Section title="🧱 4. Navigation Bars">
                        <p>Combine multiple links in a <code>&lt;nav&gt;</code> element:</p>
                        
                        <InteractiveCodeBlock language="html" hoverable={true}>
                            {`<nav>
  <a href="index.html">Home</a>
  <a href="about.html">About</a>
  <a href="contact.html">Contact</a>
</nav>`}
                        </InteractiveCodeBlock>

                        <p>✅ <code>&lt;nav&gt;</code> helps structure navigation for users and search engines.</p>
                    </Section>

                    <Section title="💪 Multi-Page Website Example">
                        <p>Here's how to create a multi-page site with proper navigation:</p>
                        
                        <p><strong>Base HTML for index.html:</strong></p>
                        <InteractiveCodeBlock language="html" hoverable={true}>
                            {`<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>My Website - Home</title>
</head>
<body>
  <nav>
    <a href="index.html">Home</a> |
    <a href="about.html">About</a> |
    <a href="contact.html">Contact</a>
  </nav>

  <h1>Welcome to My Website</h1>
  <p>This is the home page.</p>
</body>
</html>`}
                        </InteractiveCodeBlock>

                        <p><strong>Example contact.html with email link:</strong></p>
                        <InteractiveCodeBlock language="html" hoverable={true}>
                            {`<nav>
  <a href="index.html">Home</a> |
  <a href="about.html">About</a> |
  <a href="contact.html">Contact</a>
</nav>

<h1>Contact Us</h1>
<p>Email us at <a href="mailto:info@example.com">info@example.com</a></p>
<a href="#top">Back to top</a>`}
                        </InteractiveCodeBlock>

                        <p>
                            ✅ Links between pages use relative paths (about.html, contact.html).<br/>
                            ✅ The mailto: link opens an email app.<br/>
                            ✅ The internal link #top jumps to the top of the page.
                        </p>
                    </Section>

                    <Tip type="info">
                        <strong>Interactive Features:</strong> Click on the highlighted elements in the text above
                        to see them highlighted in the code editor! Hover over HTML/CSS code blocks to see previews,
                        and watch the live preview update as you edit.
                    </Tip>
                </Lesson>

                <Task
                    objective="Practice creating links and navigation"
                    validations={[
                        {
                            requirement: 'Include at least one external link with target="_blank"',
                            validator: (doc) => {
                                const externalLinks = doc.querySelectorAll('a[target="_blank"]');
                                return externalLinks.length > 0;
                            }
                        },
                        {
                            requirement: 'Create an internal link that jumps to a section (using #)',
                            validator: (doc) => {
                                const internalLinks = doc.querySelectorAll('a[href^="#"]');
                                return internalLinks.length > 0;
                            }
                        },
                        {
                            requirement: 'Add an element with an ID for internal navigation',
                            validator: (doc) => {
                                const elementsWithId = doc.querySelectorAll('[id]');
                                return elementsWithId.length > 0;
                            }
                        },
                        {
                            requirement: 'Use a navigation structure with multiple links',
                            validator: (doc) => {
                                const links = doc.querySelectorAll('a');
                                return links.length >= 2;
                            }
                        }
                    ]}
                    hints={[
                        'Edit the href attributes to change link destinations',
                        'Use target="_blank" to open links in a new tab',
                        'Internal links start with # followed by an element ID',
                        'Make sure elements you link to have matching IDs',
                        'Try adding more navigation links to practice'
                    ]}
                >

                </Task>

                <Exercise
                    category="html"
                    lessonId="3"
                    title="🧠 HTML Links & Navigation Quiz"
                    description="Ready to test your understanding of HTML links and navigation? Take the interactive quiz to reinforce what you've learned!"
                    buttonText="Start Links & Navigation Quiz"
                    tipText="Make sure you've practiced with the links editor above before taking the quiz!"
                />
            </DescriptionBlock>

            <PreviewBlock />
        </Editor>
    );
};


export default Lesson3;
