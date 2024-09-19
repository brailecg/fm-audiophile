"use client";
import React from "react";
import AppCartProducts from "./AppCartProducts";
import { AppButton } from "./AppButton";
import { numberToPrice } from "@/lib/utils";
import { useCartDataStore } from "@/app/store";
import { getCartItemTotal } from "./CartDialog";
import { CartProductType } from "@/types/appTypes";

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

const AppSubmit = ({
  cartStoreData,
  cartItemTotal,
  getShippingFee,
  getVatValue,
  grandTotal,
}: {
  cartStoreData: CartProductType[];
  cartItemTotal: number;
  getShippingFee: number;
  getVatValue: number;
  grandTotal: number;
}) => {
  return (
    <>
      <div className="bg-white rounded-lg p-6 w-full  flex flex-col gap-12  max-h-[650px] md:col-span-2">
        <h3 className=" text-app-h6">SUMMARY</h3>
        <AppCartProducts cartStoreData={cartStoreData} />
        <div>
          <CheckoutNumbers label="TOTAL">{cartItemTotal}</CheckoutNumbers>
          <CheckoutNumbers label="SHIPPING">{getShippingFee}</CheckoutNumbers>
          <CheckoutNumbers label="VAT(INCLUDED)">{getVatValue}</CheckoutNumbers>

          <div className="flex justify-between mt-4">
            <span className=" text-black/50 text-sm">GRAND TOTAL</span>
            <div className="font-semibold text-main-orange">
              {numberToPrice(grandTotal)}
            </div>
          </div>
        </div>
        <AppButton
          // onClick={handleSubmitOrder}
          form="checkout-form"
          variant="primary"
          className="w-full h-12 text-xs">
          CONTINUE & PAY
        </AppButton>
      </div>
    </>
  );
};

export default AppSubmit;
