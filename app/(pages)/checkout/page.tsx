"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion, useAnimate } from "framer-motion";
import { useForm, Controller, Control } from "react-hook-form";

import { AppButton } from "@/components/AppButton";
import AppLabeledInput from "@/components/AppLabeledInput";
import AppRadioBtn from "@/components/AppRadioBtn";
import AppSubmit from "@/components/AppSubmit";
import { Container } from "@/components/Container";
import { CheckIcon } from "@/components/public-images";
import AppCartProducts from "@/components/AppCartProducts";
import { numberToPrice } from "@/lib/utils";
import { useCartDataStore } from "@/app/store";
import { getCartItemTotal } from "@/components/CartDialog";
import { handleDeleteSubmittedCart, handleSubmitOrder } from "@/utils/server";
import Loader from "@/components/Loader";

const BillingInfo = ({ control }: { control: Control }) => {
  return (
    <div>
      <h5 className="  text-main-orange font-semibold mb-7">BILLING DETAILS</h5>
      <div className="grid sm:grid-cols-2 gap-6 w-full">
        <Controller
          name="name"
          defaultValue={"John Doe"}
          control={control}
          render={({ field: { onChange, value } }) => (
            <AppLabeledInput
              value={value}
              onChange={onChange}
              type="string"
              required
              label="Name"
              placeholder="John Doe"
              inputId="name"
            />
          )}
        />
        <Controller
          defaultValue={"john.doe@gmail.com"}
          name="email"
          control={control}
          render={({ field: { onChange, value } }) => (
            <AppLabeledInput
              value={value}
              onChange={onChange}
              type="email"
              required
              label="Email Address"
              placeholder="john.doe@gmail.com"
              inputId="email"
            />
          )}
        />
        <Controller
          name="phone"
          control={control}
          render={({ field: { onChange } }) => (
            <AppLabeledInput
              onChange={onChange}
              type="tel"
              label="Phone Number"
              placeholder="+639951234567"
              inputId="phone"
            />
          )}
        />
      </div>
    </div>
  );
};

const ShippingInfo = ({ control }: { control: Control }) => {
  return (
    <div className="">
      <h5 className="  text-main-orange font-semibold mb-7">SHIPPING INFO</h5>
      <div className="grid sm:grid-cols-2 gap-6 w-full">
        <Controller
          name="address"
          defaultValue={"Baguio"}
          control={control}
          render={({ field: { onChange, value } }) => (
            <AppLabeledInput
              value={value}
              required
              onChange={onChange}
              className=" sm:col-span-2"
              type="string"
              label="Your Address"
              placeholder="Palatong, Tabion, Mankayan"
              inputId="address"
            />
          )}
        />
        <Controller
          name="zipcode"
          defaultValue={"2600"}
          control={control}
          render={({ field: { onChange, value } }) => (
            <AppLabeledInput
              value={value}
              required
              onChange={onChange}
              type="string"
              label="ZIP code"
              placeholder="2608"
              inputId="zipcode"
            />
          )}
        />
        <Controller
          name="cityprovince"
          defaultValue={"Baguio"}
          control={control}
          render={({ field: { onChange, value } }) => (
            <AppLabeledInput
              value={value}
              required
              onChange={onChange}
              type="string"
              label="City/Province"
              placeholder="Mankayan"
              inputId="cityprovince"
            />
          )}
        />
        <Controller
          name="country"
          defaultValue={"Philippines"}
          control={control}
          render={({ field: { onChange, value } }) => (
            <AppLabeledInput
              value={value}
              required
              onChange={onChange}
              type="string"
              label="Country"
              placeholder="Philippines"
              inputId="country"
            />
          )}
        />
      </div>
    </div>
  );
};

const PaymentDetails = ({ control }: { control: Control }) => {
  const [pymtMethod, setPymtMethod] = useState<string>("cod");

  return (
    <div>
      <h5 className="  text-main-orange font-semibold mb-7">PAYMENT DETAILS</h5>
      <div>
        <div className="grid sm:grid-cols-2 gap-6 w-full mb-4">
          <p className="text-sm font-semibold mb-2">Payment Methods</p>
          <div className=" flex flex-col gap-4">
            <div className=" flex flex-col gap-4">
              <Controller
                name="paymentmethod"
                defaultValue="cod"
                control={control}
                render={({ field: { onChange, value } }) => (
                  <>
                    <AppRadioBtn
                      onChange={(e) => {
                        onChange(e.target.value);
                        setPymtMethod("emoney");
                      }}
                      checked={value === "emoney"}
                      label="e-Money"
                      id="emoney"
                      value="emoney"
                      name="paymentmethod"
                    />
                    <AppRadioBtn
                      onChange={(e) => {
                        onChange(e.target.value);
                        setPymtMethod("cod");
                      }}
                      checked={value === "cod"}
                      label="Cash on Delivery"
                      id="cod"
                      value="cod"
                      name="paymentmethod"
                    />
                  </>
                )}
              />
            </div>
          </div>
        </div>

        {pymtMethod === "emoney" ? (
          <AnimatePresence>
            <motion.div
              initial={{ opacity: 0, y: 100 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 100 }}
              className="grid sm:grid-cols-2 gap-6 w-full">
              <Controller
                name="emoneyNumber"
                defaultValue={"123456"}
                control={control}
                render={({ field: { onChange, value } }) => (
                  <AppLabeledInput
                    value={value}
                    required
                    onChange={onChange}
                    type="number"
                    label="e-Money Number"
                    placeholder="9957423132"
                    inputId="emoneyNumber"
                  />
                )}
              />
              <Controller
                name="emoneyPin"
                control={control}
                render={({ field: { onChange } }) => (
                  <AppLabeledInput
                    required
                    onChange={onChange}
                    type="number"
                    label="e-Money Pin"
                    placeholder="123456"
                    inputId="emoneyPin"
                  />
                )}
              />
            </motion.div>
          </AnimatePresence>
        ) : (
          ""
        )}
      </div>
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

const Checkout = () => {
  const [isSubmitted, setIsSubmitted] = useState<boolean>(false);
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);

  const cartStoreData = useCartDataStore((state) => state.cartDataArray);
  const cartItemTotal = getCartItemTotal(
    cartStoreData !== undefined ? cartStoreData : []
  );
  const getShippingFee = 59; // TODO: create how shipping is being computed
  const getVatValue = 25; // TODO: create how vat is being computed
  const grandTotal = cartItemTotal + getShippingFee + getVatValue;

  const scope = useSubmitAnimation(isSubmitted);

  const {
    handleSubmit,

    formState: { errors },
    control,
  } = useForm();
  const onSubmit = async (data: any) => {
    setIsSubmitting(true);
    data = {
      ...data,
      order_fees: { vat: getVatValue, shippingFee: getShippingFee },
      order_items_total: cartItemTotal,
      order_grand_total: grandTotal,
    };

    const handleOrder = await handleSubmitOrder({
      profileId: "70ab2eb7-ba5e-4ce7-b126-ef9ee14f3ee1",
      cartData: cartStoreData,
      orderDetails: data,
    });
    if (handleOrder[0].order_id) {
      const handleDeletedCart = await handleDeleteSubmittedCart(
        cartStoreData[0]?.cart_id
      );

      console.log({ handleDeletedCart });
    }
    setIsSubmitting(false);
    setIsSubmitted(true);
  };

  return (
    <div className=" bg-[#F2F2F2] py-5">
      {isSubmitting && (
        <>
          <div className="absolute z-20 inset-0 bg-white opacity-50 pointer-events-none"></div>
          <Loader />
        </>
      )}
      <Container className=" mb-5">
        <div className="">
          <AppButton className=" text-black/50" href={"./"}>
            Go back
          </AppButton>
        </div>
      </Container>
      <Container classNameInner="grid gap-8 md:grid-cols-5 ">
        <div className="bg-white rounded-lg p-6 md:col-span-3 ">
          <h3 className=" text-app-h3 mb-6">CHECKOUT</h3>
          <form
            onSubmit={handleSubmit(onSubmit)}
            id="checkout-form"
            className="w-full flex flex-col gap-16">
            <BillingInfo control={control} />
            <ShippingInfo control={control} />
            <PaymentDetails control={control} />
          </form>
        </div>
        <AppSubmit
          cartStoreData={cartStoreData}
          cartItemTotal={cartItemTotal}
          getShippingFee={getShippingFee}
          getVatValue={getVatValue}
          grandTotal={grandTotal}
        />
      </Container>

      {isSubmitted && (
        <AnimatePresence>
          <Container>
            <div className="fixed z-50 inset-0 flex justify-center items-center overflow-y-scroll">
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
                  <AppCartProducts
                    cartStoreData={cartStoreData}
                    className="bg-main-grey max-h-36 overflow-y-scroll rounded-t-lg py-3 pr-3"
                  />
                  <div className="flex flex-col justify-between bg-black rounded-b-lg p-3">
                    <span className=" text-white/50">GRAND TOTAL</span>
                    <div className=" text-white font-semibold">
                      {numberToPrice(grandTotal)}
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
        </AnimatePresence>
      )}
    </div>
  );
};

export default Checkout;
