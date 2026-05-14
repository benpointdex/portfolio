import React from 'react';
import { Link } from 'react-router-dom';

// Project data with expanded info for the new detail view
export const projects = [
  {
    id: 'geomi',
    name: 'Turning spreadsheet chaos into intelligent clarity',
    displayName: 'Geomi',
    description: 'Find the product design for Edgal, a business intelligence platform that helps teams move beyond spreadsheets and make sense of their data in real-time. We created a complex data-heavy tool into an intuitive experience that anyone can build and share internal resources with simple spreadsheet skills.',
    image: 'https://images.unsplash.com/photo-1551288049-bbbda536339a?auto=format&fit=crop&q=80&w=1400&h=900',
    color: '#52563F',
    client: 'Edgal',
    industry: 'Business Intelligence, Data Automation',
    services: 'Product Design',
    screenshots: [
      'https://images.unsplash.com/photo-1551288049-bbbda536339a?auto=format&fit=crop&q=80&w=1400&h=900',
      'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=1400&h=900',
      'https://images.unsplash.com/photo-1504868584819-f8e90526354a?auto=format&fit=crop&q=80&w=1400&h=900',
    ]
  },
  {
    id: 'concierge',
    name: 'Intelligent search for enterprise knowledge bases',
    displayName: 'Concierge',
    description: 'The trusted AI answer machine for your B2B docs. Semantic search over private knowledge bases with GPT-4 integration and team permissions. We built a system that understands natural language queries and returns precise answers with citations.',
    image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&q=80&w=1400&h=900',
    color: '#D7D2C3',
    client: 'Concierge AI',
    industry: 'Enterprise Software, AI',
    services: 'Full Stack Development',
    screenshots: [
      'https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&q=80&w=1400&h=900',
      'https://images.unsplash.com/photo-1664575602554-2087b04935a5?auto=format&fit=crop&q=80&w=1400&h=900',
    ]
  },
  {
    id: 'ikigai',
    name: 'Finding purpose through daily habits',
    displayName: 'Ikigai',
    description: 'A habit and goal tracking platform inspired by the Japanese philosophy of purpose. Gamified streaks, AI insights, and beautiful data visualization. The app helps users align their daily activities with their long-term life goals.',
    image: 'https://images.unsplash.com/photo-1611532736597-de2d4265fba3?auto=format&fit=crop&q=80&w=1400&h=900',
    color: '#9CA3AF',
    client: 'Ikigai Labs',
    industry: 'Wellness, Productivity',
    services: 'Mobile Design, UX Research',
    screenshots: [
      'https://images.unsplash.com/photo-1611532736597-de2d4265fba3?auto=format&fit=crop&q=80&w=1400&h=900',
      'https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&q=80&w=1400&h=900',
    ]
  }
];


const ProjectCard = ({ project }) => {
  const [hovered, setHovered] = React.useState(false);

  return (
    <Link to={`/project/${project.id}`} style={{ textDecoration: 'none', color: 'inherit' }}>
      <div
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        style={{
          marginBottom: '64px',
          cursor: 'pointer',
        }}
      >
        <div style={{
          borderRadius: '16px', // radius 16px from design.md
          overflow: 'hidden',
          backgroundColor: '#E7E3D5', // card surface
          border: '0.8px solid rgba(82, 86, 63, 0.12)', // 0.8px primary border
          marginBottom: '20px',
          position: 'relative',
          aspectRatio: '16/10',
          transition: 'all 0.3s cubic-bezier(0.16, 1, 0.3, 1)',
          transform: hovered ? 'translateY(-4px)' : 'translateY(0)',
          boxShadow: hovered
            ? '0 20px 40px -12px rgba(82, 86, 63, 0.15)'
            : '0 1px 3px rgba(0,0,0,0.04)',
        }}>
          <img
            src={project.image}
            alt={project.displayName}
            style={{
              width: '100%',
              height: '100%',
              objectFit: 'cover',
              display: 'block',
              transition: 'transform 0.5s ease',
              transform: hovered ? 'scale(1.05)' : 'scale(1)',
              filter: hovered ? 'grayscale(0)' : 'grayscale(0.1) brightness(0.95)',
            }}
          />
        </div>

        <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
          <div style={{
            width: '12px',
            height: '12px',
            borderRadius: '50%',
            backgroundColor: project.color,
            flexShrink: 0,
          }} />
          <span style={{
            fontFamily: 'Playfair Display, serif', // display-lg for project names
            fontSize: '18px',
            fontWeight: '500',
            color: '#111827',
            letterSpacing: '-0.01em',
          }}>
            {project.displayName}
          </span>
        </div>
      </div>
    </Link>
  );
};

const Projects = () => {
  return (
    <div style={{ width: '100%', maxWidth: '1200px' }}>
      {projects.map(project => (
        <ProjectCard key={project.id} project={project} />
      ))}
    </div>
  );
};

export default Projects;
