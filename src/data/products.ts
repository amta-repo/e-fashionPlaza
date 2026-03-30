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

export interface Product {
  id: string;
  name: string;
  price: number;
  originalPrice?: number;
  image: string;
  rating: number;
  reviewCount: number;
  inStock: boolean;
  discount?: number;
  category: "chaussures" | "vetements" | "cosmetiques";
  description: string;
  sizes: string[];
  colors: string[];
}

export const allProducts: Product[] = [
  {
    id: "1",
    name: "Mocassins Burberry Premium - Confort & Élégance",
    price: 22000,
    originalPrice: 25000,
    image: timberlandLoafers,
    rating: 5,
    reviewCount: 12,
    inStock: true,
    discount: 12,
    category: "chaussures",
    description: "Des mocassins élégants de la marque Burberry, alliant style et confort. Parfaits pour un usage quotidien ou des occasions spéciales. Semelle blanche antidérapante et design sophistiqué.",
    sizes: ["39", "40", "41", "42", "43", "44"],
    colors: ["Noir"],
  },
  {
    id: "2",
    name: "Bottines Classiques Navy - Style Urbain",
    price: 19500,
    image: navyBoots,
    rating: 4,
    reviewCount: 8,
    inStock: true,
    category: "chaussures",
    description: "Bottines classiques au design navy urbain, parfaites pour un look décontracté chic. Cuir de qualité supérieure avec semelle renforcée pour un confort optimal.",
    sizes: ["40", "41", "42", "43", "44"],
    colors: ["Navy"],
  },
  {
    id: "3",
    name: "Baskets Le Coq Sportif - Édition Tricolore",
    price: 21000,
    originalPrice: 24000,
    image: lecoqSneakers,
    rating: 5,
    reviewCount: 15,
    inStock: true,
    discount: 13,
    category: "chaussures",
    description: "Baskets Le Coq Sportif édition tricolore, un classique du style sportif français. Confort exceptionnel pour usage quotidien.",
    sizes: ["39", "40", "41", "42", "43"],
    colors: ["Tricolore"],
  },
  {
    id: "4",
    name: "Sandales Timberland - Été Confort",
    price: 18000,
    image: timberlandSandals,
    rating: 4,
    reviewCount: 10,
    inStock: true,
    category: "chaussures",
    description: "Sandales Timberland légères et confortables, idéales pour l'été béninois. Semelle coussinée et brides ajustables.",
    sizes: ["39", "40", "41", "42", "43", "44"],
    colors: ["Marron"],
  },
  {
    id: "5",
    name: "Mocassins Noirs Classiques - Élégance Professionnelle",
    price: 23000,
    originalPrice: 25000,
    image: blackLoafers,
    rating: 5,
    reviewCount: 18,
    inStock: true,
    discount: 8,
    category: "chaussures",
    description: "Mocassins noirs classiques en cuir véritable. Le choix parfait pour les professionnels exigeants qui recherchent l'élégance.",
    sizes: ["39", "40", "41", "42", "43", "44", "45"],
    colors: ["Noir"],
  },
  {
    id: "6",
    name: "Chaussures en Cuir Marron - Style Affaires",
    price: 24500,
    image: brownLeatherShoe,
    rating: 5,
    reviewCount: 14,
    inStock: true,
    category: "chaussures",
    description: "Chaussures en cuir marron de qualité supérieure, parfaites pour les réunions d'affaires et événements formels.",
    sizes: ["40", "41", "42", "43", "44"],
    colors: ["Marron"],
  },
  {
    id: "7",
    name: "Baskets Confort - Usage Quotidien",
    price: 19000,
    originalPrice: 22000,
    image: comfortSneakers,
    rating: 4,
    reviewCount: 20,
    inStock: true,
    discount: 14,
    category: "chaussures",
    description: "Baskets ultra-confortables pour un usage quotidien. Semelle amortissante et tissu respirant.",
    sizes: ["39", "40", "41", "42", "43"],
    colors: ["Blanc", "Gris"],
  },
  {
    id: "8",
    name: "Mocassins Peau Crocodile - Luxe Premium",
    price: 25000,
    originalPrice: 25000,
    image: crocodileSkinLoafers,
    rating: 5,
    reviewCount: 9,
    inStock: true,
    category: "chaussures",
    description: "Mocassins en peau de crocodile véritable, le summum du luxe. Finition artisanale et confort incomparable.",
    sizes: ["40", "41", "42", "43", "44"],
    colors: ["Cognac"],
  },
  {
    id: "9",
    name: "Sandales Palm - Confort Été",
    price: 18500,
    image: palmSlippers,
    rating: 4,
    reviewCount: 16,
    inStock: true,
    category: "chaussures",
    description: "Sandales Palm légères et stylées pour l'été. Parfaites pour les sorties décontractées.",
    sizes: ["39", "40", "41", "42", "43", "44"],
    colors: ["Noir", "Marron"],
  },
  {
    id: "10",
    name: "Timberland Montantes Navy - Style Urbain",
    price: 24000,
    originalPrice: 25000,
    image: timberlandAnkleSneakers,
    rating: 5,
    reviewCount: 11,
    inStock: true,
    discount: 4,
    category: "chaussures",
    description: "Baskets montantes Timberland en coloris navy. Style urbain affirmé avec le confort Timberland légendaire.",
    sizes: ["40", "41", "42", "43", "44"],
    colors: ["Navy"],
  },
  {
    id: "11",
    name: "Baskets Timberland Bicolores - Design Moderne",
    price: 22500,
    image: timberlandBeigeSneakers,
    rating: 4,
    reviewCount: 13,
    inStock: true,
    category: "chaussures",
    description: "Baskets Timberland au design bicolore moderne. Association parfaite de style et de robustesse.",
    sizes: ["39", "40", "41", "42", "43"],
    colors: ["Beige", "Blanc"],
  },
  {
    id: "12",
    name: "Nike SB Dunk Édition Colorée - Collection Exclusive",
    price: 23500,
    originalPrice: 25000,
    image: nikeSbColorful,
    rating: 5,
    reviewCount: 22,
    inStock: true,
    discount: 6,
    category: "chaussures",
    description: "Nike SB Dunk en édition limitée colorée. Un incontournable de la culture streetwear avec un confort Nike premium.",
    sizes: ["39", "40", "41", "42", "43", "44"],
    colors: ["Multicolore"],
  },
  {
    id: "13",
    name: "Reebok Classic Blanches - Style Intemporel",
    price: 20000,
    image: reebokWhiteSneakers,
    rating: 4,
    reviewCount: 19,
    inStock: true,
    category: "chaussures",
    description: "Les Reebok Classic blanches, un classique intemporel. Polyvalentes et élégantes pour toutes les occasions.",
    sizes: ["39", "40", "41", "42", "43", "44"],
    colors: ["Blanc"],
  },
  {
    id: "14",
    name: "Lacoste Sport Noires - Élégance Sportive",
    price: 21500,
    originalPrice: 24000,
    image: lacostelBlackSneakers,
    rating: 5,
    reviewCount: 17,
    inStock: true,
    discount: 10,
    category: "chaussures",
    description: "Baskets Lacoste Sport noires, alliance parfaite entre élégance et performance sportive. Le crocodile emblématique sur chaque paire.",
    sizes: ["39", "40", "41", "42", "43", "44"],
    colors: ["Noir"],
  },
];

export const getProductById = (id: string): Product | undefined => {
  return allProducts.find((p) => p.id === id);
};

export const getProductsByCategory = (category: string): Product[] => {
  return allProducts.filter((p) => p.category === category);
};
