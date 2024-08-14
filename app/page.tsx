import Image from "next/image";

import { Container } from "@/components/Container";
import { CirclePatterns } from "@/components/public-images";
import { AppButton } from "@/components/AppButton";
import FooterAbout from "@/components/FooterAbout";
import MainProducts from "@/components/MainProducts";
import HomeHeaderArrow from "@/components/HomeHeaderArrow";

import AppMotionImage from "@/components/AppMotionImage";
import AppMotionComponent from "@/components/AppMotionComponent";

import { getFeaturedProducts } from "@/utils/server";
import { ProductType, FeaturedProductType } from "@/types/appTypes";

const HomeHeaderSection = async ({
  headerFeaturedProduct,
}: {
  headerFeaturedProduct: ProductType;
}) => {
  const headerImg =
    process.env.NEXT_PUBLIC_PRODUCT_IMAGE_BASE_URL +
    "/" +
    headerFeaturedProduct?.featured_images.desktop;

  return (
    <div className="bg-black max-h-screen">
      <Container className=" grid">
        <header className="z-40 relative flex justify-center items-center">
          <div className="text-center absolute z-40  content-center text-white xs:w-4/5  grid gap-2 sm:gap-6 md:self-center md:gap-3 lg:gap-6 md:z-0 md:relative md:text-start  flex-1 md:pt-0">
            {headerFeaturedProduct?.is_new_product && (
              <div className="header-title-text text-gray-400 text-app-overline-tablet lg:text-app-overline ">
                NEW PRODUCT
              </div>
            )}
            <h1 className="header-title-text uppercase header-text lg:leading-tight">
              {headerFeaturedProduct?.name}
            </h1>
            <p className="header-title-text mx-auto sm:w-[60%] text-[#fff] text-sub md:w-full text-app-body-tablet lg:text-app-body">
              {headerFeaturedProduct?.highlight}
            </p>
            <AppButton
              href={`/${headerFeaturedProduct?.categories.category_name.toLowerCase()}/${
                headerFeaturedProduct?.product_id
              }`}
              variant="primary"
              className="header-btn justify-self-center  hover:bg-light-orange lg:px-7 lg:py-4 w-fit text-xs md:justify-self-start">
              SEE PRODUCT
            </AppButton>
          </div>
          <div className="p-2 sm:p-8 lg:p-12 z-30 flex-1 lg:w-1/2 flex justify-center items-center relative">
            <div
              style={{
                background:
                  "radial-gradient( circle, rgba(2, 0, 36, 1) 0%, rgb(50, 52, 54) 0%, rgba(0, 0, 0, 1) 80% )",
              }}
              className="size-[99%] absolute"
            />
            <AppMotionImage className=" w-full lg:w-[50vw]">
              <Image
                src={headerImg}
                className="relative"
                width={0}
                height={0}
                sizes="(max-width: 1200px) 100vw, 50vw"
                style={{ width: "100%", height: "auto" }}
                alt="hero image"
                priority
              />
            </AppMotionImage>
          </div>
        </header>
      </Container>
      <HomeHeaderArrow />
    </div>
  );
};

const FeaturedSectionOne = async ({
  featuredProduct,
}: {
  featuredProduct: ProductType;
}) => {
  const imgUrl =
    process.env.NEXT_PUBLIC_PRODUCT_IMAGE_BASE_URL +
    "/" +
    featuredProduct?.featured_images?.desktop;

  return (
    <div className="overflow-hidden flex flex-col mt-28  bg-main-orange w-full rounded-lg py-10 sm:py-16 px-6 lg:flex-row">
      <div className="relative flex justify-center lg:flex-1">
        <AppMotionImage className="z-10 mx-auto w-[170px] md:w-[200px] lg:w-[300px] lg:absolute lg:top-11">
          <Image
            src={imgUrl}
            alt="EarPhone"
            className="relative"
            width={0}
            height={0}
            sizes="100vw"
            style={{ width: "100%", height: "auto" }}
          />
        </AppMotionImage>
        <AppMotionImage className="absolute w-[550px] -top-40 lg:w-[700px] lg:top-38">
          <Image
            src={CirclePatterns}
            alt="CirclePatterns"
            sizes="(max-width: 768px) 550px,
 700px"
          />
        </AppMotionImage>
      </div>
      <div className=" mt-10 flex flex-col items-center gap-6 lg:flex-1 lg:items-start">
        <h3 className=" text-app-h3 text-white max-w-[200px] text-center md:max-w-[300px] md:text-app-h1 lg:text-start">
          {featuredProduct?.name}
        </h3>
        <p className=" text-app-body text-white/75 font-thin text-center text-sm max-w-[340px] lg:text-start">
          {featuredProduct?.highlight}
        </p>
        <AppButton
          href={`/${featuredProduct?.categories.category_name.toLowerCase()}/${
            featuredProduct?.product_id
          }`}
          variant="secondary"
          className="z-20 h-12 w-40 hover:bg-[#4C4C4C] hover:border-[#4C4C4C] bg-black text-white text-xs">
          SEE PRODUCT
        </AppButton>
      </div>
    </div>
  );
};

const FeaturedSectionTwo = ({
  featuredProduct,
}: {
  featuredProduct: ProductType;
}) => {
  return (
    <div className="mt-6 md:mt-8 lg:mt-12 rounded-lg relative grid ">
      <div className="z-20 absolute grid gap-8 self-center left-5 xs:left-10 md:left-16">
        <h3 className="text-app-h4 xs:text-app-h3 text-black  text-center  lg:text-start">
          {featuredProduct?.name}
        </h3>
        <AppButton
          href={`/${featuredProduct?.categories.category_name.toLowerCase()}/${
            featuredProduct?.product_id
          }`}
          variant="secondary"
          className=" w-40 h-12 bg-transparent hover:bg-black">
          SEE PRODUCT
        </AppButton>
      </div>
      <AppMotionImage className="md:hidden">
        <Image
          alt="Speaker two"
          src={
            process.env.NEXT_PUBLIC_PRODUCT_IMAGE_BASE_URL +
            "/" +
            featuredProduct?.featured_images?.mobile
          }
          className="rounded-lg w-full z-10"
          width={0}
          height={0}
          sizes="100vw"
          style={{ width: "100%", height: "auto" }}
        />
      </AppMotionImage>
      <AppMotionImage className="hidden md:grid lg:hidden">
        <Image
          alt="Speaker two"
          src={
            process.env.NEXT_PUBLIC_PRODUCT_IMAGE_BASE_URL +
            "/" +
            featuredProduct?.featured_images?.tablet
          }
          className="rounded-lg w-full z-10"
          width={0}
          height={0}
          sizes="100vw"
          style={{ width: "100%", height: "auto" }}
        />
      </AppMotionImage>
      <AppMotionImage className="hidden lg:flex">
        <Image
          alt="Speaker two"
          src={
            process.env.NEXT_PUBLIC_PRODUCT_IMAGE_BASE_URL +
            "/" +
            featuredProduct?.featured_images?.desktop
          }
          className="rounded-lg w-full z-10"
          width={0}
          height={0}
          sizes="100vw"
          style={{ width: "100%", height: "auto" }}
        />
      </AppMotionImage>
    </div>
  );
};

const FeaturedSectionThree = ({
  featuredProduct,
}: {
  featuredProduct: ProductType;
}) => {
  return (
    <div className="mt-16 gap-6 flex flex-col sm:flex-row sm:gap-3  ">
      <AppMotionImage
        variant="opacityX"
        className="w-full sm:hidden lg:flex lg:flex-1">
        <Image
          src={
            process.env.NEXT_PUBLIC_PRODUCT_IMAGE_BASE_URL +
            "/" +
            featuredProduct?.featured_images?.mobile
          }
          alt="FeaturedEarphones"
          className="rounded-lg w-full"
          width={0}
          height={0}
          sizes="100vw"
          style={{ width: "100%", height: "auto" }}
        />
      </AppMotionImage>
      <AppMotionImage
        variant="opacityX"
        className="hidden sm:flex sm:flex-1 lg:hidden">
        <Image
          src={
            process.env.NEXT_PUBLIC_PRODUCT_IMAGE_BASE_URL +
            "/" +
            featuredProduct?.featured_images?.tablet
          }
          alt="FeaturedEarphonesSM"
          className="rounded-lg"
          width={0}
          height={0}
          sizes="100vw"
          style={{ width: "100%", height: "auto" }}
        />
      </AppMotionImage>
      <AppMotionComponent
        variant="opacityX"
        className=" flex flex-col gap-8 py-11 pl-8 rounded-lg bg-[#f1f1f1] sm:flex-1 sm:justify-center sm:pl-4 lg:pl-20 lg:max-w-[50%]">
        <h3 className="text-app-h5 xs:text-app-h4 text-black    lg:text-start">
          {featuredProduct?.name}
        </h3>
        <AppButton
          href={`/${featuredProduct?.categories.category_name.toLowerCase()}/${
            featuredProduct?.product_id
          }`}
          variant="secondary"
          className=" w-40 h-12 bg-transparent hover:bg-black">
          SEE PRODUCT
        </AppButton>
      </AppMotionComponent>
    </div>
  );
};

export default async function Index() {
  const { headerFeaturedProduct, featuredProducts } =
    await getFeaturedProducts();
  const featuredSectionOne = featuredProducts.find(
    (feat: FeaturedProductType) => feat?.section_number === 1
  );
  const featuredSectionTwo = featuredProducts.find(
    (feat: FeaturedProductType) => feat?.section_number === 2
  );
  const featuredSectionThree = featuredProducts.find(
    (feat: FeaturedProductType) => feat?.section_number === 3
  );
  return (
    <>
      <HomeHeaderSection headerFeaturedProduct={headerFeaturedProduct[0]} />

      <Container className=" mt-36">
        <MainProducts className=" my-32 md:my-44" />
        <FeaturedSectionOne featuredProduct={featuredSectionOne} />
        <FeaturedSectionTwo featuredProduct={featuredSectionTwo} />
        <FeaturedSectionThree featuredProduct={featuredSectionThree} />
        <FooterAbout className="my-24 md:my-44" />
      </Container>
    </>
  );
}
