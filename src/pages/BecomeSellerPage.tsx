import { Header } from "@/components/Header";
import { PromoBanner } from "@/components/PromoBanner";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Store, TrendingUp, Shield, Smartphone } from "lucide-react";

const BecomeSellerPage = () => {
  const benefits = [
    {
      icon: Store,
      title: "Vitrine en ligne",
      description: "Créez votre boutique en ligne et touchez des milliers de clients",
    },
    {
      icon: Smartphone,
      title: "Paiement Mobile Money",
      description: "Acceptez les paiements via MTN MoMo, Moov et Celtiis",
    },
    {
      icon: TrendingUp,
      title: "Augmentez vos ventes",
      description: "Profitez de notre trafic pour développer votre activité",
    },
    {
      icon: Shield,
      title: "Transactions sécurisées",
      description: "Tous les paiements sont sécurisés et garantis",
    },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <PromoBanner />
      <Header />
      
      <main className="flex-1">
        {/* Hero Section */}
        <section className="bg-gradient-hero text-primary-foreground py-16">
          <div className="container px-4 text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Développez votre activité avec AMTECH-BJ
            </h1>
            <p className="text-lg md:text-xl max-w-2xl mx-auto opacity-90">
              Rejoignez notre plateforme et vendez vos produits de beauté et cosmétiques 
              à des milliers de clients au Bénin
            </p>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-16">
          <div className="container px-4">
            <h2 className="text-3xl font-bold text-center mb-12">
              Pourquoi devenir vendeur ?
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {benefits.map((benefit, index) => (
                <Card key={index}>
                  <CardHeader>
                    <div className="bg-primary/10 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                      <benefit.icon className="h-6 w-6 text-primary" />
                    </div>
                    <CardTitle className="text-lg">{benefit.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">{benefit.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Application Form */}
        <section className="py-16 bg-muted">
          <div className="container px-4">
            <div className="max-w-2xl mx-auto">
              <Card>
                <CardHeader>
                  <CardTitle className="text-2xl">Formulaire d'inscription vendeur</CardTitle>
                  <p className="text-muted-foreground">
                    Remplissez ce formulaire et notre équipe vous contactera dans les 48h
                  </p>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="sellerFirstName">Prénom</Label>
                      <Input id="sellerFirstName" placeholder="Votre prénom" required />
                    </div>
                    <div>
                      <Label htmlFor="sellerLastName">Nom</Label>
                      <Input id="sellerLastName" placeholder="Votre nom" required />
                    </div>
                  </div>

                  <div>
                    <Label htmlFor="sellerEmail">Email</Label>
                    <Input id="sellerEmail" type="email" placeholder="email@exemple.com" required />
                  </div>

                  <div>
                    <Label htmlFor="sellerPhone">Téléphone (WhatsApp)</Label>
                    <Input id="sellerPhone" type="tel" placeholder="+229 XX XX XX XX" required />
                  </div>

                  <div>
                    <Label htmlFor="businessName">Nom de votre entreprise</Label>
                    <Input id="businessName" placeholder="Nom de votre boutique" required />
                  </div>

                  <div>
                    <Label htmlFor="productCategory">Catégorie de produits</Label>
                    <Input 
                      id="productCategory" 
                      placeholder="Ex: Cosmétiques, Maquillage, Soins de la peau..." 
                      required 
                    />
                  </div>

                  <div>
                    <Label htmlFor="description">Description de votre activité</Label>
                    <Textarea
                      id="description"
                      placeholder="Parlez-nous de vos produits et de votre expérience..."
                      rows={4}
                      required
                    />
                  </div>

                  <div>
                    <Label htmlFor="website">Site web ou réseaux sociaux (optionnel)</Label>
                    <Input 
                      id="website" 
                      placeholder="https://..." 
                    />
                  </div>

                  <Button className="w-full" size="lg">
                    Envoyer ma candidature
                  </Button>

                  <p className="text-sm text-center text-muted-foreground">
                    En soumettant ce formulaire, vous acceptez nos conditions d'utilisation
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-16">
          <div className="container px-4">
            <div className="max-w-3xl mx-auto">
              <h2 className="text-3xl font-bold text-center mb-12">
                Questions fréquentes
              </h2>
              <div className="space-y-6">
                <Card>
                  <CardHeader>
                    <CardTitle className="text-lg">Quels sont les frais ?</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">
                      Nous prélevons une commission de 10% sur chaque vente réalisée. 
                      Pas de frais d'inscription ni de frais mensuels.
                    </p>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle className="text-lg">Comment fonctionne la livraison ?</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">
                      Vous gérez vos propres livraisons ou utilisez nos partenaires logistiques. 
                      Nous offrons la livraison gratuite dans certaines zones pour augmenter vos ventes.
                    </p>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle className="text-lg">Quand suis-je payé ?</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">
                      Les paiements sont effectués chaque semaine via Mobile Money 
                      après validation de la livraison par le client.
                    </p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default BecomeSellerPage;
