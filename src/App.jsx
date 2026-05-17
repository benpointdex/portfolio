import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Sidebar from './components/Sidebar';
import Projects from './components/Projects';
import ProjectDetail from './components/ProjectDetail';
import TechCarousel from './components/TechCarousel';
import ErrorBoundary from './components/ErrorBoundary';
import './index.css';


function App() {
  return (
    <ErrorBoundary>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/project/:id" element={<ProjectDetail />} />
        </Routes>
      </Router>
    </ErrorBoundary>
  );
}

const Home = () => (
  <div className="layout-container">
    {/* Fixed Left Sidebar */}
    <div className="layout-sidebar">
      <Sidebar />
    </div>

    {/* Scrollable Right Content */}
    <div className="layout-content">
      <Projects />
    </div>
  </div>
);





export default App;
