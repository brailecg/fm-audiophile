import PageHeader from "@/components/PageHeader";
import React from "react";
import { ProductType } from "@/types/appTypes";

import {
  HeadphonesMark1,
  HeadphonesMark2,
  HeadphonesXx59,
} from "@/components/public-images";
import Image from "next/image";
import { Container } from "@/components/Container";
import { AppButton } from "@/components/AppButton";
import MainProducts from "@/components/MainProducts";
import FooterAbout from "@/components/FooterAbout";

const headPhonesData: ProductType[] = [
  {
    id: crypto.randomUUID(),
    isNewProduct: true,
    name: "XX99 Mark II Headphones",
    description:
      "The new XX99 Mark II headphones is the pinnacle of pristine audio. It redefines your premium headphone experience by reproducing the balanced depth and precision of studio-quality sound.",
    image: HeadphonesMark2,
  },
  {
    id: crypto.randomUUID(),
    isNewProduct: false,
    name: "XX99 Mark I Headphones",
    description:
      "As the gold standard for headphones, the classic XX99 Mark I offers detailed and accurate audio reproduction for audiophiles, mixing engineers, and music aficionados alike in studios and on the go.",
    image: HeadphonesMark1,
  },
  {
    id: crypto.randomUUID(),
    isNewProduct: false,
    name: "XX59 Headphones",
    description:
      "Enjoy your audio almost anywhere and customize it to your specific tastes with the XX59 headphones. The stylish yet durable versatile wireless headset is a brilliant companion at home or on the move.",
    image: HeadphonesXx59,
  },
];

const ProductView = ({ item, idx }: { item: ProductType; idx: number }) => {
  return (
    <div className="flex flex-col gap-8 md:flex-row md:gap-16 lg:gap-32">
      <div
        className={`bg-main-grey flex justify-center rounded-lg pb-16 pt-10 md:flex-1 ${
          idx % 2 !== 0 ? " order-last" : ""
        }`}>
        <div className=" w-[220px] lg:w-[345px]">
          <Image
            src={item?.image}
            alt="Headphones Mark 2"
            className="rounded-lg"
            sizes="(max-width: 1024px) 220px,
 345px"
          />
        </div>
      </div>
      <div className="text-center  flex flex-col gap-6 md:flex-1 md:text-start md:justify-center ">
        {item?.isNewProduct && (
          <p className=" text-app-overline text-main-orange">NEW PRODUCT</p>
        )}
        <h4 className=" text-app-h4">{item?.name}</h4>
        <p className=" text-black/50 text-sm leading-loose">
          {item?.description}
        </p>
        <div>
          <AppButton
            href={"#"}
            variant="primary"
            className="text-white py-4 px-8 flex-">
            SEE PRODUCT
          </AppButton>
        </div>
      </div>
    </div>
  );
};

const Headphones = () => {
  return (
    <div>
      <PageHeader>HEADPHONES</PageHeader>
      <Container className=" mt-16">
        <div className=" grid gap-24 lg:gap-40">
          {headPhonesData.map((item, idx) => (
            <React.Fragment key={item?.id}>
              <ProductView item={item} idx={idx} />
            </React.Fragment>
          ))}
        </div>
        <MainProducts className=" my-32 md:my-44" />
        <FooterAbout className="mb-24 md:mb-44 md:mt-44" />
      </Container>
    </div>
  );
};

export default Headphones;
