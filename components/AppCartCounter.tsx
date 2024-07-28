"use client";
import React, { useState, ChangeEvent } from "react";
import { AppButton } from "./AppButton";
import { AppInput } from "./AppInput";
import { cn } from "@/lib/utils";

export const CounterInput = ({ className }: { className?: string }) => {
  const [itemCount, setItemCount] = useState<number>(1);

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    const parsedValue = parseInt(value, 10);

    if (value === "" || (!isNaN(parsedValue) && parsedValue >= 0)) {
      setItemCount(value === "" ? 0 : parsedValue);
    }
  };

  return (
    <div className={cn("flex-1 flex bg-main-grey", className)}>
      <AppButton
        disabled={itemCount === 0}
        onClick={() => setItemCount(itemCount > 0 ? itemCount - 1 : 0)}
        className="flex-1 border border-main-grey active:bg-light-grey">
        -
      </AppButton>
      <AppInput
        min={0}
        type="number"
        className="flex-1 text-center"
        value={itemCount}
        onChange={handleInputChange}
      />
      <AppButton
        onClick={() => setItemCount(itemCount + 1)}
        className="flex-1 border border-main-grey active:bg-light-grey">
        +
      </AppButton>
    </div>
  );
};

const AppCartCounter = () => {
  return (
    <div className="flex gap-4 xs:max-w-[75%] md:max-w-full">
      <CounterInput />
      <AppButton variant="primary" className="text-white py-4 px-8 flex-1">
        ADD TO CART
      </AppButton>
    </div>
  );
};

export default AppCartCounter;
