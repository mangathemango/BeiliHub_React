import React from "react";
import "./Lesson8.css";
import Editor from "../../components/Editor/editor";
import { CodeBlock, DescriptionBlock, PreviewBlock } from "../../components/Editor";
import { InlineEditable } from "../../components/Editor/components/CodeBlock/components";
import { CodeSnippet, Highlight, Tip, Section, Task, Lesson } from "../../components/Editor/components/DescriptionBlock/components";
import InteractiveCodeBlock from "../../components/Editor/components/DescriptionBlock/components/InteractiveCodeBlock";
import HighlightTrigger from "../../components/Editor/components/DescriptionBlock/components/HighlightTrigger";
import Exercise from "../../components/Editor/components/DescriptionBlock/components/Exercise";

const Lesson8 = () => {
    return (
        <Editor>
            <CodeBlock>
                {`<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Fetch API & Async Practice</title>
  <style>
    body {
      font-family: system-ui, sans-serif;
      text-align: center;
      padding: 40px 20px;
      margin: 0;
      background: linear-gradient(135deg, #667eea 0%, #764ba2 50%, #667eea 100%);
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
  <h1>🌐 Fetch API & Async Practice</h1>
  
  <div class="info-box">
    <h3>🎯 Your Mission:</h3>
    <ol>
      <li>Use <code>fetch()</code> to request data from APIs</li>
      <li>Use <code>async/await</code> to handle asynchronous operations</li>
      <li>Use <code>try/catch</code> to handle errors safely</li>
      <li>Build apps that fetch real-time data from the internet!</li>
    </ol>
  </div>
  
  <div class="demo-area">
    <h3>� Random Cat Fact Generator</h3>
    
    <div class="api-info">
      <p id="api-status">API Status: <span id="api-count">Ready to fetch data</span></p>
      <p id="last-fetch">Last fetch: Never</p>
    </div>
    
    <div class="input-section">
      <button id="fetch-fact-btn">🐱 Get Cat Fact</button>
      <button id="fetch-joke-btn">� Get Random Joke</button>
      <button id="fetch-quote-btn">� Get Inspirational Quote</button>
    </div>
    
    <div class="stats-area">
      <p id="fetch-count">API Calls: 0</p>
      <p id="status-message">Click any button to fetch data from an API!</p>
    </div>
    
    <div id="loading-message" style="display: none; padding: 20px; background: rgba(102,126,234,0.1); border-radius: 10px; margin: 20px 0;">
      <p style="margin: 0; color: #667eea; font-size: 18px;">🔄 Loading data from API...</p>
    </div>
    
    <div id="fact-display" style="display: none; padding: 20px; background: rgba(46,160,67,0.1); border-radius: 10px; margin: 20px 0;">
      <h4 style="margin-top: 0; color: #27ae60;">🐱 Cat Fact</h4>
      <p id="fact-text" style="font-size: 16px; line-height: 1.5;"></p>
    </div>
    
    <div id="joke-display" style="display: none; padding: 20px; background: rgba(255,193,7,0.1); border-radius: 10px; margin: 20px 0;">
      <h4 style="margin-top: 0; color: #ffc107;">😂 Random Joke</h4>
      <p id="joke-text" style="font-size: 16px; line-height: 1.5;"></p>
    </div>
    
    <div id="quote-display" style="display: none; padding: 20px; background: rgba(102,126,234,0.1); border-radius: 10px; margin: 20px 0;">
      <h4 style="margin-top: 0; color: #667eea;">✨ Inspirational Quote</h4>
      <p id="quote-text" style="font-size: 16px; line-height: 1.5; font-style: italic;"></p>
      <p id="quote-author" style="font-size: 14px; color: #666; text-align: right;"></p>
    </div>
    
    <div class="demo-buttons">
      <button id="show-fetch-code-btn">� Show Fetch Code</button>
      <button id="clear-display-btn">🧹 Clear Display</button>
    </div>
    
    <div class="message-area">
      <h4>🌐 Fetch API Tips:</h4>
      <p id="tip-text">Click buttons to fetch real data from APIs using async/await! Watch the console for detailed logging.</p>
    </div>
  </div>

  
  <script>
    `}<InlineEditable>{`// 🌐 Fetch API & Async Practice - API Data Fetcher
    
    // TODO: Select DOM elements
    const fetchFactBtn = document.querySelector("#fetch-fact-btn");
    const fetchJokeBtn = document.querySelector("#fetch-joke-btn");
    const fetchQuoteBtn = document.querySelector("#fetch-quote-btn");
    const showFetchCodeBtn = document.querySelector("#show-fetch-code-btn");
    const clearDisplayBtn = document.querySelector("#clear-display-btn");
    
    // TODO: Select display elements
    const statusMessage = document.querySelector("#status-message");
    const tipText = document.querySelector("#tip-text");
    const fetchCount = document.querySelector("#fetch-count");
    const apiStatus = document.querySelector("#api-status");
    const lastFetch = document.querySelector("#last-fetch");
    
    // TODO: Select content display elements
    const loadingMessage = document.querySelector("#loading-message");
    const factDisplay = document.querySelector("#fact-display");
    const factText = document.querySelector("#fact-text");
    const jokeDisplay = document.querySelector("#joke-display");
    const jokeText = document.querySelector("#joke-text");
    const quoteDisplay = document.querySelector("#quote-display");
    const quoteText = document.querySelector("#quote-text");
    const quoteAuthor = document.querySelector("#quote-author");
    
    // TODO: Track API calls
    let apiCallCount = 0;
    
    // TODO: API URLs for different data sources
    const APIs = {
      catFacts: "https://catfact.ninja/fact",
      jokes: "https://official-joke-api.appspot.com/random_joke", 
      quotes: "https://api.quotable.io/random"
    };
    
    // TODO: Function to show loading state
    function showLoading() {
      hideAllDisplays();
      loadingMessage.style.display = "block";
      statusMessage.innerText = "Fetching data from API...";
      statusMessage.style.color = "#667eea";
    }
    
    // TODO: Function to hide all content displays
    function hideAllDisplays() {
      loadingMessage.style.display = "none";
      factDisplay.style.display = "none";
      jokeDisplay.style.display = "none";
      quoteDisplay.style.display = "none";
    }
    
    // TODO: Function to update API call statistics
    function updateApiStats() {
      apiCallCount++;
      fetchCount.innerText = \`API Calls: \${apiCallCount}\`;
      const now = new Date().toLocaleTimeString();
      lastFetch.innerText = \`Last fetch: \${now}\`;
    }
    
    // TODO: Main async functions to fetch data from APIs
    async function fetchCatFact() {
      try {
        showLoading();
        const response = await fetch(APIs.catFacts);
        
        if (!response.ok) {
          throw new Error(\`HTTP error! status: \${response.status}\`);
        }
        
        const data = await response.json();
        
        hideAllDisplays();
        statusMessage.innerText = \`🐱 Cat Fact: \${data.fact}\`;
        statusMessage.style.color = "#27ae60";
        updateApiStats();
        
      } catch (error) {
        hideAllDisplays();
        statusMessage.innerText = \`😿 Error fetching cat fact: \${error.message}\`;
        statusMessage.style.color = "#e74c3c";
        console.error("Fetch error:", error);
      }
    }
    
    async function fetchRandomJoke() {
      try {
        showLoading();
        const response = await fetch(APIs.jokes);
        
        if (!response.ok) {
          throw new Error(\`HTTP error! status: \${response.status}\`);
        }
        
        const data = await response.json();
        
        hideAllDisplays();
        statusMessage.innerText = \`😂 \${data.setup} ... \${data.punchline}\`;
        statusMessage.style.color = "#27ae60";
        updateApiStats();
        
      } catch (error) {
        hideAllDisplays();
        statusMessage.innerText = \`😕 Error fetching joke: \${error.message}\`;
        statusMessage.style.color = "#e74c3c";
        console.error("Fetch error:", error);
      }
    }
    
    async function fetchInspirationalQuote() {
      try {
        showLoading();
        const response = await fetch(APIs.quotes);
        
        if (!response.ok) {
          throw new Error(\`HTTP error! status: \${response.status}\`);
        }
        
        const data = await response.json();
        
        hideAllDisplays();
        statusMessage.innerText = \`✨ "\${data.content}" — \${data.author}\`;
        statusMessage.style.color = "#27ae60";
        updateApiStats();
        
      } catch (error) {
        hideAllDisplays();
        statusMessage.innerText = \`💭 Error fetching quote: \${error.message}\`;
        statusMessage.style.color = "#e74c3c";
        console.error("Fetch error:", error);
      }
    }
    
    // TODO: Function to demonstrate different fetch approaches
    function demonstratePromiseChaining() {
      statusMessage.innerText = "🔄 Demonstrating Promise .then() chaining...";
      
      fetch(APIs.catFacts)
        .then(response => {
          console.log("Raw response:", response);
          return response.json();
        })
        .then(data => {
          console.log("Parsed data:", data);
          statusMessage.innerText = \`🔗 Promise chain result: \${data.fact.substring(0, 50)}...\`;
          statusMessage.style.color = "#667eea";
        })
        .catch(error => {
          console.error("Promise chain error:", error);
          statusMessage.innerText = "❌ Promise chain failed!";
          statusMessage.style.color = "#e74c3c";
        });
    }
    
    // TODO: Function to show fetch vs async comparison
    async function compareFetchPatterns() {
      statusMessage.innerText = "⚡ Comparing fetch patterns...";
      
      console.log("=== Fetch Pattern Comparison ===");
      
      // Pattern 1: Promise .then()
      console.log("1. Starting Promise .then() pattern...");
      fetch(APIs.jokes)
        .then(response => response.json())
        .then(data => console.log("Promise result:", data.setup))
        .catch(error => console.error("Promise error:", error));
      
      // Pattern 2: async/await
      console.log("2. Starting async/await pattern...");
      try {
        const response = await fetch(APIs.quotes);
        const data = await response.json();
        console.log("Async result:", data.content.substring(0, 30) + "...");
      } catch (error) {
        console.error("Async error:", error);
      }
      
      statusMessage.innerText = "✅ Check console to see both patterns in action!";
      statusMessage.style.color = "#667eea";
    }
    
    // TODO: Function to show fetch code examples
    function showFetchCode() {
      const codeExample = \`
// Basic fetch with .then()
fetch("https://catfact.ninja/fact")
  .then(response => response.json())
  .then(data => console.log(data.fact));

// Modern async/await approach
async function getCatFact() {
  try {
    const response = await fetch("https://catfact.ninja/fact");
    const data = await response.json();
    console.log(data.fact);
  } catch (error) {
    console.error("Error:", error);
  }
}
      \`;
      
      statusMessage.innerHTML = \`<div class="code-display">\${codeExample}</div>\`;
      tipText.innerText = "This is how the fetch API works! Check the console to see it in action.";
    }
    
    // TODO: Function to clear all displays
    function clearAllDisplays() {
      hideAllDisplays();
      statusMessage.innerText = "Display cleared! Ready for new API calls.";
      statusMessage.style.color = "#667eea";
      tipText.innerText = "Click any fetch button to load new data from APIs!";
    }
    
    // TODO: Add event listeners for fetch API buttons
    fetchFactBtn.addEventListener("click", fetchCatFact);
    fetchJokeBtn.addEventListener("click", fetchRandomJoke);
    fetchQuoteBtn.addEventListener("click", fetchInspirationalQuote);
    
    // TODO: Add event listeners for utility buttons
    const showFetchCodeBtn = document.querySelector("#show-fetch-code-btn");
    const clearDisplayBtn = document.querySelector("#clear-display-btn");
    
    if (showFetchCodeBtn) {
      showFetchCodeBtn.addEventListener("click", showFetchCode);
    }
    
    if (clearDisplayBtn) {
      clearDisplayBtn.addEventListener("click", clearAllDisplays);
    }
    
    // TODO: Initialize the fetch API demo
    function initializeFetchDemo() {
      statusMessage.innerText = "Welcome to Fetch API & Async Practice! 🌐";
      statusMessage.style.color = "#667eea";
      tipText.innerText = "Click any button to fetch data from real APIs using async/await!";
      
      // Set up initial state
      hideAllDisplays();
      
      console.log("🚀 Fetch API Demo initialized!");
      console.log("Available APIs:", APIs);
    }
    
    // TODO: Initialize when page loads
    initializeFetchDemo();`}</InlineEditable>{`
  </script>
  
  <div style="margin-top: 3rem; padding: 1.5rem; background: rgba(255,255,255,0.9); border-radius: 10px; backdrop-filter: blur(10px); max-width: 800px; margin-left: auto; margin-right: auto;">
    <h3>🎯 Fetch API Checklist</h3>
    <ul style="text-align: left;">
      <li><strong>fetch(url):</strong> Request data from any API on the internet</li>
      <li><strong>async/await:</strong> Handle asynchronous operations with clean, readable code</li>
      <li><strong>response.json():</strong> Convert API responses to JavaScript objects</li>
      <li><strong>try/catch:</strong> Handle errors gracefully and provide user feedback</li>
      <li><strong>Loading States:</strong> Show users when data is being fetched</li>
    </ul>
    
    <div style="margin-top: 1rem; padding: 1rem; background: rgba(102,126,234,0.1); border-radius: 8px;">
      <strong>🌐 Pro Tips:</strong>
      <ul style="text-align: left;">
        <li>Always check response.ok before processing data</li>
        <li>Use async/await instead of .then() for cleaner code</li>
        <li>Handle network errors to prevent app crashes</li>
        <li>Perfect for weather apps, social media, and real-time data!</li>
      </ul>
    </div>
  </div>
</body>
</html>`}
            </CodeBlock>

            <DescriptionBlock category="js" lessonId="8">
                <Lesson>
                    <h1>🌐 JavaScript Lesson 8: Fetch API & Async – Fetching JSON, async/await</h1>

                    <p>
                        Modern web apps need data from external sources — APIs, databases, or servers! 
                        JavaScript provides the <strong>Fetch API</strong> and <strong>async/await</strong> for handling asynchronous operations.
                        Learn to <strong>request real data from APIs</strong>, <strong>handle loading states</strong>, and <strong>build connected web applications</strong>!
                    </p>

                    <Section title="🌐 What is the Fetch API?">
                        <p>fetch() lets your web app request data from a web address (URL) — like getting cat facts, weather data, or user information from servers!</p>

                        <table style={{ width: '100%', borderCollapse: 'collapse', marginTop: '10px' }}>
                            <thead>
                                <tr style={{ backgroundColor: '#f0f0f0' }}>
                                    <th style={{ padding: '8px', border: '1px solid #ddd' }}>Method</th>
                                    <th style={{ padding: '8px', border: '1px solid #ddd' }}>Purpose</th>
                                    <th style={{ padding: '8px', border: '1px solid #ddd' }}>Example</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td style={{ padding: '8px', border: '1px solid #ddd' }}><strong>fetch(url)</strong></td>
                                    <td style={{ padding: '8px', border: '1px solid #ddd' }}>Request data from URL</td>
                                    <td style={{ padding: '8px', border: '1px solid #ddd' }}>fetch("https://api.github.com")</td>
                                </tr>
                                <tr>
                                    <td style={{ padding: '8px', border: '1px solid #ddd' }}><strong>.json()</strong></td>
                                    <td style={{ padding: '8px', border: '1px solid #ddd' }}>Convert response to JavaScript object</td>
                                    <td style={{ padding: '8px', border: '1px solid #ddd' }}>response.json()</td>
                                </tr>
                                <tr>
                                    <td style={{ padding: '8px', border: '1px solid #ddd' }}><strong>Promise</strong></td>
                                    <td style={{ padding: '8px', border: '1px solid #ddd' }}>Represents future completion of operation</td>
                                    <td style={{ padding: '8px', border: '1px solid #ddd' }}>.then() or await</td>
                                </tr>
                            </tbody>
                        </table>

                        <p><strong>Example:</strong></p>
                        <InteractiveCodeBlock language="javascript" hoverable={true}>
                            {`// Basic fetch with Promise .then()
fetch("https://catfact.ninja/fact")
  .then(response => response.json())
  .then(data => console.log(data.fact));

// Fetch returns a Promise that resolves when data arrives
fetch("https://official-joke-api.appspot.com/random_joke")
  .then(response => {
    console.log("Response received:", response.status); // 200 = success
    return response.json(); // Convert to JavaScript object
  })
  .then(data => {
    console.log("Setup:", data.setup);
    console.log("Punchline:", data.punchline);
  })
  .catch(error => {
    console.error("Something went wrong:", error);
  });

// Real API example - Cat facts
function getCatFact() {
  fetch("https://catfact.ninja/fact")
    .then(response => response.json())
    .then(data => {
      document.getElementById("fact").innerText = data.fact;
    })
    .catch(error => {
      document.getElementById("fact").innerText = "Failed to load fact!";
    });
}

// Check response status
fetch("https://api.github.com/users/octocat")
  .then(response => {
    if (response.ok) {
      console.log("✅ API call successful!");
      return response.json();
    } else {
      throw new Error(\`HTTP error! status: \${response.status}\`);
    }
  })
  .then(user => console.log("GitHub user:", user.login));`}
                        </InteractiveCodeBlock>
                        
                        <p>✅ <strong>Fetch returns a Promise, which resolves when data arrives from the server!</strong></p>
                    </Section>

                    <Section title="⏳ Using async and await">
                        <p>async/await makes asynchronous code look simpler — like synchronous code! It's the modern way to handle Promises and API calls.</p>

                        <table style={{ width: '100%', borderCollapse: 'collapse', marginTop: '10px' }}>
                            <thead>
                                <tr style={{ backgroundColor: '#f0f0f0' }}>
                                    <th style={{ padding: '8px', border: '1px solid #ddd' }}>Keyword</th>
                                    <th style={{ padding: '8px', border: '1px solid #ddd' }}>Purpose</th>
                                    <th style={{ padding: '8px', border: '1px solid #ddd' }}>Example</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td style={{ padding: '8px', border: '1px solid #ddd' }}><strong>async</strong></td>
                                    <td style={{ padding: '8px', border: '1px solid #ddd' }}>Marks function as asynchronous</td>
                                    <td style={{ padding: '8px', border: '1px solid #ddd' }}>async function getData()</td>
                                </tr>
                                <tr>
                                    <td style={{ padding: '8px', border: '1px solid #ddd' }}><strong>await</strong></td>
                                    <td style={{ padding: '8px', border: '1px solid #ddd' }}>Pauses until Promise resolves</td>
                                    <td style={{ padding: '8px', border: '1px solid #ddd' }}>await fetch(url)</td>
                                </tr>
                                <tr>
                                    <td style={{ padding: '8px', border: '1px solid #ddd' }}><strong>try/catch</strong></td>
                                    <td style={{ padding: '8px', border: '1px solid #ddd' }}>Handle errors safely</td>
                                    <td style={{ padding: '8px', border: '1px solid #ddd' }}>try &#123; await ... &#125; catch(e) &#123; ... &#125;</td>
                                </tr>
                            </tbody>
                        </table>

                        <InteractiveCodeBlock language="javascript" hoverable={true}>
                            {`// Modern async/await approach (recommended!)
async function getCatFact() {
  const response = await fetch("https://catfact.ninja/fact");
  const data = await response.json();
  console.log(data.fact);
}

getCatFact();

// Compare: Old Promise .then() vs New async/await
// Old way (still works, but harder to read)
function getJokeOldWay() {
  fetch("https://official-joke-api.appspot.com/random_joke")
    .then(response => response.json())
    .then(data => console.log(\`\${data.setup} ... \${data.punchline}\`))
    .catch(error => console.error(error));
}

// New way (easier to read and understand!)
async function getJokeNewWay() {
  const response = await fetch("https://official-joke-api.appspot.com/random_joke");
  const data = await response.json();
  console.log(\`\${data.setup} ... \${data.punchline}\`);
}

// Multiple API calls in sequence
async function getAllData() {
  console.log("Getting cat fact...");
  const catResponse = await fetch("https://catfact.ninja/fact");
  const catData = await catResponse.json();
  console.log("Cat fact:", catData.fact);
  
  console.log("Getting quote...");
  const quoteResponse = await fetch("https://api.quotable.io/random");
  const quoteData = await quoteResponse.json();
  console.log("Quote:", quoteData.content);
  
  console.log("All data loaded!");
}

// await pauses execution until each Promise resolves
getAllData();

// Real-world example: Update UI with API data
async function displayCatFact() {
  document.getElementById("loading").style.display = "block";
  
  const response = await fetch("https://catfact.ninja/fact");
  const data = await response.json();
  
  document.getElementById("loading").style.display = "none";
  document.getElementById("fact").innerText = data.fact;
}`}
                        </InteractiveCodeBlock>
                        
                        <p>✅ <strong>await pauses until the Promise resolves, making async code look synchronous!</strong></p>
                    </Section>

                    <Section title="⚠️ Error Handling">
                        <p>Use try...catch to handle errors safely! Networks fail, APIs go down, and users lose internet — your app needs to handle it gracefully.</p>
                        
                        <InteractiveCodeBlock language="javascript" hoverable={true}>
                            {`// Always use try/catch with async/await
async function fetchDataSafely() {
  try {
    const response = await fetch("https://catfact.ninja/fact");
    
    // Check if the request was successful
    if (!response.ok) {
      throw new Error(\`HTTP error! status: \${response.status}\`);
    }
    
    const data = await response.json();
    console.log("Success:", data.fact);
    return data;
    
  } catch (error) {
    console.error("Error fetching data:", error.message);
    
    // Show user-friendly error message
    document.getElementById("error").innerText = "Failed to load data. Please try again!";
    
    // Return default data
    return { fact: "Cats are amazing creatures!" };
  }
}

// Handle different types of errors
async function robustFetch(url) {
  try {
    const response = await fetch(url);
    
    if (response.status === 404) {
      throw new Error("Data not found");
    } else if (response.status === 500) {
      throw new Error("Server error - try again later");
    } else if (!response.ok) {
      throw new Error(\`Request failed with status \${response.status}\`);
    }
    
    return await response.json();
    
  } catch (error) {
    if (error.name === "TypeError") {
      // Network error (no internet connection)
      console.error("Network error - check internet connection");
      return { error: "No internet connection" };
    } else {
      console.error("API error:", error.message);
      return { error: error.message };
    }
  }
}

// Real-world example: Cat fact with loading states
async function displayCatFactWithErrorHandling() {
  const loadingEl = document.getElementById("loading");
  const factEl = document.getElementById("fact");
  const errorEl = document.getElementById("error");
  
  try {
    // Show loading state
    loadingEl.style.display = "block";
    factEl.style.display = "none";
    errorEl.style.display = "none";
    
    const response = await fetch("https://catfact.ninja/fact");
    
    if (!response.ok) {
      throw new Error("Failed to fetch cat fact");
    }
    
    const data = await response.json();
    
    // Success - show the fact
    loadingEl.style.display = "none";
    factEl.innerText = data.fact;
    factEl.style.display = "block";
    
  } catch (error) {
    // Error - show error message
    loadingEl.style.display = "none";
    errorEl.innerText = "😿 Couldn't load cat fact. Try again!";
    errorEl.style.display = "block";
    
    console.error("Error:", error);
  }
}

// Timeout handling for slow APIs
async function fetchWithTimeout(url, timeout = 5000) {
  const controller = new AbortController();
  const timeoutId = setTimeout(() => controller.abort(), timeout);
  
  try {
    const response = await fetch(url, {
      signal: controller.signal
    });
    
    clearTimeout(timeoutId);
    return await response.json();
    
  } catch (error) {
    if (error.name === 'AbortError') {
      throw new Error('Request timed out');
    }
    throw error;
  }
}`}
                        </InteractiveCodeBlock>

                        <p><strong>⚠️ Important:</strong> Always handle fetch() errors and check response.ok before processing data!</p>
                    </Section>

                    <Section title="🚀 Real-World API Integration">
                        <p>Put it all together! Build apps that fetch real data, handle loading states, and provide amazing user experiences with live data from the internet.</p>
                        
                        <InteractiveCodeBlock language="javascript" hoverable={true}>
                            {`// Complete Random Data Generator App
class RandomDataApp {
  constructor() {
    this.apiEndpoints = {
      catFacts: "https://catfact.ninja/fact",
      jokes: "https://official-joke-api.appspot.com/random_joke",
      quotes: "https://api.quotable.io/random",
      advice: "https://api.adviceslip.com/advice"
    };
    this.stats = { totalCalls: 0, successfulCalls: 0, errors: 0 };
    this.init();
  }

  // Generic fetch method with error handling
  async fetchData(endpoint, type) {
    try {
      this.showLoading(\`Loading \${type}...\`);
      this.stats.totalCalls++;
      
      const response = await fetch(endpoint);
      
      if (!response.ok) {
        throw new Error(\`HTTP \${response.status}: \${response.statusText}\`);
      }
      
      const data = await response.json();
      this.stats.successfulCalls++;
      
      return data;
      
    } catch (error) {
      this.stats.errors++;
      this.handleError(error, type);
      throw error;
    } finally {
      this.hideLoading();
      this.updateStats();
    }
  }

  // Get random cat fact
  async getCatFact() {
    try {
      const data = await this.fetchData(this.apiEndpoints.catFacts, "cat fact");
      this.displayData("fact", "🐱 Random Cat Fact", data.fact);
    } catch (error) {
      console.error("Failed to get cat fact:", error);
    }
  }

  // Get random joke
  async getJoke() {
    try {
      const data = await this.fetchData(this.apiEndpoints.jokes, "joke");
      const fullJoke = \`\${data.setup} 😄 \${data.punchline}\`;
      this.displayData("joke", "😂 Random Joke", fullJoke);
    } catch (error) {
      console.error("Failed to get joke:", error);
    }
  }

  // Get inspirational quote
  async getQuote() {
    try {
      const data = await this.fetchData(this.apiEndpoints.quotes, "quote");
      const quote = \`"\${data.content}" — \${data.author}\`;
      this.displayData("quote", "✨ Inspirational Quote", quote);
    } catch (error) {
      console.error("Failed to get quote:", error);
    }
  }

  // Load multiple types of data at once
  async loadAllData() {
    const promises = [
      this.getCatFact(),
      this.getJoke(),
      this.getQuote()
    ];
    
    try {
      await Promise.all(promises);
      this.showMessage("✅ All data loaded successfully!", "success");
    } catch (error) {
      this.showMessage("⚠️ Some data failed to load", "warning");
    }
  }

  // UI helper methods
  showLoading(message) {
    const loading = document.getElementById("loading");
    if (loading) {
      loading.innerText = message;
      loading.style.display = "block";
    }
  }

  hideLoading() {
    const loading = document.getElementById("loading");
    if (loading) loading.style.display = "none";
  }

  displayData(containerId, title, content) {
    const container = document.getElementById(containerId);
    if (container) {
      container.innerHTML = \`<h4>\${title}</h4><p>\${content}</p>\`;
      container.style.display = "block";
    }
  }

  updateStats() {
    const successRate = this.stats.totalCalls > 0 
      ? Math.round((this.stats.successfulCalls / this.stats.totalCalls) * 100) 
      : 0;
    
    console.log(\`API Stats: \${this.stats.totalCalls} calls, \${successRate}% success rate\`);
  }

  handleError(error, type) {
    console.error(\`Error fetching \${type}:\`, error);
    this.showMessage(\`😿 Failed to load \${type}. Please try again!\`, "error");
  }

  showMessage(text, type) {
    const statusEl = document.getElementById("status");
    if (statusEl) {
      statusEl.innerText = text;
      statusEl.className = \`message \${type}\`;
    }
  }

  init() {
    console.log("🚀 Random Data App initialized!");
    console.log("Available APIs:", Object.keys(this.apiEndpoints));
  }
}

// Initialize the app
const dataApp = new RandomDataApp();

// Usage examples:
// dataApp.getCatFact();
// dataApp.getJoke();
// dataApp.getQuote();
// dataApp.loadAllData();`}
                        </InteractiveCodeBlock>

                        <p><strong>Best Practices:</strong></p>
                        <ul>
                            <li>⚠️ Always handle fetch() errors with try/catch blocks</li>
                            <li>⏳ Show loading states to improve user experience</li>
                            <li>📊 Track API call statistics for monitoring</li>
                            <li>🌐 Apps that use real APIs feel alive and dynamic!</li>
                        </ul>
                    </Section>

                    <Tip type="success">
                        <strong>Fetch API Mastery Unlocked!</strong> You can now fetch data from any API on the internet! 
                        With fetch(), async/await, and error handling, you can build apps that connect to the world. 
                        Your users will love apps with live, real-time data! 🌐✨
                    </Tip>
                </Lesson>

                <Task
                    objective="Build a random cat fact generator that fetches data using the Fetch API and async/await"
                    validations={[
                        {
                            requirement: 'Use fetch() to request data from an API',
                            validator: (doc) => {
                                const scripts = doc.querySelectorAll('script');
                                let scriptText = '';
                                scripts.forEach(script => scriptText += script.textContent);
                                return scriptText.includes('fetch(');
                            }
                        },
                        {
                            requirement: 'Use async/await for handling asynchronous operations',
                            validator: (doc) => {
                                const scripts = doc.querySelectorAll('script');
                                let scriptText = '';
                                scripts.forEach(script => scriptText += script.textContent);
                                return scriptText.includes('async') && scriptText.includes('await');
                            }
                        },
                        {
                            requirement: 'Use .json() to convert response to JavaScript object',
                            validator: (doc) => {
                                const scripts = doc.querySelectorAll('script');
                                let scriptText = '';
                                scripts.forEach(script => scriptText += script.textContent);
                                return scriptText.includes('.json()');
                            }
                        },
                        {
                            requirement: 'Use try/catch for error handling',
                            validator: (doc) => {
                                const scripts = doc.querySelectorAll('script');
                                let scriptText = '';
                                scripts.forEach(script => scriptText += script.textContent);
                                return scriptText.includes('try') && scriptText.includes('catch');
                            }
                        },
                        {
                            requirement: 'Check response.ok for successful requests',
                            validator: (doc) => {
                                const scripts = doc.querySelectorAll('script');
                                let scriptText = '';
                                scripts.forEach(script => scriptText += script.textContent);
                                return scriptText.includes('response.ok') || scriptText.includes('!response.ok');
                            }
                        }
                    ]}
                    hints={[
                        'Use fetch("https://catfact.ninja/fact") to get cat facts',
                        'Use await response.json() to convert the response to a JavaScript object',
                        'Check if (!response.ok) and throw an error for failed requests',
                        'Try the different API buttons to see fetch() in action',
                        'Watch the browser console to see the async operations!'
                    ]}
                >

                </Task>

                <Exercise
                    category="js"
                    lessonId="8"
                    title="🌐 Fetch API Quiz"
                    description="Test your understanding of fetch(), async/await, error handling, and API integration!"
                    buttonText="Start Fetch API Quiz"
                    tipText="Complete the cat fact generator task above to get hands-on experience before taking the quiz!"
                />
            </DescriptionBlock>

            <PreviewBlock />
        </Editor>
    );
};


export default Lesson8;
