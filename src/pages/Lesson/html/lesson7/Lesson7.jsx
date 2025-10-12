import React from "react";
import "./Lesson7.css";
import Editor from "../../components/Editor/editor";
import { CodeBlock, DescriptionBlock, PreviewBlock } from "../../components/Editor";
import { InlineEditable } from "../../components/Editor/components/CodeBlock/components";
import { CodeSnippet, Highlight, Tip, Section, Task, Lesson } from "../../components/Editor/components/DescriptionBlock/components";
import InteractiveCodeBlock from "../../components/Editor/components/DescriptionBlock/components/InteractiveCodeBlock";
import HighlightTrigger from "../../components/Editor/components/DescriptionBlock/components/HighlightTrigger";
import Exercise from "../../components/Editor/components/DescriptionBlock/components/Exercise";

const Lesson7 = () => {
    return (
        <Editor>
            <CodeBlock>
                {`<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>`}<InlineEditable>Pizza Order Form</InlineEditable>{`</title>
</head>
<body>
  <h1>Order Your Pizza 🍕</h1>
  <form action="/order" method="post">
    <!-- Add name & email fields here -->
    `}<InlineEditable>&lt;label for="name"&gt;Name:&lt;/label&gt;
    &lt;input type="text" id="name" name="name"&gt;&lt;br&gt;&lt;br&gt;</InlineEditable>{`
    
    `}<InlineEditable>&lt;label for="email"&gt;Email:&lt;/label&gt;
    &lt;input type="email" id="email" name="email"&gt;&lt;br&gt;&lt;br&gt;</InlineEditable>{`
    
    <!-- Add radio buttons for pizza size here -->
    <p>Choose pizza size:</p>
    `}<InlineEditable>&lt;input type="radio" id="small" name="size" value="small"&gt;
    &lt;label for="small"&gt;Small&lt;/label&gt;</InlineEditable>{`
    
    `}<InlineEditable>&lt;input type="radio" id="medium" name="size" value="medium"&gt;
    &lt;label for="medium"&gt;Medium&lt;/label&gt;</InlineEditable>{`
    
    `}<InlineEditable>&lt;input type="radio" id="large" name="size" value="large"&gt;
    &lt;label for="large"&gt;Large&lt;/label&gt;&lt;br&gt;&lt;br&gt;</InlineEditable>{`
    
    <!-- Add checkboxes for toppings here -->
    <p>Pick your toppings:</p>
    `}<InlineEditable>&lt;input type="checkbox" id="cheese" name="topping" value="cheese"&gt;
    &lt;label for="cheese"&gt;Cheese&lt;/label&gt;</InlineEditable>{`
    
    `}<InlineEditable>&lt;input type="checkbox" id="mushrooms" name="topping" value="mushrooms"&gt;
    &lt;label for="mushrooms"&gt;Mushrooms&lt;/label&gt;</InlineEditable>{`
    
    `}<InlineEditable>&lt;input type="checkbox" id="pepperoni" name="topping" value="pepperoni"&gt;
    &lt;label for="pepperoni"&gt;Pepperoni&lt;/label&gt;</InlineEditable>{`
    
    `}<InlineEditable>&lt;input type="checkbox" id="pineapple" name="topping" value="pineapple"&gt;
    &lt;label for="pineapple"&gt;Pineapple 🍍&lt;/label&gt;&lt;br&gt;&lt;br&gt;</InlineEditable>{`
    
    <!-- Add submit button here -->
    `}<InlineEditable>&lt;button type="submit"&gt;Order Now 🚀&lt;/button&gt;</InlineEditable>{`
  </form>
</body>
</html>`}
            </CodeBlock>

            <DescriptionBlock category="html" lessonId="7">
                <Lesson>
                    <h1>HTML Lesson 7: Form Basics</h1>

                    <Section title="🎯 Why Forms Matter">
                        <p>
                            HTML forms are like the input fields on a video game character creation screen — they let users tell your website stuff. You can collect data like names, emails, passwords, search queries, or even pizza topping preferences 🍕.
                        </p>
                    </Section>

                    <Section title="📝 The &lt;form&gt; Element">
                        <p>The <code>&lt;form&gt;</code> tag is the wrapper for all your inputs. It tells the browser:</p>
                        <p><em>"Hey yo, whatever's inside me is stuff the user can submit somewhere."</em></p>

                        <InteractiveCodeBlock language="html" hoverable={true}>
                            {`<form action="/submit" method="post">
  <!-- inputs go here -->
</form>`}
                        </InteractiveCodeBlock>

                        <ul>
                            <li><code>action</code> → where the data is sent (like the server URL).</li>
                            <li><code>method</code> → how the data is sent.</li>
                            <ul>
                                <li><code>"get"</code>: data shows up in the URL (good for searches).</li>
                                <li><code>"post"</code>: hidden in the request body (better for sensitive info).</li>
                            </ul>
                        </ul>
                    </Section>

                    <Section title="🔧 Form Inputs">
                        <p>Here's where the fun begins. Inputs are all about letting the user type/select stuff.</p>

                        <p><strong>1. Text Input</strong></p>
                        <InteractiveCodeBlock language="html" hoverable={true}>
                            {`<form>
  <label for="username">Username:</label>
  <input type="text" id="username" name="username">
</form>`}
                        </InteractiveCodeBlock>
                        <ul>
                            <li><code>label</code> → clickable text that's tied to the input.</li>
                            <li><code>type="text"</code> → normal single-line input.</li>
                        </ul>

                        <p><strong>2. Password Input</strong></p>
                        <InteractiveCodeBlock language="html" hoverable={true}>
                            {`<label for="password">Password:</label>
<input type="password" id="password" name="password">`}
                        </InteractiveCodeBlock>
                        <p>Hides the characters with dots/stars.</p>
                        <p>Still visible in the HTML inspector tho! (don't trust HTML alone for security 😅).</p>

                        <p><strong>3. Email Input</strong></p>
                        <InteractiveCodeBlock language="html" hoverable={true}>
                            {`<label for="email">Email:</label>
<input type="email" id="email" name="email">`}
                        </InteractiveCodeBlock>
                        <p>Makes sure the input looks like an email (name@example.com).</p>

                        <p><strong>4. Radio Buttons</strong></p>
                        <p>Let users pick one option out of many.</p>
                        <InteractiveCodeBlock language="html" hoverable={true}>
                            {`<p>Choose your favorite fruit:</p>
<input type="radio" id="apple" name="fruit" value="apple">
<label for="apple">Apple</label>

<input type="radio" id="banana" name="fruit" value="banana">
<label for="banana">Banana</label>`}
                        </InteractiveCodeBlock>
                        <p>Notice both radios share the same <code>name</code> = only one can be picked.</p>

                        <p><strong>5. Checkboxes</strong></p>
                        <p>Let users pick multiple options.</p>
                        <InteractiveCodeBlock language="html" hoverable={true}>
                            {`<p>Pick your hobbies:</p>
<input type="checkbox" id="coding" name="hobby" value="coding">
<label for="coding">Coding</label>

<input type="checkbox" id="gaming" name="hobby" value="gaming">
<label for="gaming">Gaming</label>`}
                        </InteractiveCodeBlock>
                        <p>Users can tick as many as they want.</p>

                        <p><strong>6. Select (Dropdown)</strong></p>
                        <InteractiveCodeBlock language="html" hoverable={true}>
                            {`<label for="pet">Choose a pet:</label>
<select id="pet" name="pet">
  <option value="dog">Dog</option>
  <option value="cat">Cat</option>
  <option value="bird">Bird</option>
</select>`}
                        </InteractiveCodeBlock>
                        <p>Dropdown menu with options inside.</p>

                        <p><strong>7. Submit Button</strong></p>
                        <InteractiveCodeBlock language="html" hoverable={true}>
                            {`<input type="submit" value="Submit">`}
                        </InteractiveCodeBlock>
                        <p>OR the fancier version:</p>
                        <InteractiveCodeBlock language="html" hoverable={true}>
                            {`<button type="submit">Send It 🚀</button>`}
                        </InteractiveCodeBlock>
                    </Section>

                    <Section title="🍕 Full Example">
                        <p>Here's a small signup form putting it all together:</p>
                        <InteractiveCodeBlock language="html" hoverable={true}>
                            {`<form action="/signup" method="post">
  <label for="username">Username:</label>
  <input type="text" id="username" name="username"><br><br>

  <label for="password">Password:</label>
  <input type="password" id="password" name="password"><br><br>

  <label for="email">Email:</label>
  <input type="email" id="email" name="email"><br><br>

  <p>Choose a plan:</p>
  <input type="radio" id="free" name="plan" value="free">
  <label for="free">Free</label>
  <input type="radio" id="premium" name="plan" value="premium">
  <label for="premium">Premium</label><br><br>

  <p>Pick your interests:</p>
  <input type="checkbox" id="html" name="interest" value="html">
  <label for="html">HTML</label>
  <input type="checkbox" id="css" name="interest" value="css">
  <label for="css">CSS</label><br><br>

  <button type="submit">Sign Up 🚀</button>
</form>`}
                        </InteractiveCodeBlock>
                    </Section>

                    <Tip type="info">
                        <strong>Interactive Features:</strong> Click on the highlighted elements in the text above
                        to see them highlighted in the code editor! Practice creating different form inputs
                        and watch how they behave in the live preview.
                    </Tip>
                </Lesson>

                <Task
                    objective="Create a complete pizza order form with various input types"
                    validations={[
                        {
                            requirement: 'Include a form with proper action and method attributes',
                            validator: (doc) => {
                                const form = doc.querySelector('form[action][method]');
                                return form !== null;
                            }
                        },
                        {
                            requirement: 'Add name and email input fields with proper labels',
                            validator: (doc) => {
                                const nameInput = doc.querySelector('input[type="text"][name*="name"], input[name*="name"]:not([type])');
                                const emailInput = doc.querySelector('input[type="email"]');
                                return nameInput && emailInput;
                            }
                        },
                        {
                            requirement: 'Create radio buttons for pizza size selection',
                            validator: (doc) => {
                                const radioButtons = doc.querySelectorAll('input[type="radio"][name]');
                                const uniqueNames = new Set(Array.from(radioButtons).map(radio => radio.name));
                                return radioButtons.length >= 2 && uniqueNames.size >= 1;
                            }
                        },
                        {
                            requirement: 'Add checkboxes for pizza toppings',
                            validator: (doc) => {
                                const checkboxes = doc.querySelectorAll('input[type="checkbox"]');
                                return checkboxes.length >= 2;
                            }
                        },
                        {
                            requirement: 'Include a submit button',
                            validator: (doc) => {
                                const submitInput = doc.querySelector('input[type="submit"]');
                                const submitButton = doc.querySelector('button[type="submit"], button:not([type])');
                                return submitInput || submitButton;
                            }
                        }
                    ]}
                    hints={[
                        'Use <form action="/order" method="post"> to wrap your inputs',
                        'Remember to connect labels with inputs using "for" and "id" attributes',
                        'Radio buttons should share the same "name" attribute but have different "value" attributes',
                        'Checkboxes can have the same "name" attribute to group related options',
                        'Use <button type="submit"> or <input type="submit"> for form submission'
                    ]}
                >

                </Task>

                <Exercise
                    category="html"
                    lessonId="7"
                    title="🧠 HTML Forms Quiz"
                    description="Ready to test your understanding of HTML forms and input elements? Take the interactive quiz to reinforce what you've learned!"
                    buttonText="Start Forms Quiz"
                    tipText="Make sure you've practiced with form elements above before taking the quiz!"
                />
            </DescriptionBlock>

            <PreviewBlock />
        </Editor>
    );
};

export default Lesson7;
            