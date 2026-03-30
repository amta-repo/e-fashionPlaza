import { ShoppingCart, Search, Menu, User, LogOut } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Badge } from "@/components/ui/badge";
import { Link } from "react-router-dom";
import { useCart } from "@/contexts/CartContext";
import { useAuth } from "@/contexts/AuthContext";

export const Header = () => {
  const { totalItems } = useCart();
  const { user, signOut, isAdmin } = useAuth();

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between px-4">
        <div className="flex items-center gap-6">
          <Sheet>
            <SheetTrigger asChild className="lg:hidden">
              <Button variant="ghost" size="icon">
                <Menu className="h-5 w-5" />
              </Button>
            </SheetTrigger>
            <SheetContent side="left" className="w-[300px]">
              <nav className="flex flex-col gap-4 mt-8">
                <Link to="/" className="text-lg font-medium hover:text-primary transition-colors">
                  Accueil
                </Link>
                <Link to="/chaussures" className="text-lg font-medium hover:text-primary transition-colors">
                  Chaussures
                </Link>
                <Link to="/vetements" className="text-lg font-medium hover:text-primary transition-colors">
                  Vêtements
                </Link>
                <Link to="/cosmetiques" className="text-lg font-medium hover:text-primary transition-colors">
                  Cosmétiques
                </Link>
                <Link to="/blog" className="text-lg font-medium hover:text-primary transition-colors">
                  Blog
                </Link>
                <Link to="/devenir-vendeur" className="text-lg font-medium hover:text-primary transition-colors">
                  Devenir Vendeur
                </Link>
                {isAdmin && (
                  <Link to="/admin" className="text-lg font-medium text-primary hover:text-primary/80 transition-colors">
                    Admin
                  </Link>
                )}
              </nav>
            </SheetContent>
          </Sheet>

          <Link to="/" className="flex items-center gap-2">
            <span className="text-2xl font-bold bg-gradient-hero bg-clip-text text-transparent">
              E-Fashion Plaza
            </span>
          </Link>

          <nav className="hidden lg:flex items-center gap-6">
            <Link to="/chaussures" className="text-sm font-medium hover:text-primary transition-colors">
              Chaussures
            </Link>
            <Link to="/vetements" className="text-sm font-medium hover:text-primary transition-colors">
              Vêtements
            </Link>
            <Link to="/cosmetiques" className="text-sm font-medium hover:text-primary transition-colors">
              Cosmétiques
            </Link>
            <Link to="/blog" className="text-sm font-medium hover:text-primary transition-colors">
              Blog
            </Link>
            {isAdmin && (
              <Link to="/admin" className="text-sm font-medium text-primary hover:text-primary/80 transition-colors">
                Admin
              </Link>
            )}
          </nav>
        </div>

        <div className="flex items-center gap-4">
          <div className="hidden md:flex items-center gap-2 max-w-sm">
            <Input 
              type="search" 
              placeholder="Rechercher..." 
              className="h-9"
            />
            <Button size="icon" variant="ghost">
              <Search className="h-4 w-4" />
            </Button>
          </div>

          {user ? (
            <Button size="icon" variant="ghost" onClick={signOut} title="Déconnexion">
              <LogOut className="h-5 w-5" />
            </Button>
          ) : (
            <Button size="icon" variant="ghost" asChild>
              <Link to="/compte">
                <User className="h-5 w-5" />
              </Link>
            </Button>
          )}

          <Button size="icon" variant="ghost" className="relative" asChild>
            <Link to="/panier">
              <ShoppingCart className="h-5 w-5" />
              {totalItems > 0 && (
                <Badge className="absolute -top-1 -right-1 h-5 w-5 flex items-center justify-center p-0 bg-primary text-xs">
                  {totalItems}
                </Badge>
              )}
            </Link>
          </Button>

          <div id="google_translate_element" className="hidden lg:block [&_.goog-te-gadget]:!text-xs [&_select]:!z-40"></div>
        </div>
      </div>
    </header>
  );
};
