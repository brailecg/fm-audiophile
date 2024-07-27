import { StaticImageData } from "next/image";

export type ProductType = {
  id: string;
  isNewProduct: boolean;
  name: string;
  description: string;
  image: StaticImageData;
};

export type MainProductType = {
  image: StaticImageData;
  name: string;
  link: string;
};
