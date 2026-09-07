import React from 'react';
import { Link } from 'react-router-dom';

// Project data with expanded info for the new detail view
export const projects = [
  {
    id: 'cinnamon',
    name: 'Stop rewriting code with AI-native semantic duplicate detection',
    displayName: 'Cinnamon',
    description: 'Cinnamon is an AI-native code quality engine and MCP server that catches when coding agents duplicate logic already existing in the codebase. Powered by Tree-sitter AST parsing, 384-dimensional ONNX vector embeddings, and PostgreSQL pgvector, it surfaces exact, renamed, and deep semantic clones in real-time directly inside Cursor and Claude.',
    shortDescription: 'Real-time AI code duplication detection MCP server. Catches exact, renamed, and semantic duplicates using Tree-sitter AST parsing and pgvector embeddings.',
    techStack: ['Model Context Protocol', 'Java 21', 'Spring Boot', 'Tree-sitter', 'pgvector', 'PostgreSQL', 'Next.js', 'TypeScript', 'Docker'],
    video: '/cinnamon/hero.mp4',
    videoWebm: '/cinnamon/hero.webm',
    image: '/cinnamon/hero.webp',
    color: '#E0447D',
    liveUrl: 'https://cinnamon-mcp.vercel.app/',
    githubUrl: 'https://github.com/benpointdex/cinnamon',
    screenshots: [
      '/cinnamon/hero.webp',
      '/cinnamon/screen1.webp',
      '/cinnamon/screen2.webp',
      '/cinnamon/screen3.webp'
    ]
  },
  {
    id: 'patienta',
    name: 'High-performance distributed healthcare ERP & clinical microservices',
    displayName: 'Patienta',
    description: 'Patienta (Precision Portal) is a high-performance, event-driven distributed healthcare management ecosystem built on modern microservices. It streamlines clinical intake, appointment lifecycle scheduling with Apache Kafka event streaming, synchronous gRPC billing transactions, and role-based clinician portals with real-time responsive dashboards.',
    shortDescription: 'Enterprise healthcare management ecosystem built with Java 21, Spring Boot, gRPC, and Kafka. Features real-time appointment streaming, automated billing, and interactive clinician portals.',
    techStack: ['Java 21', 'Spring Boot', 'gRPC', 'Apache Kafka', 'PostgreSQL', 'React 19', 'TypeScript', 'Docker'],
    video: '/patienta/hero.mp4',
    videoWebm: '/patienta/hero.webm',
    image: '/patienta/hero.webp',
    color: '#0D8D9C',
    liveUrl: 'https://patienta.vercel.app/',
    githubUrl: 'https://github.com/benpointdex/patient-management',
    screenshots: [
      '/patienta/hero.webp',
      '/patienta/screen1.webp',
      '/patienta/screen2.webp'
    ]
  },
  {
    id: 'auth-pulse',
    name: 'Secure, scalable access from backend to browser',
    displayName: 'AuthPulse',
    description: 'AuthPulse is a complete identity and access management solution built for modern web applications. Featuring stateless JWT security, automatic token refreshing, and seamless Google OAuth2 integration, it provides a secure bridge between a robust Java backend and a responsive React dashboard.',
    shortDescription: 'Bulletproof your web applications with this complete identity management stack. Features stateless token security and OAuth2 built seamlessly across Java and React.',
    techStack: ['React', 'Spring Boot', 'PostgreSQL', 'Spring Security', 'Tailwind', 'Docker', 'OAuth2', 'JWT'],
    image: '/auth-pulse/hero.webp',
    color: '#52563F',
    liveUrl: 'https://auth-back-latest.onrender.com/',
    githubUrl: 'https://github.com/benpointdex/auth-system',
    screenshots: [
      '/auth-pulse/hero.webp',
      '/auth-pulse/login.webp',
      '/auth-pulse/dashboard.webp'
    ]
  },
  {
    id: 'shortify',
    name: 'Making every click count with intelligent tracking',
    displayName: 'Shortify',
    description: 'Find the product design for Shortify, a secure URL management tool designed to convert complex links into manageable assets. Featuring a responsive interface and reliable backend architecture, the platform provides real-time click analytics and instant redirection for a frictionless user experience.',
    shortDescription: 'Make every click count with this high-performance URL shortener. Offers instant redirection and intelligent analytics powered by a scalable Spring Boot architecture.',
    techStack: ['React', 'TypeScript', 'Spring Boot', 'PostgreSQL', 'Spring Security', 'JWT'],
    image: '/shortner/hero.webp',
    color: '#D7D2C3',
    liveUrl: 'https://short-ifyy.netlify.app/',
    githubUrl: 'https://github.com/benpointdex/Url-Shortener',
    screenshots: [
      '/shortner/hero.webp',
      '/shortner/login.webp',
      '/shortner/dashboard.webp'
    ]
  }
];


const ProjectCard = ({ project, isMobile }) => {
  return (
    <Link 
      to={`/project/${project.id}`} 
      style={{ textDecoration: 'none', color: 'inherit' }}
    >
      <div
        style={{
          height: isMobile ? 'auto' : '100%',
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
          marginBottom: isMobile ? '20px' : '0',
        }}>
          {project.video ? (
            <video
              autoPlay
              loop
              muted
              playsInline
              preload="metadata"
              poster={project.image}
              style={{
                width: '100%',
                height: 'auto',
                display: 'block',
                objectFit: 'cover',
              }}
            >
              {project.videoWebm && <source src={project.videoWebm} type="video/webm" />}
              <source src={project.video} type="video/mp4" />
            </video>
          ) : (
            <img
              src={project.image}
              alt={project.displayName}
              loading="lazy"
              style={{
                width: '100%',
                height: 'auto',
                display: 'block',
              }}
            />
          )}
        </div>

        {/* Pushed towards the bottom with refined breathing room */}
        <div style={{ 
          marginTop: isMobile ? '0' : 'auto', 
          paddingBottom: isMobile ? '24px' : '40px', // Reduced breathing room on mobile
          paddingLeft: '8px', 
          paddingRight: '8px' 
        }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '16px' }}>
            <div style={{
              width: '12px',
              height: '12px',
              borderRadius: '50%',
              backgroundColor: project.color,
              flexShrink: 0,
            }} />
            <span style={{
              fontFamily: 'Playfair Display, serif',
              fontSize: isMobile ? '22px' : '24px',
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
            marginBottom: '20px' 
          }} />

          <div style={{ 
            display: 'flex',
            flexDirection: isMobile ? 'column' : 'row',
            gap: isMobile ? '24px' : '60px',
            alignItems: 'start' 
          }}>
            <p style={{
              fontFamily: 'Inter, sans-serif',
              fontSize: '13px', // Decreased font size for a more refined look
              lineHeight: '1.6',
              color: 'rgba(17, 24, 39, 0.7)', // Slightly softer color
              margin: 0,
              maxWidth: isMobile ? '100%' : '600px'
            }}>
              {project.shortDescription}
            </p>

            <div style={{
              display: isMobile ? 'flex' : 'grid',
              flexWrap: isMobile ? 'wrap' : 'none',
              gridTemplateColumns: isMobile ? 'none' : 'repeat(2, 1fr)',
              gap: isMobile ? '8px 16px' : '12px 32px',
              borderLeft: isMobile ? 'none' : '0.8px solid rgba(82, 86, 63, 0.12)',
              paddingLeft: isMobile ? '0' : '40px',
              width: isMobile ? '100%' : 'auto'
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
  const [isMobile, setIsMobile] = React.useState(false);

  React.useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 1024);
    };
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

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
    if (isMobile) return;
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
  }, [currentIndex, goTo, viewportH, isMobile]);

  // --- Touch ---
  React.useEffect(() => {
    if (isMobile) return;
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
  }, [currentIndex, dragOffset, goTo, viewportH, isMobile]);

  if (isMobile) {
    return (
      <div style={{ 
        display: 'flex', 
        flexDirection: 'column', 
        gap: '48px', 
        width: '100%', 
        paddingBottom: '48px' 
      }}>
        {projects.map((project) => (
          <div key={project.id} style={{ width: '100%' }}>
            <ProjectCard project={project} isMobile={true} />
          </div>
        ))}
      </div>
    );
  }

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
            <ProjectCard project={project} isMobile={false} />
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
