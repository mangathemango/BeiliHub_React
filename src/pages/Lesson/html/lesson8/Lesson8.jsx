import React from "react";
import "./Lesson8.css";
import Editor from "../../components/Editor/editor";
import { CodeBlock, DescriptionBlock, PreviewBlock } from "../../components/Editor";
import { InlineEditable } from "../../components/Editor/components/CodeBlock/components";
import { CodeSnippet, Highlight, Tip, Section, Task, Lesson } from "../../components/Editor/components/DescriptionBlock/components";
import InteractiveCodeBlock from "../../components/Editor/components/DescriptionBlock/components/InteractiveCodeBlock";
import HighlightTrigger from "../../components/Editor/components/DescriptionBlock/components/HighlightTrigger";
import Exercise from "../../components/Editor/components/DescriptionBlock/components/Exercise";

const Lesson8 = () => {
    return (
        <Editor>
            <CodeBlock>
                {`<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>`}<InlineEditable>Mango's Portfolio</InlineEditable>{`</title>
</head>
<body>
  `}<InlineEditable>&lt;header&gt;</InlineEditable>{`
    <h1>Mango's Portfolio</h1>
    <p>Welcome to my projects page!</p>
  `}<InlineEditable>&lt;/header&gt;</InlineEditable>{`

  `}<InlineEditable>&lt;nav&gt;</InlineEditable>{`
    <a href="#about">About Me</a>
    <a href="#projects">Projects</a>
    <a href="#contact">Contact</a>
  `}<InlineEditable>&lt;/nav&gt;</InlineEditable>{`

  `}<InlineEditable>&lt;main&gt;</InlineEditable>{`
    `}<InlineEditable>&lt;section id="about"&gt;</InlineEditable>{`
      <h2>About Me</h2>
      <p>I'm Mango, a CS student who loves Rust 🦀 and HTML 🍊.</p>
    `}<InlineEditable>&lt;/section&gt;</InlineEditable>{`

    `}<InlineEditable>&lt;section id="projects"&gt;</InlineEditable>{`
      <h2>Projects</h2>
      <p>Check out my cool Raspberry Pi robot 🤖!</p>
    `}<InlineEditable>&lt;/section&gt;</InlineEditable>{`
  `}<InlineEditable>&lt;/main&gt;</InlineEditable>{`

  `}<InlineEditable>&lt;footer&gt;</InlineEditable>{`
    <p>© 2025 Mango. All rights reserved.</p>
  `}<InlineEditable>&lt;/footer&gt;</InlineEditable>{`
</body>
</html>`}
            </CodeBlock>

            <DescriptionBlock category="html" lessonId="8">
                <Lesson>
                    <h1>HTML Lesson 8: Semantic HTML</h1>

                    <p>
                        So far you've probably been sprinkling <code>&lt;div&gt;</code> and <code>&lt;span&gt;</code> tags like confetti �. They're useful, but they don't mean anything by themselves.
                    </p>
                    <p>
                        That's where semantic HTML comes in: using elements that describe what the content actually is. This makes your website friendlier for:
                    </p>
                    <ul>
                        <li>Screen readers (for accessibility 🦻)</li>
                        <li>Search engines (SEO stuff so Google doesn't ignore you 👀)</li>
                        <li>Other devs (so your code isn't spaghetti)</li>
                    </ul>

                    <Section title="🧩 Common Semantic Elements">
                        <p><strong>&lt;header&gt;</strong></p>
                        <ul>
                            <li>Top section of a page or article.</li>
                            <li>Usually has logo, nav, site title.</li>
                        </ul>

                        <p><strong>&lt;nav&gt;</strong></p>
                        <ul>
                            <li>Holds navigation links.</li>
                        </ul>

                        <p><strong>&lt;main&gt;</strong></p>
                        <ul>
                            <li>The unique content of the page (only one per page).</li>
                        </ul>

                        <p><strong>&lt;article&gt;</strong></p>
                        <ul>
                            <li>Self-contained chunk of content (like a blog post, card, or forum post).</li>
                        </ul>

                        <p><strong>&lt;section&gt;</strong></p>
                        <ul>
                            <li>Groups related content under a theme (e.g. "Features section" on a homepage).</li>
                        </ul>

                        <p><strong>&lt;aside&gt;</strong></p>
                        <ul>
                            <li>Extra info like sidebars, ads, related links.</li>
                        </ul>

                        <p><strong>&lt;footer&gt;</strong></p>
                        <ul>
                            <li>Bottom of page/article. Often has contact info, copyright, site links.</li>
                        </ul>
                    </Section>

                    <Section title="�️ Example: Before vs After">
                        <p><strong>Non-semantic version (meh):</strong></p>
                        <InteractiveCodeBlock language="html" hoverable={true}>
                            {`<div>
  <div>
    <h1>My Blog</h1>
  </div>
  <div>
    <a href="/">Home</a>
    <a href="/about">About</a>
  </div>
  <div>
    <p>Welcome to my blog!</p>
  </div>
  <div>
    <p>© 2025 Mango</p>
  </div>
</div>`}
                        </InteractiveCodeBlock>

                        <p><strong>Semantic version (chef's kiss ✨):</strong></p>
                        <InteractiveCodeBlock language="html" hoverable={true}>
                            {`<header>
  <h1>My Blog</h1>
</header>
<nav>
  <a href="/">Home</a>
  <a href="/about">About</a>
</nav>
<main>
  <p>Welcome to my blog!</p>
</main>
<footer>
  <p>© 2025 Mango</p>
</footer>`}
                        </InteractiveCodeBlock>

                        <p>Much cleaner, right? Now even a blind screen reader can tell the structure of the site.</p>
                    </Section>

                    <Section title="💡 More Semantic Examples">
                        <p><strong>Blog article structure:</strong></p>
                        <InteractiveCodeBlock language="html" hoverable={true}>
                            {`<article>
  <header>
    <h1>How to Learn HTML</h1>
    <p>Published on <time>March 15, 2025</time></p>
  </header>
  
  <section>
    <h2>Getting Started</h2>
    <p>First, you'll need a text editor...</p>
  </section>
  
  <aside>
    <h3>Related Articles</h3>
    <ul>
      <li><a href="/css-basics">CSS Basics</a></li>
      <li><a href="/js-intro">JavaScript Intro</a></li>
    </ul>
  </aside>
  
  <footer>
    <p>Author: Mango Dev</p>
  </footer>
</article>`}
                        </InteractiveCodeBlock>

                        <p><strong>Complete page layout:</strong></p>
                        <InteractiveCodeBlock language="html" hoverable={true}>
                            {`<header>
  <h1>Tech Blog</h1>
  <nav>
    <a href="/">Home</a>
    <a href="/tutorials">Tutorials</a>
    <a href="/about">About</a>
  </nav>
</header>

<main>
  <section id="latest-posts">
    <h2>Latest Posts</h2>
    <!-- articles go here -->
  </section>
</main>

<aside>
  <h2>Popular Tags</h2>
  <ul>
    <li>HTML</li>
    <li>CSS</li>
    <li>JavaScript</li>
  </ul>
</aside>

<footer>
  <p>© 2025 Tech Blog. All rights reserved.</p>
</footer>`}
                        </InteractiveCodeBlock>
                    </Section>

                    <Tip type="info">
                        <strong>Interactive Features:</strong> Click on the highlighted elements in the text above
                        to see them highlighted in the code editor! Practice replacing div elements with
                        proper semantic HTML elements and watch how the structure becomes more meaningful.
                    </Tip>
                </Lesson>

                <Task
                    objective="Convert a basic portfolio layout to use semantic HTML elements"
                    validations={[
                        {
                            requirement: 'Use <header> to wrap the portfolio title and welcome message',
                            validator: (doc) => {
                                const header = doc.querySelector('header');
                                const hasH1 = header ? header.querySelector('h1') : false;
                                return header && hasH1;
                            }
                        },
                        {
                            requirement: 'Use <nav> to contain the navigation links',
                            validator: (doc) => {
                                const nav = doc.querySelector('nav');
                                const hasLinks = nav ? nav.querySelectorAll('a').length >= 2 : false;
                                return nav && hasLinks;
                            }
                        },
                        {
                            requirement: 'Use <main> to wrap the main content sections',
                            validator: (doc) => {
                                const main = doc.querySelector('main');
                                return main !== null;
                            }
                        },
                        {
                            requirement: 'Use <section> elements for the About Me and Projects content',
                            validator: (doc) => {
                                const sections = doc.querySelectorAll('section');
                                return sections.length >= 2;
                            }
                        },
                        {
                            requirement: 'Use <footer> for the copyright information',
                            validator: (doc) => {
                                const footer = doc.querySelector('footer');
                                return footer !== null;
                            }
                        }
                    ]}
                    hints={[
                        'Replace the first <div> with <header> to wrap the title and intro',
                        'Use <nav> instead of the div containing navigation links',
                        'Wrap the About Me and Projects sections in <main>',
                        'Convert the content divs to <section> elements with proper IDs',
                        'Replace the last <div> with <footer> for copyright info'
                    ]}
                >

                </Task>

                <Exercise
                    category="html"
                    lessonId="8"
                    title="🧠 HTML Semantic Elements Quiz"
                    description="Ready to test your understanding of semantic HTML elements and proper page structure? Take the interactive quiz to reinforce what you've learned!"
                    buttonText="Start Semantic HTML Quiz"
                    tipText="Make sure you've practiced with semantic elements above before taking the quiz!"
                />
            </DescriptionBlock>

            <PreviewBlock />
        </Editor>
    );
};

export default Lesson8;
            