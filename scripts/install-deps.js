const { execSync } = require('child_process');
const fs = require('fs');
const path = require('path');

console.log('🚀 Installing dependencies...');

// Main dependencies
const dependencies = [
  'react',
  'react-dom',
  'react-router-dom',
  '@tanstack/react-query',
  '@tanstack/react-query-devtools',
  'react-helmet-async',
  'react-error-boundary',
  'date-fns',
  'lucide-react',
  'recharts',
  '@radix-ui/react-dialog',
  'clsx',
  'tailwind-merge'
];

// Development dependencies
const devDependencies = [
  '@types/react',
  '@types/react-dom',
  '@types/react-router-dom',
  '@types/node',
  '@vitejs/plugin-react',
  'autoprefixer',
  'eslint',
  'eslint-plugin-react',
  'eslint-plugin-react-hooks',
  'eslint-plugin-react-refresh',
  'postcss',
  'tailwindcss',
  'typescript',
  'vite'
];

// Install main dependencies
console.log('📦 Installing main dependencies...');
try {
  execSync(`npm install --save ${dependencies.join(' ')}`, { stdio: 'inherit' });
  console.log('✅ Main dependencies installed successfully!');
} catch (error) {
  console.error('❌ Failed to install main dependencies:', error.message);
  process.exit(1);
}

// Install dev dependencies
console.log('🔧 Installing development dependencies...');
try {
  execSync(`npm install --save-dev ${devDependencies.join(' ')}`, { stdio: 'inherit' });
  console.log('✅ Development dependencies installed successfully!');
} catch (error) {
  console.error('❌ Failed to install development dependencies:', error.message);
  process.exit(1);
}

// Update package.json with scripts if they don't exist
const packageJsonPath = path.join(process.cwd(), 'package.json');
const packageJson = JSON.parse(fs.readFileSync(packageJsonPath, 'utf8'));

// Add scripts if they don't exist
if (!packageJson.scripts) {
  packageJson.scripts = {};
}

const requiredScripts = {
  "dev": "vite",
  "build": "tsc && vite build",
  "preview": "vite preview",
  "lint": "eslint . --ext ts,tsx --report-unused-disable-directives --max-warnings 0",
  "type-check": "tsc --noEmit",
  "check-deps": "node scripts/check-deps.js",
  "prepare": "npm run check-deps"
};

let scriptsUpdated = false;
Object.entries(requiredScripts).forEach(([key, value]) => {
  if (!packageJson.scripts[key]) {
    packageJson.scripts[key] = value;
    scriptsUpdated = true;
  }
});

if (scriptsUpdated) {
  fs.writeFileSync(packageJsonPath, JSON.stringify(packageJson, null, 2));
  console.log('📝 Updated package.json with required scripts');
}

console.log('\n✨ All dependencies have been installed successfully!');
console.log('\nNext steps:');
console.log('1. Run `npm run dev` to start the development server');
console.log('2. Open http://localhost:5173 in your browser');
console.log('3. Happy coding! 🚀');
