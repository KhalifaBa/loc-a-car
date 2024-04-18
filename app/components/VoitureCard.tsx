"use client";
import { VoitureProps } from "@/types";
import Image from "next/image";
import { useState } from "react";
import CustomButton from "./CustomButton";
import DetailVoiture from "./DetailVoiture";
import { calculateCarRent, generateCarImageUrl } from "@/utils";
interface VoitureCardProps {
  voiture: VoitureProps;
}
const VoitureCard = ({ voiture }: VoitureCardProps) => {
  const { city_mpg, year, make, model, transmission, drive } = voiture;
  const rentalRate = calculateCarRent(city_mpg, year);
  const [isOpen, setIsOpen] = useState(false);
  const checkTransmission = () => {
    switch (drive.toUpperCase()) {
      case "FWD":
        return "Traction";
      case "RWD":
        return "Propulsion";
      case "AWD":
        return "Intégrale";
    }
  };
  const mpgToKmPerL = (mpg: number) => {
    const milesToKm = 1.60934;
    const gallonsToLiters = 3.78541;
    return (1000 / (mpg * milesToKm * gallonsToLiters)).toFixed(2);
  };
  return (
    <div className="car-card group">
      <div className="car-card__content">
        <h2 className="car-card__content-title">
          {make} {model}
        </h2>
      </div>
      <p className="flex mt-6 text-[32px] leading-[38px] font-extrabold">
        {rentalRate}
        <span
          className="self-start text-[14px]
        font-semibold"
        >
          €
        </span>
        <span
          className="self-end text-[14px]
        font-medium"
        >
          / jour
        </span>
      </p>
      <div className="relative w-full h-40 my-3 object-contain">
        <Image
          src={generateCarImageUrl(voiture, "")}
          alt="car model"
          fill
          priority
          className="object-contain"
        />
      </div>
      <div className="relative flex w-full mt-2">
        <div
          className="flex group-hover:invisible
        w-full justify-between text-gray"
        >
          <div
            className="flex flex-col justify-center
          items-center gap-2"
          >
            <Image
              src="/steering-wheel.svg"
              width={20}
              height={20}
              alt="transmission"
            />
            <p className="text-[14px]">
              {transmission === "a" ? "Automatique" : "Manuelle"}
            </p>
          </div>
          <div
            className="flex flex-col justify-center
          items-center gap-2"
          >
            <Image src="/tire.svg" width={20} height={20} alt="roue" />
            <p className="text-[14px]">{checkTransmission()}</p>
          </div>
          <div
            className="flex flex-col justify-center
          items-center gap-2"
          >
            <Image src="/gas.svg" width={20} height={20} alt="energie" />
            <p className="text-[14px]">{mpgToKmPerL(city_mpg)} L/100</p>
          </div>
        </div>
        <div className="car-card__btn-container">
          <CustomButton
            titre="Voir plus"
            containerStyles="w-full py-[16px] 
            rounded-full bg-primary-blue"
            textStyles="text-white text-[14px] leading-[17px] 
            font-bold"
            rightIcon="/right-arrow.svg"
            handleClick={() => {
              setIsOpen(true);
            }}
          />
        </div>
      </div>
      <DetailVoiture
        isOpen={isOpen}
        closeModel={() => setIsOpen(false)}
        voiture={voiture}
      />
    </div>
  );
};

export default VoitureCard;
