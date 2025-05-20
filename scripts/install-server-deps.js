const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

// Read package.json
const packageJson = JSON.parse(fs.readFileSync(path.join(process.cwd(), 'package.json'), 'utf8'));

// Get server dependencies
const serverDeps = packageJson.serverDependencies || {};

// Install server dependencies
if (Object.keys(serverDeps).length > 0) {
  console.log('Installing server dependencies...');
  const deps = Object.entries(serverDeps)
    .map(([name, version]) => `${name}@${version}`)
    .join(' ');
  
  try {
    execSync(`pnpm add ${deps}`, { stdio: 'inherit' });
    console.log('Server dependencies installed successfully!');
  } catch (error) {
    console.error('Failed to install server dependencies:', error);
    process.exit(1);
  }
} else {
  console.log('No server dependencies to install.');
} 