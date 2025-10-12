import React from "react";
import "./Lesson3.css";
import Editor from "../../components/Editor/editor";
import { CodeBlock, DescriptionBlock, PreviewBlock } from "../../components/Editor";
import { InlineEditable } from "../../components/Editor/components/CodeBlock/components";
import { CodeSnippet, Highlight, Tip, Section, Task, Lesson } from "../../components/Editor/components/DescriptionBlock/components";
import InteractiveCodeBlock from "../../components/Editor/components/DescriptionBlock/components/InteractiveCodeBlock";
import HighlightTrigger from "../../components/Editor/components/DescriptionBlock/components/HighlightTrigger";
import Exercise from "../../components/Editor/components/DescriptionBlock/components/Exercise";

const Lesson3 = () => {
    return (
        <Editor>
            <CodeBlock>
                {`<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Number Guessing Game - Conditionals & Loops</title>
  <style>
    body {
      font-family: system-ui, sans-serif;
      text-align: center;
      padding: 40px 20px;
      margin: 0;
      background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
      color: white;
      min-height: 100vh;
    }
    
    h1 {
      color: white;
      margin-bottom: 2rem;
      font-size: 2.5rem;
      text-shadow: 2px 2px 4px rgba(0,0,0,0.3);
    }
    
    .info-box {
      background: rgba(255,255,255,0.1);
      backdrop-filter: blur(10px);
      padding: 25px;
      border-radius: 15px;
      margin: 25px auto;
      border: 1px solid rgba(255,255,255,0.2);
      max-width: 600px;
      text-align: left;
    }
    
    .game-controls {
      margin: 3rem 0;
      background: rgba(255,255,255,0.05);
      padding: 2rem;
      border-radius: 15px;
      backdrop-filter: blur(5px);
    }
    
    button {
      padding: 15px 30px;
      border: none;
      background: rgba(255,255,255,0.2);
      color: white;
      font-size: 18px;
      border-radius: 8px;
      cursor: pointer;
      margin: 10px;
      transition: all 0.3s ease;
      border: 1px solid rgba(255,255,255,0.3);
    }
    
    button:hover {
      background: rgba(255,255,255,0.3);
      transform: translateY(-2px);
      box-shadow: 0 6px 12px rgba(0,0,0,0.2);
    }
    
    .output-area {
      margin-top: 2rem;
      padding: 1.5rem;
      background: rgba(0,0,0,0.2);
      border-radius: 10px;
      border: 1px solid rgba(255,255,255,0.1);
      min-height: 100px;
    }
    
    .stats {
      display: flex;
      justify-content: space-around;
      margin: 2rem 0;
      flex-wrap: wrap;
    }
    
    .stat-item {
      background: rgba(255,255,255,0.1);
      padding: 15px;
      border-radius: 10px;
      margin: 5px;
      flex: 1;
      min-width: 120px;
    }
  </style>
</head>
<body>
  <h1>� Number Guessing Game</h1>
  
  <div class="info-box">
    <h3>🎯 Your Mission:</h3>
    <ol>
      <li>Generate a random number between 1-10</li>
      <li>Use conditionals (if/else) to check guesses</li>
      <li>Create loops (while/for) for multiple attempts</li>
      <li>Practice with break and continue statements</li>
    </ol>
  </div>
  
  <div class="game-controls">
    <button id="start-game">� Start New Game</button>
    <button id="demo-loops">� Demo Loops</button>
    <button id="demo-conditionals">⚖️ Demo Conditionals</button>
  </div>
  
  <div class="stats">
    <div class="stat-item">
      <h4>Current Number</h4>
      <p id="current-number">?</p>
    </div>
    <div class="stat-item">
      <h4>Attempts</h4>
      <p id="attempts">0</p>
    </div>
    <div class="stat-item">
      <h4>Games Won</h4>
      <p id="games-won">0</p>
    </div>
  </div>
  
  <div class="output-area">
    <p id="game-output">Click 'Start New Game' to begin! 🚀</p>
  </div>
  
  <script>
    `}<InlineEditable>{`// 🧩 Conditionals & Loops Practice
    
    // Game variables
    let randomNumber = 0;
    let attempts = 0;
    let gamesWon = 0;
    let gameActive = false;
    
    // TODO: Function to generate random number (1-10)
    function generateRandomNumber() {
      return Math.floor(Math.random() * 10) + 1;
    }
    
    // TODO: Function to update display
    function updateDisplay(message) {
      document.getElementById("game-output").innerHTML = message;
    }
    
    // TODO: Function to update stats
    function updateStats() {
      document.getElementById("current-number").textContent = gameActive ? "?" : randomNumber;
      document.getElementById("attempts").textContent = attempts;
      document.getElementById("games-won").textContent = gamesWon;
    }
    
    // TODO: Main game logic with conditionals
    function makeGuess() {
      if (!gameActive) {
        updateDisplay("⚠️ Start a new game first!");
        return;
      }
      
      const guess = Number(prompt("Guess a number between 1 and 10:"));
      
      // TODO: Input validation with conditionals
      if (isNaN(guess) || guess < 1 || guess > 10) {
        updateDisplay("❌ Please enter a valid number between 1 and 10!");
        return;
      }
      
      attempts++;
      
      // TODO: Main conditional logic
      if (guess === randomNumber) {
        updateDisplay(\`🎉 <strong>Correct!</strong> The number was \${randomNumber}!<br>You won in \${attempts} attempts!<br><em>Click 'Start New Game' to play again.</em>\`);
        gamesWon++;
        gameActive = false;
      } else if (guess < randomNumber) {
        updateDisplay(\`📈 Too low! The number is higher than \${guess}.<br><em>Attempts: \${attempts}</em>\`);
      } else if (guess > randomNumber) {
        updateDisplay(\`📉 Too high! The number is lower than \${guess}.<br><em>Attempts: \${attempts}</em>\`);
      }
      
      updateStats();
      
      // Continue guessing if game is still active
      if (gameActive) {
        setTimeout(makeGuess, 1000);
      }
    }
    
    // TODO: Loop demonstrations
    function demoLoops() {
      updateDisplay("🔄 <strong>Loop Demo:</strong><br>");
      let output = "";
      
      // For loop example
      output += "<strong>For Loop (1 to 5):</strong><br>";
      for (let i = 1; i <= 5; i++) {
        output += \`Count: \${i}<br>\`;
      }
      
      output += "<br><strong>While Loop (countdown from 3):</strong><br>";
      let countdown = 3;
      while (countdown > 0) {
        output += \`Countdown: \${countdown}<br>\`;
        countdown--;
      }
      
      output += "<br><strong>For Loop with break/continue:</strong><br>";
      for (let i = 1; i <= 6; i++) {
        if (i === 3) {
          output += \`Skipped \${i}<br>\`;
          continue;
        }
        if (i === 5) {
          output += \`Stopped at \${i}<br>\`;
          break;
        }
        output += \`Number: \${i}<br>\`;
      }
      
      updateDisplay(output);
    }
    
    // TODO: Conditional demonstrations  
    function demoConditionals() {
      const testScore = 85;
      let output = "⚖️ <strong>Conditional Demo:</strong><br>";
      
      // Basic if-else
      if (testScore >= 90) {
        output += "Grade: A+ (Excellent!)<br>";
      } else if (testScore >= 80) {
        output += "Grade: B+ (Good job!)<br>";
      } else if (testScore >= 70) {
        output += "Grade: C+ (Keep practicing!)<br>";
      } else {
        output += "Grade: F (Need improvement)<br>";
      }
      
      // Multiple conditions
      const age = 20;
      const hasLicense = true;
      
      output += "<br><strong>Complex Conditions:</strong><br>";
      if (age >= 18 && hasLicense) {
        output += "✅ Can drive!<br>";
      } else if (age >= 18 && !hasLicense) {
        output += "⚠️ Old enough, but needs license<br>";
      } else {
        output += "❌ Too young to drive<br>";
      }
      
      updateDisplay(output);
    }
    
    // TODO: Event listeners
    document.getElementById("start-game").addEventListener("click", () => {
      randomNumber = generateRandomNumber();
      attempts = 0;
      gameActive = true;
      updateDisplay("🎮 <strong>New game started!</strong><br>I'm thinking of a number between 1 and 10.<br><em>Get ready to guess!</em>");
      updateStats();
      setTimeout(makeGuess, 1500);
    });
    
    document.getElementById("demo-loops").addEventListener("click", demoLoops);
    document.getElementById("demo-conditionals").addEventListener("click", demoConditionals);
    
    // Initialize display
    updateStats();`}</InlineEditable>{`
  </script>
  
  <div style="margin-top: 3rem; padding: 1.5rem; background: rgba(255,255,255,0.1); border-radius: 10px; backdrop-filter: blur(10px); max-width: 800px; margin-left: auto; margin-right: auto;">
    <h3>🎯 Task Checklist</h3>
    <ul style="text-align: left;">
      <li><strong>Conditionals:</strong> Use if/else if/else to make decisions</li>
      <li><strong>For Loops:</strong> Repeat code a specific number of times</li>
      <li><strong>While Loops:</strong> Keep running while a condition is true</li>
      <li><strong>Break/Continue:</strong> Control loop flow with break and continue</li>
      <li><strong>Random Numbers:</strong> Generate numbers with Math.random()</li>
    </ul>
    
    <div style="margin-top: 1rem; padding: 1rem; background: rgba(255,255,255,0.1); border-radius: 8px;">
      <strong>💡 Pro Tips:</strong>
      <ul style="text-align: left;">
        <li>Use <code>===</code> for strict equality: <code>if (guess === number)</code></li>
        <li>Math.random() gives 0-0.999, multiply by 10 and add 1 for 1-10</li>
        <li><code>while(true)</code> creates infinite loops - use <code>break</code> to exit</li>
        <li>Try the demo buttons to see loops and conditionals in action!</li>
      </ul>
    </div>
  </div>
</body>
</html>`}
            </CodeBlock>

            <DescriptionBlock category="js" lessonId="3">
                <Lesson>
                    <h1>⚖️ JavaScript Lesson 3: Conditionals & Loops – if/else, for, while</h1>

                    <p>
                        So far, you've learned how to run code — but real programs <strong>make decisions</strong> and <strong>repeat actions</strong>. 
                        That's where <strong>conditionals</strong> and <strong>loops</strong> come in! These are the tools that make your programs smart and efficient.
                    </p>

                    <Section title="⚖️ Conditionals (if, else if, else)">
                        <p>Conditionals control which code runs based on a test. They make your programs smart by letting them make decisions!</p>

                        <table style={{ width: '100%', borderCollapse: 'collapse', marginTop: '10px' }}>
                            <thead>
                                <tr style={{ backgroundColor: '#f0f0f0' }}>
                                    <th style={{ padding: '8px', border: '1px solid #ddd' }}>Conditional Type</th>
                                    <th style={{ padding: '8px', border: '1px solid #ddd' }}>When It Runs</th>
                                    <th style={{ padding: '8px', border: '1px solid #ddd' }}>Example</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td style={{ padding: '8px', border: '1px solid #ddd' }}><strong>if</strong></td>
                                    <td style={{ padding: '8px', border: '1px solid #ddd' }}>When condition is true</td>
                                    <td style={{ padding: '8px', border: '1px solid #ddd' }}>if (score &gt; 90) {'{ ... }'}</td>
                                </tr>
                                <tr>
                                    <td style={{ padding: '8px', border: '1px solid #ddd' }}><strong>else if</strong></td>
                                    <td style={{ padding: '8px', border: '1px solid #ddd' }}>When previous if is false, but this is true</td>
                                    <td style={{ padding: '8px', border: '1px solid #ddd' }}>else if (score &gt; 70) {'{ ... }'}</td>
                                </tr>
                                <tr>
                                    <td style={{ padding: '8px', border: '1px solid #ddd' }}><strong>else</strong></td>
                                    <td style={{ padding: '8px', border: '1px solid #ddd' }}>When all previous conditions are false</td>
                                    <td style={{ padding: '8px', border: '1px solid #ddd' }}>else {'{ ... }'}</td>
                                </tr>
                            </tbody>
                        </table>

                        <p><strong>Example:</strong></p>
                        <InteractiveCodeBlock language="javascript" hoverable={true}>
                            {`let score = 85;

// Basic if-else chain
if (score >= 90) {
    console.log("🏆 Excellent! Grade: A");
} else if (score >= 80) {
    console.log("😊 Good job! Grade: B"); 
} else if (score >= 70) {
    console.log("👍 Not bad! Grade: C");
} else if (score >= 60) {
    console.log("😐 Keep trying! Grade: D");
} else {
    console.log("😞 Need improvement! Grade: F");
}

// Multiple conditions with && (and) and || (or)
let age = 20;
let hasLicense = true;

if (age >= 18 && hasLicense) {
    console.log("✅ Can drive!");
} else if (age >= 18 && !hasLicense) {
    console.log("⚠️ Old enough, but needs license");
} else {
    console.log("❌ Too young to drive");
}

// Comparison operators
console.log(5 === 5);    // true (equal)
console.log(5 !== 3);    // true (not equal)
console.log(10 > 5);     // true (greater than)
console.log(3 <= 5);     // true (less than or equal)`}
                        </InteractiveCodeBlock>
                        
                        <p>✅ <strong>JavaScript checks each condition in order. The first one that's true will run!</strong></p>
                    </Section>

                    <Section title="� The for Loop">
                        <p>for loops repeat code a fixed number of times. They're perfect when you know exactly how many times you want something to happen!</p>

                        <table style={{ width: '100%', borderCollapse: 'collapse', marginTop: '10px' }}>
                            <thead>
                                <tr style={{ backgroundColor: '#f0f0f0' }}>
                                    <th style={{ padding: '8px', border: '1px solid #ddd' }}>Part</th>
                                    <th style={{ padding: '8px', border: '1px solid #ddd' }}>Purpose</th>
                                    <th style={{ padding: '8px', border: '1px solid #ddd' }}>Example</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td style={{ padding: '8px', border: '1px solid #ddd' }}><strong>Initialization</strong></td>
                                    <td style={{ padding: '8px', border: '1px solid #ddd' }}>Starting value</td>
                                    <td style={{ padding: '8px', border: '1px solid #ddd' }}>let i = 1</td>
                                </tr>
                                <tr>
                                    <td style={{ padding: '8px', border: '1px solid #ddd' }}><strong>Condition</strong></td>
                                    <td style={{ padding: '8px', border: '1px solid #ddd' }}>When to keep looping</td>
                                    <td style={{ padding: '8px', border: '1px solid #ddd' }}>i &lt;= 5</td>
                                </tr>
                                <tr>
                                    <td style={{ padding: '8px', border: '1px solid #ddd' }}><strong>Increment</strong></td>
                                    <td style={{ padding: '8px', border: '1px solid #ddd' }}>How to change after each loop</td>
                                    <td style={{ padding: '8px', border: '1px solid #ddd' }}>i++</td>
                                </tr>
                            </tbody>
                        </table>

                        <InteractiveCodeBlock language="javascript" hoverable={true}>
                            {`// Basic for loop - count from 1 to 5
for (let i = 1; i <= 5; i++) {
    console.log("Count:", i);
}
// Output: Count: 1, Count: 2, Count: 3, Count: 4, Count: 5

// Loop through an array
let fruits = ["apple", "banana", "orange"];
for (let i = 0; i < fruits.length; i++) {
    console.log(\`Fruit \${i + 1}: \${fruits[i]}\`);
}

// Countdown loop
for (let countdown = 5; countdown > 0; countdown--) {
    console.log(\`Countdown: \${countdown}\`);
}
console.log("🚀 Blast off!");

// Loop with different steps
for (let i = 0; i <= 20; i += 5) {
    console.log("Number:", i); // 0, 5, 10, 15, 20
}

// Nested loops (loop inside a loop)
for (let row = 1; row <= 3; row++) {
    for (let col = 1; col <= 3; col++) {
        console.log(\`Position: (\${row}, \${col})\`);
    }
}`}
                        </InteractiveCodeBlock>
                        
                        <p>✅ <strong>i starts at 1, increases by 1 each loop, and stops when i &gt; 5.</strong></p>
                    </Section>

                    <Section title="� The while Loop">
                        <p>while loops keep running as long as a condition is true. They're great when you don't know exactly how many times you need to loop!</p>
                        
                        <InteractiveCodeBlock language="javascript" hoverable={true}>
                            {`// Basic while loop
let num = 1;
while (num <= 3) {
    console.log("Number:", num);
    num++; // ⚠️ Important: update the variable!
}
// Output: Number: 1, Number: 2, Number: 3

// Countdown with while loop
let countdown = 5;
while (countdown > 0) {
    console.log(\`Countdown: \${countdown}\`);
    countdown--;
}
console.log("🚀 Blast off!");

// User input loop (keeps asking until correct)
let password = "";
while (password !== "secret123") {
    password = prompt("Enter password:");
    if (password !== "secret123") {
        console.log("❌ Wrong password, try again!");
    }
}
console.log("✅ Access granted!");

// Number guessing game loop
const targetNumber = 7;
let guess = 0;
let attempts = 0;

while (guess !== targetNumber) {
    guess = Number(prompt("Guess the number (1-10):"));
    attempts++;
    
    if (guess === targetNumber) {
        console.log(\`🎉 Correct! You got it in \${attempts} attempts!\`);
    } else if (guess < targetNumber) {
        console.log("📈 Too low!");
    } else {
        console.log("📉 Too high!");
    }
}`}
                        </InteractiveCodeBlock>

                        <p><strong>⚠️ Be careful!</strong> If the condition never becomes false, the loop runs forever (infinite loop)!</p>
                    </Section>

                    <Section title="🎯 break and continue">
                        <p>Control your loops with <code>break</code> (exit loop) and <code>continue</code> (skip to next iteration):</p>
                        
                        <InteractiveCodeBlock language="javascript" hoverable={true}>
                            {`// break - exits the loop completely
for (let i = 1; i <= 10; i++) {
    if (i === 5) {
        console.log("Breaking at 5!");
        break; // Stop the loop here
    }
    console.log("Number:", i);
}
// Output: 1, 2, 3, 4, "Breaking at 5!"

// continue - skips to next iteration
for (let i = 1; i <= 5; i++) {
    if (i === 3) {
        console.log("Skipping 3!");
        continue; // Skip the rest of this iteration
    }
    console.log("Number:", i);
}
// Output: 1, 2, "Skipping 3!", 4, 5

// Real example: Finding first even number
for (let i = 1; i <= 20; i++) {
    if (i % 2 === 0) { // Check if even
        console.log(\`First even number found: \${i}\`);
        break; // Stop when we find it
    }
}

// Real example: Print only odd numbers
for (let i = 1; i <= 10; i++) {
    if (i % 2 === 0) { // If even
        continue; // Skip even numbers
    }
    console.log(\`Odd number: \${i}\`);
}
// Output: 1, 3, 5, 7, 9

// break with while loop
let attempts = 0;
while (true) { // Infinite loop
    attempts++;
    let guess = Number(prompt("Guess the number (7):"));
    
    if (guess === 7) {
        console.log("🎉 Correct!");
        break; // Exit the infinite loop
    } else if (attempts >= 3) {
        console.log("❌ Too many attempts!");
        break; // Exit after 3 tries
    }
    console.log("❌ Wrong, try again!");
}`}
                        </InteractiveCodeBlock>

                        <p><strong>Key Points:</strong></p>
                        <ul>
                            <li>✅ <code>continue</code> skips the current iteration</li>
                            <li>✅ <code>break</code> exits the loop completely</li>
                            <li>⚠️ Use <code>break</code> to prevent infinite loops</li>
                        </ul>
                    </Section>

                    <Tip type="success">
                        <strong>Conditionals & Loops Mastery:</strong> With if/else statements, you can make smart decisions. 
                        With loops, you can automate repetitive tasks. Together, they make your programs intelligent and efficient! 
                        These are the building blocks of game logic, user interactions, and data processing. 🎮
                    </Tip>
                </Lesson>

                <Task
                    objective="Create a number guessing game using conditionals, loops, and random number generation"
                    validations={[
                        {
                            requirement: 'Generate a random number between 1-10 using Math.random()',
                            validator: (doc) => {
                                const scripts = doc.querySelectorAll('script');
                                let scriptText = '';
                                scripts.forEach(script => scriptText += script.textContent);
                                return scriptText.includes('Math.random()') && 
                                       scriptText.includes('Math.floor(');
                            }
                        },
                        {
                            requirement: 'Use if/else conditionals to check guesses',
                            validator: (doc) => {
                                const scripts = doc.querySelectorAll('script');
                                let scriptText = '';
                                scripts.forEach(script => scriptText += script.textContent);
                                return scriptText.includes('if') && 
                                       (scriptText.includes('else if') || scriptText.includes('else'));
                            }
                        },
                        {
                            requirement: 'Use a while loop for multiple guessing attempts',
                            validator: (doc) => {
                                const scripts = doc.querySelectorAll('script');
                                let scriptText = '';
                                scripts.forEach(script => scriptText += script.textContent);
                                return scriptText.includes('while') && 
                                       (scriptText.includes('(') || scriptText.includes('true'));
                            }
                        },
                        {
                            requirement: 'Use break to exit the loop when correct',
                            validator: (doc) => {
                                const scripts = doc.querySelectorAll('script');
                                let scriptText = '';
                                scripts.forEach(script => scriptText += script.textContent);
                                return scriptText.includes('break');
                            }
                        },
                        {
                            requirement: 'Provide feedback (too high/too low) to the user',
                            validator: (doc) => {
                                const scripts = doc.querySelectorAll('script');
                                let scriptText = '';
                                scripts.forEach(script => scriptText += script.textContent);
                                return (scriptText.includes('high') || scriptText.includes('low') || 
                                       scriptText.includes('greater') || scriptText.includes('less')) &&
                                       scriptText.includes('console.log');
                            }
                        }
                    ]}
                    hints={[
                        'Use Math.floor(Math.random() * 10) + 1 for random number 1-10',
                        'Create a while(true) loop and use break to exit',
                        'Use if/else if/else to check: equal, less than, greater than',
                        'Get user input with Number(prompt("Guess:"));',
                        'Update display and stats after each guess'
                    ]}
                >

                </Task>

                <Exercise
                    category="js"
                    lessonId="3"
                    title="⚖️ Conditionals & Loops Quiz"
                    description="Test your understanding of if/else statements, for loops, while loops, and break/continue!"
                    buttonText="Start Conditionals & Loops Quiz"
                    tipText="Complete the number guessing game above to get hands-on experience before taking the quiz!"
                />
            </DescriptionBlock>

            <PreviewBlock />
        </Editor>
    );
};


export default Lesson3;
