import { AnimatePresence, motion } from "framer-motion";
import React, { Dispatch, useEffect } from "react";
import { AppButton } from "./AppButton";
import { numberToPrice } from "@/lib/utils";
import { useRouter } from "next/navigation";
import AppCartProducts from "./AppCartProducts";
import { useCartDataStore } from "@/app/store";

const CartDialog = ({
  isCartModalOpen,
  setIsCartModalOpen,
}: {
  isCartModalOpen: boolean;
  setIsCartModalOpen: Dispatch<React.SetStateAction<boolean>>;
}) => {
  const router = useRouter();

  const cartStoreData = useCartDataStore((state) => state.cartDataArray);

  const cartItemTotal = cartStoreData.reduce(
    (total, itemTotal) =>
      total + itemTotal.cart_item_qty * itemTotal.cart_item_price,
    0
  );

  const handleUpdateCart = () => {
    setIsCartModalOpen(false);
    router.push("/checkout");
  };
  return (
    <AnimatePresence>
      {isCartModalOpen && (
        <div className="absolute flex justify-center items-center w-[377px] min-h-[488px] right-0 sm:right-5">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="z-50 fixed inset-0 overflow-auto bg-black/40 flex"
            onClick={() =>
              setIsCartModalOpen((prev: boolean) => !prev)
            }></motion.div>

          <motion.div
            initial={{ x: -100 }}
            animate={{ x: 0 }}
            exit={{ x: -100, opacity: 0 }}
            className="text-white absolute z-50 w-full max-w-[377px] min-h-[488px] top-0 right-0 bg-[#FFFFFF] rounded-lg p-8 flex flex-col gap-8">
            <div className="flex justify-between">
              <h3 className=" text-app-h5 text-black">
                CART <span>({cartStoreData.length})</span>
              </h3>
              <AppButton className=" text-black/50 hover:underline">
                Remove All
              </AppButton>
            </div>
            <AppCartProducts cartStoreData={cartStoreData} from="cartDialog" />
            <div className="flex justify-between">
              <span className=" text-black/50">TOTAL</span>
              <div className=" text-black font-semibold">
                {numberToPrice(cartItemTotal)}
              </div>
            </div>
            <AppButton
              onClick={handleUpdateCart}
              variant="primary"
              className="w-full h-12">
              CHECKOUT
            </AppButton>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};

export default CartDialog;
