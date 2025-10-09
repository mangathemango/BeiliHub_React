import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import About from './pages/About';
import Courses from './pages/Courses';
import Learn from './pages/Learn';
import Contact from './pages/Contact';
import Login from './pages/Login';
import NetworkingCourse from './pages/NetworkingCourse';
import './styles/global.css';

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
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;
