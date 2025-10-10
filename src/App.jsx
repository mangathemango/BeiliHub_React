import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout/Layout';
import Home from './pages/Home/Home';
import About from './pages/About/About';
import Courses from './pages/Courses/Courses';
import Learn from './pages/Learn/Learn';
import Contact from './pages/Contact/Contact';
import Login from './pages/Login/Login';
import NetworkingCourse from './pages/NetworkingCourse/NetworkingCourse';
import Lesson from './pages/Lesson/Lesson';
import './global.css';

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/courses" element={<Courses />} />
          <Route path="/learn" element={<Learn />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/login" element={<Login />} />
          <Route path="/networking-course" element={<NetworkingCourse />} />
          <Route path="/lesson/:category/:id" element={<Lesson />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;
