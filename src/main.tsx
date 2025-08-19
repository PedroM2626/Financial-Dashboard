import React from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import { ErrorBoundary } from "react-error-boundary";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { ThemeProvider } from "@/components/theme-provider";
import { Toaster } from "@/components/ui/toaster";
import App from "./App";
import "./index.css";

// Initialize query client
const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
      retry: 1,
      staleTime: 5 * 60 * 1000, // 5 minutes
    },
  },
});

// Error boundary fallback
const ErrorFallback = ({ error }: { error: Error }) => (
  <div className="flex h-screen flex-col items-center justify-center p-4 text-center">
    <h2 className="mb-4 text-2xl font-bold text-destructive">Application Error</h2>
    <pre className="mb-4 max-w-full overflow-auto rounded-md bg-muted p-4 text-left">
      {error.message}
    </pre>
    <button
      onClick={() => window.location.reload()}
      className="rounded-md bg-primary px-4 py-2 text-primary-foreground hover:bg-primary/90"
    >
      Reload Page
    </button>
  </div>
);

// Initialize Tempo DevTools if enabled
if (import.meta.env.VITE_TEMPO === "true") {
  import("tempo-devtools").then(({ TempoDevtools }) => {
    TempoDevtools.init();
  }).catch(console.error);
}

const basename = import.meta.env.BASE_URL || "/";
const rootElement = document.getElementById("root");

if (!rootElement) {
  throw new Error("Root element not found");
}

const root = createRoot(rootElement);

root.render(
  <React.StrictMode>
    <ErrorBoundary FallbackComponent={ErrorFallback}>
      <QueryClientProvider client={queryClient}>
        <HelmetProvider>
          <ThemeProvider defaultTheme="system" storageKey="vite-ui-theme">
            <BrowserRouter basename={basename}>
              <App />
              <Toaster />
            </BrowserRouter>
          </ThemeProvider>
        </HelmetProvider>
        {import.meta.env.DEV && (
          <ReactQueryDevtools initialIsOpen={false} position="bottom-right" />
        )}
      </QueryClientProvider>
    </ErrorBoundary>
  </React.StrictMode>,
);
