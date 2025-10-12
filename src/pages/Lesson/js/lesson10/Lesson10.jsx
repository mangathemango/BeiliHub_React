import React from "react";
import "./Lesson10.css";
import Editor from "../../components/Editor/editor";
import { CodeBlock, DescriptionBlock, PreviewBlock } from "../../components/Editor";
import { InlineEditable } from "../../components/Editor/components/CodeBlock/components";
import { CodeSnippet, Highlight, Tip, Section, Task, Lesson } from "../../components/Editor/components/DescriptionBlock/components";
import InteractiveCodeBlock from "../../components/Editor/components/DescriptionBlock/components/InteractiveCodeBlock";
import HighlightTrigger from "../../components/Editor/components/DescriptionBlock/components/HighlightTrigger";
import Exercise from "../../components/Editor/components/DescriptionBlock/components/Exercise";

const Lesson10 = () => {
    return (
        <Editor>
            <CodeBlock>
                {`<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Weather App - Mini Project Combo</title>
  <style>
    * {
      box-sizing: border-box;
    }
    
    body {
      font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
      margin: 0;
      padding: 20px;
      background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
      min-height: 100vh;
      color: #333;
    }
    
    .container {
      max-width: 800px;
      margin: 0 auto;
      background: rgba(255, 255, 255, 0.95);
      border-radius: 20px;
      padding: 30px;
      box-shadow: 0 20px 40px rgba(0,0,0,0.1);
      backdrop-filter: blur(10px);
    }
    
    h1 {
      text-align: center;
      color: #2c3e50;
      font-size: 2.5rem;
      margin-bottom: 2rem;
      text-shadow: 2px 2px 4px rgba(0,0,0,0.1);
    }
    
    .search-section {
      display: flex;
      gap: 15px;
      margin-bottom: 30px;
      flex-wrap: wrap;
      justify-content: center;
    }
    
    input[type="text"] {
      flex: 1;
      min-width: 250px;
      padding: 15px 20px;
      font-size: 16px;
      border: 2px solid #e0e6ed;
      border-radius: 25px;
      outline: none;
      transition: all 0.3s ease;
    }
    
    input[type="text"]:focus {
      border-color: #667eea;
      box-shadow: 0 0 0 3px rgba(102, 126, 234, 0.1);
    }
    
    button {
      padding: 15px 30px;
      font-size: 16px;
      font-weight: 600;
      border: none;
      border-radius: 25px;
      cursor: pointer;
      transition: all 0.3s ease;
      background: linear-gradient(45deg, #667eea, #764ba2);
      color: white;
      min-width: 150px;
    }
    
    button:hover {
      transform: translateY(-2px);
      box-shadow: 0 8px 25px rgba(102, 126, 234, 0.3);
    }
    
    button:active {
      transform: translateY(0);
    }
    
    .weather-card {
      background: linear-gradient(135deg, #f093fb 0%, #f5576c 100%);
      border-radius: 20px;
      padding: 30px;
      margin: 20px 0;
      color: white;
      text-align: center;
      box-shadow: 0 15px 35px rgba(240, 147, 251, 0.3);
      min-height: 200px;
      display: flex;
      flex-direction: column;
      justify-content: center;
    }
    
    .weather-card.loading {
      background: linear-gradient(135deg, #a8edea 0%, #fed6e3 100%);
      color: #333;
    }
    
    .weather-card.error {
      background: linear-gradient(135deg, #ff9a9e 0%, #fecfef 100%);
      color: #721c24;
    }
    
    .temperature {
      font-size: 4rem;
      font-weight: bold;
      margin: 10px 0;
      text-shadow: 2px 2px 4px rgba(0,0,0,0.2);
    }
    
    .city-name {
      font-size: 1.8rem;
      margin-bottom: 10px;
      font-weight: 600;
    }
    
    .description {
      font-size: 1.2rem;
      text-transform: capitalize;
      margin: 10px 0;
    }
    
    .weather-icon {
      width: 100px;
      height: 100px;
      margin: 10px auto;
      filter: drop-shadow(2px 2px 4px rgba(0,0,0,0.2));
    }
    
    .weather-details {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
      gap: 15px;
      margin-top: 20px;
    }
    
    .detail-item {
      background: rgba(255,255,255,0.2);
      padding: 15px;
      border-radius: 10px;
      text-align: center;
      backdrop-filter: blur(5px);
    }
    
    .detail-label {
      font-size: 0.9rem;
      opacity: 0.8;
      margin-bottom: 5px;
    }
    
    .detail-value {
      font-size: 1.2rem;
      font-weight: bold;
    }
    
    .demo-section {
      margin-top: 30px;
      padding: 20px;
      background: rgba(102, 126, 234, 0.1);
      border-radius: 15px;
      border: 2px solid rgba(102, 126, 234, 0.2);
    }
    
    .demo-buttons {
      display: flex;
      gap: 15px;
      margin-bottom: 20px;
      flex-wrap: wrap;
      justify-content: center;
    }
    
    .demo-buttons button {
      background: linear-gradient(45deg, #36d1dc, #5b86e5);
      font-size: 14px;
      padding: 12px 20px;
      min-width: 120px;
    }
    
    .code-demo {
      background: #2d3748;
      color: #e2e8f0;
      padding: 20px;
      border-radius: 10px;
      font-family: 'Courier New', monospace;
      font-size: 14px;
      overflow-x: auto;
      margin-top: 15px;
    }
    
    @media (max-width: 600px) {
      .container {
        margin: 10px;
        padding: 20px;
      }
      
      .search-section {
        flex-direction: column;
      }
      
      input[type="text"] {
        min-width: auto;
      }
      
      .temperature {
        font-size: 3rem;
      }
    }
  </style>
</head>
<body>
  <div class="container">
    <h1>🌤️ Weather App</h1>
    
    <div class="search-section">
      <input type="text" id="cityInput" placeholder="Enter city name (e.g., London, Tokyo, New York)">
      <button id="getWeatherBtn">Get Weather</button>
    </div>
    
    <div id="weatherResult" class="weather-card" style="display: none;">
      <!-- Weather data will be displayed here -->
    </div>
    
    <div class="demo-section">
      <h3>🔬 API & Code Demos</h3>
      <div class="demo-buttons">
        <button id="demoFetch">Demo Fetch API</button>
        <button id="demoAsync">Demo Async/Await</button>
        <button id="demoDestruct">Demo Destructuring</button>
        <button id="demoES6">Demo ES6 Features</button>
      </div>
      <div id="demoOutput" class="code-demo" style="display: none;">
        Click a demo button to see JavaScript concepts in action!
      </div>
    </div>
  </div>
  
  <script>
    `}<InlineEditable>{`// 🌦️ Weather App - Combining All JavaScript Concepts
    
    // DOM Elements (ES6 const declarations)
    const cityInput = document.querySelector("#cityInput");
    const getWeatherBtn = document.querySelector("#getWeatherBtn");
    const weatherResult = document.querySelector("#weatherResult");
    const demoOutput = document.querySelector("#demoOutput");
    
    // Weather API Configuration
    const API_KEY = "demo_key_replace_with_real"; // For demo purposes
    const BASE_URL = "https://api.openweathermap.org/data/2.5/weather";
    
    // App State (using objects and arrays)
    const appState = {
      currentWeather: null,
      searchHistory: [],
      isLoading: false
    };
    
    // TODO: Mock weather data for demo (since we don't have real API key)
    const mockWeatherData = {
      "london": {
        name: "London",
        main: { temp: 18, feels_like: 16, humidity: 72, pressure: 1013 },
        weather: [{ main: "Clouds", description: "broken clouds", icon: "04d" }],
        wind: { speed: 3.5 },
        coord: { lat: 51.51, lon: -0.13 }
      },
      "tokyo": {
        name: "Tokyo", 
        main: { temp: 24, feels_like: 26, humidity: 68, pressure: 1018 },
        weather: [{ main: "Clear", description: "clear sky", icon: "01d" }],
        wind: { speed: 2.1 },
        coord: { lat: 35.68, lon: 139.69 }
      },
      "new york": {
        name: "New York",
        main: { temp: 22, feels_like: 20, humidity: 65, pressure: 1015 },
        weather: [{ main: "Rain", description: "light rain", icon: "10d" }],
        wind: { speed: 4.2 },
        coord: { lat: 40.71, lon: -74.01 }
      }
    };
    
    // TODO: Utility functions using ES6 features
    const capitalize = str => str.charAt(0).toUpperCase() + str.slice(1);
    
    const formatTemp = temp => Math.round(temp);
    
    const getWindDirection = deg => {
      const directions = ['N', 'NE', 'E', 'SE', 'S', 'SW', 'W', 'NW'];
      return directions[Math.round(deg / 45) % 8];
    };
    
    // TODO: Display functions using template literals and DOM manipulation
    function showLoading() {
      weatherResult.style.display = 'block';
      weatherResult.className = 'weather-card loading';
      weatherResult.innerHTML = \`
        <div style="font-size: 1.5rem;">
          🔄 Loading weather data...
          <div style="margin-top: 15px; font-size: 1rem;">
            Fetching data for: \${capitalize(cityInput.value)}
          </div>
        </div>
      \`;
    }
    
    function showError(message) {
      weatherResult.style.display = 'block';
      weatherResult.className = 'weather-card error';
      weatherResult.innerHTML = \`
        <div style="font-size: 1.5rem;">
          ❌ Error
          <div style="margin-top: 15px; font-size: 1rem;">
            \${message}
          </div>
          <div style="margin-top: 10px; font-size: 0.9rem; opacity: 0.8;">
            Try: London, Tokyo, or New York
          </div>
        </div>
      \`;
    }
    
    function displayWeather(data) {
      // TODO: ES6 Destructuring - extract data from nested objects
      const {
        name: cityName,
        main: { temp, feels_like, humidity, pressure },
        weather: [{ main: weatherMain, description, icon }],
        wind: { speed: windSpeed }
      } = data;
      
      weatherResult.style.display = 'block';
      weatherResult.className = 'weather-card';
      
      // TODO: Template literals for complex HTML
      weatherResult.innerHTML = \`
        <div class="city-name">\${cityName}</div>
        <div class="temperature">\${formatTemp(temp)}°C</div>
        <div class="description">\${description}</div>
        <img class="weather-icon" 
             src="https://openweathermap.org/img/wn/\${icon}@2x.png" 
             alt="\${description}">
        
        <div class="weather-details">
          <div class="detail-item">
            <div class="detail-label">Feels Like</div>
            <div class="detail-value">\${formatTemp(feels_like)}°C</div>
          </div>
          <div class="detail-item">
            <div class="detail-label">Humidity</div>
            <div class="detail-value">\${humidity}%</div>
          </div>
          <div class="detail-item">
            <div class="detail-label">Wind Speed</div>
            <div class="detail-value">\${windSpeed} m/s</div>
          </div>
          <div class="detail-item">
            <div class="detail-label">Pressure</div>
            <div class="detail-value">\${pressure} hPa</div>
          </div>
        </div>
      \`;
      
      // Update app state
      appState.currentWeather = data;
      appState.searchHistory.push(cityName);
    }
    
    // TODO: Async function using fetch API
    async function fetchWeather(city) {
      try {
        appState.isLoading = true;
        showLoading();
        
        // TODO: For demo purposes, use mock data
        const cityKey = city.toLowerCase();
        await new Promise(resolve => setTimeout(resolve, 1000)); // Simulate API delay
        
        if (mockWeatherData[cityKey]) {
          displayWeather(mockWeatherData[cityKey]);
        } else {
          throw new Error(\`City "\${city}" not found in demo database\`);
        }
        
        /* TODO: Real API call (uncomment when you have a real API key)
        const response = await fetch(\`\${BASE_URL}?q=\${city}&appid=\${API_KEY}&units=metric\`);
        if (!response.ok) {
          throw new Error(\`City not found: \${response.status}\`);
        }
        const data = await response.json();
        displayWeather(data);
        */
        
      } catch (error) {
        showError(error.message);
        console.error('Weather fetch error:', error);
      } finally {
        appState.isLoading = false;
      }
    }
    
    // TODO: Event handling with input validation
    function handleWeatherSearch() {
      const city = cityInput.value.trim();
      
      // Input validation with conditionals
      if (!city) {
        showError("Please enter a city name");
        return;
      }
      
      if (city.length < 2) {
        showError("City name must be at least 2 characters");
        return;
      }
      
      if (appState.isLoading) {
        return; // Prevent multiple simultaneous requests
      }
      
      fetchWeather(city);
    }
    
    // TODO: Demo functions to show JavaScript concepts
    async function demoFetchAPI() {
      demoOutput.style.display = 'block';
      demoOutput.innerHTML = \`
// 🌐 Fetch API Demo - Making HTTP Requests

// Traditional Promise syntax
fetch('https://api.example.com/weather')
  .then(response => response.json())
  .then(data => console.log(data))
  .catch(error => console.error(error));

// Modern async/await syntax (cleaner!)
async function getWeather() {
  try {
    const response = await fetch(API_URL);
    if (!response.ok) throw new Error('Request failed');
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Fetch error:', error);
  }
}

// ✅ Key Benefits:
// - Handle asynchronous operations cleanly
// - Built-in error handling with try/catch
// - Returns Promises for chaining
// - Works with JSON, text, blobs, etc.
      \`;
    }
    
    function demoAsyncAwait() {
      demoOutput.style.display = 'block';
      demoOutput.innerHTML = \`
// ⏳ Async/Await Demo - Managing Asynchronous Code

// Without async/await (callback hell)
getData(function(a) {
  getMoreData(a, function(b) {
    getEvenMoreData(b, function(c) {
      // This gets messy quickly!
    });
  });
});

// With async/await (much cleaner!)
async function fetchAllData() {
  try {
    const a = await getData();
    const b = await getMoreData(a);
    const c = await getEvenMoreData(b);
    return c;
  } catch (error) {
    console.error('Error in data chain:', error);
  }
}

// Multiple async operations
async function fetchMultipleAPIs() {
  const [weather, news, stocks] = await Promise.all([
    fetch('/api/weather'),
    fetch('/api/news'),
    fetch('/api/stocks')
  ]);
  // All three requests happen simultaneously!
}
      \`;
    }
    
    function demoDestructuring() {
      demoOutput.style.display = 'block';
      demoOutput.innerHTML = \`
// 🔧 Destructuring Demo - Extracting Data Elegantly

// Object destructuring
const user = { name: 'Alice', age: 30, city: 'London' };

// Old way
const name = user.name;
const age = user.age;

// New way (destructuring)
const { name, age, city } = user;

// Nested destructuring (like our weather API)
const weatherData = {
  main: { temp: 25, humidity: 60 },
  weather: [{ description: 'sunny' }]
};

const { 
  main: { temp, humidity },
  weather: [{ description }]
} = weatherData;

// Array destructuring
const colors = ['red', 'green', 'blue'];
const [primary, secondary, tertiary] = colors;

// Function parameter destructuring
function displayWeather({ temp, humidity, description }) {
  console.log(\`\${temp}°C, \${humidity}%, \${description}\`);
}
      \`;
    }
    
    function demoES6Features() {
      demoOutput.style.display = 'block';
      demoOutput.innerHTML = \`
// 🚀 ES6+ Features Demo - Modern JavaScript

// 1. Arrow functions
const multiply = (a, b) => a * b;
const greet = name => \`Hello, \${name}!\`;

// 2. Template literals
const user = 'Alice';
const message = \`Welcome back, \${user}! 
Today is \${new Date().toDateString()}\`;

// 3. Default parameters
function greetUser(name = 'Guest', time = 'day') {
  return \`Good \${time}, \${name}!\`;
}

// 4. Spread operator
const nums = [1, 2, 3];
const moreNums = [...nums, 4, 5]; // [1, 2, 3, 4, 5]

// 5. Object shorthand
const name = 'Bob';
const age = 25;
const person = { name, age }; // Same as { name: name, age: age }

// 6. Const and let (block scoping)
if (true) {
  let blockScoped = 'only available in this block';
  const constant = 'cannot be reassigned';
}

// 7. Array methods (map, filter, reduce)
const numbers = [1, 2, 3, 4, 5];
const doubled = numbers.map(n => n * 2);
const evens = numbers.filter(n => n % 2 === 0);
const sum = numbers.reduce((acc, n) => acc + n, 0);
      \`;
    }
    
    // TODO: Event listeners (modern approach)
    getWeatherBtn.addEventListener('click', handleWeatherSearch);
    
    // Enter key support
    cityInput.addEventListener('keypress', (e) => {
      if (e.key === 'Enter') {
        handleWeatherSearch();
      }
    });
    
    // Demo button event listeners
    document.getElementById('demoFetch').addEventListener('click', demoFetchAPI);
    document.getElementById('demoAsync').addEventListener('click', demoAsyncAwait);
    document.getElementById('demoDestruct').addEventListener('click', demoDestructuring);
    document.getElementById('demoES6').addEventListener('click', demoES6Features);
    
    // Initialize app
    console.log('🌤️ Weather App initialized!');
    console.log('Try searching for: London, Tokyo, or New York');`}</InlineEditable>{`
  </script>
</div>
</body>
</html>`}
            </CodeBlock>

            <DescriptionBlock category="js" lessonId="10">
                <Lesson>
                    <h1>🌦️ JavaScript Lesson 10: Mini Projects Combo – Weather App</h1>

                    <p>
                        By now, you've learned <strong>variables</strong>, <strong>functions</strong>, <strong>DOM manipulation</strong>,
                        <strong>events</strong>, <strong>loops</strong>, <strong>conditionals</strong>, <strong>arrays</strong>, <strong>objects</strong>,
                        <strong>ES6 syntax</strong>, and <strong>async/await with Fetch API</strong>.
                        Time to combine <em>all</em> of these skills into one comprehensive project: a Weather App! 🌤️
                    </p>

                    <Section title="🌦️ Project Overview">
                        <p>We'll build a weather app that showcases every major JavaScript concept you've learned:</p>

                        <p><strong>✅ Key Skills Demonstrated:</strong></p>
                        <ul>
                            <li><strong>DOM Manipulation:</strong> querySelector, innerHTML, event listeners</li>
                            <li><strong>ES6 Features:</strong> arrow functions, destructuring, template literals</li>
                            <li><strong>Async Programming:</strong> async/await, fetch API, promises</li>
                            <li><strong>Error Handling:</strong> try/catch blocks for robust code</li>
                            <li><strong>Data Processing:</strong> working with objects and arrays</li>
                            <li><strong>User Experience:</strong> loading states, input validation</li>
                        </ul>
                    </Section>

                    <Section title="🧠 Key Concepts in Action">
                        <p>The weather app combines all your JavaScript knowledge:</p>

                        <InteractiveCodeBlock language="javascript" hoverable={true}>
                            {`// 1. Modern ES6 syntax
const cityInput = document.querySelector("#cityInput");
const API_URL = \`https://api.weather.com/\${endpoint}\`;

// 2. Async/await for API calls
async function fetchWeather(city) {
  try {
    const response = await fetch(\`\${API_URL}?q=\${city}\`);
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Weather fetch failed:', error);
  }
}

// 3. Destructuring for clean data extraction
const { 
  main: { temp, humidity },
  weather: [{ description, icon }],
  name: cityName 
} = weatherData;

// 4. Template literals for dynamic HTML
weatherDiv.innerHTML = \`
  <h2>\${cityName}</h2>
  <div class="temp">\${Math.round(temp)}°C</div>
  <p>\${description}</p>
\`;`}
                        </InteractiveCodeBlock>
                    </Section>

                    <Tip type="success">
                        <strong>🎯 JavaScript Mastery Achieved!</strong> This weather app combines every major JavaScript concept:
                        DOM manipulation, ES6 features, async programming, objects, arrays, functions, error handling, and modern coding patterns.
                        You're now ready to build real web applications! The skills demonstrated here are used in professional web development every day. 🚀
                    </Tip>
                </Lesson>

                <Task
                    objective="Build a weather app that fetches data from an API, processes it with ES6 features, and displays it dynamically"
                    validations={[
                        {
                            requirement: 'Use async/await with fetch API for weather data',
                            validator: (doc) => {
                                const scripts = doc.querySelectorAll('script');
                                let scriptText = '';
                                scripts.forEach(script => scriptText += script.textContent);
                                return scriptText.includes('async') &&
                                    scriptText.includes('await') &&
                                    scriptText.includes('fetch');
                            }
                        },
                        {
                            requirement: 'Use ES6 destructuring to extract weather data',
                            validator: (doc) => {
                                const scripts = doc.querySelectorAll('script');
                                let scriptText = '';
                                scripts.forEach(script => scriptText += script.textContent);
                                return scriptText.includes('const {') &&
                                    (scriptText.includes('main:') || scriptText.includes('weather:'));
                            }
                        },
                        {
                            requirement: 'Use template literals for dynamic HTML generation',
                            validator: (doc) => {
                                const scripts = doc.querySelectorAll('script');
                                let scriptText = '';
                                scripts.forEach(script => scriptText += script.textContent);
                                return scriptText.includes('`') &&
                                    scriptText.includes('${') &&
                                    scriptText.includes('innerHTML');
                            }
                        },
                        {
                            requirement: 'Implement try/catch error handling',
                            validator: (doc) => {
                                const scripts = doc.querySelectorAll('script');
                                let scriptText = '';
                                scripts.forEach(script => scriptText += script.textContent);
                                return scriptText.includes('try') &&
                                    scriptText.includes('catch');
                            }
                        },
                        {
                            requirement: 'Use event listeners for user interactions',
                            validator: (doc) => {
                                const scripts = doc.querySelectorAll('script');
                                let scriptText = '';
                                scripts.forEach(script => scriptText += script.textContent);
                                return scriptText.includes('addEventListener') &&
                                    (scriptText.includes('click') || scriptText.includes('keypress'));
                            }
                        }
                    ]}
                    hints={[
                        'Use querySelector to select DOM elements by ID',
                        'Implement async function with try/catch for API calls',
                        'Use const { main: { temp }, weather: [{ description }] } = data for destructuring',
                        'Use template literals with ${} for dynamic HTML',
                        'Add loading and error states for better user experience'
                    ]}
                >
                </Task>

                <Exercise
                    category="js"
                    lessonId="10"
                    title="🌦️ Weather App & Modern JavaScript Quiz"
                    description="Test your comprehensive JavaScript knowledge: APIs, ES6, async programming, and project architecture!"
                    buttonText="Start Weather App Quiz"
                    tipText="Complete the weather app above to experience how all JavaScript concepts work together in a real project!"
                />
            </DescriptionBlock>

            <PreviewBlock />
        </Editor>
    );
};

export default Lesson10;