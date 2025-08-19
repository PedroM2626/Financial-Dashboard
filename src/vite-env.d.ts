/// <reference types="vite/client" />

interface ImportMetaEnv {
  // Vite built-in env vars
  readonly BASE_URL: string;
  readonly MODE: 'development' | 'production' | 'test';
  readonly DEV: boolean;
  readonly PROD: boolean;
  readonly SSR: boolean;

  // Application env vars
  readonly VITE_SUPABASE_URL: string;
  readonly VITE_SUPABASE_ANON_KEY: string;
  readonly VITE_APP_TITLE: string;
  readonly VITE_TEMPO: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}

// Add TypeScript support for JSX
namespace JSX {
  interface IntrinsicElements {
    [elemName: string]: any;
  }
}

// Add TypeScript support for process.env in Vite
interface ProcessEnv {
  NODE_ENV: 'development' | 'production' | 'test';
  [key: string]: string | undefined;
}

declare const process: {
  env: ProcessEnv;
};
