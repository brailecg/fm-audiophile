import React from "react";
import Image from "next/image";

import { Container } from "./Container";
import AppLogo from "../public/logo.svg";
import FacebookIcon from "./Icons/FacebookIcon";
import TwitterIcon from "./Icons/TwitterIcon";
import InstagramIcon from "./Icons/InstagramIcon";
import { AppButton } from "./AppButton";

const FooterLinks = () => {
  return (
    <ul className="flex flex-col gap-2 items-center tracking-[2px] lg:gap-4 text-sm font-semibold md:flex-row">
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

const FooterSocials = () => {
  return (
    <div className=" flex py-2 items-center justify-center gap-4">
      <FacebookIcon />
      <TwitterIcon />
      <InstagramIcon />
    </div>
  );
};

const Footer = () => {
  return (
    <div className=" bg-black">
      <Container className="">
        <div className="relative flex justify-center md:justify-start">
          <div className="absolute h-1 w-28 bg-main-orange"></div>
        </div>
        <footer className=" text-white grid pt-14 pb-9 gap-12  md:gap-8">
          <div className=" gap-12 flex flex-col  md:gap-8 lg:flex-row lg:justify-between lg:items-center ">
            <div className=" flex justify-center md:justify-start">
              <Image src={AppLogo} alt="app logo" />
            </div>
            <div className="">
              <FooterLinks />
            </div>
          </div>
          <div className="relative  gap-12 grid  md:gap-8">
            <div className="  grid gap-12 md:gap-8 lg:gap-14">
              <div className=" flex">
                <p className="text-main-grey/50 text-center md:text-start lg:flex-1">
                  Audiophile is an all in one stop to fulfill your audio needs.
                  We're a small team of music lovers and sound specialists who
                  are devoted to helping you get the most out of personal audio.
                  Come and visit our demo facility - we're open 7 days a week.
                </p>
                <div className="hidden lg:flex lg:flex-1 lg:justify-end lg:items-end">
                  <FooterSocials />
                </div>
              </div>
              <div className=" flex justify-between items-center">
                <p className="w-full text-center text-main-grey/50 md:text-start">
                  Copyright 2021. All Rights Reserved
                </p>
                <div className="hidden md:flex lg:hidden">
                  <FooterSocials />
                </div>
              </div>
            </div>
            <div className=" md:hidden">
              <FooterSocials />
            </div>
          </div>
        </footer>
      </Container>
    </div>
  );
};

export default Footer;