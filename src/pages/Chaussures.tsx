import { Header } from "@/components/Header";
import { PromoBanner } from "@/components/PromoBanner";
import { Footer } from "@/components/Footer";
import { ProductCard } from "@/components/ProductCard";
import { Button } from "@/components/ui/button";
import { Filter } from "lucide-react";
import { useState } from "react";
import { allProducts } from "@/data/products";

const Chaussures = () => {
  const [activeFilter, setActiveFilter] = useState("tous");

  const products = allProducts.filter((p) => p.category === "chaussures");

  const filters = [
    { id: "tous", label: "Tous" },
    { id: "mocassins", label: "Mocassins" },
    { id: "baskets", label: "Baskets" },
    { id: "sandales", label: "Sandales" },
    { id: "bottines", label: "Bottines" },
  ];

  const filteredProducts = activeFilter === "tous"
    ? products
    : products.filter((p) => p.name.toLowerCase().includes(activeFilter));

  return (
    <div className="min-h-screen flex flex-col">
      <PromoBanner />
      <Header />
      
      <main className="flex-1">
        <div className="bg-muted py-8">
          <div className="container px-4">
            <h1 className="text-3xl md:text-4xl font-bold mb-2">Chaussures</h1>
            <p className="text-muted-foreground">
              Découvrez notre collection de chaussures de marque — de 18 000 à 25 000 FCFA
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
