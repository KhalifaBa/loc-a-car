"use client";
// pour indiquer à Next.js qu'un fichier contient du code côté client. Cela signifie que le code dans ce fichier sera exécuté dans le navigateur plutôt que sur le serveur
import Image from "next/image";
import CustomButton from "./CustomButton";

const Hero = () => {
  const handleScroll = () => {
    window.scrollTo({
      top: window.innerHeight,
      behavior: "smooth",
    });
  };
  return (
    <div className="hero">
      <div className="flex-1 pt-36 padding-x">
        <h1 className="hero__title">
          Trouvez, réservez ou louez une voiture facilement.
        </h1>
        <p className="hero__subtitle">
          Des milliers de voitures à louer dans le monde entier sans effort
        </p>
        <CustomButton
          titre="Voir les voitures"
          containerStyles="bg-primary-blue text-white rounded-full mt-10"
          handleClick={handleScroll}
        />
      </div>
      <div className="hero__image-container">
        <div className="hero__image">
          <Image src="/hero.png" alt="hero" fill className="object-contain" />
        </div>
        <div className="hero__image-overlay" />
      </div>
    </div>
  );
};

export default Hero;
