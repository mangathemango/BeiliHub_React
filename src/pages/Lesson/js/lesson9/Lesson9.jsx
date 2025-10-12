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
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>ES6 Features Practice - Arrow Functions, Template Literals, Destructuring</title>
  <style>
    body {
      font-family: system-ui, sans-serif;
      text-align: center;
      padding: 40px 20px;
      margin: 0;
      background: linear-gradient(135deg, #ff9a9e 0%, #fecfef 50%, #fecfef 100%);
      color: #333;
      min-height: 100vh;
    }
    
    h1 {
      color: #2c3e50;
      margin-bottom: 2rem;
      font-size: 2.5rem;
      text-shadow: 2px 2px 4px rgba(0,0,0,0.1);
    }
    
    .info-box {
      background: rgba(255,255,255,0.8);
      backdrop-filter: blur(10px);
      padding: 25px;
      border-radius: 15px;
      margin: 25px auto;
      border: 1px solid rgba(255,255,255,0.5);
      max-width: 600px;
      text-align: left;
      box-shadow: 0 8px 32px rgba(0,0,0,0.1);
    }
    
    .demo-area {
      margin: 3rem 0;
      background: rgba(255,255,255,0.9);
      padding: 2rem;
      border-radius: 15px;
      backdrop-filter: blur(5px);
      box-shadow: 0 10px 40px rgba(102,126,234,0.3);
    }
    
    .input-section {
      display: flex;
      justify-content: center;
      align-items: center;
      gap: 10px;
      margin-bottom: 2rem;
      flex-wrap: wrap;
    }
    
    input[type="text"] {
      padding: 12px 16px;
      border: 2px solid #667eea;
      border-radius: 8px;
      font-size: 16px;
      min-width: 250px;
      outline: none;
      transition: all 0.3s ease;
    }
    
    input[type="text"]:focus {
      border-color: #764ba2;
      box-shadow: 0 0 10px rgba(102,126,234,0.3);
    }
    
    button {
      padding: 12px 20px;
      border: none;
      background: #667eea;
      color: white;
      font-size: 16px;
      border-radius: 8px;
      cursor: pointer;
      margin: 5px;
      transition: all 0.3s ease;
      box-shadow: 0 4px 15px rgba(102,126,234,0.3);
    }
    
    button:hover {
      background: #5a67d8;
      transform: translateY(-2px);
      box-shadow: 0 6px 20px rgba(102,126,234,0.4);
    }
    
    .storage-info {
      background: rgba(56,239,125,0.1);
      padding: 15px;
      border-radius: 10px;
      margin: 20px 0;
      border-left: 4px solid #11998e;
      border: 1px solid rgba(17,153,142,0.3);
    }
    
    .stats-area {
      background: rgba(255,255,255,0.8);
      padding: 15px;
      border-radius: 10px;
      margin: 20px 0;
      border-left: 4px solid #11998e;
    }
    
    .api-info {
      background: rgba(255,255,255,0.8);
      padding: 15px;
      border-radius: 10px;
      margin: 20px 0;
      border-left: 4px solid #667eea;
    }
    
    .loading-state {
      background: rgba(102,126,234,0.1);
      padding: 20px;
      border-radius: 10px;
      margin: 20px 0;
      border-left: 4px solid #667eea;
      animation: pulse 2s infinite;
    }
    
    @keyframes pulse {
      0% { opacity: 0.6; }
      50% { opacity: 1; }
      100% { opacity: 0.6; }
    }
    
    .fetch-display {
      background: rgba(255,255,255,0.95);
      margin: 15px 0;
      padding: 20px;
      border-radius: 10px;
      border-left: 4px solid #11998e;
      box-shadow: 0 4px 15px rgba(0,0,0,0.1);
      transition: all 0.3s ease;
    }
    
    .fetch-display:hover {
      transform: translateY(-2px);
      box-shadow: 0 6px 20px rgba(0,0,0,0.15);
    }
    
    .error-state {
      background: rgba(231,76,60,0.1);
      border-left-color: #e74c3c;
    }
    
    .success-state {
      background: rgba(39,174,96,0.1);
      border-left-color: #27ae60;
    }
    
    .code-display {
      background: #2c3e50;
      color: #ecf0f1;
      padding: 15px;
      border-radius: 8px;
      font-family: 'Courier New', monospace;
      font-size: 14px;
      overflow-x: auto;
      margin: 10px 0;
    }
    
    .message-area {
      background: rgba(255,255,255,0.7);
      padding: 20px;
      border-radius: 10px;
      margin: 20px 0;
    }
    
    .demo-buttons {
      display: flex;
      justify-content: center;
      flex-wrap: wrap;
      gap: 10px;
      margin: 20px 0;
    }
  </style>
</head>
<body>
  <h1>⚡ ES6 Features Practice</h1>
  
  <div class="info-box">
    <h3>🎯 Your Mission:</h3>
    <ol>
      <li>Use <code>Arrow Functions</code> for cleaner, shorter syntax</li>
      <li>Use <code>Template Literals</code> for easier string formatting</li>
      <li>Use <code>Destructuring</code> to unpack arrays and objects</li>
      <li>Refactor old JavaScript code to modern ES6 style!</li>
    </ol>
  </div>
  
  <div class="demo-area">
    <h3>⚡ ES6 Feature Playground</h3>
    
    <div class="api-info">
      <p id="feature-status">Current Feature: <span id="active-feature">Ready to explore ES6!</span></p>
      <p id="last-demo">Last demo: None</p>
    </div>
    
    <div class="input-section">
      <button id="arrow-demo-btn">🏹 Arrow Functions</button>
      <button id="template-demo-btn">📝 Template Literals</button>
      <button id="destructure-demo-btn">📦 Destructuring</button>
    </div>
    
    <div class="stats-area">
      <p id="demo-count">Features Explored: 0</p>
      <p id="status-message">Click any button to explore ES6 features!</p>
    </div>
    
    <div id="code-output" style="padding: 20px; background: rgba(255,255,255,0.9); border-radius: 10px; margin: 20px 0; border-left: 4px solid #ff9a9e;">
      <h4 style="margin-top: 0; color: #e91e63;">💻 Live Code Output</h4>
      <div id="console-output" style="background: #2c3e50; color: #ecf0f1; padding: 15px; border-radius: 8px; font-family: 'Courier New', monospace; font-size: 14px; min-height: 100px; overflow-x: auto;">
        <div>// Output will appear here...</div>
      </div>
    </div>
    
    <div id="arrow-display" style="display: none; padding: 20px; background: rgba(255,193,7,0.1); border-radius: 10px; margin: 20px 0;">
      <h4 style="margin-top: 0; color: #ff9800;">🏹 Arrow Functions Demo</h4>
      <div id="arrow-code" style="font-family: 'Courier New', monospace; font-size: 14px; line-height: 1.5;"></div>
    </div>
    
    <div id="template-display" style="display: none; padding: 20px; background: rgba(76,175,80,0.1); border-radius: 10px; margin: 20px 0;">
      <h4 style="margin-top: 0; color: #4caf50;">� Template Literals Demo</h4>
      <div id="template-code" style="font-family: 'Courier New', monospace; font-size: 14px; line-height: 1.5;"></div>
    </div>
    
    <div id="destructure-display" style="display: none; padding: 20px; background: rgba(156,39,176,0.1); border-radius: 10px; margin: 20px 0;">
      <h4 style="margin-top: 0; color: #9c27b0;">📦 Destructuring Demo</h4>
      <div id="destructure-code" style="font-family: 'Courier New', monospace; font-size: 14px; line-height: 1.5;"></div>
    </div>
    
    <div class="demo-buttons">
      <button id="refactor-demo-btn">🔄 Refactor Old Code</button>
      <button id="clear-output-btn">🧹 Clear Output</button>
    </div>
    
    <div class="message-area">
      <h4>⚡ ES6 Tips:</h4>
      <p id="tip-text">Click buttons to see ES6 features in action! Watch the console output to learn modern JavaScript syntax.</p>
    </div>
  </div>

  
  <script>
    `}<InlineEditable>{`// ⚡ ES6 Features Practice - Modern JavaScript Syntax
    
    // TODO: Select DOM elements
    const arrowDemoBtn = document.querySelector("#arrow-demo-btn");
    const templateDemoBtn = document.querySelector("#template-demo-btn");
    const destructureDemoBtn = document.querySelector("#destructure-demo-btn");
    const refactorDemoBtn = document.querySelector("#refactor-demo-btn");
    const clearOutputBtn = document.querySelector("#clear-output-btn");
    
    // TODO: Select display elements
    const statusMessage = document.querySelector("#status-message");
    const tipText = document.querySelector("#tip-text");
    const demoCount = document.querySelector("#demo-count");
    const featureStatus = document.querySelector("#feature-status");
    const lastDemo = document.querySelector("#last-demo");
    
    // TODO: Select output display elements
    const consoleOutput = document.querySelector("#console-output");
    const arrowDisplay = document.querySelector("#arrow-display");
    const arrowCode = document.querySelector("#arrow-code");
    const templateDisplay = document.querySelector("#template-display");
    const templateCode = document.querySelector("#template-code");
    const destructureDisplay = document.querySelector("#destructure-display");
    const destructureCode = document.querySelector("#destructure-code");
    
    // TODO: Track feature demonstrations
    let featuresDemoed = 0;
    
    // TODO: Sample data for demonstrations
    const sampleData = {
      person: { name: "Alex", age: 25, city: "Tokyo", hobby: "photography" },
      movies: ["Inception", "The Matrix", "Interstellar"],
      colors: ["red", "green", "blue", "purple"],
      user: { 
        id: 123, 
        profile: { 
          name: "Sarah", 
          email: "sarah@example.com",
          preferences: { theme: "dark", language: "en" }
        }
      }
    };
    
    // TODO: Utility function to add output to console
    function addToConsole(text, type = 'log') {
      const outputLine = document.createElement('div');
      outputLine.style.marginBottom = '5px';
      
      if (type === 'comment') {
        outputLine.style.color = '#95a5a6';
        outputLine.innerText = \`// \${text}\`;
      } else if (type === 'error') {
        outputLine.style.color = '#e74c3c';
        outputLine.innerText = \`❌ \${text}\`;
      } else if (type === 'success') {
        outputLine.style.color = '#27ae60';
        outputLine.innerText = \`✅ \${text}\`;
      } else {
        outputLine.style.color = '#ecf0f1';
        outputLine.innerText = text;
      }
      
      consoleOutput.appendChild(outputLine);
      consoleOutput.scrollTop = consoleOutput.scrollHeight;
    }
    
    // TODO: Clear console output
    function clearConsole() {
      consoleOutput.innerHTML = '<div>// Output cleared...</div>';
    }
    
    // TODO: Update demo statistics
    function updateDemoStats(feature) {
      featuresDemoed++;
      demoCount.innerText = \`Features Explored: \${featuresDemoed}\`;
      const now = new Date().toLocaleTimeString();
      lastDemo.innerText = \`Last demo: \${now}\`;
      featureStatus.innerHTML = \`Current Feature: <span id="active-feature">\${feature}</span>\`;
    }
    
    // TODO: Hide all demo displays
    function hideAllDemos() {
      arrowDisplay.style.display = "none";
      templateDisplay.style.display = "none";
      destructureDisplay.style.display = "none";
    }
    
    // TODO: Demo Arrow Functions
    function demonstrateArrowFunctions() {
      hideAllDemos();
      arrowDisplay.style.display = "block";
      
      clearConsole();
      addToConsole("=== Arrow Functions Demo ===", 'comment');
      
      // Show old vs new syntax
      const oldWay = \`
// ❌ Old ES5 Function Syntax
function greet(name) {
  return "Hello, " + name + "!";
}

function add(a, b) {
  return a + b;
}

function multiply(x, y) {
  return x * y;
}\`;
      
      const newWay = \`
// ✅ New ES6 Arrow Function Syntax
const greet = (name) => {
  return \`Hello, \${name}!\`;
};

// Even shorter for single expressions
const add = (a, b) => a + b;
const multiply = (x, y) => x * y;

// Single parameter doesn't need parentheses
const square = x => x * x;\`;
      
      arrowCode.innerHTML = \`
        <h5>Old ES5 Style:</h5>
        <pre style="background: #34495e; padding: 10px; border-radius: 5px; color: #ecf0f1;">\${oldWay}</pre>
        <h5>New ES6 Style:</h5>
        <pre style="background: #27ae60; padding: 10px; border-radius: 5px; color: #ecf0f1;">\${newWay}</pre>
      \`;
      
      // Demonstrate live examples
      const greet = (name) => \`Hello, \${name}!\`;
      const add = (a, b) => a + b;
      const square = x => x * x;
      
      addToConsole(\`greet("Alex"): \${greet("Alex")}\`);
      addToConsole(\`add(5, 3): \${add(5, 3)}\`);
      addToConsole(\`square(4): \${square(4)}\`);
      
      addToConsole("Arrow functions are shorter and cleaner!", 'success');
      
      updateDemoStats("Arrow Functions 🏹");
      statusMessage.innerText = "Arrow Functions: Shorter, cleaner function syntax!";
      statusMessage.style.color = "#ff9800";
    }
    
    // TODO: Demo Template Literals
    function demonstrateTemplateLiterals() {
      hideAllDemos();
      templateDisplay.style.display = "block";
      
      clearConsole();
      addToConsole("=== Template Literals Demo ===", 'comment');
      
      const oldWay = \`
// ❌ Old ES5 String Concatenation
var name = "Sarah";
var age = 25;
var city = "New York";

var message = "Hi, my name is " + name + 
              " and I'm " + age + " years old. " +
              "I live in " + city + ".";

var multiline = "This is line 1" +
                "\\nThis is line 2" +
                "\\nThis is line 3";\`;
      
      const newWay = \`
// ✅ New ES6 Template Literals
const name = "Sarah";
const age = 25;
const city = "New York";

const message = \\\`Hi, my name is \\\${name} and I'm \\\${age} years old. 
I live in \\\${city}.\\\`;

const multiline = \\\`This is line 1
This is line 2
This is line 3\\\`;

// Expressions work too!
const mathResult = \\\`5 + 3 = \\\${5 + 3}\\\`;\`;
      
      templateCode.innerHTML = \`
        <h5>Old ES5 Style:</h5>
        <pre style="background: #34495e; padding: 10px; border-radius: 5px; color: #ecf0f1;">\${oldWay}</pre>
        <h5>New ES6 Style:</h5>
        <pre style="background: #27ae60; padding: 10px; border-radius: 5px; color: #ecf0f1;">\${newWay}</pre>
      \`;
      
      // Demonstrate live examples
      const name = "Alex";
      const age = 28;
      const hobby = "coding";
      
      const introduction = \`Hi! I'm \${name}, I'm \${age} years old, and I love \${hobby}!\`;
      const calculation = \`10 * 5 = \${10 * 5}\`;
      const multiline = \`Line 1: Name is \${name}
Line 2: Age is \${age}
Line 3: Hobby is \${hobby}\`;
      
      addToConsole(\`Introduction: \${introduction}\`);
      addToConsole(\`Calculation: \${calculation}\`);
      addToConsole("Multi-line example:");
      addToConsole(multiline);
      
      addToConsole("Template literals make strings much easier!", 'success');
      
      updateDemoStats("Template Literals 📝");
      statusMessage.innerText = "Template Literals: Easy variable interpolation and multi-line strings!";
      statusMessage.style.color = "#4caf50";
    }
    
    // TODO: Demo Destructuring
    function demonstrateDestructuring() {
      hideAllDemos();
      destructureDisplay.style.display = "block";
      
      clearConsole();
      addToConsole("=== Destructuring Demo ===", 'comment');
      
      const oldWay = \`
// ❌ Old ES5 Object Property Access
var person = { name: "Mike", age: 30, city: "Tokyo" };
var colors = ["red", "green", "blue"];

var name = person.name;
var age = person.age;
var city = person.city;

var firstColor = colors[0];
var secondColor = colors[1];\`;
      
      const newWay = \`
// ✅ New ES6 Destructuring
const person = { name: "Mike", age: 30, city: "Tokyo" };
const colors = ["red", "green", "blue"];

// Object destructuring
const { name, age, city } = person;

// Array destructuring
const [firstColor, secondColor] = colors;

// Renaming variables
const { name: personName } = person;

// Default values
const { country = "Japan" } = person;\`;
      
      destructureCode.innerHTML = \`
        <h5>Old ES5 Style:</h5>
        <pre style="background: #34495e; padding: 10px; border-radius: 5px; color: #ecf0f1;">\${oldWay}</pre>
        <h5>New ES6 Style:</h5>
        <pre style="background: #27ae60; padding: 10px; border-radius: 5px; color: #ecf0f1;">\${newWay}</pre>
      \`;
      
      // Demonstrate live examples with our sample data
      const { name, age, city, hobby } = sampleData.person;
      const [firstMovie, secondMovie] = sampleData.movies;
      const [primaryColor, , tertiaryColor] = sampleData.colors; // Skip second element
      
      // Nested destructuring
      const { user: { profile: { name: userName, email } } } = sampleData;
      
      addToConsole(\`Person: \${name}, \${age} years old, lives in \${city}\`);
      addToConsole(\`Movies: \${firstMovie} and \${secondMovie}\`);
      addToConsole(\`Colors: \${primaryColor} and \${tertiaryColor}\`);
      addToConsole(\`User: \${userName} (\${email})\`);
      
      addToConsole("Destructuring makes object/array access super clean!", 'success');
      
      updateDemoStats("Destructuring 📦");
      statusMessage.innerText = "Destructuring: Unpack arrays and objects with ease!";
      statusMessage.style.color = "#9c27b0";
    }
    
    // Function to demonstrate refactoring old code to ES6
    function demonstrateRefactoring() {
      statusMessage.innerText = "♻️ Demonstrating ES6 refactoring...";
      
      const refactorCode = document.getElementById('refactor-code');
      
      const oldCode = \`
// ❌ Old ES5 Function
function calculateTotal(items) {
  var total = 0;
  for (var i = 0; i < items.length; i++) {
    total += items[i].price;
  }
  return total;
}

var users = [
  { name: "John", age: 25 },
  { name: "Jane", age: 30 }
];

var userNames = [];
for (var i = 0; i < users.length; i++) {
  userNames.push(users[i].name);
}\`;
      
      const newCode = \`
// ✅ New ES6 Version
const calculateTotal = (items) => 
  items.reduce((total, item) => total + item.price, 0);

const users = [
  { name: "John", age: 25 },
  { name: "Jane", age: 30 }
];

const userNames = users.map(({ name }) => name);\`;
      
      refactorCode.innerHTML = \`
        <h5>Before ES6 Refactor:</h5>
        <pre style="background: #34495e; padding: 10px; border-radius: 5px; color: #ecf0f1;">\${oldCode}</pre>
        <h5>After ES6 Refactor:</h5>
        <pre style="background: #27ae60; padding: 10px; border-radius: 5px; color: #ecf0f1;">\${newCode}</pre>
      \`;
      
      addToConsole("Refactored ES5 → ES6: More concise and readable!", 'success');
      addToConsole("Used: arrow functions, destructuring, array methods");
      
      updateDemoStats("Refactoring 🔧");
      statusMessage.innerText = "ES6 refactoring complete: cleaner, shorter code!";
      statusMessage.style.color = "#ff6b6b";
    }
    
    // Function to clear all output displays
    function clearAllOutputs() {
      statusMessage.innerText = "🧹 Clearing all ES6 demo outputs...";
      
      // Clear all demo code display areas
      const codeAreas = [
        'arrow-code',
        'template-code', 
        'destructure-code',
        'refactor-code'
      ];
      
      codeAreas.forEach(id => {
        const element = document.getElementById(id);
        if (element) {
          element.innerHTML = '<p style="color: #9c27b0; font-style: italic;">Demo output cleared. Click a button above to see ES6 features!</p>';
        }
      });
      
      // Clear console output
      consoleOutput.innerHTML = '<div style="color: #9c27b0;">🎯 Console cleared! Ready for new ES6 demos.</div>';
      
      // Reset stats
      updateDemoStats("Console Cleared 🧹");
      statusMessage.innerText = "All outputs cleared. Ready for ES6 exploration!";
      statusMessage.style.color = "#9c27b0";
    }
    
    // Helper function to add messages to console output
    function addToConsole(message, type = 'info') {
      const timestamp = new Date().toLocaleTimeString();
      const colorClass = type === 'success' ? '#27ae60' : 
                        type === 'error' ? '#e74c3c' : '#9c27b0';
      
      consoleOutput.innerHTML += \`
        <div style="margin-bottom: 5px; color: \${colorClass};">
          <span style="color: #7f8c8d;">\${timestamp}</span> - \${message}
        </div>
      \`;
      consoleOutput.scrollTop = consoleOutput.scrollHeight;
    }
    
    // Helper function to update demo statistics
    function updateDemoStats(feature) {
      const timestamp = new Date().toLocaleString();
      demoStats.innerHTML = \`
        <div style="color: #9c27b0;">
          <strong>🎯 Last Demo:</strong> \${feature}<br>
          <strong>⏰ Time:</strong> \${timestamp}<br>
          <strong>📊 Total Demos:</strong> \${document.querySelectorAll('#console-output div').length + 1}
        </div>
      \`;
    }
    
    // Add event listeners for ES6 demo buttons
    document.getElementById("arrow-demo-btn").addEventListener("click", demonstrateArrowFunctions);
    document.getElementById("template-demo-btn").addEventListener("click", demonstrateTemplateLiterals);
    document.getElementById("destructure-demo-btn").addEventListener("click", demonstrateDestructuring);
    document.getElementById("refactor-demo-btn").addEventListener("click", demonstrateRefactoring);
    document.getElementById("clear-output-btn").addEventListener("click", clearAllOutputs);
    
    if (showFetchCodeBtn) {
      showFetchCodeBtn.addEventListener("click", showFetchCode);
    }
    
    if (clearDisplayBtn) {
      clearDisplayBtn.addEventListener("click", clearAllDisplays);
    }
    
    // Initialize the ES6 features demo
    function initializeES6Demo() {
      statusMessage.innerText = "Welcome to ES6 Features Practice! ✨";
      statusMessage.style.color = "#9c27b0";
      
      // Initialize sample data for demonstrations
      addToConsole("ES6 Demo initialized with sample data!", 'success');
      addToConsole(\`Sample person: \${sampleData.person.name}\`);
      addToConsole(\`Sample movies: \${sampleData.movies.length} available\`);
      
      updateDemoStats("Demo Ready 🎯");
      
      console.log("🚀 ES6 Features Demo initialized!");
      console.log("Sample data:", sampleData);
    }
    
    // Initialize when page loads
    initializeES6Demo();`}</InlineEditable>{`
  </script>
  
  <div style="margin-top: 3rem; padding: 1.5rem; background: rgba(255,255,255,0.9); border-radius: 10px; backdrop-filter: blur(10px); max-width: 800px; margin-left: auto; margin-right: auto;">
    <h3>🎯 ES6 Features Checklist</h3>
    <ul style="text-align: left;">
      <li><strong>Arrow Functions:</strong> Shorter, cleaner function syntax with => </li>
      <li><strong>Template Literals:</strong> String interpolation with backticks and \${}</li>
      <li><strong>Destructuring:</strong> Extract values from objects and arrays easily</li>
      <li><strong>const/let:</strong> Better variable declarations than var</li>
      <li><strong>Modern Patterns:</strong> More readable and maintainable code</li>
    </ul>
    
    <div style="margin-top: 1rem; padding: 1rem; background: rgba(156,39,176,0.1); border-radius: 8px;">
      <strong>✨ ES6 Advantages:</strong>
      <ul style="text-align: left;">
        <li>Less code to write the same functionality</li>
        <li>More readable and easier to understand</li>
        <li>Better scope control with const and let</li>
        <li>Standard in modern JavaScript development!</li>
      </ul>
    </div>
  </div>
</body>
</html>`}
            </CodeBlock>

            <DescriptionBlock category="js" lessonId="9">
                <Lesson>
                    <h1>✨ JavaScript Lesson 9: ES6 Features – Arrow Functions, Template Literals, Destructuring</h1>

                    <p>
                        ES6 (ES2015) transformed JavaScript with amazing new features that make code cleaner, shorter, and more readable! 
                        Master <strong>arrow functions</strong>, <strong>template literals</strong>, and <strong>destructuring</strong> — 
                        the essential modern JavaScript syntax that <strong>every developer uses today</strong>!
                    </p>

                    <Section title="� Arrow Functions">
                        <p>Arrow functions provide a shorter syntax for writing functions using the =&gt; arrow. They're perfect for callbacks and make code more concise!</p>

                        <table style={{ width: '100%', borderCollapse: 'collapse', marginTop: '10px' }}>
                            <thead>
                                <tr style={{ backgroundColor: '#f0f0f0' }}>
                                    <th style={{ padding: '8px', border: '1px solid #ddd' }}>Old ES5 Way</th>
                                    <th style={{ padding: '8px', border: '1px solid #ddd' }}>New ES6 Arrow</th>
                                    <th style={{ padding: '8px', border: '1px solid #ddd' }}>Benefits</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td style={{ padding: '8px', border: '1px solid #ddd' }}>function(x) {"{return x * 2;}"}</td>
                                    <td style={{ padding: '8px', border: '1px solid #ddd' }}>x =&gt; x * 2</td>
                                    <td style={{ padding: '8px', border: '1px solid #ddd' }}>Much shorter!</td>
                                </tr>
                                <tr>
                                    <td style={{ padding: '8px', border: '1px solid #ddd' }}>function(a,b) {"{return a + b;}"}</td>
                                    <td style={{ padding: '8px', border: '1px solid #ddd' }}>(a, b) =&gt; a + b</td>
                                    <td style={{ padding: '8px', border: '1px solid #ddd' }}>Cleaner syntax</td>
                                </tr>
                                <tr>
                                    <td style={{ padding: '8px', border: '1px solid #ddd' }}>function() {"{console.log('hi');}"}</td>
                                    <td style={{ padding: '8px', border: '1px solid #ddd' }}>() =&gt; console.log('hi')</td>
                                    <td style={{ padding: '8px', border: '1px solid #ddd' }}>Less typing!</td>
                                </tr>
                            </tbody>
                        </table>

                        <p><strong>Example:</strong></p>
                        <InteractiveCodeBlock language="javascript" hoverable={true}>
                            {`// ❌ Old ES5 function syntax
function addNumbers(a, b) {
  return a + b;
}

function multiplyByTwo(x) {
  return x * 2;
}

var numbers = [1, 2, 3, 4, 5];
var doubled = numbers.map(function(num) {
  return num * 2;
});

// ✅ New ES6 arrow function syntax
const addNumbers = (a, b) => a + b;

const multiplyByTwo = x => x * 2; // Single parameter, no parentheses needed

const numbers = [1, 2, 3, 4, 5];
const doubled = numbers.map(num => num * 2); // Much cleaner!

// Arrow functions with multiple lines
const processUser = (user) => {
  const fullName = \`\${user.first} \${user.last}\`;
  const age = new Date().getFullYear() - user.birthYear;
  return { fullName, age };
};

// Perfect for event handlers
button.addEventListener('click', () => console.log('Clicked!'));

// Great for array methods
const adults = users.filter(user => user.age >= 18);
const names = users.map(user => user.name);`}
                        </InteractiveCodeBlock>
                        
                        <p>✅ <strong>Arrow functions are shorter, cleaner, and perfect for modern JavaScript development!</strong></p>
                    </Section>

                    <Section title="📝 Template Literals">
                        <p>Template literals use backticks `` and \${} to embed variables directly in strings. No more messy string concatenation!</p>

                        <table style={{ width: '100%', borderCollapse: 'collapse', marginTop: '10px' }}>
                            <thead>
                                <tr style={{ backgroundColor: '#f0f0f0' }}>
                                    <th style={{ padding: '8px', border: '1px solid #ddd' }}>Old ES5 Way</th>
                                    <th style={{ padding: '8px', border: '1px solid #ddd' }}>New Template Literals</th>
                                    <th style={{ padding: '8px', border: '1px solid #ddd' }}>Benefits</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td style={{ padding: '8px', border: '1px solid #ddd' }}>"Hello " + name + "!"</td>
                                    <td style={{ padding: '8px', border: '1px solid #ddd' }}>`Hello ${"{"}{name}{"}"}"!`</td>
                                    <td style={{ padding: '8px', border: '1px solid #ddd' }}>Much cleaner!</td>
                                </tr>
                                <tr>
                                    <td style={{ padding: '8px', border: '1px solid #ddd' }}>"Score: " + score</td>
                                    <td style={{ padding: '8px', border: '1px solid #ddd' }}>{"`Score: ${score}`"}</td>
                                    <td style={{ padding: '8px', border: '1px solid #ddd' }}>Can use variables!</td>
                                </tr>
                                <tr>
                                    <td style={{ padding: '8px', border: '1px solid #ddd' }}>Multi-line strings with \n</td>
                                    <td style={{ padding: '8px', border: '1px solid #ddd' }}>Real multi-line strings</td>
                                    <td style={{ padding: '8px', border: '1px solid #ddd' }}>No escape characters!</td>
                                </tr>
                            </tbody>
                        </table>

                        <InteractiveCodeBlock language="javascript" hoverable={true}>
                            {`// ❌ Old ES5 string concatenation
var name = "Alice";
var age = 25;
var city = "Tokyo";

var message = "Hello, my name is " + name + 
              " and I am " + age + " years old. " +
              "I live in " + city + ".";

// ✅ New ES6 template literals  
const name = "Alice";
const age = 25; 
const city = "Tokyo";

const message = \`Hello, my name is \${name} 
and I am \${age} years old.
I live in \${city}.\`;

// Template literals can span multiple lines naturally!
const poem = \`
  Roses are red,
  Violets are blue,
  Template literals
  Make coding easy for you!
\`;

// Expressions inside template literals
const score1 = 85;
const score2 = 92;
const average = \`Average score: \${(score1 + score2) / 2}\`;

// Function calls inside templates
const greeting = \`Today is \${new Date().toDateString()}\`;

// HTML templates with variables
const user = { name: "Bob", email: "bob@example.com" };
const card = \`
  <div class="user-card">
    <h2>\${user.name}</h2>
    <p>Email: \${user.email}</p>
    <p>Joined: \${new Date().getFullYear()}</p>
  </div>
\`;

// Real-world example: Update UI with API data
async function displayCatFact() {
  document.getElementById("loading").style.display = "block";
  
  const response = await fetch("https://catfact.ninja/fact");
  const data = await response.json();
  
  document.getElementById("loading").style.display = "none";
  document.getElementById("fact").innerText = data.fact;
}`}
                        </InteractiveCodeBlock>
                        
                        <p>✅ <strong>Template literals make string building much easier and more readable!</strong></p>
                    </Section>

                    <Section title="📦 Destructuring">
                        <p>Destructuring lets you unpack values from arrays and properties from objects into distinct variables. It's like opening a box and taking out what you need!</p>
                        
                        <InteractiveCodeBlock language="javascript" hoverable={true}>
                            {`// ❌ Old ES5 way - extracting values manually
var person = { name: "Sarah", age: 28, city: "Paris" };
var colors = ["red", "green", "blue"];

var name = person.name;
var age = person.age;
var city = person.city;

var firstColor = colors[0];
var secondColor = colors[1];

// ✅ New ES6 destructuring - much cleaner!
const person = { name: "Sarah", age: 28, city: "Paris" };
const colors = ["red", "green", "blue"];

// Object destructuring
const { name, age, city } = person;

// Array destructuring  
const [firstColor, secondColor] = colors;

console.log(name, age, city); // Sarah 28 Paris
console.log(firstColor, secondColor); // red green

// Advanced destructuring examples
const user = {
  id: 1,
  name: "Alex",
  profile: {
    email: "alex@example.com",
    preferences: {
      theme: "dark",
      notifications: true
    }
  }
};

// Nested destructuring
const { name, profile: { email, preferences: { theme } } } = user;

// Renaming variables
const { name: userName, id: userId } = user;

// Array destructuring with skipping
const numbers = [10, 20, 30, 40, 50];
const [first, , third] = numbers; // Skip second element

// Default values
const { country = "Unknown" } = user; // "Unknown" if country doesn't exist`}
                        </InteractiveCodeBlock>

                        <p><strong>📦 Pro Tip:</strong> Destructuring makes your code cleaner and easier to read - use it everywhere!</p>
                    </Section>

                    <Section title="� Real-World ES6 Refactoring">
                        <p>See how ES6 features work together to transform messy old code into clean, modern JavaScript. This is how professional developers write code today!</p>
                        
                        <InteractiveCodeBlock language="javascript" hoverable={true}>
                            {`// 🔄 BEFORE: Old ES5 Code (messy and verbose)
function processUsers(users) {
  var activeUsers = [];
  var userNames = [];
  var totalAge = 0;
  
  for (var i = 0; i < users.length; i++) {
    var user = users[i];
    if (user.isActive) {
      activeUsers.push(user);
      userNames.push(user.name);
      totalAge += user.age;
    }
  }
  
  var averageAge = totalAge / activeUsers.length;
  
  return {
    active: activeUsers,
    names: userNames,
    avgAge: averageAge
  };
}

// 🎯 AFTER: Modern ES6 Refactor (clean and concise)
const processUsers = (users) => {
  const activeUsers = users.filter(({ isActive }) => isActive);
  const userNames = activeUsers.map(({ name }) => name);
  const totalAge = activeUsers.reduce((sum, { age }) => sum + age, 0);
  const averageAge = totalAge / activeUsers.length;
  
  return { activeUsers, userNames, averageAge };
};
  async getCatFact() {
    try {
      const data = await this.fetchData(this.apiEndpoints.catFacts, "cat fact");
      this.displayData("fact", "🐱 Random Cat Fact", data.fact);
    } catch (error) {
      console.error("Failed to get cat fact:", error);
    }
// Even more ES6 transformation examples

// 🔄 BEFORE: Building HTML with string concatenation
function createUserCard(user) {
  var html = "<div class='user-card'>";
  html += "<h3>" + user.name + "</h3>";
  html += "<p>Age: " + user.age + "</p>";
  html += "<p>Email: " + user.email + "</p>";
  html += "</div>";
  return html;
}

// 🎯 AFTER: Template literals + destructuring
const createUserCard = ({ name, age, email }) => \`
  <div class="user-card">
    <h3>\${name}</h3>
    <p>Age: \${age}</p>
    <p>Email: \${email}</p>
  </div>
\`;

// 🔄 BEFORE: Event handling with old functions
var buttons = document.querySelectorAll('.btn');
for (var i = 0; i < buttons.length; i++) {
  buttons[i].addEventListener('click', function(event) {
    console.log('Button clicked:', event.target.textContent);
  });
}

// 🎯 AFTER: Modern event handling with arrow functions
const buttons = document.querySelectorAll('.btn');
buttons.forEach(btn => 
  btn.addEventListener('click', ({ target }) => 
    console.log(\`Button clicked: \${target.textContent}\`)
  )
);
  showLoading(message) {
    const loading = document.getElementById("loading");
    if (loading) {
      loading.innerText = message;
// The power of combining ALL ES6 features together!

// 🔄 BEFORE: Complex data processing (old way)
function processApiData(response) {
  var users = response.data.users;
  var result = [];
  
  for (var i = 0; i < users.length; i++) {
    var user = users[i];
    if (user.age >= 18 && user.isActive) {
      var processedUser = {
        id: user.id,
        fullName: user.firstName + " " + user.lastName,
        email: user.email,
        summary: "User " + user.firstName + " is " + user.age + " years old"
      };
      result.push(processedUser);
    }
  }
  return result;
}

// 🎯 AFTER: Modern ES6 transformation
const processApiData = ({ data: { users } }) => 
  users
    .filter(({ age, isActive }) => age >= 18 && isActive)
    .map(({ id, firstName, lastName, email, age }) => ({
      id,
      fullName: \`\${firstName} \${lastName}\`,
      email,
      summary: \`User \${firstName} is \${age} years old\`
    }));

// Result: 15+ lines became 6 lines, much more readable!`}
                        </InteractiveCodeBlock>

                        <p><strong>ES6 Benefits:</strong></p>
                        <ul>
                            <li>🏹 Arrow functions: Shorter, cleaner function syntax</li>
                            <li>📝 Template literals: Easy string interpolation with \${}</li>
                            <li>� Destructuring: Extract values from objects and arrays easily</li>
                            <li>✨ Combined together: Code becomes shorter, cleaner, and more readable!</li>
                        </ul>
                    </Section>

                    <Tip type="success">
                        <strong>Fetch API Mastery Unlocked!</strong> You can now fetch data from any API on the internet! 
                        With fetch(), async/await, and error handling, you can build apps that connect to the world. 
                        Your users will love apps with live, real-time data! 🌐✨
                    </Tip>
                </Lesson>

                <Task
                    objective="Refactor old JavaScript code using ES6 features: arrow functions, template literals, and destructuring"
                    validations={[
                        {
                            requirement: 'Use arrow functions (=>) instead of function keyword',
                            validator: (doc) => {
                                const scripts = doc.querySelectorAll('script');
                                let scriptText = '';
                                scripts.forEach(script => scriptText += script.textContent);
                                return scriptText.includes('=>');
                            }
                        },
                        {
                            requirement: 'Use template literals (`${}) instead of string concatenation',
                            validator: (doc) => {
                                const scripts = doc.querySelectorAll('script');
                                let scriptText = '';
                                scripts.forEach(script => scriptText += script.textContent);
                                return scriptText.includes('`') && scriptText.includes('${');
                            }
                        },
                        {
                            requirement: 'Use destructuring to extract values from objects or arrays',
                            validator: (doc) => {
                                const scripts = doc.querySelectorAll('script');
                                let scriptText = '';
                                scripts.forEach(script => scriptText += script.textContent);
                                return scriptText.includes('const {') || scriptText.includes('const [') || scriptText.includes('let {') || scriptText.includes('let [');
                            }
                        },
                        {
                            requirement: 'Use const or let instead of var',
                            validator: (doc) => {
                                const scripts = doc.querySelectorAll('script');
                                let scriptText = '';
                                scripts.forEach(script => scriptText += script.textContent);
                                return (scriptText.includes('const ') || scriptText.includes('let ')) && !scriptText.includes('var ');
                            }
                        },
                        {
                            requirement: 'Use modern ES6 array methods like map, filter, or reduce',
                            validator: (doc) => {
                                const scripts = doc.querySelectorAll('script');
                                let scriptText = '';
                                scripts.forEach(script => scriptText += script.textContent);
                                return scriptText.includes('.map(') || scriptText.includes('.filter(') || scriptText.includes('.reduce(');
                            }
                        }
                    ]}
                    hints={[
                        'Replace function(x) with (x) => or x => for single parameters',
                        'Use `Hello ${name}!` instead of "Hello " + name + "!"',
                        'Use const { name, age } = person instead of var name = person.name',
                        'Try the ES6 demo buttons to see modern syntax in action',
                        'Watch how much shorter and cleaner your code becomes!'
                    ]}
                >

                </Task>

                <Exercise
                    category="js"
                    lessonId="9"
                    title="✨ ES6 Features Quiz"
                    description="Test your understanding of arrow functions, template literals, destructuring, and modern JavaScript!"
                    buttonText="Start ES6 Quiz"
                    tipText="Complete the ES6 refactoring task above to get hands-on experience before taking the quiz!"
                />
            </DescriptionBlock>

            <PreviewBlock />
        </Editor>
    );
};


export default Lesson9;
