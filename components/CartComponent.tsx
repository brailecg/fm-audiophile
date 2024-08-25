import React, { useState } from "react";
import Image from "next/image";
import { AppButton } from "./AppButton";
import { CartIcon } from "./public-images";
import CartDialog from "./CartDialog";
import { Container } from "./Container";
import { useCartDataStore } from "@/app/store";

const CartComponent = () => {
  const currentCartData = useCartDataStore((state) => state.cartDataArray);
  const [isCartModalOpen, setIsCartModalOpen] = useState<boolean>(false);
  const cartStoreData = useCartDataStore((state) => state.cartDataArray);

  return (
    <React.Fragment>
      <div className="relative flex justify-end ">
        <div className=" absolute bg-main-orange size-5 rounded-full flex justify-center items-center -top-2 -right-2 sm:-top-4 sm:-right-4 text-xs">
          {cartStoreData.length}
        </div>
        <AppButton onClick={() => setIsCartModalOpen((prev) => !prev)}>
          <Image src={CartIcon} alt="cart icon" />
        </AppButton>
      </div>
      <Container className="relative " classNameInner="absolute">
        <CartDialog
          isCartModalOpen={isCartModalOpen}
          setIsCartModalOpen={setIsCartModalOpen}
        />
      </Container>
    </React.Fragment>
  );
};

export default CartComponent;
