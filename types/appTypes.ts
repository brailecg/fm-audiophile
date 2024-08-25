import { StaticImageData } from "next/image";

export type Category = {
  category_name: string;
};
export type ProductImage = {
  mobile: string;
  tablet: string;
  desktop: string;
};

export type GalleryImage = {
  mobile: string[];
  tablet: string[];
  desktop: string[];
};

export type ProductSku = {
  product_qty: number;
  product_price: number;
  product_sku: string;
};

export type InTheBox = {
  name: string;
  units: string;
};

export type ProductType = {
  product_id: string;
  is_new_product: boolean;
  name: string;
  description: string;
  summary: string;
  in_the_box: InTheBox[];
  highlight: string;
  categories: Category;
  product_images: ProductImage;
  featured_images: ProductImage;
  products_skus: ProductSku;
  gallery_images: GalleryImage;
};

export type CartProductType = ProductType & {
  product_count: number;
};

export type FeaturedProductType = {
  product_id: string;
  section_number: number;
  featured_images: ProductImage;
};

export type MainProductType = {
  image: StaticImageData;
  name: string;
  link: string;
};
