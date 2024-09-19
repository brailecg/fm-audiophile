"use client";
import React, { ChangeEvent, useState } from "react";
import AppRadioBtn from "./AppRadioBtn";
import AppLabeledInput from "./AppLabeledInput";
import { AnimatePresence, motion } from "framer-motion";
import { usePaymentDetailsStore } from "@/app/store";

const AppPaymentDetails = () => {
  const [pymtMethod, setPymtMethod] = useState<string>("cod");

  const paymentDetails = usePaymentDetailsStore((state) => state);
  const updatePymtDetails = usePaymentDetailsStore(
    (state) => state.updatePaymentDetails
  );

  const handleSetPymtMethod = (e: ChangeEvent<HTMLInputElement>) => {
    setPymtMethod(e.target.value);
  };

  const handleEmoneyInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    console.log({ val: e.target.value });
  };

  return (
    <div>
      <h5 className="  text-main-orange font-semibold mb-7">PAYMENT DETAILS</h5>
      <div>
        <div className="grid sm:grid-cols-2 gap-6 w-full mb-4">
          <p className="text-sm font-semibold mb-2">Payment Methods</p>
          <div className=" flex flex-col gap-4">
            <div className=" flex flex-col gap-4">
              <AppRadioBtn
                onChange={handleSetPymtMethod}
                value="emoney"
                label="e-Money"
                id="emoney"
                name="paymentmethod"
              />
              <AppRadioBtn
                defaultChecked
                onChange={handleSetPymtMethod}
                value="cod"
                label="Cash on Delivery"
                id="cod"
                name="paymentmethod"
              />
            </div>
          </div>
        </div>

        {pymtMethod === "emoney" && (
          <AnimatePresence>
            <motion.div
              initial={{ opacity: 0, y: 100 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 100 }}
              className="grid sm:grid-cols-2 gap-6 w-full">
              <AppLabeledInput
                onChange={handleEmoneyInputChange}
                type="number"
                label="e-Money Number"
                placeholder="9957423132"
                inputId="emoneyNumber"
              />
              <AppLabeledInput
                onChange={handleEmoneyInputChange}
                type="number"
                label="e-Money Pin"
                placeholder="123456"
                inputId="emoneyPin"
              />
            </motion.div>
          </AnimatePresence>
        )}
      </div>
    </div>
  );
};

export default AppPaymentDetails;
