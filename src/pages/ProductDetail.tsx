import { Header } from "@/components/Header";
import { PromoBanner } from "@/components/PromoBanner";
import { Footer } from "@/components/Footer";
import { ProductCard } from "@/components/ProductCard";
import { SEOHead } from "@/components/SEOHead";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Star, ShoppingCart, Minus, Plus, Truck, Shield, RotateCcw, Zap } from "lucide-react";
import { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useCart } from "@/contexts/CartContext";
import { allProducts, getProductById } from "@/data/products";

const ProductDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [quantity, setQuantity] = useState(1);
  const { addToCart } = useCart();

  const product = getProductById(id || "1");
  if (!product) return null;

  const relatedProducts = allProducts.filter((p) => p.id !== product.id && p.category === product.category).slice(0, 3);

  const handleAddToCart = () => {
    for (let i = 0; i < quantity; i++) {
      addToCart({ id: product.id, name: product.name, price: product.price, image: product.image });
    }
  };

  const handleBuyNow = () => {
    handleAddToCart();
    navigate("/panier");
  };

  const productJsonLd = {
    "@context": "https://schema.org",
    "@type": "Product",
    name: product.name,
    image: product.image,
    description: product.description,
    offers: {
      "@type": "Offer",
      price: product.price,
      priceCurrency: "XOF",
      availability: product.inStock ? "https://schema.org/InStock" : "https://schema.org/OutOfStock",
      seller: { "@type": "Organization", name: "E-Fashion Plaza" },
    },
    aggregateRating: product.rating ? {
      "@type": "AggregateRating",
      ratingValue: product.rating,
      reviewCount: product.reviewCount || 1,
    } : undefined,
  };

  return (
    <div className="min-h-screen flex flex-col">
      <SEOHead
        title={`${product.name} — Acheter au Bénin`}
        description={`${product.name} à ${product.price.toLocaleString()} FCFA. ${product.description?.slice(0, 100) || "Livraison gratuite à Cotonou."}`}
        canonical={`https://efashionplaza.com/produit/${product.id}`}
        ogImage={product.image}
        ogType="product"
        keywords={`${product.name}, ${product.category} Bénin, acheter ${product.category} Cotonou`}
        jsonLd={productJsonLd}
      />
      <PromoBanner />
      <Header />
      <main className="flex-1">
        <div className="container px-4 py-8">
          <div className="grid md:grid-cols-2 gap-8 lg:gap-12 mb-16">
            <div className="space-y-4">
              <div className="aspect-square bg-muted rounded-lg overflow-hidden">
                <img src={product.image} alt={product.name} className="w-full h-full object-cover" />
              </div>
            </div>
            <div className="space-y-6">
              <div>
                <h1 className="text-3xl md:text-4xl font-bold mb-3">{product.name}</h1>
                <div className="flex items-center gap-2 mb-4">
                  <div className="flex items-center gap-1">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className={`h-5 w-5 ${i < product.rating ? "fill-gold text-gold" : "text-muted-foreground"}`} />
                    ))}
                  </div>
                  <span className="text-sm text-muted-foreground">({product.reviewCount} avis)</span>
                </div>
                <div className="flex items-center gap-3 mb-4">
                  <span className="text-3xl font-bold">{product.price.toLocaleString()} FCFA</span>
                  {product.originalPrice && (
                    <>
                      <span className="text-xl text-muted-foreground line-through">{product.originalPrice.toLocaleString()} FCFA</span>
                      <Badge className="bg-destructive">-{product.discount}%</Badge>
                    </>
                  )}
                </div>
                {product.inStock ? (
                  <Badge variant="outline" className="border-green-500 text-green-600">En stock</Badge>
                ) : (
                  <Badge variant="outline" className="border-destructive text-destructive">Épuisé</Badge>
                )}
              </div>
              <div><h3 className="font-semibold mb-2">Description</h3><p className="text-muted-foreground">{product.description}</p></div>
              <div>
                <h3 className="font-semibold mb-3">Taille</h3>
                <div className="flex flex-wrap gap-2">{product.sizes.map((size) => (<Button key={size} variant="outline" size="sm">{size}</Button>))}</div>
              </div>
              <div>
                <h3 className="font-semibold mb-3">Quantité</h3>
                <div className="flex items-center gap-4">
                  <div className="flex items-center border rounded-lg">
                    <Button variant="ghost" size="icon" onClick={() => setQuantity(Math.max(1, quantity - 1))}><Minus className="h-4 w-4" /></Button>
                    <span className="w-12 text-center font-semibold">{quantity}</span>
                    <Button variant="ghost" size="icon" onClick={() => setQuantity(quantity + 1)}><Plus className="h-4 w-4" /></Button>
                  </div>
                </div>
              </div>
              <div className="flex flex-col sm:flex-row gap-3">
                <Button size="lg" className="flex-1" disabled={!product.inStock} onClick={handleAddToCart}>
                  <ShoppingCart className="h-5 w-5 mr-2" />Ajouter au panier
                </Button>
                <Button size="lg" variant="secondary" className="flex-1 bg-accent text-accent-foreground hover:bg-accent/90" disabled={!product.inStock} onClick={handleBuyNow}>
                  <Zap className="h-5 w-5 mr-2" />Acheter maintenant
                </Button>
              </div>
              <div className="space-y-3 pt-6 border-t">
                <div className="flex items-center gap-3 text-sm"><Truck className="h-5 w-5 text-primary" /><span>Livraison gratuite dans l'Atlantique & Littoral</span></div>
                <div className="flex items-center gap-3 text-sm"><Shield className="h-5 w-5 text-primary" /><span>Paiement sécurisé MoMo & Mastercard</span></div>
                <div className="flex items-center gap-3 text-sm"><RotateCcw className="h-5 w-5 text-primary" /><span>Retours acceptés sous 7 jours</span></div>
              </div>
            </div>
          </div>
          <section>
            <h2 className="text-2xl font-bold mb-6">Produits Similaires</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {relatedProducts.map((p) => (<ProductCard key={p.id} {...p} />))}
            </div>
          </section>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default ProductDetail;
