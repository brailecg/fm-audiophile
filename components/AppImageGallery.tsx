import React from "react";
import Image from "next/image";
import AppMotionImage from "./AppMotionImage";

const AppImageGallery = ({ productImages }: { productImages: string[] }) => {
  return (
    <div className=" grid gap-6">
      <AppMotionImage variant="opacityInX" className="">
        <Image
          src={
            process.env.NEXT_PUBLIC_PRODUCT_IMAGE_BASE_URL +
            "/" +
            productImages[0]
          }
          alt="sample image"
          className={`rounded-lg h-full w-full object-cover`}
          width={0}
          height={0}
          sizes="100vw"
        />
      </AppMotionImage>
      <AppMotionImage variant="opacityInX" className="">
        <Image
          src={
            process.env.NEXT_PUBLIC_PRODUCT_IMAGE_BASE_URL +
            "/" +
            productImages[1]
          }
          alt="sample image"
          className={`rounded-lg h-full w-full object-cover`}
          width={0}
          height={0}
          sizes="100vw"
        />
      </AppMotionImage>
      <AppMotionImage className="md:row-start-1 md:row-end-3 md:col-start-2 md:col-end-3 h-full">
        <Image
          src={
            process.env.NEXT_PUBLIC_PRODUCT_IMAGE_BASE_URL +
            "/" +
            productImages[2]
          }
          alt="sample image"
          className={`rounded-lg h-full w-full object-cover`}
          width={0}
          height={0}
          sizes="(max-width: 1200px) 100vw, 50vw"
        />
      </AppMotionImage>
    </div>
  );
};

export default AppImageGallery;
