import { Header } from "@/components/Header";
import { PromoBanner } from "@/components/PromoBanner";
import { Footer } from "@/components/Footer";
import { ProductCard } from "@/components/ProductCard";
import { Button } from "@/components/ui/button";
import { Filter } from "lucide-react";
import { useState } from "react";

import timberlandLoafers from "@/assets/products/timberland-loafers.jpeg";
import navyBoots from "@/assets/products/navy-boots.jpeg";
import lecoqSneakers from "@/assets/products/lecoq-sneakers.jpeg";
import timberlandSandals from "@/assets/products/timberland-sandals.jpeg";

const Chaussures = () => {
  const [activeFilter, setActiveFilter] = useState("tous");

  const products = [
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
      category: "homme",
    },
    {
      id: "2",
      name: "Bottines Classiques Navy - Style Urbain",
      price: 38000,
      image: navyBoots,
      rating: 4,
      reviewCount: 8,
      inStock: true,
      category: "homme",
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
      category: "homme",
    },
    {
      id: "4",
      name: "Sandales Timberland - Été Confort",
      price: 35000,
      image: timberlandSandals,
      rating: 4,
      reviewCount: 10,
      inStock: true,
      category: "homme",
    },
  ];

  const filters = [
    { id: "tous", label: "Tous" },
    { id: "homme", label: "Homme" },
    { id: "femme", label: "Femme" },
    { id: "enfant", label: "Enfant" },
  ];

  const filteredProducts = activeFilter === "tous" 
    ? products 
    : products.filter(p => p.category === activeFilter);

  return (
    <div className="min-h-screen flex flex-col">
      <PromoBanner />
      <Header />
      
      <main className="flex-1">
        <div className="bg-muted py-8">
          <div className="container px-4">
            <h1 className="text-3xl md:text-4xl font-bold mb-2">Chaussures</h1>
            <p className="text-muted-foreground">
              Découvrez notre collection de chaussures pour homme, femme et enfant
            </p>
          </div>
        </div>

        <div className="container px-4 py-8">
          <div className="flex flex-wrap items-center gap-4 mb-8">
            <Button variant="outline" size="sm">
              <Filter className="h-4 w-4 mr-2" />
              Filtres
            </Button>
            
            <div className="flex flex-wrap gap-2">
              {filters.map((filter) => (
                <Button
                  key={filter.id}
                  variant={activeFilter === filter.id ? "default" : "outline"}
                  size="sm"
                  onClick={() => setActiveFilter(filter.id)}
                >
                  {filter.label}
                </Button>
              ))}
            </div>

            <div className="ml-auto text-sm text-muted-foreground">
              {filteredProducts.length} produit{filteredProducts.length > 1 ? 's' : ''}
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {filteredProducts.map((product) => (
              <ProductCard key={product.id} {...product} />
            ))}
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Chaussures;
