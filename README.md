# BeiliHub React

A modern learning platform built with React, migrated from a static HTML/CSS/JS website. BeiliHub offers interactive courses, project-based learning, and community features for developers and learners.

## 🚀 Features

- **Responsive Design**: Works perfectly on desktop, tablet, and mobile
- **Interactive Learning**: Engaging lessons with quizzes, flashcards, and hands-on exercises
- **Course Catalog**: Browse and filter courses by topic, difficulty, and duration
- **Progress Tracking**: Track your learning progress with points and completion percentages
- **Cosmic UI**: Beautiful animated backgrounds with stars, planets, and cosmic effects
- **Modern Stack**: Built with React 18, React Router, and Vite

## 🛠️ Tech Stack

- **Frontend**: React 18 with Hooks
- **Routing**: React Router DOM
- **Build Tool**: Vite
- **Styling**: CSS with CSS Variables for theming
- **State Management**: React useState and localStorage for persistence

## 📁 Project Structure

```
src/
├── components/          # Reusable UI components
│   ├── Header.jsx      # Navigation header
│   ├── Footer.jsx      # Site footer
│   ├── Layout.jsx      # Page layout wrapper
│   ├── CosmicBackground.jsx  # Animated background
│   ├── CourseCard.jsx  # Course display component
│   └── Modal.jsx       # Modal dialogs
├── pages/              # Page components
│   ├── Home.jsx        # Landing page
│   ├── About.jsx       # About us page
│   ├── Courses.jsx     # Course catalog
│   ├── Learn.jsx       # Interactive learning
│   ├── Contact.jsx     # Contact form
│   └── Login.jsx       # User authentication
├── data/               # Static data and content
│   └── courses.js      # Course and lesson data
├── styles/             # Global styles
│   └── global.css      # Main stylesheet
└── App.jsx             # Main app component with routing
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

## 🚀 Getting Started

1. **Clone the repository**
   ```bash
   git clone <repository-url>
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

## 🔧 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run lint` - Run ESLint
- `npm run preview` - Preview production build

## 🎯 Key Migration Achievements

✅ **Complete HTML to React conversion** - All 10+ HTML pages converted to React components
✅ **Responsive design preserved** - All responsive breakpoints and mobile optimizations maintained  
✅ **Interactive features migrated** - Course filtering, search, modals, forms, and animations
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

## 📄 License

This project is part of an educational assignment for Web Development Methods and Practice course at BIT University.

---

**Original Static Site**: The original HTML/CSS/JS version is preserved in the `old/` directory for reference.

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.
