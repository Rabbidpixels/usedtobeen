import { Suspense, lazy } from "react";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ThemeProvider } from "@/hooks/useTheme";
import Index from "./pages/Index";

// Lazy load info pages to reduce initial bundle
const About = lazy(() => import("./pages/About"));
const Privacy = lazy(() => import("./pages/Privacy"));
const Terms = lazy(() => import("./pages/Terms"));
const Contact = lazy(() => import("./pages/Contact"));
const NotFound = lazy(() => import("./pages/NotFound"));

// Loading fallback component
const PageLoadingFallback = () => <div className="min-h-screen" />;

const App = () => (
  <ThemeProvider defaultTheme="dark">
    <TooltipProvider>
      <Toaster />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/about" element={
            <Suspense fallback={<PageLoadingFallback />}>
              <About />
            </Suspense>
          } />
          <Route path="/privacy" element={
            <Suspense fallback={<PageLoadingFallback />}>
              <Privacy />
            </Suspense>
          } />
          <Route path="/terms" element={
            <Suspense fallback={<PageLoadingFallback />}>
              <Terms />
            </Suspense>
          } />
          <Route path="/contact" element={
            <Suspense fallback={<PageLoadingFallback />}>
              <Contact />
            </Suspense>
          } />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={
            <Suspense fallback={<PageLoadingFallback />}>
              <NotFound />
            </Suspense>
          } />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </ThemeProvider>
);

export default App;
