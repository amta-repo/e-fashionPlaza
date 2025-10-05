import { useParams, Link } from "react-router-dom";
import { Header } from "@/components/Header";
import { PromoBanner } from "@/components/PromoBanner";
import { Footer } from "@/components/Footer";
import { Badge } from "@/components/ui/badge";
import { Calendar, ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useEffect } from "react";

const blogPosts = {
  "1": {
    id: 1,
    title: "Comment choisir les bonnes chaussures pour l'été au Bénin",
    category: "Guide d'achat",
    date: "15 Décembre 2024",
    image: "https://images.unsplash.com/photo-1460353581641-37baddab0fa2?w=1200&q=80",
    content: `
## Introduction

Choisir les bonnes chaussures pour l'été au Bénin est essentiel pour votre confort et votre santé. Avec le climat tropical et les températures élevées, il est important de sélectionner des chaussures adaptées qui allient style et praticité.

## Les critères essentiels

### 1. La respirabilité

Dans un climat chaud et humide comme celui du Bénin, la respirabilité est primordiale. Optez pour des chaussures en matériaux naturels comme le cuir perforé, le canvas ou le mesh qui permettent une bonne circulation de l'air.

### 2. Le confort

Privilégiez des semelles rembourrées et un bon maintien du pied. Les longues journées sous la chaleur nécessitent des chaussures qui ne fatiguent pas vos pieds.

### 3. La résistance à l'humidité

Pendant la saison des pluies, vos chaussures doivent pouvoir résister à l'humidité sans se détériorer rapidement. Les matériaux traités anti-humidité sont un excellent choix.

## Les styles recommandés

### Sandales et nu-pieds

Idéales pour la ventilation maximale, parfaites pour les sorties décontractées et les promenades en ville. Assurez-vous qu'elles offrent un bon maintien de la voûte plantaire.

### Sneakers légers

Pour un look sportif et moderne, choisissez des sneakers en mesh ou en canvas. Ils sont parfaits pour les activités quotidiennes et offrent un excellent confort.

### Mocassins en cuir

Pour les occasions plus formelles, les mocassins en cuir de qualité restent un choix élégant et respirant. Optez pour des versions perforées ou en cuir fin.

## Conseils d'entretien

- Nettoyez régulièrement vos chaussures pour éliminer la poussière et la saleté
- Laissez-les sécher naturellement après exposition à l'humidité
- Utilisez des produits d'entretien adaptés au matériau
- Alternez vos paires pour prolonger leur durée de vie

## Où acheter ?

E-Fashion Plaza propose une large sélection de chaussures adaptées au climat béninois, avec livraison gratuite dans les départements d'Atlantique et du Littoral pour les commandes de plus d'un article.

## Conclusion

Le choix de vos chaussures d'été ne doit pas être pris à la légère. En suivant ces conseils, vous pourrez profiter de l'été en tout confort tout en restant élégant. N'hésitez pas à explorer notre collection pour trouver la paire parfaite.
    `,
    metaDescription: "Découvrez nos conseils d'experts pour choisir les meilleures chaussures d'été adaptées au climat tropical du Bénin. Guide complet avec recommandations de styles et d'entretien.",
    keywords: "chaussures été Bénin, chaussures tropicales, sandales Cotonou, sneakers respirants, mocassins cuir Bénin, chaussures confortables",
  },
  "2": {
    id: 2,
    title: "Les tendances mode 2025 : Ce qu'il faut savoir",
    category: "Tendances",
    date: "10 Décembre 2024",
    image: "https://images.unsplash.com/photo-1441984904996-e0b6ba687e04?w=1200&q=80",
    content: `
## Introduction

La mode évolue constamment, et 2025 s'annonce comme une année passionnante avec des tendances qui marient tradition et innovation. Découvrez ce qui va définir le style dans les mois à venir.

## Les couleurs phares de 2025

### Terracotta et tons chauds

Les couleurs terre reviennent en force avec des nuances de terracotta, ocre et orange brûlé. Ces teintes apportent chaleur et authenticité à vos tenues.

### Bleu cobalt et électrique

Pour les touches d'éclat, les bleus intenses dominent la palette, créant des contrastes saisissants avec les tons neutres.

### Neutres sophistiqués

Les beiges, crèmes et taupes continuent d'être essentiels pour créer des bases élégantes et intemporelles.

## Les styles dominants

### Le minimalisme raffiné

La simplicité reste au cœur des tendances avec des coupes épurées et des matériaux de qualité. L'accent est mis sur l'essentiel et la durabilité.

### Le retour du sportswear chic

L'athleisure évolue vers un style plus sophistiqué, mélangeant pièces sportives et éléments formels pour un look urbain moderne.

### L'inspiration artisanale

Les pièces qui célèbrent le savoir-faire artisanal, avec des détails tissés à la main ou des motifs traditionnels réinterprétés, gagnent en popularité.

## Chaussures tendances 2025

### Chunky sneakers

Les sneakers volumineuses continuent leur règne, mais avec des designs plus affinés et des matériaux durables.

### Sandales minimalistes

Des designs épurés avec des lanières fines et des matériaux de qualité définissent les sandales de l'année.

### Mocassins revisités

Le mocassin classique se réinvente avec des couleurs audacieuses et des textures variées.

## Accessoires incontournables

- Sacs structurés en cuir naturel
- Bijoux statement mais minimalistes
- Lunettes de soleil oversize
- Ceintures tressées artisanales

## Mode durable et éthique

2025 marque un tournant décisif vers la mode responsable. Les consommateurs privilégient :

- Les matériaux écologiques et recyclés
- La production locale et éthique
- La qualité plutôt que la quantité
- Les marques transparentes sur leurs pratiques

## Comment adopter ces tendances au Bénin

Le contexte local influence naturellement l'adoption des tendances mondiales. Au Bénin :

- Privilégiez les tissus légers et respirants
- Adaptez les couleurs tendance à votre teint et style personnel
- Mélangez influences occidentales et touches locales
- Investissez dans des pièces polyvalentes

## Shopping intelligent

Chez E-Fashion Plaza, nous sélectionnons des pièces qui allient tendances internationales et adaptation au climat local. Notre collection 2025 reflète ces nouvelles directions mode tout en restant pratique pour votre quotidien.

## Conclusion

Les tendances 2025 célèbrent l'individualité, la durabilité et l'élégance intemporelle. Il s'agit moins de suivre aveuglément la mode que de choisir ce qui vous correspond vraiment et investir dans des pièces de qualité qui traverseront les saisons.
    `,
    metaDescription: "Découvrez les tendances mode 2025 : couleurs, styles et chaussures qui définiront l'année. Guide complet adapté au style africain et au climat du Bénin.",
    keywords: "tendances mode 2025, fashion Bénin, style africain, chaussures tendance, mode durable, shopping Cotonou",
  },
  "3": {
    id: 3,
    title: "Entretien des chaussures en cuir : Guide complet",
    category: "Entretien",
    date: "5 Décembre 2024",
    image: "https://images.unsplash.com/photo-1449505278894-297fdb3edbc1?w=1200&q=80",
    content: `
## Introduction

Le cuir est un matériau noble qui, avec un entretien approprié, peut durer des décennies. Dans le climat tropical du Bénin, l'entretien de vos chaussures en cuir nécessite une attention particulière pour préserver leur beauté et leur durabilité.

## Comprendre le cuir

### Les différents types de cuir

**Cuir pleine fleur** : Le plus haute qualité, résistant et durable, il développe une patine unique avec le temps.

**Cuir nubuck** : Surface veloutée délicate nécessitant un entretien spécifique et une protection contre l'humidité.

**Cuir lisse** : Facile d'entretien et polyvalent, idéal pour un usage quotidien.

**Cuir verni** : Brillant et élégant, mais plus sensible aux rayures et aux températures extrêmes.

## Les défis du climat tropical

### Humidité

L'humidité est l'ennemi principal du cuir au Bénin. Elle peut causer :
- Moisissures et mauvaises odeurs
- Déformations et rigidification
- Dégradation prématurée du matériau

### Chaleur

Les températures élevées peuvent :
- Dessécher le cuir et le rendre cassant
- Décolorer certaines teintures
- Accélérer l'usure naturelle

## Routine d'entretien quotidienne

### Après chaque utilisation

1. **Nettoyage de surface** : Utilisez un chiffon doux et sec pour enlever la poussière
2. **Aération** : Laissez vos chaussures respirer dans un endroit ventilé
3. **Forme** : Utilisez des embauchoirs en bois pour maintenir la forme

### Hebdomadaire

1. **Nettoyage en profondeur** : Passez un chiffon légèrement humide pour éliminer les saletés tenaces
2. **Brossage** : Utilisez une brosse douce pour raviver le cuir
3. **Inspection** : Vérifiez l'état des semelles et coutures

## Entretien approfondi mensuel

### Étape 1 : Nettoyage

- Retirez les lacets et semelles intérieures
- Nettoyez avec un savon spécial cuir
- Rincez avec un chiffon humide
- Laissez sécher naturellement (jamais au soleil direct)

### Étape 2 : Nourrissage

- Appliquez une crème nourrissante adaptée à la couleur
- Massez délicatement en mouvements circulaires
- Laissez pénétrer 15-20 minutes
- Retirez l'excédent avec un chiffon propre

### Étape 3 : Protection

- Appliquez un spray imperméabilisant
- Laissez sécher complètement
- Répétez l'opération une fois par mois minimum

## Produits essentiels

### Kit de base

- Brosse en crin de cheval
- Chiffons en microfibre
- Crème nourrissante neutre
- Cirage coloré assorti
- Spray imperméabilisant
- Embauchoirs en bois de cèdre

### Produits spécialisés

Pour le **nubuck et daim** :
- Gomme spéciale
- Brosse crépon
- Spray protecteur anti-taches

Pour le **cuir verni** :
- Lait démaquillant doux
- Chiffon très doux
- Vernis protecteur

## Stockage optimal

### Conditions idéales

- Température : 15-25°C
- Humidité : 50-65%
- Ventilation : Bonne circulation d'air
- Lumière : Éviter l'exposition directe au soleil

### Rangement

- Utilisez toujours des embauchoirs
- Rangez dans des housses en tissu respirant (pas en plastique)
- Évitez les sacs hermétiques qui favorisent les moisissures
- Espacez les paires pour permettre la circulation d'air

## Problèmes courants et solutions

### Moisissure

**Prévention** : Stockage ventilé, utilisation de sachets anti-humidité

**Traitement** : Nettoyage avec un mélange eau/vinaigre blanc (50/50), séchage complet, traitement anti-fongique

### Taches d'eau

**Solution** : Humidifiez uniformément toute la chaussure, laissez sécher naturellement, appliquez de la crème nourrissante

### Cuir sec et craquelé

**Traitement** : Application généreuse de crème nourrissante, répétée plusieurs jours de suite

### Odeurs

**Solution** : Désinfection avec spray antibactérien, utilisation de sachets désodorisants au charbon actif, aération régulière

## Erreurs à éviter

❌ Sécher au soleil ou près d'une source de chaleur
❌ Utiliser des produits non adaptés (détergents ménagers, etc.)
❌ Stocker dans un endroit humide et fermé
❌ Porter les mêmes chaussures tous les jours
❌ Négliger l'entretien régulier

## Quand faire appel à un professionnel

Certaines réparations nécessitent un cordonnier qualifié :
- Ressemelage complet
- Réparation de déchirures importantes
- Teinture professionnelle
- Restauration de chaussures anciennes ou de valeur

## Investissement à long terme

Un bon entretien représente un investissement rentable :
- Prolonge la durée de vie de 2 à 5 fois
- Maintient l'apparence esthétique
- Préserve la valeur de revente
- Garantit le confort optimal

## Conclusion

L'entretien des chaussures en cuir dans le climat béninois demande de la régularité et les bons produits. En suivant ce guide, vos chaussures resteront belles et confortables pendant de nombreuses années. Chez E-Fashion Plaza, nous proposons également une gamme de produits d'entretien professionnels pour prendre soin de vos achats.

**Pro tip** : Alternez vos paires de chaussures - portez-en une pendant que l'autre se repose et retrouve sa forme naturelle. Cette simple habitude peut doubler la durée de vie de toutes vos chaussures en cuir.
    `,
    metaDescription: "Guide complet d'entretien des chaussures en cuir adapté au climat du Bénin. Techniques professionnelles, produits recommandés et solutions aux problèmes courants.",
    keywords: "entretien chaussures cuir, nettoyage cuir Bénin, produits entretien chaussures, préserver cuir tropical, cirage chaussures, mocassins entretien",
  },
};

const BlogPost = () => {
  const { id } = useParams<{ id: string }>();
  const post = id ? blogPosts[id as keyof typeof blogPosts] : null;

  useEffect(() => {
    if (post) {
      document.title = `${post.title} | E-Fashion Plaza Blog`;
      
      // Update meta description
      const metaDescription = document.querySelector('meta[name="description"]');
      if (metaDescription) {
        metaDescription.setAttribute('content', post.metaDescription);
      }
      
      // Update meta keywords
      const metaKeywords = document.querySelector('meta[name="keywords"]');
      if (metaKeywords) {
        metaKeywords.setAttribute('content', post.keywords);
      }

      // Update Open Graph tags
      const ogTitle = document.querySelector('meta[property="og:title"]');
      if (ogTitle) ogTitle.setAttribute('content', post.title);
      
      const ogDescription = document.querySelector('meta[property="og:description"]');
      if (ogDescription) ogDescription.setAttribute('content', post.metaDescription);
      
      const ogImage = document.querySelector('meta[property="og:image"]');
      if (ogImage) ogImage.setAttribute('content', post.image);
    }

    return () => {
      // Reset to default on unmount
      document.title = 'E-Fashion Plaza - Chaussures, Vêtements & Cosmétiques au Bénin';
    };
  }, [post]);

  if (!post) {
    return (
      <div className="min-h-screen flex flex-col">
        <PromoBanner />
        <Header />
        <main className="flex-1 container px-4 py-12 text-center">
          <h1 className="text-2xl font-bold mb-4">Article non trouvé</h1>
          <Link to="/blog">
            <Button>Retour au blog</Button>
          </Link>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col">
      <PromoBanner />
      <Header />
      
      <main className="flex-1">
        <article className="container px-4 py-12 max-w-4xl mx-auto">
          <Link to="/blog">
            <Button variant="ghost" className="mb-6">
              <ArrowLeft className="h-4 w-4 mr-2" />
              Retour au blog
            </Button>
          </Link>

          <div className="mb-6">
            <Badge variant="secondary" className="mb-3">{post.category}</Badge>
            <h1 className="text-3xl md:text-4xl font-bold mb-4">{post.title}</h1>
            <div className="flex items-center gap-2 text-muted-foreground">
              <Calendar className="h-4 w-4" />
              <time>{post.date}</time>
            </div>
          </div>

          <div className="aspect-video overflow-hidden rounded-lg mb-8">
            <img
              src={post.image}
              alt={post.title}
              className="w-full h-full object-cover"
            />
          </div>

          <div 
            className="prose prose-lg dark:prose-invert max-w-none"
            dangerouslySetInnerHTML={{ 
              __html: post.content.split('\n').map(line => {
                if (line.startsWith('## ')) return `<h2 class="text-2xl font-bold mt-8 mb-4">${line.substring(3)}</h2>`;
                if (line.startsWith('### ')) return `<h3 class="text-xl font-semibold mt-6 mb-3">${line.substring(4)}</h3>`;
                if (line.startsWith('**') && line.endsWith('**')) return `<p class="font-bold mt-4">${line.slice(2, -2)}</p>`;
                if (line.startsWith('- ')) return `<li class="ml-6">${line.substring(2)}</li>`;
                if (line.startsWith('❌ ')) return `<li class="ml-6 text-destructive">${line.substring(2)}</li>`;
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
