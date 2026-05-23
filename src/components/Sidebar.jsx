import React from 'react';
import TechCarousel from './TechCarousel';

const Sidebar = () => {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', height: '100%' }}>
      {/* Header with Avatar and Social Icons Parallel */}
      <div style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginBottom: '20px'
      }}>
        {/* Avatar */}
        <div style={{
          width: '68px',
          height: '68px',
          borderRadius: '50%',
          overflow: 'hidden',
          backgroundColor: 'transparent',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          color: '#F4F2EB',
          fontWeight: '600',
          fontSize: '22px',
          fontFamily: 'Inter, sans-serif',
        }}>
          <img
            src="/profile/profile.jpeg"
            alt="Mohd Shakib"
            onError={(e) => {
              e.currentTarget.style.display = 'none';
              e.currentTarget.parentElement.style.backgroundColor = '#52563F';
              e.currentTarget.parentElement.innerText = 'S';
            }}
            style={{
              width: '100%',
              height: '100%',
              objectFit: 'cover',
              borderRadius: '50%',
            }}
          />
        </div>

        {/* Social Icons Parallel with Avatar */}
        <div style={{ display: 'flex', gap: '16px' }}>
          <a
            href="https://github.com/benpointdex"
            target="_blank"
            rel="noreferrer"
            title="GitHub"
            style={{ color: '#9CA3AF', transition: 'color 0.15s ease' }}
            onMouseEnter={e => e.currentTarget.style.color = '#111827'}
            onMouseLeave={e => e.currentTarget.style.color = '#9CA3AF'}
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.43.372.823 1.102.823 2.222 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
            </svg>
          </a>
          <a
            href="https://www.linkedin.com/in/mohd-shakib-4b3a03331/?utm_source=share_via&utm_content=profile&utm_medium=member_android"
            target="_blank"
            rel="noreferrer"
            title="LinkedIn"
            style={{ color: '#9CA3AF', transition: 'color 0.15s ease' }}
            onMouseEnter={e => e.currentTarget.style.color = '#111827'}
            onMouseLeave={e => e.currentTarget.style.color = '#9CA3AF'}
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
              <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
            </svg>
          </a>
          <a
            href="https://x.com/shakib_cs"
            target="_blank"
            rel="noreferrer"
            title="X (Twitter)"
            style={{ color: '#9CA3AF', transition: 'color 0.15s ease' }}
            onMouseEnter={e => e.currentTarget.style.color = '#111827'}
            onMouseLeave={e => e.currentTarget.style.color = '#9CA3AF'}
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
              <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.746l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
            </svg>
          </a>
        </div>
      </div>

      {/* Name */}
      <h1 style={{
        fontFamily: 'Playfair Display, serif',
        fontSize: '32px',
        fontWeight: '400', // Updated to design.md weight
        color: '#111827',
        lineHeight: '1.2',
        marginBottom: '16px',
        letterSpacing: '-0.025em', // Updated to design.md spacing
      }}>
        Mohd Shakib
      </h1>

      {/* Bio */}
      <p style={{
        fontFamily: 'Inter, sans-serif',
        fontSize: '16px', // label-md from design.md
        fontWeight: '400',
        color: '#6B7280',
        lineHeight: '24px', // label-md from design.md
        marginBottom: '28px',
      }}>
        Hey— I’m Shakib. I enjoy building products that feel simple to use and <span style={{ color: '#111827', fontWeight: '500' }}>thoughtful underneath</span>. Most of my work revolves around <span style={{ color: '#111827', fontWeight: '500' }}>scalable backend systems</span>, <span style={{ color: '#111827', fontWeight: '500' }}>modern web applications</span>, and turning ideas into experiences people can actually use.
      </p>

      {/* CTA Buttons */}
      <div style={{ display: 'flex', marginBottom: '40px' }}>
        <a
          href="https://www.linkedin.com/in/mohd-shakib-4b3a03331/"
          target="_blank"
          rel="noreferrer"
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '8px',
            padding: '9px 18px',
            backgroundColor: 'transparent',
            color: '#374151',
            fontSize: '13px',
            fontWeight: '500',
            fontFamily: 'Inter, sans-serif',
            borderRadius: '6px',
            border: '1px solid rgba(82,86,63,0.3)',
            cursor: 'pointer',
            textDecoration: 'none',
            transition: 'all 0.2s ease',
          }}
          onMouseEnter={e => {
            e.currentTarget.style.color = '#52563F';
            e.currentTarget.style.borderColor = '#52563F';
            e.currentTarget.querySelector('svg').style.transform = 'translateX(2px)';
          }}
          onMouseLeave={e => {
            e.currentTarget.style.color = '#374151';
            e.currentTarget.style.borderColor = 'rgba(82,86,63,0.3)';
            e.currentTarget.querySelector('svg').style.transform = 'translateX(0px)';
          }}
        >
          Let's Connect
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" style={{ transition: 'transform 0.5s cubic-bezier(0.16, 1, 0.3, 1)' }}>
            <line x1="5" y1="12" x2="19" y2="12"></line>
            <polyline points="12 5 19 12 12 19"></polyline>
          </svg>
        </a>
      </div>


      {/* Spacer */}
      <div style={{ flex: 1 }} />

      {/* Tech Stack Carousel at the very bottom */}
      <div style={{ marginBottom: '0', overflow: 'hidden' }}>
        <p style={{
          fontSize: '10.4px', // body-md from design.md
          fontWeight: '500',
          color: '#9CA3AF',
          letterSpacing: '0.15em', // body-md from design.md
          textTransform: 'uppercase',
          marginBottom: '16px',
          fontFamily: 'Inter, sans-serif',
        }}>
          Tech Stack
        </p>
        <TechCarousel isSidebar={true} />
      </div>
    </div>
  );
};

export default Sidebar;
