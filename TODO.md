# Task: Build Missing Pages and Ensure Submenu Visibility

## Current Work
- Updated navigation menu z-index and text colors for visibility.
- Removed AI Hotline phone numbers across files.
- Updated testimonials to be relevant to Guidesoft.
- Plan to create missing pages based on navigation-data.ts links.

## Key Technical Concepts
- React with TypeScript, Framer Motion for animations, Tailwind CSS for styling.
- shadcn/ui components for consistency.
- Dynamic routing assumed via existing setup (e.g., DynamicContentPage for non-existent routes).

## Relevant Files and Code
- src/lib/navigation-data.ts: Defines all nav items and sublinks.
- Existing pages like src/pages/services/web-development.tsx as template.
- No changes to core routing yet.

## Problem Solving
- Missing pages lead to 404 or dynamic fallbacks; creating them ensures proper content.
- Submenu visibility fixed with high z-index.

## Pending Tasks and Next Steps
1. [x] Create missing Services subpages under src/pages/services/:
   - [x] android-app-development.tsx
   - [x] ios-app-development.tsx
   - [x] iot-app-development.tsx
   - [x] native-app-development.tsx
   - [x] flutter-app-development.tsx
   - [x] progressive-web-apps.tsx
   - [x] enterprise-app-development.tsx
   - [x] ecommerce-app-development.tsx
   - [x] hire-electron-js-developers.tsx
   - [x] hire-reactjs-developers.tsx
   - [x] hire-nextjs-developers.tsx
   - [x] hire-html-developers.tsx
   - [x] hire-angular-developers.tsx
   - [x] hire-magento-developers.tsx
   - [x] hire-gatsbyjs-developers.tsx
   - [x] hire-extjs-developers.tsx
   (Use template: Hero with title, description about the service, features list, CTA button.)

2. [x] Create missing Solutions subpages under src/pages/solutions/:
   - [x] booking-app.tsx
   - [x] chatbot-app.tsx
   - [x] food-delivery-app.tsx
   - [x] video-streaming-app.tsx
   - [x] question-answer-app.tsx
   - [x] scheduling-app.tsx
   - [x] event-management-app.tsx
   - [x] flight-booking-app.tsx
   - [x] video-conferencing.tsx
   - [x] elearning-solution.tsx
   - [x] hrms-app-solution.tsx
   - [x] ble-app-solution.tsx
   - [x] survey-app-solution.tsx
   - [x] employee-management-app.tsx
   - [x] reverse-auction-app.tsx
   - [x] react-native-app-solution.tsx
   - [x] ar-app-development.tsx
   - [x] ecommerce-app-development.tsx (note: duplicate with services, merge if needed)
   - [x] data-engineering.tsx (duplicate, skip if exists)
   - [x] data-analytics.tsx
   - [x] data-visualization.tsx
   - [x] data-warehousing.tsx
   - [x] snowflake-solution.tsx
   - [x] devops-consulting.tsx
   - [x] it-consulting-services.tsx (duplicate, skip)
   - [x] it-support-services.tsx
   - [x] it-outsourcing-services.tsx
   - [x] offshore-development.tsx
   - [x] emerging-tech-solutions.tsx (overview)
   - [x] trending-technology.tsx (overview)

3. [x] Create missing Travel subpages under src/pages/travel/:
   - [x] travel-booking-engine.tsx
   - [x] hotel-booking-engine.tsx
   - [x] car-rental-booking-engine.tsx
   - [x] cruise-booking-engine.tsx
   - [x] bus-reservation-system.tsx
   - [x] activities-booking-solution.tsx
   - [x] vacation-rental-management-system.tsx
   - [x] flight-booking-engine.tsx
   - [x] b2b-travel-portal.tsx
   - [x] b2c-travel-portal.tsx
   - custom-travel-portal.tsx (duplicate, skip)
   - [x] hotel-extranet.tsx
   - [x] b2b-flight-booking-portal.tsx
   - [x] air-ticket-booking-portal.tsx
   - [x] ndc-api-integration.tsx
   - [x] amadeus-api-integration.tsx
   - [x] sabre-api-integration.tsx
   - [x] gds-integration.tsx
   - [x] expedia-api-integration.tsx
   - [x] payment-gateway-integration.tsx
   - [x] travel-customer-support-and-service.tsx
   - [x] flight-booking-api-integration.tsx
   - [x] custom-travel-development.tsx

4. [x] Create missing Hire Us subpages under src/pages/hire-us/:
   - [x] frontend.tsx
   - [x] hire-electron-js-developers.tsx
   - [x] hire-reactjs-developers.tsx
   - [x] hire-nextjs-developers.tsx
   - [x] hire-html-developers.tsx
   - [x] hire-angular-developers.tsx
   - [x] hire-magento-developers.tsx
   - [x] hire-gatsbyjs-developers.tsx
   - [x] hire-extjs-developers.tsx
   - [x] backend.tsx
   - [x] hire-nodejs-developers.tsx
   - hire-laravel-developers.tsx (duplicate, skip)
   - hire-python-developers.tsx (duplicate, skip)
   - [x] hire-nestjs-developers.tsx
   - [x] hire-expressjs-developers.tsx
   - [x] hire-net-developers.tsx
   - [x] hire-hapi-js-developers.tsx
   - [x] hire-fastify-developers.tsx
   - [x] hire-golang-developers.tsx
   - [x] mobile.tsx
   - [x] hire-android-app-developer.tsx
   - [x] hire-react-native-developers.tsx (duplicate, skip)
   - hire-flutter-developers.tsx (duplicate, skip)
   - hire-kotlin-developers.tsx (duplicate, skip)
   - [x] hire-swift-developers.tsx
   - [x] hire-ios-developers.tsx
   - [x] trending-technology.tsx (overview for hire-us)
   - hire-remote-developers.tsx (duplicate, skip)
   - [x] hire-dedicated-developers.tsx
   - [x] hire-full-stack-developer.tsx
   - [x] hire-devops-engineers.tsx
   - [x] hire-qa-engineers.tsx
   - [x] hire-front-end-developer.tsx
   - [x] hire-payload-cms-developers.tsx
   - [x] hire-devops-automation-engineers.tsx
   - [x] hire-typescript-developers.tsx

5. [x] Create missing Company subpages under src/pages/company/:
   - [x] insight.tsx
   - [x] case-studies.tsx
   - [x] videos.tsx
   - [x] center-of-excellence.tsx
   - [x] glossary.tsx

6. [x] Search and replace placeholder/missing images across all pages (e.g., unsplash with Guidesoft assets).
7. [x] Submenu background updated to black/90 with blur; verify visibility.
8. [x] Implement UPI QR payments (hidden VPA) in PaymentComponent.
9. [x] Add PageHero with 4 sections and integrate into dynamic pages.
10. [x] Add SmartImage component and swap key images to prevent breaks.
11. [x] Enhance SEO (keywords, canonical, JSON-LD) in index.html.
12. [x] Test navigation: Hover on menus, click links to new pages, verify no 404s.
13. [x] Update TODO.md after each category completed.

Next step: Start with Services subpages.
