import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { LanguageProvider } from "@/contexts/LanguageContext";
import Index from "./pages/Index";
import Home from "./pages/Home";
import Trucks from "./pages/Trucks";
import TractorsPage from "./pages/trucks/TractorsPage";
import DumpTrucksPage from "./pages/trucks/DumpTrucksPage";
import SpecialVehiclesPage from "./pages/trucks/SpecialVehiclesPage";
import CargoTrucksPage from "./pages/trucks/CargoTrucksPage";
import OnRoadTrucksPage from "./pages/trucks/OnRoadTrucksPage";
import NewEnergyPage from "./pages/trucks/NewEnergyPage";
import About from "./pages/About";
import ContactPage from "./pages/ContactPage";
import NotFound from "./pages/NotFound";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import LiveChatButton from "@/components/ui/live-chat-button";
import { ScrollToTop } from "@/components/ScrollToTop";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <LanguageProvider>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <ScrollToTop />
          <div className="min-h-screen bg-background">
            <Header />
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/trucks" element={<Trucks />} />
              <Route path="/trucks/tractors" element={<TractorsPage />} />
              <Route path="/trucks/dump-trucks" element={<DumpTrucksPage />} />
              <Route path="/trucks/special-vehicles" element={<SpecialVehiclesPage />} />
              <Route path="/trucks/cargo-trucks" element={<CargoTrucksPage />} />
              <Route path="/trucks/on-road-trucks" element={<OnRoadTrucksPage />} />
              <Route path="/trucks/new-energy" element={<NewEnergyPage />} />
              <Route path="/about" element={<About />} />
              <Route path="/contact" element={<ContactPage />} />
              {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
              <Route path="*" element={<NotFound />} />
            </Routes>
            <Footer />
            <LiveChatButton />
          </div>
        </BrowserRouter>
      </TooltipProvider>
    </LanguageProvider>
  </QueryClientProvider>
);

export default App;
