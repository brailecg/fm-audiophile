"use client";
import React, { Dispatch, SetStateAction, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image, { StaticImageData } from "next/image";
import { Bars3Icon, ChevronRightIcon } from "@heroicons/react/24/outline";

import { Container } from "./Container";
import {
  AppLogo,
  CartIcon,
  Earphones,
  Headphones,
  Speakers,
} from "./public-images";
import { AppButton } from "./AppButton";
import PageLinks from "./PageLinks";
import AppProduct from "./AppProduct";
import { numberToPrice } from "@/lib/utils";

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
  const [isCartModalOpen, setIsCartModalOpen] = useState<boolean>(false);

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
          <AppButton
            onClick={() => setIsCartModalOpen((prev) => !prev)}
            className="order-last flex-1    flex justify-end">
            <Image src={CartIcon} alt="cart icon" />
          </AppButton>
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

      <AnimatePresence>
        {isCartModalOpen && (
          <Container>
            <div className="relative flex justify-center items-center ">
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="z-50 fixed inset-0 overflow-auto bg-black/40 flex"
                onClick={() =>
                  setIsCartModalOpen((prev) => !prev)
                }></motion.div>

              <motion.div
                initial={{ x: -100 }}
                animate={{ x: 0 }}
                exit={{ x: -100, opacity: 0 }}
                className="text-white absolute z-50 w-full max-w-[377px] min-h-[488px] top-0 right-0 bg-[#FFFFFF] rounded-lg p-8 flex flex-col gap-8">
                <div className="flex justify-between">
                  <h3 className=" text-app-h4 text-black">
                    CART <span>(3)</span>
                  </h3>
                  <AppButton className=" text-black/50 hover:underline">
                    Remove All
                  </AppButton>
                </div>
                <AppProduct />
                <div className="flex justify-between">
                  <span className=" text-black/50">TOTAL</span>
                  <div className=" text-black font-semibold">
                    {numberToPrice(2000)}
                  </div>
                </div>
                <AppButton variant="primary" className="w-full">
                  CHECKOUT
                </AppButton>
              </motion.div>
            </div>
          </Container>
        )}
      </AnimatePresence>
    </>
  );
};

export default Nav;
