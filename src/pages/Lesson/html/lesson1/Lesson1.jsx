import React from "react";
import "./Lesson1.css";
import Editor from "../../components/Editor/editor";
import { CodeBlock, DescriptionBlock, PreviewBlock } from "../../components/Editor";
import { Editable, InlineEditable } from "../../components/Editor/components/CodeBlock/components";
import { CodeSnippet, Highlight, Tip, Section, Task, Quiz, Lesson, TaskWrapper, QuizWrapper } from "../../components/Editor/components/DescriptionBlock/components";

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

            <DescriptionBlock>
                <Lesson>
                    <h1>HTML Lesson 1 – Your First Webpage</h1>

                    <p>
                        Welcome to HTML! Every webpage you've ever opened—Google, YouTube, your friend's cursed portfolio—starts with HTML.
                        Think of HTML as the skeleton of the web. It tells the browser what things are, not how they look.
                    </p>

                    <p>Let's build your very first page together.</p>

                    <Section title="The Skeleton of an HTML Page">
                        <p>Here's the absolute minimum code that makes a valid HTML document:</p>

                        <CodeSnippet language="html">
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
                        </CodeSnippet>

                        <p>Looks simple, right? Let's unpack it line by line.</p>

                        <h3><Highlight target="doctype">&lt;!DOCTYPE html&gt;</Highlight></h3>
                        <p>
                            This magical incantation tells the browser:
                            "Hey, I'm using modern HTML5. Please don't render this like it's 1999."
                        </p>
                        <p>
                            Without it, browsers sometimes fall into quirks mode, where old, inconsistent rules apply. Always include it at the top.
                        </p>

                        <h3><Highlight target="html">&lt;html&gt;</Highlight></h3>
                        <p>This is the root element. Everything else goes inside. Think of it as your project's big folder.</p>

                        <h3><Highlight target="head">&lt;head&gt;</Highlight></h3>
                        <p>The <code>&lt;head&gt;</code> is where you put metadata—stuff about the page, not stuff you see on the page.</p>
                        <p>Inside <code>&lt;head&gt;</code>, we usually include:</p>
                        <ul>
                            <li><code>&lt;title&gt;</code> → shows up in the browser tab.</li>
                            <li><code>&lt;meta&gt;</code> tags → describe your page (useful for SEO + social media previews).</li>
                            <li>Links to CSS or JS files.</li>
                        </ul>
                        <p>For now, we'll just stick to <code>&lt;title&gt;</code>.</p>

                        <h3><Highlight target="body">&lt;body&gt;</Highlight></h3>
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

                    <Section title="Try It Yourself">
                        <p>Here's some starter code (non-editable parts locked):</p>
                        <p>Try changing the <code>&lt;title&gt;</code>, <code>&lt;h1&gt;</code>, and <code>&lt;p&gt;</code> to make the page yours.</p>

                        <Tip type="info">
                            Click on the highlighted elements in the text above to see them highlighted in the code editor!
                        </Tip>
                    </Section>
                </Lesson>

                <TaskWrapper>
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
                        <p>👉 Update the page so that:</p>
                        <ul>
                            <li>The <code>&lt;title&gt;</code> says "My Awesome Website".</li>
                            <li>The <code>&lt;h1&gt;</code> contains your name.</li>
                            <li>The <code>&lt;p&gt;</code> says "I'm learning HTML!".</li>
                        </ul>
                        <p>When you're done, preview your page in the live editor.</p>
                    </Task>
                </TaskWrapper>

                <QuizWrapper>
                    <Quiz
                        moduleId="html"
                        lessonId="1"
                        questions={5}
                        duration={3}
                        passPercentage={80}
                    >
                        <p>Test your understanding of HTML basics:</p>
                        <ul>
                            <li>HTML document structure</li>
                            <li>DOCTYPE declaration</li>
                            <li>Head vs Body sections</li>
                            <li>Basic HTML elements</li>
                            <li>Proper HTML syntax</li>
                        </ul>
                    </Quiz>
                </QuizWrapper>
            </DescriptionBlock>

            <PreviewBlock />
        </Editor>
    );
};

export default Lesson1;
