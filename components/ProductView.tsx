"use client";
import Image from "next/image";
import { ProductType } from "@/types/appTypes";
import React from "react";
import { AppButton } from "./AppButton";
import { usePathname } from "next/navigation";
import AppMotionComponent from "./AppMotionComponent";

const ProductView = ({ item, idx }: { item: ProductType; idx: number }) => {
  const pathname = usePathname();
  return (
    <div className="flex flex-col gap-8 md:flex-row md:gap-16 lg:gap-32">
      <AppMotionComponent
        className={`bg-main-grey flex justify-center rounded-lg pb-16 pt-10 md:flex-1 ${
          idx % 2 !== 0 ? " md:order-last" : ""
        }`}>
        <div className=" w-[220px] lg:w-[345px]">
          <Image
            src={
              process.env.NEXT_PUBLIC_PRODUCT_IMAGE_BASE_URL +
              "/" +
              item?.product_images?.desktop
            }
            alt={item?.name as string}
            className="rounded-lg"
            width={0}
            height={0}
            sizes="100vw"
            style={{ width: "100%", height: "auto" }}
          />
        </div>
      </AppMotionComponent>
      <AppMotionComponent className="text-center  flex flex-col gap-6 md:flex-1 md:text-start md:justify-center ">
        {item?.is_new_product && (
          <p className=" text-app-overline text-main-orange">NEW PRODUCT</p>
        )}
        <h4 className=" text-app-h4">{item?.name}</h4>
        <p className=" text-black/50 text-sm leading-loose">
          {item?.description}
        </p>
        <div>
          <AppButton
            href={`${pathname}/${item?.product_id}`}
            variant="primary"
            className="text-white py-4 px-8 flex-">
            SEE PRODUCT
          </AppButton>
        </div>
      </AppMotionComponent>
    </div>
  );
};

export default ProductView;
