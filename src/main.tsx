import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { CartProvider } from "./contexts/CartContext";

// Google Translate initialization
declare global {
  interface Window {
    googleTranslateElementInit: () => void;
  }
}

window.googleTranslateElementInit = function() {
  new (window as any).google.translate.TranslateElement(
    {
      pageLanguage: 'fr',
      includedLanguages: 'fr,en,es',
      layout: (window as any).google.translate.TranslateElement.InlineLayout.SIMPLE,
    },
    'google_translate_element'
  );
};

createRoot(document.getElementById("root")!).render(
  <CartProvider>
    <App />
  </CartProvider>
);
