import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
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
    <Helmet>
      <title>Mohd Shakib | Full Stack Developer</title>
      <meta name="description" content="Mohd Shakib is a Full Stack Developer building secure, scalable, and high-performance web applications with a focus on clean architecture and real-world problem solving." />
      <meta name="keywords" content="Mohd Shakib, Full Stack Developer, Software Engineer, Portfolio, Java 21, Spring Boot Developer, Distributed Systems, Microservices, gRPC, Apache Kafka, Cinnamon, Model Context Protocol, MCP Server, AST Parsing, Tree-sitter, pgvector, Vector Search, Semantic Search, Patienta, Healthcare ERP, AuthPulse, React Developer, Backend Developer, PostgreSQL, Docker, Vite React Portfolio" />
      <link rel="canonical" href="https://mohdshakib.vercel.app/" />
      <meta property="og:type" content="website" />
      <meta property="og:url" content="https://mohdshakib.vercel.app/" />
      <meta property="og:title" content="Mohd Shakib | Full Stack Developer" />
      <meta property="og:description" content="Mohd Shakib is a Full Stack Developer building secure, scalable, and high-performance web applications with a focus on clean architecture and real-world problem solving." />
      <meta property="og:image" content="https://mohdshakib.vercel.app/profile/profile.jpeg" />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:site" content="@shakib_cs" />
      <meta name="twitter:title" content="Mohd Shakib | Full Stack Developer" />
      <meta name="twitter:description" content="Mohd Shakib is a Full Stack Developer building secure, scalable, and high-performance web applications with a focus on clean architecture and real-world problem solving." />
      <meta name="twitter:image" content="https://mohdshakib.vercel.app/profile/profile.jpeg" />
    </Helmet>
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
