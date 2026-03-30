import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { CartProvider } from "@/contexts/CartContext";
import { AuthProvider } from "@/contexts/AuthContext";
import { ProtectedRoute, AdminRoute } from "@/components/ProtectedRoute";
import { ChatWidget } from "@/components/ChatWidget";
import Index from "./pages/Index";
import Chaussures from "./pages/Chaussures";
import Vetements from "./pages/Vetements";
import Cosmetiques from "./pages/Cosmetiques";
import ProductDetail from "./pages/ProductDetail";
import Checkout from "./pages/Checkout";
import Blog from "./pages/Blog";
import BlogPost from "./pages/BlogPost";
import BecomeSellerPage from "./pages/BecomeSellerPage";
import AuthPage from "./pages/AuthPage";
import AdminDashboard from "./pages/AdminDashboard";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <AuthProvider>
        <CartProvider>
          <Toaster />
          <Sonner />
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<Index />} />
              <Route path="/chaussures" element={<Chaussures />} />
              <Route path="/vetements" element={<Vetements />} />
              <Route path="/cosmetiques" element={<Cosmetiques />} />
              <Route path="/produit/:id" element={<ProductDetail />} />
              <Route path="/panier" element={<ProtectedRoute><Checkout /></ProtectedRoute>} />
              <Route path="/compte" element={<AuthPage />} />
              <Route path="/admin" element={<AdminRoute><AdminDashboard /></AdminRoute>} />
              <Route path="/blog" element={<Blog />} />
              <Route path="/blog/:id" element={<BlogPost />} />
              <Route path="/devenir-vendeur" element={<BecomeSellerPage />} />
              {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
              <Route path="*" element={<NotFound />} />
            </Routes>
            <ChatWidget />
          </BrowserRouter>
        </CartProvider>
      </AuthProvider>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
