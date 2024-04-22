import { fetchCars } from "@/utils";
import {
  Hero,
  FiltrePerso,
  BarreRecherche,
  VoitureCard,
  VoirPlus,
} from "./components";
import { FilterProps } from "@/types";
import Image from "next/image";
import { fuels, yearsOfProduction } from "@/constants";

export default async function Home({
  searchParams,
}: {
  searchParams: FilterProps;
}) {
  const allCars = await fetchCars({
    modele: searchParams.modele || "",
    marque: searchParams.marque || "",
    energie: searchParams.energie || "",
    limit: searchParams.limit || 12,
    annee: searchParams.annee || 2022,
  });
  const isDataEmpty = !Array.isArray(allCars) || allCars.length < 1 || !allCars;
  return (
    <main className="overflow-hidden">
      <Hero />
      <div
        className="mt-12 padding-x padding-y
      max-width"
        id="discover"
      >
        <div className="home__text-container">
          <h1
            className="text-4xl
          font-extrabold"
          >
            Catalogue de véhicule
          </h1>
          <p>Chercher la voiture qui vous convient</p>
        </div>
        <div className="home__filters">
          <BarreRecherche />
          <div className="home__filter-container">
            <FiltrePerso titre="energie" options={fuels} />
            <FiltrePerso titre="annee" options={yearsOfProduction} />
          </div>
        </div>

        {isDataEmpty ? (
          <div className="home__error-container">
            <h2
              className="text-black text-xl
            font-bold"
            >
              Il n'y a pas de voiture disponible pour le moment
            </h2>
          </div>
        ) : (
          <section>
            <div className="home__cars-wrapper">
              {allCars.map((car) => (
                <VoitureCard voiture={car} />
              ))}
            </div>
            <VoirPlus
              nbPage={(searchParams.limit || 10) / 10}
              estSuivant={(searchParams.limit || 10) > allCars.length}
            />
          </section>
        )}
      </div>
    </main>
  );
}
