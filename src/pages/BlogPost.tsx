import { useParams, Link } from "react-router-dom";
import { Header } from "@/components/Header";
import { PromoBanner } from "@/components/PromoBanner";
import { Footer } from "@/components/Footer";
import { SEOHead } from "@/components/SEOHead";
import { Badge } from "@/components/ui/badge";
import { Calendar, ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";

const blogPosts: Record<string, { id: number; title: string; category: string; date: string; image: string; content: string; metaDescription: string; keywords: string }> = {
  "1": {
    id: 1, title: "Comment choisir les bonnes chaussures pour l'été au Bénin", category: "Guide d'achat", date: "15 Décembre 2024",
    image: "https://images.unsplash.com/photo-1460353581641-37baddab0fa2?w=1200&q=80",
    metaDescription: "Conseils d'experts pour choisir les meilleures chaussures d'été adaptées au climat tropical du Bénin. Styles et entretien.",
    keywords: "chaussures été Bénin, sandales Cotonou, sneakers respirants, mocassins cuir",
    content: `## Introduction\n\nChoisir les bonnes chaussures pour l'été au Bénin est essentiel pour votre confort et votre santé.\n\n## Les critères essentiels\n\n### 1. La respirabilité\nOptez pour des matériaux naturels comme le cuir perforé, le canvas ou le mesh.\n\n### 2. Le confort\nPrivilégiez des semelles rembourrées et un bon maintien du pied.\n\n### 3. La résistance à l'humidité\nLes matériaux traités anti-humidité sont un excellent choix.\n\n## Les styles recommandés\n\n### Sandales et nu-pieds\nIdéales pour la ventilation maximale.\n\n### Sneakers légers\nParfaits pour les activités quotidiennes.\n\n### Mocassins en cuir\nPour les occasions plus formelles.\n\n## Conclusion\nLe choix de vos chaussures d'été ne doit pas être pris à la légère. Explorez notre collection sur E-Fashion Plaza.`,
  },
  "2": {
    id: 2, title: "Les tendances mode 2025 : Ce qu'il faut savoir", category: "Tendances", date: "10 Décembre 2024",
    image: "https://images.unsplash.com/photo-1441984904996-e0b6ba687e04?w=1200&q=80",
    metaDescription: "Tendances mode 2025 : couleurs, styles et chaussures qui définiront l'année. Guide adapté au style africain et au Bénin.",
    keywords: "tendances mode 2025, fashion Bénin, style africain, chaussures tendance",
    content: `## Introduction\n\nLa mode évolue constamment, et 2025 s'annonce passionnante.\n\n## Les couleurs phares de 2025\n\n### Terracotta et tons chauds\nLes couleurs terre reviennent en force.\n\n### Bleu cobalt et électrique\nPour les touches d'éclat.\n\n## Les styles dominants\n\n### Le minimalisme raffiné\nCoupes épurées et matériaux de qualité.\n\n### Le retour du sportswear chic\nUn style plus sophistiqué.\n\n## Conclusion\nLes tendances 2025 célèbrent l'individualité et la durabilité. Découvrez notre collection sur E-Fashion Plaza.`,
  },
  "3": {
    id: 3, title: "Entretien des chaussures en cuir : Guide complet", category: "Entretien", date: "5 Décembre 2024",
    image: "https://images.unsplash.com/photo-1449505278894-297fdb3edbc1?w=1200&q=80",
    metaDescription: "Guide complet d'entretien des chaussures en cuir adapté au climat du Bénin. Techniques et produits recommandés.",
    keywords: "entretien chaussures cuir, nettoyage cuir Bénin, préserver cuir tropical",
    content: `## Introduction\n\nLe cuir est un matériau noble qui nécessite un entretien approprié dans le climat tropical du Bénin.\n\n## Routine d'entretien\n\n### Nettoyage quotidien\nUtilisez un chiffon doux et sec.\n\n### Entretien hebdomadaire\nPassez un chiffon légèrement humide.\n\n### Entretien mensuel\nAppliquez une crème nourrissante adaptée.\n\n## Stockage optimal\nTempérature 15-25°C, bonne ventilation, embauchoirs en bois.\n\n## Conclusion\nEn suivant ce guide, vos chaussures resteront belles pendant des années. Retrouvez nos produits sur E-Fashion Plaza.`,
  },
};

const BlogPost = () => {
  const { id } = useParams<{ id: string }>();
  const post = id ? blogPosts[id] : null;

  if (!post) {
    return (
      <div className="min-h-screen flex flex-col">
        <SEOHead title="Article non trouvé" description="L'article demandé n'existe pas sur E-Fashion Plaza." />
        <PromoBanner />
        <Header />
        <main className="flex-1 container px-4 py-12 text-center">
          <h1 className="text-2xl font-bold mb-4">Article non trouvé</h1>
          <Link to="/blog"><Button>Retour au blog</Button></Link>
        </main>
        <Footer />
      </div>
    );
  }

  const articleJsonLd = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.title,
    image: post.image,
    datePublished: post.date,
    author: { "@type": "Organization", name: "E-Fashion Plaza" },
    publisher: { "@type": "Organization", name: "E-Fashion Plaza", logo: { "@type": "ImageObject", url: "https://efashionplaza.com/favicon.png" } },
    description: post.metaDescription,
  };

  return (
    <div className="min-h-screen flex flex-col">
      <SEOHead
        title={post.title}
        description={post.metaDescription}
        canonical={`https://efashionplaza.com/blog/${post.id}`}
        ogImage={post.image}
        ogType="article"
        keywords={post.keywords}
        jsonLd={articleJsonLd}
      />
      <PromoBanner />
      <Header />
      <main className="flex-1">
        <article className="container px-4 py-12 max-w-4xl mx-auto">
          <Link to="/blog"><Button variant="ghost" className="mb-6"><ArrowLeft className="h-4 w-4 mr-2" />Retour au blog</Button></Link>
          <div className="mb-6">
            <Badge variant="secondary" className="mb-3">{post.category}</Badge>
            <h1 className="text-3xl md:text-4xl font-bold mb-4">{post.title}</h1>
            <div className="flex items-center gap-2 text-muted-foreground"><Calendar className="h-4 w-4" /><time>{post.date}</time></div>
          </div>
          <div className="aspect-video overflow-hidden rounded-lg mb-8">
            <img src={post.image} alt={post.title} className="w-full h-full object-cover" />
          </div>
          <div
            className="prose prose-lg dark:prose-invert max-w-none"
            dangerouslySetInnerHTML={{
              __html: post.content.split('\n').map(line => {
                if (line.startsWith('## ')) return `<h2 class="text-2xl font-bold mt-8 mb-4">${line.substring(3)}</h2>`;
                if (line.startsWith('### ')) return `<h3 class="text-xl font-semibold mt-6 mb-3">${line.substring(4)}</h3>`;
                if (line.startsWith('- ')) return `<li class="ml-6">${line.substring(2)}</li>`;
                if (line.trim() === '') return '';
                return `<p class="mb-4 leading-relaxed">${line}</p>`;
              }).join('')
            }}
          />
        </article>
      </main>
      <Footer />
    </div>
  );
};

export default BlogPost;
