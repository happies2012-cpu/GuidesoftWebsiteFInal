/**
 * Image utility functions for managing app images
 * Maps page types to appropriate hero images from assets
 */

// Import available hero images
import service1 from "@/assets/1.png";
import service2 from "@/assets/2.png";
import service3 from "@/assets/3.png";
import service4 from "@/assets/4.png";
import service5 from "@/assets/5.png";
import service6 from "@/assets/6.png";
import service7 from "@/assets/7.png";
import service8 from "@/assets/8.png";
import service9 from "@/assets/9.png";
import service10 from "@/assets/10.png";
import service11 from "@/assets/11.png";
import service12 from "@/assets/12.png";
import service13 from "@/assets/13.png";
import service14 from "@/assets/14.png";
import service15 from "@/assets/15.png";
import service16 from "@/assets/16.png";
import service17 from "@/assets/17.png";
import service18 from "@/assets/18.png";
import service19 from "@/assets/19.png";
import teamMeeting from "@/assets/team-meeting.jpg";
import heroBg from "@/assets/hero-bg.jpg";

// Import Studio images
import studio10 from "@/assets/Studio/10.png";
import studio11 from "@/assets/Studio/11.png";
import studio12 from "@/assets/Studio/12.png";
import audio from "@/assets/Studio/audio.png";
import brandPromotions from "@/assets/Studio/Brand Promotions.png";
import designing from "@/assets/Studio/designing.png";
import dev from "@/assets/Studio/dev.png";
import digitalMarketing from "@/assets/Studio/Digital Marketing.png";
import entertainment from "@/assets/Studio/Entertainment.png";
import news from "@/assets/Studio/news.png";
import products from "@/assets/Studio/products.png";
import promoting from "@/assets/Studio/promoting.png";
import uxui from "@/assets/Studio/uxui.png";
import workflows from "@/assets/Studio/workflows.png";

/**
 * Hero image mapping for different page categories
 */
export const heroImages = {
  // Services - App Development
  'android-app': service2,
  'ios-app': service5,
  'flutter-app': service4,
  'native-app': service8,
  'progressive-web-apps': service3,
  'enterprise-app': service6,
  'ecommerce-app': service1,
  'iot-app': service11,
  
  // Services - Web Development
  'web-development': dev,
  'software-development': service3,
  'ui-ux-design-development': uxui,
  'ecommerce-development': service1,
  'full-stack-development': studio11,
  'cross-platform-development': service4,
  'data-engineering': service7,
  'it-consulting-services': workflows,
  
  // Services - Travel Tech
  'travel-tech-solutions': service15,
  'travel-portal-development-services': service15,
  'custom-travel-portal-services': service15,
  'white-label-travel': service15,
  'travel-booking-software': service15,
  'hotel-booking-software': service15,
  'flight-booking-software': service15,
  'travel-api-integration-services': service15,
  'global-distribution-system': service15,
  
  // Services - Hire Developers
  'hire-dedicated-developers': studio10,
  'hire-android-app-developers': studio10,
  'hire-react-native-developers-services': studio10,
  'hire-flutter-developers-services': studio10,
  'hire-kotlin-developers-services': studio10,
  'hire-full-stack-developers': studio10,
  'hire-laravel-developers-services': studio10,
  'hire-python-developers-services': studio10,
  'hire-remote-developers-services': studio10,
  
  // Solutions - Specific Apps
  'booking-app': service8,
  'chatbot-app': service9,
  'dating-app': service5,
  'education-app': service7,
  'finance-app': service2,
  'fitness-app': service5,
  'food-delivery-app': service1,
  'gaming-app': service10,
  'health-app': service5,
  'music-app': service7,
  'news-app': service13,
  'productivity-app': service4,
  'question-answer-app': service14,
  'real-estate-app': service6,
  'shopping-app': service1,
  'social-media-app': service3,
  'travel-app': service8,
  'video-streaming-app': service7,
  
  // Solutions - On-Demand
  'on-demand-solutions': service8,
  'scheduling-app': service8,
  'event-management-app': service8,
  'flight-booking-app': service8,
  'video-conferencing': service8,
  
  // Solutions - Emerging Tech
  'emerging-tech-solutions': studio12,
  'elearning-solution': studio12,
  'hrms-app-solution': studio12,
  'ble-app-solution': studio12,
  'survey-app-solution': studio12,
  'employee-management-app': studio12,
  'reverse-auction-app': studio12,
  'react-native-app-solution': studio12,
  'ar-app-development': studio12,
  'ecommerce-app-development': studio12,
  
  // Solutions - Trending Technology
  'trending-technology-solutions': workflows,
  'data-analytics': workflows,
  'data-visualization': workflows,
  'data-warehousing': workflows,
  'snowflake-solution': workflows,
  'devops-consulting': workflows,
  'it-support-services': workflows,
  'it-outsourcing-services': workflows,
  'offshore-development': workflows,
  
  // Travel - Booking Engines
  'travel-booking-engine': service15,
  'hotel-booking-engine': service15,
  'car-rental-booking-engine': service15,
  'cruise-booking-engine': service15,
  'bus-reservation-system': service15,
  'activities-booking-solution': service15,
  'vacation-rental-management-system': service15,
  'flight-booking-engine': service15,
  'flight-booking-engine-travel': service15,
  'custom-travel-portal': service15,
  'custom-travel-development': service15,
  
  // Travel - Portal Development
  'travel-portal-development-travel': service15,
  'b2b-travel-portal': service15,
  'b2c-travel-portal': service15,
  'custom-travel-portal-travel': service15,
  'hotel-extranet': service15,
  'b2b-flight-booking-portal': service15,
  'air-ticket-booking-portal': service15,
  
  // Travel - API Integration
  'travel-api-integration-travel': service15,
  'ndc-api-integration': service15,
  'amadeus-api-integration': service15,
  'sabre-api-integration': service15,
  'gds-integration': service15,
  'expedia-api-integration': service15,
  'payment-gateway-integration': service15,
  'travel-customer-support-and-service': service15,
  'flight-booking-api-integration': service15,
  
  // Hire Us - Frontend
  'frontend': studio10,
  'hire-electron-js-developers': studio10,
  'hire-reactjs-developers': studio10,
  'hire-nextjs-developers': studio10,
  'hire-html-developers': studio10,
  'hire-angular-developers': studio10,
  'hire-magento-developers': studio10,
  'hire-gatsbyjs-developers': studio10,
  'hire-extjs-developers': studio10,
  
  // Hire Us - Backend
  'backend': studio10,
  'hire-nodejs-developers': studio10,
  'hire-laravel-developers-hireus': studio10,
  'hire-python-developers-hireus': studio10,
  'hire-nestjs-developers': studio10,
  'hire-expressjs-developers': studio10,
  'hire-net-developers': studio10,
  'hire-hapi-js-developers': studio10,
  'hire-fastify-developers': studio10,
  'hire-golang-developers': studio10,
  
  // Hire Us - Mobile
  'mobile': studio10,
  'hire-android-app-developer': studio10,
  'hire-react-native-developers-hireus': studio10,
  'hire-flutter-developers-hireus': studio10,
  'hire-kotlin-developers-hireus': studio10,
  'hire-swift-developers': studio10,
  'hire-ios-developers': studio10,
  
  // Hire Us - Trending Technology
  'trending-technology-hireus': studio10,
  'hire-remote-developers-hireus': studio10,
  'hire-dedicated-developers-hireus': studio10,
  'hire-full-stack-developer': studio10,
  'hire-devops-engineers': studio10,
  'hire-qa-engineers': studio10,
  'hire-front-end-developer': studio10,
  'hire-payload-cms-developers': studio10,
  'hire-devops-automation-engineers': studio10,
  'hire-typescript-developers': studio10,
  
  // Company Pages
  'company': teamMeeting,
  'about-company': teamMeeting,
  'hr-consultancy': teamMeeting,
  'careers': teamMeeting,
  'privacy-policy': teamMeeting,
  'terms-conditions': teamMeeting,
  'refund-and-cancellation-policy': teamMeeting,
  
  // Main navigation pages
  'home': heroBg,
  'ai-learning': service12, // Using service12 for AI Learning
  'services': dev, // Using dev for Services
  'solutions': workflows, // Using workflows for Solutions
  'travel': service15, // Using service15 for Travel
  'hire-us': studio10, // Using studio10 for Hire Us
  'contact': service16, // Using service16 for Contact
  'blog': service17, // Using service17 for Blog
  'portfolio': service18, // Using service18 for Portfolio
  'about': teamMeeting, // Using teamMeeting for About
  'pages': teamMeeting, // Using teamMeeting for Pages
  
  // Studio images for specific categories
  'ui-ux': uxui,
  'design': designing,
  'digital-marketing': digitalMarketing,
  'brand-promotions': brandPromotions,
  'entertainment': entertainment,
  'news': news,
  'audio': audio,
  'products': products,
  'promoting': promoting,
  
  // Default/Fallback
  'default': heroBg,
  'team': teamMeeting,
};

/**
 * Get hero image for a specific page type
 * @param pageType - The type/slug of the page
 * @returns Image import path
 */
export const getHeroImage = (pageType: string): string => {
  return heroImages[pageType as keyof typeof heroImages] || heroImages.default;
};

/**
 * Avatar placeholder generator for team members and testimonials
 * Creates a gradient avatar with initials
 */
export const getAvatarPlaceholder = (name: string, index: number = 0): string => {
  const colors = [
    'from-blue-500 to-indigo-600',
    'from-purple-500 to-pink-600',
    'from-green-500 to-teal-600',
    'from-orange-500 to-red-600',
    'from-cyan-500 to-blue-600',
    'from-pink-500 to-rose-600',
  ];
  
  return colors[index % colors.length];
};

/**
 * Get initials from name for avatar fallback
 */
export const getInitials = (name: string): string => {
  return name
    .split(' ')
    .map(n => n[0])
    .join('')
    .toUpperCase()
    .slice(0, 2);
};

/**
 * Professional avatar URLs using UI Avatars service (no external dependencies)
 * These work offline and generate clean, professional avatars
 */
export const generateAvatarUrl = (name: string, background?: string): string => {
  const bg = background?.replace('#', '') || '4F46E5'; // Default indigo
  const initials = getInitials(name);
  return `data:image/svg+xml,${encodeURIComponent(`
    <svg xmlns="http://www.w3.org/2000/svg" width="256" height="256">
      <rect width="256" height="256" fill="#${bg}"/>
      <text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle" font-family="Arial, sans-serif" font-size="96" font-weight="bold" fill="white">
        ${initials}
      </text>
    </svg>
  `)}`;
};

/**
 * Icon placeholder for tech stack using FontAwesome colors
 */
export const getTechIconPlaceholder = (techName: string): string => {
  const techColors: Record<string, string> = {
    'react': '61DAFB',
    'vue': '4FC08D',
    'angular': 'DD0031',
    'node': '339933',
    'python': '3776AB',
    'java': '007396',
    'typescript': '3178C6',
    'javascript': 'F7DF1E',
    'docker': '2496ED',
    'kubernetes': '326CE5',
    'aws': 'FF9900',
    'azure': '0089D6',
    'mongodb': '47A248',
    'postgresql': '336791',
    'mysql': '4479A1',
    'default': '4F46E5',
  };
  
  const color = techColors[techName.toLowerCase()] || techColors.default;
  const initial = techName[0].toUpperCase();
  
  return `data:image/svg+xml,${encodeURIComponent(`
    <svg xmlns="http://www.w3.org/2000/svg" width="400" height="400">
      <rect width="400" height="400" fill="#${color}" rx="20"/>
      <text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle" font-family="Arial, sans-serif" font-size="200" font-weight="bold" fill="white">
        ${initial}
      </text>
    </svg>
  `)}`;
};