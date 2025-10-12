import React from "react";
import "./Lesson5.css";
import Editor from "../../components/Editor/editor";
import { CodeBlock, DescriptionBlock, PreviewBlock } from "../../components/Editor";
import { InlineEditable } from "../../components/Editor/components/CodeBlock/components";
import { CodeSnippet, Highlight, Tip, Section, Task, Lesson } from "../../components/Editor/components/DescriptionBlock/components";
import InteractiveCodeBlock from "../../components/Editor/components/DescriptionBlock/components/InteractiveCodeBlock";
import HighlightTrigger from "../../components/Editor/components/DescriptionBlock/components/HighlightTrigger";
import Exercise from "../../components/Editor/components/DescriptionBlock/components/Exercise";

const Lesson5 = () => {
    return (
        <Editor>
            <CodeBlock>
                {`<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Arrays & Objects - Data Storage</title>
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
      border: 2px solid #ff6b6b;
      border-radius: 8px;
      font-size: 16px;
      min-width: 250px;
      outline: none;
      transition: all 0.3s ease;
    }
    
    input[type="text"]:focus {
      border-color: #ff5252;
      box-shadow: 0 0 10px rgba(255,107,107,0.3);
    }
    
    button {
      padding: 12px 20px;
      border: none;
      background: #ff6b6b;
      color: white;
      font-size: 16px;
      border-radius: 8px;
      cursor: pointer;
      margin: 5px;
      transition: all 0.3s ease;
      box-shadow: 0 4px 15px rgba(255,107,107,0.3);
    }
    
    button:hover {
      background: #ff5252;
      transform: translateY(-2px);
      box-shadow: 0 6px 20px rgba(255,107,107,0.4);
    }
    
    .stats-area {
      background: rgba(255,255,255,0.8);
      padding: 15px;
      border-radius: 10px;
      margin: 20px 0;
      border-left: 4px solid #ff6b6b;
    }
    
    .task-container {
      list-style: none;
      padding: 0;
      margin: 20px 0;
      max-height: 300px;
      overflow-y: auto;
    }
    
    .movie-item {
      background: rgba(255,255,255,0.95);
      margin: 10px 0;
      padding: 15px;
      border-radius: 8px;
      display: flex;
      justify-content: space-between;
      align-items: center;
      border-left: 4px solid #ff6b6b;
      box-shadow: 0 2px 8px rgba(0,0,0,0.1);
      transition: all 0.3s ease;
    }
    
    .movie-item:hover {
      transform: translateY(-2px);
      box-shadow: 0 4px 12px rgba(0,0,0,0.15);
    }
    
    .movie-title {
      flex-grow: 1;
      text-align: left;
      padding-right: 10px;
      font-weight: bold;
    }
    
    .movie-year {
      color: #666;
      font-size: 0.9em;
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
  <h1>� Arrays & Objects Practice</h1>
  
  <div class="info-box">
    <h3>🎯 Your Mission:</h3>
    <ol>
      <li>Create <code>arrays</code> to store lists of data</li>
      <li>Create <code>objects</code> with key-value pairs</li>
      <li>Use <code>for loops</code> to iterate through arrays</li>
      <li>Access object properties with dot notation!</li>
    </ol>
  </div>
  
  <div class="demo-area">
    <h3>🎬 My Favorite Movies</h3>
    
    <div class="input-section">
      <input type="text" id="movie-input" placeholder="Enter movie title..." maxlength="50">
      <input type="number" id="year-input" placeholder="Year" min="1900" max="2030" style="width: 120px;">
      <button id="add-btn">➕ Add Movie</button>
      <button id="clear-all-btn">🗑️ Clear All</button>
    </div>
    
    <div class="stats-area">
      <p id="movie-count">Movies: 0</p>
      <p id="status-message">Add your first movie to get started!</p>
    </div>
    
    <ul id="movie-list" class="task-container">
      <!-- Dynamic movies will be added here -->
    </ul>
    
    <div class="demo-buttons">
      <button id="add-sample-btn">🎭 Add Sample Movies</button>
      <button id="show-arrays-btn">📋 Show Arrays in Console</button>
    </div>
    
    <div class="message-area">
      <h4>💡 Learning Tips:</h4>
      <p id="tip-text">Try adding movies and check the console to see how arrays and objects work together!</p>
    </div>
  </div>

  
  <script>
    `}<InlineEditable>{`// � Arrays & Objects Practice - Movie Collection
    
    // TODO: Select DOM elements
    const movieInput = document.querySelector("#movie-input");
    const yearInput = document.querySelector("#year-input");
    const addBtn = document.querySelector("#add-btn");
    const clearAllBtn = document.querySelector("#clear-all-btn");
    const movieList = document.querySelector("#movie-list");
    const movieCount = document.querySelector("#movie-count");
    const statusMessage = document.querySelector("#status-message");
    const tipText = document.querySelector("#tip-text");
    
    // TODO: Select demo buttons
    const addSampleBtn = document.querySelector("#add-sample-btn");
    const showArraysBtn = document.querySelector("#show-arrays-btn");
    
    // TODO: Array to store movie objects
    let movies = [];
    let movieIdCounter = 0;
    
    // TODO: Sample movie data (array of objects)
    const sampleMovies = [
      { id: 1, title: "Inception", year: 2010 },
      { id: 2, title: "Interstellar", year: 2014 },
      { id: 3, title: "Dune", year: 2021 },
      { id: 4, title: "The Matrix", year: 1999 }
    ];
    
    // TODO: Function to create a new movie element
    function createMovieElement(movie) {
      // Create the main list item
      const li = document.createElement("li");
      li.className = "movie-item";
      li.setAttribute("data-movie-id", movie.id);
      
      // Create title span
      const titleSpan = document.createElement("span");
      titleSpan.className = "movie-title";
      titleSpan.innerText = movie.title;
      
      // Create year span
      const yearSpan = document.createElement("span");
      yearSpan.className = "movie-year";
      yearSpan.innerText = \`(\${movie.year})\`;
      
      // Create delete button
      const deleteBtn = document.createElement("button");
      deleteBtn.innerText = "🗑️";
      deleteBtn.className = "delete-btn";
      deleteBtn.title = "Delete movie";
      
      // Add event listener to delete button
      deleteBtn.addEventListener("click", () => deleteMovie(li, movie.id));
      
      // Assemble the movie item
      li.appendChild(titleSpan);
      li.appendChild(yearSpan);
      li.appendChild(deleteBtn);
      
      return li;
    }
    
    // TODO: Function to add a new movie
    function addMovie() {
      const movieTitle = movieInput.value.trim();
      const movieYear = parseInt(yearInput.value);
      
      if (movieTitle === "") {
        statusMessage.innerText = "Please enter a movie title!";
        statusMessage.style.color = "#e74c3c";
        return;
      }
      
      if (!movieYear || movieYear < 1900 || movieYear > 2030) {
        statusMessage.innerText = "Please enter a valid year (1900-2030)!";
        statusMessage.style.color = "#e74c3c";
        return;
      }
      
      // Create movie object
      const movie = {
        id: movieIdCounter++,
        title: movieTitle,
        year: movieYear
      };
      
      // Add to movies array
      movies.push(movie);
      
      // Create DOM element and add to list
      const movieElement = createMovieElement(movie);
      movieList.appendChild(movieElement);
      
      // Clear inputs and update UI
      movieInput.value = "";
      yearInput.value = "";
      updateMovieCount();
      
      statusMessage.innerText = \`Added: "\${movieTitle} (\${movieYear})"\`;
      statusMessage.style.color = "#27ae60";
      
      tipText.innerText = "Great! You added an object to your movies array!";
      
      // Show the updated array in console
      console.log("Movies array:", movies);
    }
    
    // TODO: Function to delete a movie
    function deleteMovie(movieElement, movieId) {
      // Remove from movies array using filter method
      movies = movies.filter(movie => movie.id !== movieId);
      
      // Remove from DOM with animation
      movieElement.style.transform = "translateX(100%)";
      movieElement.style.opacity = "0";
      
      setTimeout(() => {
        movieElement.remove();
        updateMovieCount();
      }, 300);
      
      statusMessage.innerText = "Movie deleted successfully!";
      statusMessage.style.color = "#e74c3c";
      
      tipText.innerText = "Used array.filter() to remove the object from the array!";
      
      // Show the updated array in console
      console.log("Movies array after deletion:", movies);
    }
    
    // TODO: Function to update movie count
    function updateMovieCount() {
      const total = movies.length;
      movieCount.innerText = \`Movies: \${total}\`;
      
      if (total === 0) {
        statusMessage.innerText = "No movies yet. Add one to get started!";
        statusMessage.style.color = "#ff6b6b";
      }
    }
    
    // TODO: Function to clear all movies
    function clearAllMovies() {
      if (movies.length === 0) {
        statusMessage.innerText = "No movies to clear!";
        return;
      }
      
      // Clear array
      movies = [];
      
      // Clear DOM
      while (movieList.firstChild) {
        movieList.removeChild(movieList.firstChild);
      }
      
      updateMovieCount();
      statusMessage.innerText = "All movies cleared!";
      statusMessage.style.color = "#e74c3c";
      
      tipText.innerText = "Array cleared! Check console to see empty array.";
      console.log("Movies array cleared:", movies);
    }
    
    // TODO: Function to add sample movies
    function addSampleMovies() {
      // Loop through sample movies array
      sampleMovies.forEach((movieData, index) => {
        setTimeout(() => {
          // Create new movie object
          const movie = {
            id: movieIdCounter++,
            title: movieData.title,
            year: movieData.year
          };
          
          // Add to movies array
          movies.push(movie);
          
          // Create DOM element and add to list
          const movieElement = createMovieElement(movie);
          movieList.appendChild(movieElement);
          updateMovieCount();
        }, index * 300); // Stagger the additions
      });
      
      statusMessage.innerText = "Added sample movies!";
      statusMessage.style.color = "#ff6b6b";
      tipText.innerText = "Used forEach() to loop through the sample movies array!";
      
      setTimeout(() => {
        console.log("Sample movies added to array:", movies);
      }, sampleMovies.length * 300 + 100);
    }
    
    // TODO: Function to show arrays in console
    function showArraysInConsole() {
      console.log("=== ARRAYS & OBJECTS DEMO ===");
      console.log("Movies array:", movies);
      
      if (movies.length > 0) {
        console.log("First movie object:", movies[0]);
        console.log("First movie title:", movies[0].title);
        console.log("First movie year:", movies[0].year);
        
        console.log("All movie titles:");
        for (let i = 0; i < movies.length; i++) {
          console.log(\`\${i + 1}. \${movies[i].title} (\${movies[i].year})\`);
        }
      }
      
      statusMessage.innerText = "Check the console to see arrays and objects!";
      statusMessage.style.color = "#ff6b6b";
      tipText.innerText = "Console shows how to access array elements and object properties!";
    }
    
    // TODO: Add event listeners
    addBtn.addEventListener("click", addMovie);
    clearAllBtn.addEventListener("click", clearAllMovies);
    addSampleBtn.addEventListener("click", addSampleMovies);
    showArraysBtn.addEventListener("click", showArraysInConsole);
    
    // TODO: Add Enter key support for inputs
    movieInput.addEventListener("keypress", (e) => {
      if (e.key === "Enter") {
        addMovie();
      }
    });
    
    yearInput.addEventListener("keypress", (e) => {
      if (e.key === "Enter") {
        addMovie();
      }
    });
    
    // TODO: Add focus events
    movieInput.addEventListener("focus", () => {
      tipText.innerText = "Enter a movie title and year, then click Add Movie!";
    });
    
    // TODO: Initialize the app
    updateMovieCount();
    console.log("Movie app initialized! Movies array:", movies);`}</InlineEditable>{`
  </script>
  
  <div style="margin-top: 3rem; padding: 1.5rem; background: rgba(255,255,255,0.9); border-radius: 10px; backdrop-filter: blur(10px); max-width: 800px; margin-left: auto; margin-right: auto;">
    <h3>📦 Arrays & Objects Checklist</h3>
    <ul style="text-align: left;">
      <li><strong>Arrays []:</strong> Store ordered lists of data using square brackets</li>
      <li><strong>Objects {}:</strong> Store key-value pairs using curly braces</li>
      <li><strong>For Loops:</strong> Iterate through arrays to process each element</li>
      <li><strong>Dot Notation:</strong> Access object properties with object.property</li>
      <li><strong>Array Methods:</strong> Use push(), filter(), forEach() to manipulate arrays</li>
    </ul>
    
    <div style="margin-top: 1rem; padding: 1rem; background: rgba(102,126,234,0.1); border-radius: 8px;">
      <strong>💡 Pro Tips:</strong>
      <ul style="text-align: left;">
        <li>Arrays are zero-indexed: first element is <code>array[0]</code></li>
        <li>Use <code>array.length</code> to get the number of elements</li>
        <li>Access object properties with <code>object.property</code> or <code>object["property"]</code></li>
        <li>Combine arrays and objects to create powerful data structures!</li>
      </ul>
    </div>
  </div>
</body>
</html>`}
            </CodeBlock>

            <DescriptionBlock category="js" lessonId="5">
                <Lesson>
                    <h1>� JavaScript Lesson 5: Arrays & Objects – store lists of data, access properties</h1>

                    <p>
                        Up to now, we've stored single pieces of data (like one name or one number). But what if you want to store 
                        <strong>a list of items</strong> or <strong>a bundle of related data</strong>? That's where <strong>Arrays and Objects</strong> come in! 
                        Learn to organize data like a pro and build powerful applications that handle real-world information.
                    </p>

                    <Section title="📦 Arrays – Store Lists of Data">
                        <p>Arrays are ordered lists — perfect for multiple values of the same kind. Think shopping lists, movie collections, or user names!</p>

                        <table style={{ width: '100%', borderCollapse: 'collapse', marginTop: '10px' }}>
                            <thead>
                                <tr style={{ backgroundColor: '#f0f0f0' }}>
                                    <th style={{ padding: '8px', border: '1px solid #ddd' }}>Property/Method</th>
                                    <th style={{ padding: '8px', border: '1px solid #ddd' }}>Purpose</th>
                                    <th style={{ padding: '8px', border: '1px solid #ddd' }}>Example</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td style={{ padding: '8px', border: '1px solid #ddd' }}><strong>[index]</strong></td>
                                    <td style={{ padding: '8px', border: '1px solid #ddd' }}>Access element by position</td>
                                    <td style={{ padding: '8px', border: '1px solid #ddd' }}>fruits[0] // first item</td>
                                </tr>
                                <tr>
                                    <td style={{ padding: '8px', border: '1px solid #ddd' }}><strong>.length</strong></td>
                                    <td style={{ padding: '8px', border: '1px solid #ddd' }}>Get number of elements</td>
                                    <td style={{ padding: '8px', border: '1px solid #ddd' }}>fruits.length // 3</td>
                                </tr>
                                <tr>
                                    <td style={{ padding: '8px', border: '1px solid #ddd' }}><strong>.push()</strong></td>
                                    <td style={{ padding: '8px', border: '1px solid #ddd' }}>Add element to end</td>
                                    <td style={{ padding: '8px', border: '1px solid #ddd' }}>fruits.push("orange")</td>
                                </tr>
                            </tbody>
                        </table>

                        <p><strong>Example:</strong></p>
                        <InteractiveCodeBlock language="javascript" hoverable={true}>
                            {`// Create arrays with square brackets
const fruits = ["apple", "banana", "cherry"];
const numbers = [1, 2, 3, 4, 5];
const colors = ["red", "green", "blue"];

console.log(fruits); // ["apple", "banana", "cherry"]

// Access elements by index (starts at 0!)
console.log(fruits[0]); // "apple" (first item)
console.log(fruits[1]); // "banana" (second item)
console.log(fruits[2]); // "cherry" (third item)

// Get array length
console.log(fruits.length); // 3

// Add new elements
fruits.push("orange");
console.log(fruits); // ["apple", "banana", "cherry", "orange"]
console.log(fruits.length); // 4

// Change existing elements
fruits[0] = "grape";
console.log(fruits[0]); // "grape"

// Create empty array and fill it
const pets = [];
pets.push("dog");
pets.push("cat");
pets.push("hamster");
console.log(pets); // ["dog", "cat", "hamster"]

console.log("Arrays store multiple values in order!");`}
                        </InteractiveCodeBlock>
                        
                        <p>✅ <strong>Arrays use zero-based indexing (start at 0) and square brackets []!</strong></p>
                    </Section>

                    <Section title="🌀 Looping Through Arrays">
                        <p>You can use loops to process each element in an array. This is super useful for displaying lists, calculating totals, or finding specific items!</p>

                        <table style={{ width: '100%', borderCollapse: 'collapse', marginTop: '10px' }}>
                            <thead>
                                <tr style={{ backgroundColor: '#f0f0f0' }}>
                                    <th style={{ padding: '8px', border: '1px solid #ddd' }}>Loop Type</th>
                                    <th style={{ padding: '8px', border: '1px solid #ddd' }}>Purpose</th>
                                    <th style={{ padding: '8px', border: '1px solid #ddd' }}>Example</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td style={{ padding: '8px', border: '1px solid #ddd' }}><strong>for loop</strong></td>
                                    <td style={{ padding: '8px', border: '1px solid #ddd' }}>Process each array element</td>
                                    <td style={{ padding: '8px', border: '1px solid #ddd' }}>for (let i = 0; i &lt; arr.length; i++)</td>
                                </tr>
                                <tr>
                                    <td style={{ padding: '8px', border: '1px solid #ddd' }}><strong>forEach()</strong></td>
                                    <td style={{ padding: '8px', border: '1px solid #ddd' }}>Modern array iteration</td>
                                    <td style={{ padding: '8px', border: '1px solid #ddd' }}>arr.forEach(item =&gt; &#123;...&#125;)</td>
                                </tr>
                                <tr>
                                    <td style={{ padding: '8px', border: '1px solid #ddd' }}><strong>for...of</strong></td>
                                    <td style={{ padding: '8px', border: '1px solid #ddd' }}>Loop through values directly</td>
                                    <td style={{ padding: '8px', border: '1px solid #ddd' }}>for (let item of arr)</td>
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
                    lessonId="5"
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


export default Lesson5;
