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
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Secret Message Game - DOM Basics</title>
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
      background: rgba(255,255,255,0.6);
      padding: 2rem;
      border-radius: 15px;
      backdrop-filter: blur(5px);
    }
    
    button {
      padding: 15px 30px;
      border: none;
      background: #3498db;
      color: white;
      font-size: 18px;
      border-radius: 8px;
      cursor: pointer;
      margin: 10px;
      transition: all 0.3s ease;
      box-shadow: 0 4px 15px rgba(52,152,219,0.3);
    }
    
    button:hover {
      background: #2980b9;
      transform: translateY(-2px);
      box-shadow: 0 6px 20px rgba(52,152,219,0.4);
    }
    
    .hidden-text {
      visibility: hidden;
      color: #e74c3c;
      font-weight: bold;
      font-size: 1.5rem;
      margin: 2rem 0;
      padding: 20px;
      background: rgba(231,76,60,0.1);
      border-radius: 10px;
      border-left: 4px solid #e74c3c;
    }
    
    .message-area {
      background: rgba(255,255,255,0.7);
      padding: 20px;
      border-radius: 10px;
      margin: 20px 0;
    }
    
    .color-demo {
      padding: 20px;
      margin: 15px 0;
      border-radius: 8px;
      background: #ecf0f1;
      transition: all 0.3s ease;
    }
    
    .style-controls {
      display: flex;
      justify-content: center;
      flex-wrap: wrap;
      gap: 10px;
      margin: 20px 0;
    }
  </style>
</head>
<body>
  <h1>🌳 Secret Message Game</h1>
  
  <div class="info-box">
    <h3>🎯 Your Mission:</h3>
    <ol>
      <li>Use <code>querySelector</code> to select HTML elements</li>
      <li>Change text content with <code>innerText</code></li>
      <li>Modify styles using <code>.style</code> properties</li>
      <li>Combine DOM manipulation with event listeners</li>
    </ol>
  </div>
  
  <div class="demo-area">
    <h3>🔍 DOM Selection Demo</h3>
    <p id="demo-text">This text will change when you interact with it!</p>
    
    <div class="style-controls">
      <button id="reveal-btn">🎉 Reveal Secret</button>
      <button id="color-btn">🎨 Change Color</button>
      <button id="size-btn">📏 Change Size</button>
      <button id="reset-btn">🔄 Reset</button>
    </div>
    
    <div id="hidden-message" class="hidden-text">
      🪙 You found the hidden treasure! Congratulations, DOM master! ✨
    </div>
    
    <div class="message-area">
      <h4>Interactive Text Playground:</h4>
      <p id="playground-text">Click buttons above to see DOM magic happen!</p>
    </div>
    
    <div id="color-demo" class="color-demo">
      This box will change colors and styles dynamically!
    </div>
  </div>

  
  <script>
    `}<InlineEditable>{`// 🧩 DOM Basics Practice
    
    // TODO: Select elements using querySelector
    const demoText = document.querySelector("#demo-text");
    const hiddenMessage = document.querySelector("#hidden-message");
    const playgroundText = document.querySelector("#playground-text");
    const colorDemo = document.querySelector("#color-demo");
    
    // TODO: Select all buttons
    const revealBtn = document.querySelector("#reveal-btn");
    const colorBtn = document.querySelector("#color-btn");
    const sizeBtn = document.querySelector("#size-btn");
    const resetBtn = document.querySelector("#reset-btn");
    
    // TODO: Variables to track state
    let isRevealed = false;
    let currentColor = 0;
    let currentSize = 16;
    
    // TODO: Array of colors for cycling
    const colors = ["#e74c3c", "#3498db", "#2ecc71", "#f39c12", "#9b59b6", "#1abc9c"];
    
    // TODO: Function to reveal hidden message
    function revealSecret() {
      if (!isRevealed) {
        // Change visibility and update text
        hiddenMessage.style.visibility = "visible";
        hiddenMessage.style.transform = "scale(1.05)";
        
        // Update button text and demo text
        revealBtn.innerText = "🎊 Revealed!";
        demoText.innerText = "🎉 Secret revealed! The DOM is powerful!";
        demoText.style.color = "#27ae60";
        demoText.style.fontWeight = "bold";
        
        // Update playground
        playgroundText.innerText = "Amazing! You used querySelector and style changes!";
        
        isRevealed = true;
      } else {
        // Hide again
        hiddenMessage.style.visibility = "hidden";
        revealBtn.innerText = "🎉 Reveal Secret";
        demoText.innerText = "This text will change when you interact with it!";
        demoText.style.color = "#333";
        demoText.style.fontWeight = "normal";
        playgroundText.innerText = "Click buttons above to see DOM magic happen!";
        isRevealed = false;
      }
    }
    
    // TODO: Function to cycle through colors
    function changeColor() {
      const newColor = colors[currentColor];
      
      // Change multiple element colors
      demoText.style.color = newColor;
      colorDemo.style.backgroundColor = newColor;
      colorDemo.style.color = "white";
      
      // Update text content
      colorDemo.innerText = \`Current color: \${newColor}\`;
      playgroundText.innerText = \`Color changed to: \${newColor}\`;
      
      // Cycle to next color
      currentColor = (currentColor + 1) % colors.length;
    }
    
    // TODO: Function to change font size
    function changeSize() {
      currentSize += 4;
      if (currentSize > 28) currentSize = 16;
      
      // Apply size changes
      demoText.style.fontSize = currentSize + "px";
      playgroundText.style.fontSize = (currentSize - 2) + "px";
      
      // Update content
      playgroundText.innerText = \`Font size changed to: \${currentSize}px\`;
      
      // Add visual effect
      demoText.style.transition = "all 0.3s ease";
    }
    
    // TODO: Function to reset all styles
    function resetStyles() {
      // Reset demo text
      demoText.innerText = "This text will change when you interact with it!";
      demoText.style.color = "#333";
      demoText.style.fontSize = "16px";
      demoText.style.fontWeight = "normal";
      
      // Reset hidden message
      hiddenMessage.style.visibility = "hidden";
      revealBtn.innerText = "🎉 Reveal Secret";
      
      // Reset playground
      playgroundText.innerText = "Click buttons above to see DOM magic happen!";
      playgroundText.style.fontSize = "16px";
      
      // Reset color demo
      colorDemo.style.backgroundColor = "#ecf0f1";
      colorDemo.style.color = "#333";
      colorDemo.innerText = "This box will change colors and styles dynamically!";
      
      // Reset variables
      isRevealed = false;
      currentColor = 0;
      currentSize = 16;
    }
    
    // TODO: Add event listeners to buttons
    revealBtn.addEventListener("click", revealSecret);
    colorBtn.addEventListener("click", changeColor);
    sizeBtn.addEventListener("click", changeSize);
    resetBtn.addEventListener("click", resetStyles);
    
    // TODO: Add click event to playground text for extra interactivity
    playgroundText.addEventListener("click", () => {
      playgroundText.innerText = "You clicked me! 🖱️ Try the buttons above!";
      playgroundText.style.background = "#fff3cd";
      playgroundText.style.padding = "10px";
      playgroundText.style.borderRadius = "5px";
      
      // Reset after 2 seconds
      setTimeout(() => {
        playgroundText.style.background = "transparent";
        playgroundText.innerText = "Click buttons above to see DOM magic happen!";
      }, 2000);
    });
    
    // TODO: Add hover effects using DOM manipulation
    colorDemo.addEventListener("mouseenter", () => {
      colorDemo.style.transform = "scale(1.02)";
      colorDemo.style.boxShadow = "0 5px 15px rgba(0,0,0,0.2)";
    });
    
    colorDemo.addEventListener("mouseleave", () => {
      colorDemo.style.transform = "scale(1)";
      colorDemo.style.boxShadow = "none";
    });`}</InlineEditable>{`
  </script>
  
  <div style="margin-top: 3rem; padding: 1.5rem; background: rgba(255,255,255,0.1); border-radius: 10px; backdrop-filter: blur(10px); max-width: 800px; margin-left: auto; margin-right: auto;">
    <h3>🎯 Task Checklist</h3>
    <ul style="text-align: left;">
      <li><strong>querySelector:</strong> Select elements by ID (#id), class (.class), or tag</li>
      <li><strong>innerText:</strong> Change text content of HTML elements</li>
      <li><strong>Style Properties:</strong> Modify CSS using .style.propertyName</li>
      <li><strong>Event Listeners:</strong> Combine DOM changes with user interactions</li>
      <li><strong>Dynamic Updates:</strong> Change multiple properties at once</li>
    </ul>
    
    <div style="margin-top: 1rem; padding: 1rem; background: rgba(255,255,255,0.6); border-radius: 8px;">
      <strong>💡 Pro Tips:</strong>
      <ul style="text-align: left;">
        <li>CSS properties in JS use camelCase: <code>backgroundColor</code> not <code>background-color</code></li>
        <li>Always check if element exists: <code>if (element) { ... }</code></li>
        <li>Use <code>innerHTML</code> for HTML content, <code>innerText</code> for plain text</li>
        <li>Combine multiple style changes for smooth animations!</li>
      </ul>
    </div>
  </div>
</body>
</html>`}
            </CodeBlock>

            <DescriptionBlock category="js" lessonId="4">
                <Lesson>
                    <h1>🌳 JavaScript Lesson 4: DOM Basics – querySelector, innerText, style changes</h1>

                    <p>
                        Now it's time to make your JavaScript <strong>interact with web pages</strong>! The <strong>DOM (Document Object Model)</strong> 
                        is how JavaScript talks to HTML elements. You'll learn to <strong>find elements</strong>, <strong>change their content</strong>, 
                        and <strong>modify their styles</strong> — turning static pages into interactive experiences!
                    </p>

                    <Section title="🔍 Finding Elements with querySelector">
                        <p>querySelector is your bridge from JavaScript to HTML! It lets you find and select HTML elements using CSS selector syntax.</p>

                        <table style={{ width: '100%', borderCollapse: 'collapse', marginTop: '10px' }}>
                            <thead>
                                <tr style={{ backgroundColor: '#f0f0f0' }}>
                                    <th style={{ padding: '8px', border: '1px solid #ddd' }}>Selector Type</th>
                                    <th style={{ padding: '8px', border: '1px solid #ddd' }}>Syntax</th>
                                    <th style={{ padding: '8px', border: '1px solid #ddd' }}>Example</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td style={{ padding: '8px', border: '1px solid #ddd' }}><strong>By ID</strong></td>
                                    <td style={{ padding: '8px', border: '1px solid #ddd' }}>#idName</td>
                                    <td style={{ padding: '8px', border: '1px solid #ddd' }}>querySelector('#title')</td>
                                </tr>
                                <tr>
                                    <td style={{ padding: '8px', border: '1px solid #ddd' }}><strong>By Class</strong></td>
                                    <td style={{ padding: '8px', border: '1px solid #ddd' }}>.className</td>
                                    <td style={{ padding: '8px', border: '1px solid #ddd' }}>querySelector('.btn')</td>
                                </tr>
                                <tr>
                                    <td style={{ padding: '8px', border: '1px solid #ddd' }}><strong>By Tag</strong></td>
                                    <td style={{ padding: '8px', border: '1px solid #ddd' }}>tagname</td>
                                    <td style={{ padding: '8px', border: '1px solid #ddd' }}>querySelector('button')</td>
                                </tr>
                            </tbody>
                        </table>

                        <p><strong>Example:</strong></p>
                        <InteractiveCodeBlock language="javascript" hoverable={true}>
                            {`// Select by ID (most specific - should be unique)
let titleElement = document.querySelector('#page-title');
console.log(titleElement); // Returns element with id="page-title"

// Select by class (returns first matching element)
let firstButton = document.querySelector('.button');
console.log(firstButton); // Returns first element with class="button"

// Select by tag name
let firstParagraph = document.querySelector('p');
console.log(firstParagraph); // Returns first <p> element

// Complex selectors
let specificButton = document.querySelector('button.primary');
console.log(specificButton); // Returns button with class="primary"

// Select by attribute
let emailInput = document.querySelector('input[type="email"]');
console.log(emailInput); // Returns first email input field

// Nested selectors
let navLink = document.querySelector('nav ul li a');
console.log(navLink); // Returns first link inside nav > ul > li`}
                        </InteractiveCodeBlock>
                        
                        <p>✅ <strong>querySelector returns the first matching element or null if nothing is found!</strong></p>
                    </Section>

                    <Section title="📝 Changing Text Content">
                        <p>Once you've selected an element, you can change its text content! Use innerText for plain text or innerHTML for HTML content.</p>

                        <table style={{ width: '100%', borderCollapse: 'collapse', marginTop: '10px' }}>
                            <thead>
                                <tr style={{ backgroundColor: '#f0f0f0' }}>
                                    <th style={{ padding: '8px', border: '1px solid #ddd' }}>Property</th>
                                    <th style={{ padding: '8px', border: '1px solid #ddd' }}>Purpose</th>
                                    <th style={{ padding: '8px', border: '1px solid #ddd' }}>Example</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td style={{ padding: '8px', border: '1px solid #ddd' }}><strong>innerText</strong></td>
                                    <td style={{ padding: '8px', border: '1px solid #ddd' }}>Set plain text content</td>
                                    <td style={{ padding: '8px', border: '1px solid #ddd' }}>element.innerText = "Hello"</td>
                                </tr>
                                <tr>
                                    <td style={{ padding: '8px', border: '1px solid #ddd' }}><strong>innerHTML</strong></td>
                                    <td style={{ padding: '8px', border: '1px solid #ddd' }}>Set HTML content</td>
                                    <td style={{ padding: '8px', border: '1px solid #ddd' }}>element.innerHTML = "&lt;b&gt;Bold&lt;/b&gt;"</td>
                                </tr>
                                <tr>
                                    <td style={{ padding: '8px', border: '1px solid #ddd' }}><strong>textContent</strong></td>
                                    <td style={{ padding: '8px', border: '1px solid #ddd' }}>Get/set text including hidden</td>
                                    <td style={{ padding: '8px', border: '1px solid #ddd' }}>element.textContent = "Text"</td>
                                </tr>
                            </tbody>
                        </table>

                        <InteractiveCodeBlock language="javascript" hoverable={true}>
                            {`// Get an element first
let titleElement = document.querySelector('#page-title');
let messageDiv = document.querySelector('#message');

// Change plain text content
titleElement.innerText = "Welcome to My Website!";
messageDiv.innerText = "This is a simple text message.";

// Get current text content
let currentTitle = titleElement.innerText;
console.log("Current title:", currentTitle);

// Append to existing text
let currentMessage = messageDiv.innerText;
messageDiv.innerText = currentMessage + " Added this text!";

// Change HTML content (includes formatting)
messageDiv.innerHTML = "<strong>Bold text</strong> and <em>italic text</em>";

// Clear content
titleElement.innerText = ""; // Clears all text
messageDiv.innerHTML = "";   // Clears all HTML

// Dynamic content with variables
let userName = "Alex";
let greeting = document.querySelector('#greeting');
greeting.innerText = \`Hello, \${userName}! Welcome back.\`;

// Working with numbers
let counter = document.querySelector('#counter');
let count = 0;
counter.innerText = \`Count: \${count}\`;`}
                        </InteractiveCodeBlock>
                        
                        <p>✅ <strong>Use innerText for safety with user input, innerHTML when you need formatting!</strong></p>
                    </Section>

                    <Section title="🎨 Styling Elements Dynamically">
                        <p>The .style property lets you change CSS styles directly from JavaScript! This is perfect for creating interactive animations and visual effects.</p>
                        
                        <InteractiveCodeBlock language="javascript" hoverable={true}>
                            {`// Get an element first
let box = document.querySelector('#colorBox');
let button = document.querySelector('#myButton');

// Change individual style properties
box.style.backgroundColor = "blue";
box.style.color = "white";
box.style.fontSize = "20px";
box.style.padding = "15px";

// CSS properties use camelCase in JavaScript!
box.style.borderRadius = "10px";    // CSS: border-radius
box.style.textAlign = "center";     // CSS: text-align
box.style.boxShadow = "0 4px 8px rgba(0,0,0,0.3)"; // CSS: box-shadow

// Change multiple styles efficiently
Object.assign(box.style, {
    width: "200px",
    height: "100px",
    border: "2px solid red",
    marginTop: "20px",
    transition: "all 0.3s ease"
});

// Dynamic styling with variables
let isRed = true;
box.style.backgroundColor = isRed ? "red" : "blue";

// Get current style values
let currentColor = box.style.backgroundColor;
console.log("Current background:", currentColor);

// Animation-like effects
button.style.transform = "scale(1.1)";
button.style.opacity = "0.8";`}
                        </InteractiveCodeBlock>

                        <p><strong>💡 Remember:</strong> CSS properties become camelCase in JavaScript (background-color → backgroundColor)!</p>
                    </Section>

                    <Section title="⚡ Event Listeners & DOM Interaction">
                        <p>Combine DOM manipulation with event listeners to create fully interactive web experiences!</p>
                        
                        <InteractiveCodeBlock language="javascript" hoverable={true}>
                            {`// Get elements and add event listeners
let changeColorBtn = document.querySelector('#colorButton');
let textElement = document.querySelector('#demoText');
let resetBtn = document.querySelector('#resetButton');

// Array of colors to cycle through
let colors = ["red", "blue", "green", "purple", "orange"];
let colorIndex = 0;

// Function to change color
function changeColor() {
    textElement.style.color = colors[colorIndex];
    textElement.innerText = \`Color changed to: \${colors[colorIndex]}\`;
    
    // Move to next color (cycle back to start if needed)
    colorIndex = (colorIndex + 1) % colors.length;
}

// Function to reset styles
function resetStyles() {
    textElement.style.color = "black";
    textElement.style.fontSize = "16px";
    textElement.style.fontWeight = "normal";
    textElement.innerText = "Text has been reset!";
    colorIndex = 0; // Reset color index
}

// Add event listeners
changeColorBtn.addEventListener('click', changeColor);
resetBtn.addEventListener('click', resetStyles);

// Multiple style changes on click
let fancyBtn = document.querySelector('#fancyButton');
fancyBtn.addEventListener('click', function() {
    textElement.style.fontSize = "24px";
    textElement.style.fontWeight = "bold";
    textElement.style.textShadow = "2px 2px 4px rgba(0,0,0,0.5)";
    textElement.innerText = "Looking fancy! ✨";
});

// Hover effects
textElement.addEventListener('mouseenter', function() {
    this.style.backgroundColor = "lightblue";
});

textElement.addEventListener('mouseleave', function() {
    this.style.backgroundColor = "transparent";
});`}
                        </InteractiveCodeBlock>

                        <p><strong>Key Points:</strong></p>
                        <ul>
                            <li>✅ Use <code>addEventListener()</code> to respond to user interactions</li>
                            <li>✅ Combine multiple DOM changes for rich effects</li>
                            <li>⚡ Create interactive experiences that respond to clicks, hovers, and more</li>
                        </ul>
                    </Section>

                    <Tip type="success">
                        <strong>DOM Mastery Achieved!</strong> You now have the power to make web pages truly interactive! 
                        With querySelector, text changes, and dynamic styling, you can create engaging user experiences that respond to user actions. 
                        This is the foundation of modern web development! �✨
                    </Tip>
                </Lesson>

                <Task
                    objective="Create an interactive color-changing text display using DOM manipulation"
                    validations={[
                        {
                            requirement: 'Use querySelector to select HTML elements by ID or class',
                            validator: (doc) => {
                                const scripts = doc.querySelectorAll('script');
                                let scriptText = '';
                                scripts.forEach(script => scriptText += script.textContent);
                                return scriptText.includes('querySelector(') && 
                                       (scriptText.includes('#') || scriptText.includes('.'));
                            }
                        },
                        {
                            requirement: 'Change text content using innerText or innerHTML',
                            validator: (doc) => {
                                const scripts = doc.querySelectorAll('script');
                                let scriptText = '';
                                scripts.forEach(script => scriptText += script.textContent);
                                return scriptText.includes('innerText') || 
                                       scriptText.includes('innerHTML');
                            }
                        },
                        {
                            requirement: 'Modify element styles using .style property',
                            validator: (doc) => {
                                const scripts = doc.querySelectorAll('script');
                                let scriptText = '';
                                scripts.forEach(script => scriptText += script.textContent);
                                return scriptText.includes('.style.') && 
                                       (scriptText.includes('color') || scriptText.includes('fontSize') || scriptText.includes('backgroundColor'));
                            }
                        },
                        {
                            requirement: 'Add event listeners to make elements interactive',
                            validator: (doc) => {
                                const scripts = doc.querySelectorAll('script');
                                let scriptText = '';
                                scripts.forEach(script => scriptText += script.textContent);
                                return scriptText.includes('addEventListener') && 
                                       scriptText.includes('click');
                            }
                        },
                        {
                            requirement: 'Create a function to handle DOM interactions',
                            validator: (doc) => {
                                const scripts = doc.querySelectorAll('script');
                                let scriptText = '';
                                scripts.forEach(script => scriptText += script.textContent);
                                return (scriptText.includes('function') || scriptText.includes('=>')) &&
                                       (scriptText.includes('.style') || scriptText.includes('innerText'));
                            }
                        }
                    ]}
                    hints={[
                        'Use document.querySelector("#id") to select elements by ID',
                        'Change colors with element.style.color = "red"',
                        'Update text with element.innerText = "New text"',
                        'Add clicks with element.addEventListener("click", function)',
                        'Try the demo buttons to see DOM manipulation in action!'
                    ]}
                >

                </Task>

                <Exercise
                    category="js"
                    lessonId="4"
                    title="🌳 DOM Basics Quiz"
                    description="Test your understanding of querySelector, innerText, style changes, and DOM manipulation!"
                    buttonText="Start DOM Basics Quiz"
                    tipText="Complete the interactive color-changing task above to get hands-on experience before taking the quiz!"
                />
            </DescriptionBlock>

            <PreviewBlock />
        </Editor>
    );
};


export default Lesson4;
