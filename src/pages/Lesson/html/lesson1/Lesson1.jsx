import React from "react";
import "./Lesson1.css";
import Editor from "../../components/Editor/editor";
import { CodeBlock, DescriptionBlock, PreviewBlock } from "../../components/Editor";
import { Editable, InlineEditable } from "../../components/Editor/components/CodeBlock/components";
import { CodeSnippet, Highlight, Tip, Section, Task, Quiz, Lesson, TaskWrapper, QuizWrapper } from "../../components/Editor/components/DescriptionBlock/components";
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

                    <Section title="Try It Yourself">
                        <p>
                            Here's some starter code (non-editable parts locked). The editable zones are highlighted
                            in blue in the code editor to the left. Try changing the <code>&lt;title&gt;</code>,
                            <code>&lt;h1&gt;</code>, and <code>&lt;p&gt;</code> to make the page yours.
                        </p>

                        <InteractiveCodeBlock language="html" hoverable={true}>
                            {`<!DOCTYPE html>
<html>
  <head>
    <title><!-- editable -->Change me!<!-- /editable --></title>
  </head>
  <body>
    <h1><!-- editable -->Hello, world!<!-- /editable --></h1>
    <p><!-- editable -->This is my first webpage.<!-- /editable --></p>
  </body>
</html>`}
                        </InteractiveCodeBlock>

                        <Tip type="info">
                            <strong>Interactive Features:</strong> Click on the highlighted elements in the text above
                            to see them highlighted in the code editor! Hover over HTML/CSS code blocks to see previews,
                            and watch the live preview update as you edit.
                        </Tip>

                        <p>
                            <strong>What makes this special?</strong> Notice how some parts are marked as
                            <code>&lt;!-- editable --&gt;</code>? These are the zones you can modify. The rest of the
                            HTML structure stays locked to prevent syntax errors while you're learning.
                        </p>
                    </Section>
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

                    <Tip type="pro">
                        <strong>Pro tip:</strong> As you type, watch the preview on the right update in real-time.
                        This is how web development works — you write code, and the browser renders it instantly!
                    </Tip>

                    <p>
                        When you're done, you'll have created your very first personalized webpage.
                        It might seem simple, but you've just joined the ranks of billions of web pages
                        that started exactly like this.
                    </p>

                    <div className="success-criteria">
                        <h4>✅ How You'll Know You Succeeded:</h4>
                        <ul>
                            <li>The browser tab shows "My Awesome Website"</li>
                            <li>The big heading displays your name</li>
                            <li>The paragraph says "I'm learning HTML!"</li>
                            <li>The live preview matches your changes</li>
                        </ul>
                    </div>
                </Task>

                <Exercise
                    questions={[
                        {
                            id: 1,
                            question: "What does <!DOCTYPE html> do?",
                            options: [
                                "Creates the <html> element",
                                "Tells the browser this is HTML5",
                                "Adds metadata to the page",
                                "Can be skipped safely"
                            ],
                            correct: 1,
                            explanation: "The DOCTYPE declaration tells the browser to render the page in HTML5 standards mode. Without it, browsers might fall into 'quirks mode' where they use old, inconsistent rendering rules from the 1990s. Always include it!"
                        },
                        {
                            id: 2,
                            question: "Which section controls what appears in the browser tab?",
                            options: [
                                "<body>",
                                "<meta>",
                                "<title>",
                                "<h1>"
                            ],
                            correct: 2,
                            explanation: "The <title> element inside the <head> section determines what text appears in the browser tab. It's also what shows up when you bookmark a page or share it on social media."
                        },
                        {
                            id: 3,
                            question: "Where does the main visible content go?",
                            options: [
                                "<head>",
                                "<body>",
                                "<meta>",
                                "<footer>"
                            ],
                            correct: 1,
                            explanation: "The <body> element contains all the visible content of your webpage — headings, paragraphs, images, buttons, everything users can see and interact with."
                        },
                        {
                            id: 4,
                            question: "How many heading levels exist in HTML?",
                            options: [
                                "3",
                                "6",
                                "Unlimited",
                                "10"
                            ],
                            correct: 1,
                            explanation: "HTML has exactly 6 heading levels: <h1> through <h6>. <h1> is the most important (biggest), and <h6> is the least important (smallest). Use them to create a proper document structure."
                        },
                        {
                            id: 5,
                            question: "What's the correct way to write a paragraph element?",
                            options: [
                                "<p>Hello<p>",
                                "<paragraph>Hello</paragraph>",
                                "<p>Hello</p>",
                                "<para>Hello</para>"
                            ],
                            correct: 2,
                            explanation: "HTML elements need both opening and closing tags. The paragraph element is <p> for opening and </p> for closing. Most HTML elements follow this pattern: <tagname>content</tagname>."
                        }
                    ]}
                >
                    <h2>🎯 Knowledge Check</h2>
                    <p>
                        Time to lock in what you've learned! This quiz covers the essential HTML concepts
                        from this lesson. Don't worry if you don't get them all right the first time —
                        that's how learning works.
                    </p>

                    <p>
                        <strong>What you'll be tested on:</strong>
                    </p>
                    <ul>
                        <li><strong>HTML document structure</strong> — the skeleton every webpage needs</li>
                        <li><strong>DOCTYPE declaration</strong> — that magical first line</li>
                        <li><strong>Head vs Body sections</strong> — metadata vs visible content</li>
                        <li><strong>Basic HTML elements</strong> — headings and paragraphs</li>
                        <li><strong>Proper HTML syntax</strong> — how to write clean, valid code</li>
                    </ul>

                    <Tip type="info">
                        <strong>Quiz tip:</strong> Each question comes with a detailed explanation.
                        Even if you get it wrong, you'll understand why the correct answer is right!
                    </Tip>
                </Exercise>
            </DescriptionBlock>

            <PreviewBlock />
        </Editor>
    );
};


export default Lesson1;
