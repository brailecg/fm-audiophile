import { AppButton } from "@/components/AppButton";
import AppCartProducts from "@/components/AppCartProducts";
import AppLabeledInput from "@/components/AppLabeledInput";
import AppRadioBtn from "@/components/AppRadioBtn";
import AppSubmit from "@/components/AppSubmit";
import { Container } from "@/components/Container";
import { numberToPrice } from "@/lib/utils";

import React from "react";

const BillingInfo = () => {
  return (
    <div>
      <h5 className="  text-main-orange font-semibold mb-7">BILLING DETAILS</h5>
      <div className="grid sm:grid-cols-2 gap-6 w-full">
        <AppLabeledInput
          type="string"
          label="Name"
          placeholder="Braile Gawigawen"
          inputId="name"
        />
        <AppLabeledInput
          type="email"
          label="Email Address"
          placeholder="braile.c.gawigawen@gmail.com"
          inputId="email"
        />
        <AppLabeledInput
          type="tel"
          label="Phone Number"
          placeholder="+63 995 742 3132"
          inputId="phone"
        />
      </div>
    </div>
  );
};

const ShippingInfo = () => {
  return (
    <div className="">
      <h5 className="  text-main-orange font-semibold mb-7">SHIPPING INFO</h5>
      <div className="grid sm:grid-cols-2 gap-6 w-full">
        <AppLabeledInput
          className=" sm:col-span-2"
          type="string"
          label="Your Address"
          placeholder="Palatong, Tabion, Mankayan"
          inputId="address"
        />
        <AppLabeledInput
          type="string"
          label="ZIP code"
          placeholder="2608"
          inputId="zipcode"
        />
        <AppLabeledInput
          type="string"
          label="City/Province"
          placeholder="Mankayan"
          inputId="cityprovince"
        />
        <AppLabeledInput
          type="string"
          label="Country"
          placeholder="Philippines"
          inputId="country"
        />
      </div>
    </div>
  );
};

const PaymentDetails = () => {
  return (
    <div>
      <h5 className="  text-main-orange font-semibold mb-7">PAYMENT DETAILS</h5>
      <div>
        <div className="grid sm:grid-cols-2 gap-6 w-full mb-4">
          <p className="text-sm font-semibold mb-2">Payment Methods</p>
          <div className=" flex flex-col gap-4">
            <div className=" flex flex-col gap-4">
              <AppRadioBtn label="e-Money" id="emoney" name="paymentmethod" />
              <AppRadioBtn
                label="Cash on Delivery"
                id="cod"
                name="paymentmethod"
              />
            </div>
          </div>
        </div>
        <div className="grid sm:grid-cols-2 gap-6 w-full">
          <AppLabeledInput
            type="number"
            label="e-Money Nuber"
            placeholder="9957423132"
            inputId="emoneyNumber"
          />
          <AppLabeledInput
            type="number"
            label="e-Money Pin"
            placeholder="123456"
            inputId="emoneyPin"
          />
        </div>
      </div>
    </div>
  );
};

const Checkout = () => {
  return (
    <div className=" bg-[#F2F2F2] py-5">
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
          <div className="w-full flex flex-col gap-16">
            <BillingInfo />
            <ShippingInfo />
            <PaymentDetails />
          </div>
        </div>
        <AppSubmit />
      </Container>
    </div>
  );
};

export default Checkout;
