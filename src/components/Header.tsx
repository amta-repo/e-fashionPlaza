import { ShoppingCart, Search, Menu, User } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Badge } from "@/components/ui/badge";
import { Link } from "react-router-dom";
import { useState } from "react";

export const Header = () => {
  const [cartCount] = useState(0);

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
              </nav>
            </SheetContent>
          </Sheet>

          <Link to="/" className="flex items-center gap-2">
            <span className="text-2xl font-bold bg-gradient-hero bg-clip-text text-transparent">
              AMTECH-BJ
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

          <Button size="icon" variant="ghost" asChild>
            <Link to="/compte">
              <User className="h-5 w-5" />
            </Link>
          </Button>

          <Button size="icon" variant="ghost" className="relative" asChild>
            <Link to="/panier">
              <ShoppingCart className="h-5 w-5" />
              {cartCount > 0 && (
                <Badge className="absolute -top-1 -right-1 h-5 w-5 flex items-center justify-center p-0 bg-primary">
                  {cartCount}
                </Badge>
              )}
            </Link>
          </Button>

          <div id="google_translate_element" className="hidden lg:block"></div>
        </div>
      </div>
    </header>
  );
};
