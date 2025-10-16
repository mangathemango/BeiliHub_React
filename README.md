# BeiliHub React

A modern learning platform built with React, migrated from a static HTML/CSS/JS website. BeiliHub offers interactive courses, project-based learning, and community features for developers and learners.

## 🚀 Getting Started

1. **Clone the repository (if you haven't already)**
   ```bash
   git clone https://www.github.com/mangathemango/BeiliHub_React.git
   cd BeiliHub_React
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   npm run dev
   ```

4. **Open your browser**
   Visit `http://localhost:5173` to view the application


## 🚀 Features

**Responsive Design**: Works perfectly on desktop, tablet, and mobile
**Interactive Editor**: Code editor with live preview, code blocks, and instant feedback
**Lesson Navigation**: Browse lessons by HTML, CSS, JS, and project phases
**Quizzes & Results**: Each lesson includes a quiz and results review system
**Progress Tracking**: Track your learning progress with points and completion percentages
**Cosmic UI**: Beautiful animated backgrounds with stars, planets, and cosmic effects
**Modern Stack**: Built with React 18, React Router, and Vite

## 🛠️ Tech Stack

**Frontend**: React 18 with Hooks
**Routing**: React Router DOM
**Build Tool**: Vite
**Styling**: CSS with CSS Variables for theming
**State Management**: React useState and localStorage for persistence
**Lesson System**: Dynamic import of lesson components and quizzes

## 📁 Project Structure

```
src/
├── components/                # Reusable UI components (Header, Layout, CosmicBackground, Modal, etc.)
├── pages/
│   ├── Home/                  # Landing page
│   ├── About/                 # About us page
│   ├── Contact/               # Contact form
│   ├── Login/                 # User authentication
│   ├── Results/               # Quiz results page
│   ├── lessonChose/           # Lesson selection interface
│   └── Lesson/
│       ├── components/        # Editor, Question, and supporting components
│       ├── css/               # Lesson-specific CSS files
│       │   └── lesson10/
│       │       ├── Lesson10.css
│       │       ├── Lesson10.jsx
│       │       └── quiz.json
│       ├── js/                # JS lessons (lesson1-lesson10)
│       ├── html/              # HTML lessons
│       ├── project/           # Final project lesson
│       ├── Exercise.jsx       # Quiz/exercise loader
│       ├── Lesson.jsx         # Dynamic lesson loader
│       └── COMPONENT_DOCS.md  # Component documentation
├── data/                      # Static data and content
├── global.css                 # Main stylesheet
├── App.jsx                    # Main app component with routing
├── main.jsx                   # React root
```

## 🎨 Design Features

- **Cosmic Theme**: Dark space-themed UI with gradient accents
- **Animated Backgrounds**: Canvas-based star fields, nebulae, and particle effects
- **Glassmorphism**: Semi-transparent cards with backdrop blur effects
- **Responsive Grid**: Flexible layouts that adapt to screen size
- **Smooth Animations**: CSS transitions and keyframe animations

## 📚 Pages Overview

### Home Page
- Hero section with animated featured course card
- "How it works" section explaining the learning approach
- Featured courses grid
- Call-to-action for trial signup

### Courses Page
- Complete course catalog with search and filtering
- Tag-based filtering (Web, AI, Data, Security)
- Sorting options (popularity, newest, shortest)
- Pagination support
- Course preview modals

### Learn Page  
- Interactive lesson interface with sidebar navigation
- Progress tracking with points system
- Multiple lesson formats: reading, flashcards, quizzes
- Hints system and completion tracking
- localStorage persistence for progress

### About Page
- Team member profiles with external portfolio links
- Animated star background
- Responsive team grid layout

### Contact Page
- Contact form with validation
- Simulated form submission
- Additional contact methods display

### Login Page
- Simple authentication form
- Demo login functionality
- Responsive form design

### Lessons & Quizzes
- **Lesson Selection:** Choose lessons by HTML, CSS, JS, or project phase
- **Dynamic Loading:** Lessons and quizzes are loaded dynamically by route
- **Interactive Editor:** Each lesson features a code editor with live preview and code blocks
- **Quiz System:** Each lesson includes a quiz (JSON-based) and a results review page
- **Advanced CSS Lesson (Lesson 10):**
   - Theme switcher demo (light/dark mode)
   - Use of CSS variables, calc(), clamp(), and responsive design
   - Interactive code blocks and preview
   - Quiz to test understanding of advanced CSS features


## 🔧 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run lint` - Run ESLint
- `npm run preview` - Preview production build

## 🎯 Key Migration Achievements

✅ **Complete HTML to React conversion** - All static pages and lessons converted to React components
✅ **Responsive design preserved** - All responsive breakpoints and mobile optimizations maintained
✅ **Interactive editor and preview** - Code editor with live preview for lessons
✅ **Quiz and results system** - JSON-based quizzes and results review for each lesson
✅ **State management implemented** - Learning progress, points system, and user preferences
✅ **Routing system** - Client-side navigation with React Router
✅ **Modern development setup** - Hot reload, ESLint, and optimized build process
✅ **Asset optimization** - Images and icons properly organized and served
✅ **Performance optimized** - Code splitting and lazy loading ready

## 🌟 Future Enhancements

- User authentication and profiles
- Backend API integration
- Real course content management
- Video streaming capabilities
- Social features and community
- Mobile app development
- Advanced analytics and reporting

## 🧑‍💻 How Lessons Work

- Lessons are organized by category (HTML, CSS, JS, Project)
- Each lesson is a React component loaded dynamically by route
- Lesson pages feature:
   - Interactive code editor and preview
   - Step-by-step explanations and code blocks
   - Task objectives and hints
   - Quiz (JSON-based) and results review
- Example: CSS Lesson 10 covers theme switching, variables, calc(), clamp(), and includes a quiz

## � Try It Out

1. Go to the Home page and click "Start Learning Now" to browse lessons
2. Select a lesson to open the interactive editor and preview
3. Complete the lesson and take the quiz
4. View your results and explanations

## �📄 License

This project is part of an educational assignment for Web Development Methods and Practice course at BIT University.

---

**Original Static Site**: The original HTML/CSS/JS version is preserved in the `old/` directory for reference.

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.

