#!/usr/bin/env node

import { execSync } from 'child_process';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const certsDir = path.join(process.cwd(), 'certs');

// Create certs directory if it doesn't exist
if (!fs.existsSync(certsDir)) {
  fs.mkdirSync(certsDir, { recursive: true });
}

console.log('Generating SSL certificates for development...');

try {
  const keyPath = path.join(certsDir, 'server.key');
  const csrPath = path.join(certsDir, 'server.csr');
  const crtPath = path.join(certsDir, 'server.crt');
  
  // Generate private key
  execSync(`openssl genrsa -out "${keyPath}" 2048`, { stdio: 'inherit' });
  
  // Generate certificate signing request
  execSync(`openssl req -new -key "${keyPath}" -out "${csrPath}" -subj "/C=US/ST=State/L=City/O=Organization/CN=localhost"`, { stdio: 'inherit' });
  
  // Generate self-signed certificate
  execSync(`openssl x509 -req -days 365 -in "${csrPath}" -signkey "${keyPath}" -out "${crtPath}"`, { stdio: 'inherit' });
  
  // Clean up CSR file
  fs.unlinkSync(csrPath);
  
  console.log('✅ SSL certificates generated successfully!');
  console.log('📁 Certificates saved to:', certsDir);
  console.log('🔒 You can now run the server with HTTPS support');
  
} catch (error) {
  console.error('❌ Error generating SSL certificates:', error.message);
  console.log('💡 Make sure OpenSSL is installed on your system');
  console.log('   - macOS: brew install openssl');
  console.log('   - Ubuntu/Debian: sudo apt-get install openssl');
  console.log('   - Windows: Download from https://slproweb.com/products/Win32OpenSSL.html');
}
