const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');
const readline = require('readline');
const chalk = require('chalk');

// Required dependencies
const requiredDeps = {
  // Core
  'react': '^18.2.0',
  'react-dom': '^18.2.0',
  'react-router-dom': '^6.15.0',
  
  // UI Components
  '@radix-ui/react-dialog': '^1.0.5',
  'lucide-react': '^0.294.0',
  'recharts': '^2.8.0',
  'date-fns': '^2.30.0',
  'tailwindcss-animate': '^1.0.7',
  'class-variance-authority': '^0.7.0',
  'clsx': '^2.0.0',
  'tailwind-merge': '^2.1.0',
  'next-themes': '^0.2.1',
  'react-error-boundary': '^4.0.11',
  'react-helmet-async': '^2.0.4',
  '@tanstack/react-query': '^5.0.0',
  '@tanstack/react-query-devtools': '^5.0.0',
  'zod': '^3.22.4',
  'react-hook-form': '^7.47.0',
  '@hookform/resolvers': '^3.3.4',
  'sonner': '^1.4.0',
  
  // Build tools
  'vite': '^5.0.0',
  'autoprefixer': '^10.4.16',
  'postcss': '^8.4.32',
  'tailwindcss': '^3.3.6',
};

// Required dev dependencies
const requiredDevDeps = {
  // TypeScript
  'typescript': '^5.2.2',
  '@types/react': '^18.2.0',
  '@types/react-dom': '^18.2.0',
  '@types/node': '^20.8.0',
  
  // Vite
  '@vitejs/plugin-react': '^4.2.1',
  'vite-tsconfig-paths': '^4.2.0',
  
  // Linting & Formatting
  'eslint': '^8.52.0',
  'eslint-plugin-react': '^7.33.2',
  'eslint-plugin-react-hooks': '^4.6.0',
  'eslint-plugin-react-refresh': '^0.4.4',
  '@typescript-eslint/eslint-plugin': '^6.11.0',
  '@typescript-eslint/parser': '^6.11.0',
  'prettier': '^3.1.0',
  'prettier-plugin-tailwindcss': '^0.5.7',
  
  // Testing
  '@testing-library/react': '^14.1.2',
  '@testing-library/jest-dom': '^6.1.5',
  '@testing-library/user-event': '^14.5.1',
  '@testing-library/dom': '^9.3.1',
  'jest': '^29.7.0',
  'jest-environment-jsdom': '^29.7.0',
  'ts-jest': '^29.1.1',
  '@types/jest': '^29.5.5',
  'jest-environment-jsdom': '^29.7.0',
  
  // Development
  'npm-run-all': '^4.1.5',
  'concurrently': '^8.2.1',
  'cross-env': '^7.0.3',
  'chalk': '^5.3.0',
};

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function prompt(question) {
  return new Promise((resolve) => {
    rl.question(question, (answer) => {
      resolve(answer.toLowerCase() === 'y');
    });
  });
}

async function checkDependencies() {
  console.log(chalk.blue.bold('\n🔍 Checking project dependencies...\n'));
  
  try {
    // Read package.json
    const packageJsonPath = path.join(__dirname, '..', 'package.json');
    const packageJson = JSON.parse(fs.readFileSync(packageJsonPath, 'utf8'));
    
    const missingDeps = [];
    const missingDevDeps = [];
    const outdatedDeps = [];
    const outdatedDevDeps = [];
    
    // Check main dependencies
    Object.entries(requiredDeps).forEach(([dep, version]) => {
      const currentVersion = packageJson.dependencies?.[dep] || packageJson.devDependencies?.[dep];
      if (!currentVersion) {
        missingDeps.push({ name: dep, version });
      } else if (currentVersion !== version) {
        outdatedDeps.push({ name: dep, current: currentVersion, wanted: version });
      }
    });
    
    // Check dev dependencies
    Object.entries(requiredDevDeps).forEach(([dep, version]) => {
      const currentVersion = packageJson.devDependencies?.[dep];
      if (!currentVersion) {
        missingDevDeps.push({ name: dep, version });
      } else if (currentVersion !== version) {
        outdatedDevDeps.push({ name: dep, current: currentVersion, wanted: version });
      }
    });
    
    // Display results
    let needsFix = false;
    
    if (missingDeps.length > 0) {
      console.log(chalk.yellow.bold('\n⚠️  Missing Dependencies:'));
      missingDeps.forEach(dep => {
        console.log(`  - ${chalk.yellow(dep.name)}@${chalk.cyan(dep.version)}`);
      });
      needsFix = true;
    }
    
    if (missingDevDeps.length > 0) {
      console.log(chalk.yellow.bold('\n⚠️  Missing Dev Dependencies:'));
      missingDevDeps.forEach(dep => {
        console.log(`  - ${chalk.yellow(dep.name)}@${chalk.cyan(dep.version)} (dev)`);
      });
      needsFix = true;
    }
    
    if (outdatedDeps.length > 0) {
      console.log(chalk.yellow.bold('\n⚠️  Outdated Dependencies:'));
      outdatedDeps.forEach(dep => {
        console.log(`  - ${chalk.yellow(dep.name)}: ${chalk.red(dep.current)} → ${chalk.green(dep.wanted)}`);
      });
      needsFix = true;
    }
    
    if (outdatedDevDeps.length > 0) {
      console.log(chalk.yellow.bold('\n⚠️  Outdated Dev Dependencies:'));
      outdatedDevDeps.forEach(dep => {
        console.log(`  - ${chalk.yellow(dep.name)}: ${chalk.red(dep.current)} → ${chalk.green(dep.wanted)} (dev)`);
      });
      needsFix = true;
    }
    
    if (!needsFix) {
      console.log(chalk.green.bold('\n✅ All dependencies are up to date!'));
      return;
    }
    
    // Offer to fix
    console.log('\n');
    const shouldFix = await prompt(chalk.blue('Would you like to install missing/update outdated dependencies? (y/N) '));
    
    if (shouldFix) {
      console.log('\nInstalling/updating dependencies...');
      
      // Install missing deps
      if (missingDeps.length > 0) {
        const depsToInstall = missingDeps.map(dep => `${dep.name}@${dep.version}`).join(' ');
        console.log(chalk.blue(`\nInstalling missing dependencies: ${depsToInstall}`));
        execSync(`npm install --save ${depsToInstall}`, { stdio: 'inherit' });
      }
      
      // Install missing dev deps
      if (missingDevDeps.length > 0) {
        const devDepsToInstall = missingDevDeps.map(dep => `${dep.name}@${dep.version}`).join(' ');
        console.log(chalk.blue(`\nInstalling missing dev dependencies: ${devDepsToInstall}`));
        execSync(`npm install --save-dev ${devDepsToInstall}`, { stdio: 'inherit' });
      }
      
      // Update outdated deps
      if (outdatedDeps.length > 0) {
        const depsToUpdate = outdatedDeps.map(dep => `${dep.name}@${dep.wanted}`).join(' ');
        console.log(chalk.blue(`\nUpdating outdated dependencies: ${depsToUpdate}`));
        execSync(`npm install --save ${depsToUpdate}`, { stdio: 'inherit' });
      }
      
      // Update outdated dev deps
      if (outdatedDevDeps.length > 0) {
        const devDepsToUpdate = outdatedDevDeps.map(dep => `${dep.name}@${dep.wanted}`).join(' ');
        console.log(chalk.blue(`\nUpdating outdated dev dependencies: ${devDepsToUpdate}`));
        execSync(`npm install --save-dev ${devDepsToUpdate}`, { stdio: 'inherit' });
      }
      
      console.log(chalk.green.bold('\n✅ Dependencies have been updated successfully!'));
    } else {
      console.log(chalk.yellow('\n⚠️  Skipping dependency updates. Some features may not work correctly.'));
    }
  } catch (error) {
    console.error(chalk.red('\n❌ Error checking dependencies:'));
    console.error(chalk.red(error.message));
    process.exit(1);
  } finally {
    rl.close();
  }
}

// Run the check
if (require.main === module) {
  checkDependencies().catch(error => {
    console.error('An error occurred:', error);
    process.exit(1);
  });
}
    console.log(missingDeps.map(dep => `- ${dep}`).join('\n'));
  }
  
  if (missingDevDeps.length > 0) {
    console.log('\n❌ Missing dev dependencies:');
    console.log(missingDevDeps.map(dep => `- ${dep}`).join('\n'));
  }
  
  // Offer to install missing dependencies
  if (missingDeps.length > 0 || missingDevDeps.length > 0) {
    const readline = require('readline').createInterface({
      input: process.stdin,
      output: process.stdout
    });
    
    readline.question('\nWould you like to install the missing dependencies? (y/n) ', async answer => {
      if (answer.toLowerCase() === 'y') {
        console.log('\nInstalling missing dependencies...');
        try {
          if (missingDeps.length > 0) {
            console.log(`\nInstalling: ${missingDeps.join(' ')}`);
            execSync(`npm install ${missingDeps.join(' ')}`, { stdio: 'inherit' });
          }
          
          if (missingDevDeps.length > 0) {
            console.log(`\nInstalling dev dependencies: ${missingDevDeps.join(' ')}`);
            execSync(`npm install --save-dev ${missingDevDeps.join(' ')}`, { stdio: 'inherit' });
          }
          
          console.log('\n✅ Dependencies installed successfully!');
        } catch (error) {
          console.error('\n❌ Error installing dependencies:', error.message);
        }
      } else {
        console.log('\n⚠️  Missing dependencies not installed. Some features may not work correctly.');
      }
      readline.close();
    });
  }
  
  return false;
}

// Run the check
if (require.main === module) {
  checkDependencies();
}

module.exports = { checkDependencies };
