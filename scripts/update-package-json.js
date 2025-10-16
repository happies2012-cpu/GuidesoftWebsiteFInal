const fs = require('fs');
const path = require('path');

// Read package.json
const packagePath = path.join(__dirname, '..', 'package.json');
const packageJson = JSON.parse(fs.readFileSync(packagePath, 'utf8'));

// Add Electron-related scripts
packageJson.scripts = {
  ...packageJson.scripts,
  "electron:dev": "concurrently \"npm run dev\" \"wait-on http://localhost:8080 && electron .\"",
  "electron:build": "vite build && electron-builder",
  "electron:preview": "vite build && concurrently \"vite preview\" \"wait-on http://localhost:4173 && electron .\""
};

// Add Electron dependencies to devDependencies if not already present
const electronDeps = {
  "electron": "^31.0.0",
  "electron-builder": "^24.0.0",
  "wait-on": "^7.0.0",
  "electron-squirrel-startup": "^1.0.0"
};

packageJson.devDependencies = {
  ...packageJson.devDependencies,
  ...electronDeps
};

// Write updated package.json
fs.writeFileSync(packagePath, JSON.stringify(packageJson, null, 2) + '\n');

console.log('✅ Updated package.json with Electron scripts and dependencies');