import React, { Suspense, lazy } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import { Toaster } from "@/components/ui/toaster";
import { ThemeProvider } from "@/components/theme-provider";
import { ErrorBoundary } from "react-error-boundary";

// Lazy load components for better performance
const Home = lazy(() => import("@/components/home"));
const Dashboard = lazy(() => import("@/pages/Dashboard"));

// Error boundary fallback component
const ErrorFallback = ({ error, resetErrorBoundary }: { error: Error; resetErrorBoundary: () => void }) => (
  <div className="flex h-screen flex-col items-center justify-center p-4 text-center">
    <h2 className="mb-4 text-2xl font-bold text-destructive">Something went wrong</h2>
    <pre className="mb-4 max-w-full overflow-auto rounded-md bg-muted p-4 text-left">
      {error.message}
    </pre>
    <button
      onClick={resetErrorBoundary}
      className="rounded-md bg-primary px-4 py-2 text-primary-foreground hover:bg-primary/90"
    >
      Try again
    </button>
  </div>
);

// Loading component
const LoadingFallback = () => (
  <div className="flex h-screen items-center justify-center">
    <div className="h-12 w-12 animate-spin rounded-full border-b-2 border-primary"></div>
  </div>
);

function App() {
  return (
    <ThemeProvider defaultTheme="system" storageKey="vite-ui-theme">
      <ErrorBoundary FallbackComponent={ErrorFallback}>
        <Suspense fallback={<LoadingFallback />}>
          <div className="min-h-screen bg-background text-foreground">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/dashboard" element={<Dashboard />} />
              <Route path="*" element={<Navigate to="/" replace />} />
            </Routes>
            <Toaster />
          </div>
        </Suspense>
      </ErrorBoundary>
    </ThemeProvider>
  );
}

export default App;
