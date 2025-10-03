import { useEffect, useState } from "react";

const heroImages = [
  "https://images.unsplash.com/photo-1460353581641-37baddab0fa2?w=1920&q=80",
  "https://images.unsplash.com/photo-1441984904996-e0b6ba687e04?w=1920&q=80",
  "https://images.unsplash.com/photo-1449505278894-297fdb3edbc1?w=1920&q=80",
];

export const HeroSlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % heroImages.length);
    }, 5000); // Change image every 5 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="absolute inset-0 overflow-hidden">
      {heroImages.map((image, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            index === currentIndex ? "opacity-100" : "opacity-0"
          }`}
        >
          <img
            src={image}
            alt={`Hero ${index + 1}`}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-background/95 via-background/80 to-background/60" />
        </div>
      ))}
    </div>
  );
};
