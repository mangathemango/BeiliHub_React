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
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Persistent To-Do List - Local Storage</title>
  <style>
    body {
      font-family: system-ui, sans-serif;
      text-align: center;
      padding: 40px 20px;
      margin: 0;
      background: linear-gradient(135deg, #11998e 0%, #38ef7d 50%, #11998e 100%);
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
      box-shadow: 0 0 10px rgba(118,75,162,0.3);
    }
    
    button {
      padding: 12px 20px;
      border: none;
      background: #11998e;
      color: white;
      font-size: 16px;
      border-radius: 8px;
      cursor: pointer;
      margin: 5px;
      transition: all 0.3s ease;
      box-shadow: 0 4px 15px rgba(17,153,142,0.3);
    }
    
    button:hover {
      background: #0f8078;
      transform: translateY(-2px);
      box-shadow: 0 6px 20px rgba(17,153,142,0.4);
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
    
    .task-container {
      list-style: none;
      padding: 0;
      margin: 20px 0;
      max-height: 300px;
      overflow-y: auto;
    }
    
    .task-item {
      background: rgba(255,255,255,0.95);
      margin: 10px 0;
      padding: 15px;
      border-radius: 8px;
      display: flex;
      justify-content: space-between;
      align-items: center;
      border-left: 4px solid #11998e;
      box-shadow: 0 2px 8px rgba(0,0,0,0.1);
      transition: all 0.3s ease;
    }
    
    .task-item:hover {
      transform: translateY(-2px);
      box-shadow: 0 4px 12px rgba(0,0,0,0.15);
    }
    
    .task-item.completed {
      opacity: 0.7;
      text-decoration: line-through;
      border-left-color: #27ae60;
    }
    
    .task-text {
      flex-grow: 1;
      text-align: left;
      padding-right: 10px;
    }
    
    .delete-btn {
      background: #e74c3c !important;
      padding: 8px 12px !important;
      font-size: 14px !important;
      margin: 0 !important;
    }
    
    .delete-btn:hover {
      background: #c0392b !important;
    }
    
    .complete-btn {
      background: #27ae60 !important;
      padding: 8px 12px !important;
      font-size: 14px !important;
      margin-right: 5px !important;
    }
    
    .complete-btn:hover {
      background: #229954 !important;
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
  <h1>� Persistent To-Do List</h1>
  
  <div class="info-box">
    <h3>🎯 Your Mission:</h3>
    <ol>
      <li>Use <code>localStorage.setItem()</code> to save data in the browser</li>
      <li>Use <code>localStorage.getItem()</code> to load saved data</li>
      <li>Use <code>JSON.stringify()</code> and <code>JSON.parse()</code> for objects</li>
      <li>Build apps that remember data after refresh!</li>
    </ol>
  </div>
  
  <div class="demo-area">
    <h3>💾 Persistent To-Do List</h3>
    
    <div class="storage-info">
      <p id="storage-status">Storage Status: <span id="storage-count">0 items saved</span></p>
      <p id="last-saved">Last saved: Never</p>
    </div>
    
    <div class="input-section">
      <input type="text" id="task-input" placeholder="Enter a new task..." maxlength="50">
      <button id="add-btn">💾 Add & Save</button>
      <button id="clear-storage-btn">🗑️ Clear Storage</button>
    </div>
    
    <div class="stats-area">
      <p id="task-count">Tasks: 0</p>
      <p id="status-message">Your tasks will be saved automatically!</p>
    </div>
    
    <ul id="task-list" class="task-container">
      <!-- Tasks will load from localStorage -->
    </ul>
    
    <div class="demo-buttons">
      <button id="save-sample-btn">� Save Sample Data</button>
      <button id="export-btn">📤 Export Tasks</button>
      <button id="import-btn">📥 Import Sample</button>
    </div>
    
    <div class="message-area">
      <h4>� Storage Tips:</h4>
      <p id="tip-text">Add tasks and refresh the page - they'll still be here! That's the power of localStorage!</p>
    </div>
  </div>

  
  <script>
    `}<InlineEditable>{`// � Local Storage Practice - Persistent To-Do List
    
    // TODO: Select DOM elements
    const taskInput = document.querySelector("#task-input");
    const addBtn = document.querySelector("#add-btn");
    const clearStorageBtn = document.querySelector("#clear-storage-btn");
    const taskList = document.querySelector("#task-list");
    const taskCount = document.querySelector("#task-count");
    const statusMessage = document.querySelector("#status-message");
    const tipText = document.querySelector("#tip-text");
    
    // TODO: Select storage elements
    const storageStatus = document.querySelector("#storage-status");
    const storageCount = document.querySelector("#storage-count");
    const lastSaved = document.querySelector("#last-saved");
    
    // TODO: Select demo buttons
    const saveSampleBtn = document.querySelector("#save-sample-btn");
    const exportBtn = document.querySelector("#export-btn");
    const importBtn = document.querySelector("#import-btn");
    
    // TODO: Storage key for localStorage
    const STORAGE_KEY = "todo_tasks";
    const SETTINGS_KEY = "todo_settings";
    
    // TODO: Load tasks from localStorage
    let tasks = JSON.parse(localStorage.getItem(STORAGE_KEY)) || [];
    let taskIdCounter = 0;
    
    // TODO: Sample data for demos
    const sampleTasks = [
      { id: Date.now() + 1, text: "Learn localStorage basics", completed: false },
      { id: Date.now() + 2, text: "Practice JSON.stringify()", completed: false },
      { id: Date.now() + 3, text: "Build persistent web apps", completed: true },
      { id: Date.now() + 4, text: "Master data persistence", completed: false }
    ];
    
    // TODO: Function to save tasks to localStorage
    function saveTasks() {
      try {
        localStorage.setItem(STORAGE_KEY, JSON.stringify(tasks));
        updateStorageInfo();
        
        // Update last saved time
        const now = new Date().toLocaleTimeString();
        lastSaved.innerText = \`Last saved: \${now}\`;
        localStorage.setItem(SETTINGS_KEY, JSON.stringify({ lastSaved: now }));
        
        tipText.innerText = "Data saved to localStorage! It will persist after page refresh.";
      } catch (error) {
        statusMessage.innerText = "Error saving to localStorage!";
        statusMessage.style.color = "#e74c3c";
      }
    }
    
    // TODO: Function to update storage information
    function updateStorageInfo() {
      const itemCount = tasks.length;
      storageCount.innerText = \`\${itemCount} items saved\`;
      
      // Calculate storage size (approximate)
      const dataSize = JSON.stringify(tasks).length;
      if (dataSize > 1024) {
        storageStatus.innerHTML = \`Storage Status: <span id="storage-count">\${itemCount} items saved (\${(dataSize / 1024).toFixed(1)}KB)</span>\`;
      } else {
        storageStatus.innerHTML = \`Storage Status: <span id="storage-count">\${itemCount} items saved (\${dataSize} bytes)</span>\`;
      }
    }
    
    // TODO: Function to create a new task element
    function createTaskElement(task) {
      // Create the main list item
      const li = document.createElement("li");
      li.className = "task-item";
      li.setAttribute("data-task-id", task.id);
      
      if (task.completed) {
        li.classList.add("completed");
      }
      
      // Create text span
      const taskTextSpan = document.createElement("span");
      taskTextSpan.className = "task-text";
      taskTextSpan.innerText = task.text;
      
      // Create button container
      const buttonContainer = document.createElement("div");
      
      // Create complete button
      const completeBtn = document.createElement("button");
      completeBtn.innerText = task.completed ? "↩️" : "✅";
      completeBtn.className = "complete-btn";
      completeBtn.title = task.completed ? "Mark as incomplete" : "Mark as complete";
      
      // Create delete button
      const deleteBtn = document.createElement("button");
      deleteBtn.innerText = "🗑️";
      deleteBtn.className = "delete-btn";
      deleteBtn.title = "Delete task";
      
      // Add event listeners to buttons
      completeBtn.addEventListener("click", () => toggleComplete(task.id));
      deleteBtn.addEventListener("click", () => deleteTask(task.id));
      
      // Assemble the task item
      buttonContainer.appendChild(completeBtn);
      buttonContainer.appendChild(deleteBtn);
      li.appendChild(taskTextSpan);
      li.appendChild(buttonContainer);
      
      return li;
    }
    
    // TODO: Function to render all tasks from localStorage
    function renderTasks() {
      // Clear existing tasks
      taskList.innerHTML = "";
      
      // Render each task
      tasks.forEach(task => {
        const taskElement = createTaskElement(task);
        taskList.appendChild(taskElement);
      });
      
      updateTaskCount();
      updateStorageInfo();
      
      if (tasks.length === 0) {
        statusMessage.innerText = "No saved tasks. Add one to get started!";
        statusMessage.style.color = "#11998e";
      }
    }
    
    // TODO: Function to add a new task
    function addTask() {
      const taskText = taskInput.value.trim();
      
      if (taskText === "") {
        statusMessage.innerText = "Please enter a task!";
        statusMessage.style.color = "#e74c3c";
        return;
      }
      
      // Create task object
      const newTask = {
        id: Date.now() + Math.random(), // Unique ID
        text: taskText,
        completed: false,
        createdAt: new Date().toISOString()
      };
      
      // Add to tasks array
      tasks.push(newTask);
      
      // Save to localStorage
      saveTasks();
      
      // Re-render tasks
      renderTasks();
      
      // Clear input
      taskInput.value = "";
      
      statusMessage.innerText = \`Added and saved: "\${taskText}"\`;
      statusMessage.style.color = "#27ae60";
    }
    
    // TODO: Function to delete a task
    function deleteTask(taskId) {
      // Find and remove from tasks array
      tasks = tasks.filter(task => task.id !== taskId);
      
      // Save updated array to localStorage
      saveTasks();
      
      // Re-render tasks with animation
      const taskElement = document.querySelector(\`[data-task-id="\${taskId}"]\`);
      if (taskElement) {
        taskElement.style.transform = "translateX(100%)";
        taskElement.style.opacity = "0";
        
        setTimeout(() => {
          renderTasks();
        }, 300);
      }
      
      statusMessage.innerText = "Task deleted and removed from storage!";
      statusMessage.style.color = "#e74c3c";
      
      tipText.innerText = "Task deleted from both DOM and localStorage!";
    }
    
    // TODO: Function to toggle task completion
    function toggleComplete(taskId) {
      // Find and update task
      const task = tasks.find(t => t.id === taskId);
      if (!task) return;
      
      task.completed = !task.completed;
      
      // Save to localStorage
      saveTasks();
      
      // Re-render to reflect changes
      renderTasks();
      
      statusMessage.innerText = task.completed ? "Task completed and saved!" : "Task unmarked and saved!";
      statusMessage.style.color = task.completed ? "#27ae60" : "#11998e";
      
      tipText.innerText = "Task status updated in localStorage!";
    }
    
    // TODO: Function to update task count
    function updateTaskCount() {
      const total = tasks.length;
      const completed = tasks.filter(task => task.completed).length;
      taskCount.innerText = \`Tasks: \${total} (Completed: \${completed})\`;
    }
    
    // TODO: Function to clear all storage
    function clearAllStorage() {
      if (confirm("Clear all saved tasks? This cannot be undone!")) {
        // Clear tasks array
        tasks = [];
        
        // Remove from localStorage
        localStorage.removeItem(STORAGE_KEY);
        localStorage.removeItem(SETTINGS_KEY);
        
        // Re-render
        renderTasks();
        
        statusMessage.innerText = "All tasks cleared from storage!";
        statusMessage.style.color = "#e74c3c";
        
        lastSaved.innerText = "Last saved: Never";
        tipText.innerText = "localStorage.removeItem() cleared all data!";
      }
    }
    
    // TODO: Function to save sample data
    function saveSampleData() {
      tasks = [...sampleTasks];
      saveTasks();
      renderTasks();
      
      statusMessage.innerText = "Sample data saved to localStorage!";
      statusMessage.style.color = "#11998e";
      tipText.innerText = "Sample tasks saved with JSON.stringify()!";
    }
    
    // TODO: Function to export tasks
    function exportTasks() {
      if (tasks.length === 0) {
        statusMessage.innerText = "No tasks to export!";
        return;
      }
      
      const exportData = {
        tasks: tasks,
        exportedAt: new Date().toISOString(),
        version: "1.0"
      };
      
      const dataStr = JSON.stringify(exportData, null, 2);
      
      // Create download
      const blob = new Blob([dataStr], { type: "application/json" });
      const url = URL.createObjectURL(blob);
      const a = document.createElement("a");
      a.href = url;
      a.download = "todo-tasks.json";
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
      URL.revokeObjectURL(url);
      
      statusMessage.innerText = "Tasks exported as JSON file!";
      statusMessage.style.color = "#11998e";
      tipText.innerText = "Data exported using JSON.stringify() with formatting!";
    }
    
    // TODO: Function to import sample tasks
    function importSample() {
      const importedTasks = [
        { id: Date.now() + 10, text: "Master localStorage API", completed: false },
        { id: Date.now() + 11, text: "Build offline-capable apps", completed: false },
        { id: Date.now() + 12, text: "Understand JSON serialization", completed: true }
      ];
      
      tasks = [...tasks, ...importedTasks];
      saveTasks();
      renderTasks();
      
      statusMessage.innerText = \`Imported \${importedTasks.length} new tasks!\`;
      statusMessage.style.color = "#11998e";
      tipText.innerText = "Tasks imported and merged with existing data!";
    }
    
    // TODO: Add event listeners
    addBtn.addEventListener("click", addTask);
    clearStorageBtn.addEventListener("click", clearAllStorage);
    saveSampleBtn.addEventListener("click", saveSampleData);
    exportBtn.addEventListener("click", exportTasks);
    importBtn.addEventListener("click", importSample);
    
    // TODO: Add Enter key support for input
    taskInput.addEventListener("keypress", (e) => {
      if (e.key === "Enter") {
        addTask();
      }
    });
    
    // TODO: Initialize the app
    function initializeApp() {
      // Load saved settings
      const settings = JSON.parse(localStorage.getItem(SETTINGS_KEY)) || {};
      if (settings.lastSaved) {
        lastSaved.innerText = \`Last saved: \${settings.lastSaved}\`;
      }
      
      // Find max ID to continue counter
      if (tasks.length > 0) {
        taskIdCounter = Math.max(...tasks.map(t => t.id)) + 1;
      }
      
      // Render loaded tasks
      renderTasks();
      
      tipText.innerText = "Tasks loaded from localStorage on page load!";
    }
    
    // TODO: Initialize when page loads
    initializeApp();`}</InlineEditable>{`
  </script>
  
  <div style="margin-top: 3rem; padding: 1.5rem; background: rgba(255,255,255,0.9); border-radius: 10px; backdrop-filter: blur(10px); max-width: 800px; margin-left: auto; margin-right: auto;">
    <h3>🎯 Local Storage Checklist</h3>
    <ul style="text-align: left;">
      <li><strong>localStorage.setItem():</strong> Save data to the browser's storage</li>
      <li><strong>localStorage.getItem():</strong> Retrieve saved data from storage</li>
      <li><strong>JSON.stringify():</strong> Convert objects/arrays to strings for storage</li>
      <li><strong>JSON.parse():</strong> Convert stored strings back to objects/arrays</li>
      <li><strong>Data Persistence:</strong> Build apps that remember user data</li>
    </ul>
    
    <div style="margin-top: 1rem; padding: 1rem; background: rgba(102,126,234,0.1); border-radius: 8px;">
      <strong>💾 Pro Tips:</strong>
      <ul style="text-align: left;">
        <li>Always use try/catch when working with localStorage</li>
        <li>localStorage only stores strings - use JSON for objects</li>
        <li>Data persists until user clears browser data or you call removeItem()</li>
        <li>Perfect for user preferences, shopping carts, and offline functionality!</li>
      </ul>
    </div>
  </div>
</body>
</html>`}
            </CodeBlock>

            <DescriptionBlock category="js" lessonId="7">
                <Lesson>
                    <h1>� JavaScript Lesson 7: Local Storage – Save and Load Data in the Browser</h1>

                    <p>
                        You've built interactive pages, but when you refresh, your data disappears! Now we'll fix that using <strong>localStorage</strong> — 
                        the browser's built-in storage that keeps data even after reloading. Learn to <strong>save user data</strong>, 
                        <strong>load it on page refresh</strong>, and <strong>build persistent web applications</strong>!
                    </p>

                    <Section title="💾 What is Local Storage?">
                        <p>localStorage lets your web app save data in the browser — like a mini database that persists even after the user closes the browser!</p>

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
                                    <td style={{ padding: '8px', border: '1px solid #ddd' }}><strong>setItem()</strong></td>
                                    <td style={{ padding: '8px', border: '1px solid #ddd' }}>Save data to storage</td>
                                    <td style={{ padding: '8px', border: '1px solid #ddd' }}>localStorage.setItem("name", "Alice")</td>
                                </tr>
                                <tr>
                                    <td style={{ padding: '8px', border: '1px solid #ddd' }}><strong>getItem()</strong></td>
                                    <td style={{ padding: '8px', border: '1px solid #ddd' }}>Retrieve saved data</td>
                                    <td style={{ padding: '8px', border: '1px solid #ddd' }}>localStorage.getItem("name")</td>
                                </tr>
                                <tr>
                                    <td style={{ padding: '8px', border: '1px solid #ddd' }}><strong>removeItem()</strong></td>
                                    <td style={{ padding: '8px', border: '1px solid #ddd' }}>Delete specific item</td>
                                    <td style={{ padding: '8px', border: '1px solid #ddd' }}>localStorage.removeItem("name")</td>
                                </tr>
                            </tbody>
                        </table>

                        <p><strong>Example:</strong></p>
                        <InteractiveCodeBlock language="javascript" hoverable={true}>
                            {`// Save simple data to localStorage
localStorage.setItem("username", "Alice");
localStorage.setItem("theme", "dark");
localStorage.setItem("score", "1500");

// Retrieve data from localStorage
let username = localStorage.getItem("username");
let theme = localStorage.getItem("theme");
let score = localStorage.getItem("score");

console.log("Welcome back,", username); // "Welcome back, Alice"
console.log("Theme:", theme);            // "Theme: dark"
console.log("High Score:", score);       // "High Score: 1500"

// Check if data exists
if (localStorage.getItem("username")) {
  console.log("User is returning!");
} else {
  console.log("New user!");
}

// Remove specific data
localStorage.removeItem("score");

// Clear all localStorage data
// localStorage.clear(); // Uncomment to clear everything

// localStorage only stores strings!
let number = 42;
localStorage.setItem("myNumber", number); // Converts to "42"
let retrieved = localStorage.getItem("myNumber"); // Returns "42" (string)
console.log(typeof retrieved); // "string" - not "number"!`}
                        </InteractiveCodeBlock>
                        
                        <p>✅ <strong>Data persists even after closing and reopening the browser!</strong></p>
                    </Section>

                    <Section title="📄 JSON: Storing Complex Data">
                        <p>JSON lets you save arrays, objects, and complex data structures to localStorage! It's the secret to building powerful apps.</p>

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
                                    <td style={{ padding: '8px', border: '1px solid #ddd' }}><strong>JSON.stringify()</strong></td>
                                    <td style={{ padding: '8px', border: '1px solid #ddd' }}>Convert object to JSON string</td>
                                    <td style={{ padding: '8px', border: '1px solid #ddd' }}>JSON.stringify(myArray)</td>
                                </tr>
                                <tr>
                                    <td style={{ padding: '8px', border: '1px solid #ddd' }}><strong>JSON.parse()</strong></td>
                                    <td style={{ padding: '8px', border: '1px solid #ddd' }}>Convert JSON string back to object</td>
                                    <td style={{ padding: '8px', border: '1px solid #ddd' }}>JSON.parse(jsonString)</td>
                                </tr>
                                <tr>
                                    <td style={{ padding: '8px', border: '1px solid #ddd' }}><strong>null check</strong></td>
                                    <td style={{ padding: '8px', border: '1px solid #ddd' }}>Handle missing data safely</td>
                                    <td style={{ padding: '8px', border: '1px solid #ddd' }}>data || []</td>
                                </tr>
                            </tbody>
                        </table>

                        <InteractiveCodeBlock language="javascript" hoverable={true}>
                            {`// Saving arrays and objects to localStorage
let tasks = [
  { id: 1, text: "Learn JavaScript", completed: false },
  { id: 2, text: "Build a project", completed: true },
  { id: 3, text: "Master localStorage", completed: false }
];

// Convert to JSON string and save
let tasksJSON = JSON.stringify(tasks);
localStorage.setItem("myTasks", tasksJSON);

console.log("Saved:", tasksJSON);
// Output: [{"id":1,"text":"Learn JavaScript","completed":false}...]

// Load and convert back to JavaScript object
let savedTasksJSON = localStorage.getItem("myTasks");
let savedTasks = JSON.parse(savedTasksJSON);

console.log("Loaded tasks:", savedTasks);
console.log("First task:", savedTasks[0].text); // "Learn JavaScript"

// Save user settings
let userSettings = {
  theme: "dark",
  language: "en",
  notifications: true,
  lastLogin: new Date().toISOString()
};

localStorage.setItem("settings", JSON.stringify(userSettings));

// Load with error handling
function loadSettings() {
  try {
    let settingsJSON = localStorage.getItem("settings");
    return settingsJSON ? JSON.parse(settingsJSON) : {};
  } catch (error) {
    console.error("Failed to load settings:", error);
    return {}; // Return default empty object
  }
}

let settings = loadSettings();
console.log("Theme:", settings.theme || "light"); // Default to "light"`}
                        </InteractiveCodeBlock>
                        
                        <p>✅ <strong>JSON lets you save any JavaScript data structure!</strong></p>
                    </Section>

                    <Section title="🗂️ Managing localStorage Data">
                        <p>Learn to update, delete, and organize your stored data effectively! Good data management keeps your app fast and reliable.</p>
                        
                        <InteractiveCodeBlock language="javascript" hoverable={true}>
                            {`// Load existing tasks (or start with empty array)
function loadTasks() {
  let tasksJSON = localStorage.getItem("tasks");
  return tasksJSON ? JSON.parse(tasksJSON) : [];
}

// Save tasks back to localStorage
function saveTasks(tasks) {
  localStorage.setItem("tasks", JSON.stringify(tasks));
}

// Add a new task
function addTask(taskText) {
  let tasks = loadTasks();
  let newTask = {
    id: Date.now(), // Simple unique ID
    text: taskText,
    completed: false,
    createdAt: new Date().toISOString()
  };
  
  tasks.push(newTask);
  saveTasks(tasks);
  return newTask;
}

// Update a task
function updateTask(taskId, updates) {
  let tasks = loadTasks();
  let taskIndex = tasks.findIndex(task => task.id === taskId);
  
  if (taskIndex !== -1) {
    tasks[taskIndex] = { ...tasks[taskIndex], ...updates };
    saveTasks(tasks);
    return tasks[taskIndex];
  }
  return null;
}

// Delete a task
function deleteTask(taskId) {
  let tasks = loadTasks();
  let filteredTasks = tasks.filter(task => task.id !== taskId);
  saveTasks(filteredTasks);
  return filteredTasks;
}

// Clear completed tasks
function clearCompleted() {
  let tasks = loadTasks();
  let activeTasks = tasks.filter(task => !task.completed);
  saveTasks(activeTasks);
  return activeTasks;
}

// Export/backup data
function exportData() {
  let allData = {
    tasks: loadTasks(),
    settings: JSON.parse(localStorage.getItem("settings") || "{}"),
    exportDate: new Date().toISOString()
  };
  return JSON.stringify(allData, null, 2); // Pretty formatted
}

// Check storage usage
function getStorageInfo() {
  let used = JSON.stringify(localStorage).length;
  let limit = 5 * 1024 * 1024; // 5MB typical limit
  return {
    used: used,
    limit: limit,
    percentage: Math.round((used / limit) * 100)
  };
}`}
                        </InteractiveCodeBlock>

                        <p><strong>⚠️ Important:</strong> Always handle JSON.parse() errors and check for null values!</p>
                    </Section>

                    <Section title="🚀 Building Persistent Web Apps">
                        <p>Put it all together! Build apps that remember user data, sync across devices, and provide seamless experiences.</p>
                        
                        <InteractiveCodeBlock language="javascript" hoverable={true}>
                            {`// Complete persistent to-do app example
class PersistentTodoApp {
  constructor() {
    this.storageKey = 'todoApp_tasks';
    this.tasks = this.loadTasks();
    this.init();
  }

  // Load tasks from localStorage
  loadTasks() {
    try {
      let tasksJSON = localStorage.getItem(this.storageKey);
      return tasksJSON ? JSON.parse(tasksJSON) : [];
    } catch (error) {
      console.error('Failed to load tasks:', error);
      return [];
    }
  }

  // Save tasks to localStorage
  saveTasks() {
    try {
      localStorage.setItem(this.storageKey, JSON.stringify(this.tasks));
      this.updateStorageInfo();
    } catch (error) {
      console.error('Failed to save tasks:', error);
      alert('Storage limit reached! Consider clearing some data.');
    }
  }

  // Add new task
  addTask(text) {
    let newTask = {
      id: Date.now(),
      text: text,
      completed: false,
      createdAt: new Date().toISOString()
    };
    
    this.tasks.push(newTask);
    this.saveTasks();
    this.renderTasks();
    return newTask;
  }

  // Toggle task completion
  toggleTask(taskId) {
    let task = this.tasks.find(t => t.id === taskId);
    if (task) {
      task.completed = !task.completed;
      this.saveTasks();
      this.renderTasks();
    }
  }

  // Delete task
  deleteTask(taskId) {
    this.tasks = this.tasks.filter(t => t.id !== taskId);
    this.saveTasks();
    this.renderTasks();
  }

  // Export all data
  exportData() {
    let data = {
      tasks: this.tasks,
      exportDate: new Date().toISOString(),
      version: "1.0"
    };
    
    let dataStr = JSON.stringify(data, null, 2);
    let blob = new Blob([dataStr], { type: 'application/json' });
    let url = URL.createObjectURL(blob);
    
    let link = document.createElement('a');
    link.href = url;
    link.download = 'todo-backup.json';
    link.click();
  }

  // Update storage info display
  updateStorageInfo() {
    let used = JSON.stringify(this.tasks).length;
    let total = 5 * 1024 * 1024; // 5MB limit
    let percentage = Math.round((used / total) * 100);
    
    console.log(\`Storage used: \${used} bytes (\${percentage}%)\`);
  }

  init() {
    this.renderTasks();
    this.updateStorageInfo();
    console.log("Persistent Todo App initialized with", this.tasks.length, "tasks");
  }
}

// Initialize the app
let todoApp = new PersistentTodoApp();

// Usage examples:
// todoApp.addTask("Learn localStorage");
// todoApp.toggleTask(taskId);
// todoApp.deleteTask(taskId);
// todoApp.exportData();`}
                        </InteractiveCodeBlock>

                        <p><strong>Best Practices:</strong></p>
                        <ul>
                            <li>� Always handle localStorage errors with try/catch blocks</li>
                            <li>🔄 Provide export/import functionality for user data</li>
                            <li>📊 Monitor storage usage to avoid hitting limits</li>
                            <li>⚡ Apps that remember user data create amazing experiences!</li>
                        </ul>
                    </Section>

                    <Tip type="success">
                        <strong>localStorage Mastery Unlocked!</strong> You can now save and load data in the browser like a pro! 
                        With localStorage.setItem(), getItem(), and JSON, you can build apps that remember everything. 
                        Your users will love apps that keep their data safe! �✨
                    </Tip>
                </Lesson>

                <Task
                    objective="Build a persistent to-do list that saves data using localStorage and JSON"
                    validations={[
                        {
                            requirement: 'Use localStorage.setItem() to save data',
                            validator: (doc) => {
                                const scripts = doc.querySelectorAll('script');
                                let scriptText = '';
                                scripts.forEach(script => scriptText += script.textContent);
                                return scriptText.includes('localStorage.setItem(');
                            }
                        },
                        {
                            requirement: 'Use localStorage.getItem() to load data',
                            validator: (doc) => {
                                const scripts = doc.querySelectorAll('script');
                                let scriptText = '';
                                scripts.forEach(script => scriptText += script.textContent);
                                return scriptText.includes('localStorage.getItem(');
                            }
                        },
                        {
                            requirement: 'Use JSON.stringify() to save arrays/objects',
                            validator: (doc) => {
                                const scripts = doc.querySelectorAll('script');
                                let scriptText = '';
                                scripts.forEach(script => scriptText += script.textContent);
                                return scriptText.includes('JSON.stringify(');
                            }
                        },
                        {
                            requirement: 'Use JSON.parse() to load arrays/objects',
                            validator: (doc) => {
                                const scripts = doc.querySelectorAll('script');
                                let scriptText = '';
                                scripts.forEach(script => scriptText += script.textContent);
                                return scriptText.includes('JSON.parse(');
                            }
                        },
                        {
                            requirement: 'Handle missing data with default values',
                            validator: (doc) => {
                                const scripts = doc.querySelectorAll('script');
                                let scriptText = '';
                                scripts.forEach(script => scriptText += script.textContent);
                                return (scriptText.includes('||') && scriptText.includes('[]')) || 
                                       (scriptText.includes('?') && scriptText.includes(':'));
                            }
                        }
                    ]}
                    hints={[
                        'Use localStorage.setItem("tasks", JSON.stringify(tasks)) to save tasks',
                        'Use JSON.parse(localStorage.getItem("tasks") || "[]") to load tasks',
                        'Test persistence by adding tasks, refreshing the page, and seeing them remain',
                        'Try the Export Data button to see your saved JSON',
                        'Watch the Storage Info update as you add and remove tasks!'
                    ]}
                >

                </Task>

                <Exercise
                    category="js"
                    lessonId="7"
                    title="💾 localStorage Quiz"
                    description="Test your understanding of localStorage, JSON.stringify(), JSON.parse(), and persistent data storage!"
                    buttonText="Start localStorage Quiz"
                    tipText="Complete the persistent to-do list task above to get hands-on experience before taking the quiz!"
                />
            </DescriptionBlock>

            <PreviewBlock />
        </Editor>
    );
};


export default Lesson7;
