"use client";
import { Marque } from "./";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useState } from "react";

const BouttonRecherche = ({ other_class }: { other_class: string }) => {
  return (
    <button type="submit" className={`-ml-3 z-10 ${other_class}`}>
      <Image
        src="/magnifying-glass.svg"
        alt="Recherche"
        width={40}
        height={40}
        className="object-contain"
      />
    </button>
  );
};

const BarreRecherche = () => {
  const [marque, setMarque] = useState("");
  const [model, setModel] = useState("");
  const router = useRouter();
  const handleSearch = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (marque === "" || model === "") {
      return alert("Veuillez remplir les champs");
    }
    updateSearchParams(model.toLowerCase(), marque.toLowerCase());
  };
  const updateSearchParams = (modele: string, marque: string) => {
    const paramRecherche = new URLSearchParams(window.location.search);

    if (model) {
      paramRecherche.set("model", modele);
    } else {
      paramRecherche.delete("model");
    }

    if (marque) {
      paramRecherche.set("marque", marque);
    } else {
      paramRecherche.delete("marque");
    }

    const newPathname = `${
      window.location.pathname
    }?${paramRecherche.toString()}`;

    router.push(newPathname, { scroll: false });
  };
  return (
    <form className="searchbar" onSubmit={handleSearch}>
      <div className="searchbar__item">
        <Marque marque={marque} setMarque={setMarque} />
        <BouttonRecherche other_class="sm:hidden" />
      </div>
      <div className="searchbar__item">
        <Image
          src="/model-icon.png"
          width={25}
          height={25}
          className="absolute w-[20px] h-[20px] ml-4"
          alt="model-icon"
        />
        <input
          type="text"
          name="Modèle"
          value={model}
          onChange={(e) => setModel(e.target.value)}
          placeholder="Tiguan"
          className="searchbar__input"
        />
        <BouttonRecherche other_class="sm:hidden" />
      </div>
      <BouttonRecherche other_class="max-sm:hidden" />
    </form>
  );
};

export default BarreRecherche;
