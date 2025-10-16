#!/usr/bin/env node

/**
 * Script to fix image paths across the application
 * Replaces /placeholder.svg with appropriate images from assets
 */

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Map of page files to their appropriate image keys
const pageImageMap = {
  // Services - App Development
  'android-app-development.tsx': 'android-app',
  'ios-app-development.tsx': 'ios-app',
  'flutter-app-development.tsx': 'flutter-app',
  'native-app-development.tsx': 'native-app',
  'progressive-web-apps.tsx': 'progressive-web-apps',
  'enterprise-app-development.tsx': 'enterprise-app',
  'ecommerce-app-development.tsx': 'ecommerce-app',
  'iot-app-development.tsx': 'iot-app',
  
  // Solutions
  'booking-app.tsx': 'booking-app',
  'chatbot-app.tsx': 'chatbot-app',
  'dating-app.tsx': 'dating-app',
  'education-app.tsx': 'education-app',
  'finance-app.tsx': 'finance-app',
  'fitness-app.tsx': 'fitness-app',
  'food-delivery-app.tsx': 'food-delivery-app',
  'gaming-app.tsx': 'gaming-app',
  'health-app.tsx': 'health-app',
  'music-app.tsx': 'music-app',
  'news-app.tsx': 'news-app',
  'productivity-app.tsx': 'productivity-app',
  'question-answer-app.tsx': 'question-answer-app',
  'real-estate-app.tsx': 'real-estate-app',
  'shopping-app.tsx': 'shopping-app',
  'social-media-app.tsx': 'social-media-app',
  'travel-app.tsx': 'travel-app',
  'video-streaming-app.tsx': 'video-streaming-app',
};

function fixImagesInFile(filePath, imageKey) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    let modified = false;

    // Check if file needs the import
    const needsImport = content.includes('src="/placeholder.svg"');
    
    if (needsImport) {
      // Add import at the top after other imports
      const importStatement = `import { getHeroImage } from "@/lib/image-utils";\n`;
      
      // Find the last import statement
      const importRegex = /import.*from.*;?\n/g;
      const imports = content.match(importRegex);
      
      if (imports && !content.includes('from "@/lib/image-utils"')) {
        const lastImport = imports[imports.length - 1];
        const lastImportIndex = content.lastIndexOf(lastImport);
        const insertPosition = lastImportIndex + lastImport.length;
        
        content = content.slice(0, insertPosition) + importStatement + content.slice(insertPosition);
        modified = true;
      }

      // Replace placeholder image with actual image
      content = content.replace(
        /src="\/placeholder\.svg"/g,
        `src={getHeroImage('${imageKey}')}`
      );
      
      modified = true;
    }

    if (modified) {
      fs.writeFileSync(filePath, content, 'utf8');
      console.log(`✅ Fixed: ${path.basename(filePath)}`);
      return true;
    }
    
    return false;
  } catch (error) {
    console.error(`❌ Error processing ${filePath}:`, error.message);
    return false;
  }
}

function main() {
  console.log('🔧 Starting image path fixes...\n');
  
  const srcDir = path.join(__dirname, '..', 'src');
  let totalFixed = 0;

  // Process services directory
  const servicesDir = path.join(srcDir, 'pages', 'services');
  if (fs.existsSync(servicesDir)) {
    console.log('📁 Processing services...');
    const files = fs.readdirSync(servicesDir);
    files.forEach(file => {
      if (pageImageMap[file]) {
        const filePath = path.join(servicesDir, file);
        if (fixImagesInFile(filePath, pageImageMap[file])) {
          totalFixed++;
        }
      }
    });
  }

  // Process solutions directory
  const solutionsDir = path.join(srcDir, 'pages', 'solutions');
  if (fs.existsSync(solutionsDir)) {
    console.log('\n📁 Processing solutions...');
    const files = fs.readdirSync(solutionsDir);
    files.forEach(file => {
      if (pageImageMap[file]) {
        const filePath = path.join(solutionsDir, file);
        if (fixImagesInFile(filePath, pageImageMap[file])) {
          totalFixed++;
        }
      }
    });
  }

  console.log(`\n✨ Complete! Fixed ${totalFixed} files.`);
}

main();
