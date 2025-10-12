import React from "react";
import "./Lesson6.css";
import Editor from "../../components/Editor/editor";
import { CodeBlock, DescriptionBlock, PreviewBlock } from "../../components/Editor";
import { InlineEditable } from "../../components/Editor/components/CodeBlock/components";
import { CodeSnippet, Highlight, Tip, Section, Task, Lesson } from "../../components/Editor/components/DescriptionBlock/components";
import InteractiveCodeBlock from "../../components/Editor/components/DescriptionBlock/components/InteractiveCodeBlock";
import HighlightTrigger from "../../components/Editor/components/DescriptionBlock/components/HighlightTrigger";
import Exercise from "../../components/Editor/components/DescriptionBlock/components/Exercise";

const Lesson6 = () => {
    return (
        <Editor>
            <CodeBlock>
                {`<!DOCTYPE html>
<html>
<head>
  <title>`}<InlineEditable>Lists and Tables</InlineEditable>{`</title>
</head>
<body>
  <h1>Organizing Information</h1>
  
  <h2>Shopping List</h2>
  <!-- Make an unordered list here -->
  `}<InlineEditable>&lt;ul&gt;
    &lt;li&gt;Apples&lt;/li&gt;
    &lt;li&gt;Bread&lt;/li&gt;
    &lt;li&gt;Milk&lt;/li&gt;
  &lt;/ul&gt;</InlineEditable>{`
  
  <h2>Instant Noodles Recipe</h2>
  <!-- Make an ordered list here -->
  `}<InlineEditable>&lt;ol&gt;
    &lt;li&gt;Boil water&lt;/li&gt;
    &lt;li&gt;Add noodles&lt;/li&gt;
    &lt;li&gt;Cook for 3 minutes&lt;/li&gt;
  &lt;/ol&gt;</InlineEditable>{`
  
  <h2>Definitions</h2>
  <!-- Make a description list here -->
  `}<InlineEditable>&lt;dl&gt;
    &lt;dt&gt;HTML&lt;/dt&gt;
    &lt;dd&gt;The standard language for web pages&lt;/dd&gt;
    &lt;dt&gt;CSS&lt;/dt&gt;
    &lt;dd&gt;Used to style web pages&lt;/dd&gt;
  &lt;/dl&gt;</InlineEditable>{`
  
  <h2>Friends' Favorite Foods</h2>
  <!-- Make a table here -->
  `}<InlineEditable>&lt;table border="1"&gt;
    &lt;tr&gt;
      &lt;th&gt;Name&lt;/th&gt;
      &lt;th&gt;Favorite Food&lt;/th&gt;
    &lt;/tr&gt;
    &lt;tr&gt;
      &lt;td&gt;Alex&lt;/td&gt;
      &lt;td&gt;Pizza&lt;/td&gt;
    &lt;/tr&gt;
    &lt;tr&gt;
      &lt;td&gt;Sam&lt;/td&gt;
      &lt;td&gt;Sushi&lt;/td&gt;
    &lt;/tr&gt;
  &lt;/table&gt;</InlineEditable>{`
</body>
</html>`}
            </CodeBlock>

            <DescriptionBlock category="html" lessonId="6">
                <Lesson>
                    <h1>HTML Lesson 6: Lists & Tables</h1>

                    <p>
                        Websites aren't just for pretty pictures — they're also for structured information.
                    </p>
                    
                    <ul>
                        <li><strong>Lists</strong> → good for menus, checklists, steps, etc.</li>
                        <li><strong>Tables</strong> → good for tabular data, schedules, comparison charts.</li>
                    </ul>

                    <Section title="� Lists in Depth">
                        <p>HTML gives us three types of lists:</p>

                        <p><strong>1. Unordered Lists (&lt;ul&gt;)</strong></p>
                        <ul>
                            <li>Bullet points.</li>
                            <li>Great for things without a particular order.</li>
                        </ul>

                        <InteractiveCodeBlock language="html" hoverable={true}>
                            {`<ul>
  <li>Coffee</li>
  <li>Tea</li>
  <li>Milk</li>
</ul>`}
                        </InteractiveCodeBlock>

                        <p><strong>👉 Outputs:</strong></p>
                        <ul>
                            <li>Coffee</li>
                            <li>Tea</li>
                            <li>Milk</li>
                        </ul>

                        <p><strong>2. Ordered Lists (&lt;ol&gt;)</strong></p>
                        <ul>
                            <li>Numbered lists.</li>
                            <li>Perfect for steps, rankings, or instructions.</li>
                        </ul>

                        <InteractiveCodeBlock language="html" hoverable={true}>
                            {`<ol>
  <li>Wake up</li>
  <li>Brush teeth</li>
  <li>Make breakfast</li>
</ol>`}
                        </InteractiveCodeBlock>

                        <p><strong>👉 Outputs:</strong></p>
                        <ol>
                            <li>Wake up</li>
                            <li>Brush teeth</li>
                            <li>Make breakfast</li>
                        </ol>

                        <p><strong>3. Description Lists (&lt;dl&gt;)</strong></p>
                        <p>Pair terms with their descriptions.</p>

                        <InteractiveCodeBlock language="html" hoverable={true}>
                            {`<dl>
  <dt>HTML</dt>
  <dd>The standard language for building web pages.</dd>

  <dt>CSS</dt>
  <dd>Used to style and layout web pages.</dd>
</dl>`}
                        </InteractiveCodeBlock>

                        <p><strong>👉 Looks like:</strong></p>
                        <dl>
                            <dt><strong>HTML</strong></dt>
                            <dd>: The standard language for building web pages.</dd>
                            <dt><strong>CSS</strong></dt>
                            <dd>: Used to style and layout web pages.</dd>
                        </dl>
                    </Section>

                    <Section title="📊 Tables">
                        <p>Tables in HTML are built like LEGOs. You have to carefully stack rows and cells.</p>
                        
                        <ul>
                            <li><code>&lt;table&gt;</code> → wraps the whole thing</li>
                            <li><code>&lt;tr&gt;</code> → table row</li>
                            <li><code>&lt;td&gt;</code> → table data (a cell)</li>
                            <li><code>&lt;th&gt;</code> → table header cell (bold, centered by default)</li>
                        </ul>

                        <p><strong>Example:</strong></p>
                        <InteractiveCodeBlock language="html" hoverable={true}>
                            {`<table border="1">
  <tr>
    <th>Rank</th>
    <th>Player</th>
    <th>Score</th>
  </tr>
  <tr>
    <td>1</td>
    <td>Player 2</td>
    <td>9001</td>
  </tr>
  <tr>
    <td>2</td>
    <td>Player 1</td>
    <td>8500</td>
  </tr>
</table>`}
                        </InteractiveCodeBlock>

                        <p><strong>👉 Output (simplified):</strong></p>
                        <table border="1" style={{borderCollapse: 'collapse'}}>
                            <tr>
                                <th style={{padding: '8px', backgroundColor: '#f5f5f5'}}>Rank</th>
                                <th style={{padding: '8px', backgroundColor: '#f5f5f5'}}>Player</th>
                                <th style={{padding: '8px', backgroundColor: '#f5f5f5'}}>Score</th>
                            </tr>
                            <tr>
                                <td style={{padding: '8px'}}>1</td>
                                <td style={{padding: '8px'}}>Player 2</td>
                                <td style={{padding: '8px'}}>9001</td>
                            </tr>
                            <tr>
                                <td style={{padding: '8px'}}>2</td>
                                <td style={{padding: '8px'}}>Player 1</td>
                                <td style={{padding: '8px'}}>8500</td>
                            </tr>
                        </table>
                    </Section>

                    <Section title="� Table Attributes">
                        <ul>
                            <li><code>border="1"</code> → adds borders (though nowadays we style with CSS).</li>
                            <li><code>colspan</code> → a cell stretches across multiple columns.</li>
                            <li><code>rowspan</code> → a cell stretches across multiple rows.</li>
                        </ul>

                        <InteractiveCodeBlock language="html" hoverable={true}>
                            {`<table border="1">
  <tr>
    <th rowspan="2">Name</th>
    <th colspan="2">Scores</th>
  </tr>
  <tr>
    <th>Math</th>
    <th>English</th>
  </tr>
  <tr>
    <td>Mango</td>
    <td>95</td>
    <td>88</td>
  </tr>
</table>`}
                        </InteractiveCodeBlock>

                        <p><strong>👉 Looks like:</strong></p>
                        <table border="1" style={{borderCollapse: 'collapse'}}>
                            <tr>
                                <th rowSpan="2" style={{padding: '8px', backgroundColor: '#f5f5f5'}}>Name</th>
                                <th colSpan="2" style={{padding: '8px', backgroundColor: '#f5f5f5'}}>Scores</th>
                            </tr>
                            <tr>
                                <th style={{padding: '8px', backgroundColor: '#f5f5f5'}}>Math</th>
                                <th style={{padding: '8px', backgroundColor: '#f5f5f5'}}>English</th>
                            </tr>
                            <tr>
                                <td style={{padding: '8px'}}>Mango</td>
                                <td style={{padding: '8px'}}>95</td>
                                <td style={{padding: '8px'}}>88</td>
                            </tr>
                        </table>
                    </Section>

                    <Section title="💡 Practical Examples">
                        <p><strong>Navigation menu using unordered list:</strong></p>
                        <InteractiveCodeBlock language="html" hoverable={true}>
                            {`<nav>
  <ul>
    <li><a href="home.html">Home</a></li>
    <li><a href="about.html">About</a></li>
    <li><a href="contact.html">Contact</a></li>
  </ul>
</nav>`}
                        </InteractiveCodeBlock>

                        <p><strong>Recipe instructions with ordered list:</strong></p>
                        <InteractiveCodeBlock language="html" hoverable={true}>
                            {`<h3>How to Make Coffee</h3>
<ol>
  <li>Heat water to 200°F</li>
  <li>Grind coffee beans</li>
  <li>Add coffee to filter</li>
  <li>Pour hot water slowly</li>
  <li>Enjoy!</li>
</ol>`}
                        </InteractiveCodeBlock>

                        <p><strong>Student grades table:</strong></p>
                        <InteractiveCodeBlock language="html" hoverable={true}>
                            {`<table border="1">
  <tr>
    <th>Student</th>
    <th>Math</th>
    <th>Science</th>
    <th>Average</th>
  </tr>
  <tr>
    <td>Alice</td>
    <td>92</td>
    <td>87</td>
    <td>89.5</td>
  </tr>
  <tr>
    <td>Bob</td>
    <td>78</td>
    <td>92</td>
    <td>85</td>
  </tr>
</table>`}
                        </InteractiveCodeBlock>
                    </Section>

                    <Tip type="info">
                        <strong>Interactive Features:</strong> Click on the highlighted elements in the text above
                        to see them highlighted in the code editor! Practice creating different types of lists
                        and tables with various structures and content.
                    </Tip>
                </Lesson>

                <Task
                    objective="Create organized information using lists and tables"
                    validations={[
                        {
                            requirement: 'Create an unordered list with at least 3 items',
                            validator: (doc) => {
                                const ul = doc.querySelector('ul');
                                const lis = ul ? ul.querySelectorAll('li') : [];
                                return ul && lis.length >= 3;
                            }
                        },
                        {
                            requirement: 'Create an ordered list with at least 3 items',
                            validator: (doc) => {
                                const ol = doc.querySelector('ol');
                                const lis = ol ? ol.querySelectorAll('li') : [];
                                return ol && lis.length >= 3;
                            }
                        },
                        {
                            requirement: 'Create a description list with at least one term and description',
                            validator: (doc) => {
                                const dl = doc.querySelector('dl');
                                const dt = dl ? dl.querySelector('dt') : null;
                                const dd = dl ? dl.querySelector('dd') : null;
                                return dl && dt && dd;
                            }
                        },
                        {
                            requirement: 'Create a table with at least 2 rows',
                            validator: (doc) => {
                                const table = doc.querySelector('table');
                                const rows = table ? table.querySelectorAll('tr') : [];
                                return table && rows.length >= 2;
                            }
                        }
                    ]}
                    hints={[
                        'Use <ul> with <li> elements for your shopping list',
                        'Use <ol> with <li> elements for step-by-step instructions',
                        'Use <dl>, <dt>, and <dd> for definitions',
                        'Use <table>, <tr>, <th>, and <td> for tabular data',
                        'Remember to add content inside each list item and table cell'
                    ]}
                >

                </Task>

                <Exercise
                    category="html"
                    lessonId="6"
                    title="🧠 HTML Lists & Tables Quiz"
                    description="Ready to test your understanding of HTML lists and tables? Take the interactive quiz to reinforce what you've learned!"
                    buttonText="Start Lists & Tables Quiz"
                    tipText="Make sure you've practiced with lists and tables above before taking the quiz!"
                />
            </DescriptionBlock>

            <PreviewBlock />
        </Editor>
    );
};


export default Lesson6;
