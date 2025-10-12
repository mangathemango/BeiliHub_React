import React from "react";
import "./Lesson4.css";
import Editor from "../../components/Editor/editor";
import { CodeBlock, DescriptionBlock, PreviewBlock } from "../../components/Editor";
import { InlineEditable } from "../../components/Editor/components/CodeBlock/components";
import { CodeSnippet, Highlight, Tip, Section, Task, Lesson } from "../../components/Editor/components/DescriptionBlock/components";
import InteractiveCodeBlock from "../../components/Editor/components/DescriptionBlock/components/InteractiveCodeBlock";
import HighlightTrigger from "../../components/Editor/components/DescriptionBlock/components/HighlightTrigger";
import Exercise from "../../components/Editor/components/DescriptionBlock/components/Exercise";

const Lesson4 = () => {
    return (
        <Editor>
            <CodeBlock>
                {`<!DOCTYPE html>
<html>
<head>
  <title>`}<InlineEditable>Media Lesson</InlineEditable>{`</title>
</head>
<body>
  <h1>My Media Page</h1>
  
  <!-- Add an image here -->
  <img src="`}<InlineEditable>https://placekitten.com/300/200</InlineEditable>{`" alt="`}<InlineEditable>A cute kitten</InlineEditable>{`">
  
  <!-- Add an audio player here -->
  <audio `}<InlineEditable>controls</InlineEditable>{`>
    <source src="audio-file.mp3" type="audio/mpeg">
    Your browser does not support the audio element.
  </audio>
  
  <!-- Add a video player here -->
  <video width="`}<InlineEditable>320</InlineEditable>{`" height="`}<InlineEditable>240</InlineEditable>{`" `}<InlineEditable>controls</InlineEditable>{`>
    <source src="sample-video.mp4" type="video/mp4">
    Your browser does not support the video tag.
  </video>
  
  <!-- Bonus: Add a YouTube embed here -->
  <iframe width="560" height="315" 
    src="`}<InlineEditable>https://www.youtube.com/embed/dQw4w9WgXcQ</InlineEditable>{`"
    frameborder="0" allowfullscreen>
  </iframe>
</body>
</html>`}
            </CodeBlock>

            <DescriptionBlock category="html" lessonId="4">
                <Lesson>
                    <h1>HTML Lesson 4: Images & Media</h1>

                    <p>
                        Up until now, your pages have been text-only. Cute, but not very webby. HTML lets you go full multimedia: images, audio, and video.
                    </p>

                    <p>The three main elements:</p>
                    <ul>
                        <li><code>&lt;img&gt;</code> → images</li>
                        <li><code>&lt;audio&gt;</code> → audio files</li>
                        <li><code>&lt;video&gt;</code> → video files</li>
                    </ul>
                    <p>And when you're feeling extra: <code>&lt;iframe&gt;</code> for embedding external media (like YouTube).</p>

                    <Section title="�️ Images with &lt;img&gt;">
                        <p>The <code>&lt;img&gt;</code> element inserts an image into your page. Unlike <code>&lt;p&gt;</code> or <code>&lt;h1&gt;</code>, it doesn't wrap text; it's self-closing.</p>

                        <InteractiveCodeBlock language="html" hoverable={true}>
                            {`<img src="cat.jpg" alt="A cute cat sitting on a couch">`}
                        </InteractiveCodeBlock>

                        <p>
                            ✅ <HighlightTrigger target="src">src</HighlightTrigger> → the source (where the file lives).<br/>
                            ✅ <HighlightTrigger target="alt">alt</HighlightTrigger> → alternative text. Shown when the image can't load, and read aloud by screen readers.
                        </p>

                        <Tip type="info">
                            <strong>👉 Accessibility Tip:</strong> Don't skip alt. If your cat pic fails, a user with low vision should still know it's "a cute cat sitting on a couch."
                        </Tip>
                    </Section>

                    <Section title="⚖️ Absolute vs Relative Paths">
                        <p>This is where most beginners go: <em>"Why tf does my image not load???"</em></p>
                        <p>🔍 The answer: your file path is wrong. Let's fix that.</p>

                        <p><strong>Absolute Path</strong></p>
                        <p>An absolute path points to the exact location of a file on the internet or your computer. Think of it like a full street address.</p>
                        
                        <InteractiveCodeBlock language="html" hoverable={true}>
                            {`<img src="https://placekitten.com/200/300" alt="Random kitten">`}
                        </InteractiveCodeBlock>

                        <p>
                            ✅ Always includes http:// or https:// if it's online.<br/>
                            ✅ Works anywhere, because it's the complete URL.<br/>
                            ❌ Downsides: If the image is moved or taken down, your site breaks.
                        </p>

                        <p><strong>Relative Path</strong></p>
                        <p>A relative path points to a file relative to where your HTML file is. Think of it like saying "the Starbucks two blocks from here" instead of "Starbucks at 123 Main St, New York, NY."</p>

                        <p>Imagine your project folder looks like this:</p>
                        <InteractiveCodeBlock language="text" hoverable={true}>
                            {`project/
│   index.html
└── images/
    └── dog.png`}
                        </InteractiveCodeBlock>

                        <p>Inside index.html, you'd write:</p>
                        <InteractiveCodeBlock language="html" hoverable={true}>
                            {`<img src="images/dog.png" alt="A playful dog">`}
                        </InteractiveCodeBlock>

                        <p>👉 The browser starts from the current file's location (index.html) and looks inside the images/ folder.</p>

                        <p><strong>More relative tricks:</strong></p>
                        <ul>
                            <li><code>./</code> → current folder</li>
                            <li><code>../</code> → go up one folder</li>
                        </ul>

                        <p>Example:</p>
                        <InteractiveCodeBlock language="text" hoverable={true}>
                            {`project/
│
├── pages/
│   └── about.html
└── images/
    └── logo.png`}
                        </InteractiveCodeBlock>

                        <p>If you're in about.html and want to use logo.png:</p>
                        <InteractiveCodeBlock language="html" hoverable={true}>
                            {`<img src="../images/logo.png" alt="Site logo">`}
                        </InteractiveCodeBlock>
                        <p>Because you have to step "up" from pages/ into the main folder first.</p>
                    </Section>

                    <Section title="🎵 Audio with &lt;audio&gt;">
                        <p>The <code>&lt;audio&gt;</code> element embeds sound. By default, it's invisible, but adding controls gives the user play/pause buttons.</p>
                        
                        <InteractiveCodeBlock language="html" hoverable={true}>
                            {`<audio controls>
  <source src="song.mp3" type="audio/mpeg">
  Your browser does not support the audio element.
</audio>`}
                        </InteractiveCodeBlock>

                        <p>
                            ✅ <code>controls</code> → shows the audio UI.<br/>
                            ✅ <code>autoplay</code> → starts automatically (usually blocked unless muted).<br/>
                            ✅ <code>loop</code> → repeats when finished.
                        </p>
                    </Section>

                    <Section title="🎬 Video with &lt;video&gt;">
                        <p>The <code>&lt;video&gt;</code> element works almost the same as <code>&lt;audio&gt;</code>, but adds size controls:</p>
                        
                        <InteractiveCodeBlock language="html" hoverable={true}>
                            {`<video width="320" height="240" controls>
  <source src="movie.mp4" type="video/mp4">
  Your browser does not support the video tag.
</video>`}
                        </InteractiveCodeBlock>

                        <p><strong>Optional attributes:</strong></p>
                        <ul>
                            <li><code>autoplay</code> → play on page load (again, often blocked).</li>
                            <li><code>muted</code> → start muted.</li>
                            <li><code>loop</code> → repeat forever.</li>
                        </ul>
                    </Section>

                    <Section title="✨ Bonus: Embedding External Media with &lt;iframe&gt;">
                        <p>For stuff like YouTube, Spotify, Google Maps → use <code>&lt;iframe&gt;</code>.</p>
                        
                        <InteractiveCodeBlock language="html" hoverable={true}>
                            {`<iframe width="560" height="315"
  src="https://www.youtube.com/embed/dQw4w9WgXcQ"
  frameborder="0"
  allowfullscreen>
</iframe>`}
                        </InteractiveCodeBlock>

                        <p>👉 <code>&lt;iframe&gt;</code> is basically like cutting a hole in your page and peeking into another page.</p>
                    </Section>

                    <Tip type="info">
                        <strong>Interactive Features:</strong> Click on the highlighted elements in the text above
                        to see them highlighted in the code editor! Edit the src URLs, alt text, and attributes
                        to practice with different media files.
                    </Tip>
                </Lesson>

                <Task
                    objective="Create a multimedia page with images, audio, and video"
                    validations={[
                        {
                            requirement: 'Include at least one image with alt text',
                            validator: (doc) => {
                                const images = doc.querySelectorAll('img[alt]');
                                return images.length > 0 && images[0].alt.trim() !== '';
                            }
                        },
                        {
                            requirement: 'Add an audio element with controls',
                            validator: (doc) => {
                                const audio = doc.querySelectorAll('audio[controls]');
                                return audio.length > 0;
                            }
                        },
                        {
                            requirement: 'Include a video element with controls',
                            validator: (doc) => {
                                const video = doc.querySelectorAll('video[controls]');
                                return video.length > 0;
                            }
                        },
                        {
                            requirement: 'Bonus: Add an iframe for external media',
                            validator: (doc) => {
                                const iframe = doc.querySelectorAll('iframe[src]');
                                return iframe.length > 0;
                            }
                        }
                    ]}
                    hints={[
                        'Make sure your img tag has both src and alt attributes',
                        'Add the "controls" attribute to audio and video elements',
                        'Try using https://placekitten.com/300/200 for a test image',
                        'YouTube embed URLs should use /embed/ format',
                        'Don\'t forget to set width and height for videos and iframes'
                    ]}
                >

                </Task>

                <Exercise
                    category="html"
                    lessonId="4"
                    title="🧠 HTML Images & Media Quiz"
                    description="Ready to test your understanding of HTML images, audio, and video? Take the interactive quiz to reinforce what you've learned!"
                    buttonText="Start Images & Media Quiz"
                    tipText="Make sure you've practiced with the media elements above before taking the quiz!"
                />
            </DescriptionBlock>

            <PreviewBlock />
        </Editor>
    );
};


export default Lesson4;
