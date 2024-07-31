"use client";
import React, { useEffect, useState } from "react";
import AppCartProducts from "./AppCartProducts";
import { AppButton } from "./AppButton";
import { numberToPrice } from "@/lib/utils";
import { AnimatePresence, motion, useAnimate } from "framer-motion";
import { Container } from "./Container";
import Image from "next/image";
import { CheckIcon } from "./public-images";

const CheckoutNumbers = ({
  label,
  children,
}: {
  label: string;
  children: number;
}) => {
  return (
    <div className="flex justify-between">
      <span className=" text-black/50 text-sm">{label}</span>
      <div className=" text-black font-semibold">{numberToPrice(children)}</div>
    </div>
  );
};

const useSubmitAnimation = (isSubmitted: boolean) => {
  const [scope, animate] = useAnimate();

  useEffect(() => {
    animate([[scope.current, { scale: [0, 1] }, { duration: 0.5 }]]);
  }, [isSubmitted]);

  return scope;
};

const AppSubmit = () => {
  const [isSubmitted, setIsSubmitted] = useState<boolean>(false);

  const handleSubmitOrder = () => {
    setIsSubmitted(true);
  };

  const scope = useSubmitAnimation(isSubmitted);

  return (
    <>
      <div className="bg-white rounded-lg p-6 w-full  flex flex-col gap-12  max-h-[650px] md:col-span-2">
        <h3 className=" text-app-h6">SUMMARY</h3>
        <AppCartProducts />
        <div>
          <CheckoutNumbers label="TOTAL">{2000}</CheckoutNumbers>
          <CheckoutNumbers label="SHIPPING">{59}</CheckoutNumbers>
          <CheckoutNumbers label="VAT(INCLUDED)">{35}</CheckoutNumbers>

          <div className="flex justify-between mt-4">
            <span className=" text-black/50 text-sm">GRAND TOTAL</span>
            <div className="font-semibold text-main-orange">
              {numberToPrice(2000)}
            </div>
          </div>
        </div>
        <AppButton
          onClick={handleSubmitOrder}
          variant="primary"
          className="w-full h-12 text-xs">
          CONTINUE & PAY
        </AppButton>
      </div>

      <AnimatePresence>
        {isSubmitted && (
          <Container>
            <div className="fixed z-50 inset-0 flex justify-center items-center ">
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="z-50 fixed inset-0 overflow-auto bg-black/40 flex"
                onClick={() =>
                  setIsSubmitted((prev: boolean) => !prev)
                }></motion.div>

              <motion.div
                initial={{ x: -100 }}
                animate={{ x: 0 }}
                exit={{ x: -100, opacity: 0 }}
                className="text-white absolute z-50 w-full max-w-[377px] min-h-[488px] top-20 bg-[#FFFFFF] rounded-lg p-8 flex flex-col gap-8">
                <div className="flex flex-col justify-between gap-4">
                  <div
                    ref={scope}
                    className=" flex justify-center items-center w-16 h-16 rounded-full bg-main-orange">
                    <Image src={CheckIcon} alt="Check" />
                  </div>

                  <h3 className=" text-app-h5 text-black uppercase">
                    Thank your for your order
                  </h3>
                  <p className=" text-black/50">
                    You will receive an email confirmation shortly.
                  </p>
                </div>
                <div>
                  <AppCartProducts className="bg-main-grey max-h-36 overflow-y-scroll rounded-t-lg py-3 pr-3" />
                  <div className="flex flex-col justify-between bg-black rounded-b-lg p-3">
                    <span className=" text-white/50">GRAND TOTAL</span>
                    <div className=" text-white font-semibold">
                      {numberToPrice(2000)}
                    </div>
                  </div>
                </div>
                <AppButton
                  href={"/"}
                  variant="primary"
                  className="w-full h-12 text-xs uppercase">
                  Back to home
                </AppButton>
              </motion.div>
            </div>
          </Container>
        )}
      </AnimatePresence>
    </>
  );
};

export default AppSubmit;
