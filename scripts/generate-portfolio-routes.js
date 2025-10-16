#!/usr/bin/env node

/**
 * Script to add all portfolio routes to App.tsx
 * Generates lazy imports and route definitions
 */

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// All portfolio pages
const portfolioPages = [
  // Travel (8)
  { name: 'TravelBookingEngine', route: 'travel-booking-engine' },
  { name: 'HotelBookingEngine', route: 'hotel-booking-engine' },
  { name: 'CarRentalBooking', route: 'car-rental-booking' },
  { name: 'CruiseBookingEngine', route: 'cruise-booking-engine' },
  { name: 'BusReservationSystem', route: 'bus-reservation-system' },
  { name: 'ActivitiesBooking', route: 'activities-booking' },
  { name: 'VacationRentalManagement', route: 'vacation-rental-management' },
  { name: 'FlightBookingEngine', route: 'flight-booking-engine' },
  
  // Travel Portal (4)
  { name: 'B2BTravelPortal', route: 'b2b-travel-portal' },
  { name: 'B2CTravelPortal', route: 'b2c-travel-portal' },
  { name: 'CustomTravelPortal', route: 'custom-travel-portal' },
  { name: 'HotelExtranet', route: 'hotel-extranet' },
  
  // Travel API (4)
  { name: 'NDCAPIIntegration', route: 'ndc-api-integration' },
  { name: 'AmadeusAPIIntegration', route: 'amadeus-api-integration' },
  { name: 'SabreAPIIntegration', route: 'sabre-api-integration' },
  { name: 'GDSIntegration', route: 'gds-integration' },
  
  // Frontend (6)
  { name: 'ElectronJSDevelopers', route: 'electron-js-developers' },
  { name: 'ReactJSDevelopers', route: 'react-js-developers' },
  { name: 'NextJSDevelopers', route: 'next-js-developers' },
  { name: 'HTMLDevelopers', route: 'html-developers' },
  { name: 'AngularDevelopers', route: 'angular-developers' },
  { name: 'GatsbyJSDevelopers', route: 'gatsby-js-developers' },
  
  // Backend (7)
  { name: 'NodeJSDevelopers', route: 'node-js-developers' },
  { name: 'LaravelDevelopers', route: 'laravel-developers' },
  { name: 'PythonDevelopers', route: 'python-developers' },
  { name: 'NestJSDevelopers', route: 'nest-js-developers' },
  { name: 'ExpressJSDevelopers', route: 'express-js-developers' },
  { name: 'DotNetDevelopers', route: 'dot-net-developers' },
  { name: 'GolangDevelopers', route: 'golang-developers' },
  
  // Mobile (6)
  { name: 'AndroidAppDevelopers', route: 'android-app-developers' },
  { name: 'ReactNativeDevelopers', route: 'react-native-developers' },
  { name: 'FlutterDevelopers', route: 'flutter-developers' },
  { name: 'KotlinDevelopers', route: 'kotlin-developers' },
  { name: 'SwiftDevelopers', route: 'swift-developers' },
  { name: 'iOSDevelopers', route: 'ios-developers' },
  
  // On-Demand (4)
  { name: 'BookingAppSolutions', route: 'booking-app-solutions' },
  { name: 'ChatbotSolutions', route: 'chatbot-solutions' },
  { name: 'FoodDeliverySolutions', route: 'food-delivery-solutions' },
  { name: 'VideoStreamingSolutions', route: 'video-streaming-solutions' },
  
  // Emerging Tech (3)
  { name: 'ELearningSolutions', route: 'elearning-solutions' },
  { name: 'HRMSSolutions', route: 'hrms-solutions' },
  { name: 'ARAppDevelopment', route: 'ar-app-development' },
  
  // Trending (3)
  { name: 'DataEngineering', route: 'data-engineering-portfolio' },
  { name: 'DataAnalytics', route: 'data-analytics-portfolio' },
  { name: 'DataVisualization', route: 'data-visualization-portfolio' }
];

function generateLazyImports() {
  let imports = '// Lazy load portfolio pages\n';
  portfolioPages.forEach(page => {
    imports += `const ${page.name}Portfolio = lazy(() => import("./pages/portfolio/${page.name}"));\n`;
  });
  return imports;
}

function generateRoutes() {
  let routes = '              {/* Portfolio Routes */}\n';
  portfolioPages.forEach(page => {
    routes += `              <Route path="/portfolio/${page.route}" element={<${page.name}Portfolio />} />\n`;
  });
  return routes;
}

function main() {
  console.log('🔧 Generating portfolio route configuration...\n');
  
  const lazyImports = generateLazyImports();
  const routes = generateRoutes();
  
  console.log('📋 Lazy Imports:\n');
  console.log(lazyImports);
  console.log('\n📋 Routes:\n');
  console.log(routes);
  
  // Save to files for manual addition
  const outputDir = path.join(__dirname, '..', 'temp');
  if (!fs.existsSync(outputDir)) {
    fs.mkdirSync(outputDir, { recursive: true });
  }
  
  fs.writeFileSync(path.join(outputDir, 'portfolio-imports.txt'), lazyImports);
  fs.writeFileSync(path.join(outputDir, 'portfolio-routes.txt'), routes);
  
  console.log('\n✅ Generated configuration saved to /temp/');
  console.log('   - portfolio-imports.txt (add to imports section)');
  console.log('   - portfolio-routes.txt (add to routes section)');
  console.log(`\n📊 Total: ${portfolioPages.length} portfolio routes generated`);
}

main();
