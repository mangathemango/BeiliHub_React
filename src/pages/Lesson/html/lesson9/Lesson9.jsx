import React from "react";
import "./Lesson9.css";
import Editor from "../../components/Editor/editor";
import { CodeBlock, DescriptionBlock, PreviewBlock } from "../../components/Editor";
import { InlineEditable } from "../../components/Editor/components/CodeBlock/components";
import { CodeSnippet, Highlight, Tip, Section, Task, Lesson } from "../../components/Editor/components/DescriptionBlock/components";
import InteractiveCodeBlock from "../../components/Editor/components/DescriptionBlock/components/InteractiveCodeBlock";
import HighlightTrigger from "../../components/Editor/components/DescriptionBlock/components/HighlightTrigger";
import Exercise from "../../components/Editor/components/DescriptionBlock/components/Exercise";

const Lesson9 = () => {
    return (
        <Editor>
            <CodeBlock>
                {`<!DOCTYPE html>
<html lang="en">
<head>
  `}<InlineEditable>&lt;!-- Add metadata here --&gt;</InlineEditable>{`
</head>
<body>
  <h1>Spicy Ramen Recipe</h1>
  <p>This ramen will set your soul on fire 🔥. Made with chili oil, garlic, and fresh noodles.</p>
</body>
</html>`}
            </CodeBlock>

            <DescriptionBlock category="html" lessonId="9">
                <Lesson>
                    <h1>HTML Lesson 9: Metadata & SEO</h1>

                    <p>
                        When you visit a website, the first thing you see is the page content. But there's also hidden information baked into the page that you don't see directly: <strong>metadata</strong>.
                    </p>
                    <p>
                        Metadata lives in the <code>&lt;head&gt;</code> of an HTML document and tells browsers, search engines, and social media platforms how to handle your page. It's like the ID card of your site 🪪.
                    </p>

                    <Section title="1️⃣ The &lt;head&gt; Section">
                        <p>The <code>&lt;head&gt;</code> is the backstage area of your website:</p>
                        <ul>
                            <li>It doesn't show on the screen.</li>
                            <li>It stores information like the page title, description, icons, links to CSS, etc.</li>
                        </ul>

                        <p><strong>Example:</strong></p>
                        <InteractiveCodeBlock language="html" hoverable={true}>
                            {`<head>
  <title>Mango's Noodle Blog</title>
  <meta charset="UTF-8">
  <meta name="description" content="A blog where Mango 🍜 reviews noodles around the world.">
  <meta name="author" content="Mango">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
</head>`}
                        </InteractiveCodeBlock>
                    </Section>

                    <Section title="2️⃣ Common Metadata Tags">
                        <p><strong>&lt;title&gt;</strong> → Shows in browser tab & search engine results.</p>
                        
                        <p><strong>&lt;meta charset="UTF-8"&gt;</strong> → Defines text encoding (UTF-8 = supports almost all characters).</p>
                        
                        <p><strong>&lt;meta name="description" content="..."&gt;</strong> → Short summary, important for SEO.</p>
                        
                        <p><strong>&lt;meta name="keywords" content="..."&gt;</strong> → Old-school SEO trick (mostly ignored by Google now).</p>
                        
                        <p><strong>&lt;meta name="author" content="..."&gt;</strong> → Page author.</p>
                        
                        <p><strong>&lt;meta name="viewport"&gt;</strong> → Controls responsive design on mobile devices.</p>
                    </Section>

                    <Section title="3️⃣ Metadata & SEO">
                        <p>SEO (Search Engine Optimization) = making your site easier to find & rank in search results.</p>
                        <p>Search engines look at:</p>
                        <ul>
                            <li>Content relevance (do your words match the query?)</li>
                            <li>Title & description meta tags (do they summarize the page?)</li>
                            <li>Headings & semantic structure (do you use <code>&lt;h1&gt;</code>, <code>&lt;h2&gt;</code> correctly?)</li>
                            <li>Links & speed (how user-friendly is your site?)</li>
                        </ul>
                        
                        <p>🥭 <strong>TLDR:</strong> Metadata won't magically put you on top of Google, but without it, your site will look incomplete & unprofessional.</p>
                    </Section>

                    <Section title="4️⃣ Social Media Metadata (Bonus)">
                        <p>Platforms like Twitter and Facebook use Open Graph tags to make previews look nice:</p>
                        <InteractiveCodeBlock language="html" hoverable={true}>
                            {`<meta property="og:title" content="Mango's Noodle Blog">
<meta property="og:description" content="Join Mango on a noodle adventure 🍜">
<meta property="og:image" content="noodle.jpg">`}
                        </InteractiveCodeBlock>
                        
                        <p>When someone shares your site, it'll display the right title, description, and image.</p>
                    </Section>

                    <Tip type="info">
                        <strong>Pro Tip:</strong> Good metadata is invisible to visitors but crucial for search engines, 
                        social media previews, and accessibility tools. It's like having a well-organized filing system 
                        that everyone can understand! 📁
                    </Tip>
                </Lesson>

                <Task
                    objective="Add proper metadata to a noodle recipe page"
                    validations={[
                        {
                            requirement: 'Add a <title> for the page',
                            validator: (doc) => {
                                const title = doc.querySelector('title');
                                return title && title.textContent.trim().length > 0;
                            }
                        },
                        {
                            requirement: 'Add charset="UTF-8" meta tag',
                            validator: (doc) => {
                                const charset = doc.querySelector('meta[charset="UTF-8"]');
                                return charset !== null;
                            }
                        },
                        {
                            requirement: 'Add a meta description about the ramen recipe (at least 20 characters)',
                            validator: (doc) => {
                                const description = doc.querySelector('meta[name="description"]');
                                return description && description.getAttribute('content').length >= 20;
                            }
                        },
                        {
                            requirement: 'Add a meta author tag',
                            validator: (doc) => {
                                const author = doc.querySelector('meta[name="author"]');
                                return author !== null;
                            }
                        },
                        {
                            requirement: 'Add a viewport meta tag for responsive design',
                            validator: (doc) => {
                                const viewport = doc.querySelector('meta[name="viewport"]');
                                return viewport !== null;
                            }
                        }
                    ]}
                    hints={[
                        'Add <title>Spicy Ramen Recipe</title> inside the <head>',
                        'Include <meta charset="UTF-8"> for proper character encoding',
                        'Add <meta name="description" content="..."> with a description of the recipe',
                        'Include <meta name="author" content="Your Name">',
                        'Add <meta name="viewport" content="width=device-width, initial-scale=1.0"> for mobile responsiveness'
                    ]}
                >

                </Task>

                <Exercise
                    category="html"
                    lessonId="9"
                    title="🧠 HTML Metadata & SEO Quiz"
                    description="Test your knowledge of HTML metadata, head section elements, and SEO best practices!"
                    buttonText="Start Metadata Quiz"
                    tipText="Make sure you've completed the metadata task above before taking the quiz!"
                />
            </DescriptionBlock>

            <PreviewBlock />
        </Editor>
    );
};

export default Lesson9;
            