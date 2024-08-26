"use client";
import React, { Dispatch, SetStateAction, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image, { StaticImageData } from "next/image";
import { Bars3Icon, ChevronRightIcon } from "@heroicons/react/24/outline";

import { Container } from "./Container";
import { AppLogo, Earphones, Headphones, Speakers } from "./public-images";
import { AppButton } from "./AppButton";
import PageLinks from "./PageLinks";

import CartComponent from "./CartComponent";

const DeskTopLinks = () => {
  return <PageLinks className="hidden md:flex gap-2 lg:gap-4" />;
};

const MobileLinks = ({
  setIsNavOpen,
}: {
  setIsNavOpen: Dispatch<SetStateAction<boolean>>;
}) => {
  return (
    <button
      onClick={() => setIsNavOpen((prev) => !prev)}
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
    <AppButton
      href={link}
      className="relative grid justify-items-center bg-main-grey rounded-lg  mt-16 pb-2">
      <div className=" absolute size-28 -top-14">
        <Image src={image} alt={name} />
      </div>
      <div className=" w-56 h-40 flex flex-col items-center justify-end">
        <p className=" text-app-body uppercase text-black">{name}</p>
        <AppButton variant="tertiary" className="flex items-center">
          <span className="uppercase text-app-subtitle text-black/50">
            shop
          </span>
          <ChevronRightIcon className=" text-main-orange stroke-[3px] size-4" />
        </AppButton>
      </div>
    </AppButton>
  );
};

const Nav = () => {
  const [isNavOpen, setIsNavOpen] = useState<boolean>(false);

  return (
    <>
      <Container className="bg-black border-b border-gray-500 sm:border-none">
        <div className=" flex  text-white justify-between items-center py-4 border-b-0 sm:py-6  sm:border-b sm:border-gray-500 ">
          <AppButton href={"/"} className="order-2 flex-1 md:order-first  ">
            <Image src={AppLogo} alt="app logo" />
          </AppButton>
          <div className="order-first flex-1 md:order-2 md:flex-none ">
            <DeskTopLinks />
            <MobileLinks setIsNavOpen={setIsNavOpen} />
          </div>
          <div className=" order-last flex-1">
            <CartComponent />
          </div>
        </div>
      </Container>

      <AnimatePresence>
        {isNavOpen && (
          <motion.div
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            exit={{ y: -100 }}>
            <Container className="relative pb-8 w-full  bg-light-grey">
              <div className="flex gap-2 flex-wrap justify-center ">
                <MobileNavLinks image={Earphones} name="Earphones" link="#" />
                <MobileNavLinks image={Headphones} name="Earphones" link="#" />
                <MobileNavLinks image={Speakers} name="Earphones" link="#" />
              </div>
            </Container>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Nav;
