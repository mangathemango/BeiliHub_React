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
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Dynamic To-Do List - Advanced DOM</title>
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
      box-shadow: 0 0 10px rgba(118,75,162,0.3);
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
    
    .stats-area {
      background: rgba(255,255,255,0.8);
      padding: 15px;
      border-radius: 10px;
      margin: 20px 0;
      border-left: 4px solid #667eea;
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
      border-left: 4px solid #667eea;
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
  <h1>🚀 Dynamic To-Do List</h1>
  
  <div class="info-box">
    <h3>🎯 Your Mission:</h3>
    <ol>
      <li>Use <code>createElement()</code> to create new HTML elements</li>
      <li>Use <code>appendChild()</code> to add elements to the page</li>
      <li>Use <code>remove()</code> to delete elements dynamically</li>
      <li>Build interactive lists that grow and shrink!</li>
    </ol>
  </div>
  
  <div class="demo-area">
    <h3>� Interactive To-Do List</h3>
    
    <div class="input-section">
      <input type="text" id="task-input" placeholder="Enter a new task..." maxlength="50">
      <button id="add-btn">➕ Add Task</button>
      <button id="clear-all-btn">🗑️ Clear All</button>
    </div>
    
    <div class="stats-area">
      <p id="task-count">Tasks: 0</p>
      <p id="status-message">Add your first task to get started!</p>
    </div>
    
    <ul id="task-list" class="task-container">
      <!-- Dynamic tasks will be added here -->
    </ul>
    
    <div class="demo-buttons">
      <button id="add-sample-btn">📋 Add Sample Tasks</button>
      <button id="toggle-complete-btn">✅ Toggle First Complete</button>
    </div>
    
    <div class="message-area">
      <h4>💡 Learning Tips:</h4>
      <p id="tip-text">Try adding tasks, deleting them, and using the demo buttons to see DOM creation in action!</p>
    </div>
  </div>

  
  <script>
    `}<InlineEditable>{`// 🚀 Advanced DOM Practice - Dynamic To-Do List
    
    // TODO: Select DOM elements
    const taskInput = document.querySelector("#task-input");
    const addBtn = document.querySelector("#add-btn");
    const clearAllBtn = document.querySelector("#clear-all-btn");
    const taskList = document.querySelector("#task-list");
    const taskCount = document.querySelector("#task-count");
    const statusMessage = document.querySelector("#status-message");
    const tipText = document.querySelector("#tip-text");
    
    // TODO: Select demo buttons
    const addSampleBtn = document.querySelector("#add-sample-btn");
    const toggleCompleteBtn = document.querySelector("#toggle-complete-btn");
    
    // TODO: Variables to track state
    let tasks = [];
    let taskIdCounter = 0;
    
    // TODO: Sample tasks for demo
    const sampleTasks = [
      "Learn JavaScript DOM manipulation",
      "Practice createElement() method",
      "Build a dynamic web app",
      "Master event listeners"
    ];
    
    // TODO: Function to create a new task element
    function createTaskElement(taskText, taskId) {
      // Create the main list item
      const li = document.createElement("li");
      li.className = "task-item";
      li.setAttribute("data-task-id", taskId);
      
      // Create text span
      const taskTextSpan = document.createElement("span");
      taskTextSpan.className = "task-text";
      taskTextSpan.innerText = taskText;
      
      // Create button container
      const buttonContainer = document.createElement("div");
      
      // Create complete button
      const completeBtn = document.createElement("button");
      completeBtn.innerText = "✅";
      completeBtn.className = "complete-btn";
      completeBtn.title = "Mark as complete";
      
      // Create delete button
      const deleteBtn = document.createElement("button");
      deleteBtn.innerText = "🗑️";
      deleteBtn.className = "delete-btn";
      deleteBtn.title = "Delete task";
      
      // Add event listeners to buttons
      completeBtn.addEventListener("click", () => toggleComplete(li, taskId));
      deleteBtn.addEventListener("click", () => deleteTask(li, taskId));
      
      // Assemble the task item
      buttonContainer.appendChild(completeBtn);
      buttonContainer.appendChild(deleteBtn);
      li.appendChild(taskTextSpan);
      li.appendChild(buttonContainer);
      
      return li;
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
      const task = {
        id: taskIdCounter++,
        text: taskText,
        completed: false
      };
      
      // Add to tasks array
      tasks.push(task);
      
      // Create DOM element
      const taskElement = createTaskElement(taskText, task.id);
      
      // Add to the list with animation
      taskList.appendChild(taskElement);
      
      // Clear input and update UI
      taskInput.value = "";
      updateTaskCount();
      
      statusMessage.innerText = \`Added: "\${taskText}"\`;
      statusMessage.style.color = "#27ae60";
      
      tipText.innerText = "Great! You created a new DOM element with createElement()!";
    }
    
    // TODO: Function to delete a task
    function deleteTask(taskElement, taskId) {
      // Remove from tasks array
      tasks = tasks.filter(task => task.id !== taskId);
      
      // Remove from DOM with animation
      taskElement.style.transform = "translateX(100%)";
      taskElement.style.opacity = "0";
      
      setTimeout(() => {
        taskElement.remove(); // This is the key method!
        updateTaskCount();
      }, 300);
      
      statusMessage.innerText = "Task deleted successfully!";
      statusMessage.style.color = "#e74c3c";
      
      tipText.innerText = "Nice! You used .remove() to delete an element from the DOM!";
    }
    
    // TODO: Function to toggle task completion
    function toggleComplete(taskElement, taskId) {
      const task = tasks.find(t => t.id === taskId);
      if (!task) return;
      
      task.completed = !task.completed;
      
      if (task.completed) {
        taskElement.classList.add("completed");
      } else {
        taskElement.classList.remove("completed");
      }
      
      statusMessage.innerText = task.completed ? "Task marked complete!" : "Task unmarked!";
      statusMessage.style.color = task.completed ? "#27ae60" : "#667eea";
      
      tipText.innerText = "You modified the class list to change the element's appearance!";
    }
    
    // TODO: Function to update task count
    function updateTaskCount() {
      const total = tasks.length;
      const completed = tasks.filter(task => task.completed).length;
      taskCount.innerText = \`Tasks: \${total} (Completed: \${completed})\`;
      
      if (total === 0) {
        statusMessage.innerText = "No tasks yet. Add one to get started!";
        statusMessage.style.color = "#667eea";
      }
    }
    
    // TODO: Function to clear all tasks
    function clearAllTasks() {
      if (tasks.length === 0) {
        statusMessage.innerText = "No tasks to clear!";
        return;
      }
      
      // Clear array
      tasks = [];
      
      // Clear DOM - remove all children
      while (taskList.firstChild) {
        taskList.removeChild(taskList.firstChild);
      }
      
      updateTaskCount();
      statusMessage.innerText = "All tasks cleared!";
      statusMessage.style.color = "#e74c3c";
      
      tipText.innerText = "You cleared the entire list using removeChild() in a loop!";
    }
    
    // TODO: Function to add sample tasks
    function addSampleTasks() {
      sampleTasks.forEach((taskText, index) => {
        setTimeout(() => {
          const task = {
            id: taskIdCounter++,
            text: taskText,
            completed: false
          };
          
          tasks.push(task);
          const taskElement = createTaskElement(taskText, task.id);
          taskList.appendChild(taskElement);
          updateTaskCount();
        }, index * 200); // Stagger the additions
      });
      
      statusMessage.innerText = "Added sample tasks!";
      statusMessage.style.color = "#667eea";
      tipText.innerText = "Watch how createElement() and appendChild() work together!";
    }
    
    // TODO: Function to toggle first task completion
    function toggleFirstComplete() {
      if (tasks.length === 0) {
        statusMessage.innerText = "No tasks to toggle!";
        return;
      }
      
      const firstTaskElement = taskList.querySelector(".task-item");
      if (firstTaskElement) {
        const taskId = parseInt(firstTaskElement.getAttribute("data-task-id"));
        toggleComplete(firstTaskElement, taskId);
      }
    }
    
    // TODO: Add event listeners
    addBtn.addEventListener("click", addTask);
    clearAllBtn.addEventListener("click", clearAllTasks);
    addSampleBtn.addEventListener("click", addSampleTasks);
    toggleCompleteBtn.addEventListener("click", toggleFirstComplete);
    
    // TODO: Add Enter key support for input
    taskInput.addEventListener("keypress", (e) => {
      if (e.key === "Enter") {
        addTask();
      }
    });
    
    // TODO: Add focus event to input
    taskInput.addEventListener("focus", () => {
      tipText.innerText = "Type a task and press Enter or click Add Task!";
    });
    
    // TODO: Initialize the app
    updateTaskCount();`}</InlineEditable>{`
  </script>
  
  <div style="margin-top: 3rem; padding: 1.5rem; background: rgba(255,255,255,0.9); border-radius: 10px; backdrop-filter: blur(10px); max-width: 800px; margin-left: auto; margin-right: auto;">
    <h3>🎯 Advanced DOM Checklist</h3>
    <ul style="text-align: left;">
      <li><strong>createElement():</strong> Create new HTML elements dynamically</li>
      <li><strong>appendChild():</strong> Add elements to the page structure</li>
      <li><strong>remove():</strong> Delete elements from the DOM completely</li>
      <li><strong>Event Binding:</strong> Add listeners to dynamically created elements</li>
      <li><strong>Dynamic Lists:</strong> Build interactive components that grow and shrink</li>
    </ul>
    
    <div style="margin-top: 1rem; padding: 1rem; background: rgba(102,126,234,0.1); border-radius: 8px;">
      <strong>� Pro Tips:</strong>
      <ul style="text-align: left;">
        <li>Always bind events to new elements: <code>newElement.addEventListener(...)</code></li>
        <li>Use <code>removeChild()</code> for older browsers, <code>remove()</code> for modern ones</li>
        <li>Store references to dynamically created elements for easy manipulation</li>
        <li>Combine <code>createElement()</code> + <code>appendChild()</code> for powerful dynamic UIs!</li>
      </ul>
    </div>
  </div>
</body>
</html>`}
            </CodeBlock>

            <DescriptionBlock category="js" lessonId="6">
                <Lesson>
                    <h1>🚀 JavaScript Lesson 6: Advanced DOM – create/remove elements dynamically</h1>

                    <p>
                        You've learned how to select and modify existing elements. Now let's go further! Learn to <strong>create new elements</strong>, 
                        <strong>add them to the page</strong>, and <strong>remove them dynamically</strong> — all with JavaScript. 
                        This is how modern web apps build interactive components like to-do lists, shopping carts, and dynamic content!
                    </p>

                    <Section title="🧱 Creating New Elements with createElement()">
                        <p>createElement() lets you build new HTML elements from scratch! This is the foundation of dynamic web applications.</p>

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
                                    <td style={{ padding: '8px', border: '1px solid #ddd' }}><strong>createElement()</strong></td>
                                    <td style={{ padding: '8px', border: '1px solid #ddd' }}>Create new element in memory</td>
                                    <td style={{ padding: '8px', border: '1px solid #ddd' }}>document.createElement('div')</td>
                                </tr>
                                <tr>
                                    <td style={{ padding: '8px', border: '1px solid #ddd' }}><strong>innerText</strong></td>
                                    <td style={{ padding: '8px', border: '1px solid #ddd' }}>Add text content</td>
                                    <td style={{ padding: '8px', border: '1px solid #ddd' }}>newDiv.innerText = "Hello"</td>
                                </tr>
                                <tr>
                                    <td style={{ padding: '8px', border: '1px solid #ddd' }}><strong>className</strong></td>
                                    <td style={{ padding: '8px', border: '1px solid #ddd' }}>Add CSS classes</td>
                                    <td style={{ padding: '8px', border: '1px solid #ddd' }}>newDiv.className = "card"</td>
                                </tr>
                            </tbody>
                        </table>

                        <p><strong>Example:</strong></p>
                        <InteractiveCodeBlock language="javascript" hoverable={true}>
                            {`// Create different types of elements
let newDiv = document.createElement('div');
let newButton = document.createElement('button');
let newListItem = document.createElement('li');
let newParagraph = document.createElement('p');

console.log(newDiv); // <div></div> (empty, in memory only)

// Add content to the new elements
newDiv.innerText = "I'm a new div!";
newButton.innerText = "Click me!";
newListItem.innerText = "List item 1";
newParagraph.innerText = "This is a new paragraph.";

// Add CSS classes
newDiv.className = "card highlight";
newButton.className = "btn btn-primary";

// Set attributes
newButton.setAttribute('id', 'my-button');
newButton.setAttribute('data-action', 'submit');

// Add styles directly
newDiv.style.backgroundColor = "lightblue";
newDiv.style.padding = "20px";
newDiv.style.borderRadius = "8px";

// Create complex elements
let taskItem = document.createElement('div');
taskItem.innerHTML = \`
  <span class="task-text">Learn JavaScript</span>
  <button class="delete-btn">Delete</button>
\`;

console.log("Elements created, but not visible yet!");`}
                        </InteractiveCodeBlock>
                        
                        <p>✅ <strong>Created elements exist in memory but won't appear on the page until you add them!</strong></p>
                    </Section>

                    <Section title="� Adding Elements with appendChild()">
                        <p>appendChild() makes your created elements visible by adding them to the page! This is where the magic happens.</p>

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
                                    <td style={{ padding: '8px', border: '1px solid #ddd' }}><strong>appendChild()</strong></td>
                                    <td style={{ padding: '8px', border: '1px solid #ddd' }}>Add element to end of parent</td>
                                    <td style={{ padding: '8px', border: '1px solid #ddd' }}>parent.appendChild(child)</td>
                                </tr>
                                <tr>
                                    <td style={{ padding: '8px', border: '1px solid #ddd' }}><strong>insertBefore()</strong></td>
                                    <td style={{ padding: '8px', border: '1px solid #ddd' }}>Insert before specific child</td>
                                    <td style={{ padding: '8px', border: '1px solid #ddd' }}>parent.insertBefore(new, existing)</td>
                                </tr>
                                <tr>
                                    <td style={{ padding: '8px', border: '1px solid #ddd' }}><strong>prepend()</strong></td>
                                    <td style={{ padding: '8px', border: '1px solid #ddd' }}>Add to beginning of parent</td>
                                    <td style={{ padding: '8px', border: '1px solid #ddd' }}>parent.prepend(child)</td>
                                </tr>
                            </tbody>
                        </table>

                        <InteractiveCodeBlock language="javascript" hoverable={true}>
                            {`// Get parent container
let todoList = document.querySelector('#todo-list');
let container = document.querySelector('#main-content');

// Create new elements
let newTask = document.createElement('li');
newTask.innerText = "Learn appendChild()";
newTask.className = "task-item";

let newHeading = document.createElement('h2');
newHeading.innerText = "Dynamic Content";

// Add elements to the page (now they become visible!)
todoList.appendChild(newTask); // Adds to end of the list
container.appendChild(newHeading); // Adds to end of container

// Create and add multiple elements
for (let i = 1; i <= 3; i++) {
  let listItem = document.createElement('li');
  listItem.innerText = \`Task \${i}\`;
  listItem.className = "dynamic-task";
  
  // Add each one to the list
  todoList.appendChild(listItem);
}

// Create a complete card with multiple children
let card = document.createElement('div');
card.className = "card";

let cardTitle = document.createElement('h3');
cardTitle.innerText = "Dynamic Card";

let cardText = document.createElement('p');
cardText.innerText = "This card was created with JavaScript!";

let cardButton = document.createElement('button');
cardButton.innerText = "Click Me";

// Build the card structure
card.appendChild(cardTitle);  // Add title to card
card.appendChild(cardText);   // Add text to card
card.appendChild(cardButton); // Add button to card

// Finally, add the complete card to the page
container.appendChild(card);

console.log("All elements are now visible on the page!");`}
                        </InteractiveCodeBlock>
                        
                        <p>✅ <strong>appendChild() moves elements from memory to the visible DOM tree!</strong></p>
                    </Section>

                    <Section title="❌ Removing Elements with remove()">
                        <p>remove() lets you delete elements from the page completely! Perfect for delete buttons, clearing lists, and dynamic content management.</p>
                        
                        <InteractiveCodeBlock language="javascript" hoverable={true}>
                            {`// Get elements to remove
let taskItem = document.querySelector('.task-item');
let oldContent = document.querySelector('#old-content');

// Simple removal - modern method
taskItem.remove(); // Deletes the element completely

// Alternative removal method (older browsers)
let parent = taskItem.parentNode;
parent.removeChild(taskItem); // Same result, more steps

// Remove multiple elements
let allTasks = document.querySelectorAll('.task-item');
allTasks.forEach(task => {
  task.remove(); // Remove each one
});

// Clear entire container
let todoList = document.querySelector('#todo-list');
todoList.innerHTML = ""; // Quick way to clear all children

// Or remove children one by one
while (todoList.firstChild) {
  todoList.removeChild(todoList.firstChild);
}

// Remove with confirmation
function deleteTask(taskElement) {
  if (confirm("Delete this task?")) {
    taskElement.remove();
    console.log("Task deleted!");
  }
}

// Remove after animation
function fadeOutAndRemove(element) {
  element.style.transition = "opacity 0.5s ease";
  element.style.opacity = "0";
  
  setTimeout(() => {
    element.remove(); // Remove after fade completes
  }, 500);
}

// Conditional removal
let completedTasks = document.querySelectorAll('.task-item.completed');
if (completedTasks.length > 0) {
  completedTasks.forEach(task => task.remove());
  console.log(\`Removed \${completedTasks.length} completed tasks\`);
}

// Remove and clean up event listeners
let button = document.querySelector('#temp-button');
button.removeEventListener('click', handleClick); // Clean up first
button.remove(); // Then remove element`}
                        </InteractiveCodeBlock>

                        <p><strong>⚠️ Important:</strong> Removed elements are gone forever unless you keep a reference to them!</p>
                    </Section>

                    <Section title="⚡ Event Listeners + Dynamic Elements">
                        <p>The real power comes from combining createElement(), appendChild(), and event listeners to build fully interactive components!</p>
                        
                        <InteractiveCodeBlock language="javascript" hoverable={true}>
                            {`// Complete dynamic to-do list example
let addBtn = document.querySelector('#add-btn');
let taskInput = document.querySelector('#task-input');
let taskList = document.querySelector('#task-list');

// Function to create a new task
function createTask(taskText) {
  // Create the main task element
  let taskItem = document.createElement('li');
  taskItem.className = 'task-item';
  
  // Create text span
  let taskSpan = document.createElement('span');
  taskSpan.innerText = taskText;
  
  // Create delete button
  let deleteBtn = document.createElement('button');
  deleteBtn.innerText = '🗑️ Delete';
  deleteBtn.className = 'delete-btn';
  
  // Add event listener to the new delete button!
  deleteBtn.addEventListener('click', function() {
    taskItem.remove(); // Remove the parent task
    console.log(\`Deleted task: \${taskText}\`);
  });
  
  // Create complete button
  let completeBtn = document.createElement('button');
  completeBtn.innerText = '✅ Done';
  completeBtn.className = 'complete-btn';
  
  // Add completion functionality
  completeBtn.addEventListener('click', function() {
    taskItem.classList.toggle('completed');
    let isCompleted = taskItem.classList.contains('completed');
    completeBtn.innerText = isCompleted ? '↩️ Undo' : '✅ Done';
  });
  
  // Assemble the task
  taskItem.appendChild(taskSpan);
  taskItem.appendChild(completeBtn);
  taskItem.appendChild(deleteBtn);
  
  return taskItem;
}

// Main add task function
function addTask() {
  let taskText = taskInput.value.trim();
  if (taskText === '') return;
  
  // Create new task element with events
  let newTask = createTask(taskText);
  
  // Add to the list
  taskList.appendChild(newTask);
  
  // Clear input
  taskInput.value = '';
}

// Add event listeners to main controls
addBtn.addEventListener('click', addTask);

taskInput.addEventListener('keypress', function(e) {
  if (e.key === 'Enter') {
    addTask();
  }
});

// Dynamic list with animations
function addTaskWithAnimation(taskText) {
  let task = createTask(taskText);
  
  // Start invisible
  task.style.opacity = '0';
  task.style.transform = 'translateY(-20px)';
  
  taskList.appendChild(task);
  
  // Animate in
  setTimeout(() => {
    task.style.transition = 'all 0.3s ease';
    task.style.opacity = '1';
    task.style.transform = 'translateY(0)';
  }, 10);
}

console.log("Dynamic to-do list ready with full interactivity!");`}
                        </InteractiveCodeBlock>

                        <p><strong>Key Points:</strong></p>
                        <ul>
                            <li>🔥 Always add event listeners to new elements before or after adding them to the DOM</li>
                            <li>⚡ Each dynamically created element can have its own unique functionality</li>
                            <li>🎯 This pattern powers modern web apps: create, customize, add, interact!</li>
                        </ul>
                    </Section>

                    <Tip type="success">
                        <strong>Advanced DOM Mastery Unlocked!</strong> You can now create, manipulate, and destroy DOM elements at will! 
                        With createElement(), appendChild(), and remove(), you have the power to build complex, interactive web applications. 
                        This is the foundation of modern frameworks like React, Vue, and Angular! 🚀⚡
                    </Tip>
                </Lesson>

                <Task
                    objective="Build a fully functional to-do list using dynamic DOM element creation and manipulation"
                    validations={[
                        {
                            requirement: 'Use createElement() to create new HTML elements',
                            validator: (doc) => {
                                const scripts = doc.querySelectorAll('script');
                                let scriptText = '';
                                scripts.forEach(script => scriptText += script.textContent);
                                return scriptText.includes('createElement(') && 
                                       (scriptText.includes('"li"') || scriptText.includes("'li'") || scriptText.includes('"div"') || scriptText.includes("'div'"));
                            }
                        },
                        {
                            requirement: 'Use appendChild() to add elements to the DOM',
                            validator: (doc) => {
                                const scripts = doc.querySelectorAll('script');
                                let scriptText = '';
                                scripts.forEach(script => scriptText += script.textContent);
                                return scriptText.includes('appendChild(');
                            }
                        },
                        {
                            requirement: 'Use remove() or removeChild() to delete elements',
                            validator: (doc) => {
                                const scripts = doc.querySelectorAll('script');
                                let scriptText = '';
                                scripts.forEach(script => scriptText += script.textContent);
                                return scriptText.includes('.remove()') || 
                                       scriptText.includes('removeChild(');
                            }
                        },
                        {
                            requirement: 'Add event listeners to dynamically created elements',
                            validator: (doc) => {
                                const scripts = doc.querySelectorAll('script');
                                let scriptText = '';
                                scripts.forEach(script => scriptText += script.textContent);
                                return scriptText.includes('addEventListener') && 
                                       (scriptText.includes('click') || scriptText.includes('keypress'));
                            }
                        },
                        {
                            requirement: 'Create a function that builds complete interactive elements',
                            validator: (doc) => {
                                const scripts = doc.querySelectorAll('script');
                                let scriptText = '';
                                scripts.forEach(script => scriptText += script.textContent);
                                return (scriptText.includes('function') || scriptText.includes('=>')) &&
                                       scriptText.includes('createElement') && 
                                       scriptText.includes('appendChild');
                            }
                        }
                    ]}
                    hints={[
                        'Use document.createElement("li") to create new list items',
                        'Use taskList.appendChild(newTask) to add tasks to the list',
                        'Add deleteBtn.addEventListener("click", () => task.remove())',
                        'Create a function that builds the complete task structure',
                        'Try the sample buttons to see createElement() and appendChild() in action!'
                    ]}
                >

                </Task>

                <Exercise
                    category="js"
                    lessonId="6"
                    title="🚀 Advanced DOM Quiz"
                    description="Test your understanding of createElement(), appendChild(), remove(), and dynamic element manipulation!"
                    buttonText="Start Advanced DOM Quiz"
                    tipText="Complete the dynamic to-do list task above to get hands-on experience before taking the quiz!"
                />
            </DescriptionBlock>

            <PreviewBlock />
        </Editor>
    );
};


export default Lesson6;
