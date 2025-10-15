"use client";

import React from "react";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ThemeProvider } from "@/components/theme-provider";
import { ModalProvider } from "@/components/modals/ModalProvider";
import { AuthProvider } from "@/contexts/AuthContext";
import { useModalEvents } from "@/hooks/use-modal-events";
import Header from "./components/Header";
import VerticalSocialDock from "./components/VerticalSocialDock";
import Footer from "./components/Footer";
import Chatbot from "./components/Chatbot";
import Home from "./pages/Home";
import HomeInsurance from "./pages/HomeInsurance";
import HomeBusiness from "./pages/HomeBusiness";
import HomeInvestment from "./pages/HomeInvestment";
import Services from "./pages/Services";
import Portfolio from "./pages/Portfolio";
import Blog from "./pages/Blog";
import Pages from "./pages/Pages";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";
import BackToTopButton from "./components/BackToTopButton";
import WebDevelopment from "./pages/services/web-development";
import SoftwareDevelopment from "./pages/services/software-development";
import UiUxDesignDevelopment from "./pages/services/ui-ux-design-development";
import EcommerceDevelopment from "./pages/services/ecommerce-development";
import FullStackDevelopment from "./pages/services/full-stack-development";
import CrossPlatformDevelopment from "./pages/services/cross-platform-development";
import DataEngineering from "./pages/services/data-engineering";
import AppDevelopment from "./pages/services/app-development";
import TravelTechSolutions from "./pages/services/travel-tech-solutions";
import OnDemandSolutions from "./pages/solutions/on-demand-solutions";
import SolutionsOverview from "./pages/solutions/index";
import TravelOverview from "./pages/travel/index";
import HireUsOverview from "./pages/hire-us/index";
import DynamicContentPage from "./pages/DynamicContentPage";
import Login from "./pages/auth/Login";
import Register from "./pages/auth/Register";
import Dashboard from "./pages/Dashboard";
import AILearning from "./pages/AILearning";

const queryClient = new QueryClient();

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
        <TooltipProvider>
          <AuthProvider>
            <ModalProvider>
              <AppContent />
            </ModalProvider>
          </AuthProvider>
        </TooltipProvider>
      </ThemeProvider>
    </QueryClientProvider>
  );
};

const AppContent = () => {
  // Hook to listen for modal events
  useModalEvents();
  return (
    <>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <div className="min-h-screen flex flex-col">
          <Header />
          <VerticalSocialDock />
          <main className="flex-1">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/home-insurance" element={<HomeInsurance />} />
              <Route path="/home-business" element={<HomeBusiness />} />
              <Route path="/home-investment" element={<HomeInvestment />} />
              <Route path="/services" element={<Services />} />
              <Route path="/portfolio" element={<Portfolio />} />
              <Route path="/blog" element={<Blog />} />
              <Route path="/pages" element={<Pages />} />
              <Route path="/contact" element={<Contact />} />

              {/* Auth Routes */}
              <Route path="/login" element={<Login />} />
              <Route path="/register" element={<Register />} />
              <Route path="/dashboard" element={<Dashboard />} />

              {/* AI Learning */}
              <Route path="/ai-learning" element={<AILearning />} />

              {/* New overview pages */}
              <Route path="/solutions" element={<SolutionsOverview />} />
              <Route path="/travel" element={<TravelOverview />} />
              <Route path="/hire-us" element={<HireUsOverview />} />

              {/* Specific routes for services (overrides dynamic) */}
              <Route path="/services/web-development" element={<WebDevelopment />} />
              <Route path="/services/software-development" element={<SoftwareDevelopment />} />
              <Route path="/services/ui-ux-design-development" element={<UiUxDesignDevelopment />} />
              <Route path="/services/ecommerce-development" element={<EcommerceDevelopment />} />
              <Route path="/services/full-stack-development" element={<FullStackDevelopment />} />
              <Route path="/services/cross-platform-development" element={<CrossPlatformDevelopment />} />
              <Route path="/services/data-engineering" element={<DataEngineering />} />
              <Route path="/services/app-development" element={<AppDevelopment />} />
              <Route path="/services/travel-tech-solutions" element={<TravelTechSolutions />} />

              {/* Specific route for solutions (overrides dynamic) */}
              <Route path="/solutions/on-demand-solutions" element={<OnDemandSolutions />} />

              {/* Dynamic routes for all sub-pages (after specific routes) */}
              <Route path="/services/*" element={<DynamicContentPage />} />
              <Route path="/solutions/*" element={<DynamicContentPage />} />
              <Route path="/travel/*" element={<DynamicContentPage />} />
              <Route path="/hire-us/*" element={<DynamicContentPage />} />
              <Route path="/company/*" element={<DynamicContentPage />} />

              {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
              <Route path="*" element={<NotFound />} />
            </Routes>
          </main>
          <Footer />
          <BackToTopButton />
          <Chatbot />
        </div>
      </BrowserRouter>
    </>
  );
};

export default App;