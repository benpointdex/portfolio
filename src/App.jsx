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
  <div style={{ display: 'flex', minHeight: '100vh', backgroundColor: '#F4F2EB' }}>
    {/* Fixed Left Sidebar */}
    <div style={{
      position: 'fixed',
      top: 0,
      left: 0,
      width: '28.5%',
      height: '100vh',
      padding: '40px 48px 0',
      display: 'flex',


      flexDirection: 'column',
      backgroundColor: '#F4F2EB',
      borderRight: '1px solid rgba(82,86,63,0.1)',
      zIndex: 10,
    }}>
      <Sidebar />
    </div>

    {/* Scrollable Right Content */}
    <div style={{
      marginLeft: '28.5%',
      width: '71.5%',
      padding: '80px 80px 0',
      height: '100vh',
      position: 'relative',
      overflow: 'hidden', // clips the off-screen cards sliding in/out
    }}>
      <Projects />
    </div>
  </div>
);





export default App;
