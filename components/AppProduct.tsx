import Image from "next/image";
import React from "react";
import {
  HeadphonesMark1,
  HeadphonesMark2,
  HeadphonesXx59,
} from "./public-images";
import { CounterInput } from "./AppCartCounter";
import { numberToPrice } from "@/lib/utils";

const productsInCart = [
  {
    id: crypto.randomUUID(),
    isNewProduct: true,
    name: "XX99 Mark II",
    description:
      "The new XX99 Mark II headphones is the pinnacle of pristine audio. It redefines your premium headphone experience by reproducing the balanced depth and precision of studio-quality sound.",
    image: HeadphonesMark2,
    price: 2999,
  },
  {
    id: crypto.randomUUID(),
    isNewProduct: false,
    name: "XX99 Mark I",
    description:
      "As the gold standard for headphones, the classic XX99 Mark I offers detailed and accurate audio reproduction for audiophiles, mixing engineers, and music aficionados alike in studios and on the go.",
    image: HeadphonesMark1,
    price: 2799,
  },
  {
    id: crypto.randomUUID(),
    isNewProduct: false,
    name: "XX59",
    description:
      "Enjoy your audio almost anywhere and customize it to your specific tastes with the XX59 headphones. The stylish yet durable versatile wireless headset is a brilliant companion at home or on the move.",
    image: HeadphonesXx59,
    price: 28.9,
  },
];

const AppProduct = () => {
  return (
    <ul className="grid gap-3">
      {productsInCart?.map((item) => {
        return (
          <li key={item?.name} className="text-black flex gap-4">
            <div className="flex gap-4 w-2/3">
              <div className="flex items-center justify-center bg-main-grey p-4 rounded-lg  w-16 h-16">
                <Image alt={item.name} src={item?.image} className="w-9" />
              </div>
              <div className="flex flex-col flex-1 justify-center">
                <span className=" leading-tight font-semibold">
                  {item?.name}
                </span>
                <span className=" text-black/50 font-semibold">
                  {numberToPrice(item?.price)}
                </span>
              </div>
            </div>
            <div className="flex items-center w-1/3">
              <CounterInput className="" />
            </div>
          </li>
        );
      })}
    </ul>
  );
};

export default AppProduct;
