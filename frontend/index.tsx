
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

type RootErrorBoundaryState = {
  hasError: boolean;
  errorMessage: string;
};

class RootErrorBoundary extends React.Component<React.PropsWithChildren, RootErrorBoundaryState> {
  constructor(props: React.PropsWithChildren) {
    super(props);
    this.state = { hasError: false, errorMessage: '' };
  }

  static getDerivedStateFromError(error: Error): RootErrorBoundaryState {
    return { hasError: true, errorMessage: error?.message || 'Unknown runtime error' };
  }

  componentDidCatch(error: Error, errorInfo: React.ErrorInfo) {
    console.error('Root render crash:', error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div style={{ minHeight: '100vh', background: '#f8fafc', color: '#0f172a', padding: '2rem', fontFamily: 'Inter, sans-serif' }}>
          <h1 style={{ fontSize: '1.5rem', fontWeight: 700, marginBottom: '0.75rem' }}>Application failed to render</h1>
          <p style={{ marginBottom: '0.5rem' }}>A runtime error is preventing the UI from loading.</p>
          <p style={{ fontFamily: 'monospace', fontSize: '0.9rem', background: '#e2e8f0', padding: '0.75rem', borderRadius: '0.5rem' }}>
            {this.state.errorMessage}
          </p>
        </div>
      );
    }

    return this.props.children;
  }
}

const rootElement = document.getElementById('root');
if (!rootElement) {
  throw new Error("Could not find root element to mount to");
}

const root = ReactDOM.createRoot(rootElement);
root.render(
  <React.StrictMode>
    <RootErrorBoundary>
      <App />
    </RootErrorBoundary>
  </React.StrictMode>
);
