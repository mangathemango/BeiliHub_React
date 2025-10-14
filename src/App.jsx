import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout/Layout';
import Home from './pages/Home/Home';
import About from './pages/About/About';
import Learn from './pages/Learn/Learn';
import Contact from './pages/Contact/Contact';
import Login from './pages/Login/Login';
import Lesson from './pages/Lesson/Lesson';
import Exercise from './pages/Lesson/Exercise';
import './global.css';
import Question from './pages/Lesson/components/Question/Question';
import Results from './pages/Results/Results';
import LessonChose from './pages/lessonChose/chose';

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/login" element={<Login />} />
          <Route path="/lesson/:category/:id" element={<Lesson />} />
          <Route path="/lesson/:category/:id/exercise" element={<Exercise />} />
          <Route path="/results" element={<Results />} />
          <Route path="/lesson-chose" element={<LessonChose />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;
