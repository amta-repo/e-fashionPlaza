import { Header } from "@/components/Header";
import { PromoBanner } from "@/components/PromoBanner";
import { Footer } from "@/components/Footer";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar } from "lucide-react";
import { Link } from "react-router-dom";

const Blog = () => {
  const articles = [
    {
      id: 1,
      title: "Comment choisir les bonnes chaussures pour l'été au Bénin",
      excerpt: "Découvrez nos conseils pour sélectionner des chaussures confortables et stylées adaptées au climat tropical...",
      category: "Guide d'achat",
      date: "15 Décembre 2024",
      image: "https://images.unsplash.com/photo-1460353581641-37baddab0fa2?w=800&q=80",
    },
    {
      id: 2,
      title: "Les tendances mode 2025 : Ce qu'il faut savoir",
      excerpt: "Restez à la pointe de la mode avec notre guide complet des tendances vestimentaires pour 2025...",
      category: "Tendances",
      date: "10 Décembre 2024",
      image: "https://images.unsplash.com/photo-1441984904996-e0b6ba687e04?w=800&q=80",
    },
    {
      id: 3,
      title: "Entretien des chaussures en cuir : Guide complet",
      excerpt: "Apprenez à prendre soin de vos chaussures en cuir pour les garder belles plus longtemps...",
      category: "Entretien",
      date: "5 Décembre 2024",
      image: "https://images.unsplash.com/photo-1449505278894-297fdb3edbc1?w=800&q=80",
    },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <PromoBanner />
      <Header />
      
      <main className="flex-1">
        <div className="bg-muted py-8">
          <div className="container px-4">
            <h1 className="text-3xl md:text-4xl font-bold mb-2">Blog Mode & Style</h1>
            <p className="text-muted-foreground">
              Conseils, tendances et guides d'achat pour rester à la mode
            </p>
          </div>
        </div>

        <div className="container px-4 py-12">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {articles.map((article) => (
              <Link key={article.id} to={`/blog/${article.id}`}>
                <Card className="overflow-hidden hover:shadow-medium transition-all h-full">
                  <div className="aspect-video overflow-hidden bg-muted">
                    <img
                      src={article.image}
                      alt={article.title}
                      className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  <CardHeader>
                    <div className="flex items-center gap-2 mb-2">
                      <Badge variant="secondary">{article.category}</Badge>
                      <span className="flex items-center gap-1 text-sm text-muted-foreground">
                        <Calendar className="h-3 w-3" />
                        {article.date}
                      </span>
                    </div>
                    <h2 className="text-xl font-bold hover:text-primary transition-colors cursor-pointer">
                      {article.title}
                    </h2>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">{article.excerpt}</p>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Blog;
