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
    <title>`}<InlineEditable>My First Blog Post</InlineEditable>{`</title>
  </head>
  <body>
    <h1>`}<InlineEditable>My Journey into Coding</InlineEditable>{`</h1>
    <p>`}<InlineEditable>
      I <strong>love</strong> how <em>HTML</em> lets me bring ideas to life.
    </InlineEditable>{`</p>
    <blockquote>`}<InlineEditable>
      "First, solve the problem. Then, write the code." – John Johnson
    </InlineEditable>{`</blockquote>
    <hr>
    <p>`}<InlineEditable>
      This is the end of my first article. See you next time!
    </InlineEditable>{`</p>
  </body>
</html>`}
            </CodeBlock>

            <DescriptionBlock category="html" lessonId="2">
                <Lesson>
                    <h1>HTML Lesson 2 – Text Formatting and Structure</h1>

                    <p>
                        Welcome back! In Lesson 1, you built a barebones page with a heading and a paragraph.
                        Now we're going to make that page feel more like an article—with proper text formatting, emphasis, and structure.
                    </p>

                    <p>
                        When you start writing real content—blog posts, guides, essays—you'll use a mix of elements that describe what each piece of text means, not just how it looks. HTML is about semantics: the meaning behind the markup.
                    </p>

                    <Section title="🧩 The Building Blocks of Text">
                        <p>Let's start simple:</p>

                        <InteractiveCodeBlock language="html" hoverable={true}>
                            {`<body>
  <h1>The Joy of Coding</h1>
  <p>Coding lets you build things out of nothing but logic and imagination.</p>
</body>`}
                        </InteractiveCodeBlock>

                        <p>We already know <code>&lt;h1&gt;</code> and <code>&lt;p&gt;</code>. But HTML gives us more ways to shape and emphasize content.</p>
                    </Section>

                    <Section title="Headings (h1–h6)">
                        <p>
                            HTML has six levels of headings: <Highlight target="h1">&lt;h1&gt;</Highlight> is the most important, and <code>&lt;h6&gt;</code> is the least.
                        </p>
                        
                        <InteractiveCodeBlock language="html" hoverable={true}>
                            {`<h1>Main Title</h1>
<h2>Section Title</h2>
<h3>Subsection Title</h3>`}
                        </InteractiveCodeBlock>

                        <p>
                            Use them like an outline: each level introduces a new hierarchy.
                            Search engines and screen readers rely on them to understand the page's structure.
                        </p>
                    </Section>

                    <Section title="Bold and Italic Text">
                        <p>Two of the simplest (but most misused) formatting tags:</p>
                        
                        <InteractiveCodeBlock language="html" hoverable={true}>
                            {`<p>
  I <strong>love</strong> learning <em>frontend development</em>!
</p>`}
                        </InteractiveCodeBlock>

                        <p>
                            <HighlightTrigger target="strong">&lt;strong&gt;</HighlightTrigger>: means "this is important." Browsers render it bold by default.
                        </p>
                        <p>
                            <HighlightTrigger target="em">&lt;em&gt;</HighlightTrigger>: means "this should be emphasized." Browsers render it italic.
                        </p>

                        <Tip type="info">
                            💡 Pro tip: Prefer <code>&lt;strong&gt;</code> and <code>&lt;em&gt;</code> over <code>&lt;b&gt;</code> and <code>&lt;i&gt;</code>.
                            <code>&lt;b&gt;</code> and <code>&lt;i&gt;</code> just change style without meaning; <code>&lt;strong&gt;</code> and <code>&lt;em&gt;</code> carry semantic weight.
                        </Tip>
                    </Section>

                    <Section title="Block vs Inline Elements">
                        <p>HTML elements come in two main flavors:</p>
                        
                        <table style={{ width: "100%", borderCollapse: "collapse", marginBottom: "16px" }}>
                            <thead>
                                <tr>
                                    <th style={{ border: "1px solid #ccc", padding: "8px", backgroundColor: "#f5f5f5" }}>Type</th>
                                    <th style={{ border: "1px solid #ccc", padding: "8px", backgroundColor: "#f5f5f5" }}>Behavior</th>
                                    <th style={{ border: "1px solid #ccc", padding: "8px", backgroundColor: "#f5f5f5" }}>Example Tags</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td style={{ border: "1px solid #ccc", padding: "8px" }}>Block</td>
                                    <td style={{ border: "1px solid #ccc", padding: "8px" }}>Start on a new line and take full width</td>
                                    <td style={{ border: "1px solid #ccc", padding: "8px" }}>&lt;div&gt;, &lt;p&gt;, &lt;h1&gt;–&lt;h6&gt;, &lt;blockquote&gt;</td>
                                </tr>
                                <tr>
                                    <td style={{ border: "1px solid #ccc", padding: "8px" }}>Inline</td>
                                    <td style={{ border: "1px solid #ccc", padding: "8px" }}>Flow within text, don't break the line</td>
                                    <td style={{ border: "1px solid #ccc", padding: "8px" }}>&lt;strong&gt;, &lt;em&gt;, &lt;a&gt;, &lt;span&gt;</td>
                                </tr>
                            </tbody>
                        </table>

                        <p>Try this snippet:</p>
                        <InteractiveCodeBlock language="html" hoverable={true}>
                            {`<p>This <em>emphasized</em> word sits inline with the rest of the text.</p>

<p><strong>This is a whole block of text.</strong></p>`}
                        </InteractiveCodeBlock>

                        <p>You'll see the first stays in the same line; the second creates its own paragraph block.</p>
                    </Section>

                    <Section title="Quotations">
                        <p>When you quote someone or something, HTML gives you two tags:</p>
                        
                        <p><strong>Inline quote: <code>&lt;q&gt;</code></strong></p>
                        <InteractiveCodeBlock language="html" hoverable={true}>
                            {`<p>My teacher always said, <q>Practice makes perfect.</q></p>`}
                        </InteractiveCodeBlock>

                        <p><strong>Block quote: <code>&lt;blockquote&gt;</code> for longer quotes</strong></p>
                        <InteractiveCodeBlock language="html" hoverable={true}>
                            {`<blockquote>
  "Any sufficiently advanced technology is indistinguishable from magic."  
  – Arthur C. Clarke
</blockquote>`}
                        </InteractiveCodeBlock>
                    </Section>

                    <Section title="Horizontal Rule <hr>">
                        <p>Sometimes you want to visually separate sections of content:</p>
                        
                        <InteractiveCodeBlock language="html" hoverable={true}>
                            {`<hr>`}
                        </InteractiveCodeBlock>

                        <p>This adds a thin line break—often used in blog posts between sections.</p>
                    </Section>

                    <Tip type="info">
                        <strong>Interactive Features:</strong> Click on the highlighted elements in the text above
                        to see them highlighted in the code editor! Hover over HTML/CSS code blocks to see previews,
                        and watch the live preview update as you edit.
                    </Tip>
                </Lesson>

                <Task
                    objective="Write your own short blog post"
                    validations={[
                        {
                            requirement: 'Use at least two headings (<h1> and <h2>)',
                            validator: (doc) => {
                                const h1 = doc.querySelector('h1');
                                const h2 = doc.querySelector('h2');
                                return h1 && h2;
                            }
                        },
                        {
                            requirement: 'Include bold and italic emphasis somewhere',
                            validator: (doc) => {
                                const strong = doc.querySelector('strong');
                                const em = doc.querySelector('em');
                                return strong || em;
                            }
                        },
                        {
                            requirement: 'Add a quote (<q> or <blockquote>)',
                            validator: (doc) => {
                                const q = doc.querySelector('q');
                                const blockquote = doc.querySelector('blockquote');
                                return q || blockquote;
                            }
                        },
                        {
                            requirement: 'Separate two sections using <hr>',
                            validator: (doc) => {
                                const hr = doc.querySelector('hr');
                                return hr !== null;
                            }
                        }
                    ]}
                    hints={[
                        'You can edit the text between <!-- editable --> and <!-- /editable --> comments',
                        'Try adding an <h2> heading somewhere in your blog post',
                        'Use <strong> for important text and <em> for emphasis',
                        'The <blockquote> is already there - just customize the quote!',
                        'The <hr> tag creates a horizontal line to separate sections'
                    ]}
                >

                </Task>

                <Exercise
                    category="html"
                    lessonId="2"
                    title="🧠 HTML Text Formatting Quiz"
                    description="Ready to test your understanding of HTML text formatting and structure? Take the interactive quiz to reinforce what you've learned!"
                    buttonText="Start Text Formatting Quiz"
                    tipText="Make sure you've practiced with the blog post editor above before taking the quiz!"
                />
            </DescriptionBlock>

            <PreviewBlock />
        </Editor>
    );
};


export default Lesson2;
