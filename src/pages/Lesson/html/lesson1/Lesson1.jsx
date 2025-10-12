import React from "react";
import "./Lesson1.css";
import Editor from "../../components/Editor/editor";
import { CodeBlock, DescriptionBlock, PreviewBlock } from "../../components/Editor";
import { InlineEditable } from "../../components/Editor/components/CodeBlock/components";
import { CodeSnippet, Highlight, Tip, Section, Task, Lesson } from "../../components/Editor/components/DescriptionBlock/components";
import InteractiveCodeBlock from "../../components/Editor/components/DescriptionBlock/components/InteractiveCodeBlock";
import HighlightTrigger from "../../components/Editor/components/DescriptionBlock/components/HighlightTrigger";
import Exercise from "../../components/Editor/components/DescriptionBlock/components/Exercise";

const Lesson1 = () => {
    return (
        <Editor>
            <CodeBlock>
                {`<!DOCTYPE html>
<html>
    <head>
        <title>`}<InlineEditable>Change me!</InlineEditable>{`</title>
    </head>
    <body>
        <h1>`}<InlineEditable>Hello, world!</InlineEditable>{`</h1>
        <p>`}<InlineEditable>This is my first webpage.</InlineEditable>{`</p>
    </body>
</html>`}
            </CodeBlock>

            <DescriptionBlock category="html" lessonId="1">
                <Lesson>
                    <h1>HTML Lesson 1 – Your First Webpage</h1>

                    <p>
                        Welcome to HTML! Every webpage you've ever opened—Google, YouTube, your friend's cursed portfolio—starts with HTML.
                        Think of HTML as the skeleton of the web. It tells the browser what things are, not how they look.
                    </p>

                    <p>Let's build your very first page together.</p>

                    <Section title="The Skeleton of an HTML Page">
                        <p>Here's the absolute minimum code that makes a valid HTML document:</p>

                        <InteractiveCodeBlock language="html" hoverable={true}>
                            {`<!DOCTYPE html>
<html>
  <head>
    <title>Hello!</title>
  </head>
  <body>
    <h1>Hello, world!</h1>
    <p>This is my first webpage.</p>
  </body>
</html>`}
                        </InteractiveCodeBlock>

                        <p>Looks simple, right? Let's unpack it line by line.</p>

                        <h3><HighlightTrigger target="doctype">&lt;!DOCTYPE html&gt;</HighlightTrigger></h3>
                        <p>
                            This magical incantation tells the browser:
                            "Hey, I'm using modern HTML5. Please don't render this like it's 1999."
                        </p>
                        <p>
                            Without it, browsers sometimes fall into quirks mode, where old, inconsistent rules apply. Always include it at the top.
                        </p>

                        <h3><HighlightTrigger target="html">&lt;html&gt;</HighlightTrigger></h3>
                        <p>This is the root element. Everything else goes inside. Think of it as your project's big folder.</p>

                        <h3><HighlightTrigger target="head">&lt;head&gt;</HighlightTrigger></h3>
                        <p>The <code>&lt;head&gt;</code> is where you put metadata—stuff about the page, not stuff you see on the page.</p>
                        <p>Inside <code>&lt;head&gt;</code>, we usually include:</p>
                        <ul>
                            <li><code>&lt;title&gt;</code> → shows up in the browser tab.</li>
                            <li><code>&lt;meta&gt;</code> tags → describe your page (useful for SEO + social media previews).</li>
                            <li>Links to CSS or JS files.</li>
                        </ul>
                        <p>For now, we'll just stick to <code>&lt;title&gt;</code>.</p>

                        <h3><HighlightTrigger target="body">&lt;body&gt;</HighlightTrigger></h3>
                        <p>The <code>&lt;body&gt;</code> is where the visible content lives. Headings, paragraphs, images, buttons—all go here.</p>
                        <p>Inside our <code>&lt;body&gt;</code> we've got:</p>
                        <CodeSnippet language="html">
                            {`<h1>Hello, world!</h1>
<p>This is my first webpage.</p>`}
                        </CodeSnippet>
                    </Section>

                    <Section title="Headings <h1> to <h6>">
                        <p>
                            <Highlight target="headings">&lt;h1&gt;</Highlight> is the biggest, most important heading.
                            <code>&lt;h2&gt;</code> is slightly smaller, and so on until <code>&lt;h6&gt;</code>.
                        </p>
                        <p>
                            Browsers use them to structure the document. Search engines love them, too—they help understand what's important.
                        </p>
                    </Section>

                    <Section title="Paragraph <p>">
                        <p>
                            A <Highlight target="paragraph">&lt;p&gt;</Highlight> defines a paragraph.
                            It's block-level (takes the whole width) and is the bread-and-butter for normal text.
                        </p>
                    </Section>

                    <Tip type="info">
                        <strong>Interactive Features:</strong> Click on the highlighted elements in the text above
                        to see them highlighted in the code editor! Hover over HTML/CSS code blocks to see previews,
                        and watch the live preview update as you edit.
                    </Tip>
                </Lesson>

                <Task
                    objective="Create your first personalized webpage"
                    requirements={[
                        'The <title> says "My Awesome Website"',
                        'The <h1> contains your name',
                        'The <p> says "I\'m learning HTML!"'
                    ]}
                    hints={[
                        'Edit only the text between the tags, not the tags themselves',
                        'The preview will update automatically as you type',
                        'Make sure to keep the quotes around attribute values'
                    ]}
                >
                    <h2>🛠️ Your Mission</h2>
                    <p>
                        Time to get your hands dirty! You've learned the basics of HTML structure,
                        now let's make it personal. Look at the code editor on the left — notice how
                        some parts are highlighted in blue? Those are the <strong>editable zones</strong>.
                    </p>

                    <p>Your task is simple but important:</p>

                    <div className="task-objective">
                        <h3>🎯 What You Need to Do:</h3>
                        <ol>
                            <li>
                                <strong>Change the title:</strong> Make the <code>&lt;title&gt;</code>
                                say "My Awesome Website" (this shows up in the browser tab)
                            </li>
                            <li>
                                <strong>Add your name:</strong> Replace "Hello, world!" in the
                                <code>&lt;h1&gt;</code> with your actual name
                            </li>
                            <li>
                                <strong>Update the paragraph:</strong> Change the <code>&lt;p&gt;</code>
                                text to "I'm learning HTML!"
                            </li>
                        </ol>
                    </div>
                </Task>

                <Exercise
                    category="html"
                    lessonId="1"
                    title="🧠 HTML Knowledge Check"
                    description="Ready to test your understanding of HTML basics? Take the interactive quiz to reinforce what you've learned!"
                    buttonText="Start HTML Quiz"
                    tipText="Make sure you've practiced with the code editor above before taking the quiz!"
                />
            </DescriptionBlock>

            <PreviewBlock />
        </Editor>
    );
};


export default Lesson1;
