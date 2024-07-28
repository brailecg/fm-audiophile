import Image from "next/image";

import {
  HeadphonesMark1,
  HeadphonesMark2,
  HeadphonesXx59,
  HpImg1,
  HpImg2,
  HpImg3,
} from "@/components/public-images";
import React from "react";

import { Container } from "@/components/Container";

import AppCartCounter from "@/components/AppCartCounter";
import { AppButton } from "@/components/AppButton";
import Link from "next/link";
import MainProducts from "@/components/MainProducts";
import FooterAbout from "@/components/FooterAbout";
import { numberToPrice } from "@/lib/utils";

const itemSample = {
  id: crypto.randomUUID(),
  isNewProduct: true,
  name: "XX99 Mark II Headphones",
  description:
    "The new XX99 Mark II headphones is the pinnacle of pristine audio. It redefines your premium headphone experience by reproducing the balanced depth and precision of studio-quality sound.",
  image: HeadphonesMark2,
  price: 2999,
  features: [
    "Featuring a genuine leather head strap and premium earcups, these headphones deliver superior comfort for those who like to enjoy endless listening. It includes intuitive controls designed for any situation. Whether you're taking a business call or just in your own personal space, the auto on/off and pause features ensure that you'll never miss a beat.",
    "The advanced Active Noise Cancellation with built-in equalizer allow you to experience your audio world on your terms. It lets you enjoy your audio in peace, but quickly interact with your surroundings when you need to. Combined with Bluetooth 5. 0 compliant connectivity and 17 hour battery life, the XX99 Mark II headphones gives you superior sound, cutting-edge technology, and a modern design aesthetic.",
  ],
  inTheBox: [
    {
      name: "Headphone Unit",
      count: 1,
    },
    {
      name: "Replacement Earcups",
      count: 2,
    },
  ],
  sampleImages: [HpImg1, HpImg2, HpImg3],
};

const youMayAlsoLikeSample = [
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

const ProductHeadphone = () => {
  return (
    <React.Fragment>
      <Container classNameInner="grid gap-12">
        <div className=" mt-8">
          <AppButton className=" text-black/50" href={"./"}>
            Go back
          </AppButton>
        </div>
        <div className="flex flex-col gap-8 md:flex-row md:gap-16 lg:gap-32">
          <div
            className={`bg-main-grey flex justify-center rounded-lg pb-16 pt-10 md:flex-1 `}>
            <div className=" w-[220px] lg:w-[345px]">
              <Image
                src={itemSample?.image}
                alt="Headphones Mark 2"
                className="rounded-lg"
                sizes="(max-width: 1024px) 220px,
345px"
              />
            </div>
          </div>
          <div className="flex flex-col gap-6 md:flex-1 text-start ">
            {itemSample?.isNewProduct && (
              <p className=" text-app-overline text-main-orange">NEW PRODUCT</p>
            )}
            <h4 className=" text-app-h4">{itemSample?.name}</h4>
            <p className=" text-black/50 text-sm leading-loose">
              {itemSample?.description}
            </p>
            <div className=" font-semibold">
              {numberToPrice(itemSample?.price)}
            </div>
            <AppCartCounter />
          </div>
        </div>
        <div className=" flex flex-col gap-12 lg:flex-row lg:gap-20">
          <div className=" lg:w-2/3 ">
            <h5 className=" text-app-h5 uppercase mb-6">Features</h5>
            <div className=" text-[15px] leading-relaxed text-black/50 flex flex-col gap-4">
              {itemSample.features.map((feat, idx) => {
                return <p key={idx}>{feat}</p>;
              })}
            </div>
          </div>
          <div className=" flex flex-col md:flex-row md:flex-1  lg:flex-col ">
            <h5 className=" text-app-h5 uppercase mb-6 md:flex-1 lg:flex-none">
              In The Box
            </h5>
            <div className=" text-[15px] leading-relaxed text-black/50 flex flex-col gap-2 md:flex-1">
              {itemSample.inTheBox.map((item, idx) => {
                return (
                  <div key={idx} className="flex">
                    <p className=" text-main-orange font-semibold min-w-12">
                      {item?.count}x
                    </p>
                    <p>{item?.name}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        <div className=" grid gap-6">
          <div className="">
            <Image
              src={HpImg1}
              alt="sample image"
              className={`rounded-lg h-full w-full object-cover`}
            />
          </div>
          <div className="">
            <Image
              src={HpImg2}
              alt="sample image"
              className={`rounded-lg h-full w-full object-cover`}
            />
          </div>
          <div className="md:row-start-1 md:row-end-3 md:col-start-2 md:col-end-3">
            <Image
              src={HpImg3}
              alt="sample image"
              className={`rounded-lg h-full w-full object-cover`}
            />
          </div>
        </div>
        <div className="">
          <h5 className=" text-app-h5 uppercase text-center mb-8">
            You may also like
          </h5>
          <div className="flex flex-col gap-14 sm:flex-row sm:justify-between sm:gap-4">
            {youMayAlsoLikeSample.map((item) => {
              return (
                <div
                  key={item?.id}
                  className=" flex flex-col items-center gap-5 w-full">
                  <div className="bg-main-grey flex justify-center items-center rounded-lg py-3 w-full max-w-96 sm:min-h-72">
                    <div className=" w-20 sm:w-28">
                      <Image
                        src={item?.image}
                        alt={item.name}
                        sizes="(max-width: 768px) 80px, 100px"
                      />
                    </div>
                  </div>
                  <h3 className=" text-app-h4">{item?.name}</h3>
                  <AppButton
                    variant="primary"
                    className="uppercase min-w-40 min-h-12">
                    see product
                  </AppButton>
                </div>
              );
            })}
          </div>
        </div>
        <MainProducts className=" my-32 md:my-44" />
        <FooterAbout className="mb-24 md:mb-44" />
      </Container>
    </React.Fragment>
  );
};

export default ProductHeadphone;
