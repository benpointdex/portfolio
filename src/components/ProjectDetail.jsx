import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { projects } from './Projects';

const ProjectDetail = () => {
  const { id } = useParams();
  const project = projects.find(p => p.id === id) || projects[0];

  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  // Clean the screenshots list to ensure no empty or broken boxes
  const validScreenshots = (project.screenshots || []).filter(s =>
    s && typeof s === 'string' && s.trim().length > 10 && s.startsWith('http')
  );

  return (
    <div style={{
      minHeight: '100vh',
      backgroundColor: '#F4F2EB',
      padding: '80px 180px',
      fontFamily: 'Inter, sans-serif'
    }}>
      {/* Navigation */}
      <div style={{ marginBottom: '48px' }}>
        <Link
          to="/"
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            color: '#111827',
            textDecoration: 'none',
          }}
        >
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <path d="m12 19l-7-7l7-7m7 7H5" />
          </svg>
        </Link>
      </div>

      {/* Header */}
      <div style={{
        maxWidth: '800px',
        marginBottom: '48px',
      }}>
        <h1 style={{
          fontFamily: 'Playfair Display, serif',
          fontSize: '48px',
          fontWeight: '500',
          color: '#111827',
          lineHeight: '1.1',
          letterSpacing: '-0.02em',
          marginBottom: '24px'
        }}>
          {project.name}
        </h1>

        <p style={{
          fontFamily: 'Inter, sans-serif',
          fontSize: '16px',
          color: '#6B7280',
          lineHeight: '1.6',
          marginBottom: '32px'
        }}>
          {project.description}
        </p>

        <div style={{ display: 'flex', alignItems: 'center', gap: '20px' }}>
          <a
            href="#"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '8px',
              padding: '14px 28px',
              backgroundColor: '#52563F',
              color: '#F4F2EB',
              fontSize: '15px',
              fontWeight: '500',
              borderRadius: '9999px',
              textDecoration: 'none',
            }}
          >
            {project.displayName}
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
              <polyline points="15 3 21 3 21 9" />
              <line x1="10" y1="14" x2="21" y2="3" />
            </svg>
          </a>
          <div style={{ display: 'flex', gap: '16px', alignItems: 'center' }}>
            <a href="#" style={{ color: '#111827' }}>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.43.372.823 1.102.823 2.222 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" /></svg>
            </a>
            <a href="#" style={{ color: '#111827' }}>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
                <polyline points="15 3 21 3 21 9" />
                <line x1="10" y1="14" x2="21" y2="3" />
              </svg>
            </a>
            <a href="#" style={{ color: '#111827' }}>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" /></svg>
            </a>
          </div>
        </div>
      </div>

      {/* Gallery */}
      <div style={{
        display: 'flex',
        flexDirection: 'column',
        gap: '48px',
        maxWidth: '1200px'
      }}>
        {validScreenshots.map((img, idx) => (
          <div
            key={img + idx}
            id={`screenshot-box-${idx}`}
            style={{
              width: '100%',
              borderRadius: '24px',
              backgroundColor: '#E7E3D5',
              border: '1px solid rgba(82, 86, 63, 0.1)',
              padding: '80px',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
            }}
          >
            <img
              src={img}
              alt=""
              onError={e => {
                // Hide the entire parent box when image fails to load
                const box = document.getElementById(`screenshot-box-${idx}`);
                if (box) box.style.display = 'none';
              }}
              style={{
                width: '100%',
                maxWidth: '1000px',
                display: 'block',
                borderRadius: '12px',
                boxShadow: '0 20px 40px rgba(0,0,0,0.1)'
              }}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProjectDetail;
