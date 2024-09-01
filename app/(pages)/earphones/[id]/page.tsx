"use client";
import React, { useEffect, useState } from "react";

import { usePathname } from "next/navigation";
import { Container } from "@/components/Container";
import MainProducts from "@/components/MainProducts";
import FooterAbout from "@/components/FooterAbout";
import { getProductById } from "@/utils/server";
import { ProductType } from "@/types/appTypes";
import AppImageGallery from "@/components/AppImageGallery";
import AppProductDetails from "@/components/AppProductDetails";
import AppLoadingIcon from "@/components/AppLoadingIcon";

const ProductEarphone = () => {
  const [product, setProduct] = useState<ProductType>();
  const pathname = usePathname();
  const segments = pathname.split("/");
  const productId = segments[2];

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const productItem = await getProductById({ id: productId });

        setProduct(productItem[0]);
      } catch (error) {
        console.error("Failed to fetch product:", error);
      }
    };

    fetchProduct();
  }, []);

  return (
    <React.Fragment>
      {product ? (
        <Container classNameInner="grid gap-12">
          <AppProductDetails product={product} />
          <AppImageGallery
            productImages={[
              product?.gallery_images.desktop[0],
              product?.gallery_images.desktop[1],
              product?.gallery_images.desktop[2],
            ]}
          />
        </Container>
      ) : (
        <AppLoadingIcon />
      )}
      <Container>
        <MainProducts className=" my-32 md:my-44" />
        <FooterAbout className="mb-24 md:mb-44" />
      </Container>
    </React.Fragment>
  );
};

export default ProductEarphone;
