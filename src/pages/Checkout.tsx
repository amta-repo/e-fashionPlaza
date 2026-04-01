import { Header } from "@/components/Header";
import { PromoBanner } from "@/components/PromoBanner";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Shield, Trash2, Plus, Minus } from "lucide-react";
import { useState, useEffect } from "react";
import { useCart } from "@/contexts/CartContext";
import { useAuth } from "@/contexts/AuthContext";
import { useToast } from "@/hooks/use-toast";

declare global {
  interface Window {
    openKkiapayWidget: (config: any) => void;
    addKkiapayListener: (event: string, callback: (data: any) => void) => void;
    removeKkiapayListener: (event: string, callback: (data: any) => void) => void;
  }
}

const Checkout = () => {
  const { items, totalPrice, totalItems, removeFromCart, updateQuantity, clearCart } = useCart();
  const { user } = useAuth();
  const { toast } = useToast();
  const [contactMethod, setContactMethod] = useState("whatsapp");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");
  const [city, setCity] = useState("");
  const [kkiapayLoaded, setKkiapayLoaded] = useState(false);

  const deliveryFee = totalItems > 1 ? 0 : 2000;
  const total = totalPrice + deliveryFee;

  // Load KKiapay script
  useEffect(() => {
    if (document.getElementById("kkiapay-script")) {
      setKkiapayLoaded(true);
      return;
    }
    const script = document.createElement("script");
    script.id = "kkiapay-script";
    script.src = "https://cdn.kkiapay.me/k.js";
    script.async = true;
    script.onload = () => setKkiapayLoaded(true);
    document.body.appendChild(script);
  }, []);

  const handlePayment = () => {
    if (!phone || !address || !city) {
      toast({ title: "Erreur", description: "Veuillez remplir tous les champs obligatoires", variant: "destructive" });
      return;
    }
    if (items.length === 0) {
      toast({ title: "Panier vide", description: "Ajoutez des produits avant de payer", variant: "destructive" });
      return;
    }
    if (!kkiapayLoaded || !window.openKkiapayWidget) {
      toast({ title: "Erreur", description: "Le système de paiement n'est pas encore chargé. Réessayez.", variant: "destructive" });
      return;
    }

    // Open KKiapay widget - replace YOUR_PUBLIC_KEY with actual key
    window.openKkiapayWidget({
      amount: total,
      position: "center",
      callback: "",
      data: "",
      theme: "#E8662A",
      sandbox: true,
      key: "54ca6b202dad11f1bb44c16610bd7bf7",
    });

    const onSuccess = (response: any) => {
      toast({ title: "Paiement réussi ! 🎉", description: `Référence: ${response.transactionId}` });
      clearCart();
      window.removeKkiapayListener("success", onSuccess);
    };

    const onFailed = () => {
      toast({ title: "Paiement échoué", description: "Veuillez réessayer", variant: "destructive" });
      window.removeKkiapayListener("failed", onFailed);
    };

    window.addKkiapayListener("success", onSuccess);
    window.addKkiapayListener("failed", onFailed);
  };

  return (
    <div className="min-h-screen flex flex-col">
      <PromoBanner />
      <Header />
      
      <main className="flex-1 bg-muted">
        <div className="container px-4 py-8">
          <h1 className="text-3xl font-bold mb-8">Paiement</h1>

          {items.length === 0 ? (
            <Card className="text-center py-16">
              <CardContent>
                <p className="text-xl text-muted-foreground mb-4">Votre panier est vide</p>
                <Button asChild><a href="/chaussures">Continuer vos achats</a></Button>
              </CardContent>
            </Card>
          ) : (
            <div className="grid lg:grid-cols-3 gap-8">
              <div className="lg:col-span-2 space-y-6">
                {/* Cart Items */}
                <Card>
                  <CardHeader>
                    <CardTitle>Votre panier ({totalItems} article{totalItems > 1 ? "s" : ""})</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    {items.map((item) => (
                      <div key={item.id} className="flex items-center gap-4 p-3 border rounded-lg">
                        <img src={item.image} alt={item.name} className="w-16 h-16 object-cover rounded" />
                        <div className="flex-1">
                          <h4 className="font-medium text-sm">{item.name}</h4>
                          <p className="text-sm font-bold">{item.price.toLocaleString()} FCFA</p>
                        </div>
                        <div className="flex items-center gap-2">
                          <Button size="icon" variant="outline" className="h-7 w-7" onClick={() => updateQuantity(item.id, item.quantity - 1)}>
                            <Minus className="h-3 w-3" />
                          </Button>
                          <span className="w-6 text-center text-sm">{item.quantity}</span>
                          <Button size="icon" variant="outline" className="h-7 w-7" onClick={() => updateQuantity(item.id, item.quantity + 1)}>
                            <Plus className="h-3 w-3" />
                          </Button>
                        </div>
                        <Button size="icon" variant="ghost" onClick={() => removeFromCart(item.id)}>
                          <Trash2 className="h-4 w-4 text-destructive" />
                        </Button>
                      </div>
                    ))}
                  </CardContent>
                </Card>

                {/* Customer Information */}
                <Card>
                  <CardHeader>
                    <CardTitle>Informations de livraison</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div>
                      <Label htmlFor="phone">Téléphone (WhatsApp)</Label>
                      <Input id="phone" type="tel" placeholder="+229 XX XX XX XX" value={phone} onChange={(e) => setPhone(e.target.value)} required />
                    </div>
                    <div>
                      <Label htmlFor="address">Adresse de livraison</Label>
                      <Input id="address" placeholder="Adresse complète" value={address} onChange={(e) => setAddress(e.target.value)} required />
                    </div>
                    <div>
                      <Label htmlFor="city">Ville / Département</Label>
                      <Input id="city" placeholder="Ex: Cotonou, Littoral" value={city} onChange={(e) => setCity(e.target.value)} required />
                    </div>
                  </CardContent>
                </Card>

                {/* Confirmation Method */}
                <Card>
                  <CardHeader>
                    <CardTitle>Recevoir la confirmation par</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <RadioGroup value={contactMethod} onValueChange={setContactMethod}>
                      <div className="flex items-center space-x-3 p-4 border rounded-lg hover:bg-muted cursor-pointer">
                        <RadioGroupItem value="whatsapp" id="whatsapp" />
                        <Label htmlFor="whatsapp" className="cursor-pointer flex-1">
                          WhatsApp <Badge className="ml-2 bg-green-500">Recommandé</Badge>
                        </Label>
                      </div>
                      <div className="flex items-center space-x-3 p-4 border rounded-lg hover:bg-muted cursor-pointer">
                        <RadioGroupItem value="sms" id="sms" />
                        <Label htmlFor="sms" className="cursor-pointer flex-1">SMS</Label>
                      </div>
                    </RadioGroup>
                  </CardContent>
                </Card>
              </div>

              {/* Order Summary */}
              <div>
                <Card className="sticky top-20">
                  <CardHeader>
                    <CardTitle>Résumé de la commande</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    {items.map((item) => (
                      <div key={item.id} className="flex justify-between text-sm">
                        <span>{item.name} x{item.quantity}</span>
                        <span className="font-medium">{(item.price * item.quantity).toLocaleString()} FCFA</span>
                      </div>
                    ))}

                    <div className="border-t pt-4 space-y-2">
                      <div className="flex justify-between text-sm">
                        <span>Sous-total</span>
                        <span>{totalPrice.toLocaleString()} FCFA</span>
                      </div>
                      <div className="flex justify-between text-sm">
                        <span>Livraison</span>
                        {deliveryFee === 0 ? (
                          <span className="text-green-600 font-medium">GRATUIT</span>
                        ) : (
                          <span>{deliveryFee.toLocaleString()} FCFA</span>
                        )}
                      </div>
                    </div>

                    {deliveryFee === 0 && (
                      <div className="bg-green-50 dark:bg-green-950 p-3 rounded-lg text-sm text-green-700 dark:text-green-400">
                        🎉 Livraison gratuite appliquée !
                      </div>
                    )}

                    <div className="border-t pt-4">
                      <div className="flex justify-between font-bold text-lg">
                        <span>Total</span>
                        <span>{total.toLocaleString()} FCFA</span>
                      </div>
                    </div>

                    <Button className="w-full" size="lg" onClick={handlePayment}>
                      Payer avec KKiapay
                    </Button>

                    <p className="text-xs text-center text-muted-foreground">
                      MTN MoMo • Moov Money • Mastercard • Visa
                    </p>

                    <div className="flex items-center justify-center gap-2 text-xs text-muted-foreground pt-2">
                      <Shield className="h-4 w-4 text-trust" />
                      <span>Paiement 100% sécurisé via KKiapay</span>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          )}
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Checkout;
