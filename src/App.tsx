import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Dashboard from "./pages/Dashboard";
import VideoProcessing from "./pages/VideoProcessing";
import ManualTest from "./pages/ManualTest";
import TestDashboard from "./pages/TestDashboard";
import TechnologyStack from "./pages/TechnologyStack";
import References from "./pages/References";
import NotFound from "./pages/NotFound";
import AppSidebar from "./components/AppSidebar";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <div className="flex w-full min-h-screen">
          <AppSidebar />
          <main className="flex-1 ml-64">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/dashboard" element={<Dashboard />} />
              <Route path="/video-processing" element={<VideoProcessing />} />
              <Route path="/manual-test" element={<ManualTest />} />
              <Route path="/test-dashboard" element={<TestDashboard />} />
              <Route path="/technology-stack" element={<TechnologyStack />} />
              <Route path="/references" element={<References />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </main>
        </div>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
