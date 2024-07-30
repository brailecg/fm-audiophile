import { AnimatePresence, motion } from "framer-motion";
import React, { Dispatch, useEffect } from "react";
import { Container } from "./Container";
import { AppButton } from "./AppButton";
import { numberToPrice } from "@/lib/utils";
import { useRouter } from "next/navigation";
import AppCartProducts from "./AppCartProducts";

const CartDialog = ({
  isCartModalOpen,
  setIsCartModalOpen,
}: {
  isCartModalOpen: boolean;
  setIsCartModalOpen: Dispatch<React.SetStateAction<boolean>>;
}) => {
  const router = useRouter();

  const handleUpdateCart = () => {
    setIsCartModalOpen(false);
    router.push("./checkout");
  };
  return (
    <AnimatePresence>
      {isCartModalOpen && (
        <Container>
          <div className="relative flex justify-center items-center ">
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
                <h3 className=" text-app-h4 text-black">
                  CART <span>(3)</span>
                </h3>
                <AppButton className=" text-black/50 hover:underline">
                  Remove All
                </AppButton>
              </div>
              <AppCartProducts from="cartDialog" />
              <div className="flex justify-between">
                <span className=" text-black/50">TOTAL</span>
                <div className=" text-black font-semibold">
                  {numberToPrice(2000)}
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
        </Container>
      )}
    </AnimatePresence>
  );
};

export default CartDialog;
