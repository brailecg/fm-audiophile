import Image, { StaticImageData } from "next/image";

import { Container } from "@/components/Container";
import {
  HeaderHero,
  FeaturedSpeaker,
  CirclePatterns,
  SpeakerMobile,
  SpeakerTablet,
  SpeakerDesktop,
  FeaturedEarphones,
  FeaturedEarphonesSm,
} from "@/components/public-images";
import { AppButton } from "@/components/AppButton";
import FooterAbout from "@/components/FooterAbout";
import MainProducts from "@/components/MainProducts";

const HomeHeaderSection = () => {
  return (
    <Container className="bg-black ">
      <header className="z-40 relative flex justify-center items-center">
        <div className="text-center absolute z-40  content-center text-white xs:w-4/5  grid gap-2 sm:gap-6 md:self-center md:gap-3 lg:gap-6 md:z-0 md:relative md:text-start  flex-1 md:pt-0">
          <div className=" text-gray-400 text-app-overline-tablet lg:text-app-overline">
            NEW PRODUCT
          </div>
          <h1 className=" uppercase header-text lg:leading-tight">
            XX9 mark II headphones
          </h1>
          <p className="mx-auto sm:w-[60%] text-[#fff] text-sub md:w-full text-app-body-tablet lg:text-app-body">
            Experience natural, lifelike audio and exceptional build quality
            made for the passionate music enthusiast.
          </p>
          <AppButton
            variant="primary"
            className=" justify-self-center hover:bg-light-orange lg:px-7 lg:py-4 w-fit text-xs md:justify-self-start">
            SEE PRODUCT
          </AppButton>
        </div>
        <div className="p-2 sm:p-8 lg:p-12 z-30 flex-1 lg:w-1/2 flex justify-center items-center relative">
          <div
            style={{
              background:
                "radial-gradient( circle, rgba(2, 0, 36, 1) 0%, rgb(50, 52, 54) 0%, rgba(0, 0, 0, 1) 80% )",
            }}
            className="size-[99%]  absolute "
          />
          <Image className="relative" src={HeaderHero} alt="hero image" />
        </div>
      </header>
    </Container>
  );
};

const FeaturedSpeakerOne = () => {
  return (
    <div className="overflow-hidden flex flex-col mt-28  bg-main-orange w-full rounded-lg py-10 sm:py-16 px-6 lg:flex-row">
      <div className="relative flex justify-center lg:flex-1">
        <div className="z-10 mx-auto w-[170px] md:w-[200px] lg:w-[300px] lg:absolute lg:top-11">
          <Image
            src={FeaturedSpeaker}
            alt="EarPhone"
            sizes="(max-width: 768px) 170px,
 200px"
          />
        </div>
        <div className="absolute w-[550px] -top-40 lg:w-[700px] lg:top-38">
          <Image
            src={CirclePatterns}
            alt="CirclePatterns"
            sizes="(max-width: 768px) 550px,
 700px"
          />
        </div>
      </div>
      <div className=" mt-10 flex flex-col items-center gap-6 lg:flex-1 lg:items-start">
        <h3 className=" text-app-h3 text-white max-w-[200px] text-center md:max-w-[300px] md:text-app-h1 lg:text-start">
          ZX9 SPEAKER
        </h3>
        <p className=" text-app-body text-white/75 font-thin text-center text-sm max-w-[340px] lg:text-start">
          Upgrade to premium speakers that are phenomenally built to deliver
          truly remarkable sound.
        </p>
        <AppButton
          variant="secondary"
          className="z-20 h-12 w-40 hover:bg-[#4C4C4C] hover:border-[#4C4C4C] bg-black text-white text-xs">
          SEE PRODUCT
        </AppButton>
      </div>
    </div>
  );
};

const FeaturedSpeakerTwo = () => {
  return (
    <div className="mt-6 md:mt-8 lg:mt-12 rounded-lg relative grid ">
      <div className="z-20 absolute grid gap-8 self-center left-5 xs:left-10 md:left-16">
        <h3 className="text-app-h4 xs:text-app-h3 text-black  text-center  lg:text-start">
          ZX9 SPEAKER
        </h3>
        <AppButton
          variant="secondary"
          className=" w-40 h-12 bg-transparent hover:bg-black">
          SEE PRODUCT
        </AppButton>
      </div>
      <div className="md:hidden">
        <Image
          alt="Speaker two"
          src={SpeakerMobile}
          className="rounded-lg w-full z-10"
        />
      </div>
      <div className="hidden md:grid lg:hidden">
        <Image
          alt="Speaker two"
          src={SpeakerTablet}
          className="rounded-lg w-full z-10"
        />
      </div>
      <div className="hidden lg:flex">
        <Image
          alt="Speaker two"
          src={SpeakerDesktop}
          className="rounded-lg w-full z-10"
        />
      </div>
    </div>
  );
};

const FeaturedEarphonesSection = () => {
  return (
    <div className="mt-16 gap-6 flex flex-col sm:flex-row sm:gap-3  ">
      <div className="w-full sm:hidden lg:flex lg:flex-1">
        <Image
          src={FeaturedEarphones}
          alt="FeaturedEarphones"
          className="rounded-lg w-full"
        />
      </div>
      <div className="hidden sm:flex sm:flex-1 lg:hidden">
        <Image
          src={FeaturedEarphonesSm}
          alt="FeaturedEarphonesSM"
          className="rounded-lg"
        />
      </div>
      <div className=" flex flex-col gap-8 py-11 pl-8 rounded-lg bg-[#f1f1f1] sm:flex-1 sm:justify-center sm:pl-4 lg:pl-20 lg:max-w-[50%]">
        <h3 className="text-app-h5 xs:text-app-h4 text-black    lg:text-start">
          YX1 EARPHONES
        </h3>
        <AppButton
          variant="secondary"
          className=" w-40 h-12 bg-transparent hover:bg-black">
          SEE PRODUCT
        </AppButton>
      </div>
    </div>
  );
};

export default async function Index() {
  return (
    <>
      <HomeHeaderSection />

      <Container className=" mt-36">
        <MainProducts className=" my-32 md:my-44" />
        <FeaturedSpeakerOne />
        <FeaturedSpeakerTwo />
        <FeaturedEarphonesSection />
        <FooterAbout className="mb-24 md:mb-44 md:mt-44" />
      </Container>
    </>
  );
}
