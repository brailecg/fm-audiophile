"use client";
import React, {
  Dispatch,
  MouseEventHandler,
  SetStateAction,
  useState,
} from "react";
import { Container, ContainerOuter } from "./Container";

import Image, { StaticImageData } from "next/image";
import { Bars3Icon, ChevronRightIcon } from "@heroicons/react/24/outline";

import AppLogo from "../public/logo.svg";
import CartIcon from "../public/icon-cart.svg";

import Earphones from "../public/earphones.png";
import { AppButton } from "./AppButton";

const DeskTopLinks = () => {
  return (
    <ul className="hidden md:flex gap-2 tracking-[2px] lg:gap-4 text-sm font-semibold ">
      <li>
        <AppButton href={"#"} variant="tertiary" className="px-0">
          HOME
        </AppButton>
      </li>
      <li>
        <AppButton href={"#"} variant="tertiary" className="px-0">
          HEADPHONES
        </AppButton>
      </li>
      <li>
        <AppButton href={"#"} variant="tertiary" className="px-0">
          SPEAKERS
        </AppButton>
      </li>
      <li>
        <AppButton href={"#"} variant="tertiary" className="px-0">
          EARPHONES
        </AppButton>
      </li>
    </ul>
  );
};

const MobileLinks = ({
  setIsNavOpen,
}: {
  setIsNavOpen: Dispatch<SetStateAction<boolean>>;
}) => {
  return (
    <button
      onClick={setIsNavOpen as unknown as MouseEventHandler<HTMLButtonElement>}
      className="flex md:hidden">
      <Bars3Icon className=" size-6" />
    </button>
  );
};

type MobileNavLinksType = {
  image: StaticImageData;
  name: string;
  link: string;
};
const MobileNavLinks = ({ image, name, link }: MobileNavLinksType) => {
  return (
    <div className="relative grid justify-items-center bg-main-grey rounded-lg  mt-16 max-w-72 min-w-56 mx-8">
      <div className=" absolute size-28 -top-14">
        <Image src={image} alt="name" />
      </div>
      <div className=" w-56 h-40 flex flex-col items-center justify-end">
        <p className=" text-app-body uppercase text-black">{name}</p>
        <AppButton variant="tertiary" href={link}>
          <span className="uppercase text-app-subtitle text-black/50">
            shop
          </span>
          <ChevronRightIcon className=" text-main-orange stroke-[3px] size-4" />
        </AppButton>
      </div>
    </div>
  );
};

const Nav = () => {
  const [isNavOpen, setIsNavOpen] = useState<boolean>(false);

  return (
    <div className="relative">
      <Container>
        <div className="flex text-white justify-between items-center py-4 mb-4 sm:py-6 border-b border-gray-500">
          <div className="order-2 flex-1 md:order-first md:flex-auto  ">
            <Image src={AppLogo} alt="app logo" />
          </div>
          <div className="order-first flex-1 md:order-2 md:flex-auto  ">
            <DeskTopLinks />
            <MobileLinks setIsNavOpen={setIsNavOpen} />
          </div>
          <div className="order-last flex-1  md:flex-auto  flex justify-end">
            <Image src={CartIcon} alt="cart icon" />
          </div>
        </div>
      </Container>

      <ContainerOuter className="absolute z-50 pb-8 w-full hidden bg-light-grey ">
        <div className="flex gap-2 flex-wrap justify-center ">
          <MobileNavLinks image={Earphones} name="Earphones" link="#" />
          <MobileNavLinks image={Earphones} name="Earphones" link="#" />
          <MobileNavLinks image={Earphones} name="Earphones" link="#" />
        </div>
      </ContainerOuter>
    </div>
  );
};

export default Nav;
