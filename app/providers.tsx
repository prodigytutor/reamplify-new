"use client"
import { ClerkProvider, useAuth } from '@clerk/nextjs'
import { ErrorBoundary } from "react-error-boundary";
import { ErrorInfo } from 'react';

const AppProviders: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  function fallbackRender({ error, resetErrorBoundary }: { error: Error, resetErrorBoundary: (...args: any[]) => void }) {
    // Call resetErrorBoundary() to reset the error boundary and retry the render.
  
    return (
      <div role="alert">
        <p>Something went wrong:</p>
        <pre style={{ color: "red" }}>{error.message}</pre>
      </div>
    );
  }
  const logError = (error: Error, info: ErrorInfo) => {
    // Do something with the error, e.g. log to an external API
  };

    return (
        <ClerkProvider>
            <ErrorBoundary fallbackRender={fallbackRender} onError={logError} onReset={(details) => {
            //reset the state of your app so the error doesn't happen again
          }}>
                {children}
                </ErrorBoundary>
        </ClerkProvider>
    );
};

export default AppProviders;