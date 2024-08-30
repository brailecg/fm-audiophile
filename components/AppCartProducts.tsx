import Image from "next/image";
import React from "react";
import AppCounterInput from "./AppCounterInput";
import { numberToPrice } from "@/lib/utils";
import { cn } from "@/lib/utils";
import { CartProductType } from "@/types/appTypes";

const AppCartProducts = ({
  cartStoreData,
  from,
  className,
}: {
  cartStoreData: CartProductType[];
  from?: string;
  className?: string;
}) => {
  return (
    <ul className={cn("grid gap-3", className)}>
      {cartStoreData?.map((item) => {
        const imageName = item.products.product_images.mobile
          ? item.products.product_images.mobile
          : item.products.product_images.tablet
          ? item.products.product_images.tablet
          : item.products.product_images.desktop;
        const itemImage =
          process.env.NEXT_PUBLIC_PRODUCT_IMAGE_BASE_URL + "/" + imageName;
        return (
          <li
            key={item?.products.name}
            className="text-black gap-2 grid grid-cols-4">
            <div className="flex gap-4 col-span-3">
              <div className="flex items-center justify-center bg-main-grey p-4 rounded-lg  w-16 h-16">
                <Image
                  alt={item?.products.name}
                  src={itemImage}
                  className="min-w-9"
                  width={36}
                  height={36}
                />
              </div>
              <div className="flex flex-col flex-1 justify-center w-full">
                <span className=" leading-tight font-semibold inline-block ">
                  {item?.products.name}
                </span>
                <span className=" text-black/50 font-semibold">
                  {numberToPrice(item?.cart_item_price)}
                </span>
              </div>
            </div>
            <div className=" col-span-1">
              {from === undefined && from !== "cartDialog" ? (
                <div className="text-black/50 font-semibold flex justify-end items-center">
                  {"x"}
                  {item?.cart_item_qty as number}
                </div>
              ) : (
                <div className="flex items-center">
                  <AppCounterInput productDetail={item} className="" />
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
