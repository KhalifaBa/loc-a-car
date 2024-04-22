"use client";
import React from "react";
import { useRouter } from "next/navigation";
import { VoirPlusProps } from "@/types";
import CustomButton from "./CustomButton";
import { updateSearchParams } from "@/utils";

const VoirPlus = ({ nbPage, estSuivant }: VoirPlusProps) => {
  const router = useRouter();
  const handleNavigate = () => {
    const newLimit = (nbPage + 1) * 10;
    const newPathName = updateSearchParams("limit", `${newLimit}`);
    router.push(newPathName, { scroll: false });
  };
  return (
    <div className="w-full flex-center gap-5 mt-10">
      {!estSuivant && (
        <CustomButton
          titre="Voir plus"
          btnType="button"
          containerStyles="bg-primary-blue rounded-full text-white"
          handleClick={handleNavigate}
        />
      )}
    </div>
  );
};

export default VoirPlus;
