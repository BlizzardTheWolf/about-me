import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import Index from "./pages/Index";
import RulesPage from "./pages/RulesPage";
import InterestsPage from "./pages/InterestsPage";
import PreferencesPage from "./pages/PreferencesPage";
import LinksPage from "./pages/LinksPage";
import BookmarksPage from "./pages/BookmarksPage";
import PrivatePage from "./pages/PrivatePage";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/rules" element={<RulesPage />} />
          <Route path="/interests" element={<InterestsPage />} />
          <Route path="/preferences" element={<PreferencesPage />} />
          <Route path="/links" element={<LinksPage />} />
          <Route path="/bookmarks" element={<BookmarksPage />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
