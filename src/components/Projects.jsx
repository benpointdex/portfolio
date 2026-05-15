import React from 'react';
import { Link } from 'react-router-dom';

// Project data with expanded info for the new detail view
export const projects = [
  {
    id: 'geomi',
    name: 'Turning spreadsheet chaos into intelligent clarity',
    displayName: 'Geomi',
    description: 'Find the product design for Edgal, a business intelligence platform that helps teams move beyond spreadsheets and make sense of their data in real-time. We created a complex data-heavy tool into an intuitive experience that anyone can build and share internal resources with simple spreadsheet skills.',
    shortDescription: 'Intelligent business clarity platform transforming complex spreadsheets into intuitive, real-time data visualizations and collaborative internal resources for modern enterprise teams.',
    techStack: ['React', 'D3.js', 'Node.js', 'PostgreSQL', 'AWS', 'Tailwind'],
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
    shortDescription: 'AI-powered semantic search engine for B2B documentation, integrating GPT-4 to provide precise, cited answers from private enterprise knowledge bases.',
    techStack: ['Next.js', 'OpenAI', 'Pinecone', 'Python', 'Docker', 'Redis'],
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
    shortDescription: 'Purpose-driven habit tracking platform blending Japanese philosophy with AI insights, gamified streaks, and elegant data visualizations to align daily activities.',
    techStack: ['React Native', 'Firebase', 'Redux', 'Chart.js', 'Node.js', 'Stripe'],
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


const ProjectCard = ({ project, isLast }) => {
  return (
    <Link to={`/project/${project.id}`} style={{ textDecoration: 'none', color: 'inherit' }}>
      <div
        style={{
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          paddingBottom: '0', // Stuck to the bottom
          cursor: 'pointer',
        }}
      >
        <div style={{
          borderRadius: '16px',
          overflow: 'hidden',
          backgroundColor: '#E7E3D5',
          border: '0.8px solid rgba(82, 86, 63, 0.12)',
          position: 'relative',
          width: '100%',
          aspectRatio: '16 / 9',
        }}>
          <img
            src={project.image}
            alt={project.displayName}
            style={{
              width: '100%',
              height: '100%',
              objectFit: 'cover',
              display: 'block',
            }}
          />
        </div>

        {/* Pushed towards the bottom with refined breathing room */}
        <div style={{ 
          marginTop: 'auto', 
          paddingBottom: '40px', // Increased padding for better balance
          paddingLeft: '8px', 
          paddingRight: '8px' 
        }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '20px' }}>
            <div style={{
              width: '12px',
              height: '12px',
              borderRadius: '50%',
              backgroundColor: project.color,
              flexShrink: 0,
            }} />
            <span style={{
              fontFamily: 'Playfair Display, serif',
              fontSize: '24px',
              fontWeight: '500',
              color: '#111827',
              letterSpacing: '-0.01em',
            }}>
              {project.displayName}
            </span>
          </div>

          <div style={{ 
            height: '0.8px', 
            width: '100%', 
            backgroundColor: 'rgba(82, 86, 63, 0.12)', 
            marginBottom: '28px' 
          }} />

          <div style={{ 
            display: 'grid', 
            gridTemplateColumns: '1.8fr 1.2fr', 
            gap: '60px',
            alignItems: 'start' 
          }}>
            <p style={{
              fontFamily: 'Inter, sans-serif',
              fontSize: '13px', // Decreased font size for a more refined look
              lineHeight: '1.6',
              color: 'rgba(17, 24, 39, 0.7)', // Slightly softer color
              margin: 0,
              maxWidth: '600px'
            }}>
              {project.shortDescription}
            </p>

            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(2, 1fr)',
              gap: '12px 32px',
              borderLeft: '0.8px solid rgba(82, 86, 63, 0.12)',
              paddingLeft: '40px'
            }}>
              {project.techStack.map((tech, i) => (
                <span key={i} style={{
                  fontFamily: 'Inter, sans-serif',
                  fontSize: '9px', // Decreased font size for a technical look
                  color: '#52563F',
                  fontWeight: '600',
                  textTransform: 'uppercase',
                  letterSpacing: '0.15em', // Increased spacing for better legibility at small size
                  opacity: 0.8
                }}>
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
};

const Projects = () => {
  const [currentIndex, setCurrentIndex] = React.useState(0);
  const [dragOffset, setDragOffset] = React.useState(0); // live drag preview in px
  const isAnimating = React.useRef(false);
  const touchStartY = React.useRef(null);
  const wheelAccum = React.useRef(0);
  const wheelTimer = React.useRef(null);

  const DRAG_THRESHOLD = 0.20; // 20% of viewport height to auto-swap
  const viewportH = typeof window !== 'undefined' ? window.innerHeight : 800;

  const goTo = React.useCallback((index) => {
    const clamped = Math.max(0, Math.min(projects.length - 1, index));
    if (clamped === currentIndex) {
      // snap back
      setDragOffset(0);
      return;
    }
    isAnimating.current = true;
    setCurrentIndex(clamped);
    setDragOffset(0);
    setTimeout(() => { isAnimating.current = false; }, 600);
  }, [currentIndex]);

  // --- Wheel ---
  React.useEffect(() => {
    const onWheel = (e) => {
      e.preventDefault();
      if (isAnimating.current) return;
      wheelAccum.current += e.deltaY;
      clearTimeout(wheelTimer.current);
      wheelTimer.current = setTimeout(() => { wheelAccum.current = 0; }, 150);
      if (Math.abs(wheelAccum.current) >= viewportH * DRAG_THRESHOLD) {
        const dir = wheelAccum.current > 0 ? 1 : -1;
        wheelAccum.current = 0;
        goTo(currentIndex + dir);
      }
    };
    window.addEventListener('wheel', onWheel, { passive: false });
    return () => window.removeEventListener('wheel', onWheel);
  }, [currentIndex, goTo, viewportH]);

  // --- Touch ---
  React.useEffect(() => {
    const onTouchStart = (e) => { touchStartY.current = e.touches[0].clientY; };
    const onTouchMove = (e) => {
      e.preventDefault();
      if (touchStartY.current === null || isAnimating.current) return;
      const delta = touchStartY.current - e.touches[0].clientY; // positive = swiping up (next)
      setDragOffset(delta);
    };
    const onTouchEnd = () => {
      if (touchStartY.current === null) return;
      const delta = dragOffset;
      if (Math.abs(delta) >= viewportH * DRAG_THRESHOLD) {
        goTo(currentIndex + (delta > 0 ? 1 : -1));
      } else {
        setDragOffset(0); // snap back
      }
      touchStartY.current = null;
    };
    window.addEventListener('touchstart', onTouchStart, { passive: false });
    window.addEventListener('touchmove', onTouchMove, { passive: false });
    window.addEventListener('touchend', onTouchEnd);
    return () => {
      window.removeEventListener('touchstart', onTouchStart);
      window.removeEventListener('touchmove', onTouchMove);
      window.removeEventListener('touchend', onTouchEnd);
    };
  }, [currentIndex, dragOffset, goTo, viewportH]);

  return (
    <div style={{ width: '100%', height: '100%', position: 'relative', overflow: 'hidden' }}>
      {projects.map((project, index) => {
        // Position each card: current=0, previous=-1 (above), next=+1 (below)
        const relIndex = index - currentIndex;
        // Apply drag offset as a live preview
        const translateY = `calc(${relIndex * 100}% + ${-dragOffset}px)`;
        const isVisible = Math.abs(relIndex) <= 1; // only render adjacent cards
        return (
          <div
            key={project.id}
            style={{
              position: 'absolute',
              top: 0,
              left: 0,
              width: '100%',
              height: '100%',
              transform: `translateY(${translateY})`,
              transition: dragOffset === 0 ? 'transform 0.55s cubic-bezier(0.77,0,0.175,1)' : 'none',
              willChange: 'transform',
              pointerEvents: isVisible ? 'auto' : 'none',
            }}
          >
            <ProjectCard project={project} />
          </div>
        );
      })}

      {/* Dot indicators */}
      <div style={{
        position: 'absolute',
        right: '-40px',
        top: '50%',
        transform: 'translateY(-50%)',
        display: 'flex',
        flexDirection: 'column',
        gap: '8px',
        zIndex: 100,
      }}>
        {projects.map((_, i) => (
          <button
            key={i}
            onClick={() => goTo(i)}
            style={{
              width: i === currentIndex ? '8px' : '5px',
              height: i === currentIndex ? '8px' : '5px',
              borderRadius: '50%',
              backgroundColor: i === currentIndex ? '#52563F' : 'rgba(82,86,63,0.25)',
              border: 'none',
              cursor: 'pointer',
              padding: 0,
              transition: 'all 0.3s ease',
            }}
          />
        ))}
      </div>
    </div>
  );
};

export default Projects;
