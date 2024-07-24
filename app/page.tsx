import Image, { StaticImageData } from "next/image";

import { Container } from "@/components/Container";
import { Earphones, Headphones, Speakers } from "@/components/public-images";
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
      className="relative flex flex-col bg-main-grey rounded-lg w-full max-w-80 h-44 py-6 md:max-w-full">
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

export default async function Index() {
  return (
    <Container className=" py-12">
      <div className="flex flex-col gap-20 sm:flex-row sm:gap-4 items-center justify-center">
        <MainProduct image={Earphones} name="Earphones" link="#" />
        <MainProduct image={Headphones} name="Headphones" link="#" />
        <MainProduct image={Speakers} name="Speakers" link="#" />
      </div>
    </Container>
  );
}
