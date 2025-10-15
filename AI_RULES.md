# AI Rules for GuideSoft IT Solutions Application

This document outlines the core technologies used in this project and provides guidelines for library usage to maintain consistency and best practices.

## Tech Stack Overview

This project is built using a modern web development stack, focusing on performance, maintainability, and a great developer experience.

*   **Vite**: A fast build tool and development server for modern web projects.
*   **TypeScript**: A superset of JavaScript that adds static typing, enhancing code quality and developer productivity.
*   **React**: A declarative, component-based JavaScript library for building user interfaces.
*   **shadcn/ui**: A collection of re-usable components built with Radix UI and Tailwind CSS, providing accessible and customizable UI elements.
*   **Tailwind CSS**: A utility-first CSS framework for rapidly building custom designs.
*   **React Router**: A standard library for routing in React applications, enabling declarative navigation.
*   **TanStack Query**: A powerful library for managing, caching, and synchronizing server state in React.
*   **Lucide React**: A collection of beautiful and customizable open-source icons.
*   **Framer Motion**: A production-ready motion library for React, making animations simple and powerful.
*   **Zod**: A TypeScript-first schema declaration and validation library.
*   **React Hook Form**: A performant, flexible, and extensible forms library for React.
*   **Sonner**: An opinionated toast component for React.

## Library Usage Rules

To ensure consistency and leverage the strengths of our chosen libraries, please adhere to the following guidelines:

*   **UI Components**: Always prioritize using components from `shadcn/ui`. If a specific component is not available or requires significant customization beyond what `shadcn/ui` offers, create a new, small, and focused component using Tailwind CSS.
*   **Styling**: Use Tailwind CSS exclusively for all styling. Avoid inline styles or separate CSS files (except for `src/index.css` for global styles).
*   **Routing**: All client-side navigation should be handled using `react-router-dom`.
*   **Data Fetching & Server State**: For managing server state, data fetching, caching, and synchronization, use `TanStack Query`.
*   **Icons**: Integrate icons using the `lucide-react` library.
*   **Form Management**: Utilize `react-hook-form` for all form handling, including state management, validation, and submission. Pair it with `zod` for defining and validating form schemas.
*   **Animations**: For declarative and high-performance animations, use `framer-motion`.
*   **Toast Notifications**: For user feedback and notifications, use the `sonner` component.