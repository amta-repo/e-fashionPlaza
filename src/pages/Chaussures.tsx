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
      category: "homme",
    },
    {
      id: "6",
      name: "Chaussures en Cuir Marron - Style Affaires",
      price: 52000,
      image: brownLeatherShoe,
      rating: 5,
      reviewCount: 14,
      inStock: true,
      category: "homme",
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
      category: "homme",
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
      category: "homme",
    },
    {
      id: "9",
      name: "Sandales Palm - Confort Été",
      price: 32000,
      image: palmSlippers,
      rating: 4,
      reviewCount: 16,
      inStock: true,
      category: "homme",
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
      category: "homme",
    },
    {
      id: "11",
      name: "Baskets Timberland Bicolores - Design Moderne",
      price: 47000,
      image: timberlandBeigeSneakers,
      rating: 4,
      reviewCount: 13,
      inStock: true,
      category: "homme",
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
      category: "homme",
    },
    {
      id: "13",
      name: "Reebok Classic Blanches - Style Intemporel",
      price: 41000,
      image: reebokWhiteSneakers,
      rating: 4,
      reviewCount: 19,
      inStock: true,
      category: "homme",
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
