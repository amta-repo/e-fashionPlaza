import { Header } from "@/components/Header";
import { PromoBanner } from "@/components/PromoBanner";
import { Footer } from "@/components/Footer";
import { SEOHead } from "@/components/SEOHead";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Shirt } from "lucide-react";

const Vetements = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <SEOHead
        title="Vêtements de Marque au Bénin"
        description="Collection de vêtements de marque pour homme et femme au Bénin. T-shirts, chemises, pantalons. Livraison gratuite à Cotonou."
        canonical="https://efashionplaza.com/vetements"
        keywords="vêtements Bénin, mode Cotonou, t-shirts, chemises, pantalons, vêtements homme femme Bénin"
      />
      <PromoBanner />
      <Header />
      <main className="flex-1">
        <div className="bg-muted py-8">
          <div className="container px-4">
            <h1 className="text-3xl md:text-4xl font-bold mb-2">Vêtements</h1>
            <p className="text-muted-foreground">Notre collection de vêtements de marque arrive bientôt</p>
          </div>
        </div>
        <div className="container px-4 py-16">
          <Card className="max-w-lg mx-auto text-center p-12">
            <CardContent className="space-y-6">
              <div className="bg-primary/10 p-6 rounded-full w-24 h-24 mx-auto flex items-center justify-center">
                <Shirt className="h-12 w-12 text-primary" />
              </div>
              <h2 className="text-2xl font-bold">Collection à venir</h2>
              <p className="text-muted-foreground">Nous préparons une sélection exclusive de vêtements pour homme et femme. T-shirts, chemises, pantalons et plus encore — restez connectés !</p>
              <Badge variant="outline" className="text-primary border-primary">Bientôt disponible</Badge>
            </CardContent>
          </Card>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Vetements;
