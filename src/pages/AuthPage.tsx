import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { SEOHead } from "@/components/SEOHead";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { useAuth } from "@/contexts/AuthContext";
import { useToast } from "@/hooks/use-toast";
import { Eye, EyeOff, Mail, Lock, User } from "lucide-react";

const AuthPage = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [fullName, setFullName] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const { signIn, signUp } = useAuth();
  const { toast } = useToast();
  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    if (isLogin) {
      const { error } = await signIn(email, password);
      if (error) { toast({ title: "Erreur de connexion", description: error.message, variant: "destructive" }); }
      else { toast({ title: "Bienvenue !", description: "Connexion réussie" }); navigate("/"); }
    } else {
      if (password.length < 6) { toast({ title: "Erreur", description: "Le mot de passe doit contenir au moins 6 caractères", variant: "destructive" }); setLoading(false); return; }
      const { error } = await signUp(email, password, fullName);
      if (error) { toast({ title: "Erreur d'inscription", description: error.message, variant: "destructive" }); }
      else { toast({ title: "Inscription réussie !", description: "Vérifiez votre email pour confirmer votre compte." }); }
    }
    setLoading(false);
  };

  return (
    <div className="min-h-screen flex flex-col">
      <SEOHead title="Connexion — E-Fashion Plaza" description="Connectez-vous ou créez un compte E-Fashion Plaza pour commander vos articles préférés au Bénin." canonical="https://efashionplaza.com/compte" />
      <Header />
      <main className="flex-1 flex items-center justify-center bg-muted py-12 px-4">
        <Card className="w-full max-w-md">
          <CardHeader className="text-center">
            <CardTitle className="text-2xl">{isLogin ? "Connexion" : "Créer un compte"}</CardTitle>
            <CardDescription>{isLogin ? "Connectez-vous à votre compte E-Fashion Plaza" : "Rejoignez E-Fashion Plaza dès aujourd'hui"}</CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-4">
              {!isLogin && (
                <div><Label htmlFor="fullName">Nom complet</Label><div className="relative"><User className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" /><Input id="fullName" placeholder="Jean Dupont" value={fullName} onChange={(e) => setFullName(e.target.value)} className="pl-10" required /></div></div>
              )}
              <div><Label htmlFor="email">Email</Label><div className="relative"><Mail className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" /><Input id="email" type="email" placeholder="email@exemple.com" value={email} onChange={(e) => setEmail(e.target.value)} className="pl-10" required /></div></div>
              <div><Label htmlFor="password">Mot de passe</Label><div className="relative"><Lock className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" /><Input id="password" type={showPassword ? "text" : "password"} placeholder="••••••••" value={password} onChange={(e) => setPassword(e.target.value)} className="pl-10 pr-10" required /><button type="button" onClick={() => setShowPassword(!showPassword)} className="absolute right-3 top-3 text-muted-foreground hover:text-foreground">{showPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}</button></div></div>
              <Button type="submit" className="w-full" size="lg" disabled={loading}>{loading ? "Chargement..." : isLogin ? "Se connecter" : "S'inscrire"}</Button>
            </form>
            <div className="mt-6 text-center text-sm">
              <span className="text-muted-foreground">{isLogin ? "Pas encore de compte ?" : "Déjà un compte ?"}</span>{" "}
              <button onClick={() => setIsLogin(!isLogin)} className="text-primary font-medium hover:underline">{isLogin ? "S'inscrire" : "Se connecter"}</button>
            </div>
          </CardContent>
        </Card>
      </main>
      <Footer />
    </div>
  );
};

export default AuthPage;
