"use client";
import React, { useState, ChangeEvent } from "react";
import { AppButton } from "./AppButton";
import { AppInput } from "./AppInput";
import { cn } from "@/lib/utils";
import { useCartDataStore } from "@/app/store";
import { CartProductType } from "@/types/appTypes";
import { handleUpdateCart } from "./AppCartCounter";
import { handleCartDbUpdate } from "@/utils/server";

type ProductDetailType = {
  productCount: number;
  product: CartProductType;
};

const AppCounterInput = ({
  className,
  productDetail,
}: {
  className?: string;
  productDetail: CartProductType;
}) => {
  const cartStoreData = useCartDataStore((state) => state.cartDataArray);
  const updateCartStoreData = useCartDataStore(
    (state) => state.updateCartDataArray
  );

  const [itemCount, setItemCount] = useState<number>(
    productDetail?.cart_item_qty
  );

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    const parsedValue = parseInt(value, 10);

    if (value === "" || (!isNaN(parsedValue) && parsedValue >= 0)) {
      setItemCount(value === "" ? 0 : parsedValue);
    }
  };

  const handleCountChange = (action: string) => {
    let updatedItemCount: number = itemCount;
    if (action === "-") {
      updatedItemCount = itemCount > 0 ? itemCount - 1 : 0;
    } else if (action === "+") {
      updatedItemCount = itemCount + 1;
    }
    setItemCount(updatedItemCount);
    const updatedCartData = handleUpdateCart({
      product: productDetail,
      itemCount: updatedItemCount,
      cartStoreData,
      updateCartStoreData,
    });
    handleCartDbUpdate({
      cartId: updatedCartData.cartId,
      cartData: updatedCartData.newCartData,
    });
  };

  return (
    <div className={cn("flex-1 flex bg-main-grey", className)}>
      <AppButton
        disabled={itemCount === 0}
        onClick={() => handleCountChange("-")}
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
        onClick={() => handleCountChange("+")}
        className="flex-1 border border-main-grey active:bg-light-grey">
        +
      </AppButton>
    </div>
  );
};

export default AppCounterInput;
