import PageHeader from "@/components/PageHeader";
import React from "react";
import { ProductType } from "@/types/appTypes";

import {
  HeadphonesMark1,
  HeadphonesMark2,
  HeadphonesXx59,
} from "@/components/public-images";
import { Container } from "@/components/Container";
import MainProducts from "@/components/MainProducts";
import FooterAbout from "@/components/FooterAbout";
import ProductView from "@/components/ProductView";

const headPhonesData: ProductType[] = [
  {
    id: crypto.randomUUID(),
    isNewProduct: true,
    name: "XX99 Mark II",
    description:
      "The new XX99 Mark II headphones is the pinnacle of pristine audio. It redefines your premium headphone experience by reproducing the balanced depth and precision of studio-quality sound.",
    image: HeadphonesMark2,
  },
  {
    id: crypto.randomUUID(),
    isNewProduct: false,
    name: "XX99 Mark I",
    description:
      "As the gold standard for headphones, the classic XX99 Mark I offers detailed and accurate audio reproduction for audiophiles, mixing engineers, and music aficionados alike in studios and on the go.",
    image: HeadphonesMark1,
  },
  {
    id: crypto.randomUUID(),
    isNewProduct: false,
    name: "XX59",
    description:
      "Enjoy your audio almost anywhere and customize it to your specific tastes with the XX59 headphones. The stylish yet durable versatile wireless headset is a brilliant companion at home or on the move.",
    image: HeadphonesXx59,
  },
];

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
