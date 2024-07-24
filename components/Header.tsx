import { Container } from "./Container";
import Nav from "./Nav";
import Image from "next/image";

import HeaderHero from "../public/header-no-bg.png";
import { AppButton } from "./AppButton";
export default function Header() {
  return (
    <div className=" bg-black ">
      <Nav />
      <Container>
        <header className="z-40 relative flex justify-center items-center">
          <div className="text-center absolute z-40  content-center text-white xs:w-4/5  grid gap-2 sm:gap-6 md:self-center md:gap-3 lg:gap-6 md:z-0 md:relative md:text-start  flex-1 md:pt-0">
            <div className=" text-gray-400 text-app-overline-tablet lg:text-app-overline">
              NEW PRODUCT
            </div>
            <h1 className=" uppercase header-text">XX9 mark II headphones</h1>
            <p className="mx-auto sm:w-[60%] text-[#fff] text-sub md:w-full text-app-body-tablet lg:text-app-body">
              Experience natural, lifelike audio and exceptional build quality
              made for the passionate music enthusiast.
            </p>
            <AppButton className=" justify-self-center hover:bg-light-orange lg:px-7 lg:py-4 w-fit text-xs md:justify-self-start">
              SEE PRODUCT
            </AppButton>
          </div>
          <div className="sm:p-8 lg:p-12 z-30 flex-1 lg:w-1/2 flex justify-center items-center relative">
            <div
              style={{
                background:
                  "radial-gradient( circle, rgba(2, 0, 36, 1) 0%, rgb(50, 52, 54) 0%, rgba(0, 0, 0, 1) 80% )",
              }}
              className="size-full  absolute "
            />
            <Image className="relative" src={HeaderHero} alt="hero image" />
          </div>
        </header>
      </Container>
    </div>
  );
}
