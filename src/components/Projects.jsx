import React from 'react';
import { Link } from 'react-router-dom';

// Project data with expanded info for the new detail view
export const projects = [
  {
    id: 'auth-pulse',
    name: 'Secure, scalable access from backend to browser',
    displayName: 'AuthPulse',
    description: 'AuthPulse is a complete identity and access management solution built for modern web applications. Featuring stateless JWT security, automatic token refreshing, and seamless Google OAuth2 integration, it provides a secure bridge between a robust Java backend and a responsive React dashboard.',
    shortDescription: 'Bulletproof your web applications with this complete identity management stack. Features stateless token security and OAuth2 built seamlessly across Java and React.',
    techStack: ['React', 'Spring Boot', 'PostgreSQL', 'Spring Security', 'Tailwind', 'Docker', 'OAuth2', 'JWT'],
    image: '/auth-pulse/hero.bmp',
    color: '#52563F',
    liveUrl: 'https://auth-back-latest.onrender.com/',
    githubUrl: 'https://github.com/benpointdex/auth-system',
    screenshots: [
      '/auth-pulse/hero.bmp',
      '/auth-pulse/login.bmp',
      '/auth-pulse/dashboard.bmp'
    ]
  },
  {
    id: 'shortify',
    name: 'Making every click count with intelligent tracking',
    displayName: 'Shortify',
    description: 'Find the product design for Shortify, a secure URL management tool designed to convert complex links into manageable assets. Featuring a responsive interface and reliable backend architecture, the platform provides real-time click analytics and instant redirection for a frictionless user experience.',
    shortDescription: 'Make every click count with this high-performance URL shortener. Offers instant redirection and intelligent analytics powered by a scalable Spring Boot architecture.',
    techStack: ['React', 'TypeScript', 'Spring Boot', 'PostgreSQL', 'Spring Security', 'JWT'],
    image: '/shortner/hero.bmp',
    color: '#D7D2C3',
    liveUrl: 'https://short-ifyy.netlify.app/',
    githubUrl: 'https://github.com/benpointdex/Url-Shortener',
    screenshots: [
      '/shortner/hero.bmp',
      '/shortner/login.bmp',
      '/shortner/dashboard.bmp'
    ]
  }
];


const ProjectCard = ({ project, isLast }) => {
  const [isHovered, setIsHovered] = React.useState(false);

  return (
    <Link 
      to={`/project/${project.id}`} 
      style={{ textDecoration: 'none', color: 'inherit' }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
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
          border: `0.8px solid ${isHovered ? 'rgba(82, 86, 63, 0.14)' : 'rgba(82, 86, 63, 0.12)'}`,
          position: 'relative',
          width: '100%',
          aspectRatio: '16 / 9',
          transition: 'border-color 0.8s ease',
        }}>
          <img
            src={project.image}
            alt={project.displayName}
            style={{
              width: '100%',
              height: '100%',
              objectFit: 'cover',
              display: 'block',
              transform: isHovered ? 'scale(1.008)' : 'scale(1)',
              transition: 'transform 1s cubic-bezier(0.16, 1, 0.3, 1)',
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

      {/* Footer Status Indicators */}
      <div style={{
        position: 'absolute',
        bottom: '12px',
        left: '8px',
        right: '8px',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        pointerEvents: 'none',
        zIndex: 100,
      }}>
        {/* Scroll Indicator */}
        <div style={{
          display: 'flex',
          alignItems: 'center',
          gap: '8px',
          fontFamily: 'Inter, sans-serif',
          fontSize: '10.4px',
          fontWeight: '500',
          letterSpacing: '0.15em',
          color: '#9CA3AF',
          textTransform: 'uppercase',
          opacity: currentIndex < projects.length - 1 ? 1 : 0,
          transition: 'opacity 0.3s ease',
        }}>
          
          <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" style={{ transform: 'translateY(1px)' }}>
            <line x1="12" y1="5" x2="12" y2="19"></line>
            <polyline points="19 12 12 19 5 12"></polyline>
          </svg>
        </div>

        {/* Project Counter */}
        <div style={{
          fontFamily: 'Inter, sans-serif',
          fontSize: '10.4px',
          fontWeight: '500',
          letterSpacing: '0.15em',
          color: '#9CA3AF',
        }}>
          {String(currentIndex + 1).padStart(2, '0')} / {String(projects.length).padStart(2, '0')}
        </div>
      </div>
    </div>
  );
};

export default Projects;
