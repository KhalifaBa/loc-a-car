import exp from "constants";
import { MouseEventHandler } from "react";

export interface CustomButtonProps {
  titre: string;
  containerStyles?: string;
  handleClick?: MouseEventHandler<HTMLButtonElement>; // ? = optional
  btnType?: "button" | "submit";
  textStyles?: string;
  rightIcon?: string;
  isDisabled?: boolean;
}
export interface MarqueProps {
  marque: string;
  setMarque: (marque: string) => void;
}
export interface VoirPlusProps {
  nbPage: number;
  estSuivant: boolean;
}
export interface FilterProps {
  marque: string;
  energie: string;
  limit: number;
  modele: string;
  annee: number;
}

export interface VoitureProps {
  city_mpg: number;
  class: string;
  combination_mpg: number;
  cylinders: number;
  displacement: number;
  drive: string;
  fuel_type: string;
  highway_mpg: number;
  make: string;
  model: string;
  transmission: string;
  year: number;
}

export interface OptionProps {
  title: string;
  value: string;
}
export interface FiltrePersoProps {
  titre: string;
  options: OptionProps[];
}
