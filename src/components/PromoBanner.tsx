import { Gift, Truck, Store } from "lucide-react";

export const PromoBanner = () => {
  const messages = [
    {
      icon: Truck,
      text: "Livraison GRATUITE dans l'Atlantique & Littoral",
    },
    {
      icon: Gift,
      text: "Livraison GRATUITE pour +1 article (jusqu'au 2 janvier 2026)",
    },
    {
      icon: Store,
      text: "Vendeurs de beauté & cosmétiques : Rejoignez notre plateforme !",
    },
  ];

  return (
    <div className="w-full bg-gradient-hero text-primary-foreground py-3 overflow-hidden">
      <div className="flex animate-slide">
        {/* Duplicate messages for seamless loop */}
        {[...messages, ...messages].map((message, index) => (
          <div
            key={index}
            className="flex items-center gap-2 px-8 whitespace-nowrap"
          >
            <message.icon className="h-4 w-4 flex-shrink-0" />
            <span className="text-sm font-medium">{message.text}</span>
            <span className="mx-4">•</span>
          </div>
        ))}
      </div>
    </div>
  );
};
