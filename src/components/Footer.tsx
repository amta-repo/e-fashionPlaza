import { Facebook, Instagram, Mail, MapPin, Phone } from "lucide-react";
import { Link } from "react-router-dom";

export const Footer = () => {
  return (
    <footer className="bg-card border-t mt-16">
      <div className="container px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <h3 className="text-lg font-bold mb-4 bg-gradient-hero bg-clip-text text-transparent">
              AMTECH-BJ
            </h3>
            <p className="text-sm text-muted-foreground mb-4">
              Votre boutique de confiance pour des chaussures et vêtements de qualité au Bénin.
            </p>
            <div className="flex gap-3">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" 
                 className="hover:text-primary transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer"
                 className="hover:text-primary transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
            </div>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Catégories</h4>
            <ul className="space-y-2 text-sm">
              <li><Link to="/chaussures" className="text-muted-foreground hover:text-primary transition-colors">Chaussures</Link></li>
              <li><Link to="/vetements" className="text-muted-foreground hover:text-primary transition-colors">Vêtements</Link></li>
              <li><Link to="/cosmetiques" className="text-muted-foreground hover:text-primary transition-colors">Cosmétiques</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Informations</h4>
            <ul className="space-y-2 text-sm">
              <li><Link to="/a-propos" className="text-muted-foreground hover:text-primary transition-colors">À Propos</Link></li>
              <li><Link to="/contact" className="text-muted-foreground hover:text-primary transition-colors">Contact</Link></li>
              <li><Link to="/blog" className="text-muted-foreground hover:text-primary transition-colors">Blog</Link></li>
              <li><Link to="/devenir-vendeur" className="text-muted-foreground hover:text-primary transition-colors">Devenir Vendeur</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Contact</h4>
            <ul className="space-y-3 text-sm text-muted-foreground">
              <li className="flex items-start gap-2">
                <MapPin className="h-4 w-4 mt-0.5 flex-shrink-0" />
                <span>Cotonou, Bénin</span>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="h-4 w-4 flex-shrink-0" />
                <span>+229 XX XX XX XX</span>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="h-4 w-4 flex-shrink-0" />
                <span>contact@amtech-bj.com</span>
              </li>
            </ul>
            
            <div className="mt-6">
              <p className="text-xs font-semibold mb-2">Paiement sécurisé</p>
              <div className="flex gap-2 flex-wrap">
                <div className="bg-trust text-trust-foreground px-3 py-1 rounded text-xs font-medium">MTN MoMo</div>
                <div className="bg-trust text-trust-foreground px-3 py-1 rounded text-xs font-medium">Moov</div>
                <div className="bg-trust text-trust-foreground px-3 py-1 rounded text-xs font-medium">Celtiis</div>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t mt-8 pt-6 text-center text-sm text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} AMTECH-BJ. Tous droits réservés.</p>
        </div>
      </div>
    </footer>
  );
};
