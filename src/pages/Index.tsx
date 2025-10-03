import { Header } from "@/components/Header";
import { PromoBanner } from "@/components/PromoBanner";
import { Footer } from "@/components/Footer";
import { ProductCard } from "@/components/ProductCard";
import { HeroSlider } from "@/components/HeroSlider";
import { Button } from "@/components/ui/button";
import { Shield, Truck, CreditCard, HeadphonesIcon } from "lucide-react";
import { Link } from "react-router-dom";

// Import product images
import timberlandLoafers from "@/assets/products/timberland-loafers.jpeg";
import navyBoots from "@/assets/products/navy-boots.jpeg";
import lecoqSneakers from "@/assets/products/lecoq-sneakers.jpeg";
import timberlandSandals from "@/assets/products/timberland-sandals.jpeg";
import blackLoafers from "@/assets/products/black-loafers.jpeg";
import brownLeatherShoe from "@/assets/products/brown-leather-shoe.jpeg";
import comfortSneakers from "@/assets/products/comfort-sneakers.jpeg";
import crocodileSkinLoafers from "@/assets/products/crocodile-skin-loafers.jpeg";
import palmSlippers from "@/assets/products/palm-slippers.jpeg";
import timberlandAnkleSneakers from "@/assets/products/timberland-ankle-sneakers.jpeg";
import timberlandBeigeSneakers from "@/assets/products/timberland-beige-sneakers.jpeg";
import nikeSbColorful from "@/assets/products/nike-sb-colorful.jpeg";
import reebokWhiteSneakers from "@/assets/products/reebok-white-sneakers.jpeg";
import lacostelBlackSneakers from "@/assets/products/lacoste-black-sneakers.jpeg";

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
    {
      id: "5",
      name: "Mocassins Noirs Classiques - Élégance Professionnelle",
      price: 48000,
      originalPrice: 58000,
      image: blackLoafers,
      rating: 5,
      reviewCount: 18,
      inStock: true,
      discount: 17,
    },
    {
      id: "6",
      name: "Chaussures en Cuir Marron - Style Affaires",
      price: 52000,
      image: brownLeatherShoe,
      rating: 5,
      reviewCount: 14,
      inStock: true,
    },
    {
      id: "7",
      name: "Baskets Confort - Usage Quotidien",
      price: 39000,
      originalPrice: 46000,
      image: comfortSneakers,
      rating: 4,
      reviewCount: 20,
      inStock: true,
      discount: 15,
    },
    {
      id: "8",
      name: "Mocassins Peau Crocodile - Luxe Premium",
      price: 65000,
      originalPrice: 78000,
      image: crocodileSkinLoafers,
      rating: 5,
      reviewCount: 9,
      inStock: true,
      discount: 17,
    },
    {
      id: "9",
      name: "Sandales Palm - Confort Été",
      price: 32000,
      image: palmSlippers,
      rating: 4,
      reviewCount: 16,
      inStock: true,
    },
    {
      id: "10",
      name: "Timberland Montantes Navy - Style Urbain",
      price: 58000,
      originalPrice: 68000,
      image: timberlandAnkleSneakers,
      rating: 5,
      reviewCount: 11,
      inStock: true,
      discount: 15,
    },
    {
      id: "11",
      name: "Baskets Timberland Bicolores - Design Moderne",
      price: 47000,
      image: timberlandBeigeSneakers,
      rating: 4,
      reviewCount: 13,
      inStock: true,
    },
    {
      id: "12",
      name: "Nike SB Dunk Édition Colorée - Collection Exclusive",
      price: 62000,
      originalPrice: 75000,
      image: nikeSbColorful,
      rating: 5,
      reviewCount: 22,
      inStock: true,
      discount: 17,
    },
    {
      id: "13",
      name: "Reebok Classic Blanches - Style Intemporel",
      price: 41000,
      image: reebokWhiteSneakers,
      rating: 4,
      reviewCount: 19,
      inStock: true,
    },
    {
      id: "14",
      name: "Lacoste Sport Noires - Élégance Sportive",
      price: 54000,
      originalPrice: 64000,
      image: lacostelBlackSneakers,
      rating: 5,
      reviewCount: 17,
      inStock: true,
      discount: 16,
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
        <section className="relative text-primary-foreground py-20 md:py-32 overflow-hidden">
          <HeroSlider />
          <div className="container px-4 relative z-10">
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
