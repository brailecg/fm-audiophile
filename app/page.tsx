import Image, { StaticImageData } from "next/image";

import { Container } from "@/components/Container";
import {
  Earphones,
  Headphones,
  Speakers,
  FeaturedSpeaker,
  CirclePatterns,
  SpeakerMobile,
  SpeakerTablet,
  SpeakerDesktop,
  FeaturedEarphones,
  FeaturedEarphonesSm,
  AudioGear,
  AudioGearSm,
} from "@/components/public-images";
import { AppButton } from "@/components/AppButton";
import { ChevronRightIcon } from "@heroicons/react/24/outline";

type MainProductType = {
  image: StaticImageData;
  name: string;
  link: string;
};

const MainProduct = ({ image, name, link }: MainProductType) => {
  return (
    <AppButton
      href={link}
      variant="empty"
      className="relative flex flex-col bg-main-grey rounded-lg w-full h-44 py-6 md:max-w-full">
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
          <span className="uppercase  text-app-subtitle text-black/50">
            shop
          </span>
          <ChevronRightIcon className=" text-main-orange stroke-[3px] size-4" />
        </div>
      </div>
    </AppButton>
  );
};

const HomeMainProduct = () => {
  return (
    <div className="flex flex-col gap-20 sm:flex-row sm:gap-4 items-center justify-center">
      <MainProduct image={Earphones} name="Earphones" link="#" />
      <MainProduct image={Headphones} name="Headphones" link="#" />
      <MainProduct image={Speakers} name="Speakers" link="#" />
    </div>
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
          className="z-20 h-12 w-40 hover:!bg-[#4C4C4C] hover:!border-[#4C4C4C] !bg-black !text-white text-xs">
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
          className=" w-40 h-12 bg-transparent hover:!bg-black">
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
          className=" w-40 h-12 bg-transparent hover:!bg-black">
          SEE PRODUCT
        </AppButton>
      </div>
    </div>
  );
};

export default async function Index() {
  return (
    <Container className=" mt-36 mb-24">
      <HomeMainProduct />
      <FeaturedSpeakerOne />
      <FeaturedSpeakerTwo />
      <FeaturedEarphonesSection />
      <div className="mt-24 flex flex-col lg:flex-row lg:gap-4">
        <div className=" xs:hidden lg:flex lg:flex-1 lg:order-last lg:min-w-[50%]">
          <Image src={AudioGear} alt="AudioGear" className="rounded-lg" />
        </div>
        <div className="hidden xs:flex lg:hidden">
          <Image src={AudioGearSm} alt="AudioGearSm" className="rounded-lg" />
        </div>
        <div className=" mt-8 flex flex-col gap-4 text-center lg:flex-1 lg:text-start lg:my-auto lg:max-w-[50%] lg:pr-24">
          <h1 className="uppercase text-app-h4  xs:text-app-h3">
            Bringing you the <span className="text-main-orange">best</span>{" "}
            audio gear
          </h1>
          <p className=" text-sm text-black/50 font-normal ">
            Located at the heart of New York City, Audiophile is the premier
            store for high end headphones, earphones, speakers, and audio
            accessories. We have a large showroom and luxury demonstration rooms
            available for you to browse and experience a wide range of our
            products. Stop by our store to meet some of the fantastic people who
            make Audiophile the best place to buy your portable audio equipment.
          </p>
        </div>
      </div>
    </Container>
  );
}
