import { Header } from "@/components/Header";
import { PromoBanner } from "@/components/PromoBanner";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Shield, Smartphone } from "lucide-react";
import { useState } from "react";
import mtnLogo from "@/assets/logos/mtn-logo.png";
import moovLogo from "@/assets/logos/moov-logo.png";
import celtiisLogo from "@/assets/logos/celtiis-logo.png";

const Checkout = () => {
  const [paymentMethod, setPaymentMethod] = useState("momo");
  const [contactMethod, setContactMethod] = useState("whatsapp");

  const cartItems = [
    {
      id: "1",
      name: "Mocassins Burberry Premium",
      price: 45000,
      quantity: 1,
    },
  ];

  const subtotal = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);
  const freeDelivery = cartItems.length > 1;
  const deliveryFee = freeDelivery ? 0 : 2000;
  const total = subtotal + deliveryFee;

  return (
    <div className="min-h-screen flex flex-col">
      <PromoBanner />
      <Header />
      
      <main className="flex-1 bg-muted">
        <div className="container px-4 py-8">
          <h1 className="text-3xl font-bold mb-8">Paiement</h1>

          <div className="grid lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2 space-y-6">
              {/* Customer Information */}
              <Card>
                <CardHeader>
                  <CardTitle>Informations de livraison</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="firstName">Prénom</Label>
                      <Input id="firstName" placeholder="Jean" required />
                    </div>
                    <div>
                      <Label htmlFor="lastName">Nom</Label>
                      <Input id="lastName" placeholder="Dupont" required />
                    </div>
                  </div>

                  <div>
                    <Label htmlFor="phone">Téléphone (WhatsApp)</Label>
                    <Input id="phone" type="tel" placeholder="+229 XX XX XX XX" required />
                  </div>

                  <div>
                    <Label htmlFor="email">Email</Label>
                    <Input id="email" type="email" placeholder="email@exemple.com" required />
                  </div>

                  <div>
                    <Label htmlFor="address">Adresse de livraison</Label>
                    <Input id="address" placeholder="Adresse complète" required />
                  </div>

                  <div>
                    <Label htmlFor="city">Ville / Département</Label>
                    <Input id="city" placeholder="Ex: Cotonou, Littoral" required />
                  </div>
                </CardContent>
              </Card>

              {/* Payment Method */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Shield className="h-5 w-5 text-trust" />
                    Mode de paiement sécurisé
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <RadioGroup value={paymentMethod} onValueChange={setPaymentMethod}>
                    <div className="flex items-center space-x-3 p-4 border rounded-lg hover:bg-muted cursor-pointer">
                      <RadioGroupItem value="momo" id="momo" />
                      <Label htmlFor="momo" className="flex items-center gap-3 cursor-pointer flex-1">
                        <img src={mtnLogo} alt="MTN MoMo" className="h-8 w-auto object-contain" />
                        <Badge className="ml-auto bg-trust">Populaire</Badge>
                      </Label>
                    </div>

                    <div className="flex items-center space-x-3 p-4 border rounded-lg hover:bg-muted cursor-pointer">
                      <RadioGroupItem value="moov" id="moov" />
                      <Label htmlFor="moov" className="flex items-center gap-3 cursor-pointer flex-1">
                        <img src={moovLogo} alt="Moov Money" className="h-8 w-auto object-contain" />
                      </Label>
                    </div>

                    <div className="flex items-center space-x-3 p-4 border rounded-lg hover:bg-muted cursor-pointer">
                      <RadioGroupItem value="celtiis" id="celtiis" />
                      <Label htmlFor="celtiis" className="flex items-center gap-3 cursor-pointer flex-1">
                        <img src={celtiisLogo} alt="Celtiis Money" className="h-8 w-auto object-contain" />
                      </Label>
                    </div>
                  </RadioGroup>

                  <div className="mt-4">
                    <Label htmlFor="momoNumber">Numéro Mobile Money</Label>
                    <Input id="momoNumber" type="tel" placeholder="+229 XX XX XX XX" required />
                  </div>
                </CardContent>
              </Card>

              {/* Order Confirmation Method */}
              <Card>
                <CardHeader>
                  <CardTitle>Recevoir la confirmation par</CardTitle>
                </CardHeader>
                <CardContent>
                  <RadioGroup value={contactMethod} onValueChange={setContactMethod}>
                    <div className="flex items-center space-x-3 p-4 border rounded-lg hover:bg-muted cursor-pointer">
                      <RadioGroupItem value="whatsapp" id="whatsapp" />
                      <Label htmlFor="whatsapp" className="cursor-pointer flex-1">
                        WhatsApp
                        <Badge className="ml-2 bg-green-500">Recommandé</Badge>
                      </Label>
                    </div>
                    <div className="flex items-center space-x-3 p-4 border rounded-lg hover:bg-muted cursor-pointer">
                      <RadioGroupItem value="sms" id="sms" />
                      <Label htmlFor="sms" className="cursor-pointer flex-1">SMS</Label>
                    </div>
                    <div className="flex items-center space-x-3 p-4 border rounded-lg hover:bg-muted cursor-pointer">
                      <RadioGroupItem value="email" id="email-method" />
                      <Label htmlFor="email-method" className="cursor-pointer flex-1">Email</Label>
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
                  {cartItems.map((item) => (
                    <div key={item.id} className="flex justify-between text-sm">
                      <span>{item.name} x{item.quantity}</span>
                      <span className="font-medium">{item.price.toLocaleString()} FCFA</span>
                    </div>
                  ))}

                  <div className="border-t pt-4 space-y-2">
                    <div className="flex justify-between text-sm">
                      <span>Sous-total</span>
                      <span>{subtotal.toLocaleString()} FCFA</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span>Livraison</span>
                      {freeDelivery ? (
                        <span className="text-green-600 font-medium">GRATUIT</span>
                      ) : (
                        <span>{deliveryFee.toLocaleString()} FCFA</span>
                      )}
                    </div>
                  </div>

                  {freeDelivery && (
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

                  <Button className="w-full" size="lg">
                    Confirmer la commande
                  </Button>

                  <div className="flex items-center justify-center gap-2 text-xs text-muted-foreground pt-2">
                    <Shield className="h-4 w-4 text-trust" />
                    <span>Paiement 100% sécurisé</span>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Checkout;
