import React, { useEffect, useState } from "react";
import Image from "next/image";
import { AppButton } from "./AppButton";
import { CartIcon } from "./public-images";
import CartDialog from "./CartDialog";
import { Container } from "./Container";
import { useCartDataStore } from "@/app/store";
import { getCartItemByProfileId } from "@/utils/server";

const CartComponent = () => {
  const [isCartModalOpen, setIsCartModalOpen] = useState<boolean>(false);
  const cartStoreData = useCartDataStore((state) => state.cartDataArray);
  const udpateCartData = useCartDataStore((state) => state.updateCartDataArray);

  // do a use effect to get all the cart from db
  let updateCartCalled = false;
  useEffect(() => {
    async function callCartApi() {
      if (!updateCartCalled) {
        const getCart = await getCartItemByProfileId({
          profileId: "70ab2eb7-ba5e-4ce7-b126-ef9ee14f3ee1",
        });
        console.log({ getCart });
        udpateCartData(getCart[0].cart_items);
        updateCartCalled = true;
        // get all cart data for this user
      }
    }
    callCartApi();
  }, []);
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
