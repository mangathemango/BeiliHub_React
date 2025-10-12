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
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>JavaScript Basics Task</title>
  <style>
    body {
      font-family: system-ui, sans-serif;
      padding: 40px 20px;
      background-color: #f8f9fa;
      margin: 0;
    }
    
    h1 {
      text-align: center;
      color: #333;
      margin-bottom: 2rem;
    }
    
    .info-box {
      background: #e3f2fd;
      padding: 20px;
      border-radius: 10px;
      margin: 20px 0;
      border-left: 4px solid #2196f3;
    }
    
    .console-note {
      background: #fff3e0;
      padding: 15px;
      border-radius: 8px;
      margin: 20px 0;
      border-left: 4px solid #ff9800;
    }
  </style>
</head>
<body>
  <h1>📝 JavaScript Basics Task</h1>
  
  <div class="info-box">
    <h3>🎯 Your Mission:</h3>
    <ol>
      <li>Ask the user for their name and age using <code>prompt()</code></li>
      <li>Store the values in variables</li>
      <li>Use <code>console.log()</code> to print a personalized message</li>
      <li>Try different data types and operators</li>
    </ol>
  </div>
  
  <div class="console-note">
    <strong>📱 Check the Console!</strong><br>
    Right-click → Inspect → Console tab to see your output!
  </div>
  
  <script>
    `}<InlineEditable>{`// 🧩 JavaScript Basics Practice
    
    // TODO: Declare variables for user information
    let userName = prompt("Enter your name:");
    let userAge = prompt("Enter your age:");
    
    // TODO: Convert age to a number (prompt returns string)
    let ageNumber = Number(userAge);
    
    // TODO: Create more variables with different data types
    let isStudent = true;  // boolean
    let hobbies = ["coding", "reading", "gaming"];  // array
    let profile = {        // object
      name: userName,
      age: ageNumber,
      student: isStudent
    };
    
    // TODO: Use console.log() to display information
    console.log("=== USER INFORMATION ===");
    console.log("Name:", userName);
    console.log("Age:", userAge);
    console.log("Type of age variable:", typeof userAge);
    console.log("Age as number:", ageNumber);
    console.log("Type of age number:", typeof ageNumber);
    
    // TODO: Use template literals for formatted output
    console.log(\`Hi, my name is \${userName} and I am \${ageNumber} years old.\`);
    
    // TODO: Practice with operators
    console.log("=== MATH OPERATIONS ===");
    let currentYear = 2024;
    let birthYear = currentYear - ageNumber;
    console.log(\`You were born around: \${birthYear}\`);
    
    // TODO: Work with arrays and objects
    console.log("=== PROFILE DATA ===");
    console.log("Full profile:", profile);
    console.log("Hobbies:", hobbies);
    console.log("First hobby:", hobbies[0]);
    
    // TODO: Add more console.log statements
    console.log("=== BONUS INFO ===");
    console.log("Is student?", isStudent);
    console.log("Number of hobbies:", hobbies.length);
    console.log("Profile name:", profile.name);`}</InlineEditable>{`
  </script>
  
  <div style="margin-top: 3rem; padding: 1.5rem; background: #e8f5e8; border-radius: 10px; border-left: 4px solid #4caf50;">
    <h3>🎯 Task Checklist</h3>
    <ul>
      <li><strong>Variables:</strong> Use <code>let</code> and <code>const</code> to store data</li>
      <li><strong>Data Types:</strong> Work with strings, numbers, booleans, arrays, objects</li>
      <li><strong>User Input:</strong> Get information using <code>prompt()</code></li>
      <li><strong>Console Output:</strong> Display results with <code>console.log()</code></li>
      <li><strong>Template Literals:</strong> Use backticks for string interpolation</li>
      <li><strong>Operators:</strong> Practice arithmetic and data manipulation</li>
    </ul>
    
    <div style="margin-top: 1rem; padding: 1rem; background: #fff; border-radius: 8px;">
      <strong>💡 Pro Tips:</strong>
      <ul>
        <li>Use <code>Number()</code> to convert strings to numbers</li>
        <li>Template literals (\`\${"text"}\`) are better than string concatenation</li>
        <li><code>typeof</code> operator shows the data type of a variable</li>
        <li>Arrays start at index 0: <code>array[0]</code> is the first item</li>
      </ul>
    </div>
  </div>
</body>
</html>`}
            </CodeBlock>

            <DescriptionBlock category="js" lessonId="1">
                <Lesson>
                    <h1>🚀 JavaScript Lesson 1: Basics – Variables, Types, Console, and Operators</h1>

                    <p>
                        JavaScript is the programming language that <strong>makes your web pages alive!</strong> 
                        Let's start with the foundations — <strong>variables</strong>, <strong>data types</strong>, 
                        <strong>operators</strong>, and logging output to the <strong>console</strong>. 
                        These are the building blocks you'll use in every JavaScript program!
                    </p>

                    <Section title="� Declaring Variables">
                        <p>Variables store data that you can use and change throughout your program:</p>

                        <table style={{ width: '100%', borderCollapse: 'collapse', marginTop: '10px' }}>
                            <thead>
                                <tr style={{ backgroundColor: '#f0f0f0' }}>
                                    <th style={{ padding: '8px', border: '1px solid #ddd' }}>Keyword</th>
                                    <th style={{ padding: '8px', border: '1px solid #ddd' }}>Description</th>
                                    <th style={{ padding: '8px', border: '1px solid #ddd' }}>Example</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td style={{ padding: '8px', border: '1px solid #ddd' }}><strong>let</strong></td>
                                    <td style={{ padding: '8px', border: '1px solid #ddd' }}>Can be changed later (mutable)</td>
                                    <td style={{ padding: '8px', border: '1px solid #ddd' }}>let name = "Alice";</td>
                                </tr>
                                <tr>
                                    <td style={{ padding: '8px', border: '1px solid #ddd' }}><strong>const</strong></td>
                                    <td style={{ padding: '8px', border: '1px solid #ddd' }}>Cannot be reassigned (constant)</td>
                                    <td style={{ padding: '8px', border: '1px solid #ddd' }}>const pi = 3.14159;</td>
                                </tr>
                                <tr>
                                    <td style={{ padding: '8px', border: '1px solid #ddd' }}><strong>var</strong></td>
                                    <td style={{ padding: '8px', border: '1px solid #ddd' }}>Old style - avoid using</td>
                                    <td style={{ padding: '8px', border: '1px solid #ddd' }}>var age = 20;</td>
                                </tr>
                            </tbody>
                        </table>

                        <p><strong>Example:</strong></p>
                        <InteractiveCodeBlock language="javascript" hoverable={true}>
                            {`let userName = "Alice";      // Can change later
const pi = 3.14159;          // Constant value
let isLoggedIn = false;      // Boolean value

// Change the value later
userName = "Bob";            // ✅ Works with let
// pi = 3.14;                // ❌ Error with const

console.log(userName);       // "Bob"
console.log(pi);             // 3.14159`}
                        </InteractiveCodeBlock>
                        
                        <p>✅ <strong>Best Practice:</strong> Use <code>let</code> for variables that change, and <code>const</code> for values that shouldn't!</p>
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


export default Lesson1;
