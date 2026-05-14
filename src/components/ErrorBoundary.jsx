import React from 'react';

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    console.error("Uncaught error:", error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div style={{ padding: '40px', textAlign: 'center', color: 'white', background: '#131410', minHeight: '100vh' }}>
          <h1 style={{ fontFamily: 'Playfair Display, serif', fontSize: '32px', marginBottom: '20px' }}>Something went wrong.</h1>
          <p style={{ color: '#999', marginBottom: '30px' }}>The application encountered an unexpected error. This might be due to a browser compatibility issue.</p>
          <button 
            onClick={() => window.location.reload()}
            style={{ padding: '12px 24px', background: '#52563F', color: 'white', border: 'none', borderRadius: '9999px', cursor: 'pointer' }}
          >
            Reload Page
          </button>
        </div>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
