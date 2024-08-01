import React from "react";
import Image from "next/image";
import { AudioGear, AudioGearSm } from "./public-images";
import { cn } from "@/lib/utils";
import AppMotionImage from "./AppMotionImage";
import AppMotionComponent from "./AppMotionComponent";
const FooterAbout = ({ className }: { className: string }) => {
  return (
    <div className={cn("flex flex-col lg:flex-row lg:gap-4", className)}>
      <AppMotionImage
        variant="opacityY"
        className=" xs:hidden lg:flex lg:flex-1 lg:order-last lg:min-w-[50%]">
        <Image src={AudioGear} alt="AudioGear" className="rounded-lg" />
      </AppMotionImage>
      <AppMotionImage variant="opacityY" className="hidden xs:flex lg:hidden">
        <Image src={AudioGearSm} alt="AudioGearSm" className="rounded-lg" />
      </AppMotionImage>
      <AppMotionComponent
        variant="opacityInX"
        className=" mt-8 flex flex-col gap-4 text-center lg:flex-1 lg:text-start lg:my-auto lg:max-w-[50%] lg:pr-24">
        <h1 className="uppercase text-app-h4  xs:text-app-h3">
          Bringing you the <span className="text-main-orange">best</span> audio
          gear
        </h1>
        <p className=" text-sm text-black/50 font-normal ">
          Located at the heart of New York City, Audiophile is the premier store
          for high end headphones, earphones, speakers, and audio accessories.
          We have a large showroom and luxury demonstration rooms available for
          you to browse and experience a wide range of our products. Stop by our
          store to meet some of the fantastic people who make Audiophile the
          best place to buy your portable audio equipment.
        </p>
      </AppMotionComponent>
    </div>
  );
};

export default FooterAbout;
