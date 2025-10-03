import { Header } from "@/components/Header";
import { PromoBanner } from "@/components/PromoBanner";
import { Footer } from "@/components/Footer";
import { ProductCard } from "@/components/ProductCard";
import { Button } from "@/components/ui/button";
import { Shield, Truck, CreditCard, HeadphonesIcon } from "lucide-react";
import { Link } from "react-router-dom";

// Import product images
import timberlandLoafers from "@/assets/products/timberland-loafers.jpeg";
import navyBoots from "@/assets/products/navy-boots.jpeg";
import lecoqSneakers from "@/assets/products/lecoq-sneakers.jpeg";
import timberlandSandals from "@/assets/products/timberland-sandals.jpeg";

const Index = () => {
  const featuredProducts = [
    {
      id: "1",
      name: "Mocassins Burberry Premium - Confort & Élégance",
      price: 45000,
      originalPrice: 55000,
      image: timberlandLoafers,
      rating: 5,
      reviewCount: 12,
      inStock: true,
      discount: 18,
    },
    {
      id: "2",
      name: "Bottines Classiques Navy - Style Urbain",
      price: 38000,
      image: navyBoots,
      rating: 4,
      reviewCount: 8,
      inStock: true,
    },
    {
      id: "3",
      name: "Baskets Le Coq Sportif - Édition Tricolore",
      price: 42000,
      originalPrice: 50000,
      image: lecoqSneakers,
      rating: 5,
      reviewCount: 15,
      inStock: true,
      discount: 16,
    },
    {
      id: "4",
      name: "Sandales Timberland - Été Confort",
      price: 35000,
      image: timberlandSandals,
      rating: 4,
      reviewCount: 10,
      inStock: true,
    },
  ];

  const features = [
    {
      icon: Truck,
      title: "Livraison Gratuite",
      description: "Dans l'Atlantique & Littoral",
    },
    {
      icon: CreditCard,
      title: "Paiement Sécurisé",
      description: "Mobile Money accepté",
    },
    {
      icon: Shield,
      title: "Garantie Qualité",
      description: "Produits authentiques",
    },
    {
      icon: HeadphonesIcon,
      title: "Support 24/7",
      description: "Service client disponible",
    },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <PromoBanner />
      <Header />
      
      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative bg-gradient-hero text-primary-foreground py-20 md:py-32">
          <div className="container px-4">
            <div className="max-w-3xl animate-fade-in">
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                La Mode à Votre Portée
              </h1>
              <p className="text-lg md:text-xl mb-8 opacity-90">
                Découvrez notre collection exclusive de chaussures et vêtements de marque. 
                Livraison gratuite et paiement Mobile Money sécurisé.
              </p>
              <div className="flex flex-wrap gap-4">
                <Button size="lg" variant="secondary" asChild>
                  <Link to="/chaussures">Découvrir les Chaussures</Link>
                </Button>
                <Button size="lg" variant="outline" className="bg-white/10 border-white/20 hover:bg-white/20" asChild>
                  <Link to="/vetements">Voir les Vêtements</Link>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-12 border-b">
          <div className="container px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {features.map((feature, index) => (
                <div key={index} className="flex items-start gap-4">
                  <div className="bg-primary/10 p-3 rounded-lg">
                    <feature.icon className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">{feature.title}</h3>
                    <p className="text-sm text-muted-foreground">{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Featured Products */}
        <section className="py-16">
          <div className="container px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Produits en Vedette</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Découvrez notre sélection de produits premium, soigneusement choisis pour vous
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {featuredProducts.map((product) => (
                <ProductCard key={product.id} {...product} />
              ))}
            </div>

            <div className="text-center mt-12">
              <Button size="lg" variant="outline" asChild>
                <Link to="/chaussures">Voir Tous les Produits</Link>
              </Button>
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="py-16 bg-muted">
          <div className="container px-4">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Vendeurs de Beauté & Cosmétiques
              </h2>
              <p className="text-lg text-muted-foreground mb-8">
                Rejoignez notre plateforme et développez votre activité avec nous. 
                Bénéficiez de notre infrastructure de paiement et de livraison.
              </p>
              <Button size="lg" asChild>
                <Link to="/devenir-vendeur">Devenir Vendeur</Link>
              </Button>
            </div>
          </div>
        </section>

        {/* Trust Badges */}
        <section className="py-12 border-t">
          <div className="container px-4">
            <div className="flex flex-wrap justify-center items-center gap-8">
              <div className="flex items-center gap-2 text-trust">
                <Shield className="h-6 w-6" />
                <span className="font-semibold">Paiement Sécurisé SSL</span>
              </div>
              <div className="flex items-center gap-2 text-trust">
                <Shield className="h-6 w-6" />
                <span className="font-semibold">Vendeurs Vérifiés</span>
              </div>
              <div className="flex items-center gap-2 text-trust">
                <Shield className="h-6 w-6" />
                <span className="font-semibold">Garantie Satisfaction</span>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Index;
