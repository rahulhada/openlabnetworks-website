import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ThemeProvider } from "@/components/ThemeProvider";

import Index        from "./pages/Index";
import About        from "./pages/About";
import Blog         from "./pages/Blog";
import Training     from "./pages/Training";
import Architecture from "./pages/Architecture";
import Solutions    from "./pages/Solutions";
import Ecosystem    from "./pages/Ecosystem";
import FPGASandbox  from "./pages/P4Sandbox";
import Contact      from "./pages/Contact";
import NotFound     from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <ThemeProvider>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Routes>
            <Route path="/"             element={<Index />} />
            <Route path="/about"        element={<About />} />
            <Route path="/blog"         element={<Blog />} />
            <Route path="/training"     element={<Training />} />
            <Route path="/architecture" element={<Architecture />} />
            <Route path="/solutions"    element={<Solutions />} />
            <Route path="/ecosystem"    element={<Ecosystem />} />
            <Route path="/fpga-sandbox" element={<FPGASandbox />} />
            <Route path="/p4-sandbox"   element={<FPGASandbox />} />  {/* backward compat */}
            <Route path="/contact"      element={<Contact />} />
            <Route path="*"             element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </ThemeProvider>
  </QueryClientProvider>
);

export default App;
