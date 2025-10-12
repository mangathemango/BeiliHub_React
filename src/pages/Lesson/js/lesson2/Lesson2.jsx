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
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Color Changer - Functions & Events</title>
  <style>
    body {
      font-family: system-ui, sans-serif;
      text-align: center;
      padding: 50px;
      margin: 0;
      transition: background-color 0.4s ease;
      background-color: #f8f9fa;
    }
    
    h1 {
      color: #333;
      margin-bottom: 2rem;
      font-size: 2.5rem;
    }
    
    .info-box {
      background: #e3f2fd;
      padding: 20px;
      border-radius: 10px;
      margin: 20px auto;
      border-left: 4px solid #2196f3;
      max-width: 600px;
      text-align: left;
    }
    
    .button-container {
      margin: 3rem 0;
    }
    
    button {
      padding: 15px 30px;
      border: none;
      background-color: #007BFF;
      color: white;
      font-size: 18px;
      border-radius: 8px;
      cursor: pointer;
      margin: 10px;
      transition: all 0.3s ease;
      box-shadow: 0 4px 6px rgba(0,123,255,0.3);
    }
    
    button:hover {
      background-color: #0056b3;
      transform: translateY(-2px);
      box-shadow: 0 6px 12px rgba(0,123,255,0.4);
    }
    
    .demo-area {
      margin-top: 2rem;
      padding: 1.5rem;
      background: rgba(255,255,255,0.1);
      border-radius: 10px;
      border: 2px dashed #ccc;
    }
  </style>
</head>
<body>
  <h1>🎨 Interactive Color Changer</h1>
  
  <div class="info-box">
    <h3>🎯 Your Mission:</h3>
    <ol>
      <li>Create a function to generate random colors</li>
      <li>Add event listeners to buttons</li>
      <li>Practice with function parameters and return values</li>
      <li>Build interactive user interfaces</li>
    </ol>
  </div>
  
  <div class="button-container">
    <button id="color-btn">🌈 Change Background Color</button>
    <button id="greeting-btn">👋 Say Hello</button>
    <button id="reset-btn">🔄 Reset Colors</button>
  </div>
  
  <div class="demo-area">
    <p id="output">Click the buttons to see functions and events in action!</p>
    <p id="click-count">Button clicks: 0</p>
  </div>
  
  <script>
    `}<InlineEditable>{`// 🧩 Functions & Events Practice
    
    // TODO: Function to generate random colors
    function randomColor() {
      const r = Math.floor(Math.random() * 256);
      const g = Math.floor(Math.random() * 256);
      const b = Math.floor(Math.random() * 256);
      return \`rgb(\${r}, \${g}, \${b})\`;
    }
    
    // TODO: Function with parameters
    function greetUser(name = "Friend") {
      return \`Hello, \${name}! Welcome to our interactive page.\`;
    }
    
    // TODO: Arrow function for counting clicks
    const updateClickCount = () => {
      clickCount++;
      document.getElementById("click-count").textContent = \`Button clicks: \${clickCount}\`;
    };
    
    // Variable to track clicks
    let clickCount = 0;
    
    // TODO: Get button elements
    const colorBtn = document.getElementById("color-btn");
    const greetingBtn = document.getElementById("greeting-btn");
    const resetBtn = document.getElementById("reset-btn");
    const output = document.getElementById("output");
    
    // TODO: Add event listeners
    colorBtn.addEventListener("click", function() {
      document.body.style.backgroundColor = randomColor();
      output.textContent = "Background color changed!";
      updateClickCount();
    });
    
    greetingBtn.addEventListener("click", () => {
      const userName = prompt("What's your name?") || "Anonymous";
      output.textContent = greetUser(userName);
      updateClickCount();
    });
    
    resetBtn.addEventListener("click", function() {
      document.body.style.backgroundColor = "#f8f9fa";
      output.textContent = "Colors reset! Ready for more experiments.";
      clickCount = 0;
      document.getElementById("click-count").textContent = \`Button clicks: \${clickCount}\`;
    });
    
    // TODO: Add keyboard event listener
    document.addEventListener("keydown", function(event) {
      if (event.key === "Enter") {
        document.body.style.backgroundColor = randomColor();
        output.textContent = "Color changed with Enter key!";
      }
    });`}</InlineEditable>{`
  </script>
  
  <div style="margin-top: 3rem; padding: 1.5rem; background: #e8f5e8; border-radius: 10px; border-left: 4px solid #4caf50; max-width: 800px; margin-left: auto; margin-right: auto;">
    <h3>🎯 Task Checklist</h3>
    <ul style="text-align: left;">
      <li><strong>Functions:</strong> Create functions with <code>function</code> keyword and arrow syntax</li>
      <li><strong>Parameters:</strong> Use function parameters and return values</li>
      <li><strong>Event Listeners:</strong> Add <code>addEventListener</code> to buttons</li>
      <li><strong>DOM Manipulation:</strong> Change element styles and content</li>
      <li><strong>User Interaction:</strong> Handle clicks, keyboard events, and prompts</li>
    </ul>
    
    <div style="margin-top: 1rem; padding: 1rem; background: #fff; border-radius: 8px;">
      <strong>💡 Pro Tips:</strong>
      <ul style="text-align: left;">
        <li>Functions can return values: <code>return randomColor();</code></li>
        <li>Arrow functions: <code>() => console.log("Hi!");</code></li>
        <li>Event object: <code>function(event) { console.log(event.key); }</code></li>
        <li>Try pressing Enter key to change colors!</li>
      </ul>
    </div>
  </div>
</body>
</html>`}
            </CodeBlock>

            <DescriptionBlock category="js" lessonId="2">
                <Lesson>
                    <h1>⚡ JavaScript Lesson 2: Functions & Events – Define Functions, Event Listeners</h1>

                    <p>
                        Now that you know JavaScript basics, let's make your code <strong>interactive</strong>! 
                        <strong>Functions</strong> let you create reusable code blocks, and <strong>events</strong> let you respond to user actions 
                        like clicks, keypresses, and more. This is where JavaScript gets really exciting!
                    </p>

                    <Section title="⚡ Function Declarations">
                        <p>Functions are like recipes – they contain instructions that you can use over and over:</p>

                        <table style={{ width: '100%', borderCollapse: 'collapse', marginTop: '10px' }}>
                            <thead>
                                <tr style={{ backgroundColor: '#f0f0f0' }}>
                                    <th style={{ padding: '8px', border: '1px solid #ddd' }}>Function Type</th>
                                    <th style={{ padding: '8px', border: '1px solid #ddd' }}>Syntax</th>
                                    <th style={{ padding: '8px', border: '1px solid #ddd' }}>Example</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td style={{ padding: '8px', border: '1px solid #ddd' }}><strong>Declaration</strong></td>
                                    <td style={{ padding: '8px', border: '1px solid #ddd' }}>function name() {'{}'}</td>
                                    <td style={{ padding: '8px', border: '1px solid #ddd' }}>function greet() {'{ return "Hi!"; }'}</td>
                                </tr>
                                <tr>
                                    <td style={{ padding: '8px', border: '1px solid #ddd' }}><strong>Expression</strong></td>
                                    <td style={{ padding: '8px', border: '1px solid #ddd' }}>const name = function() {'{}'}</td>
                                    <td style={{ padding: '8px', border: '1px solid #ddd' }}>const greet = function() {'{ return "Hi!"; }'}</td>
                                </tr>
                                <tr>
                                    <td style={{ padding: '8px', border: '1px solid #ddd' }}><strong>Arrow Function</strong></td>
                                    <td style={{ padding: '8px', border: '1px solid #ddd' }}>const name = () =&gt; {'{}'}</td>
                                    <td style={{ padding: '8px', border: '1px solid #ddd' }}>const greet = () =&gt; "Hi!";</td>
                                </tr>
                            </tbody>
                        </table>

                        <p><strong>Example:</strong></p>
                        <InteractiveCodeBlock language="javascript" hoverable={true}>
                            {`// Function declaration
function sayHello() {
    return "Hello, World!";
}

// Function expression
const sayGoodbye = function() {
    return "Goodbye, World!";
};

// Arrow function (modern style)
const sayWelcome = () => {
    return "Welcome to our site!";
};

// Short arrow function (for simple returns)
const getGreeting = () => "Have a great day!";

// Call the functions
console.log(sayHello());      // "Hello, World!"
console.log(sayGoodbye());    // "Goodbye, World!" 
console.log(sayWelcome());    // "Welcome to our site!"
console.log(getGreeting());   // "Have a great day!"`}
                        </InteractiveCodeBlock>
                        
                        <p>✅ <strong>Best Practice:</strong> Use arrow functions for short, simple functions. Use regular functions for complex logic!</p>
                    </Section>

                    <Section title="📦 Data Types">
                        <p>JavaScript has several basic data types for storing different kinds of information:</p>

                        <table style={{ width: '100%', borderCollapse: 'collapse', marginTop: '10px' }}>
                            <thead>
                                <tr style={{ backgroundColor: '#f0f0f0' }}>
                                    <th style={{ padding: '8px', border: '1px solid #ddd' }}>Type</th>
                                    <th style={{ padding: '8px', border: '1px solid #ddd' }}>Description</th>
                                    <th style={{ padding: '8px', border: '1px solid #ddd' }}>Example</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td style={{ padding: '8px', border: '1px solid #ddd' }}><strong>string</strong></td>
                                    <td style={{ padding: '8px', border: '1px solid #ddd' }}>Text data</td>
                                    <td style={{ padding: '8px', border: '1px solid #ddd' }}>"Hello" or 'Alice'</td>
                                </tr>
                                <tr>
                                    <td style={{ padding: '8px', border: '1px solid #ddd' }}><strong>number</strong></td>
                                    <td style={{ padding: '8px', border: '1px solid #ddd' }}>Numeric values (integers, decimals)</td>
                                    <td style={{ padding: '8px', border: '1px solid #ddd' }}>42 or 3.14</td>
                                </tr>
                                <tr>
                                    <td style={{ padding: '8px', border: '1px solid #ddd' }}><strong>boolean</strong></td>
                                    <td style={{ padding: '8px', border: '1px solid #ddd' }}>True or false</td>
                                    <td style={{ padding: '8px', border: '1px solid #ddd' }}>true or false</td>
                                </tr>
                                <tr>
                                    <td style={{ padding: '8px', border: '1px solid #ddd' }}><strong>array</strong></td>
                                    <td style={{ padding: '8px', border: '1px solid #ddd' }}>List of items</td>
                                    <td style={{ padding: '8px', border: '1px solid #ddd' }}>["apple", "banana"]</td>
                                </tr>
                                <tr>
                                    <td style={{ padding: '8px', border: '1px solid #ddd' }}><strong>object</strong></td>
                                    <td style={{ padding: '8px', border: '1px solid #ddd' }}>Collection of key-value pairs</td>
                                    <td style={{ padding: '8px', border: '1px solid #ddd' }}>{"{name: 'Alice', age: 21}"}</td>
                                </tr>
                            </tbody>
                        </table>

                        <InteractiveCodeBlock language="javascript" hoverable={true}>
                            {`let userName = "Alice";                    // string
let userAge = 21;                          // number  
let isStudent = true;                      // boolean
let hobbies = ["coding", "gaming"];        // array
let profile = { name: "Alice", age: 21 };  // object
let nothing = null;                        // null
let notDefined;                            // undefined

// Check data types
console.log(typeof userName);    // "string"
console.log(typeof userAge);     // "number"
console.log(typeof isStudent);   // "boolean"`}
                        </InteractiveCodeBlock>
                    </Section>

                    <Section title="💬 Logging Output">
                        <p>Use the console to see what your code does and debug problems:</p>
                        
                        <InteractiveCodeBlock language="javascript" hoverable={true}>
                            {`// Basic console output
console.log("Hello, world!");
console.log(userName);
console.log("Age:", userAge);

// Multiple values
console.log("Name:", userName, "Age:", userAge);

// Template literals (recommended)
console.log(\`My name is \${userName} and I am \${userAge} years old.\`);

// Different console methods
console.error("This is an error message");
console.warn("This is a warning");
console.info("This is info");

// ➡️ Check the browser console: F12 → Console tab`}
                        </InteractiveCodeBlock>

                        <p><strong>🔍 Pro Tip:</strong> Open DevTools (F12) and go to the Console tab to see your output!</p>
                    </Section>

                    <Section title="➕ Operators">
                        <p>Operators perform actions on your data:</p>
                        
                        <InteractiveCodeBlock language="javascript" hoverable={true}>
                            {`let a = 10;
let b = 5;

// Arithmetic Operators
console.log(a + b);    // 15 (Addition)
console.log(a - b);    // 5  (Subtraction)  
console.log(a * b);    // 50 (Multiplication)
console.log(a / b);    // 2  (Division)
console.log(a % b);    // 0  (Remainder/Modulo)

// Assignment Operators
a += 5;    // Same as: a = a + 5
console.log(a);  // 15

// Comparison Operators
console.log(a === 15);   // true (strict equality)
console.log(a > b);      // true
console.log(a <= 20);    // true

// String concatenation
let firstName = "Alice";
let lastName = "Smith";
console.log(firstName + " " + lastName);  // "Alice Smith"

// Template literals (modern way)
console.log(\`Hello, \${firstName} \${lastName}!\`);`}
                        </InteractiveCodeBlock>

                        <p><strong>💡 String Tips:</strong></p>
                        <ul>
                            <li>Use <code>+</code> to join strings: <code>"Hello " + name</code></li>
                            <li>Template literals are cleaner: <code>`Hello ${"${name}"}`</code></li>
                            <li>Template literals use backticks (`) not quotes</li>
                        </ul>
                    </Section>

                    <Tip type="success">
                        <strong>JavaScript Fundamentals:</strong> Variables store data, operators manipulate it, 
                        console.log() shows results, and different data types serve different purposes. 
                        Master these basics and you're ready to build amazing web applications! �
                    </Tip>
                </Lesson>

                <Task
                    objective="Create a personalized user profile using JavaScript variables, data types, and console output"
                    validations={[
                        {
                            requirement: 'Use prompt() to get user input for name and age',
                            validator: (doc) => {
                                const scripts = doc.querySelectorAll('script');
                                let scriptText = '';
                                scripts.forEach(script => scriptText += script.textContent);
                                return scriptText.includes('prompt(') && 
                                       (scriptText.includes('name') || scriptText.includes('Name')) &&
                                       scriptText.includes('age');
                            }
                        },
                        {
                            requirement: 'Declare variables using let and const',
                            validator: (doc) => {
                                const scripts = doc.querySelectorAll('script');
                                let scriptText = '';
                                scripts.forEach(script => scriptText += script.textContent);
                                return (scriptText.includes('let ') || scriptText.includes('const ')) &&
                                       scriptText.includes('=');
                            }
                        },
                        {
                            requirement: 'Use console.log() to display information',
                            validator: (doc) => {
                                const scripts = doc.querySelectorAll('script');
                                let scriptText = '';
                                scripts.forEach(script => scriptText += script.textContent);
                                return scriptText.includes('console.log(') &&
                                       scriptText.split('console.log(').length >= 3; // At least 2 console.log calls
                            }
                        },
                        {
                            requirement: 'Use template literals with ${} syntax',
                            validator: (doc) => {
                                const scripts = doc.querySelectorAll('script');
                                let scriptText = '';
                                scripts.forEach(script => scriptText += script.textContent);
                                return scriptText.includes('`') && scriptText.includes('${');
                            }
                        },
                        {
                            requirement: 'Work with different data types (arrays, objects, numbers)',
                            validator: (doc) => {
                                const scripts = doc.querySelectorAll('script');
                                let scriptText = '';
                                scripts.forEach(script => scriptText += script.textContent);
                                return (scriptText.includes('[') && scriptText.includes(']')) || 
                                       (scriptText.includes('{') && scriptText.includes('}')) ||
                                       scriptText.includes('Number(');
                            }
                        }
                    ]}
                    hints={[
                        'Use prompt("Enter your name:") to get user input',
                        'Store values in variables: let userName = prompt("Name:");',
                        'Display with console.log(`Hello ${userName}!`);',
                        'Convert strings to numbers: Number(userAge)',
                        'Create arrays: let hobbies = ["coding", "reading"];'
                    ]}
                >

                </Task>

                <Exercise
                    category="js"
                    lessonId="1"
                    title="🚀 JavaScript Basics Quiz"
                    description="Test your understanding of variables, data types, operators, and console output!"
                    buttonText="Start JavaScript Basics Quiz"
                    tipText="Make sure you've completed the user profile task above before taking the quiz!"
                />
            </DescriptionBlock>

            <PreviewBlock />
        </Editor>
    );
};


export default Lesson2;
