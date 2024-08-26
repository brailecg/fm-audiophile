"use client";
import React, { useState, ChangeEvent } from "react";
import { AppButton } from "./AppButton";
import { AppInput } from "./AppInput";
import { cn } from "@/lib/utils";
import { useCartDataStore } from "@/app/store";
import { CartProductType, ProductType } from "@/types/appTypes";

export const handleUpdateCart = ({
  product,
  itemCount,
  cartStoreData,
  updateCartStoreData,
}: {
  product: ProductType;
  itemCount: number;
  cartStoreData: CartProductType[];
  updateCartStoreData: (cartStoreData: CartProductType[]) => void;
}) => {
  const cartProduct: CartProductType = {
    ...(product as ProductType),
    product_count: itemCount,
  };

  const checkIfItemInCart = cartStoreData.find(
    (item) => item.product_id === cartProduct.product_id
  );

  if (checkIfItemInCart) {
    // if item is already in cart, replace it with the update cart with the updated item count
    const newCartData = cartStoreData.flatMap((item) => {
      if (item.product_id === cartProduct.product_id) {
        if (cartProduct.product_count !== 0) return cartProduct;
        return [];
      } else {
        return item;
      }
    });

    updateCartStoreData(newCartData as unknown as CartProductType[]);
  } else {
    // if item is not in cart, just add it to the existing cart
    updateCartStoreData([...cartStoreData, cartProduct]);
  }

  // do the server action here:
};

const AppCartCounter = ({ product }: { product: ProductType }) => {
  const [itemCount, setItemCount] = useState<number>(1);
  const cartStoreData = useCartDataStore((state) => state.cartDataArray);
  const updateCartStoreData = useCartDataStore(
    (state) => state.updateCartDataArray
  );

  const handleAddToCart = () => {
    handleUpdateCart({
      product,
      itemCount,
      cartStoreData,
      updateCartStoreData,
    });
  };
  return (
    <div className="flex gap-4 xs:max-w-[75%] md:max-w-full">
      <CounterInput itemCount={itemCount} setItemCount={setItemCount} />
      <AppButton
        onClick={handleAddToCart}
        variant="primary"
        className="text-white py-4 px-8 flex-1">
        ADD TO CART
      </AppButton>
    </div>
  );
};

export const CounterInput = ({
  className,
  itemCount,
  setItemCount,
}: {
  itemCount: number;
  setItemCount: React.Dispatch<React.SetStateAction<number>>;
  className?: string;
}) => {
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

export default AppCartCounter;
