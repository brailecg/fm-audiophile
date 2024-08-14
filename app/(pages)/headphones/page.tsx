import PageHeader from "@/components/PageHeader";
import React from "react";
import { ProductType } from "@/types/appTypes";

import { Container } from "@/components/Container";
import MainProducts from "@/components/MainProducts";
import FooterAbout from "@/components/FooterAbout";
import ProductView from "@/components/ProductView";
import { getProductsByCategory } from "@/utils/server";

const Headphones = async () => {
  const headphonesList = await getProductsByCategory({
    category: "headphones",
  });

  return (
    <div>
      <PageHeader>HEADPHONES</PageHeader>
      <Container className=" mt-16">
        <div className=" grid gap-24 lg:gap-40">
          {headphonesList.map((item: ProductType, idx: number) => (
            <React.Fragment key={item?.product_id}>
              <ProductView item={item} idx={idx} />
            </React.Fragment>
          ))}
        </div>
        <MainProducts className=" my-32 md:my-44" />
        <FooterAbout className="mb-24 md:mb-44 md:mt-44" />
      </Container>
    </div>
  );
};

export default Headphones;
