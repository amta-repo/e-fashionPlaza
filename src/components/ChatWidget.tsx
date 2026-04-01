import { useState, useRef, useEffect } from "react";
import { MessageCircle, X, Send, Minimize2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

interface Message {
  id: string;
  text: string;
  sender: "user" | "bot";
  timestamp: Date;
}

const FAQ_RESPONSES: Record<string, string> = {
  livraison: "🚚 Nous offrons la livraison gratuite dans l'Atlantique & Littoral. Pour les autres régions, les frais sont de 2 000 FCFA. Délai: 1-3 jours ouvrables.",
  paiement: "💳 Nous acceptons MTN MoMo, Moov Money, Mastercard et Visa via KKiapay. Tous les paiements sont 100% sécurisés.",
  retour: "🔄 Vous pouvez retourner un article sous 7 jours s'il est dans son état d'origine. Contactez-nous via WhatsApp pour initier un retour.",
  taille: "📏 Nos chaussures sont disponibles du 39 au 45. Consultez le guide des tailles sur chaque fiche produit. En cas de doute, prenez une taille au-dessus.",
  commande: "📦 Vous pouvez suivre votre commande en vous connectant à votre compte. Vous recevrez aussi des mises à jour par WhatsApp.",
  contact: "📞 Contactez-nous via WhatsApp au +229 XX XX XX XX ou par email à contact@e-fashionplaza.com. Notre équipe répond sous 2h.",
};

const WELCOME_MESSAGE: Message = {
  id: "welcome",
  text: "👋 Bienvenue sur E-Fashion Plaza ! Je suis votre assistant virtuel. Comment puis-je vous aider ?\n\n📌 Sujets populaires:\n• Livraison\n• Paiement\n• Retours\n• Tailles\n• Suivi de commande\n• Contact",
  sender: "bot",
  timestamp: new Date(),
};

export const ChatWidget = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([WELCOME_MESSAGE]);
  const [input, setInput] = useState("");
  const messagesEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  const getBotResponse = (userMessage: string): string => {
    const lower = userMessage.toLowerCase();
    for (const [key, response] of Object.entries(FAQ_RESPONSES)) {
      if (lower.includes(key)) return response;
    }
    if (lower.includes("bonjour") || lower.includes("salut") || lower.includes("hello")) {
      return "Bonjour ! 😊 Comment puis-je vous aider aujourd'hui ?";
    }
    if (lower.includes("merci")) {
      return "Avec plaisir ! N'hésitez pas si vous avez d'autres questions. 😊";
    }
    if (lower.includes("agent") || lower.includes("humain") || lower.includes("live") || lower.includes("whatsapp")) {
      window.open("https://wa.me/22991134672?text=Bonjour%2C%20j%27ai%20besoin%20d%27aide%20sur%20E-Fashion%20Plaza", "_blank");
      return "🧑‍💼 Vous allez être redirigé vers notre service client sur WhatsApp. Si la fenêtre ne s'ouvre pas, cliquez ici : https://wa.me/22991134672";
    }
    return "Je ne suis pas sûr de comprendre. Essayez de me poser une question sur : livraison, paiement, retour, taille, commande ou contact. Vous pouvez aussi demander à parler à un agent humain.";
  };

  const handleSend = () => {
    if (!input.trim()) return;
    const userMsg: Message = {
      id: Date.now().toString(),
      text: input,
      sender: "user",
      timestamp: new Date(),
    };
    setMessages((prev) => [...prev, userMsg]);
    setInput("");

    setTimeout(() => {
      const botMsg: Message = {
        id: (Date.now() + 1).toString(),
        text: getBotResponse(input),
        sender: "bot",
        timestamp: new Date(),
      };
      setMessages((prev) => [...prev, botMsg]);
    }, 600);
  };

  return (
    <>
      {/* Chat Button */}
      {!isOpen && (
        <button
          onClick={() => setIsOpen(true)}
          className="fixed bottom-6 right-6 z-50 bg-primary text-primary-foreground rounded-full p-4 shadow-lg hover:scale-105 transition-transform"
          aria-label="Ouvrir le chat"
        >
          <MessageCircle className="h-6 w-6" />
        </button>
      )}

      {/* Chat Window */}
      {isOpen && (
        <div className="fixed bottom-6 right-6 z-50 w-[360px] max-w-[calc(100vw-2rem)] h-[500px] max-h-[calc(100vh-4rem)] bg-background border rounded-2xl shadow-xl flex flex-col overflow-hidden">
          {/* Header */}
          <div className="bg-primary text-primary-foreground p-4 flex items-center justify-between">
            <div>
              <h3 className="font-semibold text-sm">Support E-Fashion Plaza</h3>
              <p className="text-xs opacity-80">En ligne • Réponse instantanée</p>
            </div>
            <div className="flex gap-1">
              <button onClick={() => setIsOpen(false)} className="p-1 hover:bg-white/20 rounded">
                <Minimize2 className="h-4 w-4" />
              </button>
              <button onClick={() => setIsOpen(false)} className="p-1 hover:bg-white/20 rounded">
                <X className="h-4 w-4" />
              </button>
            </div>
          </div>

          {/* Messages */}
          <div className="flex-1 overflow-y-auto p-4 space-y-3">
            {messages.map((msg) => (
              <div key={msg.id} className={`flex ${msg.sender === "user" ? "justify-end" : "justify-start"}`}>
                <div
                  className={`max-w-[80%] px-3 py-2 rounded-2xl text-sm whitespace-pre-line ${
                    msg.sender === "user"
                      ? "bg-primary text-primary-foreground rounded-br-sm"
                      : "bg-muted text-foreground rounded-bl-sm"
                  }`}
                >
                  {msg.text}
                </div>
              </div>
            ))}
            <div ref={messagesEndRef} />
          </div>

          {/* Input */}
          <div className="p-3 border-t flex gap-2">
            <Input
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && handleSend()}
              placeholder="Tapez votre message..."
              className="flex-1 text-sm"
            />
            <Button size="icon" onClick={handleSend} disabled={!input.trim()}>
              <Send className="h-4 w-4" />
            </Button>
          </div>
        </div>
      )}
    </>
  );
};
