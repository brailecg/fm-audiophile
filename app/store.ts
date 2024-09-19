import { create } from "zustand";
import { CartProductType } from "@/types/appTypes";

type CartDataState = {
  cartDataArray: CartProductType[];
};

type UpdateCartAction = {
  updateCartDataArray: (cartDataArray: CartDataState["cartDataArray"]) => void;
};

export const useCartDataStore = create<CartDataState & UpdateCartAction>(
  (set) => ({
    cartDataArray: [],
    updateCartDataArray: (cartDataArray) =>
      set(() => ({ cartDataArray: cartDataArray })),
  })
);

type PaymentDetailType = {
  name?: string;
  paymentType?: CodDetailType | EmoneyDetailType;
};
type CodDetailType = {
  name: string;
};
type EmoneyDetailType = {
  name: string;
  emoneyNumber: number;
  emoneyPin: string;
};

type UpdatePaymentDetailsType = {
  updatePaymentDetails: (pymntDetails: PaymentDetailType) => void;
};

export const usePaymentDetailsStore = create<
  PaymentDetailType & UpdatePaymentDetailsType
>((set) => ({
  paymentDetails: {},
  updatePaymentDetails: (paymntDetails) => set(() => paymntDetails),
}));
