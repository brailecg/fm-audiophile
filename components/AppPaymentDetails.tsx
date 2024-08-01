"use client";
import React, { useState } from "react";
import AppRadioBtn from "./AppRadioBtn";
import AppLabeledInput from "./AppLabeledInput";
import { AnimatePresence, motion } from "framer-motion";

const AppPaymentDetails = () => {
  const [pymtMethod, setPymtMethod] = useState<string>("cod");
  return (
    <div>
      <h5 className="  text-main-orange font-semibold mb-7">PAYMENT DETAILS</h5>
      <div>
        <div className="grid sm:grid-cols-2 gap-6 w-full mb-4">
          <p className="text-sm font-semibold mb-2">Payment Methods</p>
          <div className=" flex flex-col gap-4">
            <div className=" flex flex-col gap-4">
              <AppRadioBtn
                onChange={() => setPymtMethod("emoney")}
                value="emoney"
                label="e-Money"
                id="emoney"
                name="paymentmethod"
              />
              <AppRadioBtn
                defaultChecked
                onChange={() => setPymtMethod("cod")}
                value="cod"
                label="Cash on Delivery"
                id="cod"
                name="paymentmethod"
              />
            </div>
          </div>
        </div>
        <AnimatePresence>
          {pymtMethod === "emoney" && (
            <motion.div
              initial={{ opacity: 0, y: 100 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 100 }}
              className="grid sm:grid-cols-2 gap-6 w-full">
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
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default AppPaymentDetails;
