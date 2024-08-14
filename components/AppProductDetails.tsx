import React from "react";
import Image from "next/image";
import AppMotionImage from "./AppMotionImage";
import AppMotionComponent from "./AppMotionComponent";
import AppCartCounter from "./AppCartCounter";
import { numberToPrice } from "@/lib/utils";
import { ProductType } from "@/types/appTypes";
import { AppButton } from "./AppButton";

const AppProductDetails = ({ product }: { product: ProductType }) => {
  const handleGoBack = () => {
    history.back();
  };
  return (
    <React.Fragment>
      <div className=" mt-8">
        <AppButton className=" text-black/50" onClick={handleGoBack}>
          Go back
        </AppButton>
      </div>
      <div className="flex flex-col gap-8 md:flex-row md:gap-16 lg:gap-32">
        <AppMotionImage
          variant="opacityX"
          className={`bg-main-grey flex justify-center rounded-lg pb-16 pt-10 md:flex-1 `}>
          <div className=" w-[220px] lg:w-[345px]">
            <Image
              src={
                process.env.NEXT_PUBLIC_PRODUCT_IMAGE_BASE_URL +
                "/" +
                product?.product_images?.desktop
              }
              alt={product?.name as string}
              className="rounded-lg"
              width={0}
              height={0}
              sizes="100vw"
              style={{ width: "100%", height: "auto" }}
            />
          </div>
        </AppMotionImage>
        <AppMotionComponent
          variant="opacityInX"
          className="flex flex-col gap-6 md:flex-1 text-start ">
          {product?.is_new_product && (
            <p className=" text-app-overline text-main-orange">NEW PRODUCT</p>
          )}
          <h4 className=" text-app-h4">{product?.name}</h4>
          <p className=" text-black/50 text-sm leading-loose">
            {product?.description}
          </p>
          <span className=" font-semibold">
            {numberToPrice(
              product?.products_skus?.product_price
                ? product?.products_skus?.product_price
                : 0
            )}
          </span>
          <AppCartCounter />
        </AppMotionComponent>
      </div>
      <div className=" flex flex-col gap-12 lg:flex-row lg:gap-20">
        <div className=" lg:w-2/3 ">
          <h5 className=" text-app-h5 uppercase mb-6">Features</h5>
          <div className=" text-[15px] leading-relaxed text-black/50 flex flex-col gap-4">
            {product?.summary.split("\\n\\n").map((str, idx) => (
              <p key={idx}>{str}</p>
            ))}
          </div>
        </div>
        <div className=" flex flex-col md:flex-row md:flex-1  lg:flex-col ">
          <h5 className=" text-app-h5 uppercase mb-6 md:flex-1 lg:flex-none">
            In The Box
          </h5>
          <div className=" text-[15px] leading-relaxed text-black/50 flex flex-col gap-2 md:flex-1">
            {product?.in_the_box.map((item, idx) => {
              return (
                <div key={idx} className="flex">
                  <p className=" text-main-orange font-semibold min-w-12">
                    {item?.units}x
                  </p>
                  <p>{item?.name}</p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default AppProductDetails;
