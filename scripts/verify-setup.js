const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

console.log('🔍 Verifying project setup...');

// Check for required files
const requiredFiles = [
  'package.json',
  'tsconfig.json',
  'vite.config.ts',
  'tailwind.config.js',
  'postcss.config.js',
  '.env.example',
  'src/main.tsx',
  'src/App.tsx',
  'src/index.css',
  'src/components/theme-provider.tsx',
  'src/vite-env.d.ts'
];

let allFilesExist = true;
requiredFiles.forEach(file => {
  const filePath = path.join(process.cwd(), file);
  if (!fs.existsSync(filePath)) {
    console.error(`❌ Missing required file: ${file}`);
    allFilesExist = false;
  } else {
    console.log(`✅ Found: ${file}`);
  }
});

if (!allFilesExist) {
  console.error('\n❌ Some required files are missing. Please check the list above.');
  process.exit(1);
}

// Check Node.js version
const nodeVersion = process.versions.node;
const [major] = nodeVersion.split('.').map(Number);
if (major < 18) {
  console.warn(`⚠️  You're using Node.js ${nodeVersion}. This project requires Node.js 18 or later.`);
} else {
  console.log(`✅ Node.js version: ${nodeVersion}`);
}

// Check npm version
try {
  const npmVersion = execSync('npm --version', { encoding: 'utf8' }).trim();
  console.log(`✅ npm version: ${npmVersion}`);
} catch (error) {
  console.error('❌ Could not determine npm version');
}

// Check TypeScript configuration
const tsConfig = require(path.join(process.cwd(), 'tsconfig.json'));
if (!tsConfig.compilerOptions?.paths?.['@/*']) {
  console.warn('⚠️  Path alias @/* is not configured in tsconfig.json');
} else {
  console.log('✅ TypeScript path aliases are configured');
}

// Check environment variables
const envExamplePath = path.join(process.cwd(), '.env.example');
const envPath = path.join(process.cwd(), '.env');

if (!fs.existsSync(envPath)) {
  console.warn('⚠️  .env file not found. Copying from .env.example...');
  try {
    fs.copyFileSync(envExamplePath, envPath);
    console.log('✅ Created .env file from .env.example');
  } catch (error) {
    console.error('❌ Failed to create .env file:', error.message);
  }
}

console.log('\n🎉 Project setup verification complete!');
console.log('\nNext steps:');
console.log('1. Review the .env file and update with your configuration');
console.log('2. Run `npm install` to install dependencies');
console.log('3. Run `npm run dev` to start the development server');
console.log('4. Open http://localhost:5173 in your browser');
