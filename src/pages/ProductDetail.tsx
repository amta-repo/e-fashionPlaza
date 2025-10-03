import { Header } from "@/components/Header";
import { PromoBanner } from "@/components/PromoBanner";
import { Footer } from "@/components/Footer";
import { ProductCard } from "@/components/ProductCard";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Star, ShoppingCart, Minus, Plus, Truck, Shield, RotateCcw } from "lucide-react";
import { useState } from "react";
import { useParams } from "react-router-dom";

import timberlandLoafers from "@/assets/products/timberland-loafers.jpeg";
import navyBoots from "@/assets/products/navy-boots.jpeg";
import lecoqSneakers from "@/assets/products/lecoq-sneakers.jpeg";
import timberlandSandals from "@/assets/products/timberland-sandals.jpeg";

const ProductDetail = () => {
  const { id } = useParams();
  const [quantity, setQuantity] = useState(1);

  // Mock product data - in production, fetch from API
  const product = {
    id: "1",
    name: "Mocassins Burberry Premium - Confort & Élégance",
    price: 45000,
    originalPrice: 55000,
    discount: 18,
    image: timberlandLoafers,
    rating: 5,
    reviewCount: 12,
    inStock: true,
    description: "Des mocassins élégants de la marque Burberry, alliant style et confort. Parfaits pour un usage quotidien ou des occasions spéciales. Semelle blanche antidérapante et design sophistiqué.",
    sizes: ["39", "40", "41", "42", "43", "44"],
    colors: ["Noir"],
  };

  const relatedProducts = [
    {
      id: "2",
      name: "Bottines Classiques Navy",
      price: 38000,
      image: navyBoots,
      rating: 4,
      reviewCount: 8,
      inStock: true,
    },
    {
      id: "3",
      name: "Baskets Le Coq Sportif",
      price: 42000,
      image: lecoqSneakers,
      rating: 5,
      reviewCount: 15,
      inStock: true,
    },
    {
      id: "4",
      name: "Sandales Timberland",
      price: 35000,
      image: timberlandSandals,
      rating: 4,
      reviewCount: 10,
      inStock: true,
    },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <PromoBanner />
      <Header />
      
      <main className="flex-1">
        <div className="container px-4 py-8">
          <div className="grid md:grid-cols-2 gap-8 lg:gap-12 mb-16">
            {/* Product Image */}
            <div className="space-y-4">
              <div className="aspect-square bg-muted rounded-lg overflow-hidden">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            {/* Product Info */}
            <div className="space-y-6">
              <div>
                <h1 className="text-3xl md:text-4xl font-bold mb-3">{product.name}</h1>
                
                <div className="flex items-center gap-2 mb-4">
                  <div className="flex items-center gap-1">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className={`h-5 w-5 ${
                          i < product.rating ? "fill-gold text-gold" : "text-muted-foreground"
                        }`}
                      />
                    ))}
                  </div>
                  <span className="text-sm text-muted-foreground">
                    ({product.reviewCount} avis)
                  </span>
                </div>

                <div className="flex items-center gap-3 mb-4">
                  <span className="text-3xl font-bold">{product.price.toLocaleString()} FCFA</span>
                  {product.originalPrice && (
                    <>
                      <span className="text-xl text-muted-foreground line-through">
                        {product.originalPrice.toLocaleString()} FCFA
                      </span>
                      <Badge className="bg-destructive">-{product.discount}%</Badge>
                    </>
                  )}
                </div>

                {product.inStock ? (
                  <Badge variant="outline" className="border-green-500 text-green-600">
                    En stock
                  </Badge>
                ) : (
                  <Badge variant="outline" className="border-destructive text-destructive">
                    Épuisé
                  </Badge>
                )}
              </div>

              <div>
                <h3 className="font-semibold mb-2">Description</h3>
                <p className="text-muted-foreground">{product.description}</p>
              </div>

              <div>
                <h3 className="font-semibold mb-3">Taille</h3>
                <div className="flex flex-wrap gap-2">
                  {product.sizes.map((size) => (
                    <Button key={size} variant="outline" size="sm">
                      {size}
                    </Button>
                  ))}
                </div>
              </div>

              <div>
                <h3 className="font-semibold mb-3">Quantité</h3>
                <div className="flex items-center gap-4">
                  <div className="flex items-center border rounded-lg">
                    <Button
                      variant="ghost"
                      size="icon"
                      onClick={() => setQuantity(Math.max(1, quantity - 1))}
                    >
                      <Minus className="h-4 w-4" />
                    </Button>
                    <span className="w-12 text-center font-semibold">{quantity}</span>
                    <Button
                      variant="ghost"
                      size="icon"
                      onClick={() => setQuantity(quantity + 1)}
                    >
                      <Plus className="h-4 w-4" />
                    </Button>
                  </div>
                  <Button size="lg" className="flex-1" disabled={!product.inStock}>
                    <ShoppingCart className="h-5 w-5 mr-2" />
                    Ajouter au panier
                  </Button>
                </div>
              </div>

              <div className="space-y-3 pt-6 border-t">
                <div className="flex items-center gap-3 text-sm">
                  <Truck className="h-5 w-5 text-primary" />
                  <span>Livraison gratuite dans l'Atlantique & Littoral</span>
                </div>
                <div className="flex items-center gap-3 text-sm">
                  <Shield className="h-5 w-5 text-primary" />
                  <span>Paiement sécurisé Mobile Money</span>
                </div>
                <div className="flex items-center gap-3 text-sm">
                  <RotateCcw className="h-5 w-5 text-primary" />
                  <span>Retours acceptés sous 7 jours</span>
                </div>
              </div>
            </div>
          </div>

          {/* Related Products */}
          <section>
            <h2 className="text-2xl font-bold mb-6">Produits Similaires</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {relatedProducts.map((product) => (
                <ProductCard key={product.id} {...product} />
              ))}
            </div>
          </section>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default ProductDetail;
