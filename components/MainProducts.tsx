import React from "react";
import Image from "next/image";
import { MainProductType } from "../types/appTypes";
import { AppButton } from "./AppButton";
import { ChevronRightIcon } from "@heroicons/react/24/outline";
import { Earphones, Headphones, Speakers } from "./public-images";

const MainProduct = ({ image, name, link }: MainProductType) => {
  return (
    <AppButton
      href={link}
      className="group relative flex flex-col items-center bg-main-grey rounded-lg w-full h-44 py-6 md:max-w-full">
      <div className="absolute -top-14 md:-top-20  w-[101px] md:w-[120px]">
        <Image
          src={image}
          alt="EarPhone"
          sizes="(max-width: 768px) 101px,
           120px"
        />
      </div>
      <div className="flex flex-col h-full justify-end gap-4">
        <p className=" text-app-body uppercase text-black">{name}</p>
        <div className="flex justify-center items-center">
          <span className="uppercase  text-app-subtitle text-black/50 group-hover:text-main-orange">
            shop
          </span>
          <ChevronRightIcon className=" text-main-orange stroke-[3px] size-4" />
        </div>
      </div>
    </AppButton>
  );
};

const MainProducts = () => {
  return (
    <div className="mt-24 flex flex-col gap-20 sm:flex-row sm:gap-4 items-center justify-center">
      <MainProduct image={Earphones} name="Earphones" link="#" />
      <MainProduct image={Headphones} name="Headphones" link="#" />
      <MainProduct image={Speakers} name="Speakers" link="#" />
    </div>
  );
};

export default MainProducts;
