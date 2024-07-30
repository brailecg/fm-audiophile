import { AppButton } from "@/components/AppButton";
import AppCartProducts from "@/components/AppCartProducts";
import AppLabeledInput from "@/components/AppLabeledInput";
import AppRadioBtn from "@/components/AppRadioBtn";
import { Container } from "@/components/Container";
import { numberToPrice } from "@/lib/utils";

import React from "react";

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

const Checkout = () => {
  const handleSubmitPayment = () => [];

  return (
    <div className=" bg-[#F2F2F2]">
      <Container className=" py-5">
        <div className="">
          <AppButton className=" text-black/50" href={"./"}>
            Go back
          </AppButton>
        </div>
      </Container>
      <Container classNameInner="grid gap-8 lg:grid-cols-3">
        <div className="bg-white rounded-lg p-6 lg:col-span-2">
          <h3 className=" text-app-h3 mb-6">CHECKOUT</h3>
          <div className="w-full flex flex-col gap-16">
            <div>
              <h5 className="  text-main-orange font-semibold mb-7">
                BILLING DETAILS
              </h5>
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
            <div className="">
              <h5 className="  text-main-orange font-semibold mb-7">
                SHIPPING INFO
              </h5>
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
            <div>
              <h5 className="  text-main-orange font-semibold mb-7">
                PAYMENT DETAILS
              </h5>
              <div>
                <div className="grid sm:grid-cols-2 gap-6 w-full mb-4">
                  <p className="text-sm font-semibold mb-2">Payment Methods</p>
                  <div className=" flex flex-col gap-4">
                    <div className=" flex flex-col gap-4">
                      <AppRadioBtn
                        label="e-Money"
                        id="emoney"
                        name="paymentmethod"
                      />
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
          </div>
        </div>
        <div className="bg-white rounded-lg p-6 w-full lg:w-[360px] flex flex-col gap-12  max-h-[600px]">
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
            onClick={handleSubmitPayment}
            variant="primary"
            className="w-full h-12 text-xs">
            CONTINUE & PAY
          </AppButton>
        </div>
      </Container>
    </div>
  );
};

export default Checkout;
