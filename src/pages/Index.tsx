import { Header } from "@/components/Header";
import { PromoBanner } from "@/components/PromoBanner";
import { Footer } from "@/components/Footer";
import { ProductCard } from "@/components/ProductCard";
import { HeroSlider } from "@/components/HeroSlider";
import { SEOHead } from "@/components/SEOHead";
import { Button } from "@/components/ui/button";
import { Shield, Truck, CreditCard, HeadphonesIcon } from "lucide-react";
import { Link } from "react-router-dom";
import { allProducts } from "@/data/products";

const BASE_URL = "https://efashionplaza.com";

const jsonLdData = [
  {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "E-Fashion Plaza",
    url: BASE_URL,
    potentialAction: {
      "@type": "SearchAction",
      target: `${BASE_URL}/recherche?q={search_term_string}`,
      "query-input": "required name=search_term_string",
    },
  },
  {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "E-Fashion Plaza",
    url: BASE_URL,
    logo: `${BASE_URL}/favicon.png`,
    description: "Boutique en ligne de chaussures, vêtements et cosmétiques de qualité au Bénin avec livraison gratuite et paiement Mobile Money.",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Cotonou",
      addressCountry: "BJ",
    },
    contactPoint: {
      "@type": "ContactPoint",
      telephone: "+22901911346 72",
      contactType: "customer service",
      availableLanguage: ["French", "English"],
    },
    sameAs: [
      "https://facebook.com/efashionplaza",
      "https://instagram.com/efashionplaza",
    ],
  },
  {
    "@context": "https://schema.org",
    "@type": "Store",
    name: "E-Fashion Plaza",
    url: BASE_URL,
    image: `${BASE_URL}/og-image.jpg`,
    description: "Chaussures, vêtements et cosmétiques de marque au Bénin. Livraison gratuite. Paiement Mobile Money sécurisé.",
    priceRange: "15000-50000 FCFA",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Cotonou",
      addressRegion: "Littoral",
      addressCountry: "BJ",
    },
    paymentAccepted: "Mobile Money, Mastercard, Visa",
    currenciesAccepted: "XOF",
    openingHoursSpecification: {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
      opens: "00:00",
      closes: "23:59",
    },
  },
];

const Index = () => {
  const featuredProducts = allProducts.slice(0, 8);

  const features = [
    { icon: Truck, title: "Livraison Gratuite", description: "Dans l'Atlantique & Littoral" },
    { icon: CreditCard, title: "Paiement Sécurisé", description: "MoMo & Mastercard acceptés" },
    { icon: Shield, title: "Garantie Qualité", description: "Produits authentiques" },
    { icon: HeadphonesIcon, title: "Support 24/7", description: "Service client disponible" },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <SEOHead
        title="E-Fashion Plaza | Chaussures & Vêtements au Bénin"
        description="Achetez chaussures, vêtements et cosmétiques de marque au Bénin. Livraison gratuite Cotonou. Paiement Mobile Money sécurisé."
        canonical={BASE_URL}
        keywords="chaussures Bénin, vêtements Bénin, cosmétiques Bénin, mode Cotonou, achat en ligne Bénin, Mobile Money, livraison gratuite"
        jsonLd={jsonLdData}
      />
      <PromoBanner />
      <Header />
      
      <main className="flex-1">
        <section className="relative text-primary-foreground py-20 md:py-32 overflow-hidden">
          <HeroSlider />
          <div className="container px-4 relative z-10">
            <div className="max-w-3xl animate-fade-in">
              <h1 className="text-4xl md:text-6xl font-bold mb-6">La Mode à Votre Portée</h1>
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

        <section className="py-16 bg-muted">
          <div className="container px-4">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Vendeurs de Beauté & Cosmétiques</h2>
              <p className="text-lg text-muted-foreground mb-8">
                Rejoignez notre plateforme et développez votre activité avec nous.
              </p>
              <Button size="lg" asChild>
                <Link to="/devenir-vendeur">Devenir Vendeur</Link>
              </Button>
            </div>
          </div>
        </section>

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
