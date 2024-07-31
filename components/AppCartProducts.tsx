import Image from "next/image";
import React from "react";
import {
  HeadphonesMark1,
  HeadphonesMark2,
  HeadphonesXx59,
} from "./public-images";
import { CounterInput } from "./AppCartCounter";
import { numberToPrice } from "@/lib/utils";
import { cn } from "@/lib/utils";

const productsInCart = [
  {
    id: crypto.randomUUID(),
    isNewProduct: true,
    name: "XX99 Mark II",
    description:
      "The new XX99 Mark II headphones is the pinnacle of pristine audio. It redefines your premium headphone experience by reproducing the balanced depth and precision of studio-quality sound.",
    image: HeadphonesMark2,
    price: 2999,
    cartCount: 3,
    isAvailable: true,
  },
  {
    id: crypto.randomUUID(),
    isNewProduct: false,
    name: "XX99 Mark I",
    description:
      "As the gold standard for headphones, the classic XX99 Mark I offers detailed and accurate audio reproduction for audiophiles, mixing engineers, and music aficionados alike in studios and on the go.",
    image: HeadphonesMark1,
    price: 2792349,
    cartCount: 3,
    isAvailable: true,
  },
  {
    id: crypto.randomUUID(),
    isNewProduct: false,
    name: "XX59",
    description:
      "Enjoy your audio almost anywhere and customize it to your specific tastes with the XX59 headphones. The stylish yet durable versatile wireless headset is a brilliant companion at home or on the move.",
    image: HeadphonesXx59,
    price: 28.9,
    cartCount: 3,
    isAvailable: true,
  },
];

const AppCartProducts = ({
  from,
  className,
}: {
  from?: string;
  className?: string;
}) => {
  return (
    <ul className={cn("grid gap-3", className)}>
      {productsInCart?.map((item) => {
        return (
          <li key={item?.name} className="text-black gap-2 grid grid-cols-4">
            <div className="flex gap-4 col-span-3">
              <div className="flex items-center justify-center bg-main-grey p-4 rounded-lg  w-16 h-16">
                <Image alt={item.name} src={item?.image} className="min-w-9" />
              </div>
              <div className="flex flex-col flex-1 justify-center w-full">
                <span className=" leading-tight font-semibold inline-block ">
                  {item?.name}
                </span>
                <span className=" text-black/50 font-semibold">
                  {numberToPrice(item?.price)}
                </span>
              </div>
            </div>
            <div className=" col-span-1">
              {from === undefined && from !== "cartDialog" ? (
                <div className="text-black/50 font-semibold flex justify-end items-center">
                  {"x"}
                  {item?.cartCount}
                </div>
              ) : (
                <div className="flex items-center">
                  <CounterInput className="" />
                </div>
              )}
            </div>
          </li>
        );
      })}
    </ul>
  );
};

export default AppCartProducts;
