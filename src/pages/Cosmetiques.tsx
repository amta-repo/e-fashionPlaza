import { Header } from "@/components/Header";
import { PromoBanner } from "@/components/PromoBanner";
import { Footer } from "@/components/Footer";
import { SEOHead } from "@/components/SEOHead";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Sparkles } from "lucide-react";

const Cosmetiques = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <SEOHead
        title="Cosmétiques & Beauté au Bénin"
        description="Produits de beauté et cosmétiques de qualité au Bénin. Crèmes, parfums, maquillage et soins. Livraison gratuite à Cotonou."
        canonical="https://efashionplaza.com/cosmetiques"
        keywords="cosmétiques Bénin, beauté Cotonou, crèmes, parfums, maquillage, soins peau Bénin"
      />
      <PromoBanner />
      <Header />
      <main className="flex-1">
        <div className="bg-muted py-8">
          <div className="container px-4">
            <h1 className="text-3xl md:text-4xl font-bold mb-2">Cosmétiques</h1>
            <p className="text-muted-foreground">Produits de beauté et cosmétiques de qualité</p>
          </div>
        </div>
        <div className="container px-4 py-16">
          <Card className="max-w-lg mx-auto text-center p-12">
            <CardContent className="space-y-6">
              <div className="bg-primary/10 p-6 rounded-full w-24 h-24 mx-auto flex items-center justify-center">
                <Sparkles className="h-12 w-12 text-primary" />
              </div>
              <h2 className="text-2xl font-bold">Collection à venir</h2>
              <p className="text-muted-foreground">Notre sélection de cosmétiques et produits de beauté sera disponible très prochainement. Crèmes, parfums, maquillage et soins — pour sublimer votre beauté !</p>
              <Badge variant="outline" className="text-primary border-primary">Bientôt disponible</Badge>
            </CardContent>
          </Card>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Cosmetiques;
